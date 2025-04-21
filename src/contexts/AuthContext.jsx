import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  checkUserAuth, 
  selectCurrentUser, 
  selectUserAccess, 
  selectIsAdmin, 
  selectIsAccountant, 
  selectIsMember, 
  selectAuthLoading 
} from '../redux/slices/authSlice';
import { UserType } from '../utils/userService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const dispatch = useDispatch();
  
  // Get auth state from Redux store
  const currentUser = useSelector(selectCurrentUser);
  const userAccess = useSelector(selectUserAccess);
  const loading = useSelector(selectAuthLoading);
  const isAdmin = useSelector(selectIsAdmin);
  const isAccountant = useSelector(selectIsAccountant);
  const isMember = useSelector(selectIsMember);

  useEffect(() => {
    // Check user authentication status on component mount
    dispatch(checkUserAuth());
  }, [dispatch]);

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
