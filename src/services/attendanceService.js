import { collection, query, where, getDocs, addDoc, Timestamp, doc, getDoc, updateDoc, orderBy, limit, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getAttendanceRules } from './systemSettingsService';
import { getCurrentTimestamp, getCurrentTimeInZone, timestampToZonedDate, calculateTimeDifferenceInMinutes } from '../utils/timeZoneUtils';

/**
 * Records an attendance entry (time in/out) for a user
 * @param {string} userId - The user ID
 * @param {string} type - The type of attendance record ('In', 'Out', or 'Absent')
 * @param {string} notes - Optional notes for the attendance record
 * @returns {Promise<string>} - The ID of the created attendance record
 */
export const recordAttendance = async (userId, type, notes = '') => {
  try {
    // Get user data to include name and email
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      throw new Error('User not found');
    }
    
    const userData = userDoc.data();
    const timestamp = getCurrentTimestamp();
    
    // For time in/out, determine status based on schedule
    let status = 'N/A';
    let timeDiff = null;
    
    if (type === 'In') {
      status = await determineTimeInStatus(userId);
      timeDiff = await calculateTimeDifference(userId);
    } else if (type === 'Out') {
      const result = await determineTimeOutStatus(userId);
      status = result.status;
      timeDiff = result.timeDiff;
    } else if (type === 'Absent') {
      status = 'Absent';
    }
    
    // Create attendance record
    const attendanceData = {
      userId,
      email: userData.email || '',
      name: `${userData.firstName || ''} ${userData.lastName || ''}`.trim() || userData.email || 'Unknown',
      type,
      status,
      timestamp,
      notes,
      timeDiff
    };
    
    // Add the record to Firestore
    const docRef = await addDoc(collection(db, 'attendance'), attendanceData);
    return docRef.id;
  } catch (error) {
    console.error('Error recording attendance:', error);
    throw error;
  }
};

/**
 * Determines the status for a time-in record based on schedule
 * @param {string} userId - The user ID
 * @returns {Promise<string>} - The status ('Early', 'On Time', 'Late', 'No Schedule')
 */
export const determineTimeInStatus = async (userId) => {
  try {
    // Fetch user's schedule from Firestore
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      return 'No Schedule'; // No status when user not found (remove default schedule behavior)
    }
    
    const userData = userDoc.data();
    const userSchedule = userData.schedule || [];
    const userTimeRegion = userData.timeRegion || 'Asia/Manila'; // Get user's time region
    
    // Build absolute zoned dates to properly handle near-midnight schedules
    const nowZoned = timestampToZonedDate(getCurrentTimestamp(), userTimeRegion);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[nowZoned.getDay()];
    const tomorrowDay = days[(nowZoned.getDay() + 1) % 7];
    
    // Find today's and tomorrow's schedules if they exist
    const todaySchedule = userSchedule && Array.isArray(userSchedule) ?
      userSchedule.find(s => s.dayOfWeek === currentDay) : null;
    const tomorrowSchedule = userSchedule && Array.isArray(userSchedule) ?
      userSchedule.find(s => s.dayOfWeek === tomorrowDay) : null;
    
    // Get attendance rules from system settings
    const rules = await getAttendanceRules();
    const earlyThreshold = rules.timeIn?.earlyThreshold || 15;
    const onTimeThreshold = rules.timeIn?.onTimeThreshold || 5;
    const earlyClockInWindowHours = rules.timeIn?.earlyClockInWindowHours ?? 5; // allow early clock-in window from previous day
    const earlyWindowMinutes = earlyClockInWindowHours * 60;
    
    // Compute diffs against today's and tomorrow's schedule using absolute dates
    let diffToday = null;
    if (todaySchedule?.timeIn) {
      const [h, m] = todaySchedule.timeIn.split(':').map(Number);
      const scheduleDateToday = new Date(nowZoned);
      scheduleDateToday.setHours(h, m || 0, 0, 0);
      diffToday = Math.round((nowZoned - scheduleDateToday) / (1000 * 60)); // negative = early, positive = late
    }
    
    let diffTomorrow = null;
    if (tomorrowSchedule?.timeIn) {
      const [h2, m2] = tomorrowSchedule.timeIn.split(':').map(Number);
      const scheduleDateTomorrow = new Date(nowZoned);
      scheduleDateTomorrow.setDate(scheduleDateTomorrow.getDate() + 1);
      scheduleDateTomorrow.setHours(h2, m2 || 0, 0, 0);
      diffTomorrow = Math.round((nowZoned - scheduleDateTomorrow) / (1000 * 60)); // negative = early (previous day)
    }
    
    // Decide which schedule to evaluate against
    // Prefer tomorrow's schedule if we're within the early window before it
    let diffMinutes = null;
    let used = '';
    if (diffTomorrow !== null && diffTomorrow < 0 && Math.abs(diffTomorrow) <= earlyWindowMinutes) {
      diffMinutes = diffTomorrow;
      used = 'tomorrow';
    } else if (diffToday !== null) {
      diffMinutes = diffToday;
      used = 'today';
    } else {
      return 'No Schedule';
    }
    
    console.log(`Time-in evaluation for user ${userId} [${userTimeRegion}] using ${used} schedule: diff=${diffMinutes} min, thresholds {early:${earlyThreshold}, onTime:${onTimeThreshold}}, earlyWindowHours=${earlyClockInWindowHours}`);
    
    // Determine status based on time difference
    if (diffMinutes < -earlyThreshold) { // More than earlyThreshold minutes early
      return 'Early';
    } else if (diffMinutes <= onTimeThreshold) { // Within onTimeThreshold minutes of scheduled time
      return 'On Time';
    } else { // More than onTimeThreshold minutes late
      return 'Late';
    }
  } catch (error) {
    console.error('Error determining time-in status:', error);
    return 'No Schedule'; // No status on error to avoid default schedule behavior
  }
};

/**
 * Calculates the time difference between current time and scheduled time
 * @param {string} userId - The user ID
 * @returns {Promise<number|null>} - The time difference in minutes, or null if not applicable
 */
export const calculateTimeDifference = async (userId) => {
  try {
    // Fetch user's schedule from Firestore
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      return null;
    }
    
    const userData = userDoc.data();
    const userSchedule = userData.schedule || [];
    const userTimeRegion = userData.timeRegion || 'Asia/Manila'; // Get user's time region
    
    // Build absolute zoned dates
    const nowZoned = timestampToZonedDate(getCurrentTimestamp(), userTimeRegion);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[nowZoned.getDay()];
    const tomorrowDay = days[(nowZoned.getDay() + 1) % 7];
    
    const todaySchedule = userSchedule && Array.isArray(userSchedule) ?
      userSchedule.find(s => s.dayOfWeek === currentDay) : null;
    const tomorrowSchedule = userSchedule && Array.isArray(userSchedule) ?
      userSchedule.find(s => s.dayOfWeek === tomorrowDay) : null;
    
    // Get early window from rules
    const rules = await getAttendanceRules();
    const earlyClockInWindowHours = rules.timeIn?.earlyClockInWindowHours ?? 5;
    const earlyWindowMinutes = earlyClockInWindowHours * 60;
    
    let diffToday = null;
    if (todaySchedule?.timeIn) {
      const [h, m] = todaySchedule.timeIn.split(':').map(Number);
      const scheduleDateToday = new Date(nowZoned);
      scheduleDateToday.setHours(h, m || 0, 0, 0);
      diffToday = Math.round((nowZoned - scheduleDateToday) / (1000 * 60));
    }
    
    let diffTomorrow = null;
    if (tomorrowSchedule?.timeIn) {
      const [h2, m2] = tomorrowSchedule.timeIn.split(':').map(Number);
      const scheduleDateTomorrow = new Date(nowZoned);
      scheduleDateTomorrow.setDate(scheduleDateTomorrow.getDate() + 1);
      scheduleDateTomorrow.setHours(h2, m2 || 0, 0, 0);
      diffTomorrow = Math.round((nowZoned - scheduleDateTomorrow) / (1000 * 60));
    }
    
    // Prefer tomorrow's schedule if within early window before it
    if (diffTomorrow !== null && diffTomorrow < 0 && Math.abs(diffTomorrow) <= earlyWindowMinutes) {
      return diffTomorrow;
    }
    
    // Otherwise, use today's schedule if present
    return diffToday;
  } catch (error) {
    console.error('Error calculating time difference:', error);
    return null;
  }
};

/**
 * Determines the status for a time-out record based on the time worked
 * @param {string} userId - The user ID
 * @returns {Promise<{status: string, timeDiff: number|null}>} - The status ('Complete', 'Incomplete', 'Overtime', 'No Schedule') and time difference
 */
