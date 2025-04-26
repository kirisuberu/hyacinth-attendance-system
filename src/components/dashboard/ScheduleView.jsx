import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Card, CardTitle, CardContent } from './DashboardComponents';
import styled from 'styled-components';

const ScheduleTable = styled.table`
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

const DayCard = styled.div`
  background-color: ${props => props.isToday ? '#f0f7ff' : 'white'};
  border: 1px solid ${props => props.isToday ? '#bbd6fb' : '#eee'};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  
  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: ${props => props.isToday ? '#1a73e8' : '#333'};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`;

const ScheduleView = ({ user }) => {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserSchedule = async () => {
      if (!user?.uid) return;
      
      try {
        setLoading(true);
        
        // Get the user document which now contains the schedule directly
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          
          // Check if the user has a schedule array in their document
          if (userData.schedule && Array.isArray(userData.schedule) && userData.schedule.length > 0) {
            console.log('Found user schedule:', userData.schedule);
            setSchedule(userData.schedule);
          } else if (userData.scheduleId) {
            // Legacy support: If user still has a scheduleId, fetch that schedule
            const scheduleId = userData.scheduleId;
            const scheduleDocRef = doc(db, 'schedules', scheduleId);
            const scheduleDoc = await getDoc(scheduleDocRef);
            
            if (scheduleDoc.exists()) {
              setSchedule(scheduleDoc.data());
            }
          } else {
            // If no specific schedule, check for default schedules
            const schedulesRef = collection(db, 'schedules');
            const q = query(schedulesRef, where('isDefault', '==', true));
            const querySnapshot = await getDocs(q);
            
            if (!querySnapshot.empty) {
              // Use the first default schedule
              setSchedule(querySnapshot.docs[0].data());
            }
          }
        }
      } catch (error) {
        console.error('Error fetching schedule:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserSchedule();
  }, [user]);

  const getDayName = (dayIndex) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  };
  
  const formatTime = (timeString) => {
    if (!timeString) return 'N/A';
    
    try {
      const [hours, minutes] = timeString.split(':');
      const date = new Date();
      date.setHours(parseInt(hours, 10));
      date.setMinutes(parseInt(minutes, 10));
      
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (error) {
      return timeString;
    }
  };
  
  const getCurrentDayIndex = () => {
    return new Date().getDay();
  };

  return (
    <Card>
      <CardTitle>My Schedule</CardTitle>
      <CardContent>
        {loading ? (
          <p>Loading your schedule...</p>
        ) : schedule ? (
          <div>
            {Array.isArray(schedule) ? (
              // New format: schedule is an array of schedule objects
              <>
                <p><strong>Your Schedule</strong></p>
                
                {schedule.map((scheduleItem, index) => {
                  const today = new Date();
                  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                  const dayIndex = dayNames.indexOf(scheduleItem.dayOfWeek);
                  const isToday = today.getDay() === dayIndex;
                  
                  // Calculate end time based on start time and duration
                  const startTime = scheduleItem.timeIn;
                  const duration = scheduleItem.shiftDuration || 8;
                  
                  // Parse start time to calculate end time
                  let [startHour, startMinute] = startTime.split(':').map(Number);
                  let endHour = (startHour + duration) % 24;
                  const endTime = `${endHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')}`;
                  
                  return (
                    <DayCard key={index} isToday={isToday}>
                      <h3>{scheduleItem.dayOfWeek}</h3>
                      <p>
                        <strong>Time In:</strong> {scheduleItem.timeIn} | 
                        <strong>Duration:</strong> {scheduleItem.shiftDuration} hours
                      </p>
                      <p>
                        <strong>Estimated Time Out:</strong> {endTime}
                      </p>
                      <p>
                        <strong>Time Region:</strong> {scheduleItem.timeRegion}
                      </p>
                    </DayCard>
                  );
                })}
                
                <ScheduleTable>
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Time In</th>
                      <th>Time Out (Est.)</th>
                      <th>Duration</th>
                      <th>Region</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((scheduleItem, index) => {
                      // Calculate end time based on start time and duration
                      const startTime = scheduleItem.timeIn;
                      const duration = scheduleItem.shiftDuration || 8;
                      
                      // Parse start time to calculate end time
                      let [startHour, startMinute] = startTime.split(':').map(Number);
                      let endHour = (startHour + duration) % 24;
                      const endTime = `${endHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')}`;
                      
                      return (
                        <tr key={index}>
                          <td>{scheduleItem.dayOfWeek}</td>
                          <td>{scheduleItem.timeIn}</td>
                          <td>{endTime}</td>
                          <td>{scheduleItem.shiftDuration} hours</td>
                          <td>{scheduleItem.timeRegion}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </ScheduleTable>
              </>
            ) : (
              // Legacy format: schedule is an object with shifts property
              <>
                <p>Your assigned schedule: <strong>{schedule.name || 'Standard Schedule'}</strong></p>
                
                {schedule.shifts && schedule.shifts.map((shift, index) => {
                  const today = new Date();
                  const isToday = today.getDay() === shift.day;
                  
                  return (
                    <DayCard key={index} isToday={isToday}>
                      <h3>{getDayName(shift.day)}</h3>
                      <p>
                        <strong>Start:</strong> {formatTime(shift.startTime)} | 
                        <strong>End:</strong> {formatTime(shift.endTime)}
                      </p>
                      {shift.breakStart && shift.breakEnd && (
                        <p>
                          <strong>Break:</strong> {formatTime(shift.breakStart)} - {formatTime(shift.breakEnd)}
                        </p>
                      )}
                    </DayCard>
                  );
                })}
                
                <ScheduleTable>
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Break</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.shifts && schedule.shifts.map((shift, index) => (
                      <tr key={index}>
                        <td>{getDayName(shift.day)}</td>
                        <td>{formatTime(shift.startTime)}</td>
                        <td>{formatTime(shift.endTime)}</td>
                        <td>
                          {shift.breakStart && shift.breakEnd 
                            ? `${formatTime(shift.breakStart)} - ${formatTime(shift.breakEnd)}` 
                            : 'None'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </ScheduleTable>
              </>
            )}
          </div>
        ) : (
          <EmptyState>
            <p>No schedule has been assigned to you yet.</p>
          </EmptyState>
        )}
      </CardContent>
    </Card>
  );
};

export default ScheduleView;
