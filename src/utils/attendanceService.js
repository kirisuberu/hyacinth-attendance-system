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

// Export the calculateAttendanceStatus function so it can be imported in other files
export const calculateAttendanceStatus = (scheduleTime, actualTime, type, timeRegion = 'PHT') => {
  console.log('Calculating attendance status:', { scheduleTime, type, actualTime: actualTime.toISOString(), timeRegion });
  
  // Validate timeRegion parameter
  if (!TIME_REGION_OFFSETS[timeRegion]) {
    console.warn(`Invalid time region: ${timeRegion}, defaulting to PHT`);
    timeRegion = 'PHT';
  }
  
  if (!scheduleTime) {
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
  const [scheduleHours, scheduleMinutes] = scheduleTime.split(':').map(Number);
  
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
  } 
  else { // Time-out logic
    // Handle overnight shifts (ending between midnight and 8 AM)
    if (scheduleHours < 8) {
      // If actual time is in the evening and schedule is early morning,
      // the schedule might be for the next day
      if (localDate.getHours() >= 18 && scheduleHours < 8) {
        scheduleDate.setDate(scheduleDate.getDate() + 1);
        diffMinutes = Math.round((localDate.getTime() - scheduleDate.getTime()) / (1000 * 60));
        console.log('Adjusted for overnight shift (next day):', {
          scheduleDate: scheduleDate.toISOString(),
          diffMinutes
        });
      }
    }
    
    // Handle early morning time-out with day shift schedule
    // For example, clocking out at 4:48 AM when schedule is 7:00 AM
    if (localDate.getHours() < 7 && scheduleHours >= 7 && scheduleHours < 12) {
      console.log('Early morning time-out detected with day shift schedule');
      
      // Calculate time difference with same day schedule
      const sameDayDiff = Math.round((localDate.getTime() - scheduleDate.getTime()) / (1000 * 60));
      
      // If the calculated difference is very large positive (more than 12 hours),
      // it's likely a calculation error
      if (diffMinutes > 720) {
        // Try comparing with previous day's schedule
        const prevDaySchedule = new Date(scheduleDate);
        prevDaySchedule.setDate(prevDaySchedule.getDate() - 1);
        
        const prevDayDiff = Math.round((localDate.getTime() - prevDaySchedule.getTime()) / (1000 * 60));
        
        // If this makes more sense (absolute difference is smaller), use it
        if (Math.abs(prevDayDiff) < Math.abs(diffMinutes)) {
          diffMinutes = prevDayDiff;
          console.log('Using previous day comparison for time-out:', diffMinutes);
        }
      }
      
      // If the time difference is still unusually large, use the same day comparison
      if (Math.abs(diffMinutes) > 720) {
        diffMinutes = sameDayDiff;
        console.log('Falling back to same day comparison for time-out:', diffMinutes);
      }
    }
  }
  
  const timeDiff = formatTimeDiff(diffMinutes);
  
  // Determine status based on the time difference
  let status;
  
  if (type === 'IN') {
    // For time-in:
    if (diffMinutes <= -60) {
      status = 'Early';
    } else if (diffMinutes > -60 && diffMinutes <= 5) {
      status = 'On Time';
    } else {
      status = 'Late';
    }
  } else {
    // For time-out:
    if (diffMinutes < -15) {
      status = 'Early Out';
    } else if (diffMinutes >= -15 && diffMinutes <= 60) {
      status = 'On Time';
    } else {
      status = 'Overtime';
    }
  }
  
  return {
    status,
    timeDiff
  };
};

