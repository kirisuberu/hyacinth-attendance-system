import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import { UserType } from '../utils/userService';
import { recordAttendance, getUserAttendanceStatus, calculateAttendanceStatus } from '../utils/attendanceService';
import { useAuth } from '../contexts/AuthContext';
import AttendanceConfirmationModal from './AttendanceConfirmationModal';
import { Calendar, Clock, ClockClockwise, House, Users, ChartBar, ListChecks, SignOut, Gear } from 'phosphor-react';
import { doc, getDoc } from 'firebase/firestore';
import PropTypes from 'prop-types';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #1a1a1a;
  color: white;
  padding: 2rem;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  overflow-y: auto;
  z-index: 10;
`;

const MainContent = styled.main`
  flex: 1;
  background: #f3f4f6;
  padding: 2rem;
  margin-left: 250px;
  height: 100vh;
  overflow-y: auto;
  width: calc(100vw - 250px);
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1rem;
  margin: 0.5rem -1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background: #3b82f6;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  padding: 0 1rem;
`;

const LogoutButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  margin: 0.5rem 1rem;
  background-color: rgba(239, 68, 68, 0.1);
  border: none;
  color: #ef4444;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
  }
`;

const UserInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.2);
  color: #ffffff;
  font-size: 0.9rem;

  .name {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  .email {
    opacity: 0.8;
    word-break: break-all;
  }
`;

const AttendanceButtons = styled.div`
  position: absolute;
  bottom: 80px;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  display: flex;
  gap: 1rem;
`;

const AttendanceButton = styled.button`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &.time-in {
    background-color: #10B981;
    color: white;
    &:hover {
      background-color: #059669;
    }
  }

  &.time-out {
    background-color: #EF4444;
    color: white;
    &:hover {
      background-color: #DC2626;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;

function AdminLayout({ isMemberView = false }) {
  const { currentUser, userAccess, loading, isAdmin, isAccountant } = useAuth();
  const [isRecording, setIsRecording] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingAttendanceType, setPendingAttendanceType] = useState(null);
  const [pendingStatus, setPendingStatus] = useState('');
  const [pendingTimeDiff, setPendingTimeDiff] = useState('');
  const [canTimeIn, setCanTimeIn] = useState(true);
  const [canTimeOut, setCanTimeOut] = useState(false);
  const [userSchedule, setUserSchedule] = useState(null);
  const [hasScheduleForToday, setHasScheduleForToday] = useState(false);
  const [noScheduleMessage, setNoScheduleMessage] = useState('');

  useEffect(() => {
    if (!currentUser) return;

    const fetchUserData = async () => {
      try {
        // Get user document
        const userDoc = doc(db, 'users', currentUser.uid);
        const userSnapshot = await getDoc(userDoc);
        
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          setUserSchedule(userData.schedule || {});
          
          // Check if user has a schedule for today
          const now = new Date();
          const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
          const previousDay = new Date(now);
          previousDay.setDate(previousDay.getDate() - 1);
          const previousDayOfWeek = previousDay.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
          
          let hasSchedule = false;
          let message = '';
          
          // Check if user has any schedule entries
          if (Object.keys(userData.schedule || {}).length === 0) {
            hasSchedule = false;
            message = 'No schedule configured for this user.';
          } else {
            // Check for shifts that start today or overnight shifts that end today
            Object.values(userData.schedule || {}).forEach(shift => {
              if (shift.startDay && shift.startDay.toLowerCase() === dayOfWeek) {
                hasSchedule = true;
              } else if (shift.startDay && shift.startDay.toLowerCase() === previousDayOfWeek && 
                        shift.endDay && shift.endDay.toLowerCase() === dayOfWeek) {
                hasSchedule = true;
              }
            });
            
            if (!hasSchedule) {
              message = `No schedule configured for ${dayOfWeek}.`;
            }
          }
          
          setHasScheduleForToday(hasSchedule);
          setNoScheduleMessage(message);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchAttendanceStatus = async () => {
      try {
        const status = await getUserAttendanceStatus(currentUser.uid);
        setCanTimeIn(status.canTimeIn);
        setCanTimeOut(status.canTimeOut);
      } catch (error) {
        console.error('Error fetching attendance status:', error);
      }
    };
    
    fetchUserData();
    fetchAttendanceStatus();
  }, [currentUser]);

  const handleAttendance = async (type) => {
    // If user has no schedule for today, show a warning message
    if (!hasScheduleForToday) {
      alert(`Cannot time ${type.toLowerCase()} - ${noScheduleMessage}`);
      return;
    }
    
    try {
      const now = new Date();
      
      // Get the current day of the week
      const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
      
      // Get the user's schedule for today
      let scheduleTime;
      if (userSchedule) {
        const todaySchedule = Object.values(userSchedule).find(
          shift => shift.startDay && shift.startDay.toLowerCase() === dayOfWeek
        );
        
        if (todaySchedule) {
          scheduleTime = type === 'IN' ? todaySchedule.startTime : todaySchedule.endTime;
        }
      }
      
      // Default schedule times if no schedule found
      if (!scheduleTime) {
        scheduleTime = type === 'IN' ? '09:00' : '18:00';
      }
      
      console.log(`Using schedule time: ${scheduleTime} for ${type}`);
      
      // Use the same calculation as in AttendanceLogs.jsx via attendanceService.js
      const { status, timeDiff } = await calculateAttendanceStatus(scheduleTime, now, type, 'PHT');
      
      console.log(`Calculated status: ${status}, timeDiff:`, timeDiff);
      
      // Store the raw minutes for the modal to use with the same formatter as AttendanceLogs
      setPendingTimeDiff(timeDiff && timeDiff.totalMinutes !== undefined ? timeDiff.totalMinutes : 0);
      setPendingStatus(status);
      setPendingAttendanceType(type);
      setShowConfirmation(true);
    } catch (error) {
      console.error('Error calculating attendance status:', error);
      alert('Error calculating attendance status. Please try again.');
    }
  };

  const handleConfirmAttendance = async (notes) => {
    if (!currentUser || isRecording) return;

    setIsRecording(true);
    try {
      const result = await recordAttendance(
        currentUser.uid,
        pendingAttendanceType,
        notes
      );
      
      if (result.success) {
        alert(`${pendingAttendanceType} recorded successfully!`);
        
        // Update the time in/out button states
        setCanTimeIn(pendingAttendanceType === 'OUT');
        setCanTimeOut(pendingAttendanceType === 'IN');
      } else {
        alert('Failed to record attendance. Please try again.');
      }
    } catch (error) {
      console.error('Error recording attendance:', error);
      alert('An error occurred while recording attendance.');
    } finally {
      setIsRecording(false);
      setShowConfirmation(false);
      setPendingAttendanceType(null);
      setPendingStatus('');
      setPendingTimeDiff('');
    }
  };

  const handleCancelAttendance = () => {
    setShowConfirmation(false);
    setPendingAttendanceType(null);
    setPendingStatus('');
    setPendingTimeDiff('');
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // The onAuthStateChanged listener will handle the redirect
    } catch (error) {
      console.error('Error signing out:', error);
      alert('Failed to sign out. Please try again.');
    }
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem',
        color: '#4B5563'
      }}>
        Loading...
      </div>
    );
  }

  // For member view, we don't need to redirect
  if (!isMemberView) {
    // Redirect non-admin/accountant users to member dashboard
    if (!userAccess.hasAccess || userAccess.userType === UserType.MEMBER) {
      console.log('User does not have admin/accountant access, redirecting to member dashboard', userAccess);
      return <Navigate to="/member/dashboard" replace />;
    }
  }

  // Determine the title based on user type and view mode
  let layoutTitle = 'Hyacinth';
  if (isMemberView) {
    layoutTitle += ' Member';
  } else if (isAdmin) {
    layoutTitle += ' Admin';
  } else if (isAccountant) {
    layoutTitle += ' Accountant';
  }

  return (
    <LayoutContainer>
      <Sidebar>
        <Logo>{layoutTitle}</Logo>
        <nav>
          {/* Admin-only links - hidden for member view */}
          {!isMemberView && isAdmin && (
            <>
              <NavLink to="/admin/users"><Icon><Users size={16} /></Icon>User Management</NavLink>
              <NavLink to="/admin/rules" className={({ isActive }) => isActive ? 'active' : ''}>
                <Icon><Gear size={16} /></Icon>Rules
              </NavLink>
            </>
          )}
          
          {/* Admin Dashboard - hidden for member view */}
          {!isMemberView && (
            <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
              <Icon><House size={16} /></Icon>
              Admin Dashboard
            </NavLink>
          )}
          
          {/* My Dashboard - available for all */}
          <NavLink 
            to={isMemberView ? "/member/dashboard" : "/admin/my-dashboard"} 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            <Icon><House size={16} /></Icon>
            My Dashboard
          </NavLink>
          
          {/* Schedule links - available for all */}
          <NavLink 
            to={isMemberView ? "/member/all-schedules" : "/admin/all-schedules"} 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            <Icon><ListChecks size={16} /></Icon>
            All Schedules
          </NavLink>
          
          {/* User Calendar - hidden for member view */}
          {!isMemberView && (
            <NavLink to="/admin/user-calendar" className={({ isActive }) => isActive ? 'active' : ''}>
              <Icon><Calendar size={16} /></Icon>
              User Calendar
            </NavLink>
          )}
          
          {/* My Schedule - available for all */}
          <NavLink 
            to={isMemberView ? "/member/my-schedule" : "/admin/my-schedule"} 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            <Icon><Calendar size={16} /></Icon>
            My Schedule
          </NavLink>
          
          {/* Reports - available for all */}
          <NavLink 
            to={isMemberView ? "/member/reports" : "/admin/reports"} 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            <Icon><ChartBar size={16} /></Icon>
            Reports
          </NavLink>
          
          {/* Real-Time Attendance - available for all */}
          <NavLink 
            to={isMemberView ? "/member/realtime-attendance" : "/admin/realtime-attendance"} 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            <Icon><Clock size={16} /></Icon>
            Real-Time Attendance
          </NavLink>
          
          {/* Attendance Logs - admin only */}
          {!isMemberView && (
            <NavLink to="/admin/attendance-logs" className={({ isActive }) => isActive ? 'active' : ''}>
              <Icon><ClockClockwise size={16} /></Icon>
              Attendance Logs
            </NavLink>
          )}
          
          <LogoutButton onClick={handleLogout}>
            <Icon><SignOut size={16} /></Icon>
            Sign Out
          </LogoutButton>
        </nav>
        {currentUser && (
          <>
            <AttendanceButtons>
              <AttendanceButton
                className="time-in"
                onClick={() => handleAttendance('IN')}
                //disabled={isRecording || !canTimeIn || !hasScheduleForToday}
                title={!hasScheduleForToday ? noScheduleMessage : (canTimeIn ? 'Time In' : 'Already timed in')}
              >
                <Icon><Clock size={18} /></Icon>
                Time In
              </AttendanceButton>
              <AttendanceButton
                className="time-out"
                onClick={() => handleAttendance('OUT')}
                //disabled={isRecording || !canTimeOut || !hasScheduleForToday}
                title={!hasScheduleForToday ? noScheduleMessage : (canTimeOut ? 'Time Out' : 'Need to time in first')}
              >
                <Icon><Clock size={18} /></Icon>
                Time Out
              </AttendanceButton>
            </AttendanceButtons>
            <UserInfo>
              <div className="name">{currentUser.displayName || (isMemberView ? 'Member User' : 'Admin User')}</div>
              <div className="email">{currentUser.email}</div>
            </UserInfo>
          </>
        )}
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>

      <AttendanceConfirmationModal
        isOpen={showConfirmation}
        onClose={handleCancelAttendance}
        onConfirm={handleConfirmAttendance}
        type={pendingAttendanceType}
        userData={{
          name: currentUser?.displayName || (isMemberView ? 'Member User' : 'Admin User'),
          email: currentUser?.email
        }}
        status={pendingStatus}
        timeDiff={pendingTimeDiff}
      />
    </LayoutContainer>
  );
}

AdminLayout.propTypes = {
  isMemberView: PropTypes.bool
};

export default AdminLayout;
