import { db } from '../firebase';
import { doc, setDoc, getDoc, collection, query, where, getDocs, deleteDoc, addDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { auth } from '../firebase';

// User types enum
export const UserType = {
  ADMIN: 'admin',
  ACCOUNTANT: 'accountant',
  MEMBER: 'member'
};

// Schedule type definition
export const WeeklySchedule = {
  // This is an empty default schedule
  // Will be populated with shift entries when configured
};

// Helper function to validate shift times
export const validateShiftTimes = (day, timeIn, duration, timeRegion) => {
  // Check if any of the parameters are null or undefined
  if (!day || !timeIn || !duration || !timeRegion) {
    console.warn('validateShiftTimes: Missing required parameters', { day, timeIn, duration, timeRegion });
    return false;
  }

  try {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
    // Normalize day name to lowercase
    const dayLower = day.toLowerCase();
    
    const dayIndex = days.indexOf(dayLower);
    
    if (dayIndex === -1) {
      console.warn('validateShiftTimes: Invalid day provided', { day });
      return false;
    }

    // Validate time format
    const [hour, minute] = timeIn.split(':').map(Number);
    
    if (isNaN(hour) || isNaN(minute)) {
      console.warn('validateShiftTimes: Invalid time format', { timeIn });
      return false;
    }
    
    // Validate duration (should be a positive number)
    const durationNum = Number(duration);
    if (isNaN(durationNum) || durationNum <= 0) {
      console.warn('validateShiftTimes: Invalid duration', { duration });
      return false;
    }
    
    // Validate time region
    const validTimeRegions = ['PHT', 'CST', 'EST'];
    if (!validTimeRegions.includes(timeRegion)) {
      console.warn('validateShiftTimes: Invalid time region', { timeRegion });
      return false;
    }

    return true;
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
    
    // Validate schedule if present and not empty
    const shifts = userData.shifts || {};
    if (Object.keys(shifts).length > 0) {
      Object.entries(shifts).forEach(([shiftId, shift]) => {
        if (shift && !validateShiftTimes(shift.day, shift.timeIn, shift.duration, shift.timeRegion)) {
          throw new Error(`Invalid shift times for shift ${shiftId}`);
        }
      });
    }

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
export const updateUserSchedule = async (userId, shifts) => {
  try {
    const userRef = doc(db, 'users', userId);
    
    // Get the current user data
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      throw new Error('User not found');
    }
    
    // Update just the shifts field
    await updateDoc(userRef, { shifts });
    
    return userRef;
  } catch (error) {
    console.error('Error updating user shifts:', error);
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

// Schedule templates functions
export const getScheduleTemplates = async () => {
  try {
    // Get the current user
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error('User not authenticated');
    }
    
    // Get the user document to check if they're an admin
    const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
    if (!userDoc.exists() || userDoc.data().userType !== 'admin') {
      throw new Error('Only admins can manage schedule templates');
    }
    
    // Check if the admin document has a scheduleTemplates field
    if (!userDoc.data().scheduleTemplates) {
      // Initialize the scheduleTemplates field if it doesn't exist
      await updateDoc(doc(db, 'users', currentUser.uid), {
        scheduleTemplates: []
      });
      return [];
    }
    
    // Return the templates from the admin's user document
    return userDoc.data().scheduleTemplates || [];
  } catch (error) {
    console.error('Error getting schedule templates:', error);
    throw new Error('Failed to get schedule templates: ' + error.message);
  }
};

export const createScheduleTemplate = async (templateData) => {
  try {
    // Validate input
    if (!templateData.name || typeof templateData.name !== 'string') {
      throw new Error('Template name is required');
    }
    
    if (!templateData.schedule || typeof templateData.schedule !== 'object') {
      throw new Error('Template schedule is required and must be an object');
    }
    
    // Check if there are any shifts in the schedule
    if (Object.keys(templateData.schedule).length === 0) {
      throw new Error('Template schedule must contain at least one shift');
    }
    
    // Get the current user
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error('User not authenticated');
    }
    
    // Get the user document to check if they're an admin
    const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
    if (!userDoc.exists() || userDoc.data().userType !== 'admin') {
      throw new Error('Only admins can manage schedule templates');
    }
    
    // Get existing templates
    const existingTemplates = userDoc.data().scheduleTemplates || [];
    
    // Create a new template with a unique ID
    const newTemplate = {
      id: `template_${Date.now()}`,
      name: templateData.name,
      schedule: templateData.schedule,
      createdAt: new Date().toISOString()
    };
    
    // Add the new template to the existing templates
    const updatedTemplates = [...existingTemplates, newTemplate];
    
    // Update the admin's user document
    await updateDoc(doc(db, 'users', currentUser.uid), {
      scheduleTemplates: updatedTemplates
    });
    
    return newTemplate;
  } catch (error) {
    console.error('Error creating schedule template:', error);
    throw new Error('Failed to create schedule template: ' + error.message);
  }
};

export const updateScheduleTemplate = async (templateId, templateData) => {
  try {
    // Validate input
    if (!templateId) {
      throw new Error('Template ID is required');
    }
    
    if (!templateData.name || typeof templateData.name !== 'string') {
      throw new Error('Template name is required');
    }
    
    if (!templateData.schedule || typeof templateData.schedule !== 'object') {
      throw new Error('Template schedule is required and must be an object');
    }
    
    // Check if there are any shifts in the schedule
    if (Object.keys(templateData.schedule).length === 0) {
      throw new Error('Template schedule must contain at least one shift');
    }
    
    // Get the current user
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error('User not authenticated');
    }
    
    // Get the user document to check if they're an admin
    const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
    if (!userDoc.exists() || userDoc.data().userType !== 'admin') {
      throw new Error('Only admins can manage schedule templates');
    }
    
    // Get existing templates
    const existingTemplates = userDoc.data().scheduleTemplates || [];
    
    // Find the template to update
    const templateIndex = existingTemplates.findIndex(template => template.id === templateId);
    if (templateIndex === -1) {
      throw new Error('Template not found');
    }
    
    // Update the template
    const updatedTemplate = {
      ...existingTemplates[templateIndex],
      name: templateData.name,
      schedule: templateData.schedule,
      updatedAt: new Date().toISOString()
    };
    
    // Update the templates array
    const updatedTemplates = [...existingTemplates];
    updatedTemplates[templateIndex] = updatedTemplate;
    
    // Update the admin's user document
    await updateDoc(doc(db, 'users', currentUser.uid), {
      scheduleTemplates: updatedTemplates
    });
    
    return updatedTemplate;
  } catch (error) {
    console.error('Error updating schedule template:', error);
    throw new Error('Failed to update schedule template: ' + error.message);
  }
};

export const deleteScheduleTemplate = async (templateId) => {
  try {
    // Validate input
    if (!templateId) {
      throw new Error('Template ID is required');
    }
    
    // Get the current user
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error('User not authenticated');
    }
    
    // Get the user document to check if they're an admin
    const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
    if (!userDoc.exists() || userDoc.data().userType !== 'admin') {
      throw new Error('Only admins can manage schedule templates');
    }
    
    // Get existing templates
    const existingTemplates = userDoc.data().scheduleTemplates || [];
    
    // Filter out the template to delete
    const updatedTemplates = existingTemplates.filter(template => template.id !== templateId);
    
    // Update the admin's user document
    await updateDoc(doc(db, 'users', currentUser.uid), {
      scheduleTemplates: updatedTemplates
    });
    
    return true;
  } catch (error) {
    console.error('Error deleting schedule template:', error);
    throw new Error('Failed to delete schedule template: ' + error.message);
  }
};
