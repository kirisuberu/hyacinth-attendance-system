import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

// Document ID for system settings
const SYSTEM_SETTINGS_DOC_ID = 'attendance_rules';

/**
 * Get the system settings for attendance rules
 * @returns {Promise<Object>} - The system settings
 */
export const getAttendanceRules = async () => {
  try {
    const settingsDoc = await getDoc(doc(db, 'systemSettings', SYSTEM_SETTINGS_DOC_ID));
    
    if (settingsDoc.exists()) {
      return settingsDoc.data();
    } else {
      // Return default settings if no document exists
      return {
        timeIn: {
          earlyThreshold: 15,   // Minutes before schedule to be considered "Early"
          onTimeThreshold: 5    // Minutes after schedule to still be considered "On Time"
        },
        timeOut: {
          incompleteThreshold: 30,  // Minutes before scheduled end time to be considered "Incomplete"
          overtimeThreshold: 30     // Minutes after scheduled end time to be considered "Overtime"
        },
        timeRegion: {
          lockToDeviceRegion: false  // Whether to lock users' time region to their device's detected region
        },
        absent: {
          threshold: 300 // Minutes (5 hours) after schedule to mark as absent automatically
        },
        mobileAccess: {
          // Mobile access is disabled by default for all roles
          allowSuperAdmin: false,
          allowAdmin: false,
          allowMember: false
        }
      };
    }
  } catch (error) {
    console.error('Error getting attendance rules:', error);
    throw error;
  }
};

/**
 * Update the system settings for attendance rules
 * @param {Object} rules - The new rules to set
 * @returns {Promise<void>}
 */
export const updateAttendanceRules = async (rules) => {
  try {
    await setDoc(doc(db, 'systemSettings', SYSTEM_SETTINGS_DOC_ID), rules, { merge: true });
  } catch (error) {
    console.error('Error updating attendance rules:', error);
    throw error;
  }
};
