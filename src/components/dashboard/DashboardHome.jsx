import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardContent, Grid, StatusBadge, Button } from './DashboardComponents';
import styled from 'styled-components';
import { Clock, Calendar, ChartBar, ClockClockwise, Users, Bell, UserCircle, CheckCircle, XCircle, Warning } from 'phosphor-react';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { db, auth } from '../../firebase';

const WelcomeCard = styled(Card)`
  background: linear-gradient(135deg, #800000 0%, #330000 100%);
  color: white;
  margin-bottom: 1.5rem;
`;

const WelcomeTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const WelcomeContent = styled.div`
  padding: 1.5rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatItem = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  opacity: 0.8;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 0.5rem;
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  margin: 1.5rem 0 1rem 0;
  color: #333;
`;

const NotificationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background-color: #f9f9f9;
  border-radius: 6px;
  border-left: 3px solid ${props => props.type === 'info' ? '#2196f3' : props.type === 'success' ? '#4caf50' : props.type === 'warning' ? '#ff9800' : '#f44336'};
`;

const NotificationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.type === 'info' ? '#2196f3' : props.type === 'success' ? '#4caf50' : props.type === 'warning' ? '#ff9800' : '#f44336'};
`;

const NotificationContent = styled.div`
  flex: 1;
`;

const NotificationTitle = styled.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const NotificationTime = styled.div`
  font-size: 0.75rem;
  color: #777;
`;

