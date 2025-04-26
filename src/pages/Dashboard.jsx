import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the new dashboard home page
    navigate('/dashboard');
  }, [navigate]);
  
  // Fetch additional user data from Firestore
  const fetchUserData = async (userId) => {
    if (!userId) return;
    
    try {
      setLoadingUserData(true);
      
      // First, check if this user has been declined or blocked
      try {
        // Query the declined_registrations collection to see if this user was declined
        const declinedQuery = query(
          collection(db, 'declined_registrations'),
          where('userId', '==', userId)
        );
        const declinedSnapshot = await getDocs(declinedQuery);
        
        if (!declinedSnapshot.empty) {
          // User was declined, sign them out and redirect to login
          toast.error('Your registration request has been declined. Please contact an administrator.');
          await auth.signOut();
          navigate('/login');
          return;
        }
      } catch (error) {
        console.error('Error checking declined status:', error);
      }
      
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
        // This could be a new user or a user whose data was deleted
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
      
      return null;
      <DashboardHome 
          attendanceStatus={attendanceStatus} 
          lastRecord={lastRecord} 
        />
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
  
  // Legacy function for backward compatibility
  const handleTimeInOut = async (type) => {
    await handleTimeInOutClick(type);
  };

  return (
    <>
      <DashboardLayout
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
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

      {activeTab === 'registration_requests' && userData?.role === 'super_admin' && (
        <RegistrationRequestsView />
      )}
      
      {activeTab === 'user_management' && userData?.role === 'super_admin' && (
        <UserManagementView />
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
