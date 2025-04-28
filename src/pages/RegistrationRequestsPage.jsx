import { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import RegistrationRequestsView from '../components/dashboard/RegistrationRequestsView';

function RegistrationRequestsPage() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loadingUserData, setLoadingUserData] = useState(false);
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [lastRecord, setLastRecord] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);
  
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
        const data = userDoc.data();
        setUserData(data);
        
        // Check if user has access to registration requests
        const isSuperAdmin = data.role === 'super_admin';
        const canManageRegistrations = data.role === 'admin' && data.privileges?.canManageRegistrations !== false;
        
        if (isSuperAdmin || canManageRegistrations) {
          setHasAccess(true);
        }
      } else {
        console.log('No user data found!');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoadingUserData(false);
    }
  };

  // If user doesn't have access, redirect to dashboard
  if (userData && !hasAccess && !loadingUserData) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <DashboardLayout
      user={user}
      userData={userData}
      setUserData={setUserData}
      attendanceStatus={attendanceStatus}
      lastRecord={lastRecord}
      isSuperAdmin={userData?.role === 'super_admin'}
    >
      {hasAccess && <RegistrationRequestsView />}
    </DashboardLayout>
  );
}

export default RegistrationRequestsPage;
