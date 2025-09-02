import { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { collection, query, where, doc, onSnapshot } from 'firebase/firestore';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';



/**
 * AuthLayout component that handles authentication and user data fetching
 * for all protected routes. It provides user data to child components via context.
 */
function AuthLayout() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loadingUserData, setLoadingUserData] = useState(true);
  const navigate = useNavigate();
  const { currentUser, loading: authLoading } = useAuth();

  useEffect(() => {
    const isEmulatorMode = import.meta.env.DEV && import.meta.env.VITE_USE_EMULATORS === 'true';
    let cleanup = null;

    if (authLoading) {
      // Wait for auth to resolve
      return;
    }

    if (currentUser) {
      const userObj = {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName || currentUser.email.split('@')[0]
      };
      setUser(userObj);
      cleanup = fetchUserData(currentUser.uid);
    } else {
      // Check for development fallback user
      if (isEmulatorMode) {
        const devUser = localStorage.getItem('dev_user');
        if (devUser) {
          try {
            const parsedUser = JSON.parse(devUser);
            const userObj = {
              uid: parsedUser.uid,
              email: parsedUser.email,
              displayName: parsedUser.displayName || parsedUser.email.split('@')[0]
            };
            setUser(userObj);
            cleanup = fetchUserData(parsedUser.uid);
            console.log('Using development user:', parsedUser.email);
          } catch (error) {
            console.error('Error parsing development user:', error);
            setLoadingUserData(false);
            navigate('/');
          }
        } else {
          setLoadingUserData(false);
          navigate('/');
        }
      } else {
        setLoadingUserData(false);
        navigate('/');
      }
    }

    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, [currentUser, authLoading, navigate]);
  
  // Fetch additional user data from Firestore with real-time updates
  const fetchUserData = (userId) => {
    if (!userId) return () => {};
    
    setLoadingUserData(true);
    
    let declinedUnsubscribe = null;
    let pendingUnsubscribe = null;
    let userUnsubscribe = null;

    // First, check if this user has been declined or blocked
    const declinedQ = query(
      collection(db, 'declined_registrations'),
      where('userId', '==', userId)
    );
    
    // Real-time listener for declined status
    declinedUnsubscribe = onSnapshot(declinedQ, (declinedSnapshot) => {
      if (!declinedSnapshot.empty) {
        // User was declined, sign them out and redirect to login
        toast.error('Your registration request has been declined. Please contact an administrator.');
        auth.signOut().then(() => navigate('/'));
        return;
      }
      
      // Check if this user has a pending registration request
      const pendingQ = query(
        collection(db, 'registration_requests'),
        where('userId', '==', userId)
      );
      
      // Real-time listener for pending status
      if (!pendingUnsubscribe) {
        pendingUnsubscribe = onSnapshot(pendingQ, (pendingSnapshot) => {
          if (!pendingSnapshot.empty) {
            // User has a pending request
            toast.info('Your registration request is pending approval. You will be notified when approved.');
            auth.signOut().then(() => navigate('/'));
            return;
          }
          
          // If we get here, check for the user in the users collection
          const userDocRef = doc(db, 'users', userId);
          
          // Real-time listener for user data
          if (!userUnsubscribe) {
            userUnsubscribe = onSnapshot(userDocRef, (userDocSnap) => {
              setLoadingUserData(false);
              
              if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                setUserData(userData);
              } else {
                console.log('No user data found in Firestore');
                
                // If we get here, the user is authenticated but has no data in Firestore
                toast.error('Your account is not properly set up. Please contact an administrator.');
                auth.signOut().then(() => navigate('/'));
              }
            }, (error) => {
              console.error('Error fetching user data:', error);
              setLoadingUserData(false);
              toast.error('Error loading user data. Please try again later.');
            });
          }
        }, (error) => {
          console.error('Error checking pending status:', error);
          setLoadingUserData(false);
          toast.error('Error checking registration status. Please try again later.');
        });
      }
    }, (error) => {
      console.error('Error checking declined status:', error);
      setLoadingUserData(false);
      toast.error('Error checking registration status. Please try again later.');
    });
    
    return () => {
      if (userUnsubscribe) userUnsubscribe();
      if (pendingUnsubscribe) pendingUnsubscribe();
      if (declinedUnsubscribe) declinedUnsubscribe();
    };
  };

  if (loadingUserData) {
    return <LoadingContainer>Loading user data...</LoadingContainer>;
  }

  // Pass user data to child routes via props
  return <Outlet context={{ user, userData, setUserData, loadingUserData }} />;
}

export default AuthLayout;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;