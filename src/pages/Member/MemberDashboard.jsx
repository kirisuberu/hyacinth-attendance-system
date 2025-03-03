import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import styled from 'styled-components';
import { collection, query, where, getDocs, orderBy, limit, Timestamp } from 'firebase/firestore';
import { format, differenceInDays, parseISO, isToday, isThisWeek, isThisMonth } from 'date-fns';

const DashboardContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  overflow-x: hidden;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    padding: 2rem;
    max-width: 100%;
  }
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  font-size: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.25rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const StatCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin: 0;
    color: #4b5563;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    font-weight: 600;
    
    @media (min-width: 640px) {
      font-size: 0.875rem;
    }
  }

  p {
    margin: 0.5rem 0 0;
    font-size: 1.25rem;
    font-weight: bold;
    color: #111827;
    
    @media (min-width: 640px) {
      font-size: 1.5rem;
    }
  }
  
  .trend {
    font-size: 0.75rem;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    color: #4b5563;
    
    @media (min-width: 640px) {
      font-size: 0.875rem;
    }
  }
  
  .trend-up {
    color: #059669;
    font-weight: 500;
  }
  
  .trend-down {
    color: #dc2626;
    font-weight: 500;
  }
  
  @media (min-width: 640px) {
    padding: 1.25rem;
  }
  
  @media (min-width: 1024px) {
    padding: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.125rem;
  margin: 1.5rem 0 1rem;
  color: #1a1a1a;
  border-bottom: 2px solid #f3f4f6;
  padding-bottom: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
    margin: 2rem 0 1rem;
  }
`;

const RecentActivityCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ActivityHeader = styled.div`
  background: #f9fafb;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  
  h3 {
    margin: 0;
    font-size: 1rem;
    color: #1a1a1a;
    
    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }
  
  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const ActivityList = styled.div`
  padding: 0;
`;

const ActivityItem = styled.div`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  &:last-child {
    border-bottom: none;
  }
  
  .activity-info {
    flex: 1;
  }
  
  .activity-type {
    font-weight: 500;
    color: #111827;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }
  
  .activity-time {
    color: #4b5563;
    font-size: 0.75rem;
  }
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    padding: 0.75rem 1.25rem;
    
    .activity-type {
      font-size: 0.9375rem;
    }
    
    .activity-time {
      font-size: 0.8125rem;
    }
  }
  
  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => {
    if (props.status?.toLowerCase().includes('late')) return '#FEE2E2';
    if (props.status?.toLowerCase().includes('early')) return '#DBEAFE';
    if (props.status?.toLowerCase().includes('on time')) return '#DCFCE7';
    if (props.status?.toLowerCase().includes('overtime')) return '#FEF3C7';
    return '#F3F4F6';
  }};
  color: ${props => {
    if (props.status?.toLowerCase().includes('late')) return '#991B1B';
    if (props.status?.toLowerCase().includes('early')) return '#1E40AF';
    if (props.status?.toLowerCase().includes('on time')) return '#166534';
    if (props.status?.toLowerCase().includes('overtime')) return '#92400E';
    return '#1F2937';
  }};
  
  @media (min-width: 640px) {
    padding: 0.25rem 0.75rem;
    font-size: 0.8125rem;
  }
`;

const EmptyState = styled.div`
  padding: 2rem;
  text-align: center;
  color: #6b7280;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const LoadingState = styled.div`
  padding: 2rem;
  text-align: center;
  color: #6b7280;
