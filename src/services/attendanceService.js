import { collection, query, where, getDocs, addDoc, Timestamp, doc, getDoc, updateDoc, orderBy, limit, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getAttendanceRules } from './systemSettingsService';

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
    
    // Get attendance rules from system settings
    const rules = await getAttendanceRules();
    const earlyThreshold = rules.timeIn?.earlyThreshold || 15;
    const onTimeThreshold = rules.timeIn?.onTimeThreshold || 5;
    
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
        
        // Get attendance rules from system settings
        const rules = await getAttendanceRules();
        const incompleteThreshold = rules.timeOut?.incompleteThreshold || 30;
        const overtimeThreshold = rules.timeOut?.overtimeThreshold || 30;
        
        // For multi-day shifts, handle the calculation differently
        if (isMultiDayShift) {
          // Calculate the expected end time based on the start time and shift duration
          const expectedEndTime = new Date(lastTimeInDate);
          expectedEndTime.setMinutes(expectedEndTime.getMinutes() + scheduledMinutes);
          
          // Calculate the difference between the actual end time and expected end time
          const endTimeDiff = Math.round((now - expectedEndTime) / (1000 * 60));
          
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
        
        // If user has not timed in and has not been marked absent, mark them as absent
        if (!hasTimedIn && !hasAbsentRecord) {
          const absentId = await markUserAbsent(user.id);
          
          if (absentId) {
            absentCount++;
            console.log(`Marked user ${user.id} as absent`);
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
      q = query(attendanceRef, ...filters, orderBy('timestamp', 'desc'), limit(recordLimit));
    } else {
      q = query(attendanceRef, orderBy('timestamp', 'desc'), limit(recordLimit));
    }
    
    // Execute the query
    const querySnapshot = await getDocs(q);
    
    // Process the results
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Add a formatted date string for easier display
      formattedDate: doc.data().timestamp ? doc.data().timestamp.toDate().toLocaleString() : 'N/A'
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
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      timestamp: doc.data().timestamp ? doc.data().timestamp.toDate() : null
    }));
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
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      timestamp: doc.data().timestamp ? doc.data().timestamp.toDate() : null
    }));
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
    // Get the current record to track in history before deletion
    const recordRef = doc(db, 'attendance', recordId);
    const recordSnapshot = await getDoc(recordRef);
    
    if (!recordSnapshot.exists()) {
      throw new Error('Attendance record not found');
    }
    
    const currentData = recordSnapshot.data();
    
    // Create a history entry to track the deletion
    const historyData = {
      attendanceId: recordId,
      userId: currentData.userId,
      userName: currentData.name,
      previousData: currentData,
      newData: null, // null indicates deletion
      overriddenBy: {
        id: adminId,
        name: adminName
      },
      reason,
      action: 'DELETE',
      timestamp: Timestamp.now()
    };
    
    // Add the history record
    const historyRef = await addDoc(collection(db, 'attendance_history'), historyData);
    
    // Delete the attendance record
    await deleteDoc(recordRef);
    
    return recordId;
  } catch (error) {
    console.error('Error deleting attendance record:', error);
    throw error;
  }
};
