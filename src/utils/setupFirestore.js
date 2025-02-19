import { db } from '../firebase';
import { collection, getDocs, query, where, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// User types enum
export const UserType = {
  ADMIN: 'admin',
  ACCOUNTANT: 'accountant',
  MEMBER: 'member'
};

// Default weekly schedule
const WeeklySchedule = {
  monday: { timeIn: '', timeOut: '' },
  tuesday: { timeIn: '', timeOut: '' },
  wednesday: { timeIn: '', timeOut: '' },
  thursday: { timeIn: '', timeOut: '' },
  friday: { timeIn: '', timeOut: '' },
  saturday: { timeIn: '', timeOut: '' },
  sunday: { timeIn: '', timeOut: '' }
};

const ADMIN_EMAIL = 'info@rahyo.com';
const ADMIN_PASSWORD = 'admin123456'; // You should change this to a more secure password

export const initializeFirestore = async () => {
  try {
    console.log('Starting Firestore initialization...');

    // Check if admin user already exists in Firestore
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where("email", "==", ADMIN_EMAIL));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log('Admin user not found. Creating new admin user...');
      
      try {
        // Create admin user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          ADMIN_EMAIL,
          ADMIN_PASSWORD
        );
        
        // Create admin user document in Firestore
        const adminRef = doc(db, 'users', userCredential.user.uid);
        await setDoc(adminRef, {
          name: 'Admin',
          email: ADMIN_EMAIL,
          userType: UserType.ADMIN,
          schedule: WeeklySchedule,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        
        console.log('Admin user created successfully');
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          console.log('Admin user exists in Auth but not in Firestore. Creating Firestore document...');
          
          // Try to sign in with the admin credentials to get the UID
          const userCredential = await signInWithEmailAndPassword(auth, ADMIN_EMAIL, ADMIN_PASSWORD);
          
          // Create the admin document in Firestore
          const adminRef = doc(db, 'users', userCredential.user.uid);
          await setDoc(adminRef, {
            name: 'Admin',
            email: ADMIN_EMAIL,
            userType: UserType.ADMIN,
            schedule: WeeklySchedule,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          });
          
          console.log('Admin user document created in Firestore');
        } else {
          throw error;
        }
      }
    } else {
      console.log('Admin user already exists');
    }

    // Create collections structure
    const collections = [
      {
        name: 'attendance',
        sampleDoc: {
          id: 'sample',
          userId: 'sample',
          type: 'timeIn',
          timestamp: new Date().toISOString(),
          createdAt: new Date().toISOString()
        }
      }
    ];

    // Create each collection with a sample document (if they don't exist)
    for (const col of collections) {
      const colRef = collection(db, col.name);
      const colSnapshot = await getDocs(colRef);
      
      if (colSnapshot.empty) {
        console.log(`Creating sample document in ${col.name} collection...`);
        const sampleRef = doc(colRef, 'sample');
        await setDoc(sampleRef, col.sampleDoc);
        // Immediately delete the sample document
        await deleteDoc(sampleRef);
      }
    }

    console.log('Firestore initialization complete');
    return true;
  } catch (error) {
    console.error('Error initializing Firestore:', error);
    throw error;
  }
};
