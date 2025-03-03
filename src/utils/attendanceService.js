import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, getDocs, query, where, doc, getDoc, setDoc, orderBy, limit } from 'firebase/firestore';

const calculateAttendanceStatus = (scheduleTime, actualTime, type) => {
  console.log('Calculating attendance status:', { scheduleTime, type, actualTime: actualTime.toISOString() });
  
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

  const [scheduleHours, scheduleMinutes] = scheduleTime.split(':').map(Number);
  
  // Create a date object for the schedule time on the same day as the actual time
  const scheduleDate = new Date(actualTime);
  scheduleDate.setHours(scheduleHours, scheduleMinutes, 0, 0); // Set seconds and milliseconds to 0
  
  // If the schedule time is later than the actual time and we're checking for a time-in,
  // it's possible the schedule is for the previous day
  // For example, if it's 1 AM and the schedule is for 10 PM, we should compare with 10 PM of the previous day
  if (type === 'IN' && scheduleDate > actualTime && scheduleHours >= 18) { // Assuming shifts starting after 6 PM might be for previous day
    scheduleDate.setDate(scheduleDate.getDate() - 1);
    console.log('Adjusted schedule date to previous day for late night shift');
  }
  
  // If the schedule time is earlier than the actual time and we're checking for a time-out,
  // it's possible the schedule is for the next day
  // For example, if it's 11 PM and the schedule is for 2 AM, we should compare with 2 AM of the next day
  if (type === 'OUT' && scheduleDate < actualTime && scheduleHours <= 6) { // Assuming shifts ending before 6 AM might be for next day
    scheduleDate.setDate(scheduleDate.getDate() + 1);
    console.log('Adjusted schedule date to next day for overnight shift');
  }

  const diffMilliseconds = actualTime.getTime() - scheduleDate.getTime();
  const diffMinutes = Math.round(diffMilliseconds / (1000 * 60));
  
  console.log('Time difference calculation:', {
    actualTime: actualTime.toISOString(),
    scheduleDate: scheduleDate.toISOString(),
    diffMilliseconds,
    diffMinutes,
    type
  });

  const formatTimeDiff = (diffMins) => {
    const hours = Math.floor(Math.abs(diffMins) / 60);
    const minutes = Math.abs(diffMins) % 60;
    return {
      hours,
      minutes,
      totalMinutes: diffMins
    };
  };

  const timeDiff = formatTimeDiff(diffMinutes);

  if (type === 'IN') {
    console.log('Evaluating IN status conditions:', {
      diffMinutes,
      isEarly: diffMinutes <= -60,
      isOnTime: diffMinutes > -60 && diffMinutes <= 0,
      isLate: diffMinutes > 0
    });
    
    // Early: 60 mins or more before schedule time
    if (diffMinutes <= -60) {
      return {
        status: 'Early',
        timeDiff
      };
    }
    
    // On Time: Between 60 mins before and exactly on schedule time (inclusive)
    if (diffMinutes > -60 && diffMinutes <= 0) {
      return {
        status: 'On Time',
        timeDiff
      };
    }
    
    // Late: Any time after schedule time (1 min or more)
    if (diffMinutes > 0) {
      return {
        status: 'Late',
        timeDiff
      };
    }
  } else {
    if (diffMinutes < 0) {
      return {
        status: 'Early Out',
        timeDiff
      };
    }
    if (diffMinutes <= 60) {
      return {
        status: 'On Time',
        timeDiff
      };
    }
    return {
      status: 'Overtime',
      timeDiff
    };
  }
};

export const recordAttendance = async (userId, email, name, type, notes = '') => {
  console.log('Recording attendance with type:', type, 'for user:', { userId, email, name });
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

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      userType = userData.userType;
      
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

    console.log('Found schedule time:', {
      type,
      userType,
      dayOfWeek,
      previousDayOfWeek,
      scheduleTime,
      currentShift
    });

    // Calculate attendance status based on schedule time
    const { status, timeDiff } = calculateAttendanceStatus(scheduleTime, now, type);

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

    // Create the attendance record
    const attendanceRecord = {
      userId,
      email,
      name,
      type,
      userType,
      timestamp: serverTimestamp(),
      date: todayMidnight.getTime(),
      dateISO: now.toISOString(),
      scheduleTime,
      status,
      timeDiffHours: timeDiff.hours,
      timeDiffMinutes: timeDiff.minutes,
      totalMinutesDiff: timeDiff.totalMinutes,
      dayOfWeek,
      notes,
      shiftId: currentShift?.id || null
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
