import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { collection, addDoc, query, where, orderBy, limit, getDocs, Timestamp, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { House, SignOut, Calendar, Clock, User, SignIn, SignOut as SignOutIcon } from 'phosphor-react';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background: linear-gradient(180deg, #6e8efb 0%, #a777e3 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: bold;
  }
`;

const SidebarTimeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  border: none;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
`;

const TimeInSidebarButton = styled(SidebarTimeButton)`
  background-color: #4caf50;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: #43a047;
  }
`;

const TimeOutSidebarButton = styled(SidebarTimeButton)`
  background-color: #f44336;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: #e53935;
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f5f7fb;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserName = styled.div`
  font-weight: 500;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const TimeButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const TimeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const TimeInButton = styled(TimeButton)`
  background-color: #4caf50;
  color: white;
  border: none;
  
  &:hover:not(:disabled) {
    background-color: #43a047;
    transform: translateY(-2px);
  }
`;

const TimeOutButton = styled(TimeButton)`
  background-color: #f44336;
  color: white;
  border: none;
  
  &:hover:not(:disabled) {
    background-color: #e53935;
    transform: translateY(-2px);
  }
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 0.5rem;
  
  background-color: ${props => {
    switch(props.status) {
      case 'In': return '#e8f5e9';
      case 'Out': return '#ffebee';
      default: return '#f5f5f5';
    }
  }};
  
  color: ${props => {
    switch(props.status) {
      case 'In': return '#2e7d32';
      case 'Out': return '#c62828';
      default: return '#757575';
    }
  }};
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 1rem;
`;

const CardContent = styled.div`
  color: #666;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

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
      const userDocRef = doc(db, 'users', userId);
      const userDocSnap = await getDoc(userDocRef);
      
      if (userDocSnap.exists()) {
        setUserData(userDocSnap.data());
      } else {
        console.log('No user data found in Firestore');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
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
  
  const handleLogout = async () => {
    try {
      // Check for development fallback user
      const isEmulatorMode = import.meta.env.DEV && import.meta.env.VITE_USE_EMULATORS === 'true';
      const devUser = localStorage.getItem('dev_user');
      
      if (isEmulatorMode && devUser && !auth.currentUser) {
        // Handle development logout
        localStorage.removeItem('dev_user');
        toast.success('Logged out successfully');
        navigate('/');
        return;
      }
      
      // Normal Firebase logout
      await signOut(auth);
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      
      // If network error in development, still allow logout
      if (error.code === 'auth/network-request-failed' && import.meta.env.DEV) {
        localStorage.removeItem('dev_user');
        toast.success('Logged out successfully');
        navigate('/');
      } else {
        toast.error('Failed to log out');
      }
    }
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <Logo>Hyacinth</Logo>
        
        <NavItem 
          className={activeTab === 'dashboard' ? 'active' : ''} 
          onClick={() => setActiveTab('dashboard')}
        >
          <Icon><House size={16} /></Icon>
          Dashboard
        </NavItem>
        
        <NavItem 
          className={activeTab === 'attendance' ? 'active' : ''} 
          onClick={() => setActiveTab('attendance')}
        >
          <Icon><Clock size={16} /></Icon>
          Attendance
        </NavItem>
        
        <NavItem 
          className={activeTab === 'schedule' ? 'active' : ''} 
          onClick={() => setActiveTab('schedule')}
        >
          <Icon><Calendar size={16} /></Icon>
          Schedule
        </NavItem>
        
        <NavItem 
          className={activeTab === 'profile' ? 'active' : ''} 
          onClick={() => setActiveTab('profile')}
        >
          <Icon><User size={16} /></Icon>
          Profile
        </NavItem>
        
        <div style={{ marginTop: 'auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem', opacity: '0.8' }}>Attendance Actions</p>
            
            <TimeInSidebarButton 
              onClick={() => handleTimeInOut('In')} 
              disabled={loading || attendanceStatus === 'In'}
            >
              <Icon><SignIn size={16} /></Icon>
              Time In
            </TimeInSidebarButton>
            
            <TimeOutSidebarButton 
              onClick={() => handleTimeInOut('Out')} 
              disabled={loading || attendanceStatus === 'Out' || !attendanceStatus}
            >
              <Icon><SignOutIcon size={16} /></Icon>
              Time Out
            </TimeOutSidebarButton>
            
            {attendanceStatus && (
              <div style={{ padding: '0.5rem 0', textAlign: 'center', fontSize: '0.85rem' }}>
                Status: <strong>{attendanceStatus === 'In' ? 'Clocked In' : 'Clocked Out'}</strong>
              </div>
            )}
          </div>
          
          <NavItem onClick={handleLogout}>
            <Icon><SignOut size={16} /></Icon>
            Logout
          </NavItem>
        </div>
      </Sidebar>
      
      <Content>
        <Header>
          <Title>
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'attendance' && 'Attendance'}
            {activeTab === 'schedule' && 'Schedule'}
            {activeTab === 'profile' && 'Profile'}
          </Title>
          
          <UserInfo>
            <UserName>{user?.displayName}</UserName>
            <LogoutButton onClick={handleLogout}>
              <SignOut size={16} />
              Logout
            </LogoutButton>
          </UserInfo>
        </Header>
        
        {activeTab === 'dashboard' && (
          <>
            <Grid>
              <Card>
                <CardTitle>Today's Schedule</CardTitle>
                <CardContent>
                  <p>No schedule for today</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardTitle>Attendance Status</CardTitle>
                <CardContent>
                  {attendanceStatus ? (
                    <>
                      <p>Current Status: 
                        <StatusBadge status={attendanceStatus}>
                          {attendanceStatus === 'In' ? 'Clocked In' : 'Clocked Out'}
                        </StatusBadge>
                      </p>
                      {lastRecord && (
                        <p>Last action: {new Date(lastRecord.timestamp.toDate()).toLocaleString()}</p>
                      )}
                    </>
                  ) : (
                    <p>You haven't clocked in today</p>
                  )}
                  

                </CardContent>
              </Card>
              
              <Card>
                <CardTitle>Recent Activity</CardTitle>
                <CardContent>
                  {lastRecord ? (
                    <p>Last {lastRecord.type === 'In' ? 'Time In' : 'Time Out'}: {new Date(lastRecord.timestamp.toDate()).toLocaleString()}</p>
                  ) : (
                    <p>No recent activity</p>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </>
        )}
        
        {activeTab === 'attendance' && (
          <Card>
            <CardTitle>Attendance Records</CardTitle>
            <CardContent>
              <p>No attendance records found</p>
            </CardContent>
          </Card>
        )}
        
        {activeTab === 'schedule' && (
          <Card>
            <CardTitle>Your Schedule</CardTitle>
            <CardContent>
              <p>No schedule assigned yet</p>
            </CardContent>
          </Card>
        )}
        
        {activeTab === 'profile' && (
          <Card>
            <CardTitle>User Profile</CardTitle>
            <CardContent>
              {loadingUserData ? (
                <p>Loading user data...</p>
              ) : (
                <>
                  <p><strong>Email:</strong> {user?.email}</p>
                  <p><strong>Name:</strong> {user?.displayName}</p>
                  <p><strong>User ID:</strong> {user?.uid}</p>
                  <p><strong>Position:</strong> {userData?.position || 'Not specified'}</p>
                  <p><strong>Role:</strong> {userData?.role || 'Not specified'}</p>
                  
                  <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                    <h4 style={{ marginTop: 0 }}>Additional Information</h4>
                    {userData ? (
                      Object.entries(userData)
                        .filter(([key]) => !['position', 'role'].includes(key))
                        .map(([key, value]) => (
                          <p key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {
                            typeof value === 'object' ? JSON.stringify(value) : value
                          }</p>
                        ))
                    ) : (
                      <p>No additional information available</p>
                    )}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        )}
      </Content>
    </DashboardContainer>
  );
}

export default Dashboard;
