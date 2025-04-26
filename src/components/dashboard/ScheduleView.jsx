import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Card, CardTitle, CardContent } from './DashboardComponents';
import styled from 'styled-components';
import { format, addHours, parse } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc, format as formatTZ } from 'date-fns-tz';
import { useTimeFormat } from '../../contexts/TimeFormatContext';

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

const ScheduleView = ({ user, userData }) => {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { use24HourFormat } = useTimeFormat();
  const userTimeRegion = userData?.timeRegion || Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Manila';

  // No need to update userTimeRegion as it's now derived from userData directly

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
          
          // Set the user's time region
          if (userData.timeRegion) {
            setUserTimeRegion(userData.timeRegion);
          }
          
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
  
  const formatTime = (timeString, sourceTimeRegion = null, targetTimeRegion = userTimeRegion) => {
    if (!timeString) return 'N/A';
    
    try {
      // If no source time region is provided, just format the time string
      if (!sourceTimeRegion || sourceTimeRegion === targetTimeRegion) {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(parseInt(hours, 10));
        date.setMinutes(parseInt(minutes, 10));
        
        return date.toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit', 
          hour12: !use24HourFormat 
        });
      }
      
      // Convert time from source time region to target time region
      const [hours, minutes] = timeString.split(':');
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset to start of day
      
      // Create a date object in the source time zone
      const sourceDate = new Date(today);
      sourceDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);
      
      // Convert to UTC then to target time zone
      const sourceZonedDate = zonedTimeToUtc(sourceDate, sourceTimeRegion);
      const targetZonedDate = utcToZonedTime(sourceZonedDate, targetTimeRegion);
      
      // Format based on user's time format preference
      const formatString = use24HourFormat ? 'HH:mm' : 'h:mm a';
      return formatTZ(targetZonedDate, formatString, { timeZone: targetTimeRegion });
    } catch (error) {
      console.error('Error formatting time:', error);
      return timeString;
    }
  };
  
  const calculateEndTime = (startTime, duration, timeRegion) => {
    try {
      // Parse the start time
      const [hours, minutes] = startTime.split(':').map(Number);
      
      // Create a date object for today with the start time
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset to start of day
      
      const startDate = new Date(today);
      startDate.setHours(hours, minutes, 0, 0);
      
      // Add the duration to get the end time
      const endDate = addHours(startDate, duration);
      
      // Format the end time
      return format(endDate, 'HH:mm');
    } catch (error) {
      console.error('Error calculating end time:', error);
      let endHour = (parseInt(startTime.split(':')[0], 10) + duration) % 24;
      let endMinute = startTime.split(':')[1];
      return `${endHour.toString().padStart(2, '0')}:${endMinute}`;
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
                  
                  // Get the schedule's time region
                  const scheduleTimeRegion = scheduleItem.timeRegion || 'Asia/Manila';
                  
                  // Format the time in the user's preferred time region
                  const formattedTimeIn = formatTime(scheduleItem.timeIn, scheduleTimeRegion, userTimeRegion);
                  const duration = scheduleItem.shiftDuration || 8;
                  
                  // Calculate end time based on start time and duration
                  const endTime = calculateEndTime(scheduleItem.timeIn, duration, scheduleTimeRegion);
                  const formattedEndTime = formatTime(endTime, scheduleTimeRegion, userTimeRegion);
                  
                  return (
                    <DayCard key={index} isToday={isToday}>
                      <h3>{scheduleItem.dayOfWeek}</h3>
                      <p>
                        <strong>Time In:</strong> {formattedTimeIn} | 
                        <strong>Duration:</strong> {scheduleItem.shiftDuration} hours
                      </p>
                      <p>
                        <strong>Estimated Time Out:</strong> {formattedEndTime}
                      </p>
                      <p>
                        <strong>Original Time Region:</strong> {scheduleTimeRegion}
                      </p>
                      <p>
                        <strong>Displayed In:</strong> {userTimeRegion}
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
                      // Get the schedule's time region
                      const scheduleTimeRegion = scheduleItem.timeRegion || 'Asia/Manila';
                      
                      // Format the time in the user's preferred time region
                      const formattedTimeIn = formatTime(scheduleItem.timeIn, scheduleTimeRegion, userTimeRegion);
                      const duration = scheduleItem.shiftDuration || 8;
                      
                      // Calculate end time based on start time and duration
                      const endTime = calculateEndTime(scheduleItem.timeIn, duration, scheduleTimeRegion);
                      const formattedEndTime = formatTime(endTime, scheduleTimeRegion, userTimeRegion);
                      
                      return (
                        <tr key={index}>
                          <td>{scheduleItem.dayOfWeek}</td>
                          <td>{formattedTimeIn}</td>
                          <td>{formattedEndTime}</td>
                          <td>{scheduleItem.shiftDuration} hours</td>
                          <td>
                            <div>{scheduleTimeRegion}</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                              Displayed in: {userTimeRegion}
                            </div>
                          </td>
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
