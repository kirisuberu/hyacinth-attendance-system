import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'
import { collection, query, getDocs, orderBy, doc, getDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import TopBar from '../components/TopBar'
import { UserType } from '../utils/userService'

function Admin() {
  const [attendanceRecords, setAttendanceRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const checkAdminAccess = async () => {
      if (!auth.currentUser) {
        navigate('/');
        return;
      }
      
      try {
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (!userDoc.exists() || userDoc.data().userType !== UserType.ADMIN) {
          navigate('/');
          return;
        }
      } catch (error) {
        console.error('Error checking admin access:', error);
        navigate('/');
        return;
      }
    };
    
    checkAdminAccess();
    fetchAttendanceRecords();
  }, [navigate])

  const fetchAttendanceRecords = async () => {
    try {
      const q = query(
        collection(db, 'attendance'),
        orderBy('timestamp', 'desc')
      )
      const querySnapshot = await getDocs(q)
      const records = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setAttendanceRecords(records)
    } catch (error) {
      console.error('Error fetching records:', error)
    } finally {
      setLoading(false)
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

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar />
      <div className="container mx-auto px-4 py-8">
        <div className="admin-container">
          <div className="admin-header">
            <h1>Admin Dashboard</h1>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>

          <div className="attendance-table">
            <h2>Attendance Records</h2>
            <table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map((record) => (
                  <tr key={record.id}>
                    <td>{record.email}</td>
                    <td className={`status-${record.type}`}>
                      {record.type === 'in' ? 'Time In' : 'Time Out'}
                    </td>
                    <td>{new Date(record.timestamp.seconds * 1000).toLocaleDateString()}</td>
                    <td>{new Date(record.timestamp.seconds * 1000).toLocaleTimeString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin