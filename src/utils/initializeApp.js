import { initializeFirestore } from './setupFirestore';

const initialize = async () => {
  try {
    console.log('Starting application initialization...');
    
    // Initialize Firestore
    await initializeFirestore();
    
    console.log('Application initialization complete!');
    console.log('You can now sign in with:');
  } catch (error) {
    console.error('Error during initialization:', error);
  }
};

// Run initialization
initialize();
