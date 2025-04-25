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
        
        // First check if the user has a schedule assigned
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        
        if (userDoc.exists() && userDoc.data().scheduleId) {
          // If user has a schedule ID, fetch that schedule
          const scheduleId = userDoc.data().scheduleId;
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
      <CardTitle>Your Schedule</CardTitle>
      <CardContent>
        {loading ? (
          <p>Loading schedule...</p>
        ) : schedule ? (
          <>
            <p><strong>Schedule Name:</strong> {schedule.name || 'Regular Schedule'}</p>
            
            {schedule.days && Object.keys(schedule.days).length > 0 ? (
              Object.entries(schedule.days).map(([dayIndex, daySchedule]) => {
                const dayNumber = parseInt(dayIndex, 10);
                const isToday = dayNumber === getCurrentDayIndex();
                
                return (
                  <DayCard key={dayIndex} isToday={isToday}>
                    <h3>{getDayName(dayNumber)} {isToday && '(Today)'}</h3>
                    {daySchedule.shifts && daySchedule.shifts.length > 0 ? (
                      <ScheduleTable>
                        <thead>
                          <tr>
                            <th>Shift</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          {daySchedule.shifts.map((shift, index) => (
                            <tr key={index}>
                              <td>Shift {index + 1}</td>
                              <td>{formatTime(shift.startTime)}</td>
                              <td>{formatTime(shift.endTime)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </ScheduleTable>
                    ) : (
                      <p>No shifts scheduled</p>
                    )}
                  </DayCard>
                );
              })
            ) : (
              <p>No daily schedule defined</p>
            )}
          </>
        ) : (
          <EmptyState>
            <p>No schedule assigned yet</p>
          </EmptyState>
        )}
      </CardContent>
    </Card>
  );
};

export default ScheduleView;
