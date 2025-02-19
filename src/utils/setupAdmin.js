import { db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { UserType, WeeklySchedule } from './userService';

const ADMIN_EMAIL = 'info@rahyo.com';

export const setupAdminUser = async (uid) => {
  try {
    console.log('Setting up admin user with uid:', uid);
    
    // First check if the user document already exists
    const adminRef = doc(db, 'users', uid);
    const adminDoc = await getDoc(adminRef);
    
    if (adminDoc.exists()) {
      const userData = adminDoc.data();
      console.log('Existing user document found:', userData);
      
      // If user exists and is already admin, just return
      if (userData.userType === UserType.ADMIN) {
        console.log('User is already an admin');
        return true;
      }
    }

    // Create or update admin user
    const adminData = {
      name: 'Admin',
      email: ADMIN_EMAIL,
      userType: UserType.ADMIN,
      schedule: WeeklySchedule,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    console.log('Creating/updating admin user with data:', adminData);
    
    await setDoc(adminRef, adminData);

    console.log('Admin user created/updated successfully');
    return true;
  } catch (error) {
    console.error('Error in setupAdminUser:', error);
    console.error('Error details:', {
      code: error.code,
      message: error.message,
      stack: error.stack
    });
    throw error;
  }
};
