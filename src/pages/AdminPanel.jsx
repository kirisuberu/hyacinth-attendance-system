import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import RegistrationRequestsView from '../components/dashboard/RegistrationRequestsView';
import UserManagementView from '../components/dashboard/UserManagementView';
import DashboardLayout from '../components/dashboard/DashboardLayout';

// Styled components
const AdminContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TabButton = styled.button`
  background: ${props => props.active ? '#111' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#666'};
  border: 1px solid ${props => props.active ? '#111' : '#ddd'};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: ${props => props.active ? '#111' : '#f5f5f5'};
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
`;

function AdminPanel() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('registration_requests');
  const [dashboardTab, setDashboardTab] = useState('admin_panel');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserData(userData);
            
            // Redirect if not admin or super admin
            if (userData.role !== 'admin' && userData.role !== 'super_admin') {
              toast.error('You do not have permission to access the Admin Panel');
              navigate('/dashboard');
            }
          } else {
            toast.error('User data not found');
            navigate('/dashboard');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          toast.error('Failed to load user data');
        }
      } else {
        // User is not logged in
        navigate('/login');
      }
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, [navigate]);

  // Check if admin user has specific privileges
  const canManageRegistrations = userData?.role === 'admin' && userData?.privileges?.canManageRegistrations !== false;
  const canManageUsers = userData?.role === 'admin' && userData?.privileges?.canManageUsers !== false;
  const isSuperAdmin = userData?.role === 'super_admin';

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <DashboardLayout
      user={user}
      activeTab="admin_panel"
      setActiveTab={setDashboardTab}
      userData={userData}
      setUserData={setUserData}
      isSuperAdmin={isSuperAdmin}
    >
      <AdminContainer>
        <h1>Admin Panel</h1>
        
        <TabContainer>
          {(isSuperAdmin || canManageRegistrations) && (
            <TabButton 
              active={activeTab === 'registration_requests'} 
              onClick={() => setActiveTab('registration_requests')}
            >
              Registration Requests
            </TabButton>
          )}
          
          {(isSuperAdmin || canManageUsers) && (
            <TabButton 
              active={activeTab === 'user_management'} 
              onClick={() => setActiveTab('user_management')}
            >
              User Management
            </TabButton>
          )}
        </TabContainer>
        
        {activeTab === 'registration_requests' && (isSuperAdmin || canManageRegistrations) && (
          <RegistrationRequestsView />
        )}
        
        {activeTab === 'user_management' && (isSuperAdmin || canManageUsers) && (
          <UserManagementView isSuperAdmin={isSuperAdmin} />
        )}
      </AdminContainer>
    </DashboardLayout>
  );
}

export default AdminPanel;
