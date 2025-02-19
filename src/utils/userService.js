import { db } from '../firebase';
import { doc, setDoc, getDoc, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';

// User types enum
export const UserType = {
  ADMIN: 'admin',
  ACCOUNTANT: 'accountant',
  MEMBER: 'member'
};

// Schedule type definition
export const WeeklySchedule = {
  sunday: { timeIn: '', timeOut: '' },
  monday: { timeIn: '', timeOut: '' },
  tuesday: { timeIn: '', timeOut: '' },
  wednesday: { timeIn: '', timeOut: '' },
  thursday: { timeIn: '', timeOut: '' },
  friday: { timeIn: '', timeOut: '' },
  saturday: { timeIn: '', timeOut: '' }
};

// Check if user is admin by looking up their email in Firestore
export const checkUserAdminStatus = async (user) => {
  try {
    if (!user?.email) {
      console.log('No user email provided');
      return false;
    }

    console.log('Checking admin status for email:', user.email);

    // Query users collection by email
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', user.email));
    const querySnapshot = await getDocs(q);

    // Check if any user document has this email and is admin
    for (const doc of querySnapshot.docs) {
      const userData = doc.data();
      if (userData.userType === UserType.ADMIN) {
        console.log('Found admin user:', userData);
        return true;
      }
    }

    console.log('User is not admin');
    return false;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};

// Create or update user in Firestore
export const createOrUpdateUser = async (userId, userData) => {
  try {
    console.log('Creating/updating user:', {
      userId,
      ...userData
    });

    // If no userId is provided, generate a new one using timestamp and random string
    const actualUserId = userId || `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const userRef = doc(db, 'users', actualUserId);

    await setDoc(userRef, {
      name: userData.name,
      email: userData.email,
      userType: userData.userType,
      schedule: userData.schedule || WeeklySchedule,
      createdAt: userData.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    
    console.log('User created/updated successfully');
    return actualUserId;
  } catch (error) {
    console.error('Error creating/updating user:', error);
    throw error;
  }
};

// Get user by ID
export const getUserById = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return { id: userSnap.id, ...userSnap.data() };
    }
    return null;
  } catch (error) {
    console.error('Error getting user:', error);
    throw error;
  }
};

// Get all users
export const getAllUsers = async () => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef);
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting users:', error);
    throw error;
  }
};

// Update user schedule
export const updateUserSchedule = async (userId, schedule) => {
  try {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, {
      schedule,
      updatedAt: new Date().toISOString()
    }, { merge: true });
    return true;
  } catch (error) {
    console.error('Error updating user schedule:', error);
    throw error;
  }
};

// Delete user from Firestore
export const deleteUser = async (userId) => {
  try {
    console.log('Deleting user:', userId);
    const userRef = doc(db, 'users', userId);
    await deleteDoc(userRef);
    console.log('User deleted successfully');
    return true;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
