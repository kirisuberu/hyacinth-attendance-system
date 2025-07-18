import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import styled from 'styled-components';
import { 
  House, 
  SignOut, 
  Calendar, 
  Clock, 
  User, 
  SignIn, 
  SignOut as SignOutIcon, 
  UserPlus, 
  Users, 
  GlobeHemisphereWest, 
  ClockClockwise, 
  Shield,
  UserCircle,
  ChartBar,
  Gear,
  ListChecks,
  CaretDown,
  CaretRight,
  Ruler,
  LockSimple,
  CalendarX,
  Bell,
  Buildings
} from 'phosphor-react';
import { useTimeFormat } from '../../contexts/TimeFormatContext';
import { auth, db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { getAttendanceRules } from '../../services/systemSettingsService';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
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
  background-color: #1e8e24;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background-color: #25a52c;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  }
  
  &:active:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

const TimeOutSidebarButton = styled(SidebarTimeButton)`
  background-color: #c62828;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background-color: #d32f2f;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  }
  
  &:active:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.span`
  margin-right: 12px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Make content area scrollable */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  background-color: #f5f5f5;
  z-index: 10; /* Ensure header stays on top */
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

const UpdatesButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 1px solid #ddd;
  color: #333;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  margin-right: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f0f0f0;
    border-color: #ccc;
  }
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
const MainContentArea = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto; /* Make content area scrollable */
  height: calc(100vh - 73px); /* Subtract header height */
