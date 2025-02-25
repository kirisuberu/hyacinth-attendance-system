import { db } from '../firebase';
import { doc, setDoc, getDoc, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';

// User types enum
export const UserType = {
  ADMIN: 'admin',
  ACCOUNTANT: 'accountant',
  MEMBER: 'member'
};

// Schedule type definition
export const WeeklySchedule = {};

// Helper function to validate shift times
export const validateShiftTimes = (startDay, startTime, endDay, endTime) => {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const startDayIndex = days.indexOf(startDay.toLowerCase());
  const endDayIndex = days.indexOf(endDay.toLowerCase());
  
  if (startDayIndex === -1 || endDayIndex === -1) {
    throw new Error('Invalid day provided');
  }

  // Convert times to minutes for comparison
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);
  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;

  // Calculate the total duration considering day change
  let duration;
  if (startDayIndex === endDayIndex) {
    duration = endTotalMinutes - startTotalMinutes;
    if (duration < 0) {
      duration += 24 * 60; // Add 24 hours if end time is on next day
    }
  } else {
    const daysDiff = (endDayIndex - startDayIndex + 7) % 7;
    duration = (daysDiff * 24 * 60) + (endTotalMinutes - startTotalMinutes);
  }

  return duration > 0;
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

    // Check if email already exists
    const usersRef = collection(db, 'users');
    const emailQuery = query(usersRef, where('email', '==', userData.email));
    const emailSnapshot = await getDocs(emailQuery);

    if (!emailSnapshot.empty) {
      const existingDoc = emailSnapshot.docs[0];
      
      // If this is a different document, update the ID
      if (existingDoc.id !== userId) {
        console.log('Found existing user, updating ID:', {
          oldId: existingDoc.id,
          newId: userId
        });
        
        // Copy existing data to new ID
        await setDoc(doc(db, 'users', userId), existingDoc.data());
        
        // Delete old document
        await deleteDoc(doc(db, 'users', existingDoc.id));
        return userId;
      }
      return existingDoc.id;
    }

    // No existing user found, check if email is approved for non-admin users
    const isApproved = await isEmailApproved(userData.email);
    if (!isApproved && userData.userType !== UserType.ADMIN) {
      throw new Error('Email is not approved. Please contact an administrator.');
    }

    // Generate new ID if none provided
    const actualUserId = userId || `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Validate schedule if present
    const schedule = userData.schedule || {};
    Object.entries(schedule).forEach(([shiftId, shift]) => {
      if (!validateShiftTimes(shift.startDay, shift.startTime, shift.endDay, shift.endTime)) {
        throw new Error(`Invalid shift times for shift ${shiftId}`);
      }
    });

    // Create new user document
    const userRef = doc(db, 'users', actualUserId);
    await setDoc(userRef, {
      ...userData,
      createdAt: userData.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

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

// Clean up duplicate users
export const cleanupDuplicateUsers = async () => {
  try {
    const usersRef = collection(db, 'users');
    const snapshot = await getDocs(usersRef);
    
    // Create a map to store email -> user documents
    const emailMap = new Map();
    
    // First pass: collect all users by email
    snapshot.docs.forEach(doc => {
      const userData = doc.data();
      if (!emailMap.has(userData.email)) {
        emailMap.set(userData.email, []);
      }
      emailMap.get(userData.email).push({
        id: doc.id,
        ...userData
      });
    });

    // Second pass: clean up duplicates
    for (const [email, users] of emailMap) {
      if (users.length > 1) {
        console.log(`Found duplicate users for email ${email}:`, users);
        
        // Sort by userType priority (admin > accountant > member)
        const sortedUsers = users.sort((a, b) => {
          const typePriority = {
            [UserType.ADMIN]: 3,
            [UserType.ACCOUNTANT]: 2,
            [UserType.MEMBER]: 1
          };
          return typePriority[b.userType] - typePriority[a.userType];
        });

        // Keep the first user (highest priority) and delete the rest
        const keepUser = sortedUsers[0];
        console.log(`Keeping user with ID ${keepUser.id} (${keepUser.userType})`);
        
        for (let i = 1; i < sortedUsers.length; i++) {
          const deleteUser = sortedUsers[i];
          console.log(`Deleting duplicate user with ID ${deleteUser.id} (${deleteUser.userType})`);
          await deleteDoc(doc(db, 'users', deleteUser.id));
        }
      }
    }
  } catch (error) {
    console.error('Error cleaning up duplicate users:', error);
    throw error;
  }
};
