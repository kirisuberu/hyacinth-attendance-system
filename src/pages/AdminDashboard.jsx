import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { collection, query, getDocs, where, orderBy, limit, Timestamp, onSnapshot } from 'firebase/firestore';
import { format, startOfDay, endOfDay, subDays, parseISO } from 'date-fns';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #1a1a1a;
  margin-bottom: 2rem;
`;

const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideContent = styled.div`
  display: flex;
  flex-direction: column;
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
  
  .notes {
    color: #4b5563;
    margin-top: 0.25rem;
    font-size: 0.875rem;
    font-style: italic;
  }
`;

const ChartContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  height: 300px;
  
  h2 {
    color: #1a1a1a;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Tab = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: ${props => props.active ? '#4b5563' : '#e5e7eb'};
  color: ${props => props.active ? 'white' : '#4b5563'};
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 0.5rem;
  
  &:hover {
    background: ${props => props.active ? '#4b5563' : '#d1d5db'};
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => {
    switch(props.status?.toLowerCase()) {
      case 'late': return '#ef4444';
      case 'early': return '#3b82f6';
      case 'on time': return '#10b981';
      case 'overtime': return '#f59e0b';
      default: return '#6b7280';
    }
  }};
  color: white;
`;

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeToday: 0,
    pendingRequests: 0,
    lateToday: 0,
    onTimeToday: 0,
    earlyToday: 0,
    absentToday: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);
  const [attendanceByStatus, setAttendanceByStatus] = useState([]);
  const [attendanceTrend, setAttendanceTrend] = useState([]);
  const [userTypes, setUserTypes] = useState([]);
  const [activeTab, setActiveTab] = useState('today');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // Fetch users count and breakdown by type
        const usersQuery = query(collection(db, 'users'));
        const usersSnapshot = await getDocs(usersQuery);
        const totalUsers = usersSnapshot.size;
        
        // Count users by type
        const userTypeCount = {
          admin: 0,
          accountant: 0,
          member: 0
        };
        
        usersSnapshot.forEach(doc => {
          const userData = doc.data();
          if (userData.userType && userTypeCount[userData.userType] !== undefined) {
            userTypeCount[userData.userType]++;
          }
        });
        
        setUserTypes([
          { name: 'Admin', value: userTypeCount.admin },
          { name: 'Accountant', value: userTypeCount.accountant },
          { name: 'Member', value: userTypeCount.member }
        ]);

        // Get today's date range
        const today = new Date();
        const startOfToday = startOfDay(today);
        const endOfToday = endOfDay(today);
        
        // Fetch today's attendance records
        const todayAttendanceQuery = query(
          collection(db, 'attendance'),
          where('date', '>=', startOfToday.getTime()),
          where('date', '<=', endOfToday.getTime())
        );
        
        const todayAttendanceSnapshot = await getDocs(todayAttendanceQuery);
        
        // Process today's attendance
        const todayRecords = todayAttendanceSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // Count unique users who logged in today
        const uniqueActiveUsers = new Set();
        let lateCount = 0;
        let onTimeCount = 0;
        let earlyCount = 0;
        
        todayRecords.forEach(record => {
          uniqueActiveUsers.add(record.userId);
          
          if (record.status) {
            const status = record.status.toLowerCase();
            if (status.includes('late')) {
              lateCount++;
            } else if (status.includes('on time')) {
              onTimeCount++;
            } else if (status.includes('early')) {
              earlyCount++;
            }
          }
        });
        
        // Calculate attendance by status
        setAttendanceByStatus([
          { name: 'Late', value: lateCount },
          { name: 'On Time', value: onTimeCount },
          { name: 'Early', value: earlyCount }
        ]);
        
        // Fetch attendance trend for the last 7 days
        const trendData = [];
        for (let i = 6; i >= 0; i--) {
          const date = subDays(today, i);
          const dateStart = startOfDay(date);
          const dateEnd = endOfDay(date);
          
          const dateAttendanceQuery = query(
            collection(db, 'attendance'),
            where('date', '>=', dateStart.getTime()),
            where('date', '<=', dateEnd.getTime())
          );
          
          const dateAttendanceSnapshot = await getDocs(dateAttendanceQuery);
          const uniqueUsers = new Set();
          
          dateAttendanceSnapshot.docs.forEach(doc => {
            const data = doc.data();
            if (data.userId) {
              uniqueUsers.add(data.userId);
            }
          });
          
          trendData.push({
            date: format(date, 'EEE'),
            count: uniqueUsers.size
          });
        }
        
        setAttendanceTrend(trendData);
        
        // Fetch recent activity (attendance records)
        const recentActivityQuery = query(
          collection(db, 'attendance'),
          orderBy('timestamp', 'desc'),
          limit(10)
        );
        
        const recentActivitySnapshot = await getDocs(recentActivityQuery);
        
        const activity = recentActivitySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            timestamp: data.timestamp?.toDate() || new Date()
          };
        });

        // Update stats
        setStats({
          totalUsers,
          activeToday: uniqueActiveUsers.size,
          pendingRequests: 0, // This would need to be implemented if there's a requests system
          lateToday: lateCount,
          onTimeToday: onTimeCount,
          earlyToday: earlyCount,
          absentToday: totalUsers - uniqueActiveUsers.size
        });
        
        setRecentActivity(activity);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      }
    };

    fetchDashboardData();
    
    // Set up real-time listener for new attendance records
    const attendanceQuery = query(
      collection(db, 'attendance'),
      orderBy('timestamp', 'desc'),
      limit(10)
    );
    
    const unsubscribe = onSnapshot(attendanceQuery, (snapshot) => {
      const newActivity = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          timestamp: data.timestamp?.toDate() || new Date()
        };
      });
      
      setRecentActivity(newActivity);
    });
    
    return () => unsubscribe();
  }, [activeTab]);

  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      
      <TabsContainer>
        <Tab 
          active={activeTab === 'today'} 
          onClick={() => setActiveTab('today')}
        >
          Today
        </Tab>
        <Tab 
          active={activeTab === 'week'} 
          onClick={() => setActiveTab('week')}
        >
          This Week
        </Tab>
      </TabsContainer>
      
      <DashboardLayout>
        <MainContent>
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
              <h2>Absent Today</h2>
              <p>{stats.absentToday}</p>
            </StatCard>
            <StatCard>
              <h2>Late Today</h2>
              <p>{stats.lateToday}</p>
            </StatCard>
          </StatsGrid>
          
          <ChartGrid>
            <ChartContainer>
              <h2>Attendance by Status</h2>
              <ResponsiveContainer width="100%" height="90%">
                <PieChart>
                  <Pie
                    data={attendanceByStatus}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {attendanceByStatus.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} records`, 'Count']}
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
                    labelStyle={{ color: '#1a1a1a' }}
                  />
                  <Legend formatter={(value) => <span style={{ color: '#1a1a1a' }}>{value}</span>} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            <ChartContainer>
              <h2>User Types</h2>
              <ResponsiveContainer width="100%" height="90%">
                <PieChart>
                  <Pie
                    data={userTypes}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {userTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} users`, 'Count']}
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
                    labelStyle={{ color: '#1a1a1a' }}
                  />
                  <Legend formatter={(value) => <span style={{ color: '#1a1a1a' }}>{value}</span>} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </ChartGrid>
          
          <ChartContainer>
            <h2>Attendance Trend (Last 7 Days)</h2>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={attendanceTrend}>
                <XAxis dataKey="date" tick={{ fill: '#1a1a1a' }} />
                <YAxis tick={{ fill: '#1a1a1a' }} />
                <Tooltip 
                  formatter={(value) => [`${value} users`, 'Active Users']}
                  contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
                  labelStyle={{ color: '#1a1a1a' }}
                />
                <Legend formatter={(value) => <span style={{ color: '#1a1a1a' }}>{value}</span>} />
                <Bar dataKey="count" name="Active Users" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </MainContent>
        
        <SideContent>
          <RecentActivitySection>
            <h2>Recent Activity</h2>
            <ActivityList>
              {recentActivity.map(activity => (
                <ActivityItem key={activity.id}>
                  <div className="time">{format(activity.timestamp, 'MMM dd, yyyy hh:mm a')}</div>
                  <div className="description">
                    <strong>{activity.name}</strong> ({activity.email}) - {activity.type} 
                    <StatusBadge status={activity.status}>{activity.status}</StatusBadge>
                  </div>
                  {activity.notes && <div className="notes">Notes: {activity.notes}</div>}
                </ActivityItem>
              ))}
              {recentActivity.length === 0 && (
                <ActivityItem>
                  <div className="description">No recent activity</div>
                </ActivityItem>
              )}
            </ActivityList>
          </RecentActivitySection>
        </SideContent>
      </DashboardLayout>
    </DashboardContainer>
  );
}

export default AdminDashboard;
