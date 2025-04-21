import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { loginWithGoogle, selectAuthLoading, selectAuthError, clearError } from '../redux/slices/authSlice';
import { isEmailApproved } from '../utils/userService';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
  overflow: hidden;
`;

const LoginBox = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 450px;
  width: 90%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 2rem;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

const GoogleButton = styled.button`
  background: #4285f4;
  color: white;
  padding: 0.85rem 1.75rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 0 auto;
  transition: all 0.3s ease;
  width: 80%;
  box-shadow: 0 4px 6px rgba(66, 133, 244, 0.3);

  &:hover {
    background: #357ae8;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(66, 133, 244, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const GoogleIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  color: #dc2626;
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  border-radius: 8px;
  background-color: #fee2e2;
  display: ${props => props.visible ? 'block' : 'none'};
  font-size: 0.9rem;
`;

const Footer = styled.p`
  color: #666;
  margin-top: 2rem;
  font-size: 0.85rem;
`;

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Get auth state from Redux
  const loading = useSelector(selectAuthLoading);
  const reduxError = useSelector(selectAuthError);
  
  // Local state for custom errors
  const [localError, setLocalError] = useState('');
  
  // Combine Redux and local errors
  const error = reduxError || localError;
  
  // Clear errors when component unmounts
  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleGoogleSignIn = async () => {
    try {
      setLocalError('');
      dispatch(clearError());
      
      // Check if email is approved before sign-in
      // This is a pre-check to avoid unnecessary sign-ins
      // The actual approval check is handled in the Redux thunk
      dispatch(loginWithGoogle());
    } catch (error) {
      console.error('Error during Google sign in:', error);
      setLocalError(error.message || 'An error occurred during sign in');
    }
  };

  // Helper function to clean up duplicate users
  const cleanupDuplicateUsers = async () => {
    // This functionality is now handled in the Redux thunks and user service
    console.log('Cleanup functionality moved to Redux and user service');
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Logo src="/logo.png" alt="Hyacinth Attendance" />
        <Title>Hyacinth Attendance</Title>
        <Subtitle>Sign in to access the attendance system</Subtitle>
        
        <ErrorMessage visible={!!error}>
          {error}
        </ErrorMessage>
        
        <GoogleButton 
          onClick={handleGoogleSignIn} 
          disabled={loading}
        >
          <GoogleIcon>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
              />
            </svg>
          </GoogleIcon>
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </GoogleButton>
        
        <Footer> {new Date().getFullYear()} Hyacinth Attendance System</Footer>
      </LoginBox>
    </LoginContainer>
  );
}

export default Login;