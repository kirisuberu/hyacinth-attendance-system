import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, getDocs, query, where, doc, getDoc, setDoc, orderBy, limit, updateDoc, deleteDoc } from 'firebase/firestore';

// Time region offset in hours from UTC
const TIME_REGION_OFFSETS = {
  'PHT': 8,   // UTC+8
  'CST': -6,  // UTC-6
  'EST': -5   // UTC-5
};

// Convert time from one region to another
const convertTimeRegion = (time, fromRegion, toRegion) => {
  if (!time || !fromRegion || !toRegion || fromRegion === toRegion) {
    return time;
  }

  const [hours, minutes] = time.split(':').map(Number);
  
  // Calculate the time difference between regions
  const fromOffset = TIME_REGION_OFFSETS[fromRegion] || 0;
  const toOffset = TIME_REGION_OFFSETS[toRegion] || 0;
  const hourDifference = fromOffset - toOffset;
  
  // Apply the offset
  let newHours = (hours + hourDifference) % 24;
  if (newHours < 0) newHours += 24;
  
  return `${newHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

const calculateAttendanceStatus = (timeIn, actualTime, type, timeRegion = 'PHT') => {
  console.log('Calculating attendance status:', { timeIn, type, actualTime: actualTime.toISOString(), timeRegion });
  
  // Validate timeRegion parameter
  if (!TIME_REGION_OFFSETS[timeRegion]) {
    console.warn(`Invalid time region: ${timeRegion}, defaulting to PHT`);
    timeRegion = 'PHT';
  }
  
  if (!timeIn) {
    console.log('No schedule time provided, using default status');
    return {
      status: 'No Schedule',
      timeDiff: {
        hours: 0,
        minutes: 0,
        totalMinutes: 0
      }
    };
  }

  // Helper function to format time difference
  const formatTimeDiff = (diffMins) => {
    const hours = Math.floor(Math.abs(diffMins) / 60);
    const minutes = Math.abs(diffMins) % 60;
    return {
      hours,
      minutes,
      totalMinutes: Math.abs(diffMins) * (diffMins < 0 ? -1 : 1)
    };
  };

  // Create a local date object for comparison
  const localDate = new Date(actualTime);
  
  // Parse schedule time
  const [scheduleHours, scheduleMinutes] = timeIn.split(':').map(Number);
  
  // Create a date object for the schedule time on the same day as the actual time
  const scheduleDate = new Date(localDate);
  scheduleDate.setHours(scheduleHours, scheduleMinutes, 0, 0);
  
  // Calculate the initial time difference in minutes
  let diffMinutes = Math.round((localDate.getTime() - scheduleDate.getTime()) / (1000 * 60));
  
  console.log('Initial time comparison:', {
    localDate: localDate.toISOString(),
    scheduleDate: scheduleDate.toISOString(),
    diffMinutes
  });

  // Adjust for overnight shifts and day boundaries
  if (type === 'IN') {
    // Handle late night shifts (11 PM - 6 AM)
    if (scheduleHours >= 22 || scheduleHours <= 6) {
      // If actual time is in the morning and schedule is late night,
      // the schedule might be from the previous day
      if (localDate.getHours() <= 12 && scheduleHours >= 22) {
        scheduleDate.setDate(scheduleDate.getDate() - 1);
        diffMinutes = Math.round((localDate.getTime() - scheduleDate.getTime()) / (1000 * 60));
        console.log('Adjusted for late night shift (previous day):', {
          scheduleDate: scheduleDate.toISOString(),
          diffMinutes
        });
      }
    }
    
    // Handle day shift users timing in early
    // If the calculated difference is very large (negative and more than 10 hours),
    // it's likely a calculation error
    if (diffMinutes < -600) { // More than 10 hours early seems wrong
      console.log('Detected unusually large negative time difference, recalculating');
      
      // Reset to same day comparison
      const correctScheduleDate = new Date(localDate);
      correctScheduleDate.setHours(scheduleHours, scheduleMinutes, 0, 0);
      
      // If this makes the schedule time in the future, it's likely early arrival for today's shift
      if (correctScheduleDate > localDate) {
        diffMinutes = Math.round((localDate.getTime() - correctScheduleDate.getTime()) / (1000 * 60));
        console.log('Corrected time difference for early arrival:', diffMinutes);
      }
    }
    
    // Handle case where the difference is unusually large positive (more than 10 hours late)
    if (diffMinutes > 600) {
      console.log('Detected unusually large positive time difference, recalculating');
      
      // Try comparing with next day's schedule
      const nextDaySchedule = new Date(scheduleDate);
      nextDaySchedule.setDate(nextDaySchedule.getDate() + 1);
      
      const nextDayDiff = Math.round((localDate.getTime() - nextDaySchedule.getTime()) / (1000 * 60));
      
      // If this makes more sense (absolute difference is smaller), use it
      if (Math.abs(nextDayDiff) < Math.abs(diffMinutes)) {
        diffMinutes = nextDayDiff;
        console.log('Using next day comparison:', diffMinutes);
      }
    }
    
    // Apply time-in status rules
    const timeDiff = formatTimeDiff(diffMinutes);
    
    // Early: 60 mins or more before schedule time
    if (diffMinutes <= -60) {
      return {
        status: 'Early',
        timeDiff
      };
    }
    
    // On Time: Between 60 mins before and up to 5 minutes after schedule time (inclusive)
    if (diffMinutes > -60 && diffMinutes <= 5) {
      return {
        status: 'On Time',
        timeDiff
      };
    }
    
    // Late: Any time after 5 minutes past schedule time
    return {
      status: 'Late',
      timeDiff
    };
  } 
  else { // Time-out logic
    // For time-out, we'll calculate based on the expected shift duration
    // This is a placeholder - the actual implementation will depend on how you want to handle time-outs
    // with the new shift duration-based model
    
    // Default to "On Time" for time-out
    const timeDiff = formatTimeDiff(diffMinutes);
    return {
      status: 'On Time',
      timeDiff
    };
  }
};

const recordAttendance = async (userId, type, notes = '') => {
  try {
    console.log(`Recording ${type} attendance for user ${userId}`);
    
    // Get the user document to access their name, email, and schedule
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      throw new Error('User not found');
    }
    
    const userData = userDoc.data();
    const { name, email, shifts } = userData;
    
    if (!name || !email) {
      throw new Error('User data is incomplete');
    }
    
    // Get the current date and time
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    console.log(`Current day: ${currentDay}, time: ${currentHour}:${currentMinute}`);
    
    // Find the appropriate shift for the current day
    let matchingShift = null;
    let timeRegion = 'PHT'; // Default time region
    
    if (shifts && Object.keys(shifts).length > 0) {
      // Convert current time to minutes for easier comparison
      const currentTimeInMinutes = currentHour * 60 + currentMinute;
      
      // Find shifts for the current day
      const todayShifts = Object.values(shifts).filter(shift => 
        shift.day.toLowerCase() === currentDay
      );
      
      console.log(`Found ${todayShifts.length} shifts for today:`, todayShifts);
      
      if (todayShifts.length > 0) {
        // For time-in, find the closest upcoming shift
        if (type === 'IN') {
          // Sort by how close the shift is to current time
          todayShifts.sort((a, b) => {
            const [aHour, aMinute] = a.timeIn.split(':').map(Number);
            const [bHour, bMinute] = b.timeIn.split(':').map(Number);
            
            const aTimeInMinutes = aHour * 60 + aMinute;
            const bTimeInMinutes = bHour * 60 + bMinute;
            
            // Calculate time difference (negative if shift is in the past)
            const aDiff = aTimeInMinutes - currentTimeInMinutes;
            const bDiff = bTimeInMinutes - currentTimeInMinutes;
            
            // If both shifts are in the future, choose the closest one
            if (aDiff >= -60 && bDiff >= -60) {
              return aDiff - bDiff;
            }
            
            // If one shift is in the future and one is in the past, choose the future one
            if (aDiff >= -60) return -1;
            if (bDiff >= -60) return 1;
            
            // If both shifts are in the past, choose the most recent one
            return bDiff - aDiff;
          });
          
          // Select the first shift after sorting
          matchingShift = todayShifts[0];
        } 
        // For time-out, find the shift that the user is currently in
        else {
          // Get the latest attendance record to find which shift they timed in for
          const attendanceRef = collection(db, 'attendance');
          const q = query(
            attendanceRef,
            where('userId', '==', userId),
            where('type', '==', 'IN'),
            orderBy('timestamp', 'desc'),
            limit(1)
          );
          
          const querySnapshot = await getDocs(q);
          
          if (!querySnapshot.empty) {
            const latestTimeIn = querySnapshot.docs[0].data();
            
            // If we have the shift information in the time-in record, use it
            if (latestTimeIn.shiftId && shifts[latestTimeIn.shiftId]) {
              matchingShift = shifts[latestTimeIn.shiftId];
              console.log('Found matching shift from latest time-in record:', matchingShift);
            } 
            // Otherwise, try to match based on the time
            else {
              // Find the shift that best matches the time-in record
              const timeInTimestamp = latestTimeIn.timestamp.toDate();
              const timeInHour = timeInTimestamp.getHours();
              const timeInMinute = timeInTimestamp.getMinutes();
              const timeInMinutes = timeInHour * 60 + timeInMinute;
              
              // Find the shift with the closest start time to when they timed in
              todayShifts.sort((a, b) => {
                const [aHour, aMinute] = a.timeIn.split(':').map(Number);
                const [bHour, bMinute] = b.timeIn.split(':').map(Number);
                
                const aTimeInMinutes = aHour * 60 + aMinute;
                const bTimeInMinutes = bHour * 60 + bMinute;
                
                return Math.abs(aTimeInMinutes - timeInMinutes) - Math.abs(bTimeInMinutes - timeInMinutes);
              });
              
              matchingShift = todayShifts[0];
              console.log('Found best matching shift based on time-in timestamp:', matchingShift);
            }
          }
        }
      }
      
      // If no matching shift found for today, check if there's a shift from yesterday that might be ending now
      if (!matchingShift && type === 'OUT') {
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayDay = yesterday.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
        
        const yesterdayShifts = Object.values(shifts).filter(shift => 
          shift.day.toLowerCase() === yesterdayDay
        );
        
        console.log(`Found ${yesterdayShifts.length} shifts for yesterday:`, yesterdayShifts);
        
        if (yesterdayShifts.length > 0) {
          // Get the latest attendance record
          const attendanceRef = collection(db, 'attendance');
          const q = query(
            attendanceRef,
            where('userId', '==', userId),
            where('type', '==', 'IN'),
            orderBy('timestamp', 'desc'),
            limit(1)
          );
          
          const querySnapshot = await getDocs(q);
          
          if (!querySnapshot.empty) {
            const latestTimeIn = querySnapshot.docs[0].data();
            
            // If we have the shift information in the time-in record, use it
            if (latestTimeIn.shiftId && shifts[latestTimeIn.shiftId]) {
              matchingShift = shifts[latestTimeIn.shiftId];
              console.log('Found matching shift from latest time-in record (yesterday):', matchingShift);
            }
          }
        }
      }
    }
    
    // If we found a matching shift, use its time region
    if (matchingShift) {
      timeRegion = matchingShift.timeRegion || 'PHT';
    }
    
    // Calculate attendance status
    let status = 'No Schedule';
    let timeDiff = { hours: 0, minutes: 0, totalMinutes: 0 };
    let shiftId = null;
    
    if (matchingShift) {
      // Find the shift ID
      for (const [id, shift] of Object.entries(shifts)) {
        if (shift === matchingShift) {
          shiftId = id;
          break;
        }
      }
      
      // Calculate status based on the matching shift's expected time
      const result = calculateAttendanceStatus(
        matchingShift.timeIn,
        now,
        type,
        timeRegion
      );
      
      status = result.status;
      timeDiff = result.timeDiff;
    }
    
    // Create a unique document ID
    const docId = `${userId}_${type}_${now.toISOString()}`;
    
    // Create the attendance record
    const attendanceData = {
      userId,
      email,
      name,
      type,
      notes,
      status,
      timeDiff,
      timestamp: serverTimestamp(),
      timeRegion,
      shiftId
    };
    
    console.log('Creating attendance record:', attendanceData);
    
    // Add the document to the attendance collection
    const attendanceRef = doc(db, 'attendance', docId);
    await setDoc(attendanceRef, attendanceData);
    
    return {
      id: docId,
      ...attendanceData,
      timestamp: now
    };
  } catch (error) {
    console.error('Error recording attendance:', error);
    throw error;
  }
};

export const updateAttendance = async (recordId, updateData) => {
  try {
    const attendanceRef = doc(db, 'attendance', recordId);
    await updateDoc(attendanceRef, {
      ...updateData,
      updatedAt: new Date().toISOString(),
      updatedBy: updateData.updatedBy || 'admin'
    });
    
    console.log('Attendance record updated successfully:', recordId);
    return {
      success: true,
      recordId
    };
  } catch (error) {
    console.error('Error updating attendance record:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export const deleteAttendance = async (recordId, deletedBy) => {
  try {
    const attendanceRef = doc(db, 'attendance', recordId);
    await deleteDoc(attendanceRef);
    
    console.log('Attendance record deleted successfully:', recordId);
    return {
      success: true,
      recordId
    };
  } catch (error) {
    console.error('Error deleting attendance record:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export const getAttendanceByDate = async (date) => {
  try {
    // Create start timestamp for the given date
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    
    // Create end timestamp for the next day to catch time outs that might happen the next day
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 1);
    endDate.setHours(23, 59, 59, 999);
    
    // Get current time to filter out future time outs
    const currentTime = new Date();
    
    console.log('Fetching attendance records for date range:', {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      currentTime: currentTime.toISOString()
    });
    
    // Query attendance records for the date range
    const attendanceRef = collection(db, 'attendance');
    
    // Get all attendance records and filter by date client-side
    // This is a workaround for the Firestore timestamp comparison issue
    const querySnapshot = await getDocs(attendanceRef);
    
    // Process and return the records
    const records = {};
    const timeInsOnSelectedDate = new Set(); // Track time ins on the selected date
    const nextDayStart = new Date(date);
    nextDayStart.setDate(nextDayStart.getDate() + 1);
    nextDayStart.setHours(0, 0, 0, 0);
    
    // First pass: collect all time ins on the selected date
    querySnapshot.forEach(doc => {
      const data = doc.data();
      
      // Skip if no timestamp
      if (!data.timestamp) return;
      
      // Convert Firestore timestamp to Date
      let recordDate;
      if (data.timestamp.seconds) {
        // Server timestamp
        recordDate = new Date(data.timestamp.seconds * 1000);
      } else if (data.date) {
        // Fallback to date field if available
        recordDate = new Date(data.date);
      } else {
        // Skip if no valid date
        return;
      }
      
      // Check if this is a time in on the selected date
      if (data.type === 'IN' && recordDate >= startDate && recordDate < nextDayStart) {
        timeInsOnSelectedDate.add(data.userId);
      }
    });
    
    // Second pass: process all records
    querySnapshot.forEach(doc => {
      const data = doc.data();
      
      // Skip if no timestamp
      if (!data.timestamp) return;
      
      // Convert Firestore timestamp to Date
      let recordDate;
      if (data.timestamp.seconds) {
        // Server timestamp
        recordDate = new Date(data.timestamp.seconds * 1000);
      } else if (data.date) {
        // Fallback to date field if available
        recordDate = new Date(data.date);
      } else {
        // Skip if no valid date
        return;
      }
      
      const userId = data.userId;
      
      // For time ins, only include those on the selected date
      if (data.type === 'IN' && recordDate >= startDate && recordDate < nextDayStart) {
        // Format the record
        const record = {
          id: doc.id,
          userId,
          name: data.name || 'Unknown',
          email: data.email || '',
          type: data.type,
          timestamp: recordDate,
          status: data.status || 'Unknown',
          scheduleTime: data.scheduleTime,
          timeRegion: data.timeRegion || 'PHT'
        };
        
        // Initialize user record if not exists
        if (!records[userId]) {
          records[userId] = {
            userId,
            name: data.name || 'Unknown',
            email: data.email || '',
            timeIn: null,
            timeOut: null
          };
        }
        
        // Set time in
        records[userId].timeIn = {
          time: record.timestamp ? record.timestamp.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }) : 'N/A',
          status: record.status,
          id: doc.id
        };
      } 
      // For time outs, include those on the selected date OR those that correspond to a time in on the selected date
      // AND only include time outs that have actually occurred (not in the future)
      else if (data.type === 'OUT' && 
              ((recordDate >= startDate && recordDate < nextDayStart) || timeInsOnSelectedDate.has(userId)) &&
              recordDate <= currentTime) {  // Only include time outs that have occurred
        
        // Format the record
        const record = {
          id: doc.id,
          userId,
          name: data.name || 'Unknown',
          email: data.email || '',
          type: data.type,
          timestamp: recordDate,
          status: data.status || 'Unknown',
          scheduleTime: data.scheduleTime,
          timeRegion: data.timeRegion || 'PHT'
        };
        
        // Initialize user record if not exists
        if (!records[userId]) {
          records[userId] = {
            userId,
            name: data.name || 'Unknown',
            email: data.email || '',
            timeIn: null,
            timeOut: null
          };
        }
        
        // Set time out
        records[userId].timeOut = {
          time: record.timestamp ? record.timestamp.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }) : 'N/A',
          status: record.status,
          id: doc.id
        };
      }
    });
    
    return {
      success: true,
      records: Object.values(records)
    };
  } catch (error) {
    console.error('Error fetching attendance records by date:', error);
    return {
      success: false,
      error: error.message,
      records: []
    };
  }
};

export const getScheduledUsersByDate = async (date) => {
  try {
    // Get the day of week for the specified date
    const targetDate = new Date(date);
    const dayOfWeek = targetDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    
    console.log('Fetching scheduled users for day:', dayOfWeek);
    
    // Get all users
    const usersRef = collection(db, 'users');
    const usersSnapshot = await getDocs(usersRef);
    
    // Filter users who have a schedule for this day
    const scheduledUsers = [];
    
    usersSnapshot.forEach(doc => {
      const userData = doc.data();
      const userSchedule = userData.schedule || {};
      
      // Check if user has any shifts scheduled for this day
      const hasShiftToday = Object.values(userSchedule).some(shift => 
        shift.day && shift.day.toLowerCase() === dayOfWeek
      );
      
      if (hasShiftToday) {
        // Find the first shift for this day
        const todayShift = Object.values(userSchedule).find(shift => 
          shift.day && shift.day.toLowerCase() === dayOfWeek
        );
        
        scheduledUsers.push({
          userId: doc.id,
          name: userData.name || 'Unknown',
          email: userData.email || '',
          scheduledTimeIn: todayShift ? todayShift.timeIn : null,
          scheduledTimeOut: todayShift ? todayShift.timeOut : null,
          timeRegion: userData.timeRegion || todayShift?.timeRegion || 'PHT'
        });
      }
    });
    
    return {
      success: true,
      users: scheduledUsers
    };
  } catch (error) {
    console.error('Error fetching scheduled users by date:', error);
    return {
      success: false,
      error: error.message,
      users: []
    };
  }
};
