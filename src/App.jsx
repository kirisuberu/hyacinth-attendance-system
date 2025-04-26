import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Attendance from './pages/Attendance';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import RegistrationRequests from './pages/RegistrationRequests';
import UserManagement from './pages/UserManagement';
import AdminHome from './components/dashboard/AdminHome';
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

// Admin route component
const AdminRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  // Note: The actual admin check is done inside the component
  // This is just a basic protected route that will be further checked inside each admin component
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
              
              {/* Legacy route - redirect to home */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Navigate to="/home" replace />
                  </ProtectedRoute>
                } 
              />
              
              {/* New separated pages */}
              <Route 
                path="/home" 
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                } 
              />
              
              <Route 
                path="/schedule" 
                element={
                  <ProtectedRoute>
                    <Schedule />
                  </ProtectedRoute>
                } 
              />
              
              <Route 
                path="/attendance" 
                element={
                  <ProtectedRoute>
                    <Attendance />
                  </ProtectedRoute>
                } 
              />
              
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              
              {/* Admin routes */}
              <Route 
                path="/admin" 
                element={
                  <AdminRoute>
                    <Admin />
                  </AdminRoute>
                }
              >
                {/* Admin home page */}
                <Route index element={<AdminHome />} />
                
                {/* Admin sub-routes */}
                <Route path="registration-requests" element={<RegistrationRequests />} />
                <Route path="user-management" element={<UserManagement />} />
              </Route>
              
              {/* Legacy admin routes - redirect to new structure */}
              <Route 
                path="/registration-requests" 
                element={
                  <AdminRoute>
                    <Navigate to="/admin/registration-requests" replace />
                  </AdminRoute>
                } 
              />
              
              <Route 
                path="/user-management" 
                element={
                  <AdminRoute>
                    <Navigate to="/admin/user-management" replace />
                  </AdminRoute>
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

export default App;
