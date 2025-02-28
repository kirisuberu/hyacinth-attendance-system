import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { recordAttendance } from '../utils/attendanceService';
import AttendanceConfirmationModal from './AttendanceConfirmationModal';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #f9fafb;
  color: #111827;
  
  @media (min-width: 1024px) {
    width: calc(100% - 250px);
    margin-left: 250px;
    padding-left: 0;
  }
`;

const TopNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #1f2937;
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  height: 60px;
  
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
  
  @media (min-width: 1024px) {
    padding-left: 2rem;
    left: 250px;
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  padding: 0;
  position: relative;
  width: 30px;
  z-index: 1000;
  
  span {
    background-color: white;
    border-radius: 3px;
    display: block;
    height: 3px;
    transition: all 0.3s ease;
    width: 100%;
  }
  
  &.open {
    span:first-child {
      transform: translateY(8px) rotate(45deg);
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:last-child {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Sidebar = styled.aside`
  background: #1f2937;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  
  &.open {
    transform: translateX(0);
  }
  
  @media (min-width: 1024px) {
    position: fixed;
    transform: translateX(0);
    flex-shrink: 0;
    width: 250px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
  display: ${props => props.isOpen ? 'block' : 'none'};
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #f3f4f6;
  text-decoration: none;
  padding: 1rem 1.5rem;
  display: block;
  transition: background 0.2s;
  position: relative;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }

  &.active {
    background: #3b82f6;
    color: white;
    font-weight: 600;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 4px;
      background: white;
    }
  }
  
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  padding: 1.5rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  .name {
    font-weight: 500;
    font-size: 0.875rem;
    color: white;
  }
  
  .email {
    font-size: 0.75rem;
    color: #e5e7eb;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  @media (min-width: 768px) {
    .name {
      font-size: 1rem;
    }
    
    .email {
      font-size: 0.875rem;
      max-width: 200px;
    }
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 1rem 1rem 1rem 0;
  background: #f9fafb;
  color: #111827;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  
  @media (min-width: 768px) {
    padding: 2rem 2rem 2rem 0;
  }
`;

const TimeInOutBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 1rem 0;
  gap: 1rem;
  background: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
  margin-top: 60px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 1.5rem 2rem 1.5rem 0;
  }
`;

const TimeButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  flex: 1;
  order: 1;
  
  @media (min-width: 768px) {
    flex-direction: row;
    order: 1;
  }
`;

const TimeRecordCard = styled.div`
  margin-top: 0;
  padding: 1rem;
  background: #fff;
  color: #111827;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  flex: 1;
  order: 2;
  
  @media (min-width: 768px) {
    margin-top: 0;
    order: 2;
  }
`;

const TimeButton = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
  font-size: 0.875rem;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
`;

const TimeInButton = styled(TimeButton)`
  background: #10b981;
  color: white;
  order: 1;
  
  &:hover:not(:disabled) {
    background: #059669;
  }
  
  &:disabled {
    background: #6ee7b7;
    color: #f9fafb;
  }
  
  @media (min-width: 768px) {
    order: 1;
  }
`;

const TimeOutButton = styled(TimeButton)`
  background: #ef4444;
  color: white;
  order: 3;
  
  &:hover:not(:disabled) {
    background: #dc2626;
  }
  
  &:disabled {
    background: #fca5a5;
    color: #f9fafb;
  }
  
  @media (min-width: 768px) {
    order: 3;
  }
`;

const LogoutButton = styled.button`
  margin: 1rem 1.5rem;
  padding: 0.75rem 1rem;
  background: rgba(239, 68, 68, 0.15);
  color: #fca5a5;
  border: 1px solid #ef4444;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(239, 68, 68, 0.25);
    color: white;
  }
  
  @media (min-width: 768px) {
    margin: 1rem 2rem;
  }
`;

const ConfirmationPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1100;
  max-width: 90%;
  width: 400px;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
`;

const PopupTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #111827;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: #10B981;
  }
`;

const PopupContent = styled.div`
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #4B5563;
  
  p {
    margin: 0.5rem 0;
  }
  
  .shift-duration {
    margin-top: 1rem;
    padding: 0.75rem;
    background: #F0FDF4;
    border-radius: 4px;
    border-left: 4px solid #22C55E;
    
    p {
      margin: 0;
      color: #166534;
      
      &:first-child {
        font-weight: 600;
        margin-bottom: 0.25rem;
      }
    }
  }
`;

const PopupButton = styled.button`
  padding: 0.5rem 1.5rem;
  background: #10B981;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #059669;
  }
`;

function MemberLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [todayRecord, setTodayRecord] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const [userName, setUserName] = useState('');
  const [confirmationPopup, setConfirmationPopup] = useState({ show: false, message: '', shiftDuration: null, type: '' });
  const location = useLocation();
  const isMobile = window.innerWidth < 1024;
  
  useEffect(() => {
    checkTodayAttendance();
    fetchUserInfo();
  }, []);

  useEffect(() => {
    // Close sidebar on route change (especially for mobile)
    closeSidebar();
  }, [location]);

  useEffect(() => {
    // Handle window resize to determine mobile state
    const handleResize = () => {
      // Update isMobile state
      const newIsMobile = window.innerWidth < 1024;
      
      // If transitioning from mobile to desktop, ensure sidebar is visible
      if (!newIsMobile && window.innerWidth >= 1024) {
        // No need to explicitly open sidebar on desktop as it's handled by CSS
        // Just make sure it's closed on mobile when transitioning to desktop
        if (sidebarOpen) {
          closeSidebar();
        }
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  const fetchUserInfo = async () => {
    if (!auth.currentUser) return;

    try {
      const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
      if (userDoc.exists()) {
        setUserName(userDoc.data().name);
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const checkTodayAttendance = async () => {
    if (!auth.currentUser) return;

    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // Create end of day timestamp
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      // Use a simpler query that doesn't require a composite index
      const q = query(
        collection(db, 'attendance'),
        where('userId', '==', auth.currentUser.uid)
      );

      const querySnapshot = await getDocs(q);
      console.log(`Found ${querySnapshot.size} total attendance records for user`);
      
      if (!querySnapshot.empty) {
        // Get all records
        const allRecords = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // Filter for today's records client-side
        const todayRecords = allRecords.filter(record => {
          if (!record.timestamp) return false;
          
          const recordDate = new Date(record.timestamp.seconds * 1000);
          const isToday = recordDate >= today && recordDate < tomorrow;
          if (isToday) {
            console.log('Found today\'s record:', {
              id: record.id,
              type: record.type,
              timestamp: recordDate.toLocaleString(),
              status: record.status
            });
          }
          return isToday;
        });
        
        console.log(`Found ${todayRecords.length} records for today`);
        
        // Sort by timestamp in descending order
        todayRecords.sort((a, b) => {
          const timestampA = a.timestamp?.seconds || 0;
          const timestampB = b.timestamp?.seconds || 0;
          return timestampB - timestampA;
        });
        
        if (todayRecords.length > 0) {
          const latestRecord = todayRecords[0];
          
          // Format the status with time difference
          let statusText = latestRecord.status || 'No Status';
          if (latestRecord.timeDiffHours || latestRecord.timeDiffMinutes) {
            const parts = [];
            if (latestRecord.timeDiffHours) {
              parts.push(`${Math.abs(latestRecord.timeDiffHours)}h`);
            }
            if (latestRecord.timeDiffMinutes) {
              parts.push(`${Math.abs(latestRecord.timeDiffMinutes)}m`);
            }
            if (parts.length > 0) {
              statusText += ` (${parts.join(' ')})`;
            }
          }
          
          setTodayRecord({
            ...latestRecord,
            formattedStatus: statusText
          });
        } else {
          setTodayRecord(null);
        }
      } else {
        setTodayRecord(null);
      }
    } catch (error) {
      console.error('Error checking attendance:', error);
    }
  };

  const handleTimeRecord = async (type, notes) => {
    try {
      console.log(`Recording ${type.toUpperCase()} attendance with notes: ${notes}`);
      
      const result = await recordAttendance(
        auth.currentUser.uid,
        auth.currentUser.email,
        userName,
        type.toUpperCase(),
        notes
      );

      if (!result.success) {
        throw new Error(result.error || 'Failed to record attendance');
      }

      setShowModal(false);
      
      // Add a small delay to ensure the Firestore record is fully processed
      setTimeout(() => {
        console.log('Refreshing attendance records after recording');
        checkTodayAttendance();
      }, 1000);

      // Show status message
      const statusMessage = `${type.toUpperCase()} recorded - ${result.status}`;
      if (result.timeDiff) {
        const hours = Math.abs(result.timeDiff.hours);
        const minutes = Math.abs(result.timeDiff.minutes);
        const timeDesc = [];
        if (hours > 0) timeDesc.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
        if (minutes > 0) timeDesc.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
        
        if (timeDesc.length > 0) {
          let message = `${statusMessage} (${timeDesc.join(' and ')}${result.timeDiff.totalMinutes < 0 ? ' early' : ' late'})`;
          
          // Add shift duration for OUT records
          let shiftDuration = null;
          if (type.toUpperCase() === 'OUT' && result.shiftDuration) {
            const shiftHours = result.shiftDuration.hours;
            const shiftMinutes = result.shiftDuration.minutes;
            
            shiftDuration = {
              hours: shiftHours,
              minutes: shiftMinutes
            };
          }
          
          // Show confirmation popup instead of alert
          setConfirmationPopup({
            show: true,
            message: message,
            shiftDuration: shiftDuration,
            type: type.toUpperCase()
          });
        } else {
          // Show confirmation popup instead of alert
          setConfirmationPopup({
            show: true,
            message: statusMessage,
            shiftDuration: null,
            type: type.toUpperCase()
          });
        }
      } else {
        // Show confirmation popup instead of alert
        setConfirmationPopup({
          show: true,
          message: statusMessage,
          shiftDuration: null,
          type: type.toUpperCase()
        });
      }
    } catch (error) {
      console.error('Error recording time:', error);
      alert(error.message || 'Failed to record attendance. Please try again.');
    }
  };

  const handleTimeButtonClick = (type) => {
    setPendingAction(type);
    setShowModal(true);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const user = auth.currentUser;
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <LayoutContainer>
      <Sidebar 
        className={sidebarOpen ? 'open' : ''}
      >
        <Logo>Hyacinth Attendance</Logo>
        <NavLink to="/member/dashboard" className={({ isActive }) => isActive ? 'active' : ''} onClick={isMobile ? closeSidebar : undefined}>
          Dashboard
        </NavLink>
        <NavLink to="/member/my-schedule" className={({ isActive }) => isActive ? 'active' : ''} onClick={isMobile ? closeSidebar : undefined}>
          My Schedule
        </NavLink>
        <NavLink to="/member/all-schedules" className={({ isActive }) => isActive ? 'active' : ''} onClick={isMobile ? closeSidebar : undefined}>
          All Schedules
        </NavLink>
        <NavLink to="/member/realtime-attendance" className={({ isActive }) => isActive ? 'active' : ''} onClick={isMobile ? closeSidebar : undefined}>
          Real-Time Attendance
        </NavLink>
        <NavLink to="/member/reports" className={({ isActive }) => isActive ? 'active' : ''} onClick={isMobile ? closeSidebar : undefined}>
          Reports
        </NavLink>
        <LogoutButton onClick={handleLogout}>
          Logout
        </LogoutButton>
      </Sidebar>

      <Overlay isOpen={sidebarOpen} onClick={closeSidebar} />

      <MainContainer>
        <TopNav>
          <HamburgerButton 
            onClick={toggleSidebar}
            className={sidebarOpen ? 'open' : ''}
          >
            <span></span>
            <span></span>
            <span></span>
          </HamburgerButton>
          
          <UserInfo>
            <span className="name">{user.displayName || 'User'}</span>
            <span className="email">{user.email}</span>
          </UserInfo>
        </TopNav>

        <TimeInOutBar>
          <TimeButtonsContainer>
            <TimeInButton 
              onClick={() => handleTimeButtonClick('in')} 
              disabled={todayRecord?.type === 'IN'}
            >
              Time In
            </TimeInButton>
            
            <TimeOutButton 
              onClick={() => handleTimeButtonClick('out')} 
              disabled={!todayRecord || todayRecord.type !== 'IN'}
            >
              Time Out
            </TimeOutButton>
          </TimeButtonsContainer>
          
          {todayRecord && (
            <TimeRecordCard>
              <p style={{ margin: '0 0 0.5rem', fontWeight: 'bold', color: '#111827' }}>Today's Record:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ flex: '1 0 45%', minWidth: '120px' }}>
                  <p style={{ margin: '0', fontSize: '0.875rem', color: '#111827' }}><strong>Type:</strong> {todayRecord.type}</p>
                  <p style={{ margin: '0', fontSize: '0.875rem', color: '#111827' }}><strong>Time:</strong> {formatTime(todayRecord.timestamp)}</p>
                </div>
                <div style={{ flex: '1 0 45%', minWidth: '120px' }}>
                  {todayRecord.scheduleTime && (
                    <p style={{ margin: '0', fontSize: '0.875rem', color: '#111827' }}><strong>Schedule:</strong> {new Date(`1970-01-01T${todayRecord.scheduleTime}`).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true
                    })}</p>
                  )}
                  <p style={{ margin: '0', fontSize: '0.875rem', color: '#111827' }}><strong>Status:</strong> <span style={{
                    padding: '0.25rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    display: 'inline-block',
                    marginTop: '0.25rem',
                    background: todayRecord.status?.toLowerCase().includes('late') ? '#FEE2E2' :
                              todayRecord.status?.toLowerCase().includes('early') ? '#DBEAFE' :
                              todayRecord.status?.toLowerCase().includes('overtime') ? '#FEF3C7' : '#DCFCE7',
                    color: todayRecord.status?.toLowerCase().includes('late') ? '#991B1B' :
                          todayRecord.status?.toLowerCase().includes('early') ? '#1E40AF' :
                          todayRecord.status?.toLowerCase().includes('overtime') ? '#92400E' : '#166534'
                  }}>{todayRecord.formattedStatus}</span></p>
                </div>
              </div>
              
              {/* Display shift duration for OUT records */}
              {todayRecord.type === 'OUT' && todayRecord.shiftDurationHours !== undefined && (
                <div style={{ 
                  marginTop: '0.5rem', 
                  padding: '0.5rem', 
                  background: '#F0FDF4', 
                  borderRadius: '4px', 
                  borderLeft: '4px solid #22C55E' 
                }}>
                  <p style={{ margin: '0', fontWeight: 'bold', fontSize: '0.875rem', color: '#166534' }}>Shift Duration:</p>
                  <p style={{ margin: '0', fontSize: '0.875rem', color: '#166534' }}>
                    {todayRecord.shiftDurationHours > 0 && `${todayRecord.shiftDurationHours} hour${todayRecord.shiftDurationHours !== 1 ? 's' : ''} `}
                    {todayRecord.shiftDurationMinutes > 0 && `${todayRecord.shiftDurationMinutes} minute${todayRecord.shiftDurationMinutes !== 1 ? 's' : ''}`}
                  </p>
                </div>
              )}
            </TimeRecordCard>
          )}
        </TimeInOutBar>

        <Content>
          <Outlet />
        </Content>

        <AttendanceConfirmationModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={(notes) => handleTimeRecord(pendingAction, notes)}
          type={pendingAction?.toUpperCase()}
          userData={{ name: userName, email: user.email }}
        />
        
        {confirmationPopup.show && (
          <PopupOverlay>
            <ConfirmationPopup>
              <PopupTitle>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {confirmationPopup.type} Recorded
              </PopupTitle>
              <PopupContent>
                <p>{confirmationPopup.message}</p>
                {confirmationPopup.shiftDuration && (
                  <div className="shift-duration">
                    <p>Shift Duration:</p>
                    <p>
                      {confirmationPopup.shiftDuration.hours > 0 && `${confirmationPopup.shiftDuration.hours} hour${confirmationPopup.shiftDuration.hours !== 1 ? 's' : ''} `}
                      {confirmationPopup.shiftDuration.minutes > 0 && `${confirmationPopup.shiftDuration.minutes} minute${confirmationPopup.shiftDuration.minutes !== 1 ? 's' : ''}`}
                    </p>
                  </div>
                )}
              </PopupContent>
              <PopupButton onClick={() => setConfirmationPopup({ show: false, message: '', shiftDuration: null, type: '' })}>
                OK
              </PopupButton>
            </ConfirmationPopup>
          </PopupOverlay>
        )}
      </MainContainer>
    </LayoutContainer>
  );
}

export default MemberLayout;
