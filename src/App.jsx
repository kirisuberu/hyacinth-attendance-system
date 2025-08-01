import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Changelog from './pages/Changelog';
import DepartmentManagement from './pages/DepartmentManagement';

// Dashboard pages
import DashboardHome from './pages/dashboard/DashboardHome';
import AttendanceLogs from './pages/dashboard/AttendanceLogs';
import Schedule from './pages/dashboard/Schedule';
import Profile from './pages/dashboard/Profile';
import RegistrationRequests from './pages/dashboard/RegistrationRequests';
import UserManagement from './pages/dashboard/UserManagement';
import Reports from './pages/dashboard/Reports';
import AttendanceRequests from './pages/dashboard/AttendanceRequests';
import ScheduleChangeRequests from './pages/dashboard/ScheduleChangeRequests';
import AdminPrivileges from './pages/dashboard/AdminPrivileges';
import Rules from './pages/dashboard/Rules';
import AbsentService from './pages/dashboard/AbsentService';

// Layouts
import AuthLayout from './components/layout/AuthLayout';
import DashboardLayout from './components/layout/DashboardLayout';

import './App.css';

import { AuthProvider } from './contexts/AuthContext';
import { TimeFormatProvider } from './contexts/TimeFormatContext';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;

function App() {
  return (
    <>
      <AuthProvider>
        <TimeFormatProvider>
          <Router>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Protected routes with AuthLayout */}
              <Route element={
                <ProtectedRoute>
                  <AuthLayout />
                </ProtectedRoute>
              }>
                {/* Dashboard routes with DashboardLayout */}
                <Route element={<DashboardLayout />}>
                  <Route path="/dashboard" element={<DashboardHome />} />
                  <Route path="/dashboard/attendance" element={<AttendanceLogs />} />
                  <Route path="/dashboard/schedule" element={<Schedule />} />
                  <Route path="/dashboard/profile" element={<Profile />} />
                  <Route path="/dashboard/registration-requests" element={<RegistrationRequests />} />
                  <Route path="/dashboard/user-management" element={<UserManagement />} />
                  <Route path="/dashboard/reports" element={<Reports />} />
                  <Route path="/dashboard/attendance-requests" element={<AttendanceRequests />} />
                  <Route path="/dashboard/schedule-change-requests" element={<ScheduleChangeRequests />} />
                  <Route path="/dashboard/admin-privileges" element={<AdminPrivileges />} />
                  <Route path="/dashboard/rules" element={<Rules />} />
                  <Route path="/dashboard/absent-service" element={<AbsentService />} />
                  <Route path="/dashboard/departments" element={<DepartmentManagement />} />
                  <Route path="/changelog" element={<Changelog />} />
                </Route>
                
                {/* Other protected routes */}
                
              </Route>
              
              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
          <ToastContainer position="top-right" autoClose={3000} />
        </TimeFormatProvider>
      </AuthProvider>
    </>
  );
}

export default App
