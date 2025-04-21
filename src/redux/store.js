import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import attendanceReducer from './slices/attendanceSlice';
import scheduleReducer from './slices/scheduleSlice';
import systemConfigReducer from './slices/systemConfigSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    attendance: attendanceReducer,
    schedule: scheduleReducer,
    systemConfig: systemConfigReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['auth/setUser'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.timestamp', 'payload.user', 'meta.arg.user'],
        // Ignore these paths in the state
        ignoredPaths: ['auth.currentUser'],
      },
    }),
});

export default store;
