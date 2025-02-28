import React, { useState } from 'react';
import { auth, db, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { checkUserAccess, UserType, WeeklySchedule, createOrUpdateUser, isEmailApproved } from '../utils/userService';
import { doc, getDoc, collection, query, where, getDocs, setDoc, deleteDoc, addDoc, updateDoc, serverTimestamp } from 'firebase/firestore';

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

      // First check if a user with this email already exists
      const usersRef = collection(db, 'users');
      const emailQuery = query(usersRef, where('email', '==', user.email));
      const emailSnapshot = await getDocs(emailQuery);
      
      if (!emailSnapshot.empty) {
        // If multiple documents exist with this email, clean them up
        if (emailSnapshot.size > 1) {
          console.log(`Found ${emailSnapshot.size} documents with email ${user.email}, cleaning up...`);
          await cleanupDuplicateUsers();
          
          // Re-fetch the user after cleanup
          const cleanupSnapshot = await getDocs(emailQuery);
          if (!cleanupSnapshot.empty) {
            const existingUserDoc = cleanupSnapshot.docs[0];
            const existingData = existingUserDoc.data();

            if (existingUserDoc.id !== user.uid) {
              console.log('Updating user ID:', {
                oldId: existingUserDoc.id,
                newId: user.uid,
                type: existingData.userType
              });

              // Copy existing data to new document with new UID
              await setDoc(doc(db, 'users', user.uid), existingData);
              
              // Delete the old document
              await deleteDoc(doc(db, 'users', existingUserDoc.id));
            }
          }
        } else {
          // Only one document exists, handle normally
          const existingUserDoc = emailSnapshot.docs[0];
          const existingData = existingUserDoc.data();

          if (existingUserDoc.id !== user.uid) {
            console.log('Updating user ID:', {
              oldId: existingUserDoc.id,
              newId: user.uid,
              type: existingData.userType
            });

            // Copy existing data to new document with new UID
            await setDoc(doc(db, 'users', user.uid), existingData);
            
            // Delete the old document
            await deleteDoc(doc(db, 'users', existingUserDoc.id));
          }
        }
      } else {
        // Only create new user if email doesn't exist AND is approved
        const isApproved = await isEmailApproved(user.email);
        if (!isApproved) {
          setError('Your email is not approved. Please contact an administrator.');
          await auth.signOut();
          setLoading(false);
          return;
        }

        console.log('Creating new user document');
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName || 'User',
          email: user.email,
          userType: UserType.MEMBER,
          schedule: WeeklySchedule,
          createdAt: new Date().toISOString(),
        });
      }

      // Check if user has access
      const { hasAccess, userType } = await checkUserAccess(user.uid);
      
      if (!hasAccess) {
        setError('You do not have access to this application. Please contact an administrator.');
        await auth.signOut();
        setLoading(false);
        return;
      }

      console.log('User authenticated successfully with type:', userType);
      
      // Navigate based on user type
      if (userType === UserType.ADMIN || userType === UserType.ACCOUNTANT) {
        console.log('Redirecting to admin dashboard');
        navigate('/admin');
      } else {
        console.log('Redirecting to member dashboard');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error during Google sign in:', error);
      setError('Failed to sign in with Google. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const cleanupDuplicateUsers = async () => {
    // Implementation of cleanup function
    // This would identify and merge duplicate user records
    console.log('Cleaning up duplicate users');
    // Actual implementation would depend on your data structure
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Logo src="/tabIcon.png" alt="Hyacinth Attendance System Logo" />
        <Title>Hyacinth Attendance</Title>
        <Subtitle>Sign in to manage your attendance and schedules</Subtitle>
        
        <ErrorMessage visible={error !== ''}>
          {error}
        </ErrorMessage>
        
        <GoogleButton onClick={handleGoogleSignIn} disabled={loading}>
          <GoogleIcon>
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
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