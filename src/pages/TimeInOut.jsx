import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'
import { collection, addDoc, query, where, getDocs, Timestamp, doc, getDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import TopBar from '../components/TopBar'

function TimeInOut() {
  const [loading, setLoading] = useState(true)
  const [todayRecord, setTodayRecord] = useState(null)
  const [userName, setUserName] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    checkTodayAttendance()
    fetchUserName()
  }, [])

  const fetchUserName = async () => {
    if (!auth.currentUser) return

    try {
      const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid))
      if (userDoc.exists()) {
        setUserName(userDoc.data().name)
      }
    } catch (error) {
      console.error('Error fetching user name:', error)
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

      const q = query(
        collection(db, 'attendance'),
        where('userId', '==', auth.currentUser.uid),
        where('date', '>=', today)
      )

      const querySnapshot = await getDocs(q)
      if (!querySnapshot.empty) {
        setTodayRecord(querySnapshot.docs[0].data())
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
      await addDoc(collection(db, 'attendance'), {
        userId: auth.currentUser.uid,
        email: auth.currentUser.email,
        name: userName,
        type,
        timestamp,
        date: new Date(timestamp.seconds * 1000).setHours(0, 0, 0, 0)
      })
      checkTodayAttendance()
    } catch (error) {
      console.error('Error recording time:', error)
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
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar />
      <div className="container mx-auto px-4 py-8">
        <div className="time-container">
          <div className="time-box">
            <h1>Time In/Out</h1>
            <p className="user-email">Welcome, {userName || auth.currentUser?.email}</p>
            
            <div className="button-group">
              <button 
                onClick={() => handleTimeRecord('in')} 
                className="time-button time-in"
                disabled={todayRecord?.type === 'in'}
              >
                Time In
              </button>
              <button 
                onClick={() => handleTimeRecord('out')} 
                className="time-button time-out"
                disabled={!todayRecord || todayRecord?.type === 'out'}
              >
                Time Out
              </button>
            </div>

            {todayRecord && (
              <div className="status-box">
                <p>Status: {todayRecord.type === 'in' ? 'Timed In' : 'Timed Out'}</p>
                <p>Time: {formatTime(todayRecord.timestamp)}</p>
              </div>
            )}

            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeInOut