import { useState, useEffect } from 'react';
import { useNavigate, useOutletContext, Link, useLocation, Outlet } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { recordAttendance, getAttendanceStatus } from '../../services/attendanceService';
import styled from 'styled-components';
import { 
  House, 
  SignOut, 
  SignIn,
  Calendar, 
  Clock, 
  User, 
  Users, 
  ChartBar,
  Shield,
  Ruler,
  CalendarX,
  Buildings,
  ListChecks,
  CaretDown,
  CaretRight,
  Bell
} from 'phosphor-react';
import UserPlus from '../icons/UserPlus';
import { auth, db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useTimeFormat } from '../../contexts/TimeFormatContext';
import { getAttendanceRules } from '../../services/systemSettingsService';
import { preventMultiSubmit } from '../../utils/debounce';
import { checkAndHandleFailedTimeOut } from '../../services/attendanceService';

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

const Icon = styled.span`
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
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

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const TimeControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TimeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${props => props.variant === 'in' ? '#4caf50' : '#f44336'};
  color: white;
  border: 1px solid ${props => props.variant === 'in' ? '#43a047' : '#e53935'};
  
  &:hover {
    background-color: ${props => props.variant === 'in' ? '#43a047' : '#e53935'};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
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

const MainContentArea = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto; /* Make content area scrollable */
  height: calc(100vh - 73px); /* Subtract header height */
`;

const AppUpdatesButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  text-decoration: none;
  font-size: 0.9rem;
  margin-right: 1rem;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

