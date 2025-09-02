import React, { createContext, useState, useContext, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './AuthContext';

const TimeFormatContext = createContext();

export const useTimeFormat = () => useContext(TimeFormatContext);

export const TimeFormatProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [use24HourFormat, setUse24HourFormat] = useState(false);
  const [loading, setLoading] = useState(true);

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
    loading
  };

  return (
    <TimeFormatContext.Provider value={value}>
      {children}
    </TimeFormatContext.Provider>
  );
};

export default TimeFormatContext;
