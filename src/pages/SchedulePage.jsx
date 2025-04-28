import { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import ScheduleView from '../components/dashboard/ScheduleView';

function SchedulePage() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loadingUserData, setLoadingUserData] = useState(false);
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [lastRecord, setLastRecord] = useState(null);
  
  useEffect(() => {
    // Get current user
    const currentUser = auth.currentUser;
    
    if (currentUser) {
      const userObj = {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName || currentUser.email.split('@')[0]
      };
      setUser(userObj);
      fetchUserData(currentUser.uid);
    } else {
      // Check for development fallback user
      const isEmulatorMode = import.meta.env.DEV && import.meta.env.VITE_USE_EMULATORS === 'true';
      if (isEmulatorMode) {
        const devUser = localStorage.getItem('dev_user');
        if (devUser) {
          try {
            const parsedUser = JSON.parse(devUser);
            const userObj = {
              uid: parsedUser.uid,
              email: parsedUser.email,
              displayName: parsedUser.displayName || parsedUser.email.split('@')[0]
            };
            setUser(userObj);
            fetchUserData(parsedUser.uid);
            console.log('Using development user:', parsedUser.email);
          } catch (error) {
            console.error('Error parsing development user:', error);
          }
        }
      }
    }
  }, []);
  
  // Fetch additional user data from Firestore
  const fetchUserData = async (userId) => {
    setLoadingUserData(true);
    try {
      const userDocRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      } else {
        console.log('No user data found!');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoadingUserData(false);
    }
  };

  return (
    <DashboardLayout
      user={user}
      userData={userData}
      setUserData={setUserData}
      attendanceStatus={attendanceStatus}
      lastRecord={lastRecord}
      isSuperAdmin={userData?.role === 'super_admin'}
    >
      <ScheduleView user={user} userData={userData} />
    </DashboardLayout>
  );
}

export default SchedulePage;
