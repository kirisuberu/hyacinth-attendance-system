import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Card, CardTitle, CardContent, StatusBadge } from './DashboardComponents';
import styled from 'styled-components';
import { useTimeFormat } from '../../contexts/TimeFormatContext';

const AttendanceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    font-weight: 600;
    color: #555;
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
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

const AttendanceView = ({ user }) => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const { use24HourFormat } = useTimeFormat();

  // Setup real-time listeners when component mounts
  useEffect(() => {
    if (!user?.uid) return;
    
    let userUnsubscribe = null;
    let attendanceUnsubscribe = null;
    
    // Set up real-time listener for user data
    const userDocRef = doc(db, 'users', user.uid);
    userUnsubscribe = onSnapshot(userDocRef, (userDoc) => {
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      }
    }, (error) => {
      console.error('Error in user data listener:', error);
    });
    
    // Set up real-time listener for attendance records
    setLoading(true);
    const attendanceRef = collection(db, 'attendance');
    const q = query(
      attendanceRef,
      where('userId', '==', user.uid)
    );
    
    attendanceUnsubscribe = onSnapshot(q, (querySnapshot) => {
      try {
        const rawRecords = [];
        
        querySnapshot.forEach((doc) => {
          rawRecords.push({
            id: doc.id,
            ...doc.data()
          });
        });
        
        console.log('Real-time attendance records update:', rawRecords.length);
        
        if (rawRecords.length === 0) {
          // If there are no records, set empty array and return
          setAttendanceRecords([]);
          setLoading(false);
          return;
        }
        
        // Process records to pair IN and OUT entries by date
        const processedRecords = processAttendanceRecords(rawRecords);
        console.log('Processed attendance records:', processedRecords.length);
        setAttendanceRecords(processedRecords);
      } catch (error) {
        console.error('Error processing attendance records:', error);
      } finally {
        setLoading(false);
      }
    }, (error) => {
      console.error('Error in attendance listener:', error);
      setLoading(false);
    });
    
    // Cleanup listeners on unmount
    return () => {
      if (userUnsubscribe) userUnsubscribe();
      if (attendanceUnsubscribe) attendanceUnsubscribe();
    };
  }, [user?.uid]);
  
  // Function to process and pair IN/OUT records
  const processAttendanceRecords = (records) => {
    // Group records by date
    const recordsByDate = {};
    
    records.forEach(record => {
      if (!record.timestamp) {
        console.log('Skipping record without timestamp:', record);
        return;
      }
      
      try {
        const date = record.timestamp.toDate();
        const dateKey = date.toISOString().split('T')[0]; // YYYY-MM-DD format
        
        if (!recordsByDate[dateKey]) {
          recordsByDate[dateKey] = {
            date: date,
            day: getDayOfWeek(record.timestamp),
            inRecord: null,
            outRecord: null
          };
        }
        
        // Assign record to in or out slot
        if (record.type === 'In') {
          recordsByDate[dateKey].inRecord = record;
        } else if (record.type === 'Out') {
          recordsByDate[dateKey].outRecord = record;
        } else {
          console.log('Record with unknown type:', record.type, record);
        }
      } catch (error) {
        console.error('Error processing record:', error, record);
      }
    });
    
    // Convert to array and sort by date (most recent first)
    const result = Object.values(recordsByDate).sort((a, b) => b.date - a.date);
    console.log('Processed records by date:', result);
    return result;
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    if (timestamp instanceof Date) {
      return timestamp.toLocaleDateString();
    }
    try {
      const date = timestamp.toDate();
      return date.toLocaleDateString();
    } catch (error) {
      console.error('Error formatting date:', error, timestamp);
      return 'Invalid Date';
    }
  };
  
  const getDayOfWeek = (timestamp) => {
    if (!timestamp) return 'N/A';
    try {
      const date = timestamp instanceof Date ? timestamp : timestamp.toDate();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[date.getDay()];
    } catch (error) {
      console.error('Error getting day of week:', error, timestamp);
      return 'Unknown';
    }
  };
  
  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    try {
      const date = timestamp instanceof Date ? timestamp : timestamp.toDate();
      return date.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: !use24HourFormat 
      });
    } catch (error) {
      console.error('Error formatting time:', error, timestamp);
      return 'Invalid Time';
    }
  };
  
  // Calculate the status for time-in records based on schedule
  const calculateTimeInStatus = (record, dateObj) => {
    if (!record || record.type !== 'In') return 'N/A';
    
    try {
      // Get the record timestamp as a Date object
      const recordTime = record.timestamp.toDate();
      const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][recordTime.getDay()];
      
      // Default status if we can't determine from schedule
      let status = 'On Time';
      
      // Get the schedule for the user from state
      const userSchedule = userData?.schedule || [];
      
      // Find today's schedule if it exists
      const daySchedule = userSchedule.find(s => s.dayOfWeek === dayOfWeek);
      
      if (daySchedule && daySchedule.timeIn) {
        // Parse schedule time
        const [scheduledHour, scheduledMinute] = daySchedule.timeIn.split(':').map(Number);
        
        // Create Date objects for comparison
        const scheduleDate = new Date(recordTime);
        scheduleDate.setHours(scheduledHour, scheduledMinute, 0, 0);
        
        // Calculate time difference in minutes
        const diffMinutes = Math.round((recordTime - scheduleDate) / (1000 * 60));
        
        // Determine status based on time difference
        if (diffMinutes < -15) { // More than 15 minutes early
          status = 'Early';
        } else if (diffMinutes <= 15) { // Within 15 minutes of scheduled time
          status = 'On Time';
        } else { // More than 15 minutes late
          status = 'Late';
        }
      }
      
      return status;
    } catch (error) {
      console.error('Error calculating time-in status:', error, record);
      return 'On Time'; // Default fallback
    }
  };
  
  // Determine status for any record type (used for backward compatibility)
  const determineStatus = (record) => {
    if (!record) return 'N/A';
    
    // For time out records, always return Complete
    if (record.type === 'Out') {
      return 'Complete';
    }
    
    // For time in records, use the calculateTimeInStatus function
    if (record.type === 'In') {
      return calculateTimeInStatus(record);
    }
    
    return 'N/A';
  };

  return (
    <Card>
      <CardTitle>Attendance Records</CardTitle>
      <CardContent>
        {loading ? (
          <p>Loading attendance records...</p>
        ) : attendanceRecords.length > 0 ? (
          <AttendanceTable>
            <thead>
              <tr>
                <th>Date</th>
                <th>Day</th>
                <th colSpan="3">IN</th>
                <th colSpan="3">OUT</th>
                <th>Notes</th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th>Time</th>
                <th>Status</th>
                <th>Difference</th>
                <th>Time</th>
                <th>Status</th>
                <th>Duration</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record, index) => (
                <tr key={index}>
                  <td>{formatDate(record.date)}</td>
                  <td>{record.day}</td>
                  
                  {/* IN record */}
                  <td>{record.inRecord ? formatTime(record.inRecord.timestamp) : '-'}</td>
                  <td>
                    {record.inRecord ? (
                      <StatusTag status={calculateTimeInStatus(record.inRecord, record.date)}>
                        {calculateTimeInStatus(record.inRecord, record.date)}
                      </StatusTag>
                    ) : '-'}
                  </td>
                  <td>
                    {record.inRecord && record.inRecord.timeDiff !== undefined && ['Early', 'Late'].includes(calculateTimeInStatus(record.inRecord, record.date)) ? (
                      <>
                        {Math.abs(record.inRecord.timeDiff) >= 60 ? 
                          `${Math.floor(Math.abs(record.inRecord.timeDiff) / 60)}h ${Math.abs(record.inRecord.timeDiff) % 60}m` : 
                          `${Math.abs(record.inRecord.timeDiff)}m`
                        }
                      </>
                    ) : '-'}
                  </td>
                  
                  {/* OUT record */}
                  <td>{record.outRecord ? formatTime(record.outRecord.timestamp) : '-'}</td>
                  <td>
                    {record.outRecord ? (
                      <StatusTag status={record.outRecord.status || "Complete"}>
                        {record.outRecord.status || "Complete"}
                      </StatusTag>
                    ) : '-'}
                  </td>
                  <td>
                    {record.outRecord && record.outRecord.timeDiff !== undefined ? (
                      <>
                        {Math.abs(record.outRecord.timeDiff) >= 60 ? 
                          `${Math.floor(Math.abs(record.outRecord.timeDiff) / 60)}h ${Math.abs(record.outRecord.timeDiff) % 60}m` : 
                          `${Math.abs(record.outRecord.timeDiff)}m`
                        }
                      </>
                    ) : '-'}
                  </td>
                  
                  {/* Notes (combining both IN and OUT notes if available) */}
                  <td>
                    {record.inRecord?.notes && record.outRecord?.notes ? (
                      <>
                        <strong>IN:</strong> {record.inRecord.notes}<br/>
                        <strong>OUT:</strong> {record.outRecord.notes}
                      </>
                    ) : record.inRecord?.notes ? (
                      record.inRecord.notes
                    ) : record.outRecord?.notes ? (
                      record.outRecord.notes
                    ) : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </AttendanceTable>
        ) : (
          <EmptyState>
            <p>No attendance records found</p>
          </EmptyState>
        )}
      </CardContent>
    </Card>
  );
};

export default AttendanceView;
