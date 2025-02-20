import React from 'react';
import { Navigate, Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../firebase';
import { checkUserAdminStatus } from '../utils/userService';
import { recordAttendance } from '../utils/attendanceService';
import { useEffect, useState } from 'react';
import AttendanceConfirmationModal from './AttendanceConfirmationModal';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #1a1a1a;
  color: white;
  padding: 2rem;
  position: relative;
  max-height: 90vh;

`;

const MainContent = styled.main`
  flex: 1;
  background: #f3f4f6;
  padding: 2rem;
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

const UserInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.2);
  color: white;
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
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

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

function AdminLayout() {
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingAttendanceType, setPendingAttendanceType] = useState(null);

  useEffect(() => {
    const checkAdminStatus = async (user) => {
      try {
        if (!user) {
          console.log('No user found in checkAdminStatus');
          setIsAdmin(false);
          setLoading(false);
          return;
        }

        console.log('Checking admin status for user:', {
          email: user.email,
          uid: user.uid,
          emailVerified: user.emailVerified
        });

        const isUserAdmin = await checkUserAdminStatus(user);
        console.log('Admin status check result:', isUserAdmin);
        setIsAdmin(isUserAdmin);
      } catch (error) {
        console.error('Error checking admin status:', error);
        console.error('Error details:', {
          code: error.code,
          message: error.message
        });
        setIsAdmin(false);
      }
      setLoading(false);
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('Auth state changed - Current user:', {
          email: user.email,
          uid: user.uid
        });
        setCurrentUser(user);
        checkAdminStatus(user);
      } else {
        console.log('Auth state changed - No user logged in');
        setCurrentUser(null);
        setIsAdmin(false);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAttendance = async (type) => {
    setPendingAttendanceType(type);
    setShowConfirmation(true);
  };

  const handleConfirmAttendance = async () => {
    if (!currentUser || isRecording) return;

    setIsRecording(true);
    try {
      const result = await recordAttendance(
        currentUser.uid,
        currentUser.email,
        currentUser.displayName || 'Admin User',
        pendingAttendanceType
      );
      
      if (result.success) {
        alert(`${pendingAttendanceType} recorded successfully!`);
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
    }
  };

  const handleCancelAttendance = () => {
    setShowConfirmation(false);
    setPendingAttendanceType(null);
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

  if (!isAdmin) {
    console.log('User is not admin, redirecting to home');
    return <Navigate to="/" replace />;
  }

  return (
    <LayoutContainer>
      <Sidebar>
        <Logo>Hyacinth Admin</Logo>
        <nav>
          <NavLink to="/admin/users">User Management</NavLink>
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
          <NavLink to="/admin/reports">Reports</NavLink>
        </nav>
        {currentUser && (
          <>
            <AttendanceButtons>
              <AttendanceButton
                className="time-in"
                onClick={() => handleAttendance('IN')}
                disabled={isRecording}
              >
                Time In
              </AttendanceButton>
              <AttendanceButton
                className="time-out"
                onClick={() => handleAttendance('OUT')}
                disabled={isRecording}
              >
                Time Out
              </AttendanceButton>
            </AttendanceButtons>
            <UserInfo>
              <div className="name">{currentUser.displayName || 'Admin User'}</div>
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
          name: currentUser?.displayName || 'Admin User',
          email: currentUser?.email
        }}
      />
    </LayoutContainer>
  );
}

export default AdminLayout;
