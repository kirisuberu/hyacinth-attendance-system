import React, { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [previousEmail, setPreviousEmail] = useState(null);
  const [userStatus, setUserStatus] = useState(null);

  // Function to synchronize user email in Firestore
  const syncUserEmailInFirestore = async (user) => {
    if (!user) return;
    
    try {
      // Get the user document from Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      
      // If the user document exists and the email is different, update it
      if (userDoc.exists()) {
        const userData = userDoc.data();
        
        if (userData.email !== user.email) {
          await updateDoc(userDocRef, {
            email: user.email
          });
          console.log('User email synchronized in Firestore');
          toast.info('Your email has been updated in the system');
        }
      }
    } catch (error) {
      console.error('Error synchronizing user email in Firestore:', error);
    }
  };

  // Check if user is active or inactive in Firestore
  const checkUserStatus = async (user) => {
    if (!user) return null;
    
    try {
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      
      console.log('Auth check - User doc exists:', userDoc.exists());
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log('Auth check - User data:', userData);
        console.log('Auth check - User status:', userData.status || 'not set (defaulting to active)');
        
        // Only return 'inactive' if explicitly set, otherwise default to 'active'
        return userData.status === 'inactive' ? 'inactive' : 'active';
      }
      console.log('Auth check - No user document, defaulting to active');
      return 'active'; // Default to active if no document
    } catch (error) {
      console.error('Error checking user status:', error);
      return 'active'; // Default to allowing access on error
    }
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      
      // If user just logged in and we have their previous email stored
      if (user && previousEmail && user.email !== previousEmail) {
        syncUserEmailInFirestore(user);
      }
      
      // Store the current email for future comparison
      if (user) {
        setPreviousEmail(user.email);
      }
      
      // Check user status in Firestore when they log in
      if (user) {
        const status = await checkUserStatus(user);
        setUserStatus(status);
        
        // Only proceed if user is active
        if (status === 'active') {
          syncUserEmailInFirestore(user);
          setCurrentUser(user);
        } else {
          console.log('User account is inactive, signing out');
          toast.error('Your account has been deactivated. Please contact an administrator.');
          await signOut(auth);
          setCurrentUser(null);
        }
      } else {
        setUserStatus(null);
        setCurrentUser(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, [previousEmail]);

  // Add a second useEffect to handle inactive users after the status is set
  useEffect(() => {
    const handleInactiveUser = async () => {
      if (userStatus === 'inactive' && auth.currentUser) {
        console.log('Detected inactive user status, enforcing sign out');
        await signOut(auth);
        setCurrentUser(null);
        toast.error('Your account has been deactivated. Please contact an administrator.');
      }
    };
    
    handleInactiveUser();
  }, [userStatus]);

  const value = {
    currentUser,
    loading,
    userStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
