import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Card, CardTitle, CardContent } from './DashboardComponents';
import styled from 'styled-components';
import { format, addHours, parse, isToday as isDateToday } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc, format as formatTZ } from 'date-fns-tz';
import { useTimeFormat } from '../../contexts/TimeFormatContext';
import { Clock, Calendar, ArrowRight } from 'phosphor-react';

const ScheduleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  
  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    font-weight: 600;
    color: #555;
    background-color: #f9f9f9;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
  
  @media (max-width: 768px) {
    th, td {
      padding: 0.75rem 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

const DayCard = styled.div`
  background-color: ${props => props.isToday ? '#f0f7ff' : 'white'};
  border: 1px solid ${props => props.isToday ? '#bbd6fb' : '#eee'};
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  ${props => props.isToday && `
    &:before {
      content: 'TODAY';
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #1a73e8;
      color: white;
      font-size: 0.7rem;
      font-weight: bold;
      padding: 3px 8px;
      border-radius: 12px;
      letter-spacing: 0.5px;
    }
  `}
  
  h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    color: ${props => props.isToday ? '#1a73e8' : '#333'};
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px dashed #ddd;
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
        
        // First check if userData already has the schedule
        if (userData && userData.schedule && Array.isArray(userData.schedule) && userData.schedule.length > 0) {
          console.log('Using schedule from userData prop:', userData.schedule);
          setSchedule(userData.schedule);
        } else {
          // Get the user document which now contains the schedule directly
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            const userDocData = userDoc.data();
            
            // Check if the user has a schedule array in their document
            if (userDocData.schedule && Array.isArray(userDocData.schedule) && userDocData.schedule.length > 0) {
              console.log('Found user schedule in Firestore:', userDocData.schedule);
              setSchedule(userDocData.schedule);
            } else if (userDocData.scheduleId) {
              // Legacy support: If user still has a scheduleId, fetch that schedule
              const scheduleId = userDocData.scheduleId;
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
        }
      } catch (error) {
        console.error('Error fetching schedule:', error);
        setError('Failed to load schedule. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserSchedule();
  }, [user, userData]);

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
        ) : error ? (
          <EmptyState>
            <div style={{ marginBottom: '1rem' }}>
              <Calendar size={48} weight="duotone" style={{ color: '#999', marginBottom: '1rem' }} />
            </div>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#555' }}>No Schedule Found</h3>
            <p style={{ margin: '0 0 1rem 0' }}>You don't have any assigned schedule yet.</p>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#777' }}>Please contact your administrator to set up your work schedule.</p>
          </EmptyState>
        ) : schedule ? (
          <div>
            {Array.isArray(schedule) ? (
              // New format: schedule is an array of schedule objects
              <>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
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
                        <h3>
                          <Calendar weight="fill" size={20} style={{ color: isToday ? '#1a73e8' : '#666' }} />
                          {scheduleItem.dayOfWeek}
                        </h3>
                        
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                            <Clock size={18} weight="fill" style={{ marginRight: '0.5rem', color: '#4CAF50' }} />
                            <div>
                              <div style={{ fontWeight: '600' }}>{formattedTimeIn}</div>
                              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '2px' }}>Time In</div>
                            </div>
                          </div>
                          
                          <ArrowRight size={16} style={{ color: '#999', margin: '0 0.5rem' }} />
                          
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Clock size={18} weight="fill" style={{ marginRight: '0.5rem', color: '#F44336' }} />
                            <div>
                              <div style={{ fontWeight: '600' }}>{formattedEndTime}</div>
                              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '2px' }}>Time Out</div>
                            </div>
                          </div>
                        </div>
                        
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          padding: '0.75rem', 
                          backgroundColor: '#f9f9f9', 
                          borderRadius: '8px',
                          fontSize: '0.9rem'
                        }}>
                          <div>
                            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Duration</div>
                            <div>{scheduleItem.shiftDuration} hours</div>
                          </div>
                          
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Time Zone</div>
                            <div style={{ fontSize: '0.85rem' }}>{userTimeRegion}</div>
                          </div>
                        </div>
                      </DayCard>
                    );
                  })}
                </div>
                
                <div style={{ marginTop: '2rem' }}>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#555' }}>Schedule Overview</h3>
                  <ScheduleTable>
                    <thead>
                      <tr>
                        <th>Day</th>
                        <th>Time In</th>
                        <th>Time Out</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
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
                          <tr key={index} style={{ backgroundColor: isToday ? '#f0f7ff' : 'transparent' }}>
                            <td style={{ fontWeight: isToday ? '600' : '400', color: isToday ? '#1a73e8' : 'inherit' }}>
                              {scheduleItem.dayOfWeek}
                              {isToday && <span style={{ marginLeft: '0.5rem', fontSize: '0.7rem', backgroundColor: '#1a73e8', color: 'white', padding: '2px 6px', borderRadius: '10px' }}>TODAY</span>}
                            </td>
                            <td>{formattedTimeIn}</td>
                            <td>{formattedEndTime}</td>
                            <td>{scheduleItem.shiftDuration} hours</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </ScheduleTable>
                  
                  <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#666', textAlign: 'right' }}>
                    All times shown in your local time zone: <strong>{userTimeRegion}</strong>
                  </div>
                </div>
              </>
            ) : (
              // Legacy format: schedule is an object with shifts property
              <>
                <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid #4CAF50' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar weight="fill" size={20} style={{ color: '#4CAF50' }} />
                    {schedule.name || 'Standard Schedule'}
                  </h3>
                  <p style={{ margin: 0, color: '#666' }}>Your assigned work schedule</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                  {schedule.shifts && schedule.shifts.map((shift, index) => {
                    const today = new Date();
                    const isToday = today.getDay() === shift.day;
                    
                    return (
                      <DayCard key={index} isToday={isToday}>
                        <h3>
                          <Calendar weight="fill" size={20} style={{ color: isToday ? '#1a73e8' : '#666' }} />
                          {getDayName(shift.day)}
                        </h3>
                        
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                            <Clock size={18} weight="fill" style={{ marginRight: '0.5rem', color: '#4CAF50' }} />
                            <div>
                              <div style={{ fontWeight: '600' }}>{formatTime(shift.timeIn)}</div>
                              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '2px' }}>Time In</div>
                            </div>
                          </div>
                          
                          <ArrowRight size={16} style={{ color: '#999', margin: '0 0.5rem' }} />
                          
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Clock size={18} weight="fill" style={{ marginRight: '0.5rem', color: '#F44336' }} />
                            <div>
                              <div style={{ fontWeight: '600' }}>{formatTime(shift.timeOut)}</div>
                              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '2px' }}>Time Out</div>
                            </div>
                          </div>
                        </div>
                      </DayCard>
                    );
                  })}
                </div>
                
                <div style={{ marginTop: '2rem' }}>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#555' }}>Schedule Overview</h3>
                  <ScheduleTable>
                    <thead>
                      <tr>
                        <th>Day</th>
                        <th>Time In</th>
                        <th>Time Out</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.shifts && schedule.shifts.map((shift, index) => {
                        const today = new Date();
                        const isToday = today.getDay() === shift.day;
                        
                        // Calculate duration in hours
                        const timeInParts = shift.timeIn.split(':').map(Number);
                        const timeOutParts = shift.timeOut.split(':').map(Number);
                        const timeInHours = timeInParts[0] + timeInParts[1]/60;
                        const timeOutHours = timeOutParts[0] + timeOutParts[1]/60;
                        let duration = timeOutHours - timeInHours;
                        if (duration < 0) duration += 24; // Handle overnight shifts
                        const durationFormatted = Math.round(duration * 10) / 10; // Round to 1 decimal place
                        
                        return (
                          <tr key={index} style={{ backgroundColor: isToday ? '#f0f7ff' : 'transparent' }}>
                            <td style={{ fontWeight: isToday ? '600' : '400', color: isToday ? '#1a73e8' : 'inherit' }}>
                              {getDayName(shift.day)}
                              {isToday && <span style={{ marginLeft: '0.5rem', fontSize: '0.7rem', backgroundColor: '#1a73e8', color: 'white', padding: '2px 6px', borderRadius: '10px' }}>TODAY</span>}
                            </td>
                            <td>{formatTime(shift.timeIn)}</td>
                            <td>{formatTime(shift.timeOut)}</td>
                            <td>{durationFormatted} hours</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </ScheduleTable>
                </div>
              </>
            )}
          </div>
        ) : (
          <EmptyState>
            <div style={{ marginBottom: '1rem' }}>
              <Calendar size={48} weight="duotone" style={{ color: '#999', marginBottom: '1rem' }} />
            </div>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#555' }}>No Schedule Found</h3>
            <p style={{ margin: '0 0 1rem 0' }}>You don't have any assigned schedule yet.</p>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#777' }}>Please contact your administrator to set up your work schedule.</p>
          </EmptyState>
        )}
      </CardContent>
    </Card>
  );
};

export default ScheduleView;
