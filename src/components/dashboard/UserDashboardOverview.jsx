import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tooltip from './Tooltip';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import { format, parseISO } from 'date-fns';
import { 
  Clock, 
  Calendar,
  ChartBar as ChartBarIcon, 
  ClockClockwise, 
  Users, 
  Bell, 
  CheckCircle, 
  XCircle, 
  Warning,
  UserCircle,
  CalendarCheck,
  Gauge,
  Hourglass,
  ArrowsClockwise
} from 'phosphor-react';
import { Card, CardTitle, CardContent, Grid } from './DashboardComponents';



const UserDashboardOverview = ({ user, userData, attendanceStatus, lastRecord, setShowOverview }) => {
  // Debug authentication state
  useEffect(() => {
    if (!user) {
      console.log('No user provided to UserDashboardOverview');
    } else {
      console.log('User authenticated in UserDashboardOverview:', user.uid);
    }
  }, [user]);
  const [stats, setStats] = useState({
    totalAttendance: 0,
    onTimePercentage: 0,
    latePercentage: 0,
    earlyPercentage: 0,
    absences: 0,
    todayStatus: 'Not Checked In',
    todayTimeIn: null,
    todayTimeOut: null,
    todayWorkedHours: 0,
    weekOnTimeRate: 0,
    weekLateRate: 0,
    weekEarlyRate: 0,
    monthOnTimeRate: 0,
    monthLateRate: 0,
    monthEarlyRate: 0,
    punctualityTrend: [],
    onTimeStreak: 0
  });
  
  const [monthlyReports, setMonthlyReports] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    console.log('UserDashboardOverview - User data:', user);
    console.log('UserDashboardOverview - User profile data:', userData);
    console.log('Attendance status:', attendanceStatus);
    console.log('Last record:', lastRecord);
    
    // If we have proper auth user, fetch the data
    if (user && user.uid) {
      console.log('Fetching data for user:', user.uid);
      fetchUserStats();
      fetchMonthlyReport();
    } else {
      // If no user object but we have auth's currentUser, use that instead
      const currentUser = auth.currentUser;
      if (currentUser && currentUser.uid) {
        console.log('Using auth.currentUser instead:', currentUser.uid);
        fetchUserStats(currentUser);
        fetchMonthlyReport(currentUser);
      } else {
        console.error('No valid user object available');
      }
    }
  }, [user, userData]);
  
  const fetchUserStats = async () => {
    if (!user) {
      console.log('No user data available for fetching stats');
      return;
    }
    
    console.log('Fetching user stats for:', user.uid);
    try {
      // Define time periods for different stats
      const now = new Date();
      
      // Start of today
      const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
      
      // Start of this week (Sunday)
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      startOfWeek.setHours(0, 0, 0, 0);
      
      // Start of this month
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0);
      
      // Start of last 30 days period
      const startOfLast30Days = new Date(now);
      startOfLast30Days.setDate(now.getDate() - 30);
      
      // Get all attendance records for the last 30 days
      const attendanceQuery = query(
        collection(db, 'attendance'),
        where('userId', '==', user.uid),
        where('timestamp', '>=', Timestamp.fromDate(startOfLast30Days)),
        orderBy('timestamp', 'desc')
      );
      
      const attendanceSnapshot = await getDocs(attendanceQuery);
      const records = attendanceSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp.toDate() // Convert Firestore timestamp to JS Date
      }));
      
      // Calculate overall stats
      const totalRecords = records.length;
      const timeInRecords = records.filter(record => record.type === 'In');
      const onTimeRecords = records.filter(record => record.status === 'On Time').length;
      const lateRecords = records.filter(record => record.status === 'Late').length;
      const earlyRecords = records.filter(record => record.status === 'Early').length;
      const absentRecords = records.filter(record => record.status === 'Absent').length;
      
      // Calculate daily stats
      const todayRecords = records.filter(record => record.timestamp >= startOfToday);
      const todayTimeIn = todayRecords.find(record => record.type === 'In');
      const todayTimeOut = todayRecords.find(record => record.type === 'Out');
      const isTodayAbsent = todayRecords.some(record => record.status === 'Absent');
      
      // Calculate today's worked hours if both time in and time out exist
      let computedTodayHours = 0;
      if (todayTimeIn && todayTimeOut) {
        const timeInMs = todayTimeIn.timestamp.getTime();
        const timeOutMs = todayTimeOut.timestamp.getTime();
        computedTodayHours = Math.round(((timeOutMs - timeInMs) / (1000 * 60 * 60)) * 10) / 10; // 1 decimal place
      }
      
      // Calculate weekly stats
      const weekRecords = records.filter(record => record.timestamp >= startOfWeek);
      const weekTimeInRecords = weekRecords.filter(record => record.type === 'In');
      const weekOnTimeCount = weekRecords.filter(record => record.status === 'On Time').length;
      const weekLateCount = weekRecords.filter(record => record.status === 'Late').length;
      const weekEarlyCount = weekRecords.filter(record => record.status === 'Early').length;
      
      // Calculate monthly stats
      const monthRecords = records.filter(record => record.timestamp >= startOfMonth);
      const monthTimeInRecords = monthRecords.filter(record => record.type === 'In');
      const monthOnTimeCount = monthRecords.filter(record => record.status === 'On Time').length;
      const monthLateCount = monthRecords.filter(record => record.status === 'Late').length;
      const monthEarlyCount = monthRecords.filter(record => record.status === 'Early').length;
      
      // Calculate punctuality trends (last 7 time-ins)
      const last7TimeIns = timeInRecords.slice(0, 7);
      const punctualityTrend = last7TimeIns.map(record => ({
        date: format(record.timestamp, 'MM/dd'),
        status: record.status,
        timeDiff: record.timeDiff || 0
      }));
      
      // Calculate streak of on-time arrivals
      let onTimeStreak = 0;
      for (const record of timeInRecords) {
        if (record.status === 'On Time' || record.status === 'Early') {
          onTimeStreak++;
        } else {
          break;
        }
      }
      
      setStats({
        totalAttendance: totalRecords,
        onTimePercentage: totalRecords > 0 ? Math.round((onTimeRecords / totalRecords) * 100) : 0,
        latePercentage: totalRecords > 0 ? Math.round((lateRecords / totalRecords) * 100) : 0,
        earlyPercentage: totalRecords > 0 ? Math.round((earlyRecords / totalRecords) * 100) : 0,
        absences: absentRecords,
        todayStatus: todayTimeIn ? todayTimeIn.status : (isTodayAbsent ? 'Absent' : 'Not Checked In'),
        todayTimeIn: todayTimeIn ? todayTimeIn.timestamp : null,
        todayTimeOut: todayTimeOut ? todayTimeOut.timestamp : null,
        todayWorkedHours: computedTodayHours,
        weekOnTimeRate: weekTimeInRecords.length > 0 ? Math.round((weekOnTimeCount / weekTimeInRecords.length) * 100) : 0,
        weekLateRate: weekTimeInRecords.length > 0 ? Math.round((weekLateCount / weekTimeInRecords.length) * 100) : 0,
        weekEarlyRate: weekTimeInRecords.length > 0 ? Math.round((weekEarlyCount / weekTimeInRecords.length) * 100) : 0,
        monthOnTimeRate: monthTimeInRecords.length > 0 ? Math.round((monthOnTimeCount / monthTimeInRecords.length) * 100) : 0,
        monthLateRate: monthTimeInRecords.length > 0 ? Math.round((monthLateCount / monthTimeInRecords.length) * 100) : 0,
        monthEarlyRate: monthTimeInRecords.length > 0 ? Math.round((monthEarlyCount / monthTimeInRecords.length) * 100) : 0,
        punctualityTrend,
        onTimeStreak
      });
      
    } catch (error) {
      console.error('Error fetching user stats:', error);
    }
  };
  
  const fetchMonthlyReport = async () => {
    if (!user) {
      console.log('No user data available for fetching monthly report');
      return;
    }
    
    console.log('Fetching monthly report for:', user.uid);
    try {
      setLoading(true);
      
      // Get the current date and calculate first day of current month
      const now = new Date();
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      
      // Query for attendance records in the current month
      const attendanceQuery = query(
        collection(db, 'attendance'),
        where('userId', '==', user.uid),
        where('timestamp', '>=', Timestamp.fromDate(firstDayOfMonth)),
        orderBy('timestamp', 'desc')
      );
      
      const attendanceSnapshot = await getDocs(attendanceQuery);
      const records = attendanceSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp.toDate()
      }));
      
      // Process and organize the data by date
      const reportsByDate = {};
      
      // Group records by date
      records.forEach(record => {
        const dateKey = format(record.timestamp, 'yyyy-MM-dd');
        if (!reportsByDate[dateKey]) {
          reportsByDate[dateKey] = {
            date: record.timestamp,
            timeIn: null,
            timeOut: null,
            status: 'Incomplete',
            hoursWorked: 0
          };
        }
        
        if (record.type === 'In') {
          reportsByDate[dateKey].timeIn = record.timestamp;
          reportsByDate[dateKey].timeInStatus = record.status;
        } else if (record.type === 'Out') {
          reportsByDate[dateKey].timeOut = record.timestamp;
        } else if (record.type === 'Absent') {
          reportsByDate[dateKey].status = 'Absent';
        }
        
        // Calculate hours worked if both time in and out exist
        if (reportsByDate[dateKey].timeIn && reportsByDate[dateKey].timeOut) {
          const timeInMs = reportsByDate[dateKey].timeIn.getTime();
          const timeOutMs = reportsByDate[dateKey].timeOut.getTime();
          const hoursWorked = (timeOutMs - timeInMs) / (1000 * 60 * 60);
          reportsByDate[dateKey].hoursWorked = Math.round(hoursWorked * 10) / 10; // Round to 1 decimal
          reportsByDate[dateKey].status = 'Complete';
        }
      });
      
      // Convert to array and sort by date (newest first)
      const reportsList = Object.values(reportsByDate).sort((a, b) => b.date - a.date);
      
      setMonthlyReports(reportsList);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching monthly report:', error);
      setLoading(false);
    }
  };

  return (
    <SummaryContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Attendance Summary</h2>
        <button 
          onClick={() => setShowOverview(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 16px',
            backgroundColor: '#800000',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            gap: '6px'
          }}
        >
          <ArrowsClockwise size={16} />
          Back to Main Dashboard
        </button>
      </div>
      {/* User Profile Snapshot */}
      <ProfileSnapshot>
        <UserAvatar>
          {userData?.firstName ? userData.firstName.charAt(0) : user?.email.charAt(0).toUpperCase()}
        </UserAvatar>
        <UserInfo>
          <UserName>
            {userData?.firstName 
              ? `${userData.firstName} ${userData.lastName || ''}` 
              : user?.displayName || user?.email}
          </UserName>
          <UserPosition>{userData?.position || 'Employee'}</UserPosition>
          <UserMeta>
            <MetaItem>
              <Calendar size={16} />
              {userData?.employmentStartDate 
                ? `Started ${format(new Date(userData.employmentStartDate), 'MMM d, yyyy')}` 
                : 'No start date recorded'}
            </MetaItem>

            <MetaItem>
              <UserCircle size={16} />
              {userData?.employmentStatus || 'Active Employee'}
            </MetaItem>
          </UserMeta>
        </UserInfo>
      </ProfileSnapshot>

      {/* Today's Stats */}
      <Card>
        <CardTitle>
          <Calendar size={20} style={{ marginRight: '8px' }} />
          Today's Overview
        </CardTitle>
        <CardContent>
          <StatsGrid>
            <StatCard>
              <StatCardHeader>
                <StatCardTitle>
                  <Clock size={16} />
                  Status
                </StatCardTitle>
              </StatCardHeader>
              <StatusTag 
                status={(attendanceStatus || stats.todayStatus) === 'N/A' ? 'No Schedule' : (attendanceStatus || stats.todayStatus)}
              >
                {(attendanceStatus || stats.todayStatus) === 'N/A' ? 'No Schedule' : (attendanceStatus || stats.todayStatus)}
              </StatusTag>
            </StatCard>
            
            <StatCard>
              <StatCardHeader>
                <StatCardTitle>
                  <ClockClockwise size={16} />
                  Time In
                </StatCardTitle>
              </StatCardHeader>
              <StatCardValue>
                {stats.todayTimeIn ? format(stats.todayTimeIn, 'h:mm a') : '--:--'}
              </StatCardValue>
            </StatCard>
            
            <StatCard>
              <StatCardHeader>
                <StatCardTitle>
                  <Clock size={16} />
                  Time Out
                </StatCardTitle>
              </StatCardHeader>
              <StatCardValue>
                {stats.todayTimeOut ? format(stats.todayTimeOut, 'h:mm a') : '--:--'}
              </StatCardValue>
            </StatCard>
            
            <StatCard>
              <StatCardHeader>
                <StatCardTitle>
                  <Hourglass size={16} />
                  Hours Worked
                </StatCardTitle>
              </StatCardHeader>
              <StatCardValue>
                {stats.todayTimeIn && stats.todayTimeOut 
                  ? `${stats.todayWorkedHours}h` 
                  : '--:--'}
              </StatCardValue>
            </StatCard>
          </StatsGrid>
        </CardContent>
      </Card>

      {/* Attendance Performance */}
      <Card>
        <CardTitle>
          <Gauge size={20} style={{ marginRight: '8px' }} />
          Performance Metrics
        </CardTitle>
        <CardContent>
          <StatsGrid>
            <StatCard>
              <StatCardHeader>
                <StatCardTitle>Month On-Time</StatCardTitle>
              </StatCardHeader>
              <Tooltip text="Calculated as: on-time check-ins ÷ total check-ins this month">
                <StatCardValue>{stats.monthOnTimeRate}%</StatCardValue>
              </Tooltip>
              <ProgressBar>
                <ProgressFill 
                  style={{ 
                    width: `${stats.monthOnTimeRate}%`, 
                    backgroundColor: '#4caf50' 
                  }} 
                />
              </ProgressBar>
            </StatCard>
            
            <StatCard>
              <StatCardHeader>
                <StatCardTitle>Month Late</StatCardTitle>
              </StatCardHeader>
              <StatCardValue>{stats.monthLateRate}%</StatCardValue>
              <ProgressBar>
                <ProgressFill 
                  style={{ 
                    width: `${stats.monthLateRate}%`, 
                    backgroundColor: '#ff9800' 
                  }} 
                />
              </ProgressBar>
            </StatCard>
            
            <StatCard>
              <StatCardHeader>
                <StatCardTitle>Week On-Time</StatCardTitle>
              </StatCardHeader>
              <Tooltip text="Calculated as: on-time check-ins ÷ total check-ins this week">
                <StatCardValue>{stats.weekOnTimeRate}%</StatCardValue>
              </Tooltip>
              <ProgressBar>
                <ProgressFill 
                  style={{ 
                    width: `${stats.weekOnTimeRate}%`, 
                    backgroundColor: '#2196f3' 
                  }} 
                />
              </ProgressBar>
            </StatCard>
            
            <StatCard>
              <StatCardHeader>
                <StatCardTitle>On-Time Streak</StatCardTitle>
              </StatCardHeader>
              <Tooltip text="Consecutive days you've been on time. This counter resets when you're late or absent.">
                <StatCardValue>{stats.onTimeStreak} days</StatCardValue>
              </Tooltip>
            </StatCard>
            
            <StatCard>
              <StatCardHeader>
                <StatCardTitle>Early Arrivals</StatCardTitle>
              </StatCardHeader>
              <Tooltip text="Calculated as: (number of early arrivals ÷ total check-ins) × 100">
                <StatCardValue>{stats.earlyPercentage}%</StatCardValue>
              </Tooltip>
              <ProgressBar>
                <ProgressFill 
                  style={{ 
                    width: `${stats.earlyPercentage}%`, 
                    backgroundColor: '#9c27b0' 
                  }} 
                />
              </ProgressBar>
            </StatCard>
          </StatsGrid>
          
          {/* Punctuality Trend Chart */}
          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                Recent Punctuality Trend
              </div>
            </div>
            
            {stats.punctualityTrend && stats.punctualityTrend.length > 0 ? (
              <ChartContainer>
                {stats.punctualityTrend.map((day, index) => {
                  // Calculate bar height based on punctuality
                  let height, color, label;
                  if (day.status === 'On Time') {
                    height = '90%';
                    color = '#66bb6a';
                    label = 'On Time';
                  } else if (day.status === 'Early') {
                    height = '100%';
                    color = '#42a5f5';
                    label = 'Early';
                  } else if (day.status === 'Late') {
                    const lateMinutes = Math.abs(day.timeDiff || 0);
                    const latePercentage = Math.max(10, 80 - (lateMinutes * 1.5));
                    height = `${latePercentage}%`;
                    color = '#ff9800';
                    label = 'Late';
                  } else {
                    height = '20%';
                    color = '#f44336';
                    label = 'Absent';
                  }
                  
                  return (
                    <ChartBarContainer key={index}>
                      <ChartBarValue 
                        style={{ 
                          height, 
                          backgroundColor: color 
                        }}
                        title={`${day.date}: ${label}`}
                      />
                      <ChartBarLabel>{day.date}</ChartBarLabel>
                    </ChartBarContainer>
                  );
                })}
              </ChartContainer>
            ) : (
              <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                No attendance history available
              </div>
            )}
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}>
                <div style={{ width: '10px', height: '10px', backgroundColor: '#42a5f5', borderRadius: '2px' }}></div>
                <span>Early</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}>
                <div style={{ width: '10px', height: '10px', backgroundColor: '#66bb6a', borderRadius: '2px' }}></div>
                <span>On Time</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}>
                <div style={{ width: '10px', height: '10px', backgroundColor: '#ff9800', borderRadius: '2px' }}></div>
                <span>Late</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}>
                <div style={{ width: '10px', height: '10px', backgroundColor: '#f44336', borderRadius: '2px' }}></div>
                <span>Absent</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Attendance Report */}
      <Card>
        <CardTitle>
          <CalendarCheck size={20} style={{ marginRight: '8px' }} />
          Monthly Attendance Report
        </CardTitle>
        <CardContent>
          {loading ? (
            <div style={{ padding: '2rem', textAlign: 'center' }}>Loading report data...</div>
          ) : monthlyReports.length > 0 ? (
            <ReportPreview>
              <ReportTableWrapper>
                <ReportTable>
                  <TableHead>
                    <tr>
                      <TableHeader>Date</TableHeader>
                      <TableHeader>Time In</TableHeader>
                      <TableHeader>Time Out</TableHeader>
                      <TableHeader>Status</TableHeader>
                      <TableHeader>
                        <Tooltip text="Total hours worked each day, calculated as the duration between clock-in and clock-out times">
                          <span>Hours Worked</span>
                        </Tooltip>
                      </TableHeader>
                    </tr>
                  </TableHead>
                  <tbody>
                    {monthlyReports.slice(0, 7).map((report, index) => (
                      <TableRow key={index}>
                        <TableCell>{format(report.date, 'EEE, MMM d')}</TableCell>
                        <TableCell>
                          {report.timeIn 
                            ? (
                              <>
                                {format(report.timeIn, 'h:mm a')}
                                {report.timeInStatus && (
                                  <StatusTag 
                                    status={report.timeInStatus === 'N/A' ? 'No Schedule' : report.timeInStatus} 
                                    style={{ marginLeft: '8px' }}
                                  >
                                    {report.timeInStatus === 'N/A' ? 'No Schedule' : report.timeInStatus}
                                  </StatusTag>
                                )}
                              </>
                            ) 
                            : (report.status === 'Absent' ? 'N/A' : '--:--')}
                        </TableCell>
                        <TableCell>
                          {report.timeOut 
                            ? format(report.timeOut, 'h:mm a') 
                            : (report.status === 'Absent' ? 'N/A' : '--:--')}
                        </TableCell>
                        <TableCell>
                          <StatusTag status={report.status}>
                            {report.status}
                          </StatusTag>
                        </TableCell>
                        <TableCell>
                          <Tooltip text="Calculated as the duration between clock-in and clock-out times">
                            <span>
                              {report.hoursWorked > 0 
                                ? `${report.hoursWorked}h` 
                                : (report.status === 'Absent' ? 'N/A' : '--')}
                            </span>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </ReportTable>
              </ReportTableWrapper>
              {monthlyReports.length > 7 && (
                <div style={{ textAlign: 'center', padding: '1rem', color: '#666' }}>
                  Showing 7 of {monthlyReports.length} entries. Scroll to see more.
                </div>
              )}
            </ReportPreview>
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              No attendance records found for this month.
            </div>
          )}
        </CardContent>
      </Card>
    </SummaryContainer>
  );
};

export default UserDashboardOverview;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  margin: 1.5rem 0 1rem 0;
  color: #333;
`;

const ProfileSnapshot = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const UserAvatar = styled.div`
  width: 80px;
  height: 80px;
  background-color: #800000;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-right: 1.5rem;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
`;

const UserPosition = styled.div`
  color: #666;
  margin-bottom: 0.5rem;
`;

const UserMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;
`;

const StatCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const StatCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const StatCardTitle = styled.h4`
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StatCardValue = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
`;

const TrendUpIcon = styled.span`
  color: #4caf50;
`;

const TrendDownIcon = styled.span`
  color: #f44336;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 4px;
`;

const ChartContainer = styled.div`
  display: flex;
  height: 160px;
  align-items: flex-end;
  gap: 8px;
  margin-top: 1rem;
`;

const ChartBarContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartBarValue = styled.div`
  width: 100%;
  min-width: 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const ChartBarLabel = styled.div`
  font-size: 0.7rem;
  margin-top: 0.5rem;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ReportPreview = styled.div`
  margin-top: 1rem;
`;

const ReportTableWrapper = styled.div`
  max-height: 320px;
  overflow: auto;
  border: 1px solid #eee;
  border-radius: 8px;
`;

const ReportTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHead = styled.thead`
  background-color: #f5f5f5;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  background-color: #f5f5f5;
  z-index: 1;
`;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;

const StatusTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: ${props => {
    if (props.status === 'Early') return '#e3f2fd';
    if (props.status === 'On Time') return '#e8f5e9';
    if (props.status === 'Late') return '#ffebee';
    if (props.status === 'Complete') return '#e8f5e9';
    if (props.status === 'Incomplete') return '#fff8e1';
    if (props.status === 'No Schedule') return '#f0f0f0';
    return '#f5f5f5';
  }};
  color: ${props => {
    if (props.status === 'Early') return '#1565c0';
    if (props.status === 'On Time') return '#2e7d32';
    if (props.status === 'Late') return '#c62828';
    if (props.status === 'Complete') return '#2e7d32';
    if (props.status === 'Incomplete') return '#ef6c00';
    if (props.status === 'No Schedule') return '#616161';
    return '#757575';
  }};
  border: 1px solid ${props => {
    if (props.status === 'Early') return '#bbdefb';
    if (props.status === 'On Time') return '#c8e6c9';
    if (props.status === 'Late') return '#ffcdd2';
    if (props.status === 'Complete') return '#c8e6c9';
    if (props.status === 'Incomplete') return '#ffe0b2';
    if (props.status === 'No Schedule') return '#e0e0e0';
    return '#eeeeee';
  }};
`;