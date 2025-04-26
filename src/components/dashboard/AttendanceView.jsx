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
          orderBy('timestamp', 'desc')
        );
        
        const querySnapshot = await getDocs(q);
        const records = [];
        
        querySnapshot.forEach((doc) => {
          records.push({
            id: doc.id,
            ...doc.data()
          });
        });
        
        setAttendanceRecords(records);
      } catch (error) {
        console.error('Error fetching attendance records:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAttendanceRecords();
  }, [user]);

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate();
    return date.toLocaleDateString();
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
                <th>Time</th>
                <th>Type</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record) => (
                <tr key={record.id}>
                  <td>{formatDate(record.timestamp)}</td>
                  <td>{formatTime(record.timestamp)}</td>
                  <td>{record.type}</td>
                  <td>
                    <StatusBadge status={record.type}>
                      {record.type === 'In' ? 'Clocked In' : 'Clocked Out'}
                    </StatusBadge>
                  </td>
                  <td>{record.notes || '-'}</td>
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
