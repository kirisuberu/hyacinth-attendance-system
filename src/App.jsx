import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Changelog from './pages/Changelog';
import DepartmentManagement from './pages/DepartmentManagement';
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
              {/* Changelog and DepartmentManagement are now accessed through Dashboard tabs */}
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
