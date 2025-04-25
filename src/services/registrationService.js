import { 
  collection, 
  addDoc, 
  doc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  setDoc, 
  serverTimestamp, 
  query,
  where,
  orderBy
} from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Submit a new registration request
 * @param {Object} userData - User data including email, name, position, etc.
 * @returns {Promise<string>} - The ID of the created registration request
 */
export const submitRegistrationRequest = async (userData) => {
  try {
    // Add timestamp
    const requestData = {
      ...userData,
      createdAt: serverTimestamp(),
      status: 'pending'
    };
    
    // Add to registration_requests collection
    const docRef = await addDoc(collection(db, 'registration_requests'), requestData);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting registration request:', error);
    throw error;
  }
};

/**
 * Get all registration requests
 * @returns {Promise<Array>} - Array of registration requests
 */
export const getRegistrationRequests = async () => {
  try {
    const q = query(
      collection(db, 'registration_requests'),
      orderBy('createdAt', 'desc')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting registration requests:', error);
    throw error;
  }
};

/**
 * Get a specific registration request by ID
 * @param {string} requestId - The ID of the registration request
 * @returns {Promise<Object|null>} - The registration request data or null if not found
 */
export const getRegistrationRequestById = async (requestId) => {
  try {
    const docRef = doc(db, 'registration_requests', requestId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting registration request:', error);
    throw error;
  }
};

/**
 * Update a registration request
 * @param {string} requestId - The ID of the registration request
 * @param {Object} updateData - The data to update
 * @returns {Promise<void>}
 */
export const updateRegistrationRequest = async (requestId, updateData) => {
  try {
    const docRef = doc(db, 'registration_requests', requestId);
    await updateDoc(docRef, {
      ...updateData,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating registration request:', error);
    throw error;
  }
};

/**
 * Approve a registration request
 * @param {Object} request - The registration request to approve
 * @returns {Promise<void>}
 */
export const approveRegistrationRequest = async (request) => {
  try {
    // Add to users collection
    await setDoc(doc(db, 'users', request.userId), {
      ...request,
      role: request.role || 'user',
      createdAt: serverTimestamp(),
      approved: true,
      approvedAt: serverTimestamp()
    });
    
    // Delete from registration_requests collection
    await deleteDoc(doc(db, 'registration_requests', request.id));
  } catch (error) {
    console.error('Error approving registration request:', error);
    throw error;
  }
};

/**
 * Decline a registration request
 * @param {Object} request - The registration request to decline
 * @returns {Promise<void>}
 */
export const declineRegistrationRequest = async (request) => {
  try {
    // Add to declined_registrations collection
    await setDoc(doc(db, 'declined_registrations', request.id), {
      ...request,
      declinedAt: serverTimestamp()
    });
    
    // Delete from registration_requests collection
    await deleteDoc(doc(db, 'registration_requests', request.id));
  } catch (error) {
    console.error('Error declining registration request:', error);
    throw error;
  }
};

/**
 * Get all declined registration requests
 * @returns {Promise<Array>} - Array of declined registration requests
 */
export const getDeclinedRegistrationRequests = async () => {
  try {
    const q = query(
      collection(db, 'declined_registrations'),
      orderBy('declinedAt', 'desc')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting declined registration requests:', error);
    throw error;
  }
};
