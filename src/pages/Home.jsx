import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc, collection, query, where, getDocs, addDoc, Timestamp, orderBy, limit } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { toast } from 'react-toastify';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardHome from '../components/dashboard/DashboardHome';
import styled from 'styled-components';

// Styled components for confirmation modal
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

const StatusTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${props => {
    if (props.status === 'Early') return '#e3f2fd';
    if (props.status === 'On Time') return '#e8f5e9';
    if (props.status === 'Late') return '#ffebee';
    if (props.status === 'Complete') return '#e8f5e9';
    if (props.status === 'Incomplete') return '#fff8e1';
    return '#f5f5f5';
  }};
  color: ${props => {
    if (props.status === 'Early') return '#1565c0';
    if (props.status === 'On Time') return '#2e7d32';
    if (props.status === 'Late') return '#c62828';
    if (props.status === 'Complete') return '#2e7d32';
    if (props.status === 'Incomplete') return '#ef6c00';
    return '#757575';
  }};
  border: 1px solid ${props => {
    if (props.status === 'Early') return '#bbdefb';
    if (props.status === 'On Time') return '#c8e6c9';
    if (props.status === 'Late') return '#ffcdd2';
    if (props.status === 'Complete') return '#c8e6c9';
    if (props.status === 'Incomplete') return '#ffe0b2';
    return '#eeeeee';
  }};
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

