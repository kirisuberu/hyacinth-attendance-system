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
  
  // Calculate the initial time difference in minutes
  let diffMinutes = Math.round((localDate.getTime() - scheduleDate.getTime()) / (1000 * 60));
  
  console.log('Initial time comparison:', {
    localDate: localDate.toISOString(),
    scheduleDate: scheduleDate.toISOString(),
    diffMinutes
  });

  // Adjust time difference based on type and shift patterns
  diffMinutes = adjustTimeDifference(diffMinutes, scheduleHours, localDate, scheduleDate, type);
  
  const timeDiff = formatTimeDiff(diffMinutes);
  
  // Determine status based on the time difference and type
  let status = determineStatus(diffMinutes, type);
  
  return { status, timeDiff };
};

/**
 * Adjust time difference based on shift patterns
 * @param {number} diffMinutes - Initial time difference in minutes
 * @param {number} scheduleHours - Scheduled hours
 * @param {Date} localDate - Actual time as Date object
 * @param {Date} scheduleDate - Schedule time as Date object
 * @param {string} type - Record type: 'IN' or 'OUT'
 * @returns {number} - Adjusted time difference in minutes
 */
const adjustTimeDifference = (diffMinutes, scheduleHours, localDate, scheduleDate, type) => {
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
    
    // Handle unusually large positive difference (more than 10 hours late)
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
  
  return diffMinutes;
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
    
    // Get schedule information based on user data and attendance type
    const { scheduleTime, currentShift } = await getScheduleInfo(userData, type, now);
    
    // Ensure we have a valid time region
    const shiftTimeRegion = currentShift?.timeRegion || userData.timeRegion || 'PHT';
    
    // Calculate attendance status based on schedule time
    const { status, timeDiff } = calculateAttendanceStatus(scheduleTime, now, type, shiftTimeRegion);

    // For OUT records, find the corresponding IN record to calculate shift duration
    const shiftDuration = type === 'OUT' 
      ? await calculateShiftDuration(userId, now) 
      : null;

    // Prepare and save the attendance record
    const attendanceRecord = createAttendanceRecord(
      userId, 
      userData.email || '', 
      userData.name || userData.displayName || 'Unknown User',
      type, 
      now, 
      status, 
      scheduleTime, 
      timeDiff, 
      currentShift?.id || null, 
      shiftTimeRegion, 
      notes,
      shiftDuration
    );

    // Save to Firestore with custom document ID
    const customDocId = generateDocumentId(now, type, attendanceRecord.name);
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
 * Get schedule information based on user data and attendance type
 * @param {Object} userData - User data from Firestore
 * @param {string} type - Record type: 'IN' or 'OUT'
 * @param {Date} now - Current date and time
 * @returns {Object} - Schedule time and current shift
 */
const getScheduleInfo = async (userData, type, now) => {
  const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const previousDay = new Date(now);
  previousDay.setDate(previousDay.getDate() - 1);
  const previousDayOfWeek = previousDay.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  
  let scheduleTime = null;
  let currentShift = null;
  const userSchedule = userData.schedule || {};
  
  // Check if schedule is empty or not properly configured
  if (Object.keys(userSchedule).length === 0) {
    console.log('User has no schedule configured. Using default schedule time.');
    // Use default schedule times based on type
    scheduleTime = type === 'IN' ? '09:00' : '18:00';
    
    // Create a default shift for reference
    currentShift = {
      id: 'default',
      startDay: dayOfWeek,
      startTime: '09:00',
      endDay: dayOfWeek,
      endTime: '18:00'
    };
    
    return { scheduleTime, currentShift };
  }
  
  // Handle time-in logic
  if (type === 'IN') {
    return await getTimeInSchedule(userData, userSchedule, now, dayOfWeek);
  } 
  // Handle time-out logic
  else {
    return getTimeOutSchedule(userSchedule, dayOfWeek, previousDayOfWeek);
  }
};

/**
 * Get schedule information for time-in
 * @param {Object} userData - User data from Firestore
 * @param {Object} userSchedule - User's schedule
 * @param {Date} now - Current date and time
 * @param {string} dayOfWeek - Current day of week
 * @returns {Object} - Schedule time and current shift
 */
const getTimeInSchedule = async (userData, userSchedule, now, dayOfWeek) => {
  // Get the current time
  const currentTime = now.getHours() * 60 + now.getMinutes(); // Current time in minutes
  
  // Find all potential shifts for today and next day
  const { todayShifts, nextDayShifts } = findPotentialShifts(userSchedule, dayOfWeek, now);
  
  // Sort shifts by start time
  const sortedTodayShifts = sortShiftsByTime(todayShifts);
  const sortedNextDayShifts = sortShiftsByTime(nextDayShifts);
  
  // Get the last attendance record
  const lastRecord = await getLastAttendanceRecord(userData.userId);
  
  // Find the appropriate shift to use
  let selectedShift = findAppropriateShift(
    lastRecord, 
    userSchedule, 
    sortedTodayShifts, 
    sortedNextDayShifts, 
    currentTime, 
    now
  );
  
  if (selectedShift) {
    return {
      scheduleTime: selectedShift.startTime,
      currentShift: selectedShift
    };
  } 
  
  // Fallback: use the first available shift
  if (Object.entries(userSchedule).length > 0) {
    const [shiftId, firstShift] = Object.entries(userSchedule)[0];
    return {
      scheduleTime: firstShift.startTime,
      currentShift: { ...firstShift, id: shiftId }
    };
  }
  
  return { scheduleTime: null, currentShift: null };
};

/**
 * Find potential shifts for today and next day
 * @param {Object} userSchedule - User's schedule
 * @param {string} dayOfWeek - Current day of week
 * @param {Date} now - Current date and time
 * @returns {Object} - Today's shifts and next day's shifts
 */
const findPotentialShifts = (userSchedule, dayOfWeek, now) => {
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
  
  return { todayShifts, nextDayShifts };
};

/**
 * Sort shifts by start time
 * @param {Array} shifts - Array of shift objects
 * @returns {Array} - Sorted array of shift objects
 */
const sortShiftsByTime = (shifts) => {
  return shifts.sort((a, b) => {
    const [aHours, aMinutes] = a.startTime.split(':').map(Number);
    const [bHours, bMinutes] = b.startTime.split(':').map(Number);
    return (aHours * 60 + aMinutes) - (bHours * 60 + bMinutes);
  });
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
    const timestampA = a.timestamp?.seconds || 0;
    const timestampB = b.timestamp?.seconds || 0;
    return timestampB - timestampA;
  });
  
  // Get the most recent record
  return records[0];
};

