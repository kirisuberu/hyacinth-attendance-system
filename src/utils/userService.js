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

// Check if user has admin or accountant access
export const checkUserAccess = async (user) => {
  try {
    if (!user?.email) {
      console.log('No user email provided');
      return { hasAccess: false, role: null };
    }

    console.log('Checking access for email:', user.email);

    // Query users collection by email
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', user.email));
    const querySnapshot = await getDocs(q);

    // Check if any user document has this email and is admin or accountant
    for (const doc of querySnapshot.docs) {
      const userData = doc.data();
      if (userData.userType === UserType.ADMIN || userData.userType === UserType.ACCOUNTANT) {
        console.log('Found user with access:', userData);
        return { hasAccess: true, role: userData.userType };
      }
    }

    console.log('User does not have admin/accountant access');
    return { hasAccess: false, role: null };
  } catch (error) {
    console.error('Error checking user access:', error);
    return { hasAccess: false, role: null };
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

// Check if email is approved by admin
export const isEmailApproved = async (email) => {
  try {
    if (!email) {
      console.log('No email provided');
      return false;
    }

    console.log('Checking if email is approved:', email);

    const approvedEmailsRef = collection(db, 'approvedEmails');
    const q = query(approvedEmailsRef, where('email', '==', email.toLowerCase()));
    const querySnapshot = await getDocs(q);

    const isApproved = !querySnapshot.empty;
    console.log('Email approval status:', isApproved);
    return isApproved;
  } catch (error) {
    console.error('Error checking email approval status:', error);
    return false;
  }
};

// Add email to approved list (admin only)
export const addApprovedEmail = async (email) => {
  try {
    const approvedEmailsRef = collection(db, 'approvedEmails');
    const emailDoc = doc(approvedEmailsRef, email.toLowerCase());
    await setDoc(emailDoc, {
      email: email.toLowerCase(),
      addedAt: new Date().toISOString()
    });
    console.log('Email added to approved list:', email);
  } catch (error) {
    console.error('Error adding approved email:', error);
    throw error;
  }
};

// Remove email from approved list (admin only)
export const removeApprovedEmail = async (email) => {
  try {
    const approvedEmailsRef = collection(db, 'approvedEmails');
    const emailDoc = doc(approvedEmailsRef, email.toLowerCase());
    await deleteDoc(emailDoc);
    console.log('Email removed from approved list:', email);
  } catch (error) {
    console.error('Error removing approved email:', error);
    throw error;
  }
};

// Get all approved emails (admin only)
export const getApprovedEmails = async () => {
  try {
    const approvedEmailsRef = collection(db, 'approvedEmails');
    const querySnapshot = await getDocs(approvedEmailsRef);
    return querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Error getting approved emails:', error);
    throw error;
  }
};
