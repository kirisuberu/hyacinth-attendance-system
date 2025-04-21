import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { checkUserAccess, UserType } from './utils/userService';
import { isPCDevice } from './utils/deviceDetection';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import TimeInOut from './pages/TimeInOut';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import UserManagement from './pages/Admin/UserManagement';
import Reports from './pages/Reports';
import MySchedule from './pages/MySchedule';
import MemberDashboard from './pages/Member/MemberDashboard';
import MemberReports from './pages/Member/MemberReports';
import RealTimeAttendance from './pages/Admin/RealTimeAttendance';
import AttendanceLogs from './pages/Admin/AttendanceLogs';
import AllSchedules from './pages/Admin/AllSchedules';

import Rules from './pages/Admin/Rules';
import SystemConfig from './pages/Admin/SystemConfig';
import AbsenteeService from './components/AbsenteeService';
import PropTypes from 'prop-types';
import './App.css'
import DeniedGIF from './assets/gif/no.gif'
import {
  DeviceRestrictionContainer,
  DeviceRestrictionContent,
  Title,
  Image,
  Message,
  ErrorMessage,
  FunMessage
} from './components/DeviceRestriction.styled';

function PrivateRoute({ children, requiredRole = null, allowMember = false }) {
  const { currentUser, userAccess, loading } = useAuth();

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (!currentUser) {
    return <Navigate to="/" />
  }

  // For routes that allow members (like time-in-out)
  if (allowMember) {
    return children;
  }

  // For admin/accountant routes
  if (!userAccess.hasAccess) {
    return <Navigate to="/member/dashboard" />
  }

  // If a specific role is required, check for it
  if (requiredRole && userAccess.userType !== requiredRole) {
    // If admin route but user is not admin, redirect to appropriate dashboard
    if (requiredRole === UserType.ADMIN && userAccess.userType === UserType.ACCOUNTANT) {
      return <Navigate to="/admin/dashboard" />
    } else {
      return <Navigate to="/member/dashboard" />
    }
  }

  return children
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  requiredRole: PropTypes.string,
  allowMember: PropTypes.bool
};

function App() {
  const [isPC, setIsPC] = useState(true);

  useEffect(() => {
    // Check if the device is a PC
    setIsPC(isPCDevice());

    // Add resize event listener to handle orientation changes or window resizing
    const handleResize = () => {
      setIsPC(isPCDevice());
    };

    window.addEventListener('resize', handleResize);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // If not a PC device, show a message instead of the application
  if (!isPC) {
    return (
      <DeviceRestrictionContainer>
        <DeviceRestrictionContent>
          <Title>PC Access Only!</Title>
          <Image src={DeniedGIF} alt="Denied GIF" />
          <Message>This application is only accessible on PC devices.</Message>
          <Message>Please open this application on a desktop computer in the office.</Message>
          <ErrorMessage>If you believe this is an error, contact the system administrator.</ErrorMessage>
          <FunMessage>PUNTA KA SA OFFICE, BILIIIIISSSS!!! HAHAHAHAHA    </FunMessage>
          <FunMessage style={{ textAlign: 'right', scale: 0.8 }}>Message from: Cristobal ^_^    </FunMessage>
        </DeviceRestrictionContent>
      </DeviceRestrictionContainer>
    );
  }

  return (
    <AuthProvider>
      <Router>
        {/* <AbsenteeService /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/time-in-out"
            element={
              <PrivateRoute allowMember={true}>
                <TimeInOut />
              </PrivateRoute>
            }
          />
          
          {/* Admin/Accountant Routes */}
          <Route path="/admin" element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route 
              path="users" 
              element={
                <PrivateRoute requiredRole={UserType.ADMIN}>
                  <UserManagement />
                </PrivateRoute>
              } 
            />
            <Route path="reports" element={<Reports />} />
            <Route path="realtime-attendance" element={<RealTimeAttendance />} />
            <Route path="attendance-logs" element={<AttendanceLogs />} />
            <Route path="my-schedule" element={<MySchedule />} />
            <Route path="all-schedules" element={<AllSchedules />} />
            <Route path="user-calendar" element={<UserCalendar />} />
            <Route 
              path="rules" 
              element={
                <PrivateRoute requiredRole={UserType.ADMIN}>
                  <Rules />
                </PrivateRoute>
              } 
            />
            <Route path="my-dashboard" element={<MemberDashboard />} />
            <Route 
              path="system-config" 
              element={
                <PrivateRoute requiredRole={UserType.ADMIN}>
                  <SystemConfig />
                </PrivateRoute>
              } 
            />
          </Route>

          {/* Member Routes - Now using AdminLayout instead of MemberLayout */}
          <Route 
            path="/member" 
            element={
              <PrivateRoute allowMember={true}>
                <AdminLayout isMemberView={true} />
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate to="/member/dashboard" replace />} />
            <Route path="dashboard" element={<MemberDashboard />} />
            <Route path="reports" element={<MemberReports />} />
            <Route path="my-schedule" element={<MySchedule />} />
            <Route path="all-schedules" element={<AllSchedules />} />
            <Route path="realtime-attendance" element={<RealTimeAttendance />} />
          </Route>

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App
