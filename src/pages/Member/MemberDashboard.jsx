import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0;
    color: #6b7280;
    font-size: 0.875rem;
    text-transform: uppercase;
  }

  p {
    margin: 0.5rem 0 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #1a1a1a;
  }
`;

function MemberDashboard() {
  const [stats, setStats] = useState({
    totalAttendance: 0,
    onTimePercentage: 0,
    upcomingSchedules: 0
  });

  useEffect(() => {
    const fetchUserStats = async () => {
      const user = auth.currentUser;
      if (!user) return;

      // TODO: Implement fetching user-specific stats from your database
      // This is a placeholder for demonstration
      setStats({
        totalAttendance: 45,
        onTimePercentage: 95,
        upcomingSchedules: 3
      });
    };

    fetchUserStats();
  }, []);

  return (
    <DashboardContainer>
      <Title>My Dashboard</Title>
      <StatsGrid>
        <StatCard>
          <h3>Total Attendance</h3>
          <p>{stats.totalAttendance}</p>
        </StatCard>
        <StatCard>
          <h3>On-Time Percentage</h3>
          <p>{stats.onTimePercentage}%</p>
        </StatCard>
        <StatCard>
          <h3>Upcoming Schedules</h3>
          <p>{stats.upcomingSchedules}</p>
        </StatCard>
      </StatsGrid>
    </DashboardContainer>
  );
}

export default MemberDashboard;