export const determineTimeOutStatus = async (userId) => {
  try {
    let timeDiff = null;
    let status = 'No Schedule'; // Default when no schedule context is available
    
    // Query the most recent time in record for this user
    const attendanceRef = collection(db, 'attendance');
    const q = query(
      attendanceRef,
      where('userId', '==', userId),
      where('type', '==', 'In')
    );
    
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return { status, timeDiff };
    }
    
    // Find the most recent time-in record
    let latestTimeIn = null;
    let latestTimestamp = new Date(0); // Start with oldest possible date
    
    querySnapshot.forEach(doc => {
      const data = doc.data();
      // Safely handle timestamp conversion with error handling
      let recordTime = new Date(0); // Default to oldest date
      try {
        if (data.timestamp) {
          recordTime = typeof data.timestamp.toDate === 'function' ? 
            data.timestamp.toDate() : 
            data.timestamp instanceof Date ? 
              data.timestamp : 
              new Date(data.timestamp) || new Date(0);
        }
      } catch (error) {
        console.error('Error converting timestamp:', error, data);
      }
      
      if (recordTime > latestTimestamp) {
        latestTimestamp = recordTime;
        latestTimeIn = data;
      }
    });
    
    if (!latestTimeIn) {
      return { status, timeDiff };
    }
    
    // Get the user's time zone setting
    const userDoc = await getDoc(doc(db, 'users', userId));
    const userData = userDoc.exists() ? userDoc.data() : {};
    const userTimeRegion = userData.timeRegion || 'Asia/Manila';
    
    // Check if timestamp exists before proceeding
    if (!latestTimeIn.timestamp) {
      console.error('Timestamp is null or undefined in latest time-in record:', latestTimeIn);
      return { status: 'Error', timeDiff: null };
    }
    
    // Convert timestamps to the user's time zone - with error handling
    let lastTimeInZoned;
    try {
      lastTimeInZoned = timestampToZonedDate(latestTimeIn.timestamp, userTimeRegion);
    } catch (error) {
      console.error('Error converting timestamp to zoned date:', error, latestTimeIn);
      return { status: 'Error', timeDiff: null };
    }
    
    // Get current time in user's time zone
    const currentTimeInZone = getCurrentTimeInZone(userTimeRegion);
    const now = new Date();
    now.setHours(currentTimeInZone.hour, currentTimeInZone.minute, 0, 0);
    
    // Calculate time difference in minutes
    timeDiff = Math.round((now - lastTimeInZoned) / (1000 * 60));
    
    // Check if this is a multi-day shift
    const isMultiDayShift = lastTimeInZoned.toDateString() !== now.toDateString();
    
    // Determine if shift is complete based on scheduled duration
    if (userDoc.exists()) {
      const userSchedule = userData.schedule || [];
      
      const timeInDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][lastTimeInZoned.getDay()];
      
      // Find the schedule for the day of the time in
      const daySchedule = userSchedule && Array.isArray(userSchedule) ?
        userSchedule.find(s => s.dayOfWeek === timeInDay) : null;
      
      if (daySchedule && daySchedule.shiftDuration) {
        const scheduledMinutes = daySchedule.shiftDuration * 60;
        
        // Get attendance rules from system settings
        const rules = await getAttendanceRules();
        const incompleteThreshold = rules.timeOut?.incompleteThreshold || 30;
        const overtimeThreshold = rules.timeOut?.overtimeThreshold || 30;
        
        // For multi-day shifts, handle the calculation differently
        if (isMultiDayShift) {
          // Calculate the expected end time based on the start time and shift duration
          const expectedEndTime = new Date(lastTimeInZoned);
          expectedEndTime.setMinutes(expectedEndTime.getMinutes() + scheduledMinutes);
          
          // Calculate the difference between the actual end time and expected end time
          const endTimeDiff = Math.round((now - expectedEndTime) / (1000 * 60));
          
          console.log(`Time out evaluation for user ${userId} in timezone ${userTimeRegion}:`);
          console.log(`Time in: ${lastTimeInZoned.toLocaleString()}, Expected end: ${expectedEndTime.toLocaleString()}, Actual end: ${now.toLocaleString()}`);
          console.log(`End time difference: ${endTimeDiff} minutes, Multi-day shift: ${isMultiDayShift}`);
          
          if (endTimeDiff < -incompleteThreshold) { // More than incompleteThreshold minutes early
            status = 'Incomplete';
          } else if (endTimeDiff > overtimeThreshold) { // More than overtimeThreshold minutes overtime
            status = 'Overtime';
          } else { // Within thresholds of expected end time
            status = 'Complete';
          }
        } else {
          // For same-day shifts, use the original logic
          if (timeDiff < scheduledMinutes - incompleteThreshold) { // incompleteThreshold minutes early
            status = 'Incomplete';
          } else if (timeDiff > scheduledMinutes + overtimeThreshold) { // overtimeThreshold minutes overtime
            status = 'Overtime';
          } else {
            status = 'Complete';
          }
          
          console.log(`Time out evaluation for user ${userId} in timezone ${userTimeRegion}:`);
          console.log(`Time in: ${lastTimeInZoned.toLocaleString()}, Duration: ${scheduledMinutes} minutes, Time worked: ${timeDiff} minutes`);
          console.log(`Status: ${status}, Incomplete threshold: ${incompleteThreshold} minutes, Overtime threshold: ${overtimeThreshold} minutes`);
        }
      }
    }
    
    return { status, timeDiff };
  } catch (error) {
    console.error('Error determining time-out status:', error);
    return { status: 'No Schedule', timeDiff: null };
  }
};

/**
 * Checks if a user has a scheduled shift for the current day
 * @param {string} userId - The user ID
 * @returns {Promise<boolean>} - True if the user has a scheduled shift for today
 */
export const hasScheduledShiftToday = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      return false;
    }
    
    const userData = userDoc.data();
    const userSchedule = userData.schedule || [];
    const userTimeRegion = userData.timeRegion || 'Asia/Manila';
    
    // Get current time in user's time zone
    const zoneTime = getCurrentTimeInZone(userTimeRegion);
    const currentDay = zoneTime.dayOfWeek;
    
    // Find today's schedule if it exists
    const todaySchedule = userSchedule && Array.isArray(userSchedule) ?
      userSchedule.find(s => s.dayOfWeek === currentDay) : null;
    
    return !!todaySchedule;
  } catch (error) {
    console.error('Error checking scheduled shift:', error);
    return false;
  }
};

/**
 * Checks if a user has already timed in for the current day
 * @param {string} userId - The user ID
 * @returns {Promise<boolean>} - True if the user has already timed in today
 */
export const hasTimedInToday = async (userId) => {
  try {
    // Determine time window in the user's time region, allowing early clock-ins
    const userDoc = await getDoc(doc(db, 'users', userId));
    const userData = userDoc.exists() ? userDoc.data() : {};
    const userTimeRegion = userData.timeRegion || 'Asia/Manila';
    const rules = await getAttendanceRules();
    const earlyClockInWindowHours = rules.timeIn?.earlyClockInWindowHours ?? 5;
    
    const nowZoned = timestampToZonedDate(getCurrentTimestamp(), userTimeRegion);
    const startOfDayZoned = new Date(nowZoned);
    startOfDayZoned.setHours(0, 0, 0, 0);
    const earlyWindowStart = new Date(startOfDayZoned);
    earlyWindowStart.setHours(startOfDayZoned.getHours() - earlyClockInWindowHours, startOfDayZoned.getMinutes(), 0, 0);
    const endOfDayZoned = new Date(startOfDayZoned);
    endOfDayZoned.setDate(endOfDayZoned.getDate() + 1);
    
    const startBoundary = Timestamp.fromDate(earlyWindowStart);
    const endBoundary = Timestamp.fromDate(endOfDayZoned);
    
    const attendanceRef = collection(db, 'attendance');
    const q = query(
      attendanceRef,
      where('userId', '==', userId),
      where('type', '==', 'In'),
      where('timestamp', '>=', startBoundary),
      where('timestamp', '<', endBoundary)
    );
    
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking if user timed in today:', error);
    return false;
  }
};

/**
 * Checks if a user has an absent record for the current day
 * @param {string} userId - The user ID
 * @returns {Promise<boolean>} - True if the user has an absent record for today
 */
export const hasAbsentRecordToday = async (userId) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const startOfDay = Timestamp.fromDate(today);
    const endOfDay = Timestamp.fromDate(tomorrow);
    
    const attendanceRef = collection(db, 'attendance');
    const q = query(
      attendanceRef,
      where('userId', '==', userId),
      where('type', '==', 'Absent'),
      where('timestamp', '>=', startOfDay),
      where('timestamp', '<', endOfDay)
    );
    
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking if user has absent record today:', error);
    return false;
  }
};

/**
 * Determines if a user should be marked as absent based on their schedule
 * @param {string} userId - The user ID
 * @returns {Promise<boolean>} - True if the user should be marked as absent
 */
export const shouldMarkUserAbsent = async (userId) => {
  try {
    // Get the user's schedule
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      return false;
    }
    
    const userData = userDoc.data();
    const userSchedule = userData.schedule || [];
    const userTimeRegion = userData.timeRegion || 'Asia/Manila';
    
    // Get current time in user's time zone
    const zoneTime = getCurrentTimeInZone(userTimeRegion);
    const currentDay = zoneTime.dayOfWeek;
    
    // Find today's schedule if it exists
    const todaySchedule = userSchedule && Array.isArray(userSchedule) ?
      userSchedule.find(s => s.dayOfWeek === currentDay) : null;
    
    if (!todaySchedule) {
      return false; // No schedule today
    }
    
    // Parse schedule time
    const [scheduledHour, scheduledMinute] = todaySchedule.timeIn.split(':').map(Number);
    
    // Create schedule time object to compare with current time (both in user's timezone)
    const scheduleTime = {
      hour: scheduledHour,
      minute: scheduledMinute
    };
    
    // Get the absent threshold from system settings
    const rules = await getAttendanceRules();
    const absentThreshold = rules.absent?.threshold || 300; // Default to 5 hours (300 minutes)
    
    // Calculate minutes elapsed since scheduled time (both in user's timezone)
    const minutesElapsed = calculateTimeDifferenceInMinutes(scheduleTime, zoneTime);
    
    // User should be marked absent if more than the threshold minutes have passed
    return minutesElapsed >= absentThreshold;
  } catch (error) {
    console.error('Error checking if user should be marked absent:', error);
    return false;
  }
};

