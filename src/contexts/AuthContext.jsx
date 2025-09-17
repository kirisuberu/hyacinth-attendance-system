import React, { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged, signOut, getIdTokenResult } from 'firebase/auth';
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
        }
      }
    } catch (error) {
      console.error('Error synchronizing user email in Firestore:', error);
    }
  };

  // Retrieve normalized user status from Firestore
  const checkUserStatus = async (user) => {
    if (!user) return null;
    try {
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      console.log('Auth check - User doc exists:', userDoc.exists());
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const raw = userData.status || 'active';
        const status = String(raw).toLowerCase();
        console.log('Auth check - User data:', userData);
        console.log('Auth check - User status:', status);
        return status;
      }
      console.log('Auth check - No user document, defaulting to active');
      return 'active';
    } catch (error) {
      console.error('Error checking user status:', error);
      return 'active';
    }
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      
      // Check user status in Firestore when they log in
      if (user) {
        // Always sync email first before checking status
        await syncUserEmailInFirestore(user);
        try {
          // Force refresh to ensure we have the latest custom claims
          const tokenResult = await getIdTokenResult(user, true);
          console.log('Auth token claims:', tokenResult.claims);
        } catch (claimErr) {
          console.warn('Unable to read auth token claims:', claimErr);
        }
        
        const status = await checkUserStatus(user);
        setUserStatus(status);
        
        // Store the current email for future comparison
        setPreviousEmail(user.email);
        
        // Only proceed if user is active; otherwise, sign out with tailored message
        if (status === 'active') {
          setCurrentUser(user);
        } else {
          let msg = 'Your account is not allowed to sign in.';
          if (status === 'suspended') msg = 'Your account has been suspended. Please contact an administrator.';
          if (status === 'resigned') msg = 'Your employment has ended (resigned). You can no longer sign in.';
          if (status === 'terminated') msg = 'Your employment has ended (terminated). You can no longer sign in.';
          console.log('Blocking session due to user status:', status);
          toast.error(msg);
          await signOut(auth);
          setCurrentUser(null);
        }
      } else {
        setUserStatus(null);
        setCurrentUser(null);
        setPreviousEmail(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Add a second useEffect to handle blocked users after the status is set
  useEffect(() => {
    const handleInactiveUser = async () => {
      if (auth.currentUser) {
        const blocked = ['suspended', 'resigned', 'terminated'];
        if (blocked.includes(String(userStatus).toLowerCase())) {
          console.log('Detected blocked user status, enforcing sign out:', userStatus);
          await signOut(auth);
          setCurrentUser(null);
          let msg = 'Your account is not allowed to sign in.';
          if (userStatus === 'suspended') msg = 'Your account has been suspended. Please contact an administrator.';
          if (userStatus === 'resigned') msg = 'Your employment has ended (resigned). You can no longer sign in.';
          if (userStatus === 'terminated') msg = 'Your employment has ended (terminated). You can no longer sign in.';
          toast.error(msg);
        }
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
