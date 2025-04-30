import { db } from '../firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  doc, 
  updateDoc, 
  deleteDoc, 
  orderBy,
  Timestamp,
  getDoc
} from 'firebase/firestore';

// Request types
export const REQUEST_TYPES = {
  ABSENCE_PETITION: 'absence_petition',
  OVERTIME_REQUEST: 'overtime_request'
};

// Request statuses
export const REQUEST_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected'
};

/**
 * Create a new absence petition
 * @param {string} userId - The user ID
 * @param {string} attendanceId - The ID of the absence record
 * @param {string} remarks - The reason for the petition
 * @returns {Promise<string>} - The ID of the created request
 */
export const createAbsencePetition = async (userId, attendanceId, remarks) => {
  try {
    // Get user details
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      throw new Error('User not found');
    }
    const userData = userDoc.data();
    
    // Get attendance record details
    const attendanceDoc = await getDoc(doc(db, 'attendance', attendanceId));
    if (!attendanceDoc.exists()) {
      throw new Error('Attendance record not found');
    }
    const attendanceData = attendanceDoc.data();
    
    // Create the request
    const requestData = {
      userId,
      userName: `${userData.firstName || ''} ${userData.lastName || ''}`.trim() || userData.email,
      userEmail: userData.email,
      type: REQUEST_TYPES.ABSENCE_PETITION,
      status: REQUEST_STATUS.PENDING,
      attendanceId,
      attendanceDate: attendanceData.timestamp,
      remarks,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      adminRemarks: ''
    };
    
    const docRef = await addDoc(collection(db, 'requests'), requestData);
    return docRef.id;
  } catch (error) {
    console.error('Error creating absence petition:', error);
    throw error;
  }
};

/**
 * Create a new overtime request
 * @param {string} userId - The user ID
 * @param {Date} date - The date of the overtime
 * @param {number} hours - The number of hours requested
 * @param {string} remarks - The reason for the overtime
 * @returns {Promise<string>} - The ID of the created request
 */
export const createOvertimeRequest = async (userId, date, hours, remarks) => {
  try {
    // Get user details
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      throw new Error('User not found');
    }
    const userData = userDoc.data();
    
    // Create the request
    const requestData = {
      userId,
      userName: `${userData.firstName || ''} ${userData.lastName || ''}`.trim() || userData.email,
      userEmail: userData.email,
      type: REQUEST_TYPES.OVERTIME_REQUEST,
      status: REQUEST_STATUS.PENDING,
      date: Timestamp.fromDate(new Date(date)),
      hours,
      remarks,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      adminRemarks: ''
    };
    
    const docRef = await addDoc(collection(db, 'requests'), requestData);
    return docRef.id;
  } catch (error) {
    console.error('Error creating overtime request:', error);
    throw error;
  }
};

/**
 * Get all requests for a specific user
 * @param {string} userId - The user ID
 * @returns {Promise<Array>} - Array of requests
 */
export const getUserRequests = async (userId) => {
  try {
    const q = query(
      collection(db, 'requests'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting user requests:', error);
    throw error;
  }
};

/**
 * Get all requests (admin function)
 * @param {string} type - Optional request type filter
 * @param {string} status - Optional status filter
 * @returns {Promise<Array>} - Array of requests
 */
export const getAllRequests = async (type = null, status = null) => {
  try {
    let q = collection(db, 'requests');
    const filters = [];
    
    if (type) {
      filters.push(where('type', '==', type));
    }
    
    if (status) {
      filters.push(where('status', '==', status));
    }
    
    if (filters.length > 0) {
      q = query(q, ...filters, orderBy('createdAt', 'desc'));
    } else {
      q = query(q, orderBy('createdAt', 'desc'));
    }
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting all requests:', error);
    throw error;
  }
};

/**
 * Update the status of a request (admin function)
 * @param {string} requestId - The request ID
 * @param {string} status - The new status
 * @param {string} adminRemarks - Admin remarks for the decision
 * @returns {Promise<void>}
 */
export const updateRequestStatus = async (requestId, status, adminRemarks = '') => {
  try {
    const requestRef = doc(db, 'requests', requestId);
    
    // Get the request data
    const requestDoc = await getDoc(requestRef);
    if (!requestDoc.exists()) {
      throw new Error('Request not found');
    }
    
    const requestData = requestDoc.data();
    
    // Update the request status
    await updateDoc(requestRef, {
      status,
      adminRemarks,
      updatedAt: Timestamp.now()
    });
    
    // If approving an absence petition, remove the absence record
    if (status === REQUEST_STATUS.APPROVED && requestData.type === REQUEST_TYPES.ABSENCE_PETITION) {
      await deleteDoc(doc(db, 'attendance', requestData.attendanceId));
    }
    
    // Additional logic for approved overtime requests could be added here
    
  } catch (error) {
    console.error('Error updating request status:', error);
    throw error;
  }
};

/**
 * Delete a request (only allowed if status is pending)
 * @param {string} requestId - The request ID
 * @returns {Promise<void>}
 */
export const deleteRequest = async (requestId) => {
  try {
    const requestRef = doc(db, 'requests', requestId);
    
    // Check if request is pending
    const requestDoc = await getDoc(requestRef);
    if (!requestDoc.exists()) {
      throw new Error('Request not found');
    }
    
    const requestData = requestDoc.data();
    if (requestData.status !== REQUEST_STATUS.PENDING) {
      throw new Error('Only pending requests can be deleted');
    }
    
    // Delete the request
    await deleteDoc(requestRef);
  } catch (error) {
    console.error('Error deleting request:', error);
    throw error;
  }
};
