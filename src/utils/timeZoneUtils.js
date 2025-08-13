import { Timestamp } from 'firebase/firestore';

/**
 * Standardized time zone utilities to ensure consistent handling across the application
 */

/**
 * Gets the current timestamp in UTC 
 * @returns {Timestamp} Current time as a Firestore Timestamp
 */
export const getCurrentTimestamp = () => {
  return Timestamp.now();
};

/**
 * Converts a Firestore Timestamp to a local Date object in the specified time zone
 * @param {Timestamp} timestamp - The Firestore timestamp
 * @param {string} timeZone - The IANA time zone identifier (e.g., 'Asia/Manila')
 * @returns {Date} Date object adjusted for the specified time zone
 */
export const timestampToZonedDate = (timestamp, timeZone) => {
  if (!timestamp) {
    console.error('Null or undefined timestamp passed to timestampToZonedDate');
    return new Date(); // Return current date as fallback
  }
  
  let date;
  try {
    // Handle different timestamp formats
    if (typeof timestamp.toDate === 'function') {
      date = timestamp.toDate();
    } else if (timestamp instanceof Date) {
      date = timestamp;
    } else if (typeof timestamp === 'object' && timestamp.seconds !== undefined) {
      // Handle Firestore timestamp object format
      date = new Date(timestamp.seconds * 1000);
    } else {
      // Try to convert whatever we got to a date
      date = new Date(timestamp);
    }
    
    // Verify we have a valid date
    if (isNaN(date.getTime())) {
      console.error('Invalid date created from timestamp:', timestamp);
      return new Date(); // Return current date as fallback
    }
  } catch (error) {
    console.error('Error converting timestamp to date:', error, timestamp);
    return new Date(); // Return current date as fallback
  }
  
  // If no specific time zone is requested, return local browser time
  if (!timeZone) return date;
  
  // Convert the date to a string representation in the desired time zone
  // This preserves the absolute point in time while changing the representation
  try {
    const options = {
      timeZone,
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false
    };
    
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const zonedDateParts = formatter.formatToParts(date);
    
    // Extract components from the formatted parts
    const extract = (type) => {
      const part = zonedDateParts.find(part => part.type === type);
      return part ? parseInt(part.value, 10) : 0;
    };
    
    // Create a new date using the components from the formatted date
    const zonedDate = new Date(
      extract('year'),
      extract('month') - 1, // JavaScript months are 0-indexed
      extract('day'),
      extract('hour'),
      extract('minute'),
      extract('second')
    );
    
    return zonedDate;
  } catch (error) {
    console.error(`Error converting to time zone ${timeZone}:`, error);
    return date; // Fall back to local time
  }
};

/**
 * Gets the current date components in a specified time zone
 * @param {string} timeZone - IANA time zone identifier
 * @returns {Object} Object with day, hour, minute properties in the specified zone
 */
export const getCurrentTimeInZone = (timeZone) => {
  try {
    const now = new Date();
    
    const options = {
      timeZone,
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    };
    
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(now);
    
    // Extract components
    const day = parts.find(part => part.type === 'weekday')?.value || '';
    const hour = parseInt(parts.find(part => part.type === 'hour')?.value || '0', 10);
    const minute = parseInt(parts.find(part => part.type === 'minute')?.value || '0', 10);
    
    return {
      dayOfWeek: day,
      hour,
      minute
    };
  } catch (error) {
    console.error(`Error getting current time in zone ${timeZone}:`, error);
    // Fallback to local time
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return {
      dayOfWeek: days[now.getDay()],
      hour: now.getHours(),
      minute: now.getMinutes()
    };
  }
};

/**
 * Formats a date for display according to user preferences
 * @param {Date} date - The date to format
 * @param {boolean} use24HourFormat - Whether to use 24-hour format
 * @param {string} timeZone - Optional time zone identifier
 * @returns {string} Formatted time string
 */
export const formatTimeForDisplay = (date, use24HourFormat, timeZone = null) => {
  if (!date) return '';
  
  try {
    const options = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: !use24HourFormat,
    };
    
    if (timeZone) {
      options.timeZone = timeZone;
    }
    
    return new Intl.DateTimeFormat('en-US', options).format(date);
  } catch (error) {
    console.error('Error formatting time:', error);
    // Fallback formatting
    return date.toLocaleTimeString();
  }
};

/**
 * Calculate time difference in minutes between two times in the same time zone
 * @param {Object} time1 - Object with hour and minute properties
 * @param {Object} time2 - Object with hour and minute properties
 * @returns {number} Difference in minutes
 */
export const calculateTimeDifferenceInMinutes = (time1, time2) => {
  const minutes1 = (time1.hour * 60) + time1.minute;
  const minutes2 = (time2.hour * 60) + time2.minute;
  return minutes2 - minutes1;
};
