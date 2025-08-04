import React, { createContext, useState, useContext, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './AuthContext';
import { getAttendanceRules } from '../services/systemSettingsService';

const TimeFormatContext = createContext();

export const useTimeFormat = () => useContext(TimeFormatContext);

export const TimeFormatProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [use24HourFormat, setUse24HourFormat] = useState(false);
  const [timeZone, setTimeZone] = useState(null);
  const [systemTimeZone, setSystemTimeZone] = useState(null);
  const [loading, setLoading] = useState(true);

  // Detect system time zone on component mount
  useEffect(() => {
    try {
      const detectedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setSystemTimeZone(detectedTimeZone);
      console.log('Detected system time zone:', detectedTimeZone);
    } catch (error) {
      console.error('Error detecting system time zone:', error);
      setSystemTimeZone('UTC');
    }
  }, []);

  useEffect(() => {
    const fetchUserSettings = async () => {
      if (!currentUser?.uid) {
        setLoading(false);
        return;
      }
      
      try {
        // Check if user settings document exists
        const userSettingsRef = doc(db, 'users_settings', currentUser.uid);
        const userSettingsSnap = await getDoc(userSettingsRef);
        
        // Get the user document to check for timeRegion
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        
        // Get system settings to check if we should lock to device region
        let lockToDeviceRegion = false;
        try {
          const systemSettings = await getAttendanceRules();
          lockToDeviceRegion = systemSettings?.timeRegion?.lockToDeviceRegion || false;
        } catch (error) {
          console.error('Error fetching system settings:', error);
        }
        
        // Determine time zone
        let userTimeZone;
        if (lockToDeviceRegion && systemTimeZone) {
          // If system settings force device timezone, use that
          userTimeZone = systemTimeZone;
        } else if (userDocSnap.exists() && userDocSnap.data().timeRegion) {
          // If user has a timeRegion in their profile, use that
          userTimeZone = userDocSnap.data().timeRegion;
        } else {
          // Default to system detected or Asia/Manila
          userTimeZone = systemTimeZone || 'Asia/Manila';
        }
        
        setTimeZone(userTimeZone);
        
        if (userSettingsSnap.exists()) {
          const settings = userSettingsSnap.data();
          if (settings.use24HourFormat !== undefined) {
            setUse24HourFormat(settings.use24HourFormat);
          }
        } else {
          // Create default settings if they don't exist
          await setDoc(userSettingsRef, {
            use24HourFormat: false,
            userId: currentUser.uid
          });
        }
      } catch (error) {
        console.error('Error fetching user settings:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserSettings();
  }, [currentUser]);

  const updateTimeZone = async (newTimeZone) => {
    if (!currentUser?.uid) return false;
    
    try {
      // Update the user document
      const userDocRef = doc(db, 'users', currentUser.uid);
      await setDoc(userDocRef, {
        timeRegion: newTimeZone
      }, { merge: true });
      
      // Update local state
      setTimeZone(newTimeZone);
      
      return true;
    } catch (error) {
      console.error('Error updating time zone:', error);
      return false;
    }
  };

  const toggleTimeFormat = async () => {
    if (!currentUser?.uid) return;
    
    try {
      // Update the user settings document in Firestore
      const userSettingsRef = doc(db, 'users_settings', currentUser.uid);
      await setDoc(userSettingsRef, {
        use24HourFormat: !use24HourFormat,
        userId: currentUser.uid
      }, { merge: true });
      
      // Update local state
      setUse24HourFormat(!use24HourFormat);
      
      return true;
    } catch (error) {
      console.error('Error updating time format:', error);
      return false;
    }
  };

  const value = {
    use24HourFormat,
    toggleTimeFormat,
    timeZone,
    systemTimeZone,
    updateTimeZone,
    loading
  };

  return (
    <TimeFormatContext.Provider value={value}>
      {children}
    </TimeFormatContext.Provider>
  );
};

export default TimeFormatContext;
