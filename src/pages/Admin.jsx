import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const AdminContainer = styled.div`
  padding: 1rem;
`;

const AdminHeader = styled.div`
  margin-bottom: 2rem;
`;

const AdminTitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const AdminDescription = styled.p`
  color: #666;
  font-size: 1rem;
`;

function Admin() {
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
      activeTab="admin"
      attendanceStatus={attendanceStatus}
      loading={loading}
      lastRecord={lastRecord}
      isSuperAdmin={userData?.role === 'super_admin'}
      userData={userData}
      setUserData={setUserData}
    >
      {userData?.role === 'super_admin' ? (
        <AdminContainer>
          <AdminHeader>
            <AdminTitle>Administration Panel</AdminTitle>
            <AdminDescription>
              Manage users, review registration requests, and configure system settings.
            </AdminDescription>
          </AdminHeader>
          
          <Outlet />
        </AdminContainer>
      ) : (
        <div>You do not have permission to access this page.</div>
      )}
    </DashboardLayout>
  );
}

export default Admin;
