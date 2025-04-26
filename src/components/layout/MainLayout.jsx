import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import styled from 'styled-components';
import { House, SignOut, Calendar, Clock, User, SignIn, SignOut as SignOutIcon, UserPlus, Users, GlobeHemisphereWest, ClockClockwise } from 'phosphor-react';
import { auth, db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useTimeFormat } from '../../contexts/TimeFormatContext';
import { useAuth } from '../../contexts/AuthContext';

// Styled components for layout
const DashboardContainer = styled.div`
  display: flex;
  height: 100vh; /* Lock to viewport height */
  overflow: hidden; /* Prevent overall page scrolling */
`;

const Sidebar = styled.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Allow sidebar to scroll if needed */
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  color: white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: bold;
  }
`;

const NavButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const TimeFormatToggle = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: ${props => props.active ? '#e6f0ff' : 'white'};
  border-color: ${props => props.active ? '#bbd6fb' : '#ddd'};
  color: ${props => props.active ? '#1a73e8' : '#666'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#e6f0ff' : '#f5f5f5'};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
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
  background-color: #4caf50;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: #43a047;
  }
`;

const TimeOutSidebarButton = styled(SidebarTimeButton)`
  background-color: #f44336;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: #e53935;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Prevent content scrolling */
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
  font-size: 1.5rem;
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
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  border: none;
  background-color: #f5f5f5;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #eee;
  }
`;

const MainContentArea = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto; /* Allow content area to scroll */
  background-color: #f9f9f9;
`;

const Modal = styled.div`
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const ModalBody = styled.div`
  padding: 1rem;
  max-height: 60vh;
  overflow-y: auto;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: ${props => props.primary ? '#800000' : 'white'};
  color: ${props => props.primary ? 'white' : '#333'};
  margin-left: 0.5rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.primary ? '#600000' : '#f5f5f5'};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;

// Main layout component
const MainLayout = ({ 
  user, 
  userData,
  setUserData,
  attendanceStatus,
  loading,
  handleTimeInOut,
  lastRecord,
  children 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();
  const { use24HourFormat, toggleTimeFormat } = useTimeFormat();
  const [showTimeRegionModal, setShowTimeRegionModal] = useState(false);
  const [selectedTimeRegion, setSelectedTimeRegion] = useState(userData?.timeRegion || Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Manila');
  const [updatingTimeRegion, setUpdatingTimeRegion] = useState(false);
  const [detectedTimeZone, setDetectedTimeZone] = useState('');
  const [updatingTimeFormat, setUpdatingTimeFormat] = useState(false);
  
  // Function to get UTC offset for a time zone
  const getUTCOffset = (timeZone) => {
    try {
      const now = new Date();
      const options = { timeZone, timeZoneName: 'short' };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const formatted = formatter.format(now);
      
      // Extract UTC offset from the formatted date
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

  const handleTimeFormatChange = async () => {
    if (updatingTimeFormat) return;
    
    try {
      setUpdatingTimeFormat(true);
      const success = await toggleTimeFormat();
      
      if (success) {
        toast.success(`Time format updated to ${!use24HourFormat ? '24-hour' : '12-hour'} format`);
      } else {
        toast.error('Failed to update time format');
      }
    } catch (error) {
      console.error('Error updating time format:', error);
      toast.error('Failed to update time format');
    } finally {
      setUpdatingTimeFormat(false);
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

  // Check if the current path matches the given path
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Get the page title based on the current path
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'Dashboard';
    if (path === '/schedule') return 'Schedule';
    if (path === '/attendance') return 'Attendance';
    if (path === '/profile') return 'Profile';
    if (path === '/registration-requests') return 'Registration Requests';
    if (path === '/user-management') return 'User Management';
    return 'Hyacinth Attendance';
  };

  const isSuperAdmin = userData?.role === 'super_admin';

  return (
    <DashboardContainer>
      <Sidebar>
        <Logo>Hyacinth</Logo>
        
        <NavItem 
          to="/dashboard"
          className={isActive('/dashboard') ? 'active' : ''}
        >
          <Icon><House size={16} /></Icon>
          Dashboard
        </NavItem>
        
        <NavItem 
          to="/schedule"
          className={isActive('/schedule') ? 'active' : ''}
        >
          <Icon><Calendar size={16} /></Icon>
          Schedule
        </NavItem>
        
        <NavItem 
          to="/attendance"
          className={isActive('/attendance') ? 'active' : ''}
        >
          <Icon><Clock size={16} /></Icon>
          Attendance
        </NavItem>
        
        <NavItem 
          to="/profile"
          className={isActive('/profile') ? 'active' : ''}
        >
          <Icon><User size={16} /></Icon>
          Profile
        </NavItem>
        
        {isSuperAdmin && (
          <>
            <NavItem 
              to="/registration-requests"
              className={isActive('/registration-requests') ? 'active' : ''}
            >
              <Icon><UserPlus size={16} /></Icon>
              Registration Requests
            </NavItem>
            
            <NavItem 
              to="/user-management"
              className={isActive('/user-management') ? 'active' : ''}
            >
              <Icon><Users size={16} /></Icon>
              User Management
            </NavItem>
          </>
        )}
        
        <div style={{ marginTop: 'auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem', opacity: '0.8' }}>User Settings</p>
            
            <NavButton onClick={() => setShowTimeRegionModal(true)}>
              <Icon><GlobeHemisphereWest size={16} /></Icon>
              Change Time Region
              <div style={{ fontSize: '0.75rem', marginLeft: 'auto', opacity: 0.7 }}>
                {userData?.timeRegion?.replace('_', ' ') || 'Asia/Manila'}
                <div style={{ fontSize: '0.7rem', marginTop: '2px' }}>
                  {getUTCOffset(userData?.timeRegion || 'Asia/Manila')}
                </div>
              </div>
            </NavButton>
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
                Current status: <strong>{attendanceStatus}</strong>
                {lastRecord && (
                  <div style={{ marginTop: '0.25rem', fontSize: '0.75rem', opacity: 0.8 }}>
                    {lastRecord.timestamp.toDate().toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit',
                      hour12: !use24HourFormat
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
          
          <NavButton onClick={handleLogout}>
            <Icon><SignOut size={16} /></Icon>
            Logout
          </NavButton>
        </div>
      </Sidebar>
      
      <Content>
        <Header>
          <Title>{getPageTitle()}</Title>
          
          <UserInfo>
            <UserName>{user?.displayName}</UserName>
            <LogoutButton onClick={handleLogout}>
              <SignOut size={16} />
              Logout
            </LogoutButton>
          </UserInfo>
        </Header>
        
        <MainContentArea>
          {children}
        </MainContentArea>
      </Content>
      
      {/* Time Region Modal */}
      {showTimeRegionModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Change Time Region</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <p>Select your time region to ensure accurate time tracking.</p>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Your Device Time Zone:
                </label>
                <div style={{ padding: '0.5rem', background: '#f5f5f5', borderRadius: '4px' }}>
                  {detectedTimeZone || 'Unable to detect'}
                </div>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Select Time Region:
                </label>
                <select 
                  value={selectedTimeRegion}
                  onChange={(e) => setSelectedTimeRegion(e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '0.5rem',
                    borderRadius: '4px',
                    border: '1px solid #ddd'
                  }}
                >
                  <optgroup label="Asia & Pacific">
                    <option value="Asia/Manila">Asia/Manila (PHT)</option>
                    <option value="Asia/Singapore">Asia/Singapore (SGT)</option>
                    <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
                    <option value="Australia/Sydney">Australia/Sydney (AEST/AEDT)</option>
                  </optgroup>
                  <optgroup label="Americas">
                    <option value="America/New_York">America/New_York (Eastern)</option>
                    <option value="America/Chicago">America/Chicago (Central)</option>
                    <option value="America/Denver">America/Denver (Mountain)</option>
                    <option value="America/Los_Angeles">America/Los_Angeles (Pacific)</option>
                    <option value="America/Anchorage">America/Anchorage (Alaska)</option>
                    <option value="America/Adak">America/Adak (Hawaii-Aleutian)</option>
                    <option value="Pacific/Honolulu">Pacific/Honolulu (Hawaii)</option>
                    <option value="America/Phoenix">America/Phoenix (Arizona)</option>
                    <option value="America/Toronto">America/Toronto (Eastern Canada)</option>
                    <option value="America/Vancouver">America/Vancouver (Pacific Canada)</option>
                  </optgroup>
                  <optgroup label="Europe & Africa">
                    <option value="Europe/London">Europe/London (GMT/BST)</option>
                    <option value="Europe/Paris">Europe/Paris (CET/CEST)</option>
                    <option value="Europe/Berlin">Europe/Berlin (CET/CEST)</option>
                    <option value="Europe/Moscow">Europe/Moscow (MSK)</option>
                  </optgroup>
                </select>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Time Format:
                </label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <TimeFormatToggle 
                    active={!use24HourFormat} 
                    onClick={handleTimeFormatChange}
                    disabled={updatingTimeFormat}
                  >
                    12-hour
                  </TimeFormatToggle>
                  <TimeFormatToggle 
                    active={use24HourFormat} 
                    onClick={handleTimeFormatChange}
                    disabled={updatingTimeFormat}
                  >
                    24-hour
                  </TimeFormatToggle>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setShowTimeRegionModal(false)}>
                Cancel
              </Button>
              <Button 
                primary 
                onClick={handleTimeRegionChange}
                disabled={updatingTimeRegion}
              >
                {updatingTimeRegion ? 'Saving...' : 'Save Changes'}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </DashboardContainer>
  );
};

export default MainLayout;
