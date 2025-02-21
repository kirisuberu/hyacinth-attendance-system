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

const ScheduleGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const DayCard = styled.div`
  padding: 1.5rem;
  background: ${props => props.isCurrentDay ? '#ebf5ff' : '#f8fafc'};
  border-radius: 6px;
  border: 1px solid ${props => props.isCurrentDay ? '#3b82f6' : '#e2e8f0'};
  transition: all 0.2s ease-in-out;
  
  ${props => props.isCurrentDay && `
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);
    transform: translateY(-2px);
  `}
`;

const DayTitle = styled.h2`
  font-size: 1.25rem;
  color: ${props => props.isCurrentDay ? '#3b82f6' : '#1a1a1a'};
  margin-bottom: 1rem;
`;

const TimeInfo = styled.div`
  display: flex;
  gap: 2rem;
  color: #4b5563;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:before {
      content: '•';
      color: #3b82f6;
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

  if (loading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return <Container>{error}</Container>;
  }

  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.

  const formatDayName = (day) => {
    return day.charAt(0).toUpperCase() + day.slice(1);
  };

  const formatTime = (time) => {
    if (!time) return 'Not set';
    
    // Parse the 24-hour time
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    
    // Convert to 12-hour format
    const period = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    
    return `${hour12}:${minutes} ${period}`;
  };

  return (
    <Container>
      <Title>My Schedule</Title>
      <ScheduleGrid>
        {days.map((day, index) => (
          <DayCard key={day} isCurrentDay={index === today}>
            <DayTitle isCurrentDay={index === today}>{formatDayName(day)}</DayTitle>
            <TimeInfo>
              <span>Time In: {formatTime(schedule[day]?.timeIn)}</span>
              <span>Time Out: {formatTime(schedule[day]?.timeOut)}</span>
            </TimeInfo>
          </DayCard>
        ))}
      </ScheduleGrid>
    </Container>
  );
}

export default MySchedule;
