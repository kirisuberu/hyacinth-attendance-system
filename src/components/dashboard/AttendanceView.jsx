import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
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
  const { use24HourFormat } = useTimeFormat();

  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      if (!user?.uid) return;
      
      try {
        setLoading(true);
        const attendanceRef = collection(db, 'attendance');
        const q = query(
          attendanceRef,
          where('userId', '==', user.uid),
          orderBy('timestamp', 'asc') // Changed to ascending to process pairs correctly
        );
        
        const querySnapshot = await getDocs(q);
        const rawRecords = [];
        
        querySnapshot.forEach((doc) => {
          rawRecords.push({
            id: doc.id,
            ...doc.data()
          });
        });
        
        // Process records to pair IN and OUT entries by date
        const processedRecords = processAttendanceRecords(rawRecords);
        setAttendanceRecords(processedRecords);
      } catch (error) {
        console.error('Error fetching attendance records:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAttendanceRecords();
  }, [user]);
  
  // Function to process and pair IN/OUT records
  const processAttendanceRecords = (records) => {
    // Group records by date
    const recordsByDate = {};
    
    records.forEach(record => {
      if (!record.timestamp) return;
      
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
      if (record.type === 'In' && (!recordsByDate[dateKey].inRecord || 
          record.timestamp.toDate() < recordsByDate[dateKey].inRecord.timestamp.toDate())) {
        recordsByDate[dateKey].inRecord = record;
      } else if (record.type === 'Out' && (!recordsByDate[dateKey].outRecord || 
          record.timestamp.toDate() > recordsByDate[dateKey].outRecord.timestamp.toDate())) {
        recordsByDate[dateKey].outRecord = record;
      }
    });
    
    // Convert to array and sort by date (most recent first)
    return Object.values(recordsByDate).sort((a, b) => b.date - a.date);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate();
    return date.toLocaleDateString();
  };
  
  const getDayOfWeek = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };
  
  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate();
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: !use24HourFormat 
    });
  };
  
  // Determine the status based on the record type and any stored status
  const determineStatus = (record) => {
    // If the record already has a status field, use it
    if (record.status) {
      return record.status;
    }
    
    // Otherwise, determine based on type
    if (record.type === 'In') {
      return 'On Time'; // Default for older records
    } else if (record.type === 'Out') {
      return 'Complete'; // Default for older records
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
                <th colSpan="2">IN</th>
                <th colSpan="2">OUT</th>
                <th>Notes</th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th>Time</th>
                <th>Status</th>
                <th>Time</th>
                <th>Status</th>
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
                      <StatusTag status={determineStatus(record.inRecord)}>
                        {determineStatus(record.inRecord)}
                      </StatusTag>
                    ) : '-'}
                  </td>
                  
                  {/* OUT record */}
                  <td>{record.outRecord ? formatTime(record.outRecord.timestamp) : '-'}</td>
                  <td>
                    {record.outRecord ? (
                      <StatusTag status={determineStatus(record.outRecord)}>
                        {determineStatus(record.outRecord)}
                      </StatusTag>
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
