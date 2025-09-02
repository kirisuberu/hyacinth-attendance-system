import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import styled from 'styled-components';
import { ArrowLeft, User as UserIcon, Stack, Buildings, PencilSimple } from 'phosphor-react';
import { format } from 'date-fns';
import { useTimeFormat } from '../../contexts/TimeFormatContext';

// Import styled components
import {
  ProfileContainer,
  ProfileHeader,
  ProfileTitle,
  BackButton,
  Card,
  CardTitle,
  CardContent,
  ProfileGridLayout,
  ProfileSection,
  TabsContainer,
  TabButton,
  Avatar,
  ProfileBanner,
  UserInfoHeader,
  UserName,
  UserTitle,
  UserStatus,
  StatusIndicator,
  ThreeColumnGrid,
  SubmitButton
} from './ProfileStyles';

// Import profile section components
import PersonalInfoSection from './profile/PersonalInfoSection';
import CompanyDepartmentSection from './profile/CompanyDepartmentSection';
import AdditionalInfoSection from './profile/AdditionalInfoSection';
import EmergencyContactSection from './profile/EmergencyContactSection';

const ProfileView = ({ user, userData: propUserData, loadingUserData: propLoadingUserData }) => {
  const navigate = useNavigate();
  // Use props values instead of fetching data separately
  const [companies, setCompanies] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loadingCompanies, setLoadingCompanies] = useState(true);
  const [loadingDepartments, setLoadingDepartments] = useState(true);
  const { use24HourFormat, toggleTimeFormat } = useTimeFormat();
  const [activeTab, setActiveTab] = useState('personal');

  // Helper function to format timestamps
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    
    try {
      // Check if it's a Firebase timestamp
      if (timestamp.toDate) {
        return format(timestamp.toDate(), 'PPP');
      }
      // Handle Firestore-like object with seconds
      if (typeof timestamp === 'object' && timestamp !== null && (typeof timestamp.seconds === 'number' || typeof timestamp._seconds === 'number')) {
        const secs = typeof timestamp.seconds === 'number' ? timestamp.seconds : timestamp._seconds;
        return format(new Date(secs * 1000), 'PPP');
      }
      // Handle JavaScript Date
      if (timestamp instanceof Date) {
        return format(timestamp, 'PPP');
      }
      // Handle numeric timestamps (seconds or milliseconds)
      if (typeof timestamp === 'number') {
        const ms = timestamp > 1e12 ? timestamp : timestamp * 1000;
        return format(new Date(ms), 'PPP');
      }
      // Handle ISO or date-like strings
      if (typeof timestamp === 'string') {
        const d = new Date(timestamp);
        if (!isNaN(d.getTime())) {
          return format(d, 'PPP');
        }
      }
      return 'Invalid date';
    } catch (error) {
      console.error('Error formatting timestamp:', error);
      return 'Invalid date format';
    }
  };

  // We're now using props instead of fetching user data directly

  // Fetch companies
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const companiesSnapshot = await getDocs(collection(db, 'companies'));
        const companiesData = companiesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCompanies(companiesData);
      } catch (error) {
        console.error('Error fetching companies:', error);
      } finally {
        setLoadingCompanies(false);
      }
    };

    fetchCompanies();
  }, []);

  // Fetch departments
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const departmentsSnapshot = await getDocs(collection(db, 'departments'));
        const departmentsData = departmentsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setDepartments(departmentsData);
      } catch (error) {
        console.error('Error fetching departments:', error);
      } finally {
        setLoadingDepartments(false);
      }
    };

    fetchDepartments();
  }, []);

  if (propLoadingUserData) {
    return <div>Loading user profile...</div>;
  }

  if (!propUserData) {
    return <div>User not found.</div>;
  }

  // Get user status - could be expanded with real status logic
  const getUserStatus = () => {
    return propUserData?.status || 'active';
  };

  // Get user position/job title
  const getUserPosition = () => {
    return propUserData?.position || propUserData?.jobTitle || 'Employee';
  };
  
  // Get user preferred name
  const getPreferredName = () => {
    return propUserData?.preferredName || '';
  };

  // Get display name with fallbacks
  const getDisplayName = () => {
    const fullName = `${propUserData?.firstName || ''} ${propUserData?.lastName || ''}`.trim();
    return (
      propUserData?.name ||
      fullName ||
      propUserData?.displayName ||
      user?.displayName ||
      propUserData?.email ||
      user?.email ||
      'User'
    );
  };

  return (
    <ProfileContainer>
      
      {/* Profile Banner with Avatar and Basic Info */}
      <ProfileBanner>
        <Avatar>
          {propUserData?.photoURL ? (
            <img src={propUserData.photoURL} alt="User avatar" />
          ) : (
            <UserIcon size={40} weight="fill" />
          )}
        </Avatar>
        <UserInfoHeader>
          <UserName>
            {getDisplayName()}
            {getPreferredName() && <span className="preferred-name"> ({getPreferredName()})</span>}
          </UserName>
          <UserTitle>{getUserPosition()}</UserTitle>
          <UserStatus>
            <StatusIndicator status={getUserStatus()} />
            {getUserStatus().charAt(0).toUpperCase() + getUserStatus().slice(1)}
          </UserStatus>
        </UserInfoHeader>
      </ProfileBanner>
      
      {/* Navigation Tabs */}
      <TabsContainer>
        <TabButton 
          active={activeTab === 'personal'} 
          onClick={() => setActiveTab('personal')}
        >
          <UserIcon size={18} />
          Personal
        </TabButton>
        <TabButton 
          active={activeTab === 'work'} 
          onClick={() => setActiveTab('work')}
        >
          <Buildings size={18} />
          Work
        </TabButton>

        <TabButton 
          active={activeTab === 'settings'} 
          onClick={() => setActiveTab('settings')}
        >
          <Stack size={18} />
          Settings
        </TabButton>
      </TabsContainer>
      
      {/* Content based on selected tab */}
      <Card>
        {activeTab === 'personal' && (
          <>
            <CardTitleWrapper>
              <CardTitle>Personal Information</CardTitle>
              <EditProfileButton onClick={() => {
                // Find the PersonalInfoSection component and call its handleOpenModal method
                document.querySelector('[data-edit-profile]').click();
              }}>
                <PencilSimple size={18} />
                Edit Profile
              </EditProfileButton>
            </CardTitleWrapper>
            <CardContent>
              <ThreeColumnGrid>
                {/* First Column - Personal Info */}
                <div>
                  <PersonalInfoSection 
                    userData={propUserData} 
                    userId={user?.uid || propUserData.id} 
                    formatTimestamp={formatTimestamp}
                  />
                </div>
                
                {/* Second Column - Additional Info */}
                <div>
                  <AdditionalInfoSection userData={propUserData} userId={user?.uid || propUserData.id} formatTimestamp={formatTimestamp} />
                </div>
                
                {/* Third Column - Emergency Contact */}
                <div>
                  <EmergencyContactSection userData={propUserData} userId={user?.uid || propUserData.id} />
                </div>
              </ThreeColumnGrid>
            </CardContent>
          </>
        )}
        
        {activeTab === 'work' && (
          <>
            <CardTitle>Work Information</CardTitle>
            <CardContent>
              <CompanyDepartmentSection 
                userData={propUserData} 
                companies={companies}
                departments={departments}
                loadingCompanies={loadingCompanies}
                loadingDepartments={loadingDepartments}
                formatTimestamp={formatTimestamp}
              />
            </CardContent>
          </>
        )}
        
        {activeTab === 'settings' && (
          <>
            <CardTitle>User Settings</CardTitle>
            <CardContent>
              {/* Time Format Setting */}
              <div style={{ marginTop: '16px' }}>
                <Card>
                  <CardTitle>Time Format</CardTitle>
                  <CardContent>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                      <div>
                        Current format: <strong>{use24HourFormat ? '24-hour' : '12-hour'}</strong>
                      </div>
                      <SubmitButton onClick={toggleTimeFormat}>
                        Switch to {use24HourFormat ? '12-hour' : '24-hour'}
                      </SubmitButton>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </ProfileContainer>
  );
};

// Styled components for the Edit Profile button
const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #eaeaea;
`;

const EditProfileButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border: 1px solid #ffe1e1;
  border-radius: 8px;
  background: linear-gradient(to bottom, #fff6f6, #ffe1e1);
  color: #800000;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.15s ease;
  box-shadow: 0 2px 4px rgba(128,0,0,0.1);
  
  &:hover {
    background: linear-gradient(to bottom, #ffe1e1, #ffd6d6);
    box-shadow: 0 3px 6px rgba(128,0,0,0.15);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(128,0,0,0.1);
  }
`;

export default ProfileView;
