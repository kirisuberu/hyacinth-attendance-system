import { db } from '../firebase';
import { doc, setDoc, getDoc, collection, query, where, getDocs, deleteDoc, addDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { auth } from '../firebase';

// User types enum
export const UserType = {
  SUPERADMIN: 'superadmin',
  ADMIN: 'admin',
  ACCOUNTANT: 'accountant',
  MEMBER: 'member'
};

// Example shift object structure for reference
// {
//   days: ["Monday", "Tuesday"], // or ["*"]
//   startTime: "09:00",
//   endTime: "18:00",
//   duration: 9,
//   type: "day"
// }

// Default privileges by user type
export const DefaultPrivileges = {
  superadmin: {
    canViewReports: true,
    canEditSchedules: true,
    canOverrideAttendance: true,
    canManageUsers: true,
    canEditSystemRules: true
  },
  admin: {
    canViewReports: true,
    canEditSchedules: true,
    canOverrideAttendance: true,
    canManageUsers: true,
    canEditSystemRules: false
  },
  accountant: {
    canViewReports: true,
    canEditSchedules: false,
    canOverrideAttendance: false,
    canManageUsers: false,
    canEditSystemRules: false
  },
  member: {
    canViewReports: false,
    canEditSchedules: false,
    canOverrideAttendance: false,
    canManageUsers: false,
    canEditSystemRules: false
  }
};


// Helper function to validate shift times
export const validateShiftTimes = (startDay, startTime, duration) => {
  // Check if any of the parameters are null or undefined
  if (!startDay || !startTime || !duration) {
    console.warn('validateShiftTimes: Missing required parameters', { startDay, startTime, duration });
    return false;
  }

  try {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
    // Normalize day names to lowercase
    const startDayLower = startDay.toLowerCase();
    
    const startDayIndex = days.indexOf(startDayLower);
    
    if (startDayIndex === -1) {
      console.warn('validateShiftTimes: Invalid day provided', { startDay });
      return false;
    }

    // Convert time to minutes for comparison
    const [startHour, startMinute] = startTime.split(':').map(Number);
    
    if (isNaN(startHour) || isNaN(startMinute)) {
      console.warn('validateShiftTimes: Invalid time format', { startTime });
      return false;
    }
    
    // Parse the duration (can be decimal like "8.5" for 8 hours and 30 minutes)
    const durationHours = parseFloat(duration);
    if (isNaN(durationHours) || durationHours <= 0) {
      console.warn('validateShiftTimes: Invalid duration', { duration });
      return false;
    }

    // Duration is valid if it's a positive number
    return durationHours > 0;
  } catch (error) {
    console.error('Error in validateShiftTimes:', error);
    return false;
  }
};

// Check if user has admin or accountant access
export const checkUserAccess = async (uid) => {
  try {
    if (!uid) {
      console.log('No user ID provided');
      return { hasAccess: false, userType: null };
    }

    console.log('Checking access for user ID:', uid);

    // First try to get the user document directly by ID
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log('Found user document:', userData);
        
        // Check if user is admin or accountant
        if (userData.userType === UserType.ADMIN) {
          console.log('User has admin access');
          return { hasAccess: true, userType: UserType.ADMIN };
        } else if (userData.userType === UserType.ACCOUNTANT) {
          console.log('User has accountant access');
          return { hasAccess: true, userType: UserType.ACCOUNTANT };
        } else if (userData.userType === UserType.MEMBER) {
          console.log('User is a regular member');
          return { hasAccess: true, userType: UserType.MEMBER };
        }
      } else {
        console.log('User document not found');
      }
    } catch (docError) {
      console.error('Error getting user document:', docError);
      // If there's an error getting the document directly, we'll try the query approach
      // But first check if it's a connection error
      if (docError.message?.includes('network error') || 
          docError.code === 'failed-precondition' ||
          docError.message?.includes('ERR_BLOCKED_BY_CLIENT')) {
        throw docError; // Re-throw to be caught by the outer try-catch
      }
    }

    // If we're here, either the document doesn't exist or we couldn't access it directly
    // Try querying by email as a fallback
    const usersRef = collection(db, 'users');
    
    // Get the user document again to get the email
    const userDoc = await getDoc(doc(db, 'users', uid));
    
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const email = userData.email;
      
      if (email) {
        const q = query(usersRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);
        
        for (const doc of querySnapshot.docs) {
          const userData = doc.data();
          if (userData.userType === UserType.ADMIN) {
            console.log('Found user with admin access via email query:', userData);
            return { hasAccess: true, userType: UserType.ADMIN };
          } else if (userData.userType === UserType.ACCOUNTANT) {
            console.log('Found user with accountant access via email query:', userData);
            return { hasAccess: true, userType: UserType.ACCOUNTANT };
          } else if (userData.userType === UserType.MEMBER) {
            console.log('User is a regular member (via email query)');
            return { hasAccess: true, userType: UserType.MEMBER };
          }
        }
      }
    }

    console.log('User does not have access');
    
    // One last attempt - try to find by userId field
    try {
      const userIdQuery = query(usersRef, where('userId', '==', uid));
      const userIdSnapshot = await getDocs(userIdQuery);
      
      if (!userIdSnapshot.empty) {
        for (const doc of userIdSnapshot.docs) {
          const userData = doc.data();
          if (userData.userType === UserType.ADMIN) {
            console.log('Found user with admin access via userId query:', userData);
            return { hasAccess: true, userType: UserType.ADMIN };
          } else if (userData.userType === UserType.ACCOUNTANT) {
            console.log('Found user with accountant access via userId query:', userData);
            return { hasAccess: true, userType: UserType.ACCOUNTANT };
          } else if (userData.userType === UserType.MEMBER) {
            console.log('User is a regular member (via userId query)');
            return { hasAccess: true, userType: UserType.MEMBER };
          }
        }
      }
    } catch (userIdError) {
      console.error('Error in userId fallback query:', userIdError);
    }
    
    return { hasAccess: false, userType: null };
  } catch (error) {
    console.error('Error checking user access:', error);
    
    // Check if the error is related to network blocking
    if (error.message?.includes('network error') || 
        error.code === 'failed-precondition' ||
        error.message?.includes('ERR_BLOCKED_BY_CLIENT')) {
      throw new Error('Connection to the database was blocked. This may be caused by an ad blocker or privacy extension.');
    }
    
    return { hasAccess: false, userType: null };
  }
};