export const recordAttendance = async (userId, type, notes = '') => {
  console.log('Recording attendance with type:', type, 'for user:', { userId });
  try {
    // Get the current date and time
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const previousDay = new Date(now);
    previousDay.setDate(previousDay.getDate() - 1);
    const previousDayOfWeek = previousDay.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

    // Get user's schedule and type
    const usersRef = collection(db, 'users');
    const userDoc = doc(usersRef, userId);
    const userSnapshot = await getDoc(userDoc);
    
    let scheduleTime = null;
    let userType = null;
    let currentShift = null;
    let timeRegion = null;
    let email = '';
    let name = 'Unknown User';

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      userType = userData.userType;
      timeRegion = userData.timeRegion;
      email = userData.email || '';
      name = userData.name || userData.displayName || 'Unknown User';
      
      // For other users, use their custom schedule
      const userSchedule = userData.schedule || {};
      console.log('User schedule:', userSchedule);
      
      // Check if schedule is empty or not properly configured
      if (Object.keys(userSchedule).length === 0) {
        console.log('User has no schedule configured. Using default schedule time.');
        // Use default schedule times based on type
        if (type === 'IN') {
          scheduleTime = '09:00'; // Default start time
        } else {
          scheduleTime = '18:00'; // Default end time
        }
        
        // Create a default shift for reference
        currentShift = {
          id: 'default',
          startDay: dayOfWeek,
          startTime: '09:00',
          endDay: dayOfWeek,
          endTime: '18:00'
        };
      } else {
        // For time in, we need to check if we should allow timing in for the next shift
        if (type === 'IN') {
          // Get the current time
          const currentTime = now.getHours() * 60 + now.getMinutes(); // Current time in minutes
          
          // Find all potential shifts for today
          const todayShifts = [];
          const nextDayShifts = [];
          
          Object.entries(userSchedule).forEach(([shiftId, shift]) => {
            if (shift.startDay && shift.startDay.toLowerCase() === dayOfWeek) {
              todayShifts.push({ ...shift, id: shiftId });
            }
            
            // Also check for shifts that start on the next day (for overnight workers)
            const nextDay = new Date(now);
            nextDay.setDate(nextDay.getDate() + 1);
            const nextDayOfWeek = nextDay.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
            
            if (shift.startDay && shift.startDay.toLowerCase() === nextDayOfWeek) {
              nextDayShifts.push({ ...shift, id: shiftId });
            }
          });
          
          console.log('Today shifts:', todayShifts);
          console.log('Next day shifts:', nextDayShifts);
          
          // Sort shifts by start time
          const sortShiftsByTime = (shifts) => {
            return shifts.sort((a, b) => {
              const [aHours, aMinutes] = a.startTime.split(':').map(Number);
              const [bHours, bMinutes] = b.startTime.split(':').map(Number);
              return (aHours * 60 + aMinutes) - (bHours * 60 + bMinutes);
            });
          };
          
          const sortedTodayShifts = sortShiftsByTime(todayShifts);
          const sortedNextDayShifts = sortShiftsByTime(nextDayShifts);
          
          // Get the last attendance record to check when the previous shift ended
          const attendanceRef = collection(db, 'attendance');
          const lastRecordQuery = query(
            attendanceRef,
            where('userId', '==', userId)
          );
          
          const lastRecordSnapshot = await getDocs(lastRecordQuery);
          let lastRecord = null;
          
          if (!lastRecordSnapshot.empty) {
            // Get all records and sort them client-side
            const records = lastRecordSnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            
            // Sort by timestamp in descending order
            records.sort((a, b) => {
              const timestampA = a.timestamp?.seconds || 0;
              const timestampB = b.timestamp?.seconds || 0;
              return timestampB - timestampA;
            });
            
            // Get the most recent record
            lastRecord = records[0];
            console.log('Last attendance record:', lastRecord);
          }
          
          // Find the appropriate shift to use
          let selectedShift = null;
          
          // If we have a previous record with a shift, find the next shift
          if (lastRecord && lastRecord.shiftId) {
            // Get the previous shift details
            const prevShift = userSchedule[lastRecord.shiftId];
            
            if (prevShift) {
              // Calculate when the previous shift ended (or was supposed to end)
              const prevShiftEndTime = prevShift.endTime;
              const [endHours, endMinutes] = prevShiftEndTime.split(':').map(Number);
              
              // Calculate 4 hours after the end of the previous shift
              const fourHoursAfterEnd = new Date(now);
              fourHoursAfterEnd.setHours(endHours, endMinutes, 0, 0);
              fourHoursAfterEnd.setHours(fourHoursAfterEnd.getHours() + 4);
              
              // If it's been at least 4 hours since the end of the previous shift,
              // allow timing in for the next shift
              if (now >= fourHoursAfterEnd) {
                console.log('It has been at least 4 hours since the end of the previous shift');
                
                // Find the next shift after the previous one
                const allShifts = [...sortedTodayShifts, ...sortedNextDayShifts];
                const prevShiftIndex = allShifts.findIndex(s => s.id === lastRecord.shiftId);
                
                if (prevShiftIndex !== -1 && prevShiftIndex < allShifts.length - 1) {
                  // Use the next shift in sequence
                  selectedShift = allShifts[prevShiftIndex + 1];
                } else {
                  // If it was the last shift, cycle back to the first shift
                  selectedShift = allShifts[0];
                }
              }
            }
          }
          
          // If no shift was selected based on the 4-hour rule, find the current or next available shift
          if (!selectedShift) {
            // Find the next available shift based on current time
            for (const shift of sortedTodayShifts) {
              const [startHours, startMinutes] = shift.startTime.split(':').map(Number);
              const shiftStartTime = startHours * 60 + startMinutes; // Shift start time in minutes
              
              // If this shift starts in the future or within the last hour, use it
              if (shiftStartTime > currentTime - 60) {
                selectedShift = shift;
                break;
              }
            }
            
            // If no suitable shift found for today, use the first shift of the next day
            if (!selectedShift && sortedNextDayShifts.length > 0) {
              selectedShift = sortedNextDayShifts[0];
            }
            
            // If still no shift found, use the first available shift
            if (!selectedShift && sortedTodayShifts.length > 0) {
              selectedShift = sortedTodayShifts[0];
            }
          }
          
          if (selectedShift) {
            scheduleTime = selectedShift.startTime;
            currentShift = selectedShift;
            console.log('Selected shift for time in:', selectedShift);
          } else if (Object.entries(userSchedule).length > 0) {
            // Fallback: use the first available shift
            const [shiftId, firstShift] = Object.entries(userSchedule)[0];
            scheduleTime = firstShift.startTime;
            currentShift = { ...firstShift, id: shiftId };
            console.log('No suitable shift found, using first available shift:', currentShift);
          }
        } else {
          // For time out, look for shifts that either:
          // 1. End on the current day
          // 2. Started the previous day and end today
          Object.entries(userSchedule).forEach(([shiftId, shift]) => {
            if (shift.endDay && shift.endDay.toLowerCase() === dayOfWeek) {
              scheduleTime = shift.endTime;
              currentShift = { ...shift, id: shiftId };
              console.log('Found matching OUT schedule:', shift);
            } else if (shift.startDay && shift.startDay.toLowerCase() === previousDayOfWeek && 
                      shift.endDay && shift.endDay.toLowerCase() === dayOfWeek) {
              scheduleTime = shift.endTime;
              currentShift = { ...shift, id: shiftId };
              console.log('Found matching overnight OUT schedule:', shift);
            }
          });
          
          // If no matching schedule found, use the first available end time
          if (!scheduleTime && Object.entries(userSchedule).length > 0) {
            const [shiftId, firstShift] = Object.entries(userSchedule)[0];
            scheduleTime = firstShift.endTime;
            currentShift = { ...firstShift, id: shiftId };
            console.log('No matching schedule for today, using first available end time:', scheduleTime);
          }
        }
      }
    } else {
      console.log('User document not found:', userId);
    }

    console.log('Using schedule data:', {
      dayOfWeek,
      previousDayOfWeek,
      scheduleTime,
      currentShift,
      timeRegion: currentShift?.timeRegion || 'PHT'
    });

    // Ensure we have a valid time region
    const shiftTimeRegion = currentShift?.timeRegion || 'PHT';
    
    // Calculate attendance status based on schedule time
    const { status, timeDiff } = calculateAttendanceStatus(scheduleTime, now, type, shiftTimeRegion);

    // Get midnight for today (for date filtering)
    const todayMidnight = new Date(now);
    todayMidnight.setHours(0, 0, 0, 0);
    
    // For OUT records, find the corresponding IN record to calculate shift duration
    let shiftDuration = null;
    let correspondingInRecord = null;
    
    if (type === 'OUT') {
      // Find the most recent IN record that could be part of this shift
      const startOfLookup = new Date(todayMidnight);
      // Look back up to 2 days to handle overnight shifts
      startOfLookup.setDate(startOfLookup.getDate() - 2);
      
      // First query for records by userId only
      const q = query(
        collection(db, 'attendance'),
        where('userId', '==', userId)
      );
      
      const querySnapshot = await getDocs(q);
      console.log(`Found ${querySnapshot.size} records for user`);
      
      if (!querySnapshot.empty) {
        // Then filter the results in memory
        const inRecords = querySnapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          .filter(record => {
            // Filter for IN records
            if (record.type !== 'IN') return false;
            
            // Filter by date
            if (!record.timestamp) return false;
            const recordDate = new Date(record.timestamp.seconds * 1000);
            return recordDate >= startOfLookup;
          });
        
        // Sort by timestamp in descending order to get the most recent IN record
        inRecords.sort((a, b) => {
          const timestampA = a.timestamp?.seconds || 0;
          const timestampB = b.timestamp?.seconds || 0;
          return timestampB - timestampA;
        });
        
        if (inRecords.length > 0) {
          correspondingInRecord = inRecords[0];
          console.log('Found corresponding IN record:', correspondingInRecord);
          
          // Calculate shift duration
          const inTime = new Date(correspondingInRecord.timestamp.seconds * 1000);
          const outTime = now;
          
          // Calculate duration in minutes
          const durationMinutes = Math.round((outTime - inTime) / (1000 * 60));
          const hours = Math.floor(durationMinutes / 60);
          const minutes = durationMinutes % 60;
          
          shiftDuration = {
            hours,
            minutes,
            totalMinutes: durationMinutes
          };
          
          console.log('Calculated shift duration:', shiftDuration);
        }
      }
    }

    // Prepare the attendance record
    const attendanceRecord = {
      userId,
      email,
      name,
      type,
      timestamp: serverTimestamp(),
      date: now.toISOString(),
      status,
      scheduleTime,
      actualTime: now.toLocaleTimeString(),
      hoursDiff: timeDiff.hours,
      minutesDiff: timeDiff.minutes,
      totalMinutesDiff: timeDiff.totalMinutes,
      dayOfWeek,
      notes,
      shiftId: currentShift?.id || null,
      timeRegion: shiftTimeRegion
    };
    
    // Add shift duration for OUT records
    if (type === 'OUT' && shiftDuration) {
      attendanceRecord.shiftDuration = shiftDuration;
      attendanceRecord.shiftDurationHours = shiftDuration.hours;
      attendanceRecord.shiftDurationMinutes = shiftDuration.minutes;
      attendanceRecord.totalShiftMinutes = shiftDuration.totalMinutes;
      attendanceRecord.correspondingInRecordId = correspondingInRecord?.id || null;
    }

    console.log('Saving attendance record:', attendanceRecord);

    // Save to Firestore
    const attendanceRef = collection(db, 'attendance');
    
    // Create a custom document ID with the format: yyyymmdd_tttt_(IN/OUT)_status_name
    const formatNumber = (num) => num.toString().padStart(2, '0');
    const year = now.getFullYear();
    const month = formatNumber(now.getMonth() + 1);
    const day = formatNumber(now.getDate());
    const hours = formatNumber(now.getHours());
    const minutes = formatNumber(now.getMinutes());
    
    // Format the time portion (tttt)
    const timeFormat = `${hours}${minutes}`;
    
    // Format the date portion (yyyymmdd)
    const dateFormat = `${year}${month}${day}`;
    
    // Create the custom document ID
    const customDocId = `${dateFormat}_${timeFormat}_${type}_${status.replace(/\s+/g, '')}_${name.replace(/\s+/g, '_')}`;
    
    // Create a document reference with the custom ID
    const customDocRef = doc(attendanceRef, customDocId);
    
    // Use setDoc to create the document with the custom ID
    await setDoc(customDocRef, attendanceRecord);
    console.log('Saved attendance record with ID:', customDocId);

    return {
      success: true,
      status,
      timeDiff,
      shiftDuration: type === 'OUT' ? shiftDuration : null
    };

  } catch (error) {
    console.error('Error recording attendance:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export const updateAttendance = async (recordId, updateData) => {
  try {
    // First get the current record to check if we need to recalculate status
    const attendanceRef = doc(db, 'attendance', recordId);
    const recordSnapshot = await getDoc(attendanceRef);
    
    if (!recordSnapshot.exists()) {
      throw new Error('Attendance record not found');
    }
    
    const recordData = recordSnapshot.data();
    let finalUpdateData = { ...updateData };
    
    // If actualTime is being updated, recalculate the status
    if (updateData.actualTime && recordData.scheduleTime) {
      // Convert actualTime string to Date object
      const actualTimeDate = new Date();
      const [time, period] = updateData.actualTime.split(' ');
      if (time && period) {
        // 12-hour format with AM/PM
        const [hours, minutes] = time.split(':').map(Number);
        let hour = hours;
        
        if (period === 'PM' && hours < 12) {
          hour += 12;
        } else if (period === 'AM' && hours === 12) {
          hour = 0;
        }
        
        actualTimeDate.setHours(hour, minutes, 0, 0);
      } else {
        // 24-hour format
        const [hours, minutes] = updateData.actualTime.split(':').map(Number);
        actualTimeDate.setHours(hours, minutes, 0, 0);
      }
      
      // Recalculate status based on the new time
      const { status, timeDiff } = calculateAttendanceStatus(
        recordData.scheduleTime, 
        actualTimeDate, 
        recordData.type, 
        recordData.timeRegion || 'PHT'
      );
      
      // Update with new status and time difference
      finalUpdateData = {
        ...finalUpdateData,
        status,
        hoursDiff: timeDiff.hours,
        minutesDiff: timeDiff.minutes,
        totalMinutesDiff: timeDiff.totalMinutes
      };
    }
    
    // Update the record
    await updateDoc(attendanceRef, {
      ...finalUpdateData,
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
        shift.startDay && shift.startDay.toLowerCase() === dayOfWeek
      );
      
      if (hasShiftToday) {
        // Find the first shift for this day
        const todayShift = Object.values(userSchedule).find(shift => 
          shift.startDay && shift.startDay.toLowerCase() === dayOfWeek
        );
        
        scheduledUsers.push({
          userId: doc.id,
          name: userData.name || 'Unknown',
          email: userData.email || '',
          scheduledTimeIn: todayShift ? todayShift.startTime : null,
          scheduledTimeOut: todayShift ? todayShift.endTime : null,
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

export const getUserAttendanceStatus = async (userId) => {
  try {
    // Get the attendance collection reference
    const attendanceRef = collection(db, 'attendance');
    
    // Query for the user's records
    const userRecordsQuery = query(
      attendanceRef,
      where('userId', '==', userId)
    );
    
    const userRecordsSnapshot = await getDocs(userRecordsQuery);
    
    if (userRecordsSnapshot.empty) {
      // No records found, user can time in but not time out
      return {
        success: true,
        canTimeIn: true,
        canTimeOut: false,
        lastRecordType: null,
        lastRecord: null
      };
    }
    
    // Get all records and sort them client-side by timestamp
    const records = userRecordsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Sort by timestamp in descending order (newest first)
    records.sort((a, b) => {
      const timestampA = a.timestamp?.seconds || 0;
      const timestampB = b.timestamp?.seconds || 0;
      return timestampB - timestampA;
    });
    
    // Get the most recent record
    const lastRecord = records[0];
    const lastRecordType = lastRecord?.type;
    
    // If the last record is a time in, user can time out but not time in again
    // If the last record is a time out, user can time in but not time out again
    const canTimeIn = !lastRecordType || lastRecordType === 'OUT';
    const canTimeOut = lastRecordType === 'IN';
    
    return {
      success: true,
      canTimeIn,
      canTimeOut,
      lastRecordType,
      lastRecord
    };
  } catch (error) {
    console.error('Error getting user attendance status:', error);
    return {
      success: false,
      error: error.message,
      canTimeIn: false,
      canTimeOut: false,
      lastRecordType: null,
      lastRecord: null
    };
  }
};
