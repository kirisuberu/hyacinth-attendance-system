import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'
import { collection, addDoc, query, where, getDocs, Timestamp, doc, getDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
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
  color: #4b5563;
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
      setUserEmail(auth.currentUser.email); // Set email immediately since we know we have auth.currentUser
      
      const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
      if (userDoc.exists()) {
        setUserName(userDoc.data().name);
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
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const todayTimestamp = today.getTime()
      console.log('Checking attendance for date:', today, 'timestamp:', todayTimestamp)

      const q = query(
        collection(db, 'attendance'),
        where('userId', '==', auth.currentUser.uid),
        where('date', '==', todayTimestamp)  // Changed to exact match with timestamp
      )

      const querySnapshot = await getDocs(q)
      console.log('Found records:', querySnapshot.size)
      
      // Get the latest record for today
      if (!querySnapshot.empty) {
        const records = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        // Sort by timestamp in descending order to get the latest
        records.sort((a, b) => b.timestamp.seconds - a.timestamp.seconds)
        const latestRecord = records[0]
        console.log('Latest record for today:', latestRecord)
        setTodayRecord(latestRecord)
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

  const handleTimeRecord = async (type) => {
    try {
      const timestamp = Timestamp.now()
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      console.log('Recording time with:', {
        type: type.toUpperCase(),
        timestamp: timestamp,
        date: today.getTime()
      })

      await addDoc(collection(db, 'attendance'), {
        userId: auth.currentUser.uid,
        email: auth.currentUser.email,
        name: userName,
        type: type.toUpperCase(),
        timestamp,
        date: today.getTime()  // Store as milliseconds timestamp instead
      })
      setShowModal(false)
      checkTodayAttendance()
    } catch (error) {
      console.error('Error recording time:', error)
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
                <StatusText>Status: {todayRecord.type === 'IN' ? 'Timed In' : 'Timed Out'}</StatusText>
                <StatusText>Time: {formatTime(todayRecord.timestamp)}</StatusText>
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
        onConfirm={() => handleTimeRecord(pendingAction)}
        type={pendingAction?.toUpperCase()}
        userData={{ name: userName, email: userEmail }}
      />
    </Container>
  )
}

export default TimeInOut