import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { checkUserAccess, UserType } from '../utils/userService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userAccess, setUserAccess] = useState({ hasAccess: null, userType: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAccess = async (user) => {
      try {
        if (!user) {
          console.log('No user found in checkAccess');
          setUserAccess({ hasAccess: false, userType: null });
          setLoading(false);
          return;
        }

        console.log('Checking access for user:', {
          email: user.email,
          uid: user.uid,
          emailVerified: user.emailVerified
        });

        const { hasAccess, userType } = await checkUserAccess(user.uid);
        console.log('Access check result:', { hasAccess, userType });
        
        setUserAccess({ hasAccess, userType });
      } catch (error) {
        console.error('Error checking access:', error);
        console.error('Error details:', {
          code: error.code,
          message: error.message
        });
        setUserAccess({ hasAccess: false, userType: null });
      }
      setLoading(false);
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('Auth state changed - Current user:', {
          email: user.email,
          uid: user.uid
        });
        setCurrentUser(user);
        checkAccess(user);
      } else {
        console.log('Auth state changed - No user logged in');
        setCurrentUser(null);
        setUserAccess({ hasAccess: false, userType: null });
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Check if the user is an admin
  const isAdmin = userAccess.userType === UserType.ADMIN;
  
  // Check if the user is an accountant
  const isAccountant = userAccess.userType === UserType.ACCOUNTANT;
  
  // Check if the user is a member
  const isMember = userAccess.userType === UserType.MEMBER;

  const value = {
    currentUser,
    userAccess,
    loading,
    isAdmin,
    isAccountant,
    isMember
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
