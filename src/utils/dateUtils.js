import { format, parseISO } from 'date-fns';

/**
 * Safely converts a Firestore timestamp to a JavaScript Date
 * @param {Object|null} timestamp - Firestore timestamp object
 * @returns {Date|null} - JavaScript Date object or null if invalid
 */
export const safeTimestampToDate = (timestamp) => {
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
 * Format a timestamp for display
 * @param {Object|string|number} timestamp - Firestore timestamp, ISO string, or milliseconds
 * @param {string} formatStr - Format string for date-fns
 * @returns {string} - Formatted date string or 'N/A' if invalid
 */
export const formatTimestamp = (timestamp, formatStr = 'yyyy-MM-dd HH:mm:ss') => {
  const date = safeTimestampToDate(timestamp);
  if (!date) return 'N/A';
  
  try {
    return format(date, formatStr);
  } catch (error) {
    console.error('Error formatting timestamp:', error);
    return 'N/A';
  }
};

/**
 * Format a timestamp as a date
 * @param {Object|string|number} timestamp - Firestore timestamp, ISO string, or milliseconds
 * @returns {string} - Formatted date or 'N/A' if invalid
 */
export const formatDate = (timestamp) => {
  const date = safeTimestampToDate(timestamp);
  if (!date) return 'N/A';
  
  try {
    return date.toLocaleDateString();
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'N/A';
  }
};

/**
 * Format a timestamp as a time
 * @param {Object|string|number} timestamp - Firestore timestamp, ISO string, or milliseconds
 * @returns {string} - Formatted time or 'N/A' if invalid
 */
export const formatTime = (timestamp) => {
  const date = safeTimestampToDate(timestamp);
  if (!date) return 'N/A';
  
  try {
    return date.toLocaleTimeString();
  } catch (error) {
    console.error('Error formatting time:', error);
    return 'N/A';
  }
};

/**
 * Format a timestamp as a date and time
 * @param {Object|string|number} timestamp - Firestore timestamp, ISO string, or milliseconds
 * @returns {string} - Formatted date and time or 'N/A' if invalid
 */
export const formatDateTime = (timestamp) => {
  const date = safeTimestampToDate(timestamp);
  if (!date) return 'N/A';
  
  try {
    return date.toLocaleString();
  } catch (error) {
    console.error('Error formatting date and time:', error);
    return 'N/A';
  }
};
