import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { auth } from '../firebase';
import { getUserById } from '../utils/userService';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Container = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 2rem;
`;

const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-left: 1rem;
`;

const ShiftBlock = styled.div`
  position: relative;
  padding: 1rem 0;
  
  &:before {
    content: '';
    position: absolute;
    left: -1.6rem;
    top: 0;
    width: 2px;
    height: 100%;
    background: #e2e8f0;
    z-index: 1;
  }
  
  &:first-child:before {
    top: 50%;
    height: 50%;
  }
  
  &:last-child:before {
    height: 50%;
  }
`;

const ShiftCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid ${props => props.isCurrentShift ? '#3b82f6' : '#e2e8f0'};
  background: ${props => props.isCurrentShift ? '#ebf5ff' : 'white'};
  overflow: hidden;
  margin-right: 1rem;
  display: flex;
  
  &:hover {
    transform: translateX(4px);
    transition: transform 0.2s ease;
  }
`;

const ShiftContent = styled.div`
  flex: 1;
`;

const ShiftHeader = styled.div`
  padding: 0.75rem 1rem;
  background: ${props => props.isCurrentShift ? '#3b82f6' : '#f8fafc'};
  color: ${props => props.isCurrentShift ? 'white' : '#1f2937'};
  font-weight: 600;
`;

const TimeInfo = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1.5rem;
  align-items: center;
`;

const TimePoint = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.type === 'start' ? '#10b981' : '#ef4444'};
  }
`;

const TimeText = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
`;

const ShiftDuration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: ${props => props.isCurrentShift ? '#3b82f6' : '#f8fafc'};
  border-left: 1px solid ${props => props.isCurrentShift ? '#2563eb' : '#e2e8f0'};
  
  .hours {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${props => props.isCurrentShift ? 'white' : '#1f2937'};
    line-height: 1;
  }
  
  .label {
    font-size: 0.875rem;
    color: ${props => props.isCurrentShift ? 'rgba(255, 255, 255, 0.9)' : '#6b7280'};
    margin-top: 0.25rem;
  }
`;

const TimeGap = styled.div`
  position: relative;
  margin: 0.5rem 0;
  padding-left: 2rem;
  color: #6b7280;
  font-size: 0.875rem;
  
  &:before {
    content: '';
    position: absolute;
    left: -1.6rem;
    top: 50%;
    width: 8px;
    height: 8px;
    border: 2px solid #e2e8f0;
    border-radius: 50%;
    background: white;
    transform: translateY(-50%);
    z-index: 2;
  }
  
  .gap-text {
    background: white;
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    border: 1px solid #e2e8f0;
    font-size: 0.75rem;
    color: #6b7280;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    
    svg {
      width: 14px;
      height: 14px;
      color: #9ca3af;
    }
  }
`;

function MySchedule() {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          setError('User not authenticated');
          setLoading(false);
          return;
        }

        // Get user document by UID first
        let userData = await getUserById(user.uid);
        
        if (!userData) {
          // If no document found by UID, log this for debugging
          console.warn('No user document found with UID:', user.uid);
          
          // Query by email as fallback
          const usersRef = collection(db, 'users');
          const q = query(usersRef, where('email', '==', user.email));
          const querySnapshot = await getDocs(q);
          
          if (querySnapshot.empty) {
            setError('No user profile found. Please contact an administrator.');
            setLoading(false);
            return;
          }
          
          if (querySnapshot.size > 1) {
            console.error('Multiple user documents found with email:', user.email);
            setError('Multiple user profiles found. Please contact an administrator.');
            setLoading(false);
            return;
          }
          
          userData = {
            id: querySnapshot.docs[0].id,
            ...querySnapshot.docs[0].data()
          };
        }

        if (!userData.schedule) {
          setError('No schedule found in your user profile');
          setLoading(false);
          return;
        }

        console.log('Retrieved user schedule:', userData.schedule);
        setSchedule(userData.schedule);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching schedule:', err);
        setError('Failed to load schedule: ' + err.message);
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  const formatDayName = (day) => {
    return day.charAt(0).toUpperCase() + day.slice(1);
  };

  const formatTime = (time) => {
    if (!time) return 'Not set';
    
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    
    return `${hour12}:${minutes} ${period}`;
  };

  const isCurrentShift = (shift) => {
    if (!shift || !shift.startDay || !shift.endDay || !shift.startTime || !shift.endTime) {
      return false;
    }

    const today = new Date().getDay();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    
    // Check if the shift starts or ends today
    if (days[today] !== shift.startDay.toLowerCase() && days[today] !== shift.endDay.toLowerCase()) {
      return false;
    }
    
    const [startHour, startMinutes] = shift.startTime.split(':').map(Number);
    const [endHour, endMinutes] = shift.endTime.split(':').map(Number);
    
    const currentTime = currentHour * 60 + currentMinutes;
    const startTime = startHour * 60 + startMinutes;
    const endTime = endHour * 60 + endMinutes;
    
    return currentTime >= startTime && currentTime <= endTime;
  };

  const getShiftOrder = (day) => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days.indexOf(day.toLowerCase());
  };

  const sortShifts = (shifts) => {
    return shifts.sort((a, b) => {
      const dayOrderA = getShiftOrder(a.startDay);
      const dayOrderB = getShiftOrder(b.startDay);
      
      if (dayOrderA !== dayOrderB) return dayOrderA - dayOrderB;
      
      const [startHourA] = a.startTime.split(':').map(Number);
      const [startHourB] = b.startTime.split(':').map(Number);
      return startHourA - startHourB;
    });
  };

  const calculateShiftDuration = (shift) => {
    if (!shift || !shift.startDay || !shift.endDay || !shift.startTime || !shift.endTime) {
      return 0;
    }

    const [startHour, startMinutes] = shift.startTime.split(':').map(Number);
    const [endHour, endMinutes] = shift.endTime.split(':').map(Number);
    
    let duration;
    if (shift.startDay === shift.endDay) {
      // Same day calculation
      duration = (endHour * 60 + endMinutes) - (startHour * 60 + startMinutes);
    } else {
      // Different day calculation (assuming next day)
      duration = ((24 + endHour) * 60 + endMinutes) - (startHour * 60 + startMinutes);
    }
    
    return Math.round(duration / 60 * 10) / 10; // Round to 1 decimal place
  };

  const calculateTimeBetweenShifts = (currentShift, nextShift) => {
    if (!currentShift || !nextShift || 
        !currentShift.endDay || !nextShift.startDay || 
        !currentShift.endTime || !nextShift.startTime) {
      return null;
    }

    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentEndDay = days.indexOf(currentShift.endDay.toLowerCase());
    const nextStartDay = days.indexOf(nextShift.startDay.toLowerCase());
    
    if (currentEndDay === -1 || nextStartDay === -1) return null;
    
    const [currentEndHour, currentEndMinutes] = currentShift.endTime.split(':').map(Number);
    const [nextStartHour, nextStartMinutes] = nextShift.startTime.split(':').map(Number);
    
    // Calculate total minutes between shifts
    let dayDiff = nextStartDay - currentEndDay;
    if (dayDiff < 0) dayDiff += 7; // Handle week wraparound
    
    let totalMinutes = dayDiff * 24 * 60; // Days to minutes
    
    // Add time difference within the day
    const currentEndTotalMinutes = currentEndHour * 60 + currentEndMinutes;
    const nextStartTotalMinutes = nextStartHour * 60 + nextStartMinutes;
    
    if (dayDiff === 0) {
      totalMinutes += nextStartTotalMinutes - currentEndTotalMinutes;
    } else {
      totalMinutes += nextStartTotalMinutes + (24 * 60 - currentEndTotalMinutes);
    }
    
    // Convert to days and hours
    const dayCount = Math.floor(totalMinutes / (24 * 60));
    const hours = Math.round((totalMinutes % (24 * 60)) / 60 * 10) / 10;
    
    return { days: dayCount, hours };
  };

  const formatGapDuration = (gap) => {
    if (!gap) return '';
    const { days, hours } = gap;
    
    if (days === 0) {
      return `${hours} hours break`;
    } else if (hours === 0) {
      return `${days} day${days > 1 ? 's' : ''} break`;
    } else {
      return `${days} day${days > 1 ? 's' : ''} and ${hours} hours break`;
    }
  };

  if (loading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return <Container>{error}</Container>;
  }

  if (!schedule) {
    return <Container>No schedule found</Container>;
  }

  const sortedShifts = sortShifts(Object.values(schedule).filter(shift => 
    shift && shift.startDay && shift.endDay && shift.startTime && shift.endTime
  ));

  return (
    <Container>
      <Title>My Schedule</Title>
      <TimelineContainer>
        {sortedShifts.map((shift, index) => (
          <React.Fragment key={shift.id || index}>
            <ShiftBlock>
              <ShiftCard isCurrentShift={isCurrentShift(shift)}>
                <ShiftContent>
                  <ShiftHeader isCurrentShift={isCurrentShift(shift)}>
                    {formatDayName(shift.startDay)}
                    {shift.startDay !== shift.endDay && ` - ${formatDayName(shift.endDay)}`}
                  </ShiftHeader>
                  <TimeInfo>
                    <TimePoint type="start">
                      <TimeText>Starts at {formatTime(shift.startTime)}</TimeText>
                    </TimePoint>
                    <TimePoint type="end">
                      <TimeText>Ends at {formatTime(shift.endTime)}</TimeText>
                    </TimePoint>
                  </TimeInfo>
                </ShiftContent>
                <ShiftDuration isCurrentShift={isCurrentShift(shift)}>
                  <span className="hours">{calculateShiftDuration(shift)}</span>
                  <span className="label">hours</span>
                </ShiftDuration>
              </ShiftCard>
            </ShiftBlock>
            {index < sortedShifts.length - 1 && (
              <TimeGap>
                <span className="gap-text">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {formatGapDuration(calculateTimeBetweenShifts(shift, sortedShifts[index + 1]))}
                </span>
              </TimeGap>
            )}
          </React.Fragment>
        ))}
      </TimelineContainer>
    </Container>
  );
}

export default MySchedule;