function Home() {
  const [user, setUser] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [lastRecord, setLastRecord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loadingUserData, setLoadingUserData] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  // State for confirmation modal
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingAttendance, setPendingAttendance] = useState(null);
  const [attendanceNotes, setAttendanceNotes] = useState('');

  useEffect(() => {
    // Get current user
    if (currentUser) {
      const userObj = {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName || currentUser.email.split('@')[0]
      };
      setUser(userObj);
      fetchUserData(currentUser.uid);
    }
  }, [currentUser]);
  
  // Fetch user's attendance status
  useEffect(() => {
    if (user?.uid) {
      fetchAttendanceStatus();
    }
  }, [user]);

  const fetchAttendanceStatus = async () => {
    try {
      // Query the latest attendance record for the user
      const attendanceRef = collection(db, 'attendance');
      
      try {
        // First try with the index-dependent query
        const q = query(
          attendanceRef,
          where('userId', '==', user.uid),
          orderBy('timestamp', 'desc'),
          limit(1)
        );
        
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const latestRecord = querySnapshot.docs[0].data();
          setLastRecord(latestRecord);
          setAttendanceStatus(latestRecord.type);
        } else {
          // No attendance records found
          setAttendanceStatus(null);
          setLastRecord(null);
        }
      } catch (indexError) {
        // Check if this is an index building error
        if (indexError.message && indexError.message.includes('index is currently building')) {
          console.log('Index is still building, using fallback method');
          
          // Fallback: Get all attendance records for the user without ordering
          const fallbackQuery = query(
            attendanceRef,
            where('userId', '==', user.uid)
          );
          
          const fallbackSnapshot = await getDocs(fallbackQuery);
          
          if (!fallbackSnapshot.empty) {
            // Manually find the latest record by comparing timestamps
            let latestRecord = null;
            let latestTime = new Date(0); // Start with oldest possible date
            
            fallbackSnapshot.forEach(doc => {
              const data = doc.data();
              const recordTime = data.timestamp?.toDate() || new Date(0);
              
              if (recordTime > latestTime) {
                latestTime = recordTime;
                latestRecord = data;
              }
            });
            
            if (latestRecord) {
              setLastRecord(latestRecord);
              setAttendanceStatus(latestRecord.type);
            } else {
              setAttendanceStatus(null);
              setLastRecord(null);
            }
          } else {
            // No attendance records found
            setAttendanceStatus(null);
            setLastRecord(null);
          }
          
          // Show a more user-friendly message
          toast.info('System is updating. Some features may be temporarily limited.', {
            autoClose: 5000,
            hideProgressBar: false,
          });
        } else {
          // This is some other error, rethrow it
          throw indexError;
        }
      }
    } catch (error) {
      console.error('Error fetching attendance status:', error);
      
      // More user-friendly error message
      if (error.message && error.message.includes('index')) {
        toast.warning('System is updating attendance records. Please try again in a few minutes.');
      } else {
        toast.error('Unable to fetch your attendance status. Please refresh the page.');
      }
    }
  };

  // Fetch additional user data from Firestore
  const fetchUserData = async (userId) => {
    if (!userId) return;
    
    try {
      setLoadingUserData(true);
      
      // Check if this user has a pending registration request
      try {
        const pendingQuery = query(
          collection(db, 'registration_requests'),
          where('userId', '==', userId)
        );
        const pendingSnapshot = await getDocs(pendingQuery);
        
        if (!pendingSnapshot.empty) {
          // User has a pending request
          toast.info('Your registration request is pending approval. You will be notified when approved.');
          await auth.signOut();
          navigate('/login');
          return;
        }
      } catch (error) {
        console.error('Error checking pending status:', error);
      }
      
      // If we get here, check for the user in the users collection
      const userDocRef = doc(db, 'users', userId);
      const userDocSnap = await getDoc(userDocRef);
      
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setUserData(userData);
      } else {
        console.log('No user data found in Firestore');
        
        // If we get here, the user is authenticated but has no data in Firestore
        toast.error('Your account is not properly set up. Please contact an administrator.');
        await auth.signOut();
        navigate('/login');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error('Error loading user data. Please try again later.');
    } finally {
      setLoadingUserData(false);
    }
  };

  const determineStatus = async (type, userId) => {
    if (type === 'Out') {
      return 'Complete'; // Default for time out
    }
    
    // For time in, determine if early, on time, or late
    try {
      // Fetch user's schedule from Firestore
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (!userDoc.exists()) {
        console.warn('User document not found when determining status');
        return 'On Time'; // Default if user not found
      }
      
      const userData = userDoc.data();
      const userSchedule = userData.schedule || [];
      
      const now = new Date();
      const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
      
      // Find today's schedule if it exists
      const todaySchedule = userSchedule && Array.isArray(userSchedule) ?
        userSchedule.find(s => s.dayOfWeek === currentDay) : null;
      
      if (!todaySchedule) {
        console.log('No schedule found for today:', currentDay);
        return 'On Time'; // Default if no schedule found
      }
      
      console.log('Found schedule for today:', todaySchedule);
      
      // Parse schedule time
      const [scheduledHour, scheduledMinute] = todaySchedule.timeIn.split(':').map(Number);
      
      // Create Date objects for comparison
      const scheduleDate = new Date();
      scheduleDate.setHours(scheduledHour, scheduledMinute, 0, 0);
      
      // Calculate time difference in minutes
      const diffMinutes = Math.round((now - scheduleDate) / (1000 * 60));
      console.log('Time difference in minutes:', diffMinutes);
      
      // Determine status based on time difference
      if (diffMinutes < -15) { // More than 15 minutes early
        return 'Early';
      } else if (diffMinutes <= 15) { // Within 15 minutes of scheduled time
        return 'On Time';
      } else { // More than 15 minutes late
        return 'Late';
      }
    } catch (error) {
      console.error('Error determining status:', error);
      return 'On Time'; // Default on error
    }
  };
  
  const handleTimeInOutClick = async (type) => {
    if (!user) return;
    
    setLoading(true);
    
    try {
      const timestamp = Timestamp.now();
      const status = await determineStatus(type, user.uid);
      
      // Create attendance data object
      const attendanceData = {
        userId: user.uid,
        email: user.email,
        name: user.displayName,
        type,
        status,
        timestamp,
        notes: ''
      };
      
      // Reset notes field and store the pending attendance data
      setAttendanceNotes('');
      setPendingAttendance(attendanceData);
      setShowConfirmModal(true);
    } catch (error) {
      console.error('Error preparing time in/out:', error);
      toast.error('Failed to prepare time in/out. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleConfirmTimeInOut = async () => {
    if (!pendingAttendance) return;
    
    setLoading(true);
    
    try {
      // Create a copy of the attendance data without the status field
      const { status, ...attendanceDataToStore } = pendingAttendance;
      
      // Add the notes from the text area
      attendanceDataToStore.notes = attendanceNotes;
      
      // Add the attendance record to Firestore (without status field)
      const docRef = await addDoc(collection(db, 'attendance'), attendanceDataToStore);
      
      toast.success(`Time ${pendingAttendance.type} recorded successfully!`);
      setAttendanceStatus(pendingAttendance.type);
      
      // Update lastRecord with the notes
      const updatedRecord = {
        ...pendingAttendance,
        notes: attendanceNotes
      };
      setLastRecord(updatedRecord); // Keep the status in the UI for display purposes
      
      // Close the confirmation modal
      setShowConfirmModal(false);
      setPendingAttendance(null);
      setAttendanceNotes('');
      
      console.log(`Time ${pendingAttendance.type} recorded with ID: ${docRef.id}`);
    } catch (error) {
      console.error(`Error recording time ${pendingAttendance.type}:`, error);
      toast.error(`Failed to record time ${pendingAttendance.type}`);
    } finally {
      setLoading(false);
    }
  };
  
  const handleCancelTimeInOut = () => {
    setShowConfirmModal(false);
    setPendingAttendance(null);
    setAttendanceNotes('');
  };

  return (
    <>
      <DashboardLayout
        user={user}
        activeTab="home"
        attendanceStatus={attendanceStatus}
        loading={loading}
        handleTimeInOut={handleTimeInOutClick}
        lastRecord={lastRecord}
        isSuperAdmin={userData?.role === 'super_admin'}
        userData={userData}
        setUserData={setUserData}
      >
        <DashboardHome 
          attendanceStatus={attendanceStatus} 
          lastRecord={lastRecord} 
        />
      </DashboardLayout>
      
      {/* Confirmation Modal */}
      {showConfirmModal && pendingAttendance && (
        <ConfirmationModal>
          <ModalContent>
            <ModalTitle>
              Confirm Time {pendingAttendance.type}
              {pendingAttendance.status && (
                <StatusTag status={pendingAttendance.status}>
                  {pendingAttendance.status}
                </StatusTag>
              )}
            </ModalTitle>
            <ModalBody>
              <p>You are about to record your time {pendingAttendance.type.toLowerCase()}.</p>
              <p>Would you like to add any notes?</p>
              <TextArea
                placeholder="Optional notes..."
                value={attendanceNotes}
                onChange={(e) => setAttendanceNotes(e.target.value)}
              />
            </ModalBody>
            <ModalButtons>
              <CancelButton onClick={handleCancelTimeInOut}>
                Cancel
              </CancelButton>
              <ConfirmButton onClick={handleConfirmTimeInOut} disabled={loading}>
                {loading ? 'Processing...' : 'Confirm'}
              </ConfirmButton>
            </ModalButtons>
          </ModalContent>
        </ConfirmationModal>
      )}
    </>
  );
}

export default Home;