/**
 * Marks a user as absent for the current day
 * @param {string} userId - The user ID
 * @returns {Promise<string|null>} - The ID of the created absent record, or null if not applicable
 */
export const markUserAbsent = async (userId) => {
  try {
    // Check if the user has a scheduled shift today
    const hasShift = await hasScheduledShiftToday(userId);
    if (!hasShift) {
      return null; // No shift scheduled, so no absence to record
    }
    
    // Check if the user has already timed in today
    const timedIn = await hasTimedInToday(userId);
    if (timedIn) {
      return null; // Already timed in, so not absent
    }
    
    // Check if the user already has an absent record for today
    const hasAbsent = await hasAbsentRecordToday(userId);
    if (hasAbsent) {
      return null; // Already marked as absent
    }
    
    // Check if enough time has passed to mark as absent
    const shouldBeAbsent = await shouldMarkUserAbsent(userId);
    if (!shouldBeAbsent) {
      return null; // Not enough time has passed
    }
    
    // Mark the user as absent
    const notes = 'Automatically marked as absent for missing scheduled shift';
    const absentId = await recordAttendance(userId, 'Absent', notes);
    
    return absentId;
  } catch (error) {
    console.error('Error marking user as absent:', error);
    return null;
  }
};

/**
 * Checks all users with scheduled shifts and marks them as absent if they haven't timed in
 * after the configured threshold
 * @returns {Promise<number>} - The number of users marked as absent
 */
export const checkAndMarkAbsentUsers = async () => {
  try {
    // Get attendance rules to check the threshold
    const rules = await getAttendanceRules();
    const absentThreshold = rules.absent?.threshold || 300; // Default to 5 hours (300 minutes)
    console.log(`Checking for absences with threshold of ${absentThreshold} minutes (${Math.round(absentThreshold/60 * 10) / 10} hours)`);
    
    // Get all users
    const usersRef = collection(db, 'users');
    const usersSnapshot = await getDocs(usersRef);
    const users = usersSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    let absentCount = 0;
    
    // Check each user
    for (const user of users) {
      // Skip users without schedules
      if (!user.schedule || !Array.isArray(user.schedule) || user.schedule.length === 0) {
        continue;
      }
      
      // Check if user has a scheduled shift today
      const hasShiftToday = await hasScheduledShiftToday(user.id);
      
      if (hasShiftToday) {
        // Check if user has already timed in today
        const hasTimedIn = await hasTimedInToday(user.id);
        
        // Check if user has already been marked absent today
        const hasAbsentRecord = await hasAbsentRecordToday(user.id);
        
        // If user has not timed in and has not been marked absent, check if they should be marked absent
        if (!hasTimedIn && !hasAbsentRecord) {
          const absentId = await markUserAbsent(user.id);
          
          if (absentId) {
            absentCount++;
            console.log(`Marked user ${user.id} as absent after ${absentThreshold} minutes`);
          }
        }
      }
    }
    
    return absentCount;
  } catch (error) {
    console.error('Error checking and marking absent users:', error);
    return 0;
  }
};

/**
 * Run a scheduled check to mark absent users
 * This function can be called by a scheduled Cloud Function or manually triggered
 * @returns {Promise<number>} - The number of users marked as absent
 */
export const runAbsentCheck = async () => {
  try {
    console.log('Running absent check at', new Date().toISOString());
    const markedCount = await checkAndMarkAbsentUsers();
    console.log(`Marked ${markedCount} users as absent`);
    return markedCount;
  } catch (error) {
    console.error('Error running absent check:', error);
    return 0;
  }
};

/**
 * Get all attendance records with pagination and filtering options
 * @param {Object} options - Query options
 * @param {number} options.limit - Maximum number of records to fetch
 * @param {string} options.userId - Optional user ID to filter by
 * @param {Date} options.startDate - Optional start date to filter by
 * @param {Date} options.endDate - Optional end date to filter by
 * @param {string} options.type - Optional record type to filter by ('In', 'Out', 'Absent')
 * @returns {Promise<Array>} - Array of attendance records
 */
export const getAllAttendanceRecords = async (options = {}) => {
  try {
    const {
      limit: recordLimit = 50,
      userId = null,
      startDate = null,
      endDate = null,
      type = null
    } = options;
    
    // Dynamically adjust the limit based on whether date filters are applied
    let effectiveLimit = recordLimit;
    if (startDate && endDate) {
      // If date range is specified, increase the limit substantially
      // The larger the date range, the more records we might need
      effectiveLimit = 500;
    }
    
    // Start building the query
    let attendanceRef = collection(db, 'attendance');
    const filters = [];
    
    // Add filters if provided
    if (userId) {
      filters.push(where('userId', '==', userId));
    }
    
    if (startDate) {
      filters.push(where('timestamp', '>=', Timestamp.fromDate(new Date(startDate))));
    }
    
    if (endDate) {
      const endDateTime = new Date(endDate);
      endDateTime.setHours(23, 59, 59, 999);
      filters.push(where('timestamp', '<=', Timestamp.fromDate(endDateTime)));
    }
    
    if (type) {
      filters.push(where('type', '==', type));
    }
    
    // Build the query with filters and order by timestamp (descending)
    let q;
    if (filters.length > 0) {
      q = query(attendanceRef, ...filters, orderBy('timestamp', 'desc'), limit(effectiveLimit));
    } else {
      q = query(attendanceRef, orderBy('timestamp', 'desc'), limit(effectiveLimit));
    }
    
    // Execute the query
    const querySnapshot = await getDocs(q);
    
    // Process the results
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Add a formatted date string for easier display with robust error handling
      formattedDate: (() => {
        try {
          const timestamp = doc.data().timestamp;
          if (!timestamp) return 'N/A';
          
          if (typeof timestamp.toDate === 'function') {
            return timestamp.toDate().toLocaleString();
          } else if (timestamp instanceof Date) {
            return timestamp.toLocaleString();
          } else if (typeof timestamp === 'object' && timestamp.seconds !== undefined) {
            return new Date(timestamp.seconds * 1000).toLocaleString();
          } else {
            return new Date(timestamp).toLocaleString();
          }
        } catch (error) {
          console.error('Error formatting timestamp:', error, doc.data());
          return 'N/A';
        }
      })()
    }));
  } catch (error) {
    console.error('Error getting attendance records:', error);
    throw error;
  }
};

/**
 * Override an attendance record with new values and track the change
 * @param {string} recordId - The ID of the attendance record to override
 * @param {Object} newData - The new data to apply to the record
 * @param {string} adminId - The ID of the admin making the override
 * @param {string} adminName - The name of the admin making the override
 * @param {string} reason - The reason for the override
 * @returns {Promise<string>} - The ID of the updated record
 */
export const overrideAttendanceRecord = async (recordId, newData, adminId, adminName, reason) => {
  try {
    // Get the current record to track changes
    const recordRef = doc(db, 'attendance', recordId);
    const recordSnapshot = await getDoc(recordRef);
    
    if (!recordSnapshot.exists()) {
      throw new Error('Attendance record not found');
    }
    
    const currentData = recordSnapshot.data();
    
    // Create a history entry to track the change
    const historyData = {
      attendanceId: recordId,
      userId: currentData.userId,
      userName: currentData.name,
      previousData: currentData,
      newData: { ...currentData, ...newData },
      overriddenBy: {
        id: adminId,
        name: adminName
      },
      reason,
      timestamp: Timestamp.now()
    };
    
    // Add the history record
    const historyRef = await addDoc(collection(db, 'attendance_history'), historyData);
    
    // Update the attendance record with new data and override info
    await updateDoc(recordRef, {
      ...newData,
      overrideInfo: {
        overriddenBy: adminName,
        overriddenById: adminId,
        overriddenAt: Timestamp.now(),
        reason,
        historyId: historyRef.id
      },
      isOverridden: true
    });
    
    return recordId;
  } catch (error) {
    console.error('Error overriding attendance record:', error);
    throw error;
  }
};

/**
 * Get the override history for an attendance record
 * @param {string} recordId - The ID of the attendance record
 * @returns {Promise<Array>} - Array of override history entries
 */
export const getAttendanceOverrideHistory = async (recordId) => {
  try {
    const historyRef = collection(db, 'attendance_history');
    const q = query(
      historyRef,
      where('attendanceId', '==', recordId),
      orderBy('timestamp', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      let convertedTimestamp = null;
      
      try {
        const timestamp = data.timestamp;
        if (timestamp) {
          if (typeof timestamp.toDate === 'function') {
            convertedTimestamp = timestamp.toDate();
          } else if (timestamp instanceof Date) {
            convertedTimestamp = timestamp;
          } else if (typeof timestamp === 'object' && timestamp.seconds !== undefined) {
            convertedTimestamp = new Date(timestamp.seconds * 1000);
          } else {
            convertedTimestamp = new Date(timestamp);
          }
          
          // Verify we have a valid date
          if (isNaN(convertedTimestamp.getTime())) {
            console.error('Invalid date created from timestamp in attendance override history:', timestamp);
            convertedTimestamp = null;
          }
        }
      } catch (error) {
        console.error('Error converting timestamp in attendance override history:', error, data);
        convertedTimestamp = null;
      }
      
      return {
        id: doc.id,
        ...data,
        timestamp: convertedTimestamp
      };
    });
  } catch (error) {
    console.error('Error getting attendance override history:', error);
    throw error;
  }
};

/**
 * Get all attendance override history entries
 * @param {Object} options - Query options
 * @param {number} options.limit - Maximum number of records to fetch
 * @param {string} options.userId - Optional user ID to filter by
 * @param {string} options.adminId - Optional admin ID to filter by
 * @returns {Promise<Array>} - Array of override history entries
 */