`;

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
  // State for collapsible panels
  const [adminPanelExpanded, setAdminPanelExpanded] = useState(true);
  const [superAdminPanelExpanded, setSuperAdminPanelExpanded] = useState(true);
  
  // Define isAdmin based on userData role
  const isAdmin = userData?.role === 'admin';

  // Check if admin user has specific privileges
  const canManageRegistrations = userData?.role === 'admin' && userData?.privileges?.canManageRegistrations !== false;
  const canManageUsers = userData?.role === 'admin' && userData?.privileges?.canManageUsers !== false;
  const canViewReports = userData?.role === 'admin' && userData?.privileges?.canViewReports !== false;
  const navigate = useNavigate();
  const { use24HourFormat, toggleTimeFormat } = useTimeFormat();
  const [showTimeRegionModal, setShowTimeRegionModal] = useState(false);
  const [selectedTimeRegion, setSelectedTimeRegion] = useState(userData?.timeRegion || Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Manila');
  const [updatingTimeRegion, setUpdatingTimeRegion] = useState(false);
  const [detectedTimeZone, setDetectedTimeZone] = useState('');
  const [updatingTimeFormat, setUpdatingTimeFormat] = useState(false);
  const [timeRegionLocked, setTimeRegionLocked] = useState(false);
  
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
      
      // Always show only the hours part for a more compact display
      return `UTC${sign}${hours}`;
    } catch (error) {
      console.error('Error calculating UTC offset:', error);
      return '';
    }
  };

  // Detect user's device time zone and check time region lock setting
  useEffect(() => {
    try {
      const deviceTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setDetectedTimeZone(deviceTimeZone);
      console.log('Detected device time zone:', deviceTimeZone);
      
      // Check if time region is locked in system settings
      const checkTimeRegionLock = async () => {
        try {
          const rules = await getAttendanceRules();
          const isLocked = rules.timeRegion?.lockToDeviceRegion || false;
          setTimeRegionLocked(isLocked);
          
          // If time region is locked and we have a detected time zone,
          // automatically update the user's time region if it doesn't match
          if (isLocked && deviceTimeZone && user?.uid && userData && 
              userData.timeRegion !== deviceTimeZone) {
            // Update the user document in Firestore
            const userDocRef = doc(db, 'users', user.uid);
            await updateDoc(userDocRef, {
              timeRegion: deviceTimeZone
            });
            
            // Update local state
            setUserData(prev => ({
              ...prev,
              timeRegion: deviceTimeZone
            }));
            
            setSelectedTimeRegion(deviceTimeZone);
            toast.info('Your time region has been automatically set to match your device.');
          }
        } catch (error) {
          console.error('Error checking time region lock setting:', error);
        }
      };
      
      checkTimeRegionLock();
    } catch (error) {
      console.error('Error detecting time zone:', error);
      setDetectedTimeZone('Unable to detect');
    }
  }, [user?.uid, userData]);



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

  return (
    <DashboardContainer>
      <Sidebar>
        <Logo>
          <img src="/logo.png" alt="Hyacinth Logo" style={{ height: '48px', marginBottom: '10px' }} />
          <span>Hyacinth Hub</span>
        </Logo>
        
        {/* Main Navigation Section */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem', opacity: '0.8' }}>Main Pages</p>
          
          <NavItem 
            className={activeTab === 'dashboard' ? 'active' : ''}
            onClick={() => setActiveTab('dashboard')}
          >
            <Icon><House size={16} /></Icon>
            Dashboard
          </NavItem>
          
          <NavItem 
            className={activeTab === 'schedule' ? 'active' : ''}
            onClick={() => setActiveTab('schedule')}
          >
            <Icon><Calendar size={16} /></Icon>
            Schedule
          </NavItem>
          
          <NavItem 
            className={activeTab === 'attendance' ? 'active' : ''}
            onClick={() => setActiveTab('attendance')}
          >
            <Icon><ClockClockwise size={16} /></Icon>
            Attendance Logs
          </NavItem>
          
          <NavItem 
            className={activeTab === 'profile' ? 'active' : ''}
            onClick={() => setActiveTab('profile')}
          >
            <Icon><UserCircle size={16} /></Icon>
            My Profile
          </NavItem>
        </div>
        
        {/* Admin Panel Section - For both admins and super admins */}
        {(userData?.role === 'admin' || isSuperAdmin) && (
          <div style={{ marginBottom: '1.5rem' }}>
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                cursor: 'pointer',
                marginBottom: '0.75rem',
                userSelect: 'none'
              }}
              onClick={() => setAdminPanelExpanded(!adminPanelExpanded)}
            >
              <Icon>
                {adminPanelExpanded ? <CaretDown size={16} /> : <CaretRight size={16} />}
              </Icon>
              <p style={{ 
                fontSize: '0.9rem', 
                margin: 0, 
                opacity: '0.8',
                fontWeight: '500'
              }}>
                Admin Panel
              </p>
            </div>
            
            {adminPanelExpanded && (
              <div style={{ paddingLeft: '0.5rem' }}>
                {/* Registration Requests - Available to super admins and admins with permission */}
                {(isSuperAdmin || canManageRegistrations) && (
                  <NavItem 
                    className={activeTab === 'registration_requests' ? 'active' : ''}
                    onClick={() => setActiveTab('registration_requests')}
                  >
                    <Icon><UserPlus size={16} /></Icon>
                    Registration Requests
                  </NavItem>
                )}
                
                {/* User Management - Available to super admins and admins with permission */}
                {(isSuperAdmin || canManageUsers) && (
                  <NavItem 
                    className={activeTab === 'user_management' ? 'active' : ''}
                    onClick={() => setActiveTab('user_management')}
                  >
                    <Icon><Users size={16} /></Icon>
                    User Management
                  </NavItem>
                )}
                
                {/* Department Management - Available to super admins and admins with permission */}
                {(isSuperAdmin || canManageUsers) && (
                  <NavItem 
                    onClick={() => navigate('/departments')}
                  >
                    <Icon><Buildings size={16} /></Icon>
                    Department Management
                  </NavItem>
                )}
                
                {/* Reports - Available to super admins and admins with permission */}
                {(isSuperAdmin || canViewReports) && (
                  <NavItem 
                    className={activeTab === 'reports' ? 'active' : ''} 
                    onClick={() => setActiveTab('reports')}
                  >
                    <Icon><ChartBar size={16} /></Icon>
                    Reports
                  </NavItem>
                )}
                
                {/* Attendance Requests - Available to super admins and admins with permission */}
                {(isSuperAdmin || canManageUsers) && (
                  <NavItem 
                    className={activeTab === 'attendance_requests' ? 'active' : ''} 
                    onClick={() => setActiveTab('attendance_requests')}
                  >
                    <Icon><ListChecks size={16} /></Icon>
                    Attendance Requests
                  </NavItem>
                )}
                
                {/* Schedule Change Requests - Available to super admins and admins with permission */}
                {(isSuperAdmin || (userData?.role === 'admin' && userData?.privileges?.canManageSchedules !== false)) && (
                  <NavItem 
                    className={activeTab === 'schedule_change_requests' ? 'active' : ''} 
                    onClick={() => setActiveTab('schedule_change_requests')}
                  >
                    <Icon><Calendar size={16} /></Icon>
                    Schedule Change Requests
                  </NavItem>
                )}
              </div>
            )}
          </div>
        )}
        
        {/* Super Admin Panel Section - Only for super admins */}
        {isSuperAdmin && (
          <div style={{ marginBottom: '1.5rem' }}>
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                cursor: 'pointer',
                marginBottom: '0.75rem',
                userSelect: 'none'
              }}
              onClick={() => setSuperAdminPanelExpanded(!superAdminPanelExpanded)}
            >
              <Icon>
                {superAdminPanelExpanded ? <CaretDown size={16} /> : <CaretRight size={16} />}
              </Icon>
              <p style={{ 
                fontSize: '0.9rem', 
                margin: 0, 
                opacity: '0.8',
                fontWeight: '500'
              }}>
                Super Admin Panel
              </p>
            </div>
            
            {superAdminPanelExpanded && (
              <div style={{ paddingLeft: '0.5rem' }}>
                <NavItem 
                  className={activeTab === 'admin_privileges' ? 'active' : ''} 
                  onClick={() => setActiveTab('admin_privileges')}
                >
                  <Icon><Shield size={16} /></Icon>
                  Admin Privileges
                </NavItem>
                <NavItem 
                  className={activeTab === 'rules' ? 'active' : ''} 
                  onClick={() => setActiveTab('rules')}
                >
                  <Icon><Ruler size={16} /></Icon>
                  Rules
                </NavItem>
                <NavItem 
                  className={activeTab === 'absent_service' ? 'active' : ''} 
                  onClick={() => setActiveTab('absent_service')}
                >
                  <Icon><CalendarX size={16} /></Icon>
                  Absent Service
                </NavItem>
              </div>
            )}
          </div>
        )}
        
        <div style={{ marginTop: 'auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem', opacity: '0.8' }}>User Settings</p>
            
            <NavItem 
              onClick={() => {
                if (timeRegionLocked) {
                  toast.warning("Time region is locked by administrator. It's automatically set to match your device.");
                } else {
                  setShowTimeRegionModal(true);
                }
              }}
              style={{ opacity: timeRegionLocked ? 0.7 : 1 }}
            >
              <Icon><GlobeHemisphereWest size={16} /></Icon>
              Change Time Region
              {timeRegionLocked && (
                <Icon style={{ marginLeft: '4px', marginRight: '4px' }}>
                  <LockSimple size={14} />
                </Icon>
              )}
              <div style={{ fontSize: '0.75rem', marginLeft: 'auto', opacity: 0.7 }}>
                {userData?.timeRegion?.replace('_', ' ') || 'Asia/Manila'}
              </div>
            </NavItem>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '1rem', marginBottom: '1rem', opacity: '0.9', fontWeight: '500' }}>Attendance Actions</p>
            
            <TimeInSidebarButton 
              onClick={() => handleTimeInOut('In')} 
              disabled={loading || attendanceStatus === 'In'}
            >
              <Icon><SignIn size={20} /></Icon>
              Time In
            </TimeInSidebarButton>
            
            <TimeOutSidebarButton 
              onClick={() => handleTimeInOut('Out')} 
              disabled={loading || attendanceStatus === 'Out' || !attendanceStatus}
            >
              <Icon><SignOutIcon size={20} /></Icon>
              Time Out
            </TimeOutSidebarButton>
            
            {attendanceStatus && (
              <div style={{ 
                padding: '0.75rem 1rem', 
                textAlign: 'center', 
                fontSize: '0.95rem',
                backgroundColor: attendanceStatus === 'In' ? 'rgba(30, 142, 36, 0.1)' : 'rgba(198, 40, 40, 0.1)',
                borderRadius: '8px',
                marginTop: '1rem',
                border: `1px solid ${attendanceStatus === 'In' ? 'rgba(30, 142, 36, 0.3)' : 'rgba(198, 40, 40, 0.3)'}`
              }}>
                Status: <strong style={{ color: attendanceStatus === 'In' ? '#1e8e24' : '#c62828' }}>
                  {attendanceStatus === 'In' ? 'Clocked In' : 'Clocked Out'}
                </strong>
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
            {activeTab === 'admin_privileges' && 'Admin Privileges'}
            {activeTab === 'rules' && 'Attendance Rules'}
          </Title>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <UpdatesButton onClick={() => navigate('/changelog')}>
              <Bell size={16} />
              App Updates
            </UpdatesButton>
            
            <UserInfo>
              <UserName>{user?.displayName}</UserName>
              <LogoutButton onClick={handleLogout}>
                <SignOut size={16} />
                Logout
              </LogoutButton>
            </UserInfo>
          </div>
        </Header>
        
        <MainContentArea>
          {children}
        </MainContentArea>
      </Content>
      
      {/* Time Region Modal */}
      {showTimeRegionModal && !timeRegionLocked && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <h3>Change Time Region</h3>
              {timeRegionLocked ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <LockSimple size={16} />
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>Locked by admin</span>
                </div>
              ) : (
                <CloseButton onClick={() => setShowTimeRegionModal(false)}>&times;</CloseButton>
              )}
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
                  <optgroup label="Asia">
                    <option value="Asia/Manila">Asia/Manila (PHT, UTC+8)</option>
                  </optgroup>
                  <optgroup label="Americas">
                    <option value="America/New_York">America/New_York (Eastern, UTC-5/-4)</option>
                    <option value="America/Chicago">America/Chicago (Central, UTC-6/-5)</option>
                    <option value="America/Denver">America/Denver (Mountain, UTC-7/-6)</option>
                    <option value="America/Los_Angeles">America/Los_Angeles (Pacific, UTC-8/-7)</option>
                  </optgroup>
                  <optgroup label="Europe">
                    <option value="Europe/London">Europe/London (GMT/BST, UTC+0/+1)</option>
                  </optgroup>
                </Select>
                <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#666' }}>
                  Note: UTC offsets may vary during Daylight Saving Time transitions.
                </div>
              </FormGroup>
              
              <FormGroup style={{ marginTop: '1.5rem' }}>
                <Label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ClockClockwise size={18} />
                  Time Format
                </Label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                  <TimeFormatToggle 
                    active={!use24HourFormat} 
                    onClick={handleTimeFormatChange}
                    disabled={updatingTimeFormat}
                  >
                    12-hour (AM/PM)
                  </TimeFormatToggle>
                  <TimeFormatToggle 
                    active={use24HourFormat} 
                    onClick={handleTimeFormatChange}
                    disabled={updatingTimeFormat}
                  >
                    24-hour
                  </TimeFormatToggle>
                </div>
                <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#666' }}>
                  This setting affects how time is displayed throughout the application.
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
