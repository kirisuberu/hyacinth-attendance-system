import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  getScheduleTemplates,
  createScheduleTemplate,
  updateScheduleTemplate,
  deleteScheduleTemplate
} from '../../utils/userService';
import { getScheduledUsersByDate } from '../../utils/attendanceService';

// Initial state
const initialState = {
  userSchedule: null,
  scheduleTemplates: [],
  scheduledUsers: {},
  loading: false,
  error: null,
  success: null
};

// Async thunks
export const updateSchedule = createAsyncThunk(
  'schedule/updateSchedule',
  async ({ userId, schedule }, { rejectWithValue }) => {
    try {
      await updateUserSchedule(userId, schedule);
      return { userId, schedule };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchScheduleTemplates = createAsyncThunk(
  'schedule/fetchScheduleTemplates',
  async (_, { rejectWithValue }) => {
    try {
      const templates = await getScheduleTemplates();
      return templates;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createTemplate = createAsyncThunk(
  'schedule/createTemplate',
  async (templateData, { rejectWithValue }) => {
    try {
      const result = await createScheduleTemplate(templateData);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTemplate = createAsyncThunk(
  'schedule/updateTemplate',
  async ({ templateId, templateData }, { rejectWithValue }) => {
    try {
      const result = await updateScheduleTemplate(templateId, templateData);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeTemplate = createAsyncThunk(
  'schedule/removeTemplate',
  async (templateId, { rejectWithValue }) => {
    try {
      await deleteScheduleTemplate(templateId);
      return templateId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchScheduledUsers = createAsyncThunk(
  'schedule/fetchScheduledUsers',
  async (date, { rejectWithValue }) => {
    try {
      const users = await getScheduledUsersByDate(date);
      return { date, users };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Schedule slice
const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    clearScheduleError: (state) => {
      state.error = null;
    },
    clearScheduleSuccess: (state) => {
      state.success = null;
    },
    setUserSchedule: (state, action) => {
      state.userSchedule = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Update schedule
      .addCase(updateSchedule.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(updateSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.userSchedule = action.payload.schedule;
        state.success = 'Schedule updated successfully';
      })
      .addCase(updateSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch schedule templates
      .addCase(fetchScheduleTemplates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchScheduleTemplates.fulfilled, (state, action) => {
        state.loading = false;
        state.scheduleTemplates = action.payload;
      })
      .addCase(fetchScheduleTemplates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Create template
      .addCase(createTemplate.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(createTemplate.fulfilled, (state, action) => {
        state.loading = false;
        state.scheduleTemplates = [...state.scheduleTemplates, action.payload];
        state.success = 'Template created successfully';
      })
      .addCase(createTemplate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Update template
      .addCase(updateTemplate.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(updateTemplate.fulfilled, (state, action) => {
        state.loading = false;
        state.scheduleTemplates = state.scheduleTemplates.map(template => 
          template.id === action.payload.id ? action.payload : template
        );
        state.success = 'Template updated successfully';
      })
      .addCase(updateTemplate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Remove template
      .addCase(removeTemplate.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(removeTemplate.fulfilled, (state, action) => {
        state.loading = false;
        state.scheduleTemplates = state.scheduleTemplates.filter(
          template => template.id !== action.payload
        );
        state.success = 'Template deleted successfully';
      })
      .addCase(removeTemplate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch scheduled users
      .addCase(fetchScheduledUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchScheduledUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.scheduledUsers = {
          ...state.scheduledUsers,
          [action.payload.date]: action.payload.users
        };
      })
      .addCase(fetchScheduledUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { 
  clearScheduleError, 
  clearScheduleSuccess, 
  setUserSchedule 
} = scheduleSlice.actions;

// Selectors
export const selectUserSchedule = (state) => state.schedule.userSchedule;
export const selectScheduleTemplates = (state) => state.schedule.scheduleTemplates;
export const selectScheduledUsers = (state, date) => state.schedule.scheduledUsers[date] || {};
export const selectScheduleLoading = (state) => state.schedule.loading;
export const selectScheduleError = (state) => state.schedule.error;
export const selectScheduleSuccess = (state) => state.schedule.success;

export default scheduleSlice.reducer;
