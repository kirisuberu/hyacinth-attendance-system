import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, getDocs, query, where, doc, getDoc, setDoc, orderBy, limit, updateDoc, deleteDoc } from 'firebase/firestore';

// Time region offset in hours from UTC
const TIME_REGION_OFFSETS = {
  'PHT': 8,   // UTC+8
  'CST': -6,  // UTC-6
  'EST': -5   // UTC-5
};

/**
 * Convert time from one region to another
 * @param {string} time - Time in format "HH:MM"
 * @param {string} fromRegion - Source time region code
 * @param {string} toRegion - Target time region code
 * @returns {string} - Converted time in "HH:MM" format
 */
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

/**
 * Format time difference into hours and minutes
 * @param {number} diffMins - Time difference in minutes
 * @returns {Object} - Formatted time difference
 */
const formatTimeDiff = (diffMins) => {
  const hours = Math.floor(Math.abs(diffMins) / 60);
  const minutes = Math.abs(diffMins) % 60;
  return {
    hours,
    minutes,
    totalMinutes: Math.abs(diffMins) * (diffMins < 0 ? -1 : 1)
  };
};

/**
 * Calculate attendance status based on schedule and actual time
 * @param {string} scheduleTime - Scheduled time in "HH:MM" format
 * @param {Date} actualTime - Actual time as Date object
 * @param {string} type - Record type: 'IN' or 'OUT'
 * @param {string} timeRegion - Time region code
 * @returns {Object} - Status and time difference
 */
export const calculateAttendanceStatus = (scheduleTime, actualTime, type, timeRegion = 'PHT') => {
  console.log('Calculating attendance status:', { scheduleTime, type, actualTime: actualTime.toISOString(), timeRegion });
  
  // Validate timeRegion parameter
  if (!TIME_REGION_OFFSETS[timeRegion]) {
    console.warn(`Invalid time region: ${timeRegion}, defaulting to PHT`);
    timeRegion = 'PHT';
  }
  
  // Handle case when no schedule time is provided
  if (!scheduleTime) {
    return {
      status: 'No Schedule',
      timeDiff: { hours: 0, minutes: 0, totalMinutes: 0 }
    };
  }

  // Create a local date object for comparison
  const localDate = new Date(actualTime);
  
  // Parse schedule time
  const [scheduleHours, scheduleMinutes] = scheduleTime.split(':').map(Number);
  
  // Create a date object for the schedule time on the same day as the actual time
  const scheduleDate = new Date(localDate);
  scheduleDate.setHours(scheduleHours, scheduleMinutes, 0, 0);
  
  // Calculate the time difference in minutes
  let diffMinutes = Math.round((localDate.getTime() - scheduleDate.getTime()) / (1000 * 60));
  
  console.log('Time comparison:', {
    localDate: localDate.toISOString(),
    scheduleDate: scheduleDate.toISOString(),
    diffMinutes
  });

  // Handle special cases for time-in
  if (type === 'IN') {
    // Handle late night shifts (11 PM - 6 AM)
    if (scheduleHours >= 22 || scheduleHours <= 6) {
      // If actual time is in the morning and schedule is late night,
      // the schedule might be from the previous day
      if (localDate.getHours() <= 12 && scheduleHours >= 22) {
        scheduleDate.setDate(scheduleDate.getDate() - 1);
        diffMinutes = Math.round((localDate.getTime() - scheduleDate.getTime()) / (1000 * 60));
        console.log('Adjusted for late night shift (previous day):', diffMinutes);
      }
    }
    
    // Handle day shift users timing in early (fix for large negative differences)
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
  } 
  // Handle special cases for time-out
  else {
    // Handle overnight shifts (ending between midnight and 8 AM)
    if (scheduleHours < 8) {
      // If actual time is in the evening and schedule is early morning,
      // the schedule might be for the next day
      if (localDate.getHours() >= 18 && scheduleHours < 8) {
        scheduleDate.setDate(scheduleDate.getDate() + 1);
        diffMinutes = Math.round((localDate.getTime() - scheduleDate.getTime()) / (1000 * 60));
        console.log('Adjusted for overnight shift (next day):', diffMinutes);
      }
    }
  }
  
  const timeDiff = formatTimeDiff(diffMinutes);
  
  // Determine status based on the time difference and type
  let status = determineStatus(diffMinutes, type);
  
  return { status, timeDiff };
};

