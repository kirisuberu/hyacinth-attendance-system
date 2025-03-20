import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, isSameMonth, getDay, parseISO, addDays, startOfWeek, endOfWeek } from 'date-fns';

// Styled components
const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #1a1a1a;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
`;

const CalendarControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const MonthSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MonthTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  min-width: 200px;
  text-align: center;
  color: #111827;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #3b82f6;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #2563eb;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

const UserFilter = styled.div`
  margin-bottom: 1.5rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background: white;
  color: #4b5563;
  min-width: 200px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-bottom: 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
`;

const DayHeader = styled.div`
  text-align: center;
  font-weight: 600;
  padding: 0.75rem 0.5rem;
  background: #f3f4f6;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
`;

const DayCell = styled.div`
  min-height: 120px;
  border: 1px solid #e5e7eb;
  padding: 0.5rem;
  background: ${props => props.isCurrentMonth ? 'white' : '#f9fafb'};
  position: relative;
`;

const DayNumber = styled.div`
  font-weight: ${props => props.isToday ? '700' : '500'};
  color: ${props => props.isToday ? '#3b82f6' : '#1a1a1a'};
  background: ${props => props.isToday ? '#dbeafe' : 'transparent'};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const DayCellContent = styled.div`
  overflow-y: auto;
  max-height: 100px;
`;

const ScheduleItem = styled.div`
  margin-bottom: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  background: #bfdbfe;
  border: 1px solid #3b82f6;
  color: #1e40af;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  
  &:hover {
    background: #93c5fd;
  }
`;

const AttendanceItem = styled.div`
  margin-bottom: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  background: ${props => {
    if (props.status?.toLowerCase().includes('late')) return '#FEE2E2';
    if (props.status?.toLowerCase().includes('early') && !props.status?.toLowerCase().includes('out')) return '#DBEAFE';
    if (props.status?.toLowerCase().includes('early out')) return '#FEE2E2';
    if (props.status?.toLowerCase().includes('overtime')) return '#FEF3C7';
    return '#DCFCE7';
  }};
  border: 1px solid ${props => {
    if (props.status?.toLowerCase().includes('late')) return '#991B1B';
    if (props.status?.toLowerCase().includes('early') && !props.status?.toLowerCase().includes('out')) return '#1E40AF';
    if (props.status?.toLowerCase().includes('early out')) return '#991B1B';
    if (props.status?.toLowerCase().includes('overtime')) return '#92400E';
    return '#166534';
  }};
  color: ${props => {
    if (props.status?.toLowerCase().includes('late')) return '#991B1B';
    if (props.status?.toLowerCase().includes('early') && !props.status?.toLowerCase().includes('out')) return '#1E40AF';
    if (props.status?.toLowerCase().includes('early out')) return '#991B1B';
    if (props.status?.toLowerCase().includes('overtime')) return '#92400E';
    return '#166534';
  }};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  
  &:hover {
    filter: brightness(0.95);
  }
`;

const Legend = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  background: #f9fafb;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #1f2937;
  font-weight: 500;
`;

const LegendColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  background: ${props => props.color};
  border: 1px solid ${props => props.border};
`;

const UserLabel = styled.span`
  font-weight: 600;
  color: #4b5563;
  margin-right: 0.25rem;
`;

function UserCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('all');
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [userSchedules, setUserSchedules] = useState({});
  const [loading, setLoading] = useState(true);

  // Load users and their schedules
  useEffect(() => {
    async function fetchUsers() {
      try {
        const usersRef = collection(db, 'users');
        const snapshot = await getDocs(usersRef);
        const fetchedUsers = [];
        const schedules = {};
        
        snapshot.docs.forEach(doc => {
          const userData = doc.data();
          fetchedUsers.push({
            id: doc.id,
            name: userData.name,
            email: userData.email,
            userType: userData.userType
          });
          schedules[doc.id] = userData.schedule || {};
        });
        
        setUsers(fetchedUsers);
        setUserSchedules(schedules);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  // Load attendance records for the current month
  useEffect(() => {
    async function fetchAttendanceRecords() {
      try {
        setLoading(true);
        
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(currentMonth);
        
        // Convert to timestamps for Firestore query
        const startTimestamp = new Date(monthStart);
        const endTimestamp = new Date(monthEnd);
        
        const attendanceRef = collection(db, 'attendance');
        const attendanceSnapshot = await getDocs(attendanceRef);
        
        const records = attendanceSnapshot.docs
          .map(doc => {
            const data = doc.data();
            const timestamp = data.timestamp ? new Date(data.timestamp.seconds * 1000) : null;
            
            if (!timestamp) return null;
            
            // Check if the record is within the current month
            if (timestamp < startTimestamp || timestamp > endTimestamp) return null;
            
            return {
              id: doc.id,
              userId: data.userId,
              name: data.name,
              timestamp,
              type: data.type,
              status: data.status || 'No Status',
              scheduleTime: data.scheduleTime,
              timeRegion: data.timeRegion || 'PHT'
            };
          })
          .filter(record => record !== null);
        
        setAttendanceRecords(records);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching attendance records:', error);
        setLoading(false);
      }
    }

    fetchAttendanceRecords();
  }, [currentMonth]);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const previousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  // Format time for display
  const formatTime = (timeString) => {
    if (!timeString) return '';
    
    const [hours, minutes] = timeString.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  // Get schedule for a specific user and day
  const getUserScheduleForDay = (userId, date) => {
    const dayOfWeek = daysOfWeek[getDay(date)].toLowerCase();
    const schedule = userSchedules[userId];
    
    if (!schedule || !schedule[dayOfWeek]) return null;
    
    const daySchedule = schedule[dayOfWeek];
    if (!daySchedule.startTime || !daySchedule.endTime) return null;
    
    return {
      startTime: daySchedule.startTime,
      endTime: daySchedule.endTime
    };
  };

  // Get attendance records for a specific user and day
  const getUserAttendanceForDay = (userId, date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    
    // Filter records for this user and date
    return attendanceRecords.filter(record => {
      return record.userId === userId && 
             format(record.timestamp, 'yyyy-MM-dd') === formattedDate;
    }).sort((a, b) => a.timestamp - b.timestamp);
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    
    const days = eachDayOfInterval({ start: startDate, end: endDate });
    
    return days;
  };

  // Filter users based on selection
  const filteredUsers = selectedUser === 'all' 
    ? users 
    : users.filter(user => user.id === selectedUser);

  const calendarDays = generateCalendarDays();

  return (
    <Container>
      <Title>User Attendance Calendar</Title>
      
      <CalendarControls>
        <MonthSelector>
          <Button onClick={previousMonth}>&lt; Previous</Button>
          <MonthTitle>{format(currentMonth, 'MMMM yyyy')}</MonthTitle>
          <Button onClick={nextMonth}>Next &gt;</Button>
        </MonthSelector>
      </CalendarControls>
      
      <UserFilter>
        <label htmlFor="userSelect" style={{ color: '#374151', fontWeight: '500', marginRight: '0.5rem' }}>Select User: </label>
        <Select 
          id="userSelect" 
          value={selectedUser} 
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="all">All Users</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </Select>
      </UserFilter>
      
      <Legend>
        <LegendItem>
          <LegendColor color="#bfdbfe" border="#3b82f6" />
          <span>Scheduled Shift</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#DCFCE7" border="#166534" />
          <span>On Time</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#DBEAFE" border="#1E40AF" />
          <span>Early</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#FEE2E2" border="#991B1B" />
          <span>Late/Early Out</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#FEF3C7" border="#92400E" />
          <span>Overtime</span>
        </LegendItem>
      </Legend>
      
      {loading ? (
        <div>Loading calendar data...</div>
      ) : (
        <CalendarGrid>
          {/* Day headers */}
          {daysOfWeek.map(day => (
            <DayHeader key={day}>{day}</DayHeader>
          ))}
          
          {/* Calendar cells */}
          {calendarDays.map(day => {
            const isCurrentMonth = isSameMonth(day, currentMonth);
            const isToday = day.toDateString() === new Date().toDateString();
            
            return (
              <DayCell key={day.toISOString()} isCurrentMonth={isCurrentMonth}>
                <DayNumber isToday={isToday}>{format(day, 'd')}</DayNumber>
                <DayCellContent>
                  {filteredUsers.map(user => {
                    const schedule = getUserScheduleForDay(user.id, day);
                    const attendanceRecords = getUserAttendanceForDay(user.id, day);
                    
                    if (!schedule && attendanceRecords.length === 0) return null;
                    
                    return (
                      <div key={user.id}>
                        {schedule && (
                          <ScheduleItem title={`${user.name}: ${formatTime(schedule.startTime)} - ${formatTime(schedule.endTime)}`}>
                            <UserLabel>{user.name}:</UserLabel> {formatTime(schedule.startTime)} - {formatTime(schedule.endTime)}
                          </ScheduleItem>
                        )}
                        
                        {attendanceRecords.map((record, i) => {
                          const time = format(record.timestamp, 'HH:mm');
                          return (
                            <AttendanceItem 
                              key={record.id} 
                              status={record.status}
                              title={`${user.name}: ${record.type} at ${formatTime(time)} (${record.status})`}
                            >
                              <UserLabel>{user.name}:</UserLabel> {record.type} {formatTime(time)}
                            </AttendanceItem>
                          );
                        })}
                      </div>
                    );
                  })}
                </DayCellContent>
              </DayCell>
            );
          })}
        </CalendarGrid>
      )}
    </Container>
  );
}

export default UserCalendar;
