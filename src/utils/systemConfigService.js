import { db } from '../firebase';
import { doc, getDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';

/**
 * Default system configuration values
 * These will be used if no configuration is found in the database
 */
export const DEFAULT_SYSTEM_CONFIG = {
  // Time regions and offsets
  timeRegions: {
    'PHT': {
      offset: 8,
      timezone: 'Asia/Manila',
      displayName: 'Philippine Time (UTC+8)'
    },
    'CST': {
      offset: -6,
      timezone: 'America/Chicago',
      displayName: 'Central Standard Time (UTC-6)'
    },
    'EST': {
      offset: -5,
      timezone: 'America/New_York',
      displayName: 'Eastern Standard Time (UTC-5)'
    }
  },
  
  // Attendance rules
  attendanceRules: {
    timeIn: {
      early: -60,    // minutes before schedule to be considered "Early"
      onTime: 5,     // minutes after schedule to still be considered "On Time"
    },
    timeOut: {
      earlyOut: -15, // minutes before schedule to be considered "Early Out"
      onTime: 60,    // minutes after schedule to still be considered "On Time"
    }
  },
  
  // Shift rules
  shiftRules: {
    minHoursBetweenShifts: 4,      // Minimum hours between shifts
    lateNightShiftStartHour: 22,   // Hour (24h format) when late night shifts start
    earlyMorningEndHour: 8,        // Hour (24h format) for early morning shift ends
    largeTimeDiffThreshold: 600,   // Minutes (10 hours) threshold for detecting calculation errors
  },
  
  // UI Configuration
  uiConfig: {
    dashboardRefreshInterval: 60,  // Dashboard refresh interval in seconds
    maxNotesLength: 500,           // Maximum length for attendance notes
    maxRecentAttendanceRecords: 10, // Maximum number of recent attendance records to display
    dateFormat: 'MMM dd, yyyy',    // Default date format
    timeFormat: 'hh:mm a',         // Default time format
  },
  
  // System behavior
  systemBehavior: {
    enableMobileAccess: false,     // Whether mobile access is enabled
    enableNotifications: true,     // Whether notifications are enabled
    requireNotesForLateAttendance: false, // Whether notes are required for late attendance
    requireNotesForEarlyOut: false, // Whether notes are required for early out
    autoLogoutAfterMinutes: 60,    // Auto logout after inactivity (minutes)
  }
};

/**
 * Get the admin user document
 * @returns {Promise<Object|null>} - Admin user document or null if not found
 */
const getAdminDoc = async () => {
  try {
    const usersRef = collection(db, 'users');
    const adminQuery = query(usersRef, where("userType", "==", "admin"));
    const adminSnapshot = await getDocs(adminQuery);
    
    if (adminSnapshot.empty) {
      console.warn('No admin user found');
      return null;
    }
    
    // Get the first admin user document
    const adminDoc = adminSnapshot.docs[0];
    return {
      id: adminDoc.id,
      data: adminDoc.data()
    };
  } catch (error) {
    console.error('Error getting admin document:', error);
    return null;
  }
};

/**
 * Get system configuration
 * @returns {Promise<Object>} - System configuration
 */
export const getSystemConfig = async () => {
  try {
    const adminDoc = await getAdminDoc();
    
    if (!adminDoc) {
      console.warn('No admin user found, using default system configuration');
      return DEFAULT_SYSTEM_CONFIG;
    }
    
    const adminData = adminDoc.data;
    
    // If systemConfig exists in admin document, return it
    if (adminData.systemConfig) {
      // Merge with default config to ensure all properties exist
      return {
        ...DEFAULT_SYSTEM_CONFIG,
        ...adminData.systemConfig
      };
    }
    
    // If no systemConfig found, initialize it with default values
    await updateSystemConfig(DEFAULT_SYSTEM_CONFIG);
    return DEFAULT_SYSTEM_CONFIG;
  } catch (error) {
    console.error('Error getting system configuration:', error);
    return DEFAULT_SYSTEM_CONFIG;
  }
};

/**
 * Update system configuration
 * @param {Object} configData - New configuration data
 * @returns {Promise<boolean>} - Success status
 */
export const updateSystemConfig = async (configData) => {
  try {
    const adminDoc = await getAdminDoc();
    
    if (!adminDoc) {
      console.error('No admin user found, cannot update system configuration');
      return false;
    }
    
    // Update the admin document with the new configuration
    await updateDoc(doc(db, 'users', adminDoc.id), {
      systemConfig: configData,
      updatedAt: new Date().toISOString()
    });
    
    console.log('System configuration updated successfully');
    return true;
  } catch (error) {
    console.error('Error updating system configuration:', error);
    return false;
  }
};

/**
 * Get a specific configuration section
 * @param {string} section - Configuration section name
 * @returns {Promise<Object>} - Configuration section
 */
export const getConfigSection = async (section) => {
  try {
    const config = await getSystemConfig();
    return config[section] || {};
  } catch (error) {
    console.error(`Error getting config section ${section}:`, error);
    return DEFAULT_SYSTEM_CONFIG[section] || {};
  }
};

/**
 * Update a specific configuration section
 * @param {string} section - Configuration section name
 * @param {Object} sectionData - New section data
 * @returns {Promise<boolean>} - Success status
 */
export const updateConfigSection = async (section, sectionData) => {
  try {
    const config = await getSystemConfig();
    
    // Create updated config with the new section data
    const updatedConfig = {
      ...config,
      [section]: {
        ...(config[section] || {}),
        ...sectionData
      }
    };
    
    return await updateSystemConfig(updatedConfig);
  } catch (error) {
    console.error(`Error updating config section ${section}:`, error);
    return false;
  }
};
