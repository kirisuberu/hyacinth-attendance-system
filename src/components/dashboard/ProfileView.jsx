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
import ProfileAvatarUploader from './profile/ProfileAvatarUploader';

const ProfileView = ({ user, userData: propUserData, loadingUserData: propLoadingUserData, setUserData }) => {
  const navigate = useNavigate();
  // Use props values instead of fetching data separately
  const [companies, setCompanies] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loadingCompanies, setLoadingCompanies] = useState(true);
  const [loadingDepartments, setLoadingDepartments] = useState(true);
  const { use24HourFormat, toggleTimeFormat } = useTimeFormat();
  const [activeTab, setActiveTab] = useState('personal');

  // Helper function to format timestamps or date-only strings
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';

    try {
      // Treat YYYY-MM-DD as a date-only value (no timezone)
      if (typeof timestamp === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(timestamp)) {
        const [y, m, d] = timestamp.split('-').map(Number);
        // Construct using local year-month-day to avoid UTC shifting
        const localDate = new Date(y, m - 1, d);
        return format(localDate, 'PPP');
      }

      // Check if it's a Firebase timestamp
      if (timestamp && typeof timestamp === 'object' && typeof timestamp.toDate === 'function') {
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
      // Handle other strings (ISO, etc.)
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
        <div className="profile-left">
          <ProfileAvatarUploader user={user} userData={propUserData} setUserData={setUserData} />
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
        </div>
        <BannerEditButton onClick={() => {
          // Find the PersonalInfoSection component and call its handleOpenModal method
          document.querySelector('[data-edit-profile]').click();
        }}>
          <PencilSimple size={18} weight="bold" />
          Edit Profile
        </BannerEditButton>
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

const BannerEditButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #800000;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.15s ease;
  box-shadow: 0 2px 4px rgba(128,0,0,0.2);
  
  &:hover {
    background-color: #9a0000;
    box-shadow: 0 3px 6px rgba(128,0,0,0.3);
    transform: translateY(-1px);
  }
  
  &:active {
    background-color: #700000;
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(128,0,0,0.2);
  }
`;

export default ProfileView;
