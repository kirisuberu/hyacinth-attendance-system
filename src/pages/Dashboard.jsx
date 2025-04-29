import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, query, where, orderBy, limit, getDocs, Timestamp, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Check, X } from 'phosphor-react';

// Import dashboard components
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardHome from '../components/dashboard/DashboardHome';
import AttendanceView from '../components/dashboard/AttendanceView';
import ScheduleView from '../components/dashboard/ScheduleView';
import ProfileView from '../components/dashboard/ProfileView';
import RegistrationRequestsView from '../components/dashboard/RegistrationRequestsView';
import UserManagementView from '../components/dashboard/UserManagementView';
import AdminPrivilegesView from '../components/dashboard/AdminPrivilegesView';

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

function Dashboard() {
  const [user, setUser] = useState(null);
  // Initialize activeTab from localStorage or default to 'dashboard'
  const [activeTab, setActiveTab] = useState(() => {
    // Try to get the saved tab from localStorage
    const savedTab = localStorage.getItem('activeTab');
    return savedTab || 'dashboard';
  });
  
  // Update localStorage when activeTab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem('activeTab', tab);
  };
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [lastRecord, setLastRecord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loadingUserData, setLoadingUserData] = useState(false);
  const navigate = useNavigate();

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
  
  // Fetch additional user data from Firestore with real-time updates
  const fetchUserData = (userId) => {
    if (!userId) return;
    
    setLoadingUserData(true);
    
    // First, check if this user has been declined or blocked
    const declinedQuery = query(
      collection(db, 'declined_registrations'),
      where('userId', '==', userId)
    );
    
    // Real-time listener for declined status
    const declinedUnsubscribe = onSnapshot(declinedQuery, (declinedSnapshot) => {
      if (!declinedSnapshot.empty) {
        // User was declined, sign them out and redirect to login
        toast.error('Your registration request has been declined. Please contact an administrator.');
        auth.signOut().then(() => navigate('/login'));
        return;
      }
      
      // Check if this user has a pending registration request
      const pendingQuery = query(
        collection(db, 'registration_requests'),
        where('userId', '==', userId)
      );
      
      // Real-time listener for pending status
      const pendingUnsubscribe = onSnapshot(pendingQuery, (pendingSnapshot) => {
        if (!pendingSnapshot.empty) {
          // User has a pending request
          toast.info('Your registration request is pending approval. You will be notified when approved.');
          auth.signOut().then(() => navigate('/login'));
          return;
        }
        
        // If we get here, check for the user in the users collection
        const userDocRef = doc(db, 'users', userId);
        
        // Real-time listener for user data
        const userUnsubscribe = onSnapshot(userDocRef, (userDocSnap) => {
          setLoadingUserData(false);
          
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setUserData(userData);
          } else {
            console.log('No user data found in Firestore');
            
            // If we get here, the user is authenticated but has no data in Firestore
            toast.error('Your account is not properly set up. Please contact an administrator.');
            auth.signOut().then(() => navigate('/login'));
          }
        }, (error) => {
          console.error('Error fetching user data:', error);
          toast.error('Error loading user data. Please try again later.');
          setLoadingUserData(false);
        });
        
        // Return cleanup function
        return () => userUnsubscribe();
      }, (error) => {
        console.error('Error checking pending status:', error);
        setLoadingUserData(false);
      });
      
      // Return cleanup function
      return () => pendingUnsubscribe();
    }, (error) => {
      console.error('Error checking declined status:', error);
      setLoadingUserData(false);
    });
    
    // Return cleanup function
    return () => declinedUnsubscribe();
  };
  
  // Fetch user's attendance status with real-time updates
  useEffect(() => {
    if (user?.uid) {
      // Set up real-time listener for attendance status
      const attendanceUnsubscribe = setupAttendanceListener();
      
      // Cleanup listener on unmount
      return () => {
        if (attendanceUnsubscribe) attendanceUnsubscribe();
      };
    }
  }, [user]);

  const setupAttendanceListener = () => {
    if (!user?.uid) return null;
    
    // Query the latest attendance record for the user
    const attendanceRef = collection(db, 'attendance');
    
    try {
      // Try with a simple query first (no ordering) to avoid index issues
      const safeQuery = query(
        attendanceRef,
        where('userId', '==', user.uid)
      );
      
      // Set up real-time listener with a simple query
      return onSnapshot(safeQuery, (snapshot) => {
        if (!snapshot.empty) {
          // Manually find the latest record by comparing timestamps
          let latestRecord = null;
          let latestTime = new Date(0); // Start with oldest possible date
          
          snapshot.forEach(doc => {
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
      }, (error) => {
        console.error('Error in attendance listener:', error);
        setAttendanceStatus(null);
        setLastRecord(null);
      });
    } catch (error) {
      console.error('Error setting up attendance listener:', error);
      setAttendanceStatus(null);
      setLastRecord(null);
      return null;
    }
  };
  
  // State for confirmation modal
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingAttendance, setPendingAttendance] = useState(null);
  const [attendanceNotes, setAttendanceNotes] = useState('');
  
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
      // Calculate time difference for the record
      let timeDiff = null;
      
      if (pendingAttendance.type === 'In') {
        // For Time In: Calculate difference from scheduled time
        try {
          // Fetch user's schedule from Firestore
          const userDoc = await getDoc(doc(db, 'users', pendingAttendance.userId));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            const userSchedule = userData.schedule || [];
            
            const now = new Date();
            const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
            
            // Find today's schedule if it exists
            const todaySchedule = userSchedule && Array.isArray(userSchedule) ?
              userSchedule.find(s => s.dayOfWeek === currentDay) : null;
            
            if (todaySchedule) {
              // Parse schedule time
              const [scheduledHour, scheduledMinute] = todaySchedule.timeIn.split(':').map(Number);
              
              // Create Date objects for comparison
              const scheduleDate = new Date();
              scheduleDate.setHours(scheduledHour, scheduledMinute, 0, 0);
              
              // Calculate time difference in minutes
              timeDiff = Math.round((now - scheduleDate) / (1000 * 60));
              console.log('Time difference in minutes:', timeDiff);
            }
          }
        } catch (error) {
          console.error('Error calculating time difference:', error);
        }
      } else if (pendingAttendance.type === 'Out') {
        // For Time Out: Calculate difference from last time in
        try {
          // Query the most recent time in record for this user
          const attendanceRef = collection(db, 'attendance');
          const q = query(
            attendanceRef,
            where('userId', '==', pendingAttendance.userId),
            where('type', '==', 'In'),
            orderBy('timestamp', 'desc'),
            limit(1)
          );
          
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            const lastTimeIn = querySnapshot.docs[0].data();
            const lastTimeInDate = lastTimeIn.timestamp.toDate();
            const now = new Date();
            
            // Calculate time difference in minutes
            timeDiff = Math.round((now - lastTimeInDate) / (1000 * 60));
            console.log('Time worked in minutes:', timeDiff);
            
            // Determine if shift is complete based on scheduled duration
            const userDoc = await getDoc(doc(db, 'users', pendingAttendance.userId));
            if (userDoc.exists()) {
              const userData = userDoc.data();
              const userSchedule = userData.schedule || [];
              
              const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][lastTimeInDate.getDay()];
              
              // Find the schedule for the day of the time in
              const daySchedule = userSchedule && Array.isArray(userSchedule) ?
                userSchedule.find(s => s.dayOfWeek === currentDay) : null;
              
              if (daySchedule && daySchedule.shiftDuration) {
                const scheduledMinutes = daySchedule.shiftDuration * 60;
                
                // Update status based on scheduled duration
                if (timeDiff < scheduledMinutes - 30) { // 30 minutes early
                  pendingAttendance.status = 'Incomplete';
                } else if (timeDiff > scheduledMinutes + 30) { // 30 minutes overtime
                  pendingAttendance.status = 'Overtime';
                } else {
                  pendingAttendance.status = 'Complete';
                }
              }
            }
          }
        } catch (error) {
          console.error('Error calculating time worked:', error);
        }
      }
      
      // Prepare attendance data to store
      const attendanceDataToStore = {
        ...pendingAttendance,
        notes: attendanceNotes
      };
      
      // Add timeDiff if calculated
      if (timeDiff !== null) {
        attendanceDataToStore.timeDiff = timeDiff;
      }
      
      // Add the attendance record to Firestore (including status field)
      const docRef = await addDoc(collection(db, 'attendance'), attendanceDataToStore);
      
      toast.success(`Time ${pendingAttendance.type} recorded successfully!`);
      setAttendanceStatus(pendingAttendance.type);
      
      // Update lastRecord with the notes
      const updatedRecord = {
        ...pendingAttendance,
        notes: attendanceNotes,
        timeDiff: timeDiff
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
  
  // Legacy function for backward compatibility
  const handleTimeInOut = async (type) => {
    await handleTimeInOutClick(type);
  };

  return (
    <>
      <DashboardLayout 
        user={user}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        attendanceStatus={attendanceStatus}
        loading={loading}
        handleTimeInOut={handleTimeInOutClick}
        lastRecord={lastRecord}
        isSuperAdmin={userData?.role === 'super_admin'}
        userData={userData}
        setUserData={setUserData}
      >
        {activeTab === 'dashboard' && (
          <DashboardHome 
            attendanceStatus={attendanceStatus} 
            lastRecord={lastRecord} 
          />
        )}

        {activeTab === 'attendance' && (
          <AttendanceView user={user} />
        )}
        
        {activeTab === 'schedule' && (
          <ScheduleView user={user} userData={userData} />
        )}
        
        {activeTab === 'profile' && (
          <ProfileView 
            user={user} 
            userData={userData} 
            loadingUserData={loadingUserData} 
          />
        )}

        {activeTab === 'registration_requests' && (userData?.role === 'super_admin' || (userData?.role === 'admin' && userData?.privileges?.canManageRegistrations !== false)) && (
          <RegistrationRequestsView />
        )}
        
        {activeTab === 'user_management' && (userData?.role === 'super_admin' || (userData?.role === 'admin' && userData?.privileges?.canManageUsers !== false)) && (
          <UserManagementView isSuperAdmin={userData?.role === 'super_admin'} />
        )}
        
        {activeTab === 'admin_privileges' && userData?.role === 'super_admin' && (
          <AdminPrivilegesView />
        )}
      </DashboardLayout>
      
      {/* Confirmation Modal */}
      {showConfirmModal && pendingAttendance && (
        <ConfirmationModal>
          <ModalContent>
            <ModalTitle>
              Confirm Time {pendingAttendance.type}
            </ModalTitle>
            <ModalBody>
              <p><strong>Time:</strong> {pendingAttendance.timestamp.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</p>
              <p><strong>Date:</strong> {pendingAttendance.timestamp.toDate().toLocaleDateString()}</p>
              <p>
                <strong>Status:</strong> 
                <StatusTag status={pendingAttendance.status}>
                  {pendingAttendance.status}
                </StatusTag>
              </p>
              <div style={{ marginTop: '1rem' }}>
                <strong>Notes (Optional):</strong>
                <TextArea 
                  value={attendanceNotes}
                  onChange={(e) => setAttendanceNotes(e.target.value)}
                  placeholder="Add any notes about this attendance record..."
                />
              </div>
            </ModalBody>
            <ModalButtons>
              <CancelButton onClick={handleCancelTimeInOut}>
                <X size={16} style={{ marginRight: '4px' }} />
                Cancel
              </CancelButton>
              <ConfirmButton onClick={handleConfirmTimeInOut}>
                <Check size={16} style={{ marginRight: '4px' }} />
                Confirm
              </ConfirmButton>
            </ModalButtons>
          </ModalContent>
        </ConfirmationModal>
      )}
    </>
  );
}

export default Dashboard;