/**
 * Determine attendance status based on time difference and record type
 * @param {number} diffMinutes - Time difference in minutes
 * @param {string} type - Record type: 'IN' or 'OUT'
 * @returns {string} - Attendance status
 */
const determineStatus = (diffMinutes, type) => {
  if (type === 'IN') {
    // For time-in:
    if (diffMinutes <= -60) {
      return 'Early';
    } else if (diffMinutes > -60 && diffMinutes <= 5) {
      return 'On Time';
    } else {
      return 'Late';
    }
  } else {
    // For time-out:
    if (diffMinutes < -15) {
      return 'Early Out';
    } else if (diffMinutes >= -15 && diffMinutes <= 60) {
      return 'On Time';
    } else {
      return 'Overtime';
    }
  }
};

export const recordAttendance = async (userId, type, notes = '') => {
  console.log('Recording attendance with type:', type, 'for user:', { userId });
  try {
    // Get user data and current date information
    const now = new Date();
    const userData = await getUserData(userId);
    
    if (!userData) {
      throw new Error(`User document not found: ${userId}`);
    }
    
    // Get user's email and name
    const userEmail = userData.email || '';
    const userName = userData.name || userData.displayName || 'Unknown User';
    
    // Get today's day of the week
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    
    let scheduleTime = null;
    let currentShift = null;
    let shiftTimeRegion = userData.timeRegion || 'PHT';
    let status = 'No Schedule';
    let timeDiff = { hours: 0, minutes: 0, totalMinutes: 0 };
    let shiftDuration = null;
    
    // For time-in, check the user's shift for the current day
    if (type === 'IN') {
      const userSchedule = userData.schedule || {};
      
      // Find shifts for today
      const todayShifts = [];
      Object.entries(userSchedule).forEach(([shiftId, shift]) => {
        if (shift.startDay && shift.startDay.toLowerCase() === dayOfWeek) {
          todayShifts.push({ ...shift, id: shiftId });
        }
      });
      
      // Sort shifts by start time
      const sortedTodayShifts = todayShifts.sort((a, b) => {
        const [aHours, aMinutes] = a.startTime.split(':').map(Number);
        const [bHours, bMinutes] = b.startTime.split(':').map(Number);
        return (aHours * 60 + aMinutes) - (bHours * 60 + bMinutes);
      });
      
      // Find the appropriate shift for the current time
      const currentTime = now.getHours() * 60 + now.getMinutes(); // Current time in minutes
      
      // Find the next upcoming shift or the most recent shift that started
      for (const shift of sortedTodayShifts) {
        const [startHours, startMinutes] = shift.startTime.split(':').map(Number);
        const shiftStartTime = startHours * 60 + startMinutes; // Shift start time in minutes
        
        // If this shift starts within the next hour or started in the last 2 hours, use it
        if (shiftStartTime > currentTime - 120 && shiftStartTime <= currentTime + 60) {
          currentShift = shift;
          scheduleTime = shift.startTime;
          shiftTimeRegion = shift.timeRegion || shiftTimeRegion;
          break;
        }
      }
      
      // If no suitable shift found, use the first shift of the day
      if (!currentShift && sortedTodayShifts.length > 0) {
        currentShift = sortedTodayShifts[0];
        scheduleTime = currentShift.startTime;
        shiftTimeRegion = currentShift.timeRegion || shiftTimeRegion;
      }
      
      // Calculate attendance status based on schedule time
      const result = calculateAttendanceStatus(scheduleTime, now, type, shiftTimeRegion);
      status = result.status;
      timeDiff = result.timeDiff;
    } 
    // For time-out, compare with the latest time-in record
    else {
      // Get the latest time-in record
      const latestRecord = await getLatestTimeInRecord(userId);
      
      if (!latestRecord) {
        status = 'No Time-In Record';
      } else {
        console.log('Latest time-in record:', latestRecord);
        
        // Get the shift associated with the time-in record
        const shiftId = latestRecord.shiftId;
        const userSchedule = userData.schedule || {};
        
        // Try to get the shift from the latest record
        let currentShift = shiftId && userSchedule[shiftId] 
          ? { ...userSchedule[shiftId], id: shiftId } 
          : null;
        
        // If no shift found from the latest record, try to determine it based on the time-in timestamp
        if (!currentShift) {
          console.log('No shift found from latest record, attempting to determine from timestamp');
          
          const timeInDate = safeTimestampToDate(latestRecord.timestamp);
          if (timeInDate) {
            // Get the day of week from the time-in date
            const timeInDayOfWeek = timeInDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
            
            // Find shifts for the time-in day
            const possibleShifts = [];
            Object.entries(userSchedule).forEach(([shiftId, shift]) => {
              if (shift.startDay && shift.startDay.toLowerCase() === timeInDayOfWeek) {
                possibleShifts.push({ ...shift, id: shiftId });
              }
            });
            
            // Sort shifts by start time
            const sortedShifts = possibleShifts.sort((a, b) => {
              const [aHours, aMinutes] = a.startTime.split(':').map(Number);
              const [bHours, bMinutes] = b.startTime.split(':').map(Number);
              return (aHours * 60 + aMinutes) - (bHours * 60 + bMinutes);
            });
            
            // Find the shift that best matches the time-in time
            const timeInMinutes = timeInDate.getHours() * 60 + timeInDate.getMinutes();
            
            for (const shift of sortedShifts) {
              if (shift.startTime && shift.endTime) {
                const [startHours, startMinutes] = shift.startTime.split(':').map(Number);
                const shiftStartMinutes = startHours * 60 + startMinutes;
                
                // If the time-in is within 2 hours of the shift start, use this shift
                if (Math.abs(timeInMinutes - shiftStartMinutes) <= 120) {
                  currentShift = shift;
                  break;
                }
              }
            }
            
            // If still no match, use the first shift of the day if available
            if (!currentShift && sortedShifts.length > 0) {
              currentShift = sortedShifts[0];
            }
          }
        }
        
        // If we have a shift, use its end time for comparison
        if (currentShift && currentShift.endTime) {
          scheduleTime = currentShift.endTime;
          shiftTimeRegion = currentShift.timeRegion || shiftTimeRegion;
          
          // Calculate the expected shift duration in minutes
          if (currentShift.startTime) {
            const [startHours, startMinutes] = currentShift.startTime.split(':').map(Number);
            const [endHours, endMinutes] = currentShift.endTime.split(':').map(Number);
            
            // Calculate expected shift duration (handling overnight shifts)
            let expectedDurationMinutes = (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes);
            if (expectedDurationMinutes < 0) {
              // This is an overnight shift, add 24 hours (1440 minutes)
              expectedDurationMinutes += 1440;
            }
            
            // Calculate actual duration between time-in and current time
            const timeInDate = safeTimestampToDate(latestRecord.timestamp);
            
            // Validate the timeInDate before using it
            if (!timeInDate) {
              console.error('Invalid time-in date detected:', latestRecord.timestamp);
              status = 'Invalid Time-In Record';
              timeDiff = { hours: 0, minutes: 0, totalMinutes: 0 };
            } else {
              const actualDurationMinutes = Math.round((now.getTime() - timeInDate.getTime()) / (1000 * 60));
              
              // Calculate the difference between actual and expected duration
              const durationDiffMinutes = actualDurationMinutes - expectedDurationMinutes;
              
              console.log('Time-out duration calculation:', {
                timeInTime: timeInDate.toISOString(),
                currentTime: now.toISOString(),
                expectedDurationMinutes,
                actualDurationMinutes,
                durationDiffMinutes
              });
              
              // Determine status based on the duration difference
              if (durationDiffMinutes < -15) {
                status = 'Early Out';
              } else if (durationDiffMinutes >= -15 && durationDiffMinutes <= 60) {
                status = 'On Time';
              } else {
                status = 'Overtime';
              }
              
              // Format the time difference
              timeDiff = formatTimeDiff(durationDiffMinutes);
              
              // Calculate shift duration for the record
              shiftDuration = {
                hours: Math.floor(actualDurationMinutes / 60),
                minutes: actualDurationMinutes % 60,
                totalMinutes: actualDurationMinutes,
                correspondingInRecordId: latestRecord.id
              };
            }
          } else {
            // Handle case where shift doesn't have start time
            status = 'Invalid Shift Schedule';
            
            // Still calculate shift duration based on time-in record
            const timeInDate = safeTimestampToDate(latestRecord.timestamp);
            if (timeInDate) {
              const actualDurationMinutes = Math.round((now.getTime() - timeInDate.getTime()) / (1000 * 60));
              shiftDuration = {
                hours: Math.floor(actualDurationMinutes / 60),
                minutes: actualDurationMinutes % 60,
                totalMinutes: actualDurationMinutes,
                correspondingInRecordId: latestRecord.id
              };
              
              // Use actual duration to determine a basic status
              if (actualDurationMinutes < 480) { // Less than 8 hours
                status = 'Early Out';
              } else if (actualDurationMinutes <= 540) { // 8-9 hours
                status = 'On Time';
              } else {
                status = 'Overtime';
              }
              
              // Set a default time difference based on 8 hours expected shift
              const durationDiffMinutes = actualDurationMinutes - 480; // 8 hours = 480 minutes
              timeDiff = formatTimeDiff(durationDiffMinutes);
            }
          }
        } else {
          // Even without a valid shift, we can still calculate shift duration
          status = 'No Shift Found';
          
          // Calculate shift duration based on time-in record
          const timeInDate = safeTimestampToDate(latestRecord.timestamp);
          if (timeInDate) {
            const actualDurationMinutes = Math.round((now.getTime() - timeInDate.getTime()) / (1000 * 60));
            shiftDuration = {
              hours: Math.floor(actualDurationMinutes / 60),
              minutes: actualDurationMinutes % 60,
              totalMinutes: actualDurationMinutes,
              correspondingInRecordId: latestRecord.id
            };
            
            // Use actual duration to determine a basic status
            if (actualDurationMinutes < 480) { // Less than 8 hours
              status = 'Early Out';
            } else if (actualDurationMinutes <= 540) { // 8-9 hours
              status = 'On Time';
            } else {
              status = 'Overtime';
            }
            
            // Set a default time difference based on 8 hours expected shift
            const durationDiffMinutes = actualDurationMinutes - 480; // 8 hours = 480 minutes
            timeDiff = formatTimeDiff(durationDiffMinutes);
          }
        }
      }
    }
    
    // Prepare and save the attendance record
    const attendanceRecord = {
      userId,
      email: userEmail,
      name: userName,
      type,
      timestamp: serverTimestamp(),
      actualTime: now.toISOString(),
      scheduleTime: scheduleTime || '', // Ensure scheduleTime is never undefined
      status,
      timeDiff,
      shiftId: currentShift?.id || null,
      timeRegion: shiftTimeRegion,
      notes,
      shiftDuration
    };
    
    // Save to Firestore with custom document ID
    const customDocId = generateDocumentId(now, type, userName);
    const attendanceRef = collection(db, 'attendance');
    const customDocRef = doc(attendanceRef, customDocId);
    
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

/**
 * Get the latest time-in record for a user
 * @param {string} userId - User ID
 * @returns {Object|null} - Latest time-in record or null if none found
 */
const getLatestTimeInRecord = async (userId) => {
  // Return null if userId is undefined or null
  if (!userId) {
    console.error('getLatestTimeInRecord called with invalid userId:', userId);
    return null;
  }

  const attendanceRef = collection(db, 'attendance');
  const timeInQuery = query(
    attendanceRef,
    where('userId', '==', userId),
    where('type', '==', 'IN')
  );
  
  const querySnapshot = await getDocs(timeInQuery);
  
  if (querySnapshot.empty) {
    return null;
  }
  
  // Get all time-in records and sort them client-side
  const records = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  
  // Sort by timestamp in descending order to get the most recent
  records.sort((a, b) => {
    // Use safe comparison that handles null values
    const dateA = safeTimestampToDate(a.timestamp);
    const dateB = safeTimestampToDate(b.timestamp);
    
    if (!dateA && !dateB) return 0;
    if (!dateA) return 1;
    if (!dateB) return -1;
    
    return dateB.getTime() - dateA.getTime();
  });
  
  // Return the most recent time-in record
  return records[0];
};

/**
 * Get user data from Firestore
 * @param {string} userId - User ID
 * @returns {Object|null} - User data or null if not found
 */
const getUserData = async (userId) => {
  const userDoc = doc(collection(db, 'users'), userId);
  const userSnapshot = await getDoc(userDoc);
  
  if (!userSnapshot.exists()) {
    return null;
  }
  
  return userSnapshot.data();
};

/**
 * Calculate shift duration for time-out records
 * @param {string} userId - User ID
 * @param {Date} now - Current date and time
 * @returns {Object|null} - Shift duration or null if no corresponding IN record found
 */
const calculateShiftDuration = async (userId, now) => {
  // Return null if userId is undefined or null
  if (!userId) {
    console.error('calculateShiftDuration called with invalid userId:', userId);
    return null;
  }

  // Get midnight for today (for date filtering)
  const todayMidnight = new Date(now);
  todayMidnight.setHours(0, 0, 0, 0);
  
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
  
  if (querySnapshot.empty) {
    return null;
  }
  
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
      const recordDate = safeTimestampToDate(record.timestamp);
      return recordDate >= startOfLookup;
    });
  
  // Sort by timestamp in descending order to get the most recent IN record
  inRecords.sort((a, b) => {
    // Use safe comparison that handles null values
    const dateA = safeTimestampToDate(a.timestamp);
    const dateB = safeTimestampToDate(b.timestamp);
    
    if (!dateA && !dateB) return 0;
    if (!dateA) return 1;
    if (!dateB) return -1;
    
    return dateB.getTime() - dateA.getTime();
  });
  
  if (inRecords.length === 0) {
    return null;
  }
  
  const correspondingInRecord = inRecords[0];
  console.log('Found corresponding IN record:', correspondingInRecord);
  
  // Calculate shift duration
  const inTime = safeTimestampToDate(correspondingInRecord.timestamp);
  const outTime = now;
  
  // Calculate duration in minutes
  const durationMinutes = Math.round((outTime - inTime) / (1000 * 60));
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;
  
  const shiftDuration = {
    hours,
    minutes,
    totalMinutes: durationMinutes,
    correspondingInRecordId: correspondingInRecord.id
  };
  
  console.log('Calculated shift duration:', shiftDuration);
  return shiftDuration;
};

/**
 * Create attendance record object
 * @param {string} userId - User ID
 * @param {string} email - User email
 * @param {string} name - User name
 * @param {string} type - Record type: 'IN' or 'OUT'
 * @param {Date} now - Current date and time
 * @param {string} status - Attendance status
 * @param {string} scheduleTime - Scheduled time
 * @param {Object} timeDiff - Time difference
 * @param {string|null} shiftId - Shift ID
 * @param {string} timeRegion - Time region
 * @param {string} notes - Notes
 * @param {Object|null} shiftDuration - Shift duration for OUT records
 * @returns {Object} - Attendance record object
 */
const createAttendanceRecord = (
  userId, 
  email, 
  name, 
  type, 
  now, 
  status, 
  scheduleTime, 
  timeDiff, 
  shiftId, 
  timeRegion, 
  notes,
  shiftDuration
) => {
  const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  
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
    shiftId,
    timeRegion
  };
  
  // Add shift duration for OUT records
  if (type === 'OUT' && shiftDuration) {
    attendanceRecord.shiftDuration = {
      hours: shiftDuration.hours,
      minutes: shiftDuration.minutes,
      totalMinutes: shiftDuration.totalMinutes
    };
    attendanceRecord.shiftDurationHours = shiftDuration.hours;
    attendanceRecord.shiftDurationMinutes = shiftDuration.minutes;
    attendanceRecord.totalShiftMinutes = shiftDuration.totalMinutes;
    attendanceRecord.correspondingInRecordId = shiftDuration.correspondingInRecordId || null;
  }
  
  return attendanceRecord;
};

