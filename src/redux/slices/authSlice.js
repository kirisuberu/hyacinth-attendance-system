import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, googleProvider } from '../../firebase';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth';
import { checkUserAccess, UserType } from '../../utils/userService';

// Initial state
const initialState = {
  currentUser: null,
  userAccess: { hasAccess: null, userType: null },
  loading: true,
  error: null,
  isAdmin: false,
  isAccountant: false,
  isMember: false
};

// Async thunks
export const loginWithEmail = createAsyncThunk(
  'auth/loginWithEmail',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { hasAccess, userType } = await checkUserAccess(userCredential.user.uid);
      
      return {
        user: userCredential.user,
        userAccess: { hasAccess, userType }
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const { hasAccess, userType } = await checkUserAccess(userCredential.user.uid);
      
      return {
        user: userCredential.user,
        userAccess: { hasAccess, userType }
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      localStorage.removeItem('authUser');
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const checkUserAuth = createAsyncThunk(
  'auth/checkUserAuth',
  async (_, { dispatch }) => {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          try {
            const { hasAccess, userType } = await checkUserAccess(user.uid);
            
            // Store the auth user in localStorage for reference
            localStorage.setItem('authUser', JSON.stringify({
              uid: user.uid,
              email: user.email,
              emailVerified: user.emailVerified
            }));
            
            resolve({
              user,
              userAccess: { hasAccess, userType }
            });
          } catch (error) {
            console.error('Error checking access:', error);
            resolve({
              user,
              userAccess: { hasAccess: false, userType: null }
            });
          }
        } else {
          localStorage.removeItem('authUser');
          resolve(null);
        }
      });
      
      // Clean up subscription on unmount
      return () => unsubscribe();
    });
  }
);

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      if (action.payload) {
        state.currentUser = action.payload.user;
        state.userAccess = action.payload.userAccess;
        state.isAdmin = action.payload.userAccess.userType === UserType.ADMIN;
        state.isAccountant = action.payload.userAccess.userType === UserType.ACCOUNTANT;
        state.isMember = action.payload.userAccess.userType === UserType.MEMBER;
      } else {
        state.currentUser = null;
        state.userAccess = { hasAccess: false, userType: null };
        state.isAdmin = false;
        state.isAccountant = false;
        state.isMember = false;
      }
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Login with email
      .addCase(loginWithEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload.user;
        state.userAccess = action.payload.userAccess;
        state.isAdmin = action.payload.userAccess.userType === UserType.ADMIN;
        state.isAccountant = action.payload.userAccess.userType === UserType.ACCOUNTANT;
        state.isMember = action.payload.userAccess.userType === UserType.MEMBER;
      })
      .addCase(loginWithEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Login with Google
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload.user;
        state.userAccess = action.payload.userAccess;
        state.isAdmin = action.payload.userAccess.userType === UserType.ADMIN;
        state.isAccountant = action.payload.userAccess.userType === UserType.ACCOUNTANT;
        state.isMember = action.payload.userAccess.userType === UserType.MEMBER;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Logout
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.currentUser = null;
        state.userAccess = { hasAccess: false, userType: null };
        state.isAdmin = false;
        state.isAccountant = false;
        state.isMember = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Check user auth
      .addCase(checkUserAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkUserAuth.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.currentUser = action.payload.user;
          state.userAccess = action.payload.userAccess;
          state.isAdmin = action.payload.userAccess.userType === UserType.ADMIN;
          state.isAccountant = action.payload.userAccess.userType === UserType.ACCOUNTANT;
          state.isMember = action.payload.userAccess.userType === UserType.MEMBER;
        } else {
          state.currentUser = null;
          state.userAccess = { hasAccess: false, userType: null };
          state.isAdmin = false;
          state.isAccountant = false;
          state.isMember = false;
        }
      })
      .addCase(checkUserAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.currentUser = null;
        state.userAccess = { hasAccess: false, userType: null };
        state.isAdmin = false;
        state.isAccountant = false;
        state.isMember = false;
      });
  }
});

export const { setUser, clearError } = authSlice.actions;

// Selectors
export const selectCurrentUser = (state) => state.auth.currentUser;
export const selectUserAccess = (state) => state.auth.userAccess;
export const selectIsAdmin = (state) => state.auth.isAdmin;
export const selectIsAccountant = (state) => state.auth.isAccountant;
export const selectIsMember = (state) => state.auth.isMember;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;
