import React, { useState } from 'react';
import { auth, db, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { checkUserAdminStatus, UserType, WeeklySchedule, createOrUpdateUser, isEmailApproved } from '../utils/userService';
import { doc, getDoc } from 'firebase/firestore';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

const LoginBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 90%;
`;

const Title = styled.h1`
  color: #1a1a1a;
  margin-bottom: 2rem;
`;

const GoogleButton = styled.button`
  background: #4285f4;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  transition: background-color 0.2s;

  &:hover {
    background: #357abd;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #dc2626;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #fee2e2;
  display: ${props => props.visible ? 'block' : 'none'};
`;

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError('');

      // Use the pre-configured Google provider
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log('Google sign in successful:', {
        email: user.email,
        uid: user.uid
      });

      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      
      if (!userDoc.exists()) {
        // Check if email is approved before creating new user
        const isApproved = await isEmailApproved(user.email);
        if (!isApproved) {
          setError('Your email is not approved. Please contact an administrator.');
          await auth.signOut();
          setLoading(false);
          return;
        }

        // Create new user document
        console.log('Creating new user document');
        await createOrUpdateUser(user.uid, {
          name: user.displayName || 'User',
          email: user.email,
          userType: UserType.MEMBER, // Default to member
          schedule: WeeklySchedule,
          createdAt: new Date().toISOString()
        });
      }

      // Check if user is admin by looking up their email
      const isAdmin = await checkUserAdminStatus(user);
      
      if (isAdmin) {
        console.log('User is admin, redirecting to admin dashboard');
        navigate('/admin/dashboard');
      } else {
        console.log('User is not admin, redirecting to time-in-out');
        navigate('/time-in-out');
      }
    } catch (error) {
      console.error('Login error:', error);
      console.error('Error details:', {
        code: error.code,
        message: error.message
      });
      
      // Handle specific error cases
      if (error.code === 'auth/popup-closed-by-user') {
        setError('Sign in cancelled. Please try again.');
      } else if (error.code === 'auth/popup-blocked') {
        setError('Popup was blocked by your browser. Please allow popups for this site.');
      } else {
        setError('Failed to sign in. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Welcome to Hyacinth</Title>
        <ErrorMessage visible={!!error}>{error}</ErrorMessage>
        <GoogleButton 
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          <img 
            src="https://www.google.com/favicon.ico" 
            alt="Google" 
            style={{ width: '20px', height: '20px' }} 
          />
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </GoogleButton>
      </LoginBox>
    </LoginContainer>
  );
}

export default Login;