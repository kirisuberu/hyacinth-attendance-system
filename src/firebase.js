// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Connect to emulators in development mode
const useEmulators = import.meta.env.VITE_USE_EMULATORS === 'true';
const useAuthEmulator = import.meta.env.VITE_USE_AUTH_EMULATOR === 'true';
if (useEmulators) {
  const host = import.meta.env.VITE_FIREBASE_EMULATOR_HOST || 'localhost';
  const firestorePort = import.meta.env.VITE_FIRESTORE_EMULATOR_PORT || 8080;
  const authPort = import.meta.env.VITE_AUTH_EMULATOR_PORT || 9099;

  console.log(`Connecting to Firebase emulators at ${host}`);
  connectFirestoreEmulator(db, host, parseInt(firestorePort));
  console.log('Firestore emulator connected');

  if (useAuthEmulator) {
    connectAuthEmulator(auth, `http://${host}:${authPort}`);
    console.log('Auth emulator connected');
  } else {
    console.log('Using PRODUCTION Auth with Firestore emulator');
  }
} else {
  console.log('Using production Firebase services');
}

// Initialize Analytics conditionally (only in production)
let analytics = null;
if (process.env.NODE_ENV === 'production') {
  try {
    analytics = getAnalytics(app);
    console.log('Analytics initialized');
  } catch (error) {
    console.error('Error initializing analytics:', error);
  }
}

// Configure Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Add scopes for Google sign-in
googleProvider.addScope('email');
googleProvider.addScope('profile');

export { analytics, googleProvider };