/**
 * Find the appropriate shift for time-in
 * @param {Object|null} lastRecord - Last attendance record
 * @param {Object} userSchedule - User's schedule
 * @param {Array} sortedTodayShifts - Today's shifts sorted by start time
 * @param {Array} sortedNextDayShifts - Next day's shifts sorted by start time
 * @param {number} currentTime - Current time in minutes since midnight
 * @param {Date} now - Current date and time
 * @returns {Object|null} - Selected shift or null if none found
 */
const findAppropriateShift = (lastRecord, userSchedule, sortedTodayShifts, sortedNextDayShifts, currentTime, now) => {
  let selectedShift = null;
  
  // If we have a previous record with a shift, find the next shift
  if (lastRecord && lastRecord.shiftId) {
    // Get the previous shift details
    const prevShift = userSchedule[lastRecord.shiftId];
    
    if (prevShift) {
      // Calculate when the previous shift ended (or was supposed to end)
      const [endHours, endMinutes] = prevShift.endTime.split(':').map(Number);
      
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
        } else if (allShifts.length > 0) {
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
  
  return selectedShift;
};

/**
 * Get schedule information for time-out
 * @param {Object} userSchedule - User's schedule
 * @param {string} dayOfWeek - Current day of week
 * @param {string} previousDayOfWeek - Previous day of week
 * @returns {Object} - Schedule time and current shift
 */
const getTimeOutSchedule = (userSchedule, dayOfWeek, previousDayOfWeek) => {
  let scheduleTime = null;
  let currentShift = null;
  
  // For time out, look for shifts that either:
  // 1. End on the current day (same-day shifts)
  // 2. Started the previous day and end today (overnight shifts)
  Object.entries(userSchedule).forEach(([shiftId, shift]) => {
    if (shift.endDay && shift.endDay.toLowerCase() === dayOfWeek) {
      // For same-day shifts, check if the start day is also today
      if (shift.startDay && shift.startDay.toLowerCase() === dayOfWeek) {
        scheduleTime = shift.endTime;
        currentShift = { ...shift, id: shiftId };
        console.log('Found matching same-day OUT schedule:', shift);
      }
      // For overnight shifts that started yesterday and end today
      else if (shift.startDay && shift.startDay.toLowerCase() === previousDayOfWeek) {
        scheduleTime = shift.endTime;
        currentShift = { ...shift, id: shiftId };
        console.log('Found matching overnight OUT schedule:', shift);
      }
    }
  });
  
  // If no matching schedule found, use the first available end time
  if (!scheduleTime && Object.entries(userSchedule).length > 0) {
    const [shiftId, firstShift] = Object.entries(userSchedule)[0];
    scheduleTime = firstShift.endTime;
    currentShift = { ...firstShift, id: shiftId };
    console.log('No matching schedule for today, using first available end time:', scheduleTime);
  }
  
  return { scheduleTime, currentShift };
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
      const recordDate = new Date(record.timestamp.seconds * 1000);
      return recordDate >= startOfLookup;
    });
  
  // Sort by timestamp in descending order to get the most recent IN record
  inRecords.sort((a, b) => {
    const timestampA = a.timestamp?.seconds || 0;
    const timestampB = b.timestamp?.seconds || 0;
    return timestampB - timestampA;
  });
  
  if (inRecords.length === 0) {
    return null;
  }
  
  const correspondingInRecord = inRecords[0];
  console.log('Found corresponding IN record:', correspondingInRecord);
  
  // Calculate shift duration
  const inTime = new Date(correspondingInRecord.timestamp.seconds * 1000);
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
    const recordDate = getRecordDate(data);
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
  const recordDate = getRecordDate(data);
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
 * Get record date from data
 * @param {Object} data - Record data
 * @returns {Date|null} - Record date or null if invalid
 */
const getRecordDate = (data) => {
  if (data.timestamp?.seconds) {
    // Server timestamp
    return new Date(data.timestamp.seconds * 1000);
  } else if (data.date) {
    // Fallback to date field if available
    return new Date(data.date);
  }
  return null;
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
