import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { checkUserAccess, UserType } from './utils/userService';
import { isPCDevice } from './utils/deviceDetection';
import Login from './pages/Login';
import TimeInOut from './pages/TimeInOut';
import AdminLayout from './components/AdminLayout';
import MemberLayout from './components/MemberLayout';
import AdminDashboard from './pages/AdminDashboard';
import UserManagement from './pages/Admin/UserManagement';
import Reports from './pages/Reports';
import MySchedule from './pages/MySchedule';
import MemberDashboard from './pages/Member/MemberDashboard';
import MemberReports from './pages/Member/MemberReports';
import RealTimeAttendance from './pages/Admin/RealTimeAttendance';
import AllSchedules from './pages/Admin/AllSchedules';
import AbsenteeService from './components/AbsenteeService';
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
  const [user, setUser] = useState(null)
  const [userAccess, setUserAccess] = useState({ hasAccess: null, userType: null })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAccess = async (user) => {
      if (user) {
        try {
          console.log('Checking access for user in PrivateRoute:', user.uid);
          const access = await checkUserAccess(user.uid);
          console.log('Access result in PrivateRoute:', access);
          setUserAccess(access);
        } catch (error) {
          console.error('Error checking access in PrivateRoute:', error);
          setUserAccess({ hasAccess: false, userType: null });
        }
      } else {
        setUserAccess({ hasAccess: false, userType: null });
      }
      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      if (user) {
        checkAccess(user);
      } else {
        setUserAccess({ hasAccess: false, userType: null });
        setLoading(false);
      }
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (!user) {
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
    <Router>
      <AbsenteeService />
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
          <Route path="my-schedule" element={<MySchedule />} />
          <Route path="all-schedules" element={<AllSchedules />} />
        </Route>

        {/* Member Routes */}
        <Route 
          path="/member" 
          element={
            <PrivateRoute allowMember={true}>
              <MemberLayout />
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
  );
}

export default App