const DashboardHome = ({ attendanceStatus, lastRecord }) => {
  const [stats, setStats] = useState({
    totalAttendance: 0,
    onTimePercentage: 0,
    latePercentage: 0,
    absences: 0
  });
  
  const [notifications, setNotifications] = useState([]);
  const [userName, setUserName] = useState('');
  
  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        try {
          const userDoc = await getDocs(query(collection(db, 'users'), where('userId', '==', auth.currentUser.uid)));
          if (!userDoc.empty) {
            setUserName(userDoc.docs[0].data().name || 'User');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };
    
    const fetchStats = async () => {
      if (auth.currentUser) {
        try {
          // Get total attendance records
          const attendanceQuery = query(
            collection(db, 'attendance'),
            where('userId', '==', auth.currentUser.uid),
            orderBy('timestamp', 'desc'),
            limit(30) // Last 30 records
          );
          
          const attendanceSnapshot = await getDocs(attendanceQuery);
          const records = attendanceSnapshot.docs.map(doc => doc.data());
          
          // Calculate stats
          const totalRecords = records.length;
          const onTimeRecords = records.filter(record => record.status === 'On Time').length;
          const lateRecords = records.filter(record => record.status === 'Late').length;
          const absentRecords = records.filter(record => record.status === 'Absent').length;
          
          setStats({
            totalAttendance: totalRecords,
            onTimePercentage: totalRecords > 0 ? Math.round((onTimeRecords / totalRecords) * 100) : 0,
            latePercentage: totalRecords > 0 ? Math.round((lateRecords / totalRecords) * 100) : 0,
            absences: absentRecords
          });
        } catch (error) {
          console.error('Error fetching attendance stats:', error);
        }
      }
    };
    
    const fetchNotifications = async () => {
      if (auth.currentUser) {
        try {
          // Get recent requests
          const requestsQuery = query(
            collection(db, 'requests'),
            where('userId', '==', auth.currentUser.uid),
            orderBy('createdAt', 'desc'),
            limit(3)
          );
          
          const requestsSnapshot = await getDocs(requestsQuery);
          const requests = requestsSnapshot.docs.map(doc => {
            const data = doc.data();
            return {
              id: doc.id,
              title: `${data.type} Request`,
              message: data.status === 'pending' ? 'Waiting for approval' : 
                      data.status === 'approved' ? 'Has been approved' : 'Has been rejected',
              time: data.createdAt?.toDate() || new Date(),
              type: data.status === 'pending' ? 'warning' : 
                    data.status === 'approved' ? 'success' : 'error'
            };
          });
          
          setNotifications(requests);
        } catch (error) {
          console.error('Error fetching notifications:', error);
        }
      }
    };
    
    fetchUserData();
    fetchStats();
    fetchNotifications();
  }, []);
  
  // Get time of day greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };
  return (
    <>
      {/* Welcome Card with Stats */}
      <WelcomeCard>
        <WelcomeContent>
          <WelcomeTitle>
            <UserCircle size={28} weight="fill" />
            {getGreeting()}, {userName}!
          </WelcomeTitle>
          <p>Here's your attendance overview for the past 30 days</p>
          
          <StatsGrid>
            <StatItem>
              <IconContainer>
                <Clock size={20} weight="fill" />
              </IconContainer>
              <StatValue>{stats.totalAttendance}</StatValue>
              <StatLabel>Total Records</StatLabel>
            </StatItem>
            
            <StatItem>
              <IconContainer>
                <CheckCircle size={20} weight="fill" />
              </IconContainer>
              <StatValue>{stats.onTimePercentage}%</StatValue>
              <StatLabel>On Time</StatLabel>
            </StatItem>
            
            <StatItem>
              <IconContainer>
                <Warning size={20} weight="fill" />
              </IconContainer>
              <StatValue>{stats.latePercentage}%</StatValue>
              <StatLabel>Late</StatLabel>
            </StatItem>
            
            <StatItem>
              <IconContainer>
                <XCircle size={20} weight="fill" />
              </IconContainer>
              <StatValue>{stats.absences}</StatValue>
              <StatLabel>Absences</StatLabel>
            </StatItem>
          </StatsGrid>
        </WelcomeContent>
      </WelcomeCard>
      
      {/* Main Dashboard Content */}
      <Grid>
        {/* Attendance Status Card */}
        <Card>
          <CardTitle>
            <Clock size={20} style={{ marginRight: '8px' }} />
            Current Status
          </CardTitle>
          <CardContent>
            {attendanceStatus ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontWeight: 'bold', marginRight: '8px' }}>Status:</span>
                  <StatusBadge status={attendanceStatus}>
                    {attendanceStatus === 'In' ? 'Clocked In' : 'Clocked Out'}
                  </StatusBadge>
                </div>
                {lastRecord && (
                  <div>
                    <div style={{ marginBottom: '8px' }}>
                      <span style={{ fontWeight: 'bold' }}>Last Action:</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '6px' }}>
                      <Clock size={18} style={{ marginRight: '8px', color: '#555' }} />
                      <div>
                        <div>{lastRecord.type === 'In' ? 'Time In' : 'Time Out'}</div>
                        <div style={{ fontSize: '0.85rem', color: '#777' }}>
                          {new Date(lastRecord.timestamp.toDate()).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff8e1', padding: '12px', borderRadius: '6px' }}>
                <Warning size={20} style={{ marginRight: '10px', color: '#f57f17' }} />
                <span>You haven't clocked in today</span>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Today's Schedule Card */}
        <Card>
          <CardTitle>
            <Calendar size={20} style={{ marginRight: '8px' }} />
            Today's Schedule
          </CardTitle>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '6px' }}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Morning Shift</div>
                  <div style={{ fontSize: '0.85rem', color: '#555' }}>8:00 AM - 12:00 PM</div>
                </div>
                <StatusBadge status="In">Active</StatusBadge>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '6px' }}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Afternoon Shift</div>
                  <div style={{ fontSize: '0.85rem', color: '#555' }}>1:00 PM - 5:00 PM</div>
                </div>
                <StatusBadge status="Out">Upcoming</StatusBadge>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Recent Requests Card */}
        <Card>
          <CardTitle>
            <Bell size={20} style={{ marginRight: '8px' }} />
            Recent Requests
          </CardTitle>
          <CardContent>
            {notifications.length > 0 ? (
              <NotificationList>
                {notifications.map((notification, index) => (
                  <NotificationItem key={index} type={notification.type}>
                    <NotificationIcon type={notification.type}>
                      {notification.type === 'success' ? <CheckCircle size={20} /> : 
                       notification.type === 'warning' ? <Warning size={20} /> : 
                       notification.type === 'error' ? <XCircle size={20} /> : 
                       <Bell size={20} />}
                    </NotificationIcon>
                    <NotificationContent>
                      <NotificationTitle>{notification.title}</NotificationTitle>
                      <div>{notification.message}</div>
                      <NotificationTime>
                        {notification.time.toLocaleString()}
                      </NotificationTime>
                    </NotificationContent>
                  </NotificationItem>
                ))}
              </NotificationList>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '6px' }}>
                <Bell size={20} style={{ marginRight: '10px', color: '#555' }} />
                <span>No recent requests</span>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Quick Links Card */}
        <Card>
          <CardTitle>
            <ChartBar size={20} style={{ marginRight: '8px' }} />
            Attendance Summary
          </CardTitle>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ backgroundColor: '#e8f5e9', padding: '10px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>On Time</div>
                  <div style={{ fontSize: '0.85rem' }}>This Month</div>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{stats.onTimePercentage}%</div>
              </div>
              
              <div style={{ backgroundColor: '#fff8e1', padding: '10px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Late</div>
                  <div style={{ fontSize: '0.85rem' }}>This Month</div>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{stats.latePercentage}%</div>
              </div>
              
              <div style={{ backgroundColor: '#ffebee', padding: '10px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Absences</div>
                  <div style={{ fontSize: '0.85rem' }}>This Month</div>
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{stats.absences}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default DashboardHome;