// Create or update user in Firestore with new schema
export const createOrUpdateUser = async (userId, userData) => {
  if (!userId) throw new Error('Missing userId');
  // Enforce new schema fields
  const {
    name = '',
    email = '',
    userType = 'member',
    timeRegion = 'PHT',
    canClockAnytime = false,
    shifts = [],
    privileges = DefaultPrivileges[userType] || {},
    status = 'active',
    scheduleTemplates = [],
    createdAt = serverTimestamp(),
    updatedAt = serverTimestamp(),
    ...rest
  } = userData;
  // Always preserve userID
  const userDoc = {
    userID: userId,
    name,
    email,
    userType,
    timeRegion,
    canClockAnytime,
    shifts,
    privileges,
    status,
    scheduleTemplates,
    createdAt,
    updatedAt,
    ...rest
  };
  await setDoc(doc(db, 'users', userId), userDoc, { merge: true });
};

// Get user by ID (new schema)
export const getUserById = async (userId) => {
  if (!userId) return null;
  const userSnap = await getDoc(doc(db, 'users', userId));
  if (!userSnap.exists()) return null;
  return userSnap.data();
};

// Get all users (new schema)
export const getAllUsers = async () => {
  const usersSnap = await getDocs(collection(db, 'users'));
  return usersSnap.docs.map(doc => doc.data());
};

// Update user shifts (schedule) in new schema
export const updateUserShifts = async (userId, shifts) => {
  if (!userId) throw new Error('Missing userId');
  await updateDoc(doc(db, 'users', userId), {
    shifts,
    updatedAt: serverTimestamp()
  });
};

// Get schedule templates from admin user doc (new schema)
export const getScheduleTemplates = async (adminUserId) => {
  if (!adminUserId) throw new Error('Missing adminUserId');
  const adminSnap = await getDoc(doc(db, 'users', adminUserId));
  if (!adminSnap.exists()) return [];
  return adminSnap.data().scheduleTemplates || [];
};

