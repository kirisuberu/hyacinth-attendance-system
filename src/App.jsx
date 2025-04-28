import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import SchedulePage from './pages/SchedulePage';
import AttendancePage from './pages/AttendancePage';
import ProfilePage from './pages/ProfilePage';
import RegistrationRequestsPage from './pages/RegistrationRequestsPage';
import UserManagementPage from './pages/UserManagementPage';
import AdminPrivilegesPage from './pages/AdminPrivilegesPage';
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
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/schedule" 
                element={
                  <ProtectedRoute>
                    <SchedulePage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/attendance" 
                element={
                  <ProtectedRoute>
                    <AttendancePage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/registration-requests" 
                element={
                  <ProtectedRoute>
                    <RegistrationRequestsPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/user-management" 
                element={
                  <ProtectedRoute>
                    <UserManagementPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin-privileges" 
                element={
                  <ProtectedRoute>
                    <AdminPrivilegesPage />
                  </ProtectedRoute>
                } 
              />
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
