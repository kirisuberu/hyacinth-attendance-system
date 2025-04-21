import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  getSystemConfig, 
  updateSystemConfig, 
  getConfigSection 
} from '../../utils/systemConfigService';

// Initial state
const initialState = {
  config: null,
  timeRegions: {},
  attendanceRules: {},
  loading: false,
  error: null,
  success: null
};

// Async thunks
export const fetchSystemConfig = createAsyncThunk(
  'systemConfig/fetchSystemConfig',
  async (_, { rejectWithValue }) => {
    try {
      const config = await getSystemConfig();
      return config;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateConfig = createAsyncThunk(
  'systemConfig/updateConfig',
  async (configData, { rejectWithValue }) => {
    try {
      await updateSystemConfig(configData);
      return configData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTimeRegions = createAsyncThunk(
  'systemConfig/fetchTimeRegions',
  async (_, { rejectWithValue }) => {
    try {
      const timeRegions = await getConfigSection('timeRegions');
      return timeRegions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAttendanceRules = createAsyncThunk(
  'systemConfig/fetchAttendanceRules',
  async (_, { rejectWithValue }) => {
    try {
      const attendanceRules = await getConfigSection('attendanceRules');
      return attendanceRules;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// System config slice
const systemConfigSlice = createSlice({
  name: 'systemConfig',
  initialState,
  reducers: {
    clearConfigError: (state) => {
      state.error = null;
    },
    clearConfigSuccess: (state) => {
      state.success = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch system config
      .addCase(fetchSystemConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSystemConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.config = action.payload;
        
        // Extract specific sections if they exist
        if (action.payload?.timeRegions) {
          state.timeRegions = action.payload.timeRegions;
        }
        
        if (action.payload?.attendanceRules) {
          state.attendanceRules = action.payload.attendanceRules;
        }
      })
      .addCase(fetchSystemConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Update config
      .addCase(updateConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(updateConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.config = action.payload;
        state.success = 'System configuration updated successfully';
        
        // Update specific sections if they exist in the payload
        if (action.payload?.timeRegions) {
          state.timeRegions = action.payload.timeRegions;
        }
        
        if (action.payload?.attendanceRules) {
          state.attendanceRules = action.payload.attendanceRules;
        }
      })
      .addCase(updateConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch time regions
      .addCase(fetchTimeRegions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTimeRegions.fulfilled, (state, action) => {
        state.loading = false;
        state.timeRegions = action.payload;
      })
      .addCase(fetchTimeRegions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch attendance rules
      .addCase(fetchAttendanceRules.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAttendanceRules.fulfilled, (state, action) => {
        state.loading = false;
        state.attendanceRules = action.payload;
      })
      .addCase(fetchAttendanceRules.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearConfigError, clearConfigSuccess } = systemConfigSlice.actions;

// Selectors
export const selectSystemConfig = (state) => state.systemConfig.config;
export const selectTimeRegions = (state) => state.systemConfig.timeRegions;
export const selectAttendanceRules = (state) => state.systemConfig.attendanceRules;
export const selectConfigLoading = (state) => state.systemConfig.loading;
export const selectConfigError = (state) => state.systemConfig.error;
export const selectConfigSuccess = (state) => state.systemConfig.success;

export default systemConfigSlice.reducer;
