import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { auth } from '../../firebase';
import { getUserById } from '../../utils/userService';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

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

        // First try to get user by UID
        let userData = await getUserById(user.uid);
        
        // If not found, try to get user by email
        if (!userData) {
          const usersRef = collection(db, 'users');
          const q = query(usersRef, where('email', '==', user.email));
          const querySnapshot = await getDocs(q);
          
          if (!querySnapshot.empty) {
            userData = {
              id: querySnapshot.docs[0].id,
              ...querySnapshot.docs[0].data()
            };
          }
        }

        if (!userData || !userData.schedule) {
          setError('Schedule not found');
          setLoading(false);
          return;
        }

        setSchedule(userData.schedule);
      } catch (err) {
        console.error('Error fetching schedule:', err);
        setError('Failed to load schedule');
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  if (loading) {
    return <div>Loading schedule...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!schedule) {
    return <div>No schedule found</div>;
  }

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });

  return (
    <Container>
      <Title>My Schedule</Title>
      <ScheduleGrid>
        {days.map((day) => {
          const isCurrentDay = day === currentDay;
          return (
            <DayCard key={day} isCurrentDay={isCurrentDay}>
              <DayTitle isCurrentDay={isCurrentDay}>{day}</DayTitle>
              <TimeInfo>
                <span>Time In: {schedule[day]?.timeIn || 'Not set'}</span>
                <span>Time Out: {schedule[day]?.timeOut || 'Not set'}</span>
              </TimeInfo>
            </DayCard>
          );
        })}
      </ScheduleGrid>
    </Container>
  );
}

export default MySchedule;