export const getAllOverrideHistory = async (options = {}) => {
  try {
    const {
      limit: recordLimit = 50,
      userId = null,
      adminId = null
    } = options;
    
    // Start building the query
    let historyRef = collection(db, 'attendance_history');
    const filters = [];
    
    // Add filters if provided
    if (userId) {
      filters.push(where('userId', '==', userId));
    }
    
    if (adminId) {
      filters.push(where('overriddenBy.id', '==', adminId));
    }
    
    // Build the query with filters and order by timestamp (descending)
    let q;
    if (filters.length > 0) {
      q = query(historyRef, ...filters, orderBy('timestamp', 'desc'), limit(recordLimit));
    } else {
      q = query(historyRef, orderBy('timestamp', 'desc'), limit(recordLimit));
    }
    
    // Execute the query
    const querySnapshot = await getDocs(q);
    
    // Process the results
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      let convertedTimestamp = null;
      
      try {
        const timestamp = data.timestamp;
        if (timestamp) {
          if (typeof timestamp.toDate === 'function') {
            convertedTimestamp = timestamp.toDate();
          } else if (timestamp instanceof Date) {
            convertedTimestamp = timestamp;
          } else if (typeof timestamp === 'object' && timestamp.seconds !== undefined) {
            convertedTimestamp = new Date(timestamp.seconds * 1000);
          } else {
            convertedTimestamp = new Date(timestamp);
          }
          
          // Verify we have a valid date
          if (isNaN(convertedTimestamp.getTime())) {
            console.error('Invalid date created from timestamp in override history:', timestamp);
            convertedTimestamp = null;
          }
        }
      } catch (error) {
        console.error('Error converting timestamp in override history:', error, data);
        convertedTimestamp = null;
      }
      
      return {
        id: doc.id,
        ...data,
        timestamp: convertedTimestamp
      };
    });
  } catch (error) {
    console.error('Error getting override history:', error);
    throw error;
  }
};

/**
 * Delete an attendance record and track the deletion in history
 * @param {string} recordId - The ID of the attendance record to delete
 * @param {string} adminId - The ID of the admin performing the deletion
 * @param {string} adminName - The name of the admin performing the deletion
 * @param {string} reason - The reason for the deletion
 * @returns {Promise<string>} - The ID of the deleted record
 */
export const deleteAttendanceRecord = async (recordId, adminId, adminName, reason) => {
  try {
    // Get the record to delete
    const recordRef = doc(db, 'attendance', recordId);
    const recordDoc = await getDoc(recordRef);
    
    if (!recordDoc.exists()) {
      throw new Error('Attendance record not found');
    }
    
    const recordData = recordDoc.data();
    
    // Create a history record of the deletion
    const historyData = {
      recordId,
      originalData: recordData,
      admin: {
        id: adminId,
        name: adminName
      },
      reason,
      action: 'DELETE',
      timestamp: Timestamp.now()
    };
    
    // Add the history record
    await addDoc(collection(db, 'attendance_history'), historyData);
    
    // Delete the attendance record
    await deleteDoc(recordRef);
    
    return recordId;
  } catch (error) {
    console.error('Error deleting attendance record:', error);
    throw error;
  }
};

/**
 * Checks if a user has failed to time out after 10 hours past their expected time out,
 * and if so, automatically times them out with the note "FAILED TO TIME OUT"
 * @param {string} userId - The user ID
 * @returns {Promise<boolean>} - True if the user can time in (either there's no pending time out or it was handled)
 */
/**
 * Gets the current attendance status for a user
 * @param {string} userId - The user ID
 * @returns {Promise<{status: string, lastRecord: Object|null}>} - The attendance status and last record
 */
