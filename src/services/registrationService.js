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
import { deleteUser, getAuth } from 'firebase/auth';
import { db } from '../firebase';
import { toast } from 'react-toastify';

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
    // Create user document in users collection
    const userDocRef = doc(db, 'users', request.userId);
    await setDoc(userDocRef, {
      userId: request.userId,
      name: request.name,
      email: request.email,
      position: request.position,
      role: request.role || 'user',
      status: 'active',
      timeRegion: request.timeRegion || Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Manila',
      createdAt: serverTimestamp(),
      userID: request.userID || `uid_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`
    });
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
    // Add to declined_registrations collection with additional metadata
    await setDoc(doc(db, 'declined_registrations', request.id), {
      ...request,
      declinedAt: serverTimestamp(),
      status: 'declined',
      // Add a flag to indicate this user should be blocked from accessing the system
      blocked: true
    });
    
    // Delete from registration_requests collection
    await deleteDoc(doc(db, 'registration_requests', request.id));
    
    // If this is a real user ID (not a temporary one), we can't delete them from Auth
    // without Admin SDK, but we can mark them as declined in Firestore
    if (request.userId && !request.userId.startsWith('temp_')) {
      try {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        
        // We can only delete the current user if they're logged in
        if (currentUser && currentUser.uid === request.userId) {
          await deleteUser(currentUser);
          console.log('Deleted declined user from Firebase Authentication');
        } else {
          // Since we can't delete the user from Authentication without Admin SDK,
          // we'll rely on the blocked flag in declined_registrations to prevent access
          console.log('User marked as declined in Firestore. They will be blocked from accessing the system.');
        }
      } catch (authError) {
        console.error('Error handling user authentication:', authError);
        // Don't throw this error, as we still want to decline the registration
      }
    }
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
