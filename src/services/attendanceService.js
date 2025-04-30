import { collection, query, where, getDocs, addDoc, Timestamp, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

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
    const timestamp = Timestamp.now();
    
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
 * @returns {Promise<string>} - The status ('Early', 'On Time', 'Late')
 */
export const determineTimeInStatus = async (userId) => {
  try {
    // Fetch user's schedule from Firestore
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      return 'On Time'; // Default if user not found
    }
    
    const userData = userDoc.data();
    const userSchedule = userData.schedule || [];
    
    const now = new Date();
    const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    
    // Find today's schedule if it exists
    const todaySchedule = userSchedule && Array.isArray(userSchedule) ?
      userSchedule.find(s => s.dayOfWeek === currentDay) : null;
    
    if (!todaySchedule) {
      return 'On Time'; // Default if no schedule found
    }
    
    // Parse schedule time
    const [scheduledHour, scheduledMinute] = todaySchedule.timeIn.split(':').map(Number);
    
    // Create Date objects for comparison
    const scheduleDate = new Date();
    scheduleDate.setHours(scheduledHour, scheduledMinute, 0, 0);
    
    // Calculate time difference in minutes
    const diffMinutes = Math.round((now - scheduleDate) / (1000 * 60));
    
    // Determine status based on time difference
    if (diffMinutes < -15) { // More than 15 minutes early
      return 'Early';
    } else if (diffMinutes <= 15) { // Within 15 minutes of scheduled time
      return 'On Time';
    } else { // More than 15 minutes late
      return 'Late';
    }
  } catch (error) {
    console.error('Error determining time-in status:', error);
    return 'On Time'; // Default on error
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
    
    const now = new Date();
    const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    
    // Find today's schedule if it exists
    const todaySchedule = userSchedule && Array.isArray(userSchedule) ?
      userSchedule.find(s => s.dayOfWeek === currentDay) : null;
    
    if (!todaySchedule) {
      return null;
    }
    
    // Parse schedule time
    const [scheduledHour, scheduledMinute] = todaySchedule.timeIn.split(':').map(Number);
    
    // Create Date objects for comparison
    const scheduleDate = new Date();
    scheduleDate.setHours(scheduledHour, scheduledMinute, 0, 0);
    
    // Calculate time difference in minutes
    return Math.round((now - scheduleDate) / (1000 * 60));
  } catch (error) {
    console.error('Error calculating time difference:', error);
    return null;
  }
};

/**
 * Determines the status for a time-out record based on the time worked
 * @param {string} userId - The user ID
 * @returns {Promise<{status: string, timeDiff: number|null}>} - The status and time difference
 */
export const determineTimeOutStatus = async (userId) => {
  try {
    let timeDiff = null;
    let status = 'Complete';
    
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
      const recordTime = data.timestamp?.toDate() || new Date(0);
      
      if (recordTime > latestTimestamp) {
        latestTimestamp = recordTime;
        latestTimeIn = data;
      }
    });
    
    if (!latestTimeIn) {
      return { status, timeDiff };
    }
    
    const lastTimeInDate = latestTimeIn.timestamp.toDate();
    const now = new Date();
    
    // Calculate time difference in minutes
    timeDiff = Math.round((now - lastTimeInDate) / (1000 * 60));
    
    // Check if this is a multi-day shift
    const isMultiDayShift = lastTimeInDate.toDateString() !== now.toDateString();
    
    // Determine if shift is complete based on scheduled duration
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const userSchedule = userData.schedule || [];
      
      const timeInDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][lastTimeInDate.getDay()];
      
      // Find the schedule for the day of the time in
      const daySchedule = userSchedule && Array.isArray(userSchedule) ?
        userSchedule.find(s => s.dayOfWeek === timeInDay) : null;
      
      if (daySchedule && daySchedule.shiftDuration) {
        const scheduledMinutes = daySchedule.shiftDuration * 60;
        
        // For multi-day shifts, handle the calculation differently
        if (isMultiDayShift) {
          // Calculate the expected end time based on the start time and shift duration
          const expectedEndTime = new Date(lastTimeInDate);
          expectedEndTime.setMinutes(expectedEndTime.getMinutes() + scheduledMinutes);
          
          // Calculate the difference between the actual end time and expected end time
          const endTimeDiff = Math.round((now - expectedEndTime) / (1000 * 60));
          
          if (endTimeDiff < -30) { // More than 30 minutes early
            status = 'Incomplete';
          } else if (endTimeDiff > 30) { // More than 30 minutes overtime
            status = 'Overtime';
          } else { // Within 30 minutes of expected end time
            status = 'Complete';
          }
        } else {
          // For same-day shifts, use the original logic
          if (timeDiff < scheduledMinutes - 30) { // 30 minutes early
            status = 'Incomplete';
          } else if (timeDiff > scheduledMinutes + 30) { // 30 minutes overtime
            status = 'Overtime';
          } else {
            status = 'Complete';
          }
        }
      }
    }
    
    return { status, timeDiff };
  } catch (error) {
    console.error('Error determining time-out status:', error);
    return { status: 'Complete', timeDiff: null };
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
    
    const now = new Date();
    const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    
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
      where('type', '==', 'In'),
      where('timestamp', '>=', startOfDay),
      where('timestamp', '<', endOfDay)
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
 * @returns {Promise<number>} - The number of users marked as absent
 */
export const checkAndMarkAbsentUsers = async () => {
  try {
    // Get all users
    const usersCollection = collection(db, 'users');
    const userSnapshot = await getDocs(usersCollection);
    
    let absentCount = 0;
    
    // Process each user
    const promises = userSnapshot.docs.map(async (userDoc) => {
      const userId = userDoc.id;
      const userData = userDoc.data();
      
      // Skip users without schedules
      if (!userData.schedule || !Array.isArray(userData.schedule) || userData.schedule.length === 0) {
        return;
      }
      
      // Check if the user has a scheduled shift today
      const hasShift = await hasScheduledShiftToday(userId);
      if (!hasShift) {
        return;
      }
      
      // Get the user's schedule for today
      const now = new Date();
      const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
      const todaySchedule = userData.schedule.find(s => s.dayOfWeek === currentDay);
      
      if (!todaySchedule || !todaySchedule.timeIn || !todaySchedule.shiftDuration) {
        return;
      }
      
      // Calculate the end time of the shift
      const [scheduledHour, scheduledMinute] = todaySchedule.timeIn.split(':').map(Number);
      const scheduleDate = new Date();
      scheduleDate.setHours(scheduledHour, scheduledMinute, 0, 0);
      
      // Add the shift duration to get the end time
      const shiftEndTime = new Date(scheduleDate);
      shiftEndTime.setMinutes(shiftEndTime.getMinutes() + (todaySchedule.shiftDuration * 60));
      
      // If the current time is past the end of the shift and the user hasn't timed in
      if (now > shiftEndTime) {
        const timedIn = await hasTimedInToday(userId);
        const hasAbsent = await hasAbsentRecordToday(userId);
        
        if (!timedIn && !hasAbsent) {
          // Mark the user as absent
          const absentId = await markUserAbsent(userId);
          if (absentId) {
            absentCount++;
          }
        }
      }
    });
    
    await Promise.all(promises);
    return absentCount;
  } catch (error) {
    console.error('Error checking and marking absent users:', error);
    return 0;
  }
};