export const getAttendanceStatus = async (userId) => {
  try {
    // Query the most recent attendance record for this user
    const attendanceRef = collection(db, 'attendance');
    const q = query(
      attendanceRef,
      where('userId', '==', userId),
      orderBy('timestamp', 'desc'),
      limit(1)
    );
    
    const querySnapshot = await getDocs(q);
    
    // If no records found, user has never timed in/out
    if (querySnapshot.empty) {
      return { status: 'Not Checked In', lastRecord: null };
    }
    
    // Get the data and handle the timestamp safely
    const docData = querySnapshot.docs[0].data();
    const timestamp = docData.timestamp;
    
    // Check if timestamp exists before proceeding
    if (!timestamp) {
      console.error('Timestamp is null or undefined in attendance record:', docData);
      return { status: 'Error', lastRecord: null };
    }
    
    // Create the lastRecord object with a safely converted timestamp
    const lastRecord = {
      id: querySnapshot.docs[0].id,
      ...docData,
      // Handle different timestamp formats safely
      timestamp: timestamp && typeof timestamp.toDate === 'function' 
        ? timestamp.toDate() 
        : timestamp instanceof Date 
          ? timestamp 
          : new Date(timestamp)
    };
    
    // Determine status based on the last record type
    if (lastRecord.type === 'In') {
      return { status: 'Checked In', lastRecord };
    } else if (lastRecord.type === 'Out') {
      // Check if this is from today
      const today = new Date();
      const recordDate = lastRecord.timestamp;
      
      // Ensure recordDate is valid before accessing its methods
      if (!recordDate || !(recordDate instanceof Date) || isNaN(recordDate)) {
        console.error('Invalid timestamp in attendance record:', lastRecord);
        return { status: 'Error', lastRecord };
      }
      
      if (recordDate.getDate() === today.getDate() && 
          recordDate.getMonth() === today.getMonth() && 
          recordDate.getFullYear() === today.getFullYear()) {
        return { status: 'Checked Out Today', lastRecord };
      } else {
        return { status: 'Not Checked In', lastRecord };
      }
    } else if (lastRecord.type === 'Absent') {
      // Check if this is from today
      const today = new Date();
      const recordDate = lastRecord.timestamp;
      
      // Ensure recordDate is valid before accessing its methods
      if (!recordDate || !(recordDate instanceof Date) || isNaN(recordDate)) {
        console.error('Invalid timestamp in attendance record:', lastRecord);
        return { status: 'Error', lastRecord };
      }
      
      if (recordDate.getDate() === today.getDate() && 
          recordDate.getMonth() === today.getMonth() && 
          recordDate.getFullYear() === today.getFullYear()) {
        return { status: 'Absent Today', lastRecord };
      } else {
        return { status: 'Not Checked In', lastRecord };
      }
    }
    
    // Default case
    return { status: 'Not Checked In', lastRecord };
  } catch (error) {
    console.error('Error getting attendance status:', error);
    return { status: 'Error', lastRecord: null };
  }
};

export const checkAndHandleFailedTimeOut = async (userId) => {
  try {
    // Query the most recent attendance record for this user
    const attendanceRef = collection(db, 'attendance');
    const q = query(
      attendanceRef,
      where('userId', '==', userId),
      orderBy('timestamp', 'desc'),
      limit(1)
    );
    
    const querySnapshot = await getDocs(q);
    
    // If no records found or the latest record is already a time-out, user can time in
    if (querySnapshot.empty) {
      return true;
    }
    
    const latestRecord = querySnapshot.docs[0].data();
    
    // If the latest record is already a time-out, user can time in
    if (latestRecord.type !== 'In') {
      return true;
    }
    
    // Check if timestamp exists
    if (!latestRecord.timestamp) {
      console.error('Timestamp is null or undefined in attendance record:', latestRecord);
      return true; // Allow time in to avoid blocking the user
    }
    
    // Get the time-in timestamp
    let timeInDate;
    try {
      timeInDate = latestRecord.timestamp.toDate();
    } catch (error) {
      console.error('Error converting timestamp:', error);
      return true; // Allow time in to avoid blocking the user
    }
    
    const now = new Date();
    
    // Get user's schedule to determine expected time out
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      // If user not found, allow time in (something is wrong with the data)
      console.warn('User document not found when checking failed time out');
      return true;
    }
    
    const userData = userDoc.data();
    const userSchedule = userData.schedule || [];
    
    // Get the day of the time-in
    const timeInDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][timeInDate.getDay()];
    
    // Find the schedule for the day of the time-in
    const daySchedule = userSchedule && Array.isArray(userSchedule) ?
      userSchedule.find(s => s.dayOfWeek === timeInDay) : null;
    
    if (!daySchedule || !daySchedule.shiftDuration) {
      // If no schedule or shift duration found, allow time in
      console.warn('No schedule or shift duration found when checking failed time out');
      return true;
    }
    
    // Calculate expected time out (time in + shift duration)
    const scheduledMinutes = daySchedule.shiftDuration * 60;
    const expectedTimeOut = new Date(timeInDate);
    expectedTimeOut.setMinutes(expectedTimeOut.getMinutes() + scheduledMinutes);
    
    // Calculate hours since expected time out
    const hoursSinceExpectedTimeOut = (now - expectedTimeOut) / (1000 * 60 * 60);
    
    // If it's been more than 10 hours since expected time out, automatically time out the user
    if (hoursSinceExpectedTimeOut > 10) {
      console.log(`User ${userId} failed to time out. Auto timing out after ${hoursSinceExpectedTimeOut.toFixed(2)} hours past expected time out.`);
      
      // Create an automatic time-out record
      await recordAttendance(userId, 'Out', 'FAILED TO TIME OUT');
      
      return true; // User can now time in again
    }
    
    // If it hasn't been 10 hours since expected time out, user needs to time out first
    return false;
  } catch (error) {
    console.error('Error checking for failed time out:', error);
    // In case of error, allow time in to avoid blocking the user
    return true;
  }
};