/**
 * Generate a custom document ID for attendance records
 * @param {Date} now - Current date and time
 * @param {string} type - Record type: 'IN' or 'OUT'
 * @param {string} name - User name
 * @returns {string} - Custom document ID
 */
const generateDocumentId = (now, type, name) => {
  // Ensure we have valid parameters
  if (!now || !(now instanceof Date)) {
    console.error('Invalid date provided to generateDocumentId');
    now = new Date(); // Fallback to current time
  }
  
  // Ensure type is a valid string
  type = (type || 'UNKNOWN').toString();
  
  // Ensure name is a valid string
  name = (name || 'Unknown_User').toString();
  
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
  
  // Create the custom document ID with sanitized name
  // Replace spaces, special characters, and ensure it's not too long
  const sanitizedName = name.replace(/[^\w]/g, '_').substring(0, 30);
  
  return `${dateFormat}_${timeFormat}_${type}_${sanitizedName}`;
};

export const updateAttendance = async (recordId, updateData) => {
  try {
    // Get the current record
    const attendanceRef = doc(db, 'attendance', recordId);
    const recordSnapshot = await getDoc(attendanceRef);
    
    if (!recordSnapshot.exists()) {
      throw new Error('Attendance record not found');
    }
    
    const recordData = recordSnapshot.data();
    let finalUpdateData = { ...updateData };
    
    // If actualTime is being updated, recalculate the status
    if (updateData.actualTime && recordData.scheduleTime) {
      const actualTimeDate = parseActualTime(updateData.actualTime);
      
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

/**
 * Parse actual time string to Date object
 * @param {string} actualTime - Actual time string
 * @returns {Date} - Date object with the parsed time
 */
const parseActualTime = (actualTime) => {
  const actualTimeDate = new Date();
  const [time, period] = actualTime.split(' ');
  
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
    const [hours, minutes] = actualTime.split(':').map(Number);
    actualTimeDate.setHours(hours, minutes, 0, 0);
  }
  
  return actualTimeDate;
};

/**
 * Delete an attendance record
 * @param {string} recordId - Attendance record ID
 * @param {string} deletedBy - User ID who deleted the record
 * @returns {Object} - Result of the delete operation
 */
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

/**
 * Get attendance records for a specific date
 * @param {string} date - Date string
 * @returns {Object} - Attendance records grouped by user
 */
export const getAttendanceByDate = async (date) => {
  try {
    // Create date range for filtering
    const { startDate, endDate, nextDayStart } = createDateRange(date);
    const currentTime = new Date();
    
    console.log('Fetching attendance records for date range:', {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      currentTime: currentTime.toISOString()
    });
    
    // Get all attendance records
    const attendanceRef = collection(db, 'attendance');
    const querySnapshot = await getDocs(attendanceRef);
    
    // Process and return the records
    const records = {};
    const timeInsOnSelectedDate = collectTimeInsOnDate(querySnapshot, startDate, nextDayStart);
    
    // Process all records
    querySnapshot.forEach(doc => {
      processAttendanceRecord(doc, records, timeInsOnSelectedDate, startDate, nextDayStart, currentTime);
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

/**
 * Create date range for filtering attendance records
 * @param {string} date - Date string
 * @returns {Object} - Start date, end date, and next day start
 */
const createDateRange = (date) => {
  // Create start timestamp for the given date
  const startDate = new Date(date);
  startDate.setHours(0, 0, 0, 0);
  
  // Create end timestamp for the next day to catch time outs that might happen the next day
  const endDate = new Date(date);
  endDate.setDate(endDate.getDate() + 1);
  endDate.setHours(23, 59, 59, 999);
  
  // Next day start for filtering
  const nextDayStart = new Date(date);
  nextDayStart.setDate(nextDayStart.getDate() + 1);
  nextDayStart.setHours(0, 0, 0, 0);
  
  return { startDate, endDate, nextDayStart };
};

/**
 * Collect time-ins on a specific date
 * @param {FirebaseFirestore.QuerySnapshot} querySnapshot - Query snapshot
 * @param {Date} startDate - Start date
 * @param {Date} nextDayStart - Next day start
 * @returns {Set} - Set of user IDs with time-ins on the date
 */
const collectTimeInsOnDate = (querySnapshot, startDate, nextDayStart) => {
  const timeInsOnSelectedDate = new Set();
  
  querySnapshot.forEach(doc => {
    const data = doc.data();
    
    // Skip if no timestamp
    if (!data.timestamp) return;
    
    // Convert Firestore timestamp to Date
    const recordDate = safeTimestampToDate(data.timestamp);
    if (!recordDate) return;
    
    // Check if this is a time in on the selected date
    if (data.type === 'IN' && recordDate >= startDate && recordDate < nextDayStart) {
      timeInsOnSelectedDate.add(data.userId);
    }
  });
  
  return timeInsOnSelectedDate;
};

/**
 * Process an attendance record
 * @param {FirebaseFirestore.QueryDocumentSnapshot} doc - Document snapshot
 * @param {Object} records - Records object to update
 * @param {Set} timeInsOnSelectedDate - Set of user IDs with time-ins on the date
 * @param {Date} startDate - Start date
 * @param {Date} nextDayStart - Next day start
 * @param {Date} currentTime - Current time
 */
const processAttendanceRecord = (doc, records, timeInsOnSelectedDate, startDate, nextDayStart, currentTime) => {
  const data = doc.data();
  
  // Skip if no timestamp
  if (!data.timestamp) return;
  
  // Convert Firestore timestamp to Date
  const recordDate = safeTimestampToDate(data.timestamp);
  if (!recordDate) return;
  
  const userId = data.userId;
  
  // For time ins, only include those on the selected date
  if (data.type === 'IN' && recordDate >= startDate && recordDate < nextDayStart) {
    processTimeInRecord(doc, data, records, userId, recordDate);
  } 
  // For time outs, include those on the selected date OR those that correspond to a time in on the selected date
  // AND only include time outs that have actually occurred (not in the future)
  else if (data.type === 'OUT' && 
          ((recordDate >= startDate && recordDate < nextDayStart) || timeInsOnSelectedDate.has(userId)) &&
          recordDate <= currentTime) {
    processTimeOutRecord(doc, data, records, userId, recordDate);
  }
};

/**
 * Safely converts a Firestore timestamp to a JavaScript Date
 * @param {Object|null} timestamp - Firestore timestamp object
 * @returns {Date|null} - JavaScript Date object or null if invalid
 */
const safeTimestampToDate = (timestamp) => {
  if (!timestamp) return null;
  
  try {
    // Handle Firestore Timestamp objects
    if (typeof timestamp === 'object' && timestamp !== null) {
      if (timestamp.seconds !== undefined) {
        // Standard Firestore timestamp with seconds and optional nanoseconds
        const milliseconds = (timestamp.seconds || 0) * 1000 + (timestamp.nanoseconds || 0) / 1000000;
        const date = new Date(milliseconds);
        
        // Validate the date
        if (isNaN(date.getTime())) {
          console.error('Invalid timestamp conversion:', timestamp);
          return null;
        }
        return date;
      } else if (timestamp.toDate && typeof timestamp.toDate === 'function') {
        // Handle Firestore Timestamp objects that have toDate method
        const date = timestamp.toDate();
        if (isNaN(date.getTime())) {
          console.error('Invalid timestamp.toDate() conversion:', timestamp);
          return null;
        }
        return date;
      }
    }
    
    // Handle ISO string timestamps
    if (typeof timestamp === 'string') {
      const date = new Date(timestamp);
      if (isNaN(date.getTime())) {
        console.error('Invalid string timestamp conversion:', timestamp);
        return null;
      }
      return date;
    }
    
    // Handle numeric timestamps (milliseconds since epoch)
    if (typeof timestamp === 'number') {
      const date = new Date(timestamp);
      if (isNaN(date.getTime())) {
        console.error('Invalid numeric timestamp conversion:', timestamp);
        return null;
      }
      return date;
    }
    
    console.error('Unhandled timestamp format:', timestamp);
    return null;
  } catch (error) {
    console.error('Error converting timestamp:', error, timestamp);
    return null;
  }
};

/**
 * Get record date from data
 * @param {Object} data - Record data
 * @returns {Date|null} - Record date or null if invalid
 */
const getRecordDate = (data) => {
  if (data.timestamp?.seconds) {
    // Server timestamp
    return safeTimestampToDate(data.timestamp);
  } else if (data.date) {
    // Fallback to date field if available
    return new Date(data.date);
  }
  return null;
};

/**
 * Get users scheduled for a specific date
 * @param {string} date - Date string
 * @returns {Object} - Scheduled users
 */
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

/**
 * Get user's attendance status
 * @param {string} userId - User ID
 * @returns {Object} - User's attendance status
 */
export const getUserAttendanceStatus = async (userId) => {
  try {
    // Check if userId is valid
    if (!userId) {
      console.error('getUserAttendanceStatus called with invalid userId:', userId);
      return {
        success: false,
        error: 'Invalid user ID provided',
        canTimeIn: false,
        canTimeOut: false,
        lastRecordType: null,
        lastRecord: null
      };
    }
    
    // Get the user's latest attendance record
    const lastRecord = await getLastAttendanceRecord(userId);
    
    if (!lastRecord) {
      // No records found, user can time in but not time out
      return {
        success: true,
        canTimeIn: true,
        canTimeOut: false,
        lastRecordType: null,
        lastRecord: null
      };
    }
    
    // Get the most recent record type
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

/**
 * Get the last attendance record for a user
 * @param {string} userId - User ID
 * @returns {Object|null} - Last attendance record or null if none found
 */
const getLastAttendanceRecord = async (userId) => {
  // Return null if userId is undefined or null
  if (!userId) {
    console.error('getLastAttendanceRecord called with invalid userId:', userId);
    return null;
  }

  const attendanceRef = collection(db, 'attendance');
  const lastRecordQuery = query(
    attendanceRef,
    where('userId', '==', userId)
  );
  
  const lastRecordSnapshot = await getDocs(lastRecordQuery);
  
  if (lastRecordSnapshot.empty) {
    return null;
  }
  
  // Get all records and sort them client-side
  const records = lastRecordSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  
  // Sort by timestamp in descending order
  records.sort((a, b) => {
    // Use safe comparison that handles null values
    const dateA = safeTimestampToDate(a.timestamp);
    const dateB = safeTimestampToDate(b.timestamp);
    
    if (!dateA && !dateB) return 0;
    if (!dateA) return 1;
    if (!dateB) return -1;
    
    return dateB.getTime() - dateA.getTime();
  });
  
  // Get the most recent record
  return records[0];
};

/**
 * Format an attendance record
 * @param {string} docId - Document ID
 * @param {Object} data - Record data
 * @param {Date} recordDate - Record date
 * @returns {Object} - Formatted record
 */
const formatAttendanceRecord = (docId, data, recordDate) => {
  return {
    id: docId,
    userId: data.userId,
    name: data.name || 'Unknown',
    email: data.email || '',
    type: data.type,
    timestamp: recordDate,
    status: data.status || 'Unknown',
    scheduleTime: data.scheduleTime,
    timeRegion: data.timeRegion || 'PHT'
  };
};

/**
 * Initialize a user record
 * @param {Object} data - Record data
 * @returns {Object} - Initialized user record
 */
const initializeUserRecord = (data) => {
  return {
    userId: data.userId,
    name: data.name || 'Unknown',
    email: data.email || '',
    timeIn: null,
    timeOut: null
  };
};

/**
 * Format record time
 * @param {Date} recordDate - Record date
 * @returns {string} - Formatted time string
 */
const formatRecordTime = (recordDate) => {
  return recordDate ? recordDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }) : 'N/A';
};

/**
 * Process a time-in record
 * @param {FirebaseFirestore.QueryDocumentSnapshot} doc - Document snapshot
 * @param {Object} data - Record data
 * @param {Object} records - Records object to update
 * @param {string} userId - User ID
 * @param {Date} recordDate - Record date
 */
const processTimeInRecord = (doc, data, records, userId, recordDate) => {
  // Format the record
  const record = formatAttendanceRecord(doc.id, data, recordDate);
  
  // Initialize user record if not exists
  if (!records[userId]) {
    records[userId] = initializeUserRecord(data);
  }
  
  // Set time in
  records[userId].timeIn = {
    time: formatRecordTime(recordDate),
    status: record.status,
    id: doc.id
  };
};

/**
 * Process a time-out record
 * @param {FirebaseFirestore.QueryDocumentSnapshot} doc - Document snapshot
 * @param {Object} data - Record data
 * @param {Object} records - Records object to update
 * @param {string} userId - User ID
 * @param {Date} recordDate - Record date
 */
const processTimeOutRecord = (doc, data, records, userId, recordDate) => {
  // Format the record
  const record = formatAttendanceRecord(doc.id, data, recordDate);
  
  // Initialize user record if not exists
  if (!records[userId]) {
    records[userId] = initializeUserRecord(data);
  }
  
  // Set time out
  records[userId].timeOut = {
    time: formatRecordTime(recordDate),
    status: record.status,
    id: doc.id
  };
};
