import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'
import { collection, query, where, getDocs, Timestamp, doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { recordAttendance } from '../utils/attendanceService'
import TopBar from '../components/TopBar'
import AttendanceConfirmationModal from '../components/AttendanceConfirmationModal'
import styled from 'styled-components'

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
    if (props.status?.toLowerCase().includes('early')) return '#2563eb';
    if (props.status?.toLowerCase().includes('on time')) return '#059669';
    return '#4b5563';
  }};
  font-weight: ${props => props.bold ? '600' : 'normal'};
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

function TimeInOut() {
  const [loading, setLoading] = useState(true)
  const [todayRecord, setTodayRecord] = useState(null)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [pendingAction, setPendingAction] = useState(null)
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
        
        // Format the record with status information
        setTodayRecord({
          ...latestRecord,
          formattedStatus: latestRecord.status 
            ? `${latestRecord.status}${latestRecord.timeDiffHours || latestRecord.timeDiffMinutes 
              ? ` (${latestRecord.timeDiffHours ? `${latestRecord.timeDiffHours}h ` : ''}${latestRecord.timeDiffMinutes}m)` 
              : ''}`
            : ''
        })
      } else {
        console.log('No records found for today')
        setTodayRecord(null)
      }
    } catch (error) {
      console.error('Error checking attendance:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleTimeRecord = async (type, notes) => {
    try {
      const result = await recordAttendance(
        auth.currentUser.uid,
        auth.currentUser.email,
        userName,
        type.toUpperCase(),
        notes
      );

      if (!result.success) {
        throw new Error(result.error || 'Failed to record attendance');
      }

      setShowModal(false);
      checkTodayAttendance();

      // Show status message
      let statusMessage = `${type.toUpperCase()} recorded - ${result.status}`;
      if (result.timeDiff) {
        const hours = Math.abs(result.timeDiff.hours);
        const minutes = Math.abs(result.timeDiff.minutes);
        const timeDesc = [];
        if (hours > 0) timeDesc.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
        if (minutes > 0) timeDesc.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
        if (timeDesc.length > 0) {
          statusMessage += ` (${timeDesc.join(' and ')}${result.timeDiff.totalMinutes < 0 ? ' early' : ' late'})`;
        }
      }
      alert(statusMessage);

    } catch (error) {
      console.error('Error recording time:', error);
      alert(error.message || 'Failed to record attendance. Please try again.');
    }
  }

  const handleTimeButtonClick = (type) => {
    setPendingAction(type)
    setShowModal(true)
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
                disabled={todayRecord?.type === 'IN'}
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
                {todayRecord.formattedStatus && (
                  <StatusText status={todayRecord.formattedStatus}>
                    Attendance: {todayRecord.formattedStatus}
                  </StatusText>
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
        userData={{ name: userName, email: userEmail }}
      />
    </Container>
  )
}

export default TimeInOut