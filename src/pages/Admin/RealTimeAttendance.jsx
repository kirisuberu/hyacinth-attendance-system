import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, getDoc, getDocs, where, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import styled from 'styled-components';
import { PencilSimple, Check, X, Trash, CalendarBlank } from 'phosphor-react';
import { updateAttendance, deleteAttendance, getAttendanceByDate, getScheduledUsersByDate } from '../../utils/attendanceService';
import { useAuth } from '../../contexts/AuthContext';
import { format, parseISO } from 'date-fns';
import { safeTimestampToDate } from '../../utils/dateUtils';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const DateContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DateHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const DateLabel = styled.label`
  font-weight: 500;
  color: #4b5563;
`;

const DateInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const DateInput = styled.input`
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  width: 200px;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const CalendarIcon = styled.span`
  position: absolute;
  left: 0.75rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

const DayOfWeek = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #4b5563;
  margin-top: 0.5rem;
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

const EditActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.125rem;
  color: #4B5563;
`;

const NoDataMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.125rem;
  color: #6B7280;
  font-style: italic;
`;

function RealTimeAttendance() {
  const { currentUser, isAdmin } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [scheduledUsers, setScheduledUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingRecord, setEditingRecord] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  // Get day of week for the selected date
  const dayOfWeek = React.useMemo(() => {
    try {
      return format(parseISO(selectedDate), 'EEEE');
    } catch (error) {
      console.error('Error formatting date:', error);
      return '';
    }
  }, [selectedDate]);

  // Format timestamp to 12-hour time
  const formatTimeFromTimestamp = (timestamp) => {
    const date = safeTimestampToDate(timestamp);
    if (!date) return 'N/A';
    
    try {
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (error) {
      console.error('Error formatting timestamp:', error);
      return 'N/A';
    }
  };

  // Fetch scheduled users when the selected date changes
  useEffect(() => {
    async function fetchScheduledUsers() {
      try {
        // Fetch scheduled users for the selected date
        const scheduledUsersResult = await getScheduledUsersByDate(selectedDate);

        if (scheduledUsersResult.success) {
          // Format scheduled times to 12-hour format
          const formattedUsers = scheduledUsersResult.users.map(user => ({
            ...user,
            scheduledTimeIn: formatTimeFromTimestamp(user.scheduledTimeIn),
            scheduledTimeOut: formatTimeFromTimestamp(user.scheduledTimeOut)
          }));

          setScheduledUsers(formattedUsers);
        } else {
          console.error('Error fetching scheduled users:', scheduledUsersResult.error);
          setScheduledUsers([]);
        }
      } catch (error) {
        console.error('Error in fetchScheduledUsers:', error);
      }
    }

    fetchScheduledUsers();
  }, [selectedDate]);

  // Set up real-time listener for attendance records
  useEffect(() => {
    setLoading(true);
    
    // Create start and end timestamps for the selected date
    const selectedDateObj = new Date(selectedDate);
    const startOfDay = new Date(selectedDateObj);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(selectedDateObj);
    endOfDay.setHours(23, 59, 59, 999);
    
    const startTimestamp = Timestamp.fromDate(startOfDay);
    const endTimestamp = Timestamp.fromDate(endOfDay);
    
    // Create a query for attendance records for the selected date
    const attendanceRef = collection(db, 'attendance');
    const attendanceQuery = query(
      attendanceRef,
      where('timestamp', '>=', startTimestamp),
      where('timestamp', '<=', endTimestamp),
      orderBy('timestamp', 'desc')
    );
    
    // Set up the real-time listener
    const unsubscribe = onSnapshot(
      attendanceQuery,
      (snapshot) => {
        const records = {};
        
        snapshot.forEach(doc => {
          const data = doc.data();
          const userId = data.userId;
          
          if (!records[userId]) {
            records[userId] = {
              userId,
              name: data.name || 'Unknown',
              email: data.email || '',
              timeIn: null,
              timeOut: null
            };
          }
          
          if (data.type === 'IN') {
            records[userId].timeIn = {
              time: formatTimeFromTimestamp(data.timestamp),
              status: data.status,
              id: doc.id
            };
          } else if (data.type === 'OUT') {
            records[userId].timeOut = {
              time: formatTimeFromTimestamp(data.timestamp),
              status: data.status,
              id: doc.id
            };
          }
        });
        
        setAttendanceData(Object.values(records));
        setLoading(false);
      },
      (error) => {
        console.error('Error in attendance listener:', error);
        setLoading(false);
      }
    );
    
    // Clean up the listener when the component unmounts or when the date changes
    return () => unsubscribe();
  }, [selectedDate]);

  // Handle date change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Combine scheduled users with attendance data
  const combinedData = React.useMemo(() => {
    const result = [...scheduledUsers];

    // Add any users from attendance data who aren't in scheduled users
    attendanceData.forEach(record => {
      const existingUserIndex = result.findIndex(user => user.userId === record.userId);

      if (existingUserIndex === -1) {
        result.push({
          userId: record.userId,
          name: record.name,
          email: record.email,
          timeIn: record.timeIn,
          timeOut: record.timeOut,
          scheduledTimeIn: null,
          scheduledTimeOut: null
        });
      } else {
        // Update existing user with attendance data
        result[existingUserIndex].timeIn = record.timeIn;
        result[existingUserIndex].timeOut = record.timeOut;
        result[existingUserIndex].email = record.email;
      }
    });

    return result;
  }, [scheduledUsers, attendanceData]);

  // Edit handlers
  const handleEdit = (recordType, record) => {
    setEditingRecord({
      userId: record.userId,
      type: recordType,
      id: recordType === 'timeIn' ? record.timeIn?.id : record.timeOut?.id
    });

    setEditFormData({
      time: recordType === 'timeIn' ? record.timeIn?.time : record.timeOut?.time,
      status: recordType === 'timeIn' ? record.timeIn?.status : record.timeOut?.status
    });
  };

  const handleCancelEdit = () => {
    setEditingRecord(null);
    setEditFormData({});
  };

  const handleSaveEdit = async () => {
    if (!editingRecord || !editingRecord.id) {
      console.error('No record ID to update');
      return;
    }

    try {
      // Convert 12-hour time format to Date object
      let timeValue = editFormData.time;
      if (timeValue) {
        const [time, period] = timeValue.split(' ');
        const [hours, minutes] = time.split(':').map(Number);

        const date = new Date(selectedDate);
        let hour = hours;

        if (period === 'PM' && hours < 12) {
          hour += 12;
        } else if (period === 'AM' && hours === 12) {
          hour = 0;
        }

        date.setHours(hour, minutes, 0, 0);

        // Update the record
        const result = await updateAttendance(editingRecord.id, {
          actualTime: date.toLocaleTimeString(),
          status: editFormData.status,
          updatedBy: currentUser.uid
        });

        if (result.success) {
          // Refresh data
          const attendanceResult = await getAttendanceByDate(selectedDate);
          if (attendanceResult.success) {
            setAttendanceData(attendanceResult.records);
          }

          setEditingRecord(null);
          setEditFormData({});
        } else {
          alert(`Error updating record: ${result.error}`);
        }
      }
    } catch (error) {
      console.error('Error saving edit:', error);
      alert(`Error: ${error.message}`);
    }
  };

  const handleDelete = async (recordId) => {
    if (!recordId) {
      console.error('No record ID to delete');
      return;
    }

    if (window.confirm('Are you sure you want to delete this record? This action cannot be undone.')) {
      try {
        const result = await deleteAttendance(recordId, currentUser.uid);

        if (result.success) {
          // Refresh data
          const attendanceResult = await getAttendanceByDate(selectedDate);
          if (attendanceResult.success) {
            setAttendanceData(attendanceResult.records);
          }
        } else {
          alert(`Error deleting record: ${result.error}`);
        }
      } catch (error) {
        console.error('Error deleting record:', error);
        alert(`Error: ${error.message}`);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return (
      <Container>
        <LoadingMessage>Loading...</LoadingMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Daily Attendance</Title>

      <DateContainer>
        <DateHeader>
          <DateLabel htmlFor="date-selector">Date:</DateLabel>
          <DateInputContainer>
            <CalendarIcon>
              <CalendarBlank size={18} />
            </CalendarIcon>
            <DateInput
              id="date-selector"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </DateInputContainer>
        </DateHeader>
        <DayOfWeek>{dayOfWeek}</DayOfWeek>
      </DateContainer>

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Scheduled In</Th>
              <Th>Time In</Th>
              <Th>Scheduled Out</Th>
              <Th>Time Out</Th>
              {isAdmin && <Th>Actions</Th>}
            </Tr>
          </Thead>
          <Tbody>
            {combinedData.length > 0 ? (
              combinedData.map(user => (
                <Tr key={user.userId}>
                  <Td>{user.name}</Td>
                  <Td>{user.email || '-'}</Td>
                  <Td>
                    {user.scheduledTimeIn ? (
                      <div>{user.scheduledTimeIn}</div>
                    ) : (
                      <span style={{ color: '#9CA3AF', fontStyle: 'italic' }}>Not scheduled</span>
                    )}
                  </Td>
                  <Td>
                    {editingRecord && editingRecord.userId === user.userId && editingRecord.type === 'timeIn' ? (
                      <EditForm>
                        <EditField>
                          <EditLabel>Time:</EditLabel>
                          <EditInput
                            type="text"
                            name="time"
                            value={editFormData.time || ''}
                            onChange={handleInputChange}
                            placeholder="HH:MM AM/PM"
                          />
                        </EditField>
                        <EditField>
                          <EditLabel>Status:</EditLabel>
                          <EditSelect
                            name="status"
                            value={editFormData.status || ''}
                            onChange={handleInputChange}
                          >
                            <option value="On Time">On Time</option>
                            <option value="Early">Early</option>
                            <option value="Late">Late</option>
                          </EditSelect>
                        </EditField>
                        <EditActions>
                          <SaveButton onClick={handleSaveEdit}>
                            <Icon><Check size={16} /></Icon>Save
                          </SaveButton>
                          <CancelButton onClick={handleCancelEdit}>
                            <Icon><X size={16} /></Icon>Cancel
                          </CancelButton>
                        </EditActions>
                      </EditForm>
                    ) : (
                      user.timeIn ? (
                        <>
                          <div>{user.timeIn.time}</div>
                          {user.timeIn.status && (
                            <StatusBadge status={user.timeIn.status}>
                              {user.timeIn.status}
                            </StatusBadge>
                          )}
                        </>
                      ) : (
                        <span style={{ color: '#9CA3AF', fontStyle: 'italic' }}>Not recorded</span>
                      )
                    )}
                  </Td>
                  <Td>
                    {user.scheduledTimeOut ? (
                      <div>{user.scheduledTimeOut}</div>
                    ) : (
                      <span style={{ color: '#9CA3AF', fontStyle: 'italic' }}>Not scheduled</span>
                    )}
                  </Td>
                  <Td>
                    {editingRecord && editingRecord.userId === user.userId && editingRecord.type === 'timeOut' ? (
                      <EditForm>
                        <EditField>
                          <EditLabel>Time:</EditLabel>
                          <EditInput
                            type="text"
                            name="time"
                            value={editFormData.time || ''}
                            onChange={handleInputChange}
                            placeholder="HH:MM AM/PM"
                          />
                        </EditField>
                        <EditField>
                          <EditLabel>Status:</EditLabel>
                          <EditSelect
                            name="status"
                            value={editFormData.status || ''}
                            onChange={handleInputChange}
                          >
                            <option value="On Time">On Time</option>
                            <option value="Early Out">Early Out</option>
                            <option value="Overtime">Overtime</option>
                          </EditSelect>
                        </EditField>
                        <EditActions>
                          <SaveButton onClick={handleSaveEdit}>
                            <Icon><Check size={16} /></Icon>Save
                          </SaveButton>
                          <CancelButton onClick={handleCancelEdit}>
                            <Icon><X size={16} /></Icon>Cancel
                          </CancelButton>
                        </EditActions>
                      </EditForm>
                    ) : (
                      user.timeOut ? (
                        <>
                          <div>{user.timeOut.time}</div>
                          {user.timeOut.status && (
                            <StatusBadge status={user.timeOut.status}>
                              {user.timeOut.status}
                            </StatusBadge>
                          )}
                        </>
                      ) : (
                        <span style={{ color: '#9CA3AF', fontStyle: 'italic' }}>Not recorded</span>
                      )
                    )}
                  </Td>
                  {isAdmin && (
                    <Td>
                      {editingRecord && editingRecord.userId === user.userId ? (
                        null // Already showing edit form
                      ) : (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          {user.timeIn && (
                            <>
                              <EditButton onClick={() => handleEdit('timeIn', user)}>
                                <Icon><PencilSimple size={16} /></Icon>Edit In
                              </EditButton>
                              <DeleteButton onClick={() => handleDelete(user.timeIn.id)}>
                                <Icon><Trash size={16} /></Icon>Delete In
                              </DeleteButton>
                            </>
                          )}
                          {user.timeOut && (
                            <>
                              <EditButton onClick={() => handleEdit('timeOut', user)}>
                                <Icon><PencilSimple size={16} /></Icon>Edit Out
                              </EditButton>
                              <DeleteButton onClick={() => handleDelete(user.timeOut.id)}>
                                <Icon><Trash size={16} /></Icon>Delete Out
                              </DeleteButton>
                            </>
                          )}
                        </div>
                      )}
                    </Td>
                  )}
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={isAdmin ? 7 : 6}>
                  <NoDataMessage>No scheduled users or attendance records found for this date.</NoDataMessage>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default RealTimeAttendance;
