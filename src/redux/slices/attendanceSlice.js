import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  recordAttendance,
  getUserAttendanceStatus,
  getAttendanceByDate,
  updateAttendance,
  deleteAttendance,
  getLastAttendanceRecord,
  calculateAttendanceStatus
} from '../../utils/attendanceService';
import { getUserById } from '../../utils/userService';

// Initial state
const initialState = {
  attendanceRecords: {},
  userAttendanceStatus: {
    canTimeIn: false,
    canTimeOut: false,
    latestRecord: null
  },
  lastRecord: null,
  loading: false,
  error: null,
  success: null,
  confirmationData: null
};

// Async thunks
export const recordUserAttendance = createAsyncThunk(
  'attendance/recordUserAttendance',
  async ({ userId, type, notes = '' }, { rejectWithValue }) => {
    try {
      const result = await recordAttendance(userId, type, notes);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserAttendanceStatus = createAsyncThunk(
  'attendance/fetchUserAttendanceStatus',
  async (userId, { rejectWithValue }) => {
    try {
      const status = await getUserAttendanceStatus(userId);
      return status;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAttendanceByDate = createAsyncThunk(
  'attendance/fetchAttendanceByDate',
  async (date, { rejectWithValue }) => {
    try {
      const records = await getAttendanceByDate(date);
      return records;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateAttendanceRecord = createAsyncThunk(
  'attendance/updateAttendanceRecord',
  async ({ recordId, updateData }, { rejectWithValue }) => {
    try {
      await updateAttendance(recordId, updateData);
      return { recordId, updateData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAttendanceRecord = createAsyncThunk(
  'attendance/deleteAttendanceRecord',
  async ({ recordId, deletedBy }, { rejectWithValue }) => {
    try {
      await deleteAttendance(recordId, deletedBy);
      return recordId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchLastAttendanceRecord = createAsyncThunk(
  'attendance/fetchLastAttendanceRecord',
  async (userId, { rejectWithValue }) => {
    try {
      const record = await getLastAttendanceRecord(userId);
      return record;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const calculateStatus = createAsyncThunk(
  'attendance/calculateStatus',
  async ({ scheduleTime, actualTime, type, timeRegion, shiftDate }, { rejectWithValue }) => {
    try {
      const status = await calculateAttendanceStatus(
        scheduleTime, 
        actualTime, 
        type, 
        timeRegion, 
        shiftDate
      );
      return status;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Attendance slice
const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    clearAttendanceError: (state) => {
      state.error = null;
    },
    clearAttendanceSuccess: (state) => {
      state.success = null;
    },
    setConfirmationData: (state, action) => {
      state.confirmationData = action.payload;
    },
    clearConfirmationData: (state) => {
      state.confirmationData = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Record attendance
      .addCase(recordUserAttendance.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(recordUserAttendance.fulfilled, (state, action) => {
        state.loading = false;
        state.success = `Time ${action.payload.type} recorded successfully`;
        // Update the latest record in the user attendance status
        if (state.userAttendanceStatus) {
          state.userAttendanceStatus.latestRecord = action.payload;
          state.userAttendanceStatus.canTimeIn = action.payload.type === 'OUT';
          state.userAttendanceStatus.canTimeOut = action.payload.type === 'IN';
        }
      })
      .addCase(recordUserAttendance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch user attendance status
      .addCase(fetchUserAttendanceStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserAttendanceStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.userAttendanceStatus = action.payload;
      })
      .addCase(fetchUserAttendanceStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch attendance by date
      .addCase(fetchAttendanceByDate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAttendanceByDate.fulfilled, (state, action) => {
        state.loading = false;
        state.attendanceRecords = action.payload;
      })
      .addCase(fetchAttendanceByDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Update attendance record
      .addCase(updateAttendanceRecord.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(updateAttendanceRecord.fulfilled, (state) => {
        state.loading = false;
        state.success = 'Attendance record updated successfully';
      })
      .addCase(updateAttendanceRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Delete attendance record
      .addCase(deleteAttendanceRecord.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(deleteAttendanceRecord.fulfilled, (state) => {
        state.loading = false;
        state.success = 'Attendance record deleted successfully';
      })
      .addCase(deleteAttendanceRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch last attendance record
      .addCase(fetchLastAttendanceRecord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLastAttendanceRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.lastRecord = action.payload;
      })
      .addCase(fetchLastAttendanceRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Calculate attendance status
      .addCase(calculateStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(calculateStatus.fulfilled, (state, action) => {
        state.loading = false;
        // This data will be used for confirmation modals
        state.confirmationData = action.payload;
      })
      .addCase(calculateStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { 
  clearAttendanceError, 
  clearAttendanceSuccess, 
  setConfirmationData, 
  clearConfirmationData 
} = attendanceSlice.actions;

// Selectors
export const selectAttendanceRecords = (state) => state.attendance.attendanceRecords;
export const selectUserAttendanceStatus = (state) => state.attendance.userAttendanceStatus;
export const selectLastRecord = (state) => state.attendance.lastRecord;
export const selectAttendanceLoading = (state) => state.attendance.loading;
export const selectAttendanceError = (state) => state.attendance.error;
export const selectAttendanceSuccess = (state) => state.attendance.success;
export const selectConfirmationData = (state) => state.attendance.confirmationData;

export default attendanceSlice.reducer;
