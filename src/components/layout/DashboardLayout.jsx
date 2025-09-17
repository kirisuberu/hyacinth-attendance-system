import { useState, useEffect } from 'react';
import { useNavigate, useOutletContext, Link, useLocation, Outlet } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { isMobile } from 'react-device-detect';
import TimeZoneMismatchNotification from '../common/TimeZoneMismatchNotification';
import { recordAttendance, getAttendanceStatus } from '../../services/attendanceService';
import styled from 'styled-components';
import { 
  House, 
  SignOut, 
  Calendar, 
  Clock, 
  User, 
  Users, 
  ChartBar,
  Shield,
  Ruler,
  CalendarX,
  ListChecks,
  CaretDown,
  CaretRight,
  Bell,
  Question, 
  Wrench
} from 'phosphor-react';
import { FileText } from 'phosphor-react';
import UserPlus from '../icons/UserPlus';
import { auth, db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useTimeFormat } from '../../contexts/TimeFormatContext';
import { getAttendanceRules } from '../../services/systemSettingsService';
import { checkAndHandleFailedTimeOut } from '../../services/attendanceService';


function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, userData, setUserData } = useOutletContext();
  const [isUsingMobileDevice, setIsUsingMobileDevice] = useState(false);
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [lastRecord, setLastRecord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showTimeRegionModal, setShowTimeRegionModal] = useState(false);
  const [showTimeFormatModal, setShowTimeFormatModal] = useState(false);
  const [selectedTimeRegion, setSelectedTimeRegion] = useState('Asia/Manila');
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

  // Determine if user is super admin or has specific privileges
  // Check for different possible variations of super_admin role
  const isSuperAdmin = userData?.role === 'super_admin' || 
                     userData?.role === 'superadmin' || 
                     userData?.role === 'super-admin';
  const isAdmin = userData?.role === 'admin';

  // Debug log to check the actual role value
  console.log('User role:', userData?.role, 'isSuperAdmin:', isSuperAdmin, 'isAdmin:', isAdmin);
  const canManageRegistrations = isSuperAdmin || (userData?.role === 'admin' && userData?.privileges?.canManageRegistrations !== false);
  const canManageUsers = isSuperAdmin || (userData?.role === 'admin' && userData?.privileges?.canManageUsers !== false);
  const canViewReports = isSuperAdmin || (userData?.role === 'admin' && userData?.privileges?.canViewReports !== false);
  const canManageAttendanceRequests = isSuperAdmin || (userData?.role === 'admin' && userData?.privileges?.canManageAttendanceRequests !== false);
  const canManageSchedules = isSuperAdmin || (userData?.role === 'admin' && userData?.privileges?.canManageSchedules !== false);
  // Manager Functions is explicit opt-in for admins; super admins always allowed
  const canUseManagerFunctions = isSuperAdmin || (userData?.role === 'admin' && userData?.privileges?.canUseManagerFunctions === true);

  // Check if the current path matches a specific route
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Force blocked users out of the dashboard
  useEffect(() => {
    const checkUserActiveStatus = async () => {
      if (user?.uid) {
        try {
          // Check if user has a blocked status in Firestore
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          
          // Debug: Log user document and status information
          console.log('Checking user status in dashboard:', user.uid);
          console.log('Document exists:', userDoc.exists());
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            const raw = userData.status || 'active';
            const status = String(raw).toLowerCase();
            console.log('User status from Firestore:', status);
            const blocked = ['suspended', 'resigned', 'terminated'];
            if (blocked.includes(status)) {
              console.log('Detected blocked user in dashboard, forcing logout:', user.uid, status);
              await signOut(auth);
              let msg = 'Your account is not allowed to access the dashboard.';
              if (status === 'suspended') msg = 'Your account has been suspended. Please contact an administrator.';
              if (status === 'resigned') msg = 'Your employment has ended (resigned).';
              if (status === 'terminated') msg = 'Your employment has ended (terminated).';
              toast.error(msg);
              navigate('/', { replace: true });
              return;
            }
          }
        } catch (error) {
          console.error('Error checking user active status:', error);
        }
      }
    };
    
    checkUserActiveStatus();
  }, [user?.uid, navigate]);

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
    // Check for failed time outs
    if (user?.uid) {
      checkAndHandleFailedTimeOut(user.uid).catch(error => console.error('Failed time out check error:', error));
    }
  }, [user]);

  useEffect(() => {
    // Set mobile device detection
    setIsUsingMobileDevice(isMobile);
  }, []);

  // Detect user's device time zone for display purposes only; do not auto-set user timeRegion
  useEffect(() => {
    try {
      const deviceTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setDetectedTimeZone(deviceTimeZone);
      console.log('Detected device time zone:', deviceTimeZone);

      const checkTimeRegionLock = async () => {
        try {
          const rules = await getAttendanceRules();
          const isLocked = rules.timeRegion?.lockToDeviceRegion || false;
          setTimeRegionLocked(isLocked);
        } catch (error) {
          console.error('Error checking time region lock setting:', error);
        }
      };

      checkTimeRegionLock();
    } catch (error) {
      console.error('Error detecting time zone:', error);
      setDetectedTimeZone('Unable to detect');
    }
  }, [user?.uid]);

  // Update selected time region when userData changes
  useEffect(() => {
    if (userData?.timeRegion) {
      setSelectedTimeRegion(userData.timeRegion);
    } else {
      // Default to Asia/Manila when user has no timeRegion; do not fallback to device
      setSelectedTimeRegion('Asia/Manila');
    }
  }, [userData]);


  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Failed to sign out');
    }
  };


  // Reusable SideNavLink to support status badges and disabled behavior
  const SideNavLink = ({ to, active, status = 'working', children, style }) => {
    const unclickable = (status === 'coming_soon' || status === 'disabled') && !isSuperAdmin;
    const hardDisabled = (status === 'disabled') && !isSuperAdmin;
    const badgeText = status === 'new' ? 'New!' : status === 'coming_soon' ? 'Coming Soon!' : null;
    const className = active ? 'active' : '';
    const commonProps = {
      className,
      $unclickable: unclickable,
      $hardDisabled: hardDisabled,
      style,
      title: unclickable ? (status === 'coming_soon' ? 'Coming soon' : 'Disabled') : undefined,
      onClick: unclickable ? (e) => e.preventDefault() : undefined
    };

    // Use 'as' to render a div when unclickable so it's fully non-interactive
    return (
      <NavItem as={unclickable ? 'div' : Link} to={unclickable ? undefined : to} {...commonProps}>
        <NavContent>
          {children}
          {badgeText && <NavBadge $variant={status}>{badgeText}</NavBadge>}
        </NavContent>
      </NavItem>
    );
  };

  return (
    <DashboardContainer>
      <Sidebar>
      <Logo>
          <img src="/logo.png" alt="Hyacinth Logo" style={{ height: '48px', marginBottom: '10px' }} />
          <span>Hyacinth Hub</span>
        </Logo>
        
        {/* Main Navigation */}
        <div style={{ flex: 1 }}>
          <SideNavLink to="/dashboard" active={isActive('/dashboard')}>
            <Icon><House size={16} /></Icon>
            Dashboard
          </SideNavLink>
          
          <SideNavLink to="/dashboard/attendance" active={isActive('/dashboard/attendance')}>
            <Icon><Clock size={16} /></Icon>
            Attendance Logs
          </SideNavLink>
          
          <SideNavLink to="/dashboard/schedule" active={isActive('/dashboard/schedule')}>
            <Icon><Calendar size={16} /></Icon>
            Schedule
          </SideNavLink>
          
          <SideNavLink to="/dashboard/profile" active={isActive('/dashboard/profile')}>
            <Icon><User size={16} /></Icon>
            Profile
          </SideNavLink>

          <SideNavLink to="/dashboard/documents" active={isActive('/dashboard/documents')} status="coming_soon">
            <Icon><FileText size={16} /></Icon>
            Documents
          </SideNavLink>
          
          <NavItem to="/dashboard/tutorials" className={isActive('/dashboard/tutorials') ? 'active' : ''} style={{ display: 'none' }}>
            <Icon><Question size={16} /></Icon>
            Tutorials
          </NavItem>
          
          {/* Admin Panel Section */}
          {(isSuperAdmin || isAdmin || canManageRegistrations || canManageUsers || canViewReports || canManageAttendanceRequests || canManageSchedules || canUseManagerFunctions) && (
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
                    <SideNavLink 
                      to="/dashboard/registration-requests" 
                      active={isActive('/dashboard/registration-requests')}
                    >
                      <Icon><UserPlus size={16} /></Icon>
                      Registration Requests
                    </SideNavLink>
                  )}
                  
                  {/* User Management - Available to super admins and admins with permission */}
                  {canManageUsers && (
                    <SideNavLink 
                      to="/dashboard/user-management"
                      active={isActive('/dashboard/user-management')}
                    >
                      <Icon><Users size={16} /></Icon>
                      User Management
                    </SideNavLink>
                  )}

                  {/* Admin Documents - Available to super admins and admins */}
                  {(isSuperAdmin || isAdmin) && (
                    <SideNavLink 
                      to="/dashboard/admin-documents"
                      active={isActive('/dashboard/admin-documents')}
                      status="coming_soon"
                    >
                      <Icon><FileText size={16} /></Icon>
                      Admin Documents
                    </SideNavLink>
                  )}
                  
                  {/* Reports - Available to super admins and admins with permission */}
                  {canViewReports && (
                    <SideNavLink 
                      to="/dashboard/reports"
                      active={isActive('/dashboard/reports')}
                    >
                      <Icon><ChartBar size={16} /></Icon>
                      Reports
                    </SideNavLink>
                  )}
                  
                  {/* Attendance Requests - Available to super admins and admins with permission */}
                  {canManageAttendanceRequests && (
                    <SideNavLink 
                      to="/dashboard/attendance-requests"
                      active={isActive('/dashboard/attendance-requests')}
                    >
                      <Icon><ListChecks size={16} /></Icon>
                      Attendance Requests
                    </SideNavLink>
                  )}
                  
                  {/* Schedule Change Requests - Available to super admins and admins with permission */}
                  {canManageSchedules && (
                    <SideNavLink 
                      to="/dashboard/schedule-change-requests"
                      active={isActive('/dashboard/schedule-change-requests')}
                    >
                      <Icon><Calendar size={16} /></Icon>
                      Schedule Change Requests
                    </SideNavLink>
                  )}

                  {/* Manager Functions - Visible to super admins, or admins with privilege */}
                  {canUseManagerFunctions && (
                    <SideNavLink 
                      to="/dashboard/manager-functions"
                      active={isActive('/dashboard/manager-functions')}
                      status="new"
                    >
                      <Icon><Wrench size={16} /></Icon>
                      Manager Functions
                    </SideNavLink>
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
                  <SideNavLink 
                    to="/dashboard/admin-privileges"
                    active={isActive('/dashboard/admin-privileges')}
                  >
                    <Icon><Shield size={16} /></Icon>
                    Admin Privileges
                  </SideNavLink>
                  <SideNavLink 
                    to="/dashboard/rules"
                    active={isActive('/dashboard/rules')}
                  >
                    <Icon><Ruler size={16} /></Icon>
                    Rules
                  </SideNavLink>
                  <SideNavLink 
                    to="/dashboard/absent-service"
                    active={isActive('/dashboard/absent-service')}
                  >
                    <Icon><CalendarX size={16} /></Icon>
                    Absent Service
                  </SideNavLink>
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
          {/* Time Zone Mismatch Notification */}
          {userData?.timeRegion && (
            <NotificationArea>
              <TimeZoneMismatchNotification 
                userTimeZone={userData.timeRegion} 
                compact={true} 
              />
            </NotificationArea>
          )}
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
          <Outlet context={{ user, userData, setUserData, attendanceStatus, setAttendanceStatus, lastRecord, setLastRecord }} />
        </MainContentArea>
      </Content>
    </DashboardContainer>
  );
}



export default DashboardLayout;

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
  cursor: ${props => props.$unclickable ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  text-decoration: none;
  color: white;
  position: relative;
  opacity: ${props => props.$hardDisabled ? 0.65 : 1};
  filter: ${props => props.$hardDisabled ? 'grayscale(70%)' : 'none'};
  
  &:hover {
    background-color: ${props => props.$unclickable ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: bold;
  }
`;

const TimeRegionModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const TimeFormatModal = styled(TimeRegionModal)`
  top: auto;
  bottom: 0;
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
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 2rem;
  height: 5rem;
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
  min-width: 300px;
  height: 3.5rem;
  justify-content: center;
`;

const TimeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 110%;
  height: 110%;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
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
    color: #363636;
  }
`;

const UserName = styled.span`
  margin-right: 1rem;
  font-weight: 500;
  font-size: 1.3rem;
`;

const LogoutButton = styled.button`
  display: none;
  align-items: center;
  gap: 0.5rem;
  width: auto;
  background: #ff4545;
  border: 1px solid #e53935;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-left: 2rem;
  
  &:hover {
    background-color: #e53935;
  }
`;

const NotificationArea = styled.div`
  flex: 1;
  padding: 0 1rem;
`;

const MainContentArea = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto; /* Make content area scrollable */
  height: calc(100vh - 73px); /* Subtract header height */
`;

const AppUpdatesButton = styled(Link)`
  display: none; //make flex next time
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

const NavContent = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

const NavBadge = styled.span`
  position: absolute;
  left: 100%;
  bottom: 100%;
  background-color: ${props => props.$variant === 'new' ? '#22c55e' : '#9ca3af'};
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 9999px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  pointer-events: none;
  z-index: 1;
`;