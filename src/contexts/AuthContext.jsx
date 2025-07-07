import React, { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [previousEmail, setPreviousEmail] = useState(null);

  // Function to synchronize user email in Firestore
  const syncUserEmailInFirestore = async (user) => {
    if (!user) return;
    
    try {
      // Get the user document from Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      
      // If the user document exists, check for admin-initiated email changes
      if (userDoc.exists()) {
        const userData = userDoc.data();
        
        // Check if this is an admin-initiated email change
        if (userData.emailChangeRequested && userData.newEmailAddress) {
          console.log('Admin-initiated email change detected');
          // Don't override admin changes - the user needs to update their auth email
          return;
        }
        
        // Normal case - sync Auth email to Firestore if different
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // If user just logged in and we have their previous email stored
      if (user && previousEmail && user.email !== previousEmail) {
        syncUserEmailInFirestore(user);
      }
      
      // Store the current email for future comparison
      if (user) {
        setPreviousEmail(user.email);
      }
      
      setCurrentUser(user);
      setLoading(false);
      
      // Always check for email sync when a user logs in
      if (user) {
        syncUserEmailInFirestore(user);
      }
    });

    return () => unsubscribe();
  }, [previousEmail]);

  const value = {
    currentUser,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