// Add schedule template to admin user's doc (new schema)
export const createScheduleTemplate = async (adminUserId, templateData) => {
  if (!adminUserId) throw new Error('Missing adminUserId');
  const adminRef = doc(db, 'users', adminUserId);
  const adminSnap = await getDoc(adminRef);
  if (!adminSnap.exists()) throw new Error('Admin user not found');
  const prevTemplates = adminSnap.data().scheduleTemplates || [];
  const newTemplates = [...prevTemplates, templateData];
  await updateDoc(adminRef, { scheduleTemplates: newTemplates });
};

// Update schedule template in admin user's doc (new schema)
export const updateScheduleTemplate = async (adminUserId, templateIndex, templateData) => {
  if (!adminUserId) throw new Error('Missing adminUserId');
  const adminRef = doc(db, 'users', adminUserId);
  const adminSnap = await getDoc(adminRef);
  if (!adminSnap.exists()) throw new Error('Admin user not found');
  let templates = adminSnap.data().scheduleTemplates || [];
  if (templateIndex < 0 || templateIndex >= templates.length) throw new Error('Invalid template index');
  templates[templateIndex] = templateData;
  await updateDoc(adminRef, { scheduleTemplates: templates });
};

// Delete schedule template from admin user's doc (new schema)
export const deleteScheduleTemplate = async (adminUserId, templateIndex) => {
  if (!adminUserId) throw new Error('Missing adminUserId');
  const adminRef = doc(db, 'users', adminUserId);
  const adminSnap = await getDoc(adminRef);
  if (!adminSnap.exists()) throw new Error('Admin user not found');
  let templates = adminSnap.data().scheduleTemplates || [];
  if (templateIndex < 0 || templateIndex >= templates.length) throw new Error('Invalid template index');
  templates.splice(templateIndex, 1);
  await updateDoc(adminRef, { scheduleTemplates: templates });
};

// Update user data and document ID if name changes
export const updateUserWithDocumentRename = async (userId, userData) => {
  try {
    // Get the current user data
    const currentUser = await getUserById(userId);
    if (!currentUser) {
      throw new Error(`User with ID ${userId} not found`);
    }

    // Ensure userID is preserved from the current user data
    const preservedUserID = currentUser.userID || `uid_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Check if name or userType has changed
    const nameChanged = currentUser.name !== userData.name;
    const userTypeChanged = currentUser.userType !== userData.userType;

    // If neither name nor userType changed, just update the user data normally
    if (!nameChanged && !userTypeChanged) {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        ...userData,
        userID: preservedUserID, // Use the preserved userID
        updatedAt: new Date().toISOString()
      });
      return userId;
    }

    // Generate a new document ID based on the updated information
    const newUserId = generateCustomUserId(
      userData.userType || currentUser.userType,
      userData.name || currentUser.name
    );

    console.log(`Updating user document ID from ${userId} to ${newUserId}`);

    // Create a new document with the new ID
    const newUserRef = doc(db, 'users', newUserId);
    
    // Merge the current user data with the updated data
    const mergedData = {
      ...currentUser,
      ...userData,
      userID: preservedUserID, // Use the preserved userID
      updatedAt: new Date().toISOString()
    };
    
    // Remove the id field as it's stored as the document ID
    delete mergedData.id;
    
    // Create the new document
    await setDoc(newUserRef, mergedData);
    
    // Delete the old document
    await deleteDoc(doc(db, 'users', userId));
    
    console.log(`User document successfully renamed from ${userId} to ${newUserId}`);
    
    return newUserId;
  } catch (error) {
    console.error('Error updating user with document rename:', error);
    throw error;
  }
};

// Refresh the current user's access after document rename
export const refreshUserAccessAfterRename = async (authUser, newDocumentId) => {
  try {
    if (!authUser) {
      console.log('No auth user provided for refresh');
      return false;
    }
    
    console.log('Refreshing user access after rename:', { 
      uid: authUser.uid, 
      email: authUser.email,
      newDocumentId 
    });
    
    // Get the updated user data with the new document ID
    const userDoc = await getDoc(doc(db, 'users', newDocumentId));
    
    if (!userDoc.exists()) {
      console.error('User document not found after rename');
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error refreshing user access after rename:', error);
    return false;
  }
};
