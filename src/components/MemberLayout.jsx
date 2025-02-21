import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { recordAttendance } from '../utils/attendanceService';
import AttendanceConfirmationModal from './AttendanceConfirmationModal';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: #f3f4f6;
`;

const TopNav = styled.nav`
  background: #1a1a1a;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  
  span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease;
  }

  &.open {
    span:first-child {
      transform: translateY(9px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:last-child {
      transform: translateY(-9px) rotate(-45deg);
    }
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.isOpen ? '0' : '-300px'};
  width: 300px;
  height: 100vh;
  background: #1a1a1a;
  padding-top: 80px;
  transition: left 0.3s ease;
  z-index: 999;
  box-shadow: ${props => props.isOpen ? '2px 0 8px rgba(0,0,0,0.2)' : 'none'};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 998;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  display: block;
  transition: background 0.2s;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background: #3b82f6;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: white;
    }
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserInfo = styled.div`
  text-align: right;
  .name {
    font-weight: bold;
  }
  .email {
    font-size: 0.8rem;
    opacity: 0.8;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #ef4444;
  padding: 1rem 2rem;
  cursor: pointer;
  width: 100%;
  text-align: left;
  
  &:hover {
    background: rgba(239, 68, 68, 0.1);
  }
`;

const MainContent = styled.main`
  padding: 2rem;
`;

const TimeInOutBar = styled.div`
  background: white;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const TimeButton = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
  border: none;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TimeInButton = styled(TimeButton)`
  background-color: #10b981;
  
  &:hover:not(:disabled) {
    background-color: #059669;
  }
`;

const TimeOutButton = styled(TimeButton)`
  background-color: #ef4444;
  
  &:hover:not(:disabled) {
    background-color: #dc2626;
  }
`;

const StatusText = styled.div`
  color: #4b5563;
  font-size: 0.9rem;
  margin: 0 1rem;
`;

function MemberLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [todayRecord, setTodayRecord] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const [userName, setUserName] = useState('');
  const location = useLocation();
  
  useEffect(() => {
    checkTodayAttendance();
    fetchUserInfo();
  }, []);

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

      const q = query(
        collection(db, 'attendance'),
        where('userId', '==', auth.currentUser.uid),
        where('date', '==', today.getTime())
      );

      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const records = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        // Sort by timestamp in descending order
        records.sort((a, b) => b.timestamp.seconds - a.timestamp.seconds);
        const latestRecord = records[0];
        
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
    } catch (error) {
      console.error('Error checking attendance:', error);
    }
  };

  const handleTimeRecord = async (type) => {
    try {
      const result = await recordAttendance(
        auth.currentUser.uid,
        auth.currentUser.email,
        userName,
        type.toUpperCase()
      );

      if (!result.success) {
        throw new Error(result.error || 'Failed to record attendance');
      }

      setShowModal(false);
      checkTodayAttendance();

      // Show status message
      const statusMessage = `${type.toUpperCase()} recorded - ${result.status}`;
      if (result.timeDiff) {
        const hours = Math.abs(result.timeDiff.hours);
        const minutes = Math.abs(result.timeDiff.minutes);
        const timeDesc = [];
        if (hours > 0) timeDesc.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
        if (minutes > 0) timeDesc.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
        if (timeDesc.length > 0) {
          alert(`${statusMessage} (${timeDesc.join(' and ')}${result.timeDiff.totalMinutes < 0 ? ' early' : ' late'})`);
        } else {
          alert(statusMessage);
        }
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
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const user = auth.currentUser;
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <LayoutContainer>
      <TopNav>
        <HamburgerButton 
          onClick={toggleSidebar}
          className={isOpen ? 'open' : ''}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>
        <Logo>Hyacinth</Logo>
        <UserInfo>
          <div className="name">{user.displayName || 'User'}</div>
          <div className="email">{user.email}</div>
        </UserInfo>
      </TopNav>

      <TimeInOutBar>
        <TimeInButton 
          onClick={() => handleTimeButtonClick('in')} 
          disabled={todayRecord?.type === 'IN'}
        >
          Time In
        </TimeInButton>
        
        {todayRecord && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#fff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <p><strong>Today's Record:</strong></p>
            <p>Type: {todayRecord.type}</p>
            <p>Time: {formatTime(todayRecord.timestamp)}</p>
            {todayRecord.scheduleTime && (
              <p>Schedule: {new Date(`1970-01-01T${todayRecord.scheduleTime}`).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
              })}</p>
            )}
            <p>Status: <span style={{
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '500',
              background: todayRecord.status?.toLowerCase().includes('late') ? '#FEE2E2' :
                         todayRecord.status?.toLowerCase().includes('early') ? '#DBEAFE' :
                         todayRecord.status?.toLowerCase().includes('overtime') ? '#FEF3C7' : '#DCFCE7',
              color: todayRecord.status?.toLowerCase().includes('late') ? '#991B1B' :
                     todayRecord.status?.toLowerCase().includes('early') ? '#1E40AF' :
                     todayRecord.status?.toLowerCase().includes('overtime') ? '#92400E' : '#166534'
            }}>{todayRecord.formattedStatus}</span></p>
          </div>
        )}
        
        <TimeOutButton 
          onClick={() => handleTimeButtonClick('out')} 
          disabled={!todayRecord || todayRecord?.type === 'OUT'}
        >
          Time Out
        </TimeOutButton>
      </TimeInOutBar>

      <Overlay isOpen={isOpen} onClick={closeSidebar} />
      
      <Sidebar isOpen={isOpen}>
        <NavLink 
          to="/member/dashboard" 
          className={location.pathname === '/member/dashboard' ? 'active' : ''}
          onClick={closeSidebar}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/member/my-schedule" 
          className={location.pathname === '/member/my-schedule' ? 'active' : ''}
          onClick={closeSidebar}
        >
          My Schedule
        </NavLink>
        <NavLink 
          to="/member/reports" 
          className={location.pathname === '/member/reports' ? 'active' : ''}
          onClick={closeSidebar}
        >
          Reports
        </NavLink>
        <LogoutButton onClick={handleLogout}>
          Sign Out
        </LogoutButton>
      </Sidebar>

      <MainContent>
        <Outlet />
      </MainContent>

      <AttendanceConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => handleTimeRecord(pendingAction)}
        type={pendingAction?.toUpperCase()}
        userData={{ name: userName, email: user.email }}
      />
    </LayoutContainer>
  );
}

export default MemberLayout;