`;

const UpcomingScheduleCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1.5rem;
  
  h3 {
    margin: 0 0 1rem;
    font-size: 1rem;
    color: #111827;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #f3f4f6;
  }
  
  .schedule-item {
    display: flex;
    flex-direction: column;
    padding: 0.75rem 0;
    border-bottom: 1px solid #f3f4f6;
    
    &:last-child {
      border-bottom: none;
    }
    
    .day {
      font-weight: 500;
      margin-bottom: 0.25rem;
      font-size: 0.875rem;
      color: #111827;
    }
    
    .time {
      color: #4b5563;
      font-size: 0.75rem;
    }
  }
  
  @media (min-width: 640px) {
    padding: 1.25rem;
    
    h3 {
      font-size: 1.125rem;
    }
    
    .schedule-item {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0.875rem 0;
      
      .day {
        margin-bottom: 0;
        font-size: 0.9375rem;
      }
      
      .time {
        font-size: 0.8125rem;
      }
    }
  }
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

function MemberDashboard() {
  const [stats, setStats] = useState({
    totalAttendance: 0,
    onTimePercentage: 0,
    weeklyAttendance: 0,
    monthlyAttendance: 0,
    punctualityRate: 0
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [userSchedule, setUserSchedule] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        setLoading(true);
        
        // Fetch user's attendance records
        const attendanceRef = collection(db, 'attendance');
        const userAttendanceQuery = query(
          attendanceRef,
          where('userId', '==', user.uid)
        );
        
        const querySnapshot = await getDocs(userAttendanceQuery);
        
        if (querySnapshot.empty) {
          // If no records found with user ID, try with email as fallback
          const emailQuery = query(
            attendanceRef,
            where('email', '==', user.email)
          );
          
          const emailSnapshot = await getDocs(emailQuery);
          
          if (emailSnapshot.empty) {
            setStats({
              totalAttendance: 0,
              onTimePercentage: 0,
              weeklyAttendance: 0,
              monthlyAttendance: 0,
              punctualityRate: 0
            });
            setRecentActivity([]);
            setLoading(false);
            return;
          }
          
          processAttendanceData(emailSnapshot);
        } else {
          processAttendanceData(querySnapshot);
        }
        
        // Fetch user's schedule
        const userRef = collection(db, 'users');
        const userQuery = query(userRef, where('userId', '==', user.uid));
        const userSnapshot = await getDocs(userQuery);
        
        if (!userSnapshot.empty) {
          const userData = userSnapshot.docs[0].data();
          if (userData.schedule) {
            setUserSchedule(userData.schedule);
          }
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to load dashboard data. Please try again later.');
        setLoading(false);
      }
    };
    
    const processAttendanceData = (snapshot) => {
      try {
        const attendanceData = snapshot.docs.map(doc => {
          const data = doc.data();
          
          // Convert Firestore timestamp to JavaScript Date
          let timestamp;
          if (data.timestamp && data.timestamp.seconds) {
            timestamp = new Date(data.timestamp.seconds * 1000);
          } else if (data.date) {
            timestamp = new Date(data.date);
          } else {
            timestamp = new Date();
          }
          
          return {
            id: doc.id,
            ...data,
            formattedDate: format(timestamp, 'yyyy-MM-dd'),
            formattedTime: format(timestamp, 'hh:mm a'),
            dayOfWeek: format(timestamp, 'EEEE'),
            timestamp
          };
        });
        
        // Sort by timestamp, newest first
        const sortedData = attendanceData.sort((a, b) => b.timestamp - a.timestamp);
        
        // Get recent activity (last 5 records)
        const recent = sortedData.slice(0, 5);
        setRecentActivity(recent);
        
        // Calculate statistics
        const totalRecords = sortedData.length;
        const onTimeRecords = sortedData.filter(record => 
          record.status === 'On Time' || record.status === 'Early'
        ).length;
        
        const weeklyRecords = sortedData.filter(record => 
          isThisWeek(record.timestamp)
        ).length;
        
        const monthlyRecords = sortedData.filter(record => 
          isThisMonth(record.timestamp)
        ).length;
        
        // Calculate punctuality rate (percentage of on-time or early records)
        const punctualityRate = totalRecords > 0 ? Math.round((onTimeRecords / totalRecords) * 100) : 0;
        
        setStats({
          totalAttendance: totalRecords,
          onTimePercentage: punctualityRate,
          weeklyAttendance: weeklyRecords,
          monthlyAttendance: monthlyRecords,
          punctualityRate
        });
      } catch (err) {
        console.error("Error processing attendance data:", err);
        setError("Error processing data. Please try again later.");
      }
    };

    fetchUserData();
  }, []);

  const formatScheduleTime = (timeString) => {
    if (!timeString) return '';
    try {
      const [hours, minutes] = timeString.split(':').map(Number);
      const date = new Date();
      date.setHours(hours, minutes, 0);
      return format(date, 'hh:mm a');
    } catch (error) {
      return timeString;
    }
  };

  if (loading) {
    return (
      <DashboardContainer>
        <Title>My Dashboard</Title>
        <LoadingState>Loading your dashboard data...</LoadingState>
      </DashboardContainer>
    );
  }

  if (error) {
    return (
      <DashboardContainer>
        <Title>My Dashboard</Title>
        <EmptyState>{error}</EmptyState>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <Title>My Dashboard</Title>
      
      <StatsGrid>
        <StatCard>
          <h3>Total Attendance</h3>
          <p>{stats.totalAttendance}</p>
          <div className="trend">
            Records in the system
          </div>
        </StatCard>
        <StatCard>
          <h3>Punctuality Rate</h3>
          <p>{stats.punctualityRate}%</p>
          <div className={`trend ${stats.punctualityRate >= 80 ? 'trend-up' : 'trend-down'}`}>
            {stats.punctualityRate >= 80 ? '↑ Good standing' : '↓ Needs improvement'}
          </div>
        </StatCard>
        <StatCard>
          <h3>This Week</h3>
          <p>{stats.weeklyAttendance}</p>
          <div className="trend">
            Records this week
          </div>
        </StatCard>
        <StatCard>
          <h3>This Month</h3>
          <p>{stats.monthlyAttendance}</p>
          <div className="trend">
            Records this month
          </div>
        </StatCard>
      </StatsGrid>
      
      <SectionTitle>Recent Activity</SectionTitle>
      <RecentActivityCard>
        <ActivityHeader>
          <h3>Latest Attendance Records</h3>
        </ActivityHeader>
        <ActivityList>
          {recentActivity.length > 0 ? (
            recentActivity.map(activity => (
              <ActivityItem key={activity.id}>
                <div className="activity-info">
                  <div className="activity-type">
                    {activity.type} - {activity.formattedDate} ({activity.dayOfWeek})
                  </div>
                  <div className="activity-time">
                    {activity.formattedTime}
                    {activity.scheduleTime && ` - Schedule: ${formatScheduleTime(activity.scheduleTime)}`}
                  </div>
                </div>
                <StatusBadge status={activity.status}>
                  {activity.status || 'Unknown'}
                </StatusBadge>
              </ActivityItem>
            ))
          ) : (
            <ActivityItem>
              <div className="activity-info">
                <div className="activity-type">No recent activity</div>
                <div className="activity-time">Use the Time In/Out buttons to record your attendance</div>
              </div>
            </ActivityItem>
          )}
        </ActivityList>
      </RecentActivityCard>
      
      <SectionTitle>My Schedule</SectionTitle>
      <UpcomingScheduleCard>
        <h3>Weekly Schedule</h3>
        {Object.keys(userSchedule).length > 0 ? (
          Object.entries(userSchedule).map(([id, schedule]) => (
            <div className="schedule-item" key={id}>
              <div className="day">
                {schedule.startDay} {schedule.startDay !== schedule.endDay ? `- ${schedule.endDay}` : ''}
              </div>
              <div className="time">
                {formatScheduleTime(schedule.startTime)} - {formatScheduleTime(schedule.endTime)}
              </div>
            </div>
          ))
        ) : (
          <div className="schedule-item">
            <div className="day">No schedule configured</div>
            <div className="time">Default: 9:00 AM - 6:00 PM</div>
          </div>
        )}
      </UpcomingScheduleCard>
    </DashboardContainer>
  );
}

export default MemberDashboard;
