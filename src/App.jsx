import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { collection, addDoc, query, where, orderBy, limit, getDocs, Timestamp, doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { toast } from 'react-toastify';

// Import pages
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardHome from './pages/DashboardHome';
import Schedule from './pages/Schedule';
import Attendance from './pages/Attendance';
import Profile from './pages/Profile';
import RegistrationRequests from './pages/RegistrationRequests';
import UserManagement from './pages/UserManagement';
import './App.css';

// Import layout
import MainLayout from './components/layout/MainLayout';

// Import contexts
import { AuthProvider } from './contexts/AuthContext';
import { TimeFormatProvider } from './contexts/TimeFormatContext';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;

// Confirmation modal components
const ConfirmationModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
`;

const ModalTitle = styled.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`;

const ModalBody = styled.div`
  margin-bottom: 1.5rem;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(Button)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #eee;
  }
`;

const ConfirmButton = styled(Button)`
  background-color: #4caf50;
  color: white;
  border: 1px solid #43a047;
  
  &:hover {
    background-color: #43a047;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-family: inherit;
  font-size: 0.9rem;
  resize: vertical;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

function App() {
  const [user, setUser] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [lastRecord, setLastRecord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loadingUserData, setLoadingUserData] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [confirmationAction, setConfirmationAction] = useState(null);
  const [confirmationNote, setConfirmationNote] = useState('');
  const [processingAction, setProcessingAction] = useState(false);

  useEffect(() => {
    // Get current user
    const currentUser = auth.currentUser;
    
    if (currentUser) {
      const userObj = {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName || currentUser.email.split('@')[0]
      };
      setUser(userObj);
      fetchUserData(currentUser.uid);
    } else {
      // Check for development fallback user
      const isEmulatorMode = import.meta.env.DEV && import.meta.env.VITE_USE_EMULATORS === 'true';
      if (isEmulatorMode) {
        const devUser = localStorage.getItem('dev_user');
        if (devUser) {
          try {
            const parsedUser = JSON.parse(devUser);
            const userObj = {
              uid: parsedUser.uid,
              email: parsedUser.email,
              displayName: parsedUser.displayName || parsedUser.email.split('@')[0]
            };
            setUser(userObj);
            fetchUserData(parsedUser.uid);
            console.log('Using development user:', parsedUser.email);
          } catch (error) {
            console.error('Error parsing development user:', error);
          }
        }
      }
    }
  }, []);
  
  // Fetch additional user data from Firestore
  const fetchUserData = async (userId) => {
    if (!userId) return;
    
    try {
      setLoadingUserData(true);
      const userDocRef = doc(db, 'users', userId);
      const userDocSnap = await getDoc(userDocRef);
      
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setUserData(userData);
        
        // Check if user has an active attendance session
        await checkAttendanceStatus(userId);
      } else {
        console.log('No user data found!');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoadingUserData(false);
    }
  };
  
  // Check if user has an active attendance session
  const checkAttendanceStatus = async (userId) => {
    try {
      // Get the most recent attendance record for the user
      const attendanceRef = collection(db, 'attendance');
      const q = query(
        attendanceRef,
        where('userId', '==', userId),
        orderBy('timestamp', 'desc'),
        limit(1)
      );
      
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const latestRecord = querySnapshot.docs[0].data();
        setLastRecord(latestRecord);
        
        // If the latest record is a "Time In" without a corresponding "Time Out",
        // then the user is currently "In"
        if (latestRecord.type === 'In') {
          setAttendanceStatus('In');
        } else {
          setAttendanceStatus('Out');
        }
      } else {
        // No attendance records found
        setAttendanceStatus(null);
      }
    } catch (error) {
      console.error('Error checking attendance status:', error);
    }
  };
  
  // Handle time in/out action
  const handleTimeInOut = async (type) => {
    if (loading) return;
    
    // Show confirmation modal
    setConfirmationAction(type);
    setShowConfirmationModal(true);
  };
  
  // Process time in/out after confirmation
  const processTimeInOut = async () => {
    if (processingAction || !user?.uid) return;
    
    const type = confirmationAction;
    
    try {
      setProcessingAction(true);
      
      // Add attendance record to Firestore
      const attendanceRef = collection(db, 'attendance');
      await addDoc(attendanceRef, {
        userId: user.uid,
        type,
        timestamp: Timestamp.now(),
        note: confirmationNote.trim() || null
      });
      
      // Update local state
      setAttendanceStatus(type);
      setLastRecord({
        type,
        timestamp: Timestamp.now(),
        note: confirmationNote.trim() || null
      });
      
      toast.success(`Time ${type} recorded successfully`);
      
      // Reset modal state
      setShowConfirmationModal(false);
      setConfirmationNote('');
      setConfirmationAction(null);
    } catch (error) {
      console.error(`Error recording time ${type}:`, error);
      toast.error(`Failed to record time ${type}`);
    } finally {
      setProcessingAction(false);
    }
  };

  // Layout wrapper for protected routes
  const LayoutWrapper = ({ children }) => {
    return (
      <ProtectedRoute>
        <MainLayout
          user={user}
          userData={userData}
          setUserData={setUserData}
          attendanceStatus={attendanceStatus}
          loading={loading}
          handleTimeInOut={handleTimeInOut}
          lastRecord={lastRecord}
        >
          {children}
          
          {/* Time In/Out Confirmation Modal */}
          {showConfirmationModal && (
            <ConfirmationModal>
              <ModalContent>
                <ModalTitle>Confirm Time {confirmationAction}</ModalTitle>
                <ModalBody>
                  <p>Are you sure you want to record Time {confirmationAction}?</p>
                  <TextArea
                    placeholder="Add a note (optional)"
                    value={confirmationNote}
                    onChange={(e) => setConfirmationNote(e.target.value)}
                  />
                </ModalBody>
                <ModalButtons>
                  <CancelButton 
                    onClick={() => {
                      setShowConfirmationModal(false);
                      setConfirmationNote('');
                      setConfirmationAction(null);
                    }}
                    disabled={processingAction}
                  >
                    Cancel
                  </CancelButton>
                  <ConfirmButton 
                    onClick={processTimeInOut}
                    disabled={processingAction}
                  >
                    {processingAction ? 'Processing...' : 'Confirm'}
                  </ConfirmButton>
                </ModalButtons>
              </ModalContent>
            </ConfirmationModal>
          )}
        </MainLayout>
      </ProtectedRoute>
    );
  };

  return (
    <>
      <AuthProvider>
        <TimeFormatProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/dashboard" 
                element={
                  <LayoutWrapper>
                    <DashboardHome userData={userData} />
                  </LayoutWrapper>
                } 
              />
              <Route 
                path="/schedule" 
                element={
                  <LayoutWrapper>
                    <Schedule />
                  </LayoutWrapper>
                } 
              />
              <Route 
                path="/attendance" 
                element={
                  <LayoutWrapper>
                    <Attendance 
                      attendanceStatus={attendanceStatus} 
                      lastRecord={lastRecord} 
                    />
                  </LayoutWrapper>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <LayoutWrapper>
                    <Profile 
                      user={user} 
                      userData={userData} 
                      setUserData={setUserData} 
                    />
                  </LayoutWrapper>
                } 
              />
              <Route 
                path="/registration-requests" 
                element={
                  <LayoutWrapper>
                    <RegistrationRequests />
                  </LayoutWrapper>
                } 
              />
              <Route 
                path="/user-management" 
                element={
                  <LayoutWrapper>
                    <UserManagement />
                  </LayoutWrapper>
                } 
              />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Router>
          <ToastContainer position="top-right" autoClose={3000} />
        </TimeFormatProvider>
      </AuthProvider>
    </>
  );
}

export default App
