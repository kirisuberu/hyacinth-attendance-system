import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css'
import App from './App.jsx'

// Initialize Firestore in development
if (import.meta.env.DEV) {
  import('./utils/initializeApp.js').then(() => {
    console.log('Firestore initialization started');
  }).catch(error => {
    console.error('Error initializing Firestore:', error);
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
