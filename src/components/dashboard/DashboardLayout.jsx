import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import styled from 'styled-components';
import { House, SignOut, Calendar, Clock, User, SignIn, SignOut as SignOutIcon, UserPlus, Users, GlobeHemisphereWest } from 'phosphor-react';
import { auth, db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

// Styled components for layout
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: bold;
  }
`;

const SidebarTimeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  border: none;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
`;

const TimeInSidebarButton = styled(SidebarTimeButton)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`;

const TimeOutSidebarButton = styled(SidebarTimeButton)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`;

const Icon = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  margin-right: 1rem;
  font-weight: 500;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

// Modal components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`;

const ModalBody = styled.div`
  padding: 1rem;
  overflow-y: auto;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: ${props => props.primary ? '#6e8efb' : 'white'};
  color: ${props => props.primary ? 'white' : '#333'};
  
  &:hover {
    background-color: ${props => props.primary ? '#5a7df9' : '#f5f5f5'};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Main layout component
const DashboardLayout = ({ 
  user, 
  activeTab, 
  setActiveTab, 
  attendanceStatus, 
  loading, 
  handleTimeInOut, 
  lastRecord,
  isSuperAdmin,
  userData,
  setUserData,
  children 
}) => {
  const navigate = useNavigate();
  const [showTimeRegionModal, setShowTimeRegionModal] = useState(false);
  const [selectedTimeRegion, setSelectedTimeRegion] = useState(userData?.timeRegion || Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Manila');
  const [updatingTimeRegion, setUpdatingTimeRegion] = useState(false);
  const [detectedTimeZone, setDetectedTimeZone] = useState('');
  
  // Function to get UTC offset for a time zone
  const getUTCOffset = (timeZone) => {
    try {
      const now = new Date();
      const options = { timeZone, timeZoneName: 'short' };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const formatted = formatter.format(now);
      
      // Extract UTC offset from the formatted date
      // This is a simple approach - for a more robust solution, we could use a library
      const match = formatted.match(/GMT([+-]\d+)/);
      if (match && match[1]) {
        return `UTC${match[1]}`;
      }
      
      // Calculate offset manually as fallback
      const localTime = new Date();
      const targetTime = new Date(localTime.toLocaleString('en-US', { timeZone }));
      const diffMinutes = (targetTime - localTime) / 60000;
      const hours = Math.floor(Math.abs(diffMinutes) / 60);
      const minutes = Math.abs(diffMinutes) % 60;
      const sign = diffMinutes >= 0 ? '+' : '-';
      return `UTC${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    } catch (error) {
      console.error('Error calculating UTC offset:', error);
      return '';
    }
  };

  // Detect user's device time zone
  useEffect(() => {
    try {
      const deviceTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setDetectedTimeZone(deviceTimeZone);
      console.log('Detected device time zone:', deviceTimeZone);
    } catch (error) {
      console.error('Error detecting time zone:', error);
      setDetectedTimeZone('Unable to detect');
    }
  }, []);

  // Update selected time region when userData changes
  useEffect(() => {
    if (userData?.timeRegion) {
      setSelectedTimeRegion(userData.timeRegion);
    } else if (detectedTimeZone && !userData?.timeRegion) {
      // If user doesn't have a time region set but we detected their device time zone, use that
      setSelectedTimeRegion(detectedTimeZone);
    }
  }, [userData, detectedTimeZone]);

  const handleTimeRegionChange = async () => {
    if (!user?.uid || updatingTimeRegion) return;
    
    try {
      setUpdatingTimeRegion(true);
      
      // Update the user document in Firestore
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, {
        timeRegion: selectedTimeRegion
      });
      
      // Update local state
      setUserData(prev => ({
        ...prev,
        timeRegion: selectedTimeRegion
      }));
      
      toast.success('Time region updated successfully');
      setShowTimeRegionModal(false);
    } catch (error) {
      console.error('Error updating time region:', error);
      toast.error('Failed to update time region');
    } finally {
      setUpdatingTimeRegion(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Failed to sign out');
    }
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <Logo>HyAttend</Logo>
        
        <NavItem 
          className={activeTab === 'dashboard' ? 'active' : ''} 
          onClick={() => setActiveTab('dashboard')}
        >
          <Icon><House size={16} /></Icon>
          Dashboard
        </NavItem>
        
        <NavItem 
          className={activeTab === 'attendance' ? 'active' : ''} 
          onClick={() => setActiveTab('attendance')}
        >
          <Icon><Clock size={16} /></Icon>
          Attendance
        </NavItem>
        
        <NavItem 
          className={activeTab === 'schedule' ? 'active' : ''} 
          onClick={() => setActiveTab('schedule')}
        >
          <Icon><Calendar size={16} /></Icon>
          Schedule
        </NavItem>
        
        <NavItem 
          className={activeTab === 'profile' ? 'active' : ''} 
          onClick={() => setActiveTab('profile')}
        >
          <Icon><User size={16} /></Icon>
          Profile
        </NavItem>
        
        {isSuperAdmin && (
          <>
            <NavItem 
              className={activeTab === 'registration_requests' ? 'active' : ''} 
              onClick={() => setActiveTab('registration_requests')}
            >
              <Icon><UserPlus size={16} /></Icon>
              Registration Requests
            </NavItem>
            
            <NavItem 
              className={activeTab === 'user_management' ? 'active' : ''} 
              onClick={() => setActiveTab('user_management')}
            >
              <Icon><Users size={16} /></Icon>
              User Management
            </NavItem>
          </>
        )}
        
        <div style={{ marginTop: 'auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem', opacity: '0.8' }}>User Settings</p>
            
            <NavItem onClick={() => setShowTimeRegionModal(true)}>
              <Icon><GlobeHemisphereWest size={16} /></Icon>
              Change Time Region
              <div style={{ fontSize: '0.75rem', marginLeft: 'auto', opacity: 0.7 }}>
                {userData?.timeRegion?.replace('_', ' ') || 'Asia/Manila'}
                <div style={{ fontSize: '0.7rem', marginTop: '2px' }}>
                  {getUTCOffset(userData?.timeRegion || 'Asia/Manila')}
                </div>
              </div>
            </NavItem>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem', opacity: '0.8' }}>Attendance Actions</p>
            
            <TimeInSidebarButton 
              onClick={() => handleTimeInOut('In')} 
              disabled={loading || attendanceStatus === 'In'}
            >
              <Icon><SignIn size={16} /></Icon>
              Time In
            </TimeInSidebarButton>
            
            <TimeOutSidebarButton 
              onClick={() => handleTimeInOut('Out')} 
              disabled={loading || attendanceStatus === 'Out' || !attendanceStatus}
            >
              <Icon><SignOutIcon size={16} /></Icon>
              Time Out
            </TimeOutSidebarButton>
            
            {attendanceStatus && (
              <div style={{ padding: '0.5rem 0', textAlign: 'center', fontSize: '0.85rem' }}>
                Status: <strong>{attendanceStatus === 'In' ? 'Clocked In' : 'Clocked Out'}</strong>
              </div>
            )}
          </div>
          
          <NavItem onClick={handleLogout}>
            <Icon><SignOut size={16} /></Icon>
            Logout
          </NavItem>
        </div>
      </Sidebar>
      
      <Content>
        <Header>
          <Title>
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'attendance' && 'Attendance'}
            {activeTab === 'schedule' && 'Schedule'}
            {activeTab === 'profile' && 'Profile'}
            {activeTab === 'registration_requests' && 'Registration Requests'}
            {activeTab === 'user_management' && 'User Management'}
          </Title>
          
          <UserInfo>
            <UserName>{user?.displayName}</UserName>
            <LogoutButton onClick={handleLogout}>
              <SignOut size={16} />
              Logout
            </LogoutButton>
          </UserInfo>
        </Header>
        
        {children}
      </Content>
      
      {/* Time Region Modal */}
      {showTimeRegionModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <h3>Change Time Region</h3>
              <CloseButton onClick={() => setShowTimeRegionModal(false)}>&times;</CloseButton>
            </ModalHeader>
            <ModalBody>
              <p style={{ marginBottom: '1rem' }}>
                Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded.
              </p>
              
              {detectedTimeZone && (
                <p style={{ marginBottom: '1rem', backgroundColor: '#f0f7ff', padding: '0.5rem', borderRadius: '4px', fontSize: '0.9rem' }}>
                  <strong>Detected device time zone:</strong> {detectedTimeZone} 
                  <span style={{ fontWeight: 'normal' }}>({getUTCOffset(detectedTimeZone)})</span>
                  {detectedTimeZone !== selectedTimeRegion && (
                    <button 
                      onClick={() => setSelectedTimeRegion(detectedTimeZone)}
                      style={{ 
                        display: 'block', 
                        marginTop: '0.5rem',
                        padding: '0.25rem 0.5rem',
                        fontSize: '0.8rem',
                        backgroundColor: '#e6f0ff',
                        border: '1px solid #bbd6fb',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      Use device time zone
                    </button>
                  )}
                </p>
              )}
              
              <FormGroup>
                <Label>Select Time Region</Label>
                <Select 
                  value={selectedTimeRegion}
                  onChange={(e) => setSelectedTimeRegion(e.target.value)}
                >
                  <optgroup label="UTC+8 (Asia)">
                    <option value="Asia/Manila">Asia/Manila (PHT)</option>
                    <option value="Asia/Singapore">Asia/Singapore (SGT)</option>
                  </optgroup>
                  <optgroup label="UTC+9 (Asia)">
                    <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
                  </optgroup>
                  <optgroup label="UTC+10/+11 (Australia)">
                    <option value="Australia/Sydney">Australia/Sydney (AEST/AEDT)</option>
                  </optgroup>
                  <optgroup label="UTC+0/+1 (Europe)">
                    <option value="Europe/London">Europe/London (GMT/BST)</option>
                  </optgroup>
                  <optgroup label="UTC+1/+2 (Europe)">
                    <option value="Europe/Paris">Europe/Paris (CET/CEST)</option>
                    <option value="Europe/Berlin">Europe/Berlin (CET/CEST)</option>
                  </optgroup>
                  <optgroup label="UTC+3 (Europe/Asia)">
                    <option value="Europe/Moscow">Europe/Moscow (MSK)</option>
                  </optgroup>
                  <optgroup label="UTC-5/-4 (Americas)">
                    <option value="America/New_York">America/New_York (Eastern US)</option>
                    <option value="America/Toronto">America/Toronto (Eastern Canada)</option>
                  </optgroup>
                  <optgroup label="UTC-6/-5 (Americas)">
                    <option value="America/Chicago">America/Chicago (Central)</option>
                  </optgroup>
                  <optgroup label="UTC-7/-6 (Americas)">
                    <option value="America/Denver">America/Denver (Mountain)</option>
                  </optgroup>
                  <optgroup label="UTC-7 (Americas - No DST)">
                    <option value="America/Phoenix">America/Phoenix (Arizona)</option>
                  </optgroup>
                  <optgroup label="UTC-8/-7 (Americas)">
                    <option value="America/Los_Angeles">America/Los_Angeles (Pacific US)</option>
                    <option value="America/Vancouver">America/Vancouver (Pacific Canada)</option>
                  </optgroup>
                  <optgroup label="UTC-9/-8 (Americas)">
                    <option value="America/Anchorage">America/Anchorage (Alaska)</option>
                  </optgroup>
                  <optgroup label="UTC-10/-9 (Americas)">
                    <option value="America/Adak">America/Adak (Hawaii-Aleutian)</option>
                  </optgroup>
                  <optgroup label="UTC-10 (Pacific - No DST)">
                    <option value="Pacific/Honolulu">Pacific/Honolulu (Hawaii)</option>
                  </optgroup>
                </Select>
                <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#666' }}>
                  Note: Regions are grouped by UTC offset. DST = Daylight Saving Time.
                </div>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setShowTimeRegionModal(false)}>Cancel</Button>
              <Button primary onClick={handleTimeRegionChange} disabled={updatingTimeRegion}>
                {updatingTimeRegion ? 'Updating...' : 'Save Changes'}
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </DashboardContainer>
  );
};

export default DashboardLayout;
