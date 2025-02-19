// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",
  authDomain: "hyacinthattendance.firebaseapp.com",
  projectId: "hyacinthattendance",
  storageBucket: "hyacinthattendance.appspot.com",
  messagingSenderId: "12316915447",
  appId: "1:12316915447:web:2f8a7daf07918a0c2f45f2",
  measurementId: "G-040M8BP5NJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

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
