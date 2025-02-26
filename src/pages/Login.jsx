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
          updatedAt: new Date().toISOString()
        });
      }

      // Get the latest user data
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const userData = userDoc.data();
      
      // Navigate based on user type
      if (userData.userType === UserType.ADMIN || userData.userType === UserType.ACCOUNTANT) {
        console.log(`User is ${userData.userType}, redirecting to admin dashboard`);
        navigate('/admin/dashboard');
      } else {
        console.log('User is a regular member, redirecting to member dashboard');
        navigate('/member/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const cleanupDuplicateUsers = async () => {
    const usersRef = collection(db, 'users');
    const emailQuery = query(usersRef, where('email', '==', user.email));
    const emailSnapshot = await getDocs(emailQuery);

    if (emailSnapshot.size > 1) {
      const docsToDelete = emailSnapshot.docs.slice(1);
      await Promise.all(docsToDelete.map(doc => deleteDoc(doc.ref)));
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Welcome to HyAttendance</Title>
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