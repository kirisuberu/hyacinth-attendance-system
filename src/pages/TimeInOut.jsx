import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'
import { collection, query, where, getDocs, Timestamp, doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { recordAttendance } from '../utils/attendanceService'
import TopBar from '../components/TopBar'
import AttendanceConfirmationModal from '../components/AttendanceConfirmationModal'
import styled from 'styled-components'
import EarlyINGif from '../assets/gif/TimeInOut/EarlyIN.gif';
import EarlyOUTGif from '../assets/gif/TimeInOut/EarlyOUT.gif';
import LateINGif from '../assets/gif/TimeInOut/LateIN.gif';
import OnTimeINGif from '../assets/gif/TimeInOut/OnTimeIN.gif';
import OnTimeOUTGif from '../assets/gif/TimeInOut/OnTimeOUT.gif';
import OvertimeOUTGif from '../assets/gif/TimeInOut/OvertimeOUT.gif';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`

const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TimeBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #1f2937;
`

const UserInfo = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 6px;
`

const UserText = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #4b5563;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`

const Button = styled.button`
  flex: 1;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const TimeInButton = styled(Button)`
  background-color: #10b981;
  color: white;
  border: none;
  
  &:hover:not(:disabled) {
    background-color: #059669;
  }
`

const TimeOutButton = styled(Button)`
  background-color: #ef4444;
  color: white;
  border: none;
  
  &:hover:not(:disabled) {
    background-color: #dc2626;
  }
`

const StatusBox = styled.div`
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
`

const StatusText = styled.p`
  margin: 0.5rem 0;
  color: ${props => {
    if (props.status?.toLowerCase().includes('late')) return '#dc2626';
    if (props.status?.toLowerCase().includes('early') && !props.status?.toLowerCase().includes('out')) return '#2563eb';
    if (props.status?.toLowerCase().includes('early out')) return '#dc2626';
    if (props.status?.toLowerCase().includes('overtime')) return '#f59e0b';
    if (props.status?.toLowerCase().includes('on time')) return '#059669';
    return '#4b5563';
  }};
  font-weight: ${props => props.bold ? '600' : 'normal'};
`

const TimeDifferenceBox = styled.div`
  margin-top: 0.75rem;
  padding: 0.75rem;
  border-radius: 6px;
  background-color: ${props => {
    if (props.status?.toLowerCase().includes('late')) return '#fee2e2';
    if (props.status?.toLowerCase().includes('early') && !props.status?.toLowerCase().includes('out')) return '#dbeafe';
    if (props.status?.toLowerCase().includes('early out')) return '#fee2e2';
    if (props.status?.toLowerCase().includes('overtime')) return '#fef3c7';
    if (props.status?.toLowerCase().includes('on time')) return '#dcfce7';
    return '#f3f4f6';
  }};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TimeDifferenceLabel = styled.span`
  font-weight: 600;
  color: ${props => {
    if (props.status?.toLowerCase().includes('late')) return '#991b1b';
    if (props.status?.toLowerCase().includes('early') && !props.status?.toLowerCase().includes('out')) return '#1e40af';
    if (props.status?.toLowerCase().includes('early out')) return '#991b1b';
    if (props.status?.toLowerCase().includes('overtime')) return '#92400e';
    if (props.status?.toLowerCase().includes('on time')) return '#166534';
    return '#4b5563';
  }};
`

const TimeDifferenceValue = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => {
    if (props.status?.toLowerCase().includes('late')) return '#991b1b';
    if (props.status?.toLowerCase().includes('early') && !props.status?.toLowerCase().includes('out')) return '#1e40af';
    if (props.status?.toLowerCase().includes('early out')) return '#991b1b';
    if (props.status?.toLowerCase().includes('overtime')) return '#92400e';
    if (props.status?.toLowerCase().includes('on time')) return '#166534';
    return '#4b5563';
  }};
`

const LogoutButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #6b7280;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #4b5563;
  }
`

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.2rem;
  color: #4b5563;
`

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
`;

const ConfirmationPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1100;
  max-width: 90%;
  width: 400px;
`;

const PopupTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #111827;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: #10B981;
  }
`;

const PopupContent = styled.div`
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #4B5563;
  
  p {
    margin: 0.5rem 0;
  }
`;

const GifContainer = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  
  img {
    width: 100%;
    border-radius: 8px;
  }
`;

const PopupButton = styled.button`
  padding: 0.5rem 1.5rem;
  background: #10B981;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #059669;
  }
`;

function TimeInOut() {
  const [loading, setLoading] = useState(true)
  const [todayRecord, setTodayRecord] = useState(null)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [pendingAction, setPendingAction] = useState(null)
  const [pendingStatus, setPendingStatus] = useState('')
  const [confirmationPopup, setConfirmationPopup] = useState({ 
    show: false, 
    message: '', 
    type: '',
    status: ''
  });
  const [canTimeIn, setCanTimeIn] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    checkTodayAttendance()
    fetchUserInfo()
  }, [])

  const fetchUserInfo = async () => {
    if (!auth.currentUser) {
      navigate('/');
      return;
    }

    try {
      setUserEmail(auth.currentUser.email);
      
      // First try to find any existing user document with this email
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', auth.currentUser.email));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const existingUserDoc = querySnapshot.docs[0];
        const existingUserData = existingUserDoc.data();
        
        // If the document ID doesn't match the auth UID, we need to migrate it
        if (existingUserDoc.id !== auth.currentUser.uid) {
          // Create new document with auth UID
          await setDoc(doc(db, 'users', auth.currentUser.uid), {
            ...existingUserData,
            updatedAt: new Date().toISOString()
          });
          
          // Delete the old document
          await deleteDoc(doc(db, 'users', existingUserDoc.id));
          
          setUserName(existingUserData.name);
        } else {
          setUserName(existingUserData.name);
        }
      } else {
        // No existing user document found by email, check by UID
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (userDoc.exists()) {
          setUserName(userDoc.data().name);
        } else {
          // Create a new user document if none exists
          const newUserData = {
            email: auth.currentUser.email,
            name: auth.currentUser.displayName || auth.currentUser.email.split('@')[0],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          await setDoc(doc(db, 'users', auth.currentUser.uid), newUserData);
          setUserName(newUserData.name);
        }
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    } finally {
      setLoading(false);
    }
  }

  const checkTodayAttendance = async () => {
    if (!auth.currentUser) {
      navigate('/')
      return
    }

    try {
      // Get today's date at midnight in the local timezone
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      // Query attendance records for today
      const q = query(
        collection(db, 'attendance'),
        where('userId', '==', auth.currentUser.uid),
        where('timestamp', '>=', Timestamp.fromDate(today))
      )

      const querySnapshot = await getDocs(q)
      console.log('Found records:', querySnapshot.size)
      
      if (!querySnapshot.empty) {
        // Get all records and sort by timestamp
        const records = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        
        // Sort by timestamp in descending order to get the latest
        records.sort((a, b) => {
          const timestampA = a.timestamp?.seconds || 0
          const timestampB = b.timestamp?.seconds || 0
          return timestampB - timestampA
        })

        const latestRecord = records[0]
        console.log('Latest record for today:', latestRecord)
        
        // Format the record with time difference information
        setTodayRecord({
          ...latestRecord,
          // Extract time difference values from the record
          timeDiffHours: latestRecord.timeDiff?.hours || 0,
          timeDiffMinutes: latestRecord.timeDiff?.minutes || 0,
          // Set status from the record
          status: latestRecord.status || ''
        })
        
        // Check if the latest record is a time-in and disable the time-in button
        setCanTimeIn(latestRecord.type !== 'IN')
      } else {
        console.log('No records found for today')
        setTodayRecord(null)
        setCanTimeIn(true)
      }
    } catch (error) {
      console.error('Error checking attendance:', error)
    } finally {
      setLoading(false)
    }
  }

  const getGifSource = (status, type) => {
    if (!status) return null;
    
    const statusLower = status.toLowerCase();
    const upperType = type.toUpperCase();
    
    if (upperType === 'IN') {
      if (statusLower.includes('early')) return EarlyINGif;
      if (statusLower.includes('late')) return LateINGif;
      if (statusLower.includes('on time')) return OnTimeINGif;
    } else if (upperType === 'OUT') {
      if (statusLower.includes('early out')) return EarlyOUTGif;
      if (statusLower.includes('overtime')) return OvertimeOUTGif;
      if (statusLower.includes('on time')) return OnTimeOUTGif;
    }
    
    return null;
  };

  const handleTimeButtonClick = (type) => {
    // Determine the expected status based on the current time and user's schedule
    const determineExpectedStatus = () => {
      if (!auth.currentUser) return '';
      
      // Get current time
      const now = new Date();
      console.log('Current time:', now.toLocaleTimeString());
      
      // Create a default schedule if none exists
      const defaultSchedule = {
        startTime: '09:00',
        endTime: '18:00'
      };
      
      // Use the current schedule or default
      let currentSchedule = defaultSchedule;
      
      // Try to get the user's schedule if available
      if (auth.currentUser) {
        console.log('Determining status for user:', auth.currentUser.uid);
        console.log('Current record:', todayRecord);
        
        // If we have a schedule from the record, use it
        if (todayRecord && todayRecord.schedules && todayRecord.schedules.length > 0) {
          // Sort schedules by start time
          const sortedSchedules = [...todayRecord.schedules].sort((a, b) => {
            const [aHours, aMinutes] = a.startTime.split(':').map(Number);
            const [bHours, bMinutes] = b.startTime.split(':').map(Number);
            return (aHours * 60 + aMinutes) - (bHours * 60 + bMinutes);
          });
          
          currentSchedule = sortedSchedules[0]; // Use the first schedule
          console.log('Using schedule from record:', currentSchedule);
        } else {
          console.log('No schedule found, using default:', defaultSchedule);
        }
      }
      
      // Important: Use the correct type for comparison - this was causing the issue
      const actionType = type.toUpperCase();
      console.log('Action type for status determination:', actionType);
      
      // For time in, compare with start time
      if (actionType === 'IN') {
        const [scheduleHours, scheduleMinutes] = currentSchedule.startTime.split(':').map(Number);
        const scheduleDate = new Date();
        scheduleDate.setHours(scheduleHours, scheduleMinutes, 0, 0);
        
        const diffMinutes = Math.round((now - scheduleDate) / (1000 * 60));
        console.log('Time IN diff minutes:', diffMinutes, 'Schedule time:', scheduleHours + ':' + scheduleMinutes);
        
        if (diffMinutes <= -60) return 'Early';
        if (diffMinutes > -60 && diffMinutes <= 5) return 'On Time';
        if (diffMinutes > 5) return 'Late';
      }
      
      // For time out, compare with end time
      if (actionType === 'OUT') {
        const [scheduleHours, scheduleMinutes] = currentSchedule.endTime.split(':').map(Number);
        const scheduleDate = new Date();
        scheduleDate.setHours(scheduleHours, scheduleMinutes, 0, 0);
        
        const diffMinutes = Math.round((now - scheduleDate) / (1000 * 60));
        console.log('Time OUT diff minutes:', diffMinutes, 'Schedule time:', scheduleHours + ':' + scheduleMinutes);
        
        if (diffMinutes < 0) return 'Early Out';
        if (diffMinutes >= 0 && diffMinutes <= 5) return 'On Time';
        if (diffMinutes > 5) return 'Overtime';
      }
      
      return '';
    };
    
    // Calculate a fresh status for this action, don't use the previous record's status
    const expectedStatus = determineExpectedStatus();
    console.log('Calculated expected status for', type, ':', expectedStatus);
    
    // Make sure we're setting the correct status for the current action
    setPendingStatus(expectedStatus);
    setPendingAction(type);
    setShowModal(true);
  }

  const handleTimeRecord = async (type, notes) => {
    try {
      // Set loading state in parent component if needed
      const result = await recordAttendance(
        auth.currentUser.uid,
        type.toUpperCase(),
        notes
      );

      if (!result.success) {
        throw new Error(result.error || 'Failed to record attendance');
      }

      // Close the modal after successful operation
      setShowModal(false);
      
      // Refresh attendance data
      await checkTodayAttendance();

      // Show status message
      let statusMessage = `${type.toUpperCase()} recorded - ${result.status}`;
      if (result.timeDiff && (result.timeDiff.hours > 0 || result.timeDiff.minutes > 0)) {
        const hours = Math.abs(result.timeDiff.hours);
        const minutes = Math.abs(result.timeDiff.minutes);
        const timeDesc = [];
        if (hours > 0) timeDesc.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
        if (minutes > 0) timeDesc.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
        
        if (timeDesc.length > 0) {
          let diffType = '';
          if (result.status.toLowerCase().includes('late')) {
            diffType = 'late';
          } else if (result.status.toLowerCase().includes('early') && !result.status.toLowerCase().includes('out')) {
            diffType = 'early';
          } else if (result.status.toLowerCase().includes('early out')) {
            diffType = 'early';
          } else if (result.status.toLowerCase().includes('overtime')) {
            diffType = 'overtime';
          }
          
          statusMessage += ` (${timeDesc.join(' and ')}${diffType ? ' ' + diffType : ''})`;
        }
      }
      
      // Show confirmation popup
      setConfirmationPopup({
        show: true,
        message: statusMessage,
        type: type.toUpperCase(),
        status: result.status
      });

    } catch (error) {
      console.error('Error recording time:', error);
      // Modal will handle its own loading state reset on error
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const formatTime = (timestamp) => {
    if (!timestamp) return ''
    return new Date(timestamp.seconds * 1000).toLocaleTimeString()
  }

  if (loading) {
    return <LoadingWrapper>Loading...</LoadingWrapper>
  }

  return (
    <Container>
      <TopBar />
      <ContentWrapper>
        <TimeContainer>
          <TimeBox>
            <Title>Time In/Out</Title>
            <UserInfo>
              <UserText>Name: {userName}</UserText>
              <UserText>Email: {userEmail}</UserText>
            </UserInfo>
            
            <ButtonGroup>
              <TimeInButton 
                onClick={() => handleTimeButtonClick('in')} 
                disabled={!canTimeIn}
              >
                Time In
              </TimeInButton>
              <TimeOutButton 
                onClick={() => handleTimeButtonClick('out')} 
                disabled={!todayRecord || todayRecord?.type === 'OUT'}
              >
                Time Out
                {!todayRecord ? '(No record today)' : todayRecord?.type === 'OUT' ? '(Already out)' : ''}
              </TimeOutButton>
            </ButtonGroup>

            {todayRecord && (
              <StatusBox>
                <StatusText bold>Status: {todayRecord.type === 'IN' ? 'Timed In' : 'Timed Out'}</StatusText>
                <StatusText>Time: {formatTime(todayRecord.timestamp)}</StatusText>
                {todayRecord.status && (
                  <StatusText status={todayRecord.status}>
                    Attendance: {todayRecord.status}
                  </StatusText>
                )}
                
                {(todayRecord.timeDiffHours !== undefined || todayRecord.timeDiffMinutes !== undefined) && (
                  <TimeDifferenceBox status={todayRecord.status}>
                    <TimeDifferenceLabel status={todayRecord.status}>
                      {todayRecord.status?.toLowerCase().includes('late') ? 'Late by:' : 
                       todayRecord.status?.toLowerCase().includes('early') && !todayRecord.status?.toLowerCase().includes('out') ? 'Early by:' :
                       todayRecord.status?.toLowerCase().includes('early out') ? 'Early by:' :
                       todayRecord.status?.toLowerCase().includes('overtime') ? 'Overtime:' : 'Difference:'}
                    </TimeDifferenceLabel>
                    <TimeDifferenceValue status={todayRecord.status}>
                      {todayRecord.timeDiffHours ? `${Math.abs(todayRecord.timeDiffHours)}h ` : ''}
                      {todayRecord.timeDiffMinutes ? `${Math.abs(todayRecord.timeDiffMinutes)}m` : ''}
                    </TimeDifferenceValue>
                  </TimeDifferenceBox>
                )}
              </StatusBox>
            )}

            <LogoutButton onClick={handleLogout}>
              Logout
            </LogoutButton>
          </TimeBox>
        </TimeContainer>
      </ContentWrapper>

      <AttendanceConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={(notes) => handleTimeRecord(pendingAction, notes)}
        type={pendingAction?.toUpperCase()}
        status={pendingStatus}
        userData={{ name: userName, email: userEmail }}
      />
      
      {confirmationPopup.show && (
        <PopupOverlay>
          <ConfirmationPopup>
            <PopupTitle>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {confirmationPopup.type} Recorded
            </PopupTitle>
            
            <PopupContent>
              <p>{confirmationPopup.message}</p>
            </PopupContent>
            
            <PopupButton onClick={() => setConfirmationPopup({ show: false, message: '', type: '', status: '' })}>
              OK
            </PopupButton>
          </ConfirmationPopup>
        </PopupOverlay>
      )}
    </Container>
  )
}

export default TimeInOut