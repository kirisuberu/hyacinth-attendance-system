import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import UserManagementView from '../components/dashboard/UserManagementView';

function UserManagement() {
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
      
      // If we get here, check for the user in the users collection
      const userDocRef = doc(db, 'users', userId);
      const userDocSnap = await getDoc(userDocRef);
      
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setUserData(userData);
        
        // Check if user is an admin
        if (userData.role !== 'super_admin') {
          toast.error('You do not have permission to access this page');
          navigate('/home');
          return;
        }
      } else {
        console.log('No user data found in Firestore');
        
        // If we get here, the user is authenticated but has no data in Firestore
        toast.error('Your account is not properly set up. Please contact an administrator.');
        await auth.signOut();
        navigate('/');
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
      activeTab="user_management"
      attendanceStatus={attendanceStatus}
      loading={loading}
      lastRecord={lastRecord}
      isSuperAdmin={userData?.role === 'super_admin'}
      userData={userData}
      setUserData={setUserData}
    >
      {userData?.role === 'super_admin' ? (
        <UserManagementView />
      ) : (
        <div>You do not have permission to access this page.</div>
      )}
    </DashboardLayout>
  );
}

export default UserManagement;
