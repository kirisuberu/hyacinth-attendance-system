import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardHome from '../components/dashboard/DashboardHome';

function Home() {
  const [user, setUser] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [lastRecord, setLastRecord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loadingUserData, setLoadingUserData] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    // Get current user
    if (currentUser) {
      const userObj = {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName || currentUser.email.split('@')[0]
      };
      setUser(userObj);
      fetchUserData(currentUser.uid);
    }
  }, [currentUser]);

  // Fetch additional user data from Firestore
  const fetchUserData = async (userId) => {
    if (!userId) return;
    
    try {
      setLoadingUserData(true);
      
      // Check if this user has a pending registration request
      try {
        const pendingQuery = query(
          collection(db, 'registration_requests'),
          where('userId', '==', userId)
        );
        const pendingSnapshot = await getDocs(pendingQuery);
        
        if (!pendingSnapshot.empty) {
          // User has a pending request
          toast.info('Your registration request is pending approval. You will be notified when approved.');
          await auth.signOut();
          navigate('/login');
          return;
        }
      } catch (error) {
        console.error('Error checking pending status:', error);
      }
      
      // If we get here, check for the user in the users collection
      const userDocRef = doc(db, 'users', userId);
      const userDocSnap = await getDoc(userDocRef);
      
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setUserData(userData);
      } else {
        console.log('No user data found in Firestore');
        
        // If we get here, the user is authenticated but has no data in Firestore
        toast.error('Your account is not properly set up. Please contact an administrator.');
        await auth.signOut();
        navigate('/login');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error('Error loading user data. Please try again later.');
    } finally {
      setLoadingUserData(false);
    }
  };

  return (
    <DashboardLayout
      user={user}
      activeTab="home"
      attendanceStatus={attendanceStatus}
      loading={loading}
      lastRecord={lastRecord}
      isSuperAdmin={userData?.role === 'super_admin'}
      userData={userData}
      setUserData={setUserData}
    >
      <DashboardHome 
        attendanceStatus={attendanceStatus} 
        lastRecord={lastRecord} 
      />
    </DashboardLayout>
  );
}

export default Home;
