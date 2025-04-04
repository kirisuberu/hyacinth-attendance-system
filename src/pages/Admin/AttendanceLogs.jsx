import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs, startAfter, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import styled from 'styled-components';
import { PencilSimple, Check, X, Trash, CalendarBlank, Clock } from 'phosphor-react';
import { updateAttendance, deleteAttendance } from '../../utils/attendanceService';
import { useAuth } from '../../contexts/AuthContext';
import { format, parseISO, differenceInMinutes } from 'date-fns';
import { safeTimestampToDate } from '../../utils/dateUtils';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Thead = styled.thead``;
const Tbody = styled.tbody``;
const Tr = styled.tr``;

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
    if (props.status?.toLowerCase().includes('early') && !props.status?.toLowerCase().includes('out')) return '#DBEAFE';
    if (props.status?.toLowerCase().includes('early out')) return '#FEE2E2';
    if (props.status?.toLowerCase().includes('overtime')) return '#FEF3C7';
    return '#DCFCE7';
  }};
  color: ${props => {
    if (props.status?.toLowerCase().includes('late')) return '#991B1B';
    if (props.status?.toLowerCase().includes('early') && !props.status?.toLowerCase().includes('out')) return '#1E40AF';
    if (props.status?.toLowerCase().includes('early out')) return '#991B1B';
    if (props.status?.toLowerCase().includes('overtime')) return '#92400E';
    return '#166534';
  }};
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.25rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

const SaveButton = styled(ActionButton)`
  color: #047857;
  &:hover {
    background-color: #ECFDF5;
  }
`;

const CancelButton = styled(ActionButton)`
  color: #B91C1C;
  &:hover {
    background-color: #FEF2F2;
  }
`;

const EditButton = styled(ActionButton)`
  color: #4B5563;
  &:hover {
    background-color: #F3F4F6;
  }
`;

const DeleteButton = styled(ActionButton)`
  color: #B91C1C;
  &:hover {
    background-color: #FEF2F2;
  }
`;

const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const EditField = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const EditLabel = styled.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: #4b5563;
  width: 80px;
`;

const EditInput = styled.input`
  padding: 0.25rem 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.875rem;
`;

const EditSelect = styled.select`
  padding: 0.25rem 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.875rem;
`;

const NoDataMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.125rem;
  color: #6B7280;
`;

const LoadMoreButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2563eb;
  }
  
  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FilterLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
  color: #4b5563;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: white;
  min-width: 150px;
`;

const TimeDifference = styled.span`
  font-weight: 500;
  color: ${props => {
    if (props.minutes < 0) return '#1E40AF'; // Early - blue
    if (props.minutes > 0 && props.type === 'IN') return '#991B1B'; // Late - red
    if (props.minutes < 0 && props.type === 'OUT') return '#991B1B'; // Early out - red
    if (props.minutes > 0 && props.type === 'OUT') return '#92400E'; // Overtime - amber
    return '#166534'; // On time - green
  }};
`;

function AttendanceLogs() {
  const { isAdmin } = useAuth();
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingRecord, setEditingRecord] = useState(null);
  const [editForm, setEditForm] = useState({
    status: '',
    notes: '',
    updatedBy: 'admin'
  });
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const LOGS_PER_PAGE = 20;

  useEffect(() => {
    fetchLogs();
    
    // Set up real-time listener for new attendance records
    const attendanceRef = collection(db, 'attendance');
    const unsubscribe = onSnapshot(attendanceRef, (snapshot) => {
      // Only refresh if there are changes
      if (!snapshot.empty) {
        fetchLogs();
      }
    });
    
    return () => unsubscribe();
  }, []);

  const fetchLogs = async (loadMore = false) => {
    try {
      setLoading(true);
      const attendanceRef = collection(db, 'attendance');
      
      let q;
      if (loadMore && lastVisible) {
        q = query(
          attendanceRef,
          orderBy('timestamp', 'desc'),
          startAfter(lastVisible),
          limit(LOGS_PER_PAGE)
        );
      } else {
        q = query(
          attendanceRef,
          orderBy('timestamp', 'desc'),
          limit(LOGS_PER_PAGE)
        );
      }
      
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        setHasMore(false);
        setLoading(false);
        return;
      }
      
      // Set the last visible document for pagination
      const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastVisible(lastDoc);
      
      // Check if we have more results
      if (querySnapshot.docs.length < LOGS_PER_PAGE) {
        setHasMore(false);
      }
      
      const newLogs = querySnapshot.docs.map(doc => {
        const data = doc.data();
        // Use our safe timestamp conversion utility
        const timestamp = safeTimestampToDate(data.timestamp) || new Date();
        
        // Calculate time difference if schedule time is available
        let timeDifference = null;
        let scheduledShiftDuration = null;
        let expectedShiftDuration = null;
        
        if (data.type === 'OUT' && data.shiftDuration) {
          // For time-out records, use shiftDuration data if available
          timeDifference = data.shiftDuration.totalMinutes;
        } else if (data.type === 'IN') {
          // For time-in records, store the expected shift duration if available
          if (data.expectedShiftDuration) {
            expectedShiftDuration = data.expectedShiftDuration;
          } else if (data.shiftDuration && data.shiftDuration.scheduled) {
            // Fallback to shiftDuration if it exists and is scheduled
            expectedShiftDuration = data.shiftDuration;
          }
          
          // Still calculate the regular time difference for status display
          if (data.scheduleTime && timestamp) {
            try {
              const [scheduleHours, scheduleMinutes] = data.scheduleTime.split(':').map(Number);
              const scheduleDate = new Date(timestamp);
              scheduleDate.setHours(scheduleHours, scheduleMinutes, 0, 0);
              
              // Calculate difference in minutes
              timeDifference = differenceInMinutes(timestamp, scheduleDate);
            } catch (error) {
              console.error('Error calculating time difference:', error);
              timeDifference = null;
            }
          }
        } else if (data.scheduleTime && timestamp) {
          try {
            const [scheduleHours, scheduleMinutes] = data.scheduleTime.split(':').map(Number);
            const scheduleDate = new Date(timestamp);
            scheduleDate.setHours(scheduleHours, scheduleMinutes, 0, 0);
            
            // Calculate difference in minutes
            timeDifference = differenceInMinutes(timestamp, scheduleDate);
          } catch (error) {
            console.error('Error calculating time difference:', error);
            timeDifference = null;
          }
        }
        
        return {
          id: doc.id,
          userId: data.userId,
          name: data.name || 'Unknown',
          email: data.email || 'Unknown',
          type: data.type,
          timestamp: timestamp,
          status: data.status || 'Unknown',
          notes: data.notes || '',
          scheduleTime: data.scheduleTime || '',
          timeRegion: data.timeRegion || 'PHT',
          timeDifference: timeDifference,
          shiftDuration: data.type === 'OUT' && data.shiftDuration ? true : false,
          scheduledShiftDuration: scheduledShiftDuration,
          expectedShiftDuration: expectedShiftDuration
        };
      });
      
      if (loadMore) {
        setLogs(prevLogs => [...prevLogs, ...newLogs]);
      } else {
        setLogs(newLogs);
      }
    } catch (error) {
      console.error('Error fetching attendance logs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    fetchLogs(true);
  };

  const handleEdit = (record) => {
    setEditingRecord(record.id);
    setEditForm({
      status: record.status,
      notes: record.notes,
      updatedBy: 'admin'
    });
  };

  const handleSave = async (recordId) => {
    try {
      const result = await updateAttendance(recordId, editForm);
      
      if (result.success) {
        // Update the record in the state
        setLogs(prevLogs => prevLogs.map(log => 
          log.id === recordId 
            ? { ...log, status: editForm.status, notes: editForm.notes }
            : log
        ));
        
        setEditingRecord(null);
      } else {
        alert('Failed to update record: ' + result.error);
      }
    } catch (error) {
      console.error('Error updating record:', error);
      alert('An error occurred while updating the record.');
    }
  };

  const handleCancel = () => {
    setEditingRecord(null);
  };

  const handleDelete = async (recordId) => {
    if (!window.confirm('Are you sure you want to delete this attendance record? This action cannot be undone.')) {
      return;
    }
    
    try {
      const result = await deleteAttendance(recordId, 'admin');
      
      if (result.success) {
        // Remove the record from the state
        setLogs(prevLogs => prevLogs.filter(log => log.id !== recordId));
      } else {
        alert('Failed to delete record: ' + result.error);
      }
    } catch (error) {
      console.error('Error deleting record:', error);
      alert('An error occurred while deleting the record.');
    }
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleTypeFilterChange = (e) => {
    setTypeFilter(e.target.value);
  };

  const filteredLogs = logs.filter(log => {
    // Apply status filter
    if (statusFilter !== 'all' && log.status.toLowerCase() !== statusFilter.toLowerCase()) {
      return false;
    }
    
    // Apply type filter
    if (typeFilter !== 'all' && log.type !== typeFilter) {
      return false;
    }
    
    return true;
  });

  const formatTimeDifference = (minutes, type, shiftDuration, expectedShiftDuration) => {
    if (minutes === null) return 'N/A';
    
    // Use the timeDiff value directly as it's already calculated correctly in attendanceService.js
    const hours = Math.floor(Math.abs(minutes) / 60);
    const mins = Math.abs(minutes) % 60;
    
    let prefix = '';
    if (type === 'IN') {
      prefix = minutes < 0 ? 'Early by ' : 'Late by ';
    } else { // OUT
      // For time-out records, if we're using shiftDuration, we want to show the shift duration
      // rather than the early/overtime status
      if (shiftDuration) {
        return `Shift duration: ${hours}h ${mins}m`;
      } else {
        prefix = minutes < 0 ? 'Early by ' : 'Overtime by ';
      }
    }
    
    if (hours === 0 && mins === 0) {
      return 'On time';
    }
    
    let result = prefix;
    if (hours > 0) {
      result += `${hours}h `;
    }
    if (mins > 0 || hours === 0) {
      result += `${mins}m`;
    }
    
    // Add expected shift duration for time-in records
    if (type === 'IN' && expectedShiftDuration) {
      const schedHours = expectedShiftDuration.hours || 0;
      const schedMins = expectedShiftDuration.minutes || 0;
      let schedDuration = '';
      
      if (schedHours > 0) {
        schedDuration += `${schedHours}h `;
      }
      if (schedMins > 0 || schedHours === 0) {
        schedDuration += `${schedMins}m`;
      }
      
      result += ` (Expected: ${schedDuration})`;
    }
    
    return result;
  };

  return (
    <Container>
      <Title>Attendance Logs</Title>
      
      <FilterContainer>
        <FilterGroup>
          <FilterLabel>Status</FilterLabel>
          <FilterSelect value={statusFilter} onChange={handleStatusFilterChange}>
            <option value="all">All Statuses</option>
            <option value="early">Early</option>
            <option value="on time">On Time</option>
            <option value="late">Late</option>
            <option value="early out">Early Out</option>
            <option value="overtime">Overtime</option>
          </FilterSelect>
        </FilterGroup>
        
        <FilterGroup>
          <FilterLabel>Type</FilterLabel>
          <FilterSelect value={typeFilter} onChange={handleTypeFilterChange}>
            <option value="all">All Types</option>
            <option value="IN">Time In</option>
            <option value="OUT">Time Out</option>
          </FilterSelect>
        </FilterGroup>
      </FilterContainer>
      
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Type</Th>
              <Th>Status</Th>
              <Th>Schedule</Th>
              <Th>Time Difference</Th>
              <Th>Notes</Th>
              {isAdmin && <Th>Actions</Th>}
            </Tr>
          </Thead>
          <Tbody>
            {filteredLogs.length > 0 ? (
              filteredLogs.map(log => (
                <Tr key={log.id}>
                  <Td>{format(log.timestamp, 'MMM dd, yyyy')}</Td>
                  <Td>{format(log.timestamp, 'hh:mm a')}</Td>
                  <Td>{log.name}</Td>
                  <Td>{log.email}</Td>
                  <Td>{log.type === 'IN' ? 'Time In' : 'Time Out'}</Td>
                  <Td>
                    {editingRecord === log.id ? (
                      <EditSelect 
                        value={editForm.status}
                        onChange={(e) => setEditForm({...editForm, status: e.target.value})}
                      >
                        <option value="Early">Early</option>
                        <option value="On Time">On Time</option>
                        <option value="Late">Late</option>
                        <option value="Early Out">Early Out</option>
                        <option value="Overtime">Overtime</option>
                      </EditSelect>
                    ) : (
                      <StatusBadge status={log.status}>{log.status}</StatusBadge>
                    )}
                  </Td>
                  <Td>{log.scheduleTime || 'N/A'}</Td>
                  <Td>
                    <TimeDifference 
                      minutes={log.timeDifference} 
                      type={log.type}
                    >
                      {formatTimeDifference(log.timeDifference, log.type, log.shiftDuration, log.expectedShiftDuration)}
                    </TimeDifference>
                  </Td>
                  <Td>
                    {editingRecord === log.id ? (
                      <EditInput 
                        value={editForm.notes}
                        onChange={(e) => setEditForm({...editForm, notes: e.target.value})}
                        placeholder="Add notes..."
                      />
                    ) : (
                      log.notes || 'N/A'
                    )}
                  </Td>
                  {isAdmin && (
                    <Td>
                      {editingRecord === log.id ? (
                        <>
                          <SaveButton onClick={() => handleSave(log.id)}>
                            <Icon><Check size={16} /></Icon>
                            Save
                          </SaveButton>
                          <CancelButton onClick={handleCancel}>
                            <Icon><X size={16} /></Icon>
                            Cancel
                          </CancelButton>
                        </>
                      ) : (
                        <>
                          <EditButton onClick={() => handleEdit(log)}>
                            <Icon><PencilSimple size={16} /></Icon>
                            Edit
                          </EditButton>
                          <DeleteButton onClick={() => handleDelete(log.id)}>
                            <Icon><Trash size={16} /></Icon>
                            Delete
                          </DeleteButton>
                        </>
                      )}
                    </Td>
                  )}
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={isAdmin ? 10 : 9}>
                  <NoDataMessage>
                    {loading ? 'Loading attendance logs...' : 'No attendance logs found.'}
                  </NoDataMessage>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
      
      {hasMore && (
        <div style={{ textAlign: 'center' }}>
          <LoadMoreButton onClick={handleLoadMore} disabled={loading}>
            {loading ? 'Loading...' : 'Load More'}
          </LoadMoreButton>
        </div>
      )}
    </Container>
  );
}

export default AttendanceLogs;