function DashboardLayout() {
  const context = useOutletContext();
  const user = context?.user || null;
  const userData = context?.userData || null;
  const setUserData = context?.setUserData || (() => {});
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [lastRecord, setLastRecord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showTimeRegionModal, setShowTimeRegionModal] = useState(false);
  const [showTimeFormatModal, setShowTimeFormatModal] = useState(false);
  const [selectedTimeRegion, setSelectedTimeRegion] = useState('');
  const [processingTimeIn, setProcessingTimeIn] = useState(false);
  const [processingTimeOut, setProcessingTimeOut] = useState(false);
  const [detectedTimeZone, setDetectedTimeZone] = useState('');
  const [timeRegionLocked, setTimeRegionLocked] = useState(false);
  const [updatingTimeRegion, setUpdatingTimeRegion] = useState(false);
  const [updatingTimeFormat, setUpdatingTimeFormat] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingAttendance, setPendingAttendance] = useState(null);
  const [attendanceNotes, setAttendanceNotes] = useState('');
  const [processingAttendance, setProcessingAttendance] = useState(false);
  const [adminPanelExpanded, setAdminPanelExpanded] = useState(true);
  const [superAdminPanelExpanded, setSuperAdminPanelExpanded] = useState(true);
  const { use24HourFormat, toggleTimeFormat } = useTimeFormat();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine if user is super admin or has specific privileges
  const isSuperAdmin = userData?.role === 'super_admin';
  const canManageRegistrations = isSuperAdmin || (userData?.role === 'admin' && userData?.privileges?.canManageRegistrations !== false);
  const canManageUsers = isSuperAdmin || (userData?.role === 'admin' && userData?.privileges?.canManageUsers !== false);
  const canViewReports = isSuperAdmin || (userData?.role === 'admin' && userData?.privileges?.canViewReports !== false);
  const canManageAttendanceRequests = isSuperAdmin || (userData?.role === 'admin' && userData?.privileges?.canManageAttendanceRequests !== false);
  const canManageSchedules = isSuperAdmin || (userData?.role === 'admin' && userData?.privileges?.canManageSchedules !== false);

  // Check if the current path matches a specific route
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Initialize attendance status when component loads
  useEffect(() => {
    const initializeAttendanceStatus = async () => {
      if (user?.uid) {
        try {
          const status = await getAttendanceStatus(user.uid);
          setAttendanceStatus(status.status);
          setLastRecord(status.lastRecord);
        } catch (error) {
          console.error('Error initializing attendance status:', error);
        }
      }
    };
    
    initializeAttendanceStatus();
  }, [user?.uid]);
  
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
  }, [user?.uid, userData, setUserData]);

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
      setShowTimeFormatModal(false);
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/');
    }).catch((error) => {
      console.error('Error signing out:', error);
      toast.error('Failed to sign out');
    });
  };

  const handleTimeInOutClick = async (type) => {
    if (!user?.uid) {
      toast.error('You must be logged in to record attendance');
      return;
    }
    
    try {
      // Prevent multiple submissions
      if (type === 'In' && processingTimeIn) return;
      if (type === 'Out' && processingTimeOut) return;
      
      // Set processing state
      if (type === 'In') setProcessingTimeIn(true);
      if (type === 'Out') setProcessingTimeOut(true);
      
      // Record attendance
      await recordAttendance(user.uid, type);
      
      // Update attendance status
      const newStatus = await getAttendanceStatus(user.uid);
      setAttendanceStatus(newStatus.status);
      setLastRecord(newStatus.lastRecord);
      
      toast.success(`Time ${type} recorded successfully`);
    } catch (error) {
      console.error(`Error recording Time ${type}:`, error);
      toast.error(`Failed to record Time ${type}`);
    } finally {
      // Reset processing state
      if (type === 'In') setProcessingTimeIn(false);
      if (type === 'Out') setProcessingTimeOut(false);
    }
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <Logo>
          <div>Hyacinth</div>
          <div style={{ fontSize: '1rem', opacity: 0.8 }}>Attendance System</div>
        </Logo>
        
        {/* Main Navigation */}
        <div style={{ flex: 1 }}>
          <NavItem to="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>
            <Icon><House size={16} /></Icon>
            Dashboard
          </NavItem>
          
          <NavItem to="/dashboard/attendance" className={isActive('/dashboard/attendance') ? 'active' : ''}>
            <Icon><Clock size={16} /></Icon>
            Attendance Logs
          </NavItem>
          
          <NavItem to="/dashboard/schedule" className={isActive('/dashboard/schedule') ? 'active' : ''}>
            <Icon><Calendar size={16} /></Icon>
            Schedule
          </NavItem>
          
          <NavItem to="/dashboard/profile" className={isActive('/dashboard/profile') ? 'active' : ''}>
            <Icon><User size={16} /></Icon>
            Profile
          </NavItem>
          
          {/* Admin Panel Section */}
          {(isSuperAdmin || canManageRegistrations || canManageUsers || canViewReports || canManageAttendanceRequests || canManageSchedules) && (
            <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
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
                  {canManageRegistrations && (
                    <NavItem 
                      to="/dashboard/registration-requests" 
                      className={isActive('/dashboard/registration-requests') ? 'active' : ''}
                    >
                      <Icon><UserPlus size={16} /></Icon>
                      Registration Requests
                    </NavItem>
                  )}
                  
                  {/* User Management - Available to super admins and admins with permission */}
                  {canManageUsers && (
                    <NavItem 
                      to="/dashboard/user-management"
                      className={isActive('/dashboard/user-management') ? 'active' : ''}
                    >
                      <Icon><Users size={16} /></Icon>
                      User Management
                    </NavItem>
                  )}
                  
                  {/* Department Management - Available to super admins and admins with permission */}
                  {canManageUsers && (
                    <NavItem 
                      to="/dashboard/departments"
                      className={isActive('/dashboard/departments') ? 'active' : ''}
                    >
                      <Icon><Buildings size={16} /></Icon>
                      Department Management
                    </NavItem>
                  )}
                  
                  {/* Reports - Available to super admins and admins with permission */}
                  {canViewReports && (
                    <NavItem 
                      to="/dashboard/reports"
                      className={isActive('/dashboard/reports') ? 'active' : ''}
                    >
                      <Icon><ChartBar size={16} /></Icon>
                      Reports
                    </NavItem>
                  )}
                  
                  {/* Attendance Requests - Available to super admins and admins with permission */}
                  {canManageAttendanceRequests && (
                    <NavItem 
                      to="/dashboard/attendance-requests"
                      className={isActive('/dashboard/attendance-requests') ? 'active' : ''}
                    >
                      <Icon><ListChecks size={16} /></Icon>
                      Attendance Requests
                    </NavItem>
                  )}
                  
                  {/* Schedule Change Requests - Available to super admins and admins with permission */}
                  {canManageSchedules && (
                    <NavItem 
                      to="/dashboard/schedule-change-requests"
                      className={isActive('/dashboard/schedule-change-requests') ? 'active' : ''}
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
                    to="/dashboard/admin-privileges"
                    className={isActive('/dashboard/admin-privileges') ? 'active' : ''}
                  >
                    <Icon><Shield size={16} /></Icon>
                    Admin Privileges
                  </NavItem>
                  <NavItem 
                    to="/dashboard/rules"
                    className={isActive('/dashboard/rules') ? 'active' : ''}
                  >
                    <Icon><Ruler size={16} /></Icon>
                    Rules
                  </NavItem>
                  <NavItem 
                    to="/dashboard/absent-service"
                    className={isActive('/dashboard/absent-service') ? 'active' : ''}
                  >
                    <Icon><CalendarX size={16} /></Icon>
                    Absent Service
                  </NavItem>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Logout Button */}
        <div>
          <NavItem as="div" onClick={handleLogout} style={{ marginTop: 'auto' }}>
            <Icon><SignOut size={16} /></Icon>
            Logout
          </NavItem>
        </div>
      </Sidebar>
      
      <Content>
        <Header>
          <TimeControls>
            <TimeButton 
              variant="in" 
              onClick={() => handleTimeInOutClick('In')}
              disabled={loading || processingTimeIn || attendanceStatus === 'Checked In'}
            >
              <SignIn size={16} />
              Time In
            </TimeButton>
            <TimeButton 
              variant="out" 
              onClick={() => handleTimeInOutClick('Out')}
              disabled={loading || processingTimeOut || attendanceStatus !== 'Checked In'}
            >
              <SignOut size={16} />
              Time Out
            </TimeButton>
          </TimeControls>
          
          <UserInfo>
            <AppUpdatesButton to="/changelog">
              <Bell size={16} />
              App Updates
            </AppUpdatesButton>
            <UserName>{user?.displayName || user?.email}</UserName>
            <LogoutButton onClick={handleLogout}>
              <SignOut size={16} />
              Logout
            </LogoutButton>
          </UserInfo>
        </Header>
        
        <MainContentArea>
          {/* This is where the child routes will be rendered */}
          <Outlet context={{ user, userData, setUserData, attendanceStatus, lastRecord }} />
        </MainContentArea>
      </Content>
    </DashboardContainer>
  );
}



export default DashboardLayout;
