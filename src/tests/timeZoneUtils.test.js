/**
 * Tests for the time zone utilities
 * 
 * These tests verify that the timezone handling works correctly
 * across different scenarios and time zones.
 */
import { 
  getCurrentTimestamp, 
  timestampToZonedDate, 
  getCurrentTimeInZone,
  calculateTimeDifferenceInMinutes,
  formatTimeForDisplay
} from '../utils/timeZoneUtils';

// Mock Firestore Timestamp
class MockTimestamp {
  constructor(seconds, nanoseconds) {
    this.seconds = seconds;
    this.nanoseconds = nanoseconds;
  }
  
  toDate() {
    return new Date(this.seconds * 1000);
  }
  
  static now() {
    const now = new Date();
    return new MockTimestamp(Math.floor(now.getTime() / 1000), 0);
  }
}

// Mock date for consistent testing
const mockDate = new Date('2025-08-04T14:30:00Z'); // 2:30 PM UTC
const mockTimestamp = new MockTimestamp(Math.floor(mockDate.getTime() / 1000), 0);

describe('Time Zone Utilities', () => {
  // Save the original Date implementation
  const originalDate = global.Date;
  
  beforeEach(() => {
    // Mock Date to return our fixed date
    global.Date = class extends originalDate {
      constructor(...args) {
        if (args.length === 0) {
          return new originalDate(mockDate);
        }
        return new originalDate(...args);
      }
      
      static now() {
        return mockDate.getTime();
      }
    };
    
    // Set up console spy
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  
  afterEach(() => {
    // Restore original Date
    global.Date = originalDate;
    
    // Restore console
    console.error.mockRestore();
  });
  
  describe('getCurrentTimestamp', () => {
    it('should return a timestamp object representing current time', () => {
      const timestamp = getCurrentTimestamp();
      expect(timestamp).toBeDefined();
      expect(timestamp.toDate).toBeDefined();
      
      const date = timestamp.toDate();
      expect(date.getTime()).toBe(mockDate.getTime());
    });
  });
  
  describe('timestampToZonedDate', () => {
    it('should convert timestamp to date in Manila timezone', () => {
      const zonedDate = timestampToZonedDate(mockTimestamp, 'Asia/Manila');
      
      // Manila is UTC+8, so 2:30 PM UTC should be 10:30 PM Manila
      expect(zonedDate.getHours()).toBe(22);
      expect(zonedDate.getMinutes()).toBe(30);
    });
    
    it('should convert timestamp to date in New York timezone', () => {
      const zonedDate = timestampToZonedDate(mockTimestamp, 'America/New_York');
      
      // New York is UTC-4 in summer, so 2:30 PM UTC should be 10:30 AM New York
      expect(zonedDate.getHours()).toBe(10);
      expect(zonedDate.getMinutes()).toBe(30);
    });
    
    it('should handle invalid timezone by falling back to local time', () => {
      const zonedDate = timestampToZonedDate(mockTimestamp, 'Invalid/Timezone');
      
      // Should log an error
      expect(console.error).toHaveBeenCalled();
      
      // Should still return a valid date (local time)
      expect(zonedDate instanceof Date).toBe(true);
    });
  });
  
  describe('getCurrentTimeInZone', () => {
    it('should get correct time components for Manila timezone', () => {
      const timeComponents = getCurrentTimeInZone('Asia/Manila');
      
      // Manila is UTC+8, so 2:30 PM UTC should be 10:30 PM Manila
      expect(timeComponents.hour).toBe(22);
      expect(timeComponents.minute).toBe(30);
    });
    
    it('should handle invalid timezone by falling back to local time', () => {
      const timeComponents = getCurrentTimeInZone('Invalid/Timezone');
      
      // Should log an error
      expect(console.error).toHaveBeenCalled();
      
      // Should still return time components
      expect(timeComponents.hour).toBeDefined();
      expect(timeComponents.minute).toBeDefined();
    });
  });
  
  describe('calculateTimeDifferenceInMinutes', () => {
    it('should calculate positive difference between times', () => {
      const time1 = { hour: 9, minute: 0 };
      const time2 = { hour: 10, minute: 30 };
      
      const diff = calculateTimeDifferenceInMinutes(time1, time2);
      expect(diff).toBe(90); // 1 hour 30 minutes = 90 minutes
    });
    
    it('should calculate negative difference between times', () => {
      const time1 = { hour: 10, minute: 30 };
      const time2 = { hour: 9, minute: 0 };
      
      const diff = calculateTimeDifferenceInMinutes(time1, time2);
      expect(diff).toBe(-90); // -1 hour 30 minutes = -90 minutes
    });
    
    it('should handle midnight crossing correctly', () => {
      const time1 = { hour: 23, minute: 0 };
      const time2 = { hour: 1, minute: 0 };
      
      // This assumes times are on the same day, so 23:00 to 1:00 = 2 hours difference
      const diff = calculateTimeDifferenceInMinutes(time1, time2);
      expect(diff).toBe(120); 
    });
  });
  
  describe('formatTimeForDisplay', () => {
    it('should format time in 12-hour format', () => {
      const timestamp = mockTimestamp;
      const formatted = formatTimeForDisplay(timestamp, 'Asia/Manila', false);
      
      // Manila is UTC+8, so 2:30 PM UTC should be 10:30 PM Manila
      expect(formatted).toContain('10:30 PM');
    });
    
    it('should format time in 24-hour format', () => {
      const timestamp = mockTimestamp;
      const formatted = formatTimeForDisplay(timestamp, 'Asia/Manila', true);
      
      // Manila is UTC+8, so 2:30 PM UTC should be 22:30 Manila in 24-hour format
      expect(formatted).toContain('22:30');
    });
    
    it('should handle invalid timezone by falling back to local time', () => {
      const timestamp = mockTimestamp;
      const formatted = formatTimeForDisplay(timestamp, 'Invalid/Timezone', false);
      
      // Should log an error
      expect(console.error).toHaveBeenCalled();
      
      // Should still return a formatted string
      expect(typeof formatted).toBe('string');
      expect(formatted.length).toBeGreaterThan(0);
    });
  });
});

// Manual test instructions (not automated)
/**
 * Manual Time Zone Tests
 * 
 * These tests should be performed manually across different device time zones:
 * 
 * 1. Record time-in when device is set to Asia/Manila
 *    - Expected: Time recorded in UTC, status determined against Manila schedules
 * 
 * 2. Record time-in when device is set to America/New_York but user region is Asia/Manila
 *    - Expected: Time recorded in UTC, status determined against Manila schedules
 *    - Should show timezone mismatch warning
 * 
 * 3. View attendance records with device in various time zones
 *    - Expected: Times displayed adjusted to user's configured time zone
 * 
 * 4. Test status determination with schedule set for 9:00 AM:
 *    - Clock in at 8:45 AM in user's time zone: Should show "Early"
 *    - Clock in at 9:02 AM in user's time zone: Should show "On Time"
 *    - Clock in at 9:10 AM in user's time zone: Should show "Late"
 */
