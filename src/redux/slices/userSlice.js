import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  getAllUsers, 
  getUserById, 
  createOrUpdateUser, 
  updateUserWithDocumentRename,
  refreshUserAccessAfterRename,
  getApprovedEmails,
  addApprovedEmail,
  removeApprovedEmail
} from '../../utils/userService';

// Initial state
const initialState = {
  users: [],
  currentUserData: null,
  approvedEmails: [],
  loading: false,
  error: null,
  success: null
};

// Async thunks
export const fetchAllUsers = createAsyncThunk(
  'user/fetchAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const users = await getAllUsers();
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  'user/fetchUserById',
  async (userId, { rejectWithValue }) => {
    try {
      const user = await getUserById(userId);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createUser = createAsyncThunk(
  'user/createUser',
  async ({ userId, userData }, { rejectWithValue }) => {
    try {
      await createOrUpdateUser(userId, userData);
      return { userId, userData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ userId, userData }, { rejectWithValue }) => {
    try {
      await createOrUpdateUser(userId, userData);
      return { userId, userData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserWithRename = createAsyncThunk(
  'user/updateUserWithRename',
  async ({ userId, userData, authUser }, { rejectWithValue }) => {
    try {
      const result = await updateUserWithDocumentRename(userId, userData);
      
      // If the document ID changed and this is the current user, refresh their access
      if (result.documentIdChanged && authUser && authUser.uid === userId) {
        await refreshUserAccessAfterRename(authUser, result.newDocumentId);
      }
      
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeUser = createAsyncThunk(
  'user/removeUser',
  async (userId, { rejectWithValue }) => {
    try {
      await deleteUser(userId);
      return userId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchApprovedEmails = createAsyncThunk(
  'user/fetchApprovedEmails',
  async (_, { rejectWithValue }) => {
    try {
      const emails = await getApprovedEmails();
      return emails;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addEmail = createAsyncThunk(
  'user/addEmail',
  async (email, { rejectWithValue }) => {
    try {
      await addApprovedEmail(email);
      return email;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeEmail = createAsyncThunk(
  'user/removeEmail',
  async (email, { rejectWithValue }) => {
    try {
      await removeApprovedEmail(email);
      return email;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserError: (state) => {
      state.error = null;
    },
    clearUserSuccess: (state) => {
      state.success = null;
    },
    setCurrentUserData: (state, action) => {
      state.currentUserData = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch all users
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch user by ID
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUserData = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Create user
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.loading = false;
        state.success = 'User created successfully';
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Update user
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.loading = false;
        state.success = 'User updated successfully';
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Update user with rename
      .addCase(updateUserWithRename.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(updateUserWithRename.fulfilled, (state) => {
        state.loading = false;
        state.success = 'User updated successfully';
      })
      .addCase(updateUserWithRename.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Remove user
      .addCase(removeUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter(user => user.id !== action.payload);
        state.success = 'User deleted successfully';
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch approved emails
      .addCase(fetchApprovedEmails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApprovedEmails.fulfilled, (state, action) => {
        state.loading = false;
        state.approvedEmails = action.payload;
      })
      .addCase(fetchApprovedEmails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Add email
      .addCase(addEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(addEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.approvedEmails = [...state.approvedEmails, action.payload];
        state.success = 'Email added successfully';
      })
      .addCase(addEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Remove email
      .addCase(removeEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(removeEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.approvedEmails = state.approvedEmails.filter(email => email !== action.payload);
        state.success = 'Email removed successfully';
      })
      .addCase(removeEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearUserError, clearUserSuccess, setCurrentUserData } = userSlice.actions;

// Selectors
export const selectAllUsers = (state) => state.user.users;
export const selectCurrentUserData = (state) => state.user.currentUserData;
export const selectApprovedEmails = (state) => state.user.approvedEmails;
export const selectUserLoading = (state) => state.user.loading;
export const selectUserError = (state) => state.user.error;
export const selectUserSuccess = (state) => state.user.success;

export default userSlice.reducer;
