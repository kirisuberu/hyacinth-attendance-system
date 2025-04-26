import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, query, where, orderBy, limit, getDocs, Timestamp, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { toast } from 'react-toastify';

// Import dashboard components
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardHome from '../components/dashboard/DashboardHome';
import AttendanceView from '../components/dashboard/AttendanceView';
import ScheduleView from '../components/dashboard/ScheduleView';
import ProfileView from '../components/dashboard/ProfileView';
import RegistrationRequestsView from '../components/dashboard/RegistrationRequestsView';
import UserManagementView from '../components/dashboard/UserManagementView';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
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
  
  const handleTimeInOut = async (type) => {
    if (!user) return;
    
    setLoading(true);
    
    try {
      const timestamp = Timestamp.now();
      const status = type === 'In' ? 'On Time' : ''; // You can implement logic for Early, Late, etc.
      
      // Create attendance record
      const attendanceData = {
        userId: user.uid,
        email: user.email,
        name: user.displayName,
        type,
        status,
        timestamp,
        notes: ''
      };
      
      await addDoc(collection(db, 'attendance'), attendanceData);
      
      toast.success(`Time ${type} recorded successfully!`);
      setAttendanceStatus(type);
      setLastRecord(attendanceData);
    } catch (error) {
      console.error(`Error recording time ${type}:`, error);
      toast.error(`Failed to record time ${type}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout
      user={user}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      attendanceStatus={attendanceStatus}
      loading={loading}
      handleTimeInOut={handleTimeInOut}
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
        <ScheduleView user={user} />
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
  );
}

export default Dashboard;
