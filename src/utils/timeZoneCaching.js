/**
 * Time Zone Caching Utilities
 * 
 * This module provides caching functionality for expensive time zone operations
 * to improve performance when the same operations are performed repeatedly.
 */

/**
 * Simple LRU (Least Recently Used) Cache implementation
 */
class LRUCache {
  /**
   * Create a new LRU Cache
   * @param {number} capacity - Maximum number of items to store
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  /**
   * Get a value from the cache
   * @param {string} key - Cache key
   * @returns {*} The cached value or undefined if not found
   */
  get(key) {
    if (!this.cache.has(key)) {
      return undefined;
    }
    
    // Get the value
    const value = this.cache.get(key);
    
    // Move the entry to the end (most recently used)
    this.cache.delete(key);
    this.cache.set(key, value);
    
    return value;
  }
  
  /**
   * Add or update a cache entry
   * @param {string} key - Cache key
   * @param {*} value - Value to cache
   */
  put(key, value) {
    // If the key exists, remove it first
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } 
    // If at capacity, remove the first (oldest) item
    else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    
    // Add the new value
    this.cache.set(key, value);
  }
  
  /**
   * Clear all cached values
   */
  clear() {
    this.cache.clear();
  }
  
  /**
   * Get the current size of the cache
   * @returns {number} Number of items in cache
   */
  size() {
    return this.cache.size;
  }
}

/**
 * Cache for format results
 * Caches formatted time strings based on timestamp, timeZone, and format options
 */
const formatCache = new LRUCache(100);

/**
 * Cache for time zone conversion results
 * Caches converted dates based on timestamp and timeZone
 */
const conversionCache = new LRUCache(50);

/**
 * Cache for time zone validations
 * Caches whether a time zone is valid
 */
const validationCache = new LRUCache(30);

/**
 * Generate a cache key for a timestamp and timezone
 * @param {Object} timestamp - Firestore timestamp
 * @param {string} timeZone - IANA time zone identifier
 * @returns {string} Cache key
 */
const generateTimestampKey = (timestamp, timeZone) => {
  if (!timestamp || !timestamp.seconds) return 'invalid';
  return `${timestamp.seconds}-${timestamp.nanoseconds || 0}-${timeZone}`;
};

/**
 * Generate a cache key for formatting options
 * @param {Object} options - Formatting options
 * @returns {string} Cache key
 */
const generateFormatOptionsKey = (options) => {
  return JSON.stringify(options || {});
};

/**
 * Cached version of timestampToZonedDate
 * @param {Object} timestamp - Firestore timestamp
 * @param {string} timeZone - IANA time zone identifier
 * @returns {Date} Date adjusted for timezone
 */
export const cachedTimestampToZonedDate = (timestamp, timeZone) => {
  if (!timestamp || !timeZone) return null;
  
  const cacheKey = generateTimestampKey(timestamp, timeZone);
  let zonedDate = conversionCache.get(cacheKey);
  
  if (zonedDate === undefined) {
    // Convert directly without using the original function to avoid circular imports
    try {
      // Create a Date from the timestamp
      const date = timestamp.toDate();
      
      // Format the date in the target timezone, then parse it back
      const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false, timeZone
      };
      
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(date);
      
      // Extract the components
      const getValue = (type) => {
        const part = parts.find(p => p.type === type);
        return part ? parseInt(part.value, 10) : 0;
      };
      
      // Month in JS Date is 0-indexed
      const month = getValue('month') - 1;
      
      // Create a new Date with the components
      zonedDate = new Date(
        getValue('year'),
        month,
        getValue('day'),
        getValue('hour'),
        getValue('minute'),
        getValue('second')
      );
      
      // Cache the result
      conversionCache.put(cacheKey, zonedDate);
    } catch (error) {
      console.error('Error in cachedTimestampToZonedDate:', error);
      return timestamp.toDate(); // Fallback to local date
    }
  }
  
  return zonedDate;
};

/**
 * Cached version of formatTimeForDisplay
 * @param {Object} timestamp - Firestore timestamp
 * @param {string} timeZone - IANA time zone identifier
 * @param {boolean} use24HourFormat - Whether to use 24-hour format
 * @param {Object} options - Additional format options
 * @returns {string} Formatted time string
 */
export const cachedFormatTimeForDisplay = (timestamp, timeZone, use24HourFormat, options = {}) => {
  if (!timestamp) return '';
  
  const cacheKey = `${generateTimestampKey(timestamp, timeZone)}-${use24HourFormat}-${generateFormatOptionsKey(options)}`;
  let formattedString = formatCache.get(cacheKey);
  
  if (formattedString === undefined) {
    try {
      const date = timestamp.toDate();
      
      const formatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: !use24HourFormat,
        timeZone,
        ...options
      };
      
      formattedString = new Intl.DateTimeFormat('en-US', formatOptions).format(date);
      
      // Cache the result
      formatCache.put(cacheKey, formattedString);
    } catch (error) {
      console.error('Error in cachedFormatTimeForDisplay:', error);
      // Fallback to basic formatting
      const date = timestamp.toDate();
      formattedString = date.toLocaleTimeString();
    }
  }
  
  return formattedString;
};

/**
 * Cached version of isValidTimeZone
 * @param {string} timeZone - The time zone to validate
 * @returns {boolean} Whether the time zone is valid
 */
export const cachedIsValidTimeZone = (timeZone) => {
  if (!timeZone) return false;
  
  let isValid = validationCache.get(timeZone);
  
  if (isValid === undefined) {
    try {
      // Attempt to use the time zone in a formatter
      Intl.DateTimeFormat(undefined, { timeZone });
      isValid = true;
    } catch (error) {
      isValid = false;
    }
    
    // Cache the result
    validationCache.put(timeZone, isValid);
  }
  
  return isValid;
};

/**
 * Clear all caches (useful when testing or when user settings change)
 */
export const clearTimeZoneCaches = () => {
  formatCache.clear();
  conversionCache.clear();
  validationCache.clear();
  console.log('Time zone caches cleared');
};

/**
 * Get cache statistics for debugging
 * @returns {Object} Cache statistics
 */
export const getTimeZoneCacheStats = () => {
  return {
    formatCacheSize: formatCache.size(),
    conversionCacheSize: conversionCache.size(),
    validationCacheSize: validationCache.size()
  };
};
