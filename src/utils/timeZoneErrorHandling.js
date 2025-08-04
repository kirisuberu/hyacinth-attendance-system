/**
 * Enhanced error handling for time zone operations
 * 
 * This module provides utilities to gracefully handle time zone errors
 * and provide helpful fallbacks when time zone operations fail.
 */

/**
 * Enum of potential time zone error types
 */
export const TimeZoneErrorType = {
  INVALID_TIMEZONE: 'invalid_timezone',
  PARSE_ERROR: 'parse_error',
  CONVERSION_ERROR: 'conversion_error',
  CALCULATION_ERROR: 'calculation_error',
  FORMAT_ERROR: 'format_error',
  UNKNOWN: 'unknown'
};

/**
 * Log and handle time zone related errors
 * @param {Error} error - The error that occurred
 * @param {string} operation - Description of the operation that failed
 * @param {string} timeZone - The time zone being used
 * @returns {TimeZoneErrorType} The categorized error type
 */
export const handleTimeZoneError = (error, operation, timeZone) => {
  let errorType = TimeZoneErrorType.UNKNOWN;
  
  // Determine error type based on message or other properties
  if (error.message && error.message.includes('Invalid time zone specified')) {
    errorType = TimeZoneErrorType.INVALID_TIMEZONE;
  } else if (error.message && error.message.includes('is not a valid')) {
    errorType = TimeZoneErrorType.INVALID_TIMEZONE;
  } else if (error.message && error.message.includes('parsing')) {
    errorType = TimeZoneErrorType.PARSE_ERROR;
  } else if (error.message && error.message.includes('convert')) {
    errorType = TimeZoneErrorType.CONVERSION_ERROR;
  } else if (error.message && error.message.includes('format')) {
    errorType = TimeZoneErrorType.FORMAT_ERROR;
  }
  
  // Log detailed information
  console.error(`Time Zone Error [${errorType}] during ${operation}:`, {
    message: error.message,
    timeZone,
    stack: error.stack,
    timestamp: new Date().toISOString()
  });
  
  return errorType;
};

/**
 * Validates if a time zone string is valid
 * @param {string} timeZone - The time zone to validate
 * @returns {boolean} Whether the time zone is valid
 */
export const isValidTimeZone = (timeZone) => {
  if (!timeZone) return false;
  
  try {
    // Attempt to use the time zone in a formatter
    Intl.DateTimeFormat(undefined, { timeZone });
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Get a fallback time zone when the requested one is invalid
 * @param {string} invalidTimeZone - The invalid time zone
 * @param {string} [defaultTimeZone='UTC'] - Default fallback time zone
 * @returns {string} A valid time zone to use
 */
export const getFallbackTimeZone = (invalidTimeZone, defaultTimeZone = 'UTC') => {
  // First try system's time zone
  try {
    const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (systemTimeZone && isValidTimeZone(systemTimeZone)) {
      console.warn(`Invalid time zone '${invalidTimeZone}', falling back to system time zone: ${systemTimeZone}`);
      return systemTimeZone;
    }
  } catch (error) {
    // Ignore errors from system time zone detection
  }
  
  // Then try common similar time zones (for typos or outdated names)
  const timeZoneMappings = {
    // Common outdated/alternate names
    'Asia/Calcutta': 'Asia/Kolkata',
    'Asia/Saigon': 'Asia/Ho_Chi_Minh',
    'Asia/Katmandu': 'Asia/Kathmandu',
    'America/Buenos_Aires': 'America/Argentina/Buenos_Aires',
    // Common abbreviations that aren't IANA identifiers
    'EST': 'America/New_York',
    'CST': 'America/Chicago',
    'MST': 'America/Denver',
    'PST': 'America/Los_Angeles',
    'GMT': 'Europe/London',
    'IST': 'Asia/Kolkata',
    'JST': 'Asia/Tokyo',
    'AEST': 'Australia/Sydney',
    // Default region guesses based on country codes
    'US': 'America/New_York',
    'UK': 'Europe/London',
    'JP': 'Asia/Tokyo',
    'CN': 'Asia/Shanghai',
    'IN': 'Asia/Kolkata',
    'PH': 'Asia/Manila',
    'SG': 'Asia/Singapore',
    'AU': 'Australia/Sydney'
  };
  
  // Check if we have a direct mapping
  if (invalidTimeZone in timeZoneMappings) {
    const mappedTimeZone = timeZoneMappings[invalidTimeZone];
    if (isValidTimeZone(mappedTimeZone)) {
      console.warn(`Mapped invalid time zone '${invalidTimeZone}' to '${mappedTimeZone}'`);
      return mappedTimeZone;
    }
  }
  
  // Resort to default
  console.warn(`No valid mapping for time zone '${invalidTimeZone}', using default: ${defaultTimeZone}`);
  return defaultTimeZone;
};

/**
 * Safely execute a function that uses time zones, with fallback handling
 * @param {Function} fn - The function to execute
 * @param {Array} args - Arguments to pass to the function
 * @param {Object} options - Options for error handling
 * @param {Function} options.fallbackFn - Function to call if main function fails
 * @param {*} options.defaultValue - Default value to return on error
 * @returns {*} The result of the function or fallback value
 */
export const safeTimeZoneOperation = (fn, args, options = {}) => {
  const { 
    fallbackFn = null, 
    defaultValue = null,
    operation = 'time zone operation',
    timeZone = args.find(arg => typeof arg === 'string')
  } = options;
  
  try {
    // Try the original function
    return fn(...args);
  } catch (error) {
    // Handle the error
    const errorType = handleTimeZoneError(error, operation, timeZone);
    
    // Try fallback function if provided
    if (fallbackFn) {
      try {
        return fallbackFn(...args);
      } catch (fallbackError) {
        console.error('Fallback function also failed:', fallbackError);
      }
    }
    
    // Return default value as last resort
    return defaultValue;
  }
};
