import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import AdminPrivilegesView from '../components/dashboard/AdminPrivilegesView';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { Shield } from 'phosphor-react';

// Styled components
const SuperAdminContainer = styled.div`
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
  margin-right: 0.5rem;
`;

function SuperAdminPanel() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('admin_privileges');
  const [dashboardTab, setDashboardTab] = useState('super_admin_panel');
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
            
            // Redirect if not super admin
            if (userData.role !== 'super_admin') {
              toast.error('You do not have permission to access the Super Admin Panel');
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <DashboardLayout
      user={user}
      activeTab="super_admin_panel"
      setActiveTab={setDashboardTab}
      userData={userData}
      setUserData={setUserData}
      isSuperAdmin={true}
    >
      <SuperAdminContainer>
        <h1>Super Admin Panel</h1>
        
        <TabContainer>
          <TabButton 
            active={activeTab === 'admin_privileges'} 
            onClick={() => setActiveTab('admin_privileges')}
          >
            <Icon><Shield size={16} /></Icon>
            Admin Privileges
          </TabButton>
          {/* Additional super admin tabs can be added here */}
        </TabContainer>
        
        {activeTab === 'admin_privileges' && (
          <AdminPrivilegesView />
        )}
      </SuperAdminContainer>
    </DashboardLayout>
  );
}

export default SuperAdminPanel;
