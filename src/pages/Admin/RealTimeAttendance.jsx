import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  background: #f3f4f6;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #374151;
`;

const Td = styled.td`
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  color: #4b5563;
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${props => {
    if (props.status?.toLowerCase().includes('late')) return '#FEE2E2';
    if (props.status?.toLowerCase().includes('early')) return '#DBEAFE';
    if (props.status?.toLowerCase().includes('overtime')) return '#FEF3C7';
    return '#DCFCE7';
  }};
  color: ${props => {
    if (props.status?.toLowerCase().includes('late')) return '#991B1B';
    if (props.status?.toLowerCase().includes('early')) return '#1E40AF';
    if (props.status?.toLowerCase().includes('overtime')) return '#92400E';
    return '#166534';
  }};
`;

function RealTimeAttendance() {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [userSchedules, setUserSchedules] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserSchedules() {
      try {
        const usersRef = collection(db, 'users');
        const snapshot = await getDocs(usersRef);
        const schedules = {};
        
        snapshot.docs.forEach(doc => {
          const userData = doc.data();
          console.log('User data:', {
            userId: doc.id,
            schedule: userData.schedule,
            name: userData.name
          });
          schedules[doc.id] = userData.schedule || {};
        });
        
        console.log('All user schedules:', schedules);
        setUserSchedules(schedules);
      } catch (error) {
        console.error('Error fetching user schedules:', error);
      }
    }

    fetchUserSchedules();
  }, []);

  useEffect(() => {
    if (Object.keys(userSchedules).length === 0) {
      console.log('No user schedules loaded yet, waiting...');
      return;
    }

    console.log('Setting up attendance listener with schedules:', userSchedules);

    const attendanceQuery = query(
      collection(db, 'attendance'),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(attendanceQuery, (snapshot) => {
      const records = snapshot.docs.map(doc => {
        const data = doc.data();
        console.log('Processing record:', data);  // Debug log
        const timestamp = data.timestamp ? new Date(data.timestamp.seconds * 1000) : null;
        
        if (!timestamp) {
          return {
            id: doc.id,
            name: data.name,
            date: 'N/A',
            dayOfWeek: 'N/A',
            time: 'N/A',
            type: data.type,
            status: 'No Timestamp',
            scheduleTime: 'N/A',
            timeRegion: data.timeRegion || 'PHT'
          };
        }

        const timeString = timestamp.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });

        const dateString = timestamp.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });

        // Format schedule time
        let scheduleTimeFormatted = 'No Schedule';
        if (data.scheduleTime) {
          try {
            scheduleTimeFormatted = new Date(`1970-01-01T${data.scheduleTime}`).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            });
          } catch (error) {
            console.error('Error formatting schedule time:', error);
          }
        } else if (data.userType === 'accountant') {
          // Use fixed schedule for accountants
          scheduleTimeFormatted = data.type === 'IN' ? '09:00 AM' : '06:00 PM';
        }

        // Format the time difference string
        let timeDiffString = '';
        if (typeof data.timeDiffHours === 'number' || typeof data.timeDiffMinutes === 'number') {
          const parts = [];
          if (data.timeDiffHours) {
            parts.push(`${Math.abs(data.timeDiffHours)}h`);
          }
          if (data.timeDiffMinutes) {
            parts.push(`${Math.abs(data.timeDiffMinutes)}m`);
          }
          if (parts.length > 0) {
            timeDiffString = ` (${parts.join(' ')})`;
          }
        }

        // Get status text
        let statusText = data.status || 'No Status';
        if (data.userType === 'accountant' && !data.status) {
          // Calculate status for accountants if missing
          const actualTime = timestamp;
          const scheduleHour = data.type === 'IN' ? 9 : 18;
          const scheduleDate = new Date(actualTime);
          scheduleDate.setHours(scheduleHour, 0, 0);
          
          const diffMinutes = Math.round((actualTime - scheduleDate) / (1000 * 60));
          if (data.type === 'IN') {
            if (diffMinutes < -15) statusText = 'Early';
            else if (diffMinutes <= 15) statusText = 'On Time';
            else statusText = 'Late';
          } else {
            if (diffMinutes < -15) statusText = 'Early Out';
            else if (diffMinutes <= 15) statusText = 'On Time';
            else statusText = 'Overtime';
          }
        }

        // Combine status with time difference
        const statusWithDiff = statusText + timeDiffString;
        
        return {
          id: doc.id,
          name: data.name,
          date: dateString,
          dayOfWeek: data.dayOfWeek ? (data.dayOfWeek.charAt(0).toUpperCase() + data.dayOfWeek.slice(1)) : 'N/A',
          time: timeString,
          type: data.type,
          status: statusWithDiff,
          scheduleTime: scheduleTimeFormatted,
          timeRegion: data.timeRegion || 'PHT'
        };
      });
      
      console.log('Processed records:', records);  // Debug log
      setAttendanceRecords(records);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [userSchedules]);

  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Title>Real-Time Attendance</Title>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Date</Th>
            <Th>Day</Th>
            <Th>Time</Th>
            <Th>Schedule</Th>
            <Th>Time Region</Th>
            <Th>Type</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map(record => (
            <tr key={record.id}>
              <Td>{record.name}</Td>
              <Td>{record.date}</Td>
              <Td>{record.dayOfWeek}</Td>
              <Td>{record.time}</Td>
              <Td>{record.scheduleTime}</Td>
              <Td>{record.timeRegion}</Td>
              <Td>{record.type}</Td>
              <Td>
                <StatusBadge status={record.status}>
                  {record.status}
                </StatusBadge>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default RealTimeAttendance;
