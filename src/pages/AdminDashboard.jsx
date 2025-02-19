import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { collection, query, getDocs } from 'firebase/firestore';

const DashboardContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #1a1a1a;
  margin-bottom: 2rem;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    color: #4b5563;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #1a1a1a;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const RecentActivitySection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    color: #1a1a1a;
    margin-bottom: 1rem;
  }
`;

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ActivityItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }

  .time {
    color: #6b7280;
    font-size: 0.875rem;
  }

  .description {
    color: #1a1a1a;
    margin-top: 0.25rem;
  }
`;

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeToday: 0,
    pendingRequests: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch users count
        const usersQuery = query(collection(db, 'users'));
        const usersSnapshot = await getDocs(usersQuery);
        const totalUsers = usersSnapshot.size;

        // Update stats
        setStats(prev => ({
          ...prev,
          totalUsers
        }));

        // Fetch recent activity (attendance records)
        const attendanceQuery = query(collection(db, 'attendance'));
        const attendanceSnapshot = await getDocs(attendanceQuery);
        
        const activity = attendanceSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setRecentActivity(activity);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      
      <StatsGrid>
        <StatCard>
          <h2>Total Users</h2>
          <p>{stats.totalUsers}</p>
        </StatCard>
        <StatCard>
          <h2>Active Today</h2>
          <p>{stats.activeToday}</p>
        </StatCard>
        <StatCard>
          <h2>Pending Requests</h2>
          <p>{stats.pendingRequests}</p>
        </StatCard>
      </StatsGrid>

      <RecentActivitySection>
        <h2>Recent Activity</h2>
        <ActivityList>
          {recentActivity.map(activity => (
            <ActivityItem key={activity.id}>
              <div className="time">{new Date(activity.timestamp).toLocaleString()}</div>
              <div className="description">{activity.description}</div>
            </ActivityItem>
          ))}
          {recentActivity.length === 0 && (
            <ActivityItem>
              <div className="description">No recent activity</div>
            </ActivityItem>
          )}
        </ActivityList>
      </RecentActivitySection>
    </DashboardContainer>
  );
}

export default AdminDashboard;
