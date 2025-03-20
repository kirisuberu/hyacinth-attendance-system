import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import styled from 'styled-components';
import { collection, query, where, getDocs, orderBy, limit, Timestamp } from 'firebase/firestore';
import { format, differenceInDays, parseISO, isToday, isThisWeek, isThisMonth, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isSameDay } from 'date-fns';

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
    punctualityRate: 0,
    absences: 0,
    lates: 0,
    earlies: 0,
    overtimes: 0,
    earlyOuts: 0,
    onTimeIns: 0,
    onTimeOuts: 0
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [userSchedule, setUserSchedule] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      console.log("Auth state changed:", currentUser ? currentUser.uid : "No user");
      setUser(currentUser);
      
      // Reset loading state when auth changes
      if (!currentUser) {
        setLoading(false);
      }
    });
    
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      console.log("No authenticated user, skipping data fetch");
      return;
    }
    
    console.log("Fetching data for user:", user.uid);
    fetchUserData();
  }, [user]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      console.log("Current user:", user.uid, user.email);
      
      // Fetch user's schedule first
      const userRef = collection(db, 'users');
      
      // Try different ways to find the user document
      let userData = null;
      let userSnapshot = null;
      
      // First try with userId
      const userIdQuery = query(userRef, where('userId', '==', user.uid));
      userSnapshot = await getDocs(userIdQuery);
      
      if (!userSnapshot.empty) {
        userData = userSnapshot.docs[0].data();
        console.log("Found user data by userId:", userData);
      } else {
        // Then try with uid field
        const uidQuery = query(userRef, where('uid', '==', user.uid));
        userSnapshot = await getDocs(uidQuery);
        
        if (!userSnapshot.empty) {
          userData = userSnapshot.docs[0].data();
          console.log("Found user data by uid field:", userData);
        } else {
          // Finally try with email
          const emailQuery = query(userRef, where('email', '==', user.email));
          userSnapshot = await getDocs(emailQuery);
          
          if (!userSnapshot.empty) {
            userData = userSnapshot.docs[0].data();
            console.log("Found user data by email:", userData);
          } else {
            console.log("No user document found for this user");
          }
        }
      }
      
      if (userData && userData.schedule) {
        console.log("Setting user schedule:", userData.schedule);
        setUserSchedule(userData.schedule);
      } else {
        console.log("No schedule found for user");
      }
      
      // Fetch user's attendance records
      const attendanceRef = collection(db, 'attendance');
      let attendanceSnapshot = null;
      
      // Try different ways to find attendance records
      // First try with userId
      const userIdAttendanceQuery = query(
        attendanceRef,
        where('userId', '==', user.uid)
      );
      
      console.log("Fetching attendance with userId:", user.uid);
      attendanceSnapshot = await getDocs(userIdAttendanceQuery);
      
      if (attendanceSnapshot.empty) {
        console.log("No attendance records found with userId");
        
        // Then try with uid field
        const uidAttendanceQuery = query(
          attendanceRef,
          where('uid', '==', user.uid)
        );
        
        console.log("Fetching attendance with uid field:", user.uid);
        attendanceSnapshot = await getDocs(uidAttendanceQuery);
        
        if (attendanceSnapshot.empty) {
          console.log("No attendance records found with uid field");
          
          // Finally try with email
          const emailAttendanceQuery = query(
            attendanceRef,
            where('email', '==', user.email)
          );
          
          console.log("Fetching attendance with email:", user.email);
          attendanceSnapshot = await getDocs(emailAttendanceQuery);
          
          if (attendanceSnapshot.empty) {
            console.log("No attendance records found with any identifier");
            setStats({
              totalAttendance: 0,
              onTimePercentage: 0,
              weeklyAttendance: 0,
              monthlyAttendance: 0,
              punctualityRate: 0,
              absences: 0,
              lates: 0,
              earlies: 0,
              overtimes: 0,
              earlyOuts: 0,
              onTimeIns: 0,
              onTimeOuts: 0
            });
            setRecentActivity([]);
            setLoading(false);
            return;
          }
        }
      }
      
      console.log("Found attendance records:", attendanceSnapshot.size);
      processAttendanceData(attendanceSnapshot, userData?.schedule || {});
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Failed to load dashboard data. Please try again later.');
      setLoading(false);
    }
  };
  
  const processAttendanceData = (snapshot, schedule) => {
    try {
      console.log("Processing attendance data, records:", snapshot.size);
      if (snapshot.size === 0) {
        console.log("No records to process");
        setStats({
          totalAttendance: 0,
          onTimePercentage: 0,
          weeklyAttendance: 0,
          monthlyAttendance: 0,
          punctualityRate: 0,
          absences: 0,
          lates: 0,
          earlies: 0,
          overtimes: 0,
          earlyOuts: 0,
          onTimeIns: 0,
          onTimeOuts: 0
        });
        setRecentActivity([]);
        return;
      }
      
      const attendanceData = snapshot.docs.map(doc => {
        const data = doc.data();
        console.log("Processing record:", doc.id, data);
        
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
      
      console.log("Processed attendance data:", attendanceData);
      
      // Sort by timestamp, newest first (since we're not using orderBy in the query)
      const sortedData = attendanceData.sort((a, b) => b.timestamp - a.timestamp);
      console.log("Sorted data:", sortedData);
      
      // Get recent activity (last 5 records)
      const recent = sortedData.slice(0, 5);
      setRecentActivity(recent);
      
      // Calculate statistics
      const totalRecords = sortedData.length;
      
      // Get the current date and calculate the start of the week and month
      const today = new Date();
      const currentWeekStart = startOfWeek(today);
      const currentWeekEnd = endOfWeek(today);
      const currentMonthStart = startOfMonth(today);
      const currentMonthEnd = endOfMonth(today);
      
      // Filter records for this week and month
      const weeklyRecords = sortedData.filter(record => {
        const recordDate = record.timestamp;
        return recordDate >= currentWeekStart && recordDate <= currentWeekEnd;
      }).length;
      
      const monthlyRecords = sortedData.filter(record => {
        const recordDate = record.timestamp;
        return recordDate >= currentMonthStart && recordDate <= currentMonthEnd;
      }).length;
      
      // Calculate status-based statistics with improved filtering
      const lateRecords = sortedData.filter(record => 
        record.status && record.status.toLowerCase().includes('late')
      ).length;
      
      const earlyRecords = sortedData.filter(record => 
        record.status && 
        record.status.toLowerCase().includes('early') && 
        !record.status.toLowerCase().includes('out') &&
        record.type === 'IN'
      ).length;
      
      const overtimeRecords = sortedData.filter(record => 
        record.status && record.status.toLowerCase().includes('overtime')
      ).length;
      
      const earlyOutRecords = sortedData.filter(record => 
        record.status && record.status.toLowerCase().includes('early out')
      ).length;
      
      const onTimeInRecords = sortedData.filter(record => 
        record.status === 'On Time' && record.type === 'IN'
      ).length;
      
      const onTimeOutRecords = sortedData.filter(record => 
        record.status === 'On Time' && record.type === 'OUT'
      ).length;
      
      // Calculate punctuality rate only for time-in records
      const timeInRecords = sortedData.filter(record => record.type === 'IN');
      const onTimeOrEarlyIns = timeInRecords.filter(record => 
        record.status === 'On Time' || record.status === 'Early'
      ).length;
      
      const punctualityRate = timeInRecords.length > 0 
        ? Math.round((onTimeOrEarlyIns / timeInRecords.length) * 100) 
        : 0;
      
      // Calculate absences based on schedule
      let absences = 0;
      
      // Only calculate absences if we have schedule data
      if (Object.keys(schedule).length > 0) {
        // Get the earliest attendance record date
        const earliestRecord = sortedData.length > 0 
          ? new Date(Math.min(...sortedData.map(record => record.timestamp.getTime())))
          : new Date();
        
        // Calculate the number of days from the earliest record to today
        const daysSinceFirstRecord = Math.max(1, differenceInDays(today, earliestRecord));
        
        // Limit the calculation to the last 30 days to avoid inflated numbers
        const daysToCheck = Math.min(daysSinceFirstRecord, 30);
        
        // Create an array of dates to check
        const datesToCheck = [];
        for (let i = 0; i < daysToCheck; i++) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          datesToCheck.push(date);
        }
        
        // Count days where the user was scheduled but didn't check in
        absences = datesToCheck.reduce((count, date) => {
          const dayOfWeek = format(date, 'EEEE').toLowerCase();
          
          // Check if user was scheduled for this day
          const isScheduledDay = schedule[dayOfWeek] && 
            schedule[dayOfWeek].startTime && 
            schedule[dayOfWeek].endTime;
          
          if (isScheduledDay) {
            // Check if there's any attendance record for this day
            const hasAttendanceRecord = sortedData.some(record => 
              isSameDay(record.timestamp, date) && record.type === 'IN'
            );
            
            // If scheduled but no attendance, count as absence
            if (!hasAttendanceRecord) {
              return count + 1;
            }
          }
          
          return count;
        }, 0);
      }
      
      console.log("Calculated stats:", {
        totalRecords,
        punctualityRate,
        weeklyRecords,
        monthlyRecords,
        absences,
        lateRecords,
        earlyRecords,
        overtimeRecords,
        earlyOutRecords,
        onTimeInRecords,
        onTimeOutRecords
      });
      
      setStats({
        totalAttendance: totalRecords,
        onTimePercentage: punctualityRate,
        weeklyAttendance: weeklyRecords,
        monthlyAttendance: monthlyRecords,
        punctualityRate,
        absences,
        lates: lateRecords,
        earlies: earlyRecords,
        overtimes: overtimeRecords,
        earlyOuts: earlyOutRecords,
        onTimeIns: onTimeInRecords,
        onTimeOuts: onTimeOutRecords
      });
    } catch (err) {
      console.error("Error processing attendance data:", err);
      setError("Error processing data. Please try again later.");
    }
  };

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
      
      <SectionTitle>Attendance Statistics</SectionTitle>
      <StatsGrid>
        <StatCard>
          <h3>Absences</h3>
          <p>{stats.absences}</p>
          <div className={`trend ${stats.absences > 0 ? 'trend-down' : 'trend-up'}`}>
            {stats.absences > 0 ? '↓ Missed days' : '↑ Perfect attendance'}
          </div>
        </StatCard>
        <StatCard>
          <h3>Lates</h3>
          <p>{stats.lates}</p>
          <div className={`trend ${stats.lates > 0 ? 'trend-down' : 'trend-up'}`}>
            {stats.lates > 0 ? '↓ Late arrivals' : '↑ No late arrivals'}
          </div>
        </StatCard>
        <StatCard>
          <h3>Earlies</h3>
          <p>{stats.earlies}</p>
          <div className="trend trend-up">
            Early arrivals
          </div>
        </StatCard>
        <StatCard>
          <h3>Overtimes</h3>
          <p>{stats.overtimes}</p>
          <div className="trend">
            Extended hours
          </div>
        </StatCard>
        <StatCard>
          <h3>Early Outs</h3>
          <p>{stats.earlyOuts}</p>
          <div className={`trend ${stats.earlyOuts > 5 ? 'trend-down' : ''}`}>
            Left before schedule
          </div>
        </StatCard>
        <StatCard>
          <h3>On Time (IN)</h3>
          <p>{stats.onTimeIns}</p>
          <div className="trend trend-up">
            Punctual arrivals
          </div>
        </StatCard>
        <StatCard>
          <h3>On Time (OUT)</h3>
          <p>{stats.onTimeOuts}</p>
          <div className="trend trend-up">
            Punctual departures
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
    </DashboardContainer>
  );
}

export default MemberDashboard;
