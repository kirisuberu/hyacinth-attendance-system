import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Card, CardTitle, CardContent, Grid, StatusBadge, Button } from './DashboardComponents';
import UserDashboardOverview from './UserDashboardOverview';
import Tooltip from './Tooltip';
import styled from 'styled-components';
import { Clock, Calendar, ChartBar, ClockClockwise, Users, Bell, UserCircle, CheckCircle, XCircle, Warning, SignIn, SignOut, NotePencil, HourglassMedium, ArrowClockwise } from 'phosphor-react';
import { collection, query, where, orderBy, limit, getDocs, doc, getDoc, Timestamp } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import { format } from 'date-fns';
import { recordAttendance, getAttendanceStatus, determineTimeInStatus, determineTimeOutStatus } from '../../services/attendanceService';
import { toast } from 'react-toastify';
import QuarterlyAttendanceChart from './QuarterlyAttendanceChart';
import { getCurrentTimeInZone, getCurrentTimestamp, timestampToZonedDate } from '../../utils/timeZoneUtils';



const DashboardHome = () => {
  const { attendanceStatus, setAttendanceStatus, lastRecord, setLastRecord } = useOutletContext();
  const [stats, setStats] = useState({
    totalAttendance: 0,
    onTimePercentage: 0,
    latePercentage: 0,
    absences: 0
  });
  
  const [notifications, setNotifications] = useState([]);
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);
  const [userSchedule, setUserSchedule] = useState(null);
  const [todaySchedule, setTodaySchedule] = useState(null);
  const [loadingSchedule, setLoadingSchedule] = useState(true);
  const [showOverview, setShowOverview] = useState(false);
  const [processingTimeIn, setProcessingTimeIn] = useState(false);
  const [processingTimeOut, setProcessingTimeOut] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [attendanceType, setAttendanceType] = useState('');
  const [attendanceNotes, setAttendanceNotes] = useState('');
  const [predictedStatus, setPredictedStatus] = useState('');
  const [isLoadingPrediction, setIsLoadingPrediction] = useState(false);
  
  // Avoid progress bar animating from 0% on first render
  const [animateProgress, setAnimateProgress] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimateProgress(true), 0);
    return () => clearTimeout(t);
  }, []);
  
  // Lightweight ticker to refresh time-based UI (e.g., progress) every minute
  // This forces a re-render so the computed `now` updates and the bar progresses without manual refresh
  const [__timeTick, __setTimeTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => __setTimeTick((v) => v + 1), 60 * 1000);
    return () => clearInterval(id);
  }, []);
  
  const handleTimeInOutClick = async (type) => {
    const user = auth.currentUser;
    if (!user?.uid) {
      toast.error('You must be logged in to record attendance');
      return;
    }
    
    try {
      // Prevent multiple submissions
      if (type === 'In' && processingTimeIn) return;
      if (type === 'Out' && processingTimeOut) return;
      
      // Set loading state
      setIsLoadingPrediction(true);
      
      // Predict status before opening the modal
      let status = '';
      if (type === 'In') {
        status = await determineTimeInStatus(user.uid);
      } else if (type === 'Out') {
        const result = await determineTimeOutStatus(user.uid);
        status = result.status;
      }
      
      setPredictedStatus(status);
      
      // Open modal with the selected type
      setAttendanceType(type);
      setAttendanceNotes('');
      setShowModal(true);
    } catch (error) {
      console.error(`Error opening modal for Time ${type}:`, error);
      toast.error(`Could not predict attendance status. Please try again.`);
    } finally {
      setIsLoadingPrediction(false);
    }
  };

  const handleConfirmAttendance = async () => {
    const user = auth.currentUser;
    if (!user?.uid) {
      toast.error('You must be logged in to record attendance');
      return;
    }
    
    try {
      // Set processing state
      if (attendanceType === 'In') setProcessingTimeIn(true);
      if (attendanceType === 'Out') setProcessingTimeOut(true);
      
      // Record attendance with notes
      await recordAttendance(user.uid, attendanceType, attendanceNotes.trim() || null);
      
      // Update attendance status
      const newStatus = await getAttendanceStatus(user.uid);
      setAttendanceStatus(newStatus.status);
      setLastRecord(newStatus.lastRecord);
      
      toast.success(`Time ${attendanceType} recorded successfully`);
      
      // Close the modal
      setShowModal(false);
    } catch (error) {
      console.error(`Error recording Time ${attendanceType}:`, error);
      toast.error(`Failed to record Time ${attendanceType}`);
    } finally {
      // Reset processing state
      if (attendanceType === 'In') setProcessingTimeIn(false);
      if (attendanceType === 'Out') setProcessingTimeOut(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        try {
          const userDoc = await getDocs(query(collection(db, 'users'), where('userId', '==', auth.currentUser.uid)));
          if (!userDoc.empty) {
            const userData = userDoc.docs[0].data();
            setUserName(userData.name || 'User');
            setUserData(userData);
            
            // Get user schedule
            if (userData.schedule && Array.isArray(userData.schedule) && userData.schedule.length > 0) {
              setUserSchedule(userData.schedule);
               
              // Find today's schedule
              const userTZ = userData.timeRegion || 'Asia/Manila';
              const zoneNow = getCurrentTimeInZone(userTZ);
              const currentDay = zoneNow.dayOfWeek;
              const todayScheduleItem = userData.schedule.find(s => s.dayOfWeek === currentDay);
              
              if (todayScheduleItem) {
                setTodaySchedule(todayScheduleItem);
              }
            } else if (userData.scheduleId) {
              // Legacy support: If user still has a scheduleId, fetch that schedule
              const scheduleId = userData.scheduleId;
              const scheduleDocRef = doc(db, 'schedules', scheduleId);
              const scheduleDoc = await getDoc(scheduleDocRef);
              
              if (scheduleDoc.exists()) {
                const scheduleData = scheduleDoc.data();
                setUserSchedule(scheduleData);
                
                // For legacy schedule format
                if (scheduleData.shifts && Array.isArray(scheduleData.shifts)) {
                  const userTZ = userData.timeRegion || 'Asia/Manila';
                  const zoneNow = getCurrentTimeInZone(userTZ);
                  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                  const currentDay = dayNames.indexOf(zoneNow.dayOfWeek); // 0-6 (Sunday-Saturday)
                  const todayShift = scheduleData.shifts.find(s => s.day === currentDay);
                  
                  if (todayShift) {
                    setTodaySchedule({
                      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDay],
                      timeIn: todayShift.timeIn,
                      timeOut: todayShift.timeOut
                    });
                  }
                }
              }
            }
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoadingSchedule(false);
        }
      }
    };
    
    const fetchStats = async () => {
      if (auth.currentUser) {
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
          
          // Calculate start dates for the last 3 months (for quarterly data)
          const currentMonth = now.getMonth();
          const currentYear = now.getFullYear();
          
          // This month
          const month0Start = new Date(currentYear, currentMonth, 1, 0, 0, 0);
          const month0Name = format(month0Start, 'MMM');
          
          // Last month
          const month1Start = new Date(currentYear, currentMonth - 1, 1, 0, 0, 0);
          const month1End = new Date(currentYear, currentMonth, 0, 23, 59, 59);
          const month1Name = format(month1Start, 'MMM');
          
          // Two months ago
          const month2Start = new Date(currentYear, currentMonth - 2, 1, 0, 0, 0);
          const month2End = new Date(currentYear, currentMonth - 1, 0, 23, 59, 59);
          const month2Name = format(month2Start, 'MMM');
          
          // Start date for quarterly data (two months ago)
          const startOfQuarter = month2Start;
          
          // Start of last 30 days period
          const startOfLast30Days = new Date(now);
          startOfLast30Days.setDate(now.getDate() - 30);
          
          // Get all attendance records for the quarterly data (last 3 months)
          const attendanceQuery = query(
            collection(db, 'attendance'),
            where('userId', '==', auth.currentUser.uid),
            where('timestamp', '>=', Timestamp.fromDate(startOfQuarter)),
            orderBy('timestamp', 'desc')
          );
          
          const attendanceSnapshot = await getDocs(attendanceQuery);
          const records = attendanceSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
            timestamp: doc.data().timestamp.toDate() // Convert Firestore timestamp to JS Date
          }));
          
          // Separate records by month for quarterly data
          const month0Records = records.filter(record => 
            record.timestamp >= month0Start && record.type === 'In'
          );
          const month1Records = records.filter(record => 
            record.timestamp >= month1Start && record.timestamp <= month1End && record.type === 'In'
          );
          const month2Records = records.filter(record => 
            record.timestamp >= month2Start && record.timestamp <= month2End && record.type === 'In'
          );
          
          // Calculate status counts for each month
          // Current month
          const month0Total = month0Records.length;
          const month0Early = month0Records.filter(record => record.status === 'Early').length;
          const month0OnTime = month0Records.filter(record => record.status === 'On Time').length;
          const month0Late = month0Records.filter(record => record.status === 'Late').length;
          
          // Last month
          const month1Total = month1Records.length;
          const month1Early = month1Records.filter(record => record.status === 'Early').length;
          const month1OnTime = month1Records.filter(record => record.status === 'On Time').length;
          const month1Late = month1Records.filter(record => record.status === 'Late').length;
          
          // Two months ago
          const month2Total = month2Records.length;
          const month2Early = month2Records.filter(record => record.status === 'Early').length;
          const month2OnTime = month2Records.filter(record => record.status === 'On Time').length;
          const month2Late = month2Records.filter(record => record.status === 'Late').length;
          
          // Create quarterly data for the chart
          const quarterlyData = [
            {
              month: month2Name,
              total: month2Total,
              early: month2Early,
              onTime: month2OnTime,
              late: month2Late
            },
            {
              month: month1Name,
              total: month1Total,
              early: month1Early,
              onTime: month1OnTime,
              late: month1Late
            },
            {
              month: month0Name,
              total: month0Total,
              early: month0Early,
              onTime: month0OnTime,
              late: month0Late
            }
          ];
          
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
          
          // Calculate weekly stats
          const weekRecords = records.filter(record => record.timestamp >= startOfWeek);
          const weekTimeInRecords = weekRecords.filter(record => record.type === 'In');
          const weekOnTimeCount = weekRecords.filter(record => record.status === 'On Time').length;
          const weekLateCount = weekRecords.filter(record => record.status === 'Late').length;
          const weekEarlyCount = weekRecords.filter(record => record.status === 'Early').length;
          const weekAbsentCount = weekRecords.filter(record => record.status === 'Absent').length;
          
          // Calculate weekly attendance percentage
          const weekAttendanceRate = weekTimeInRecords.length > 0 ? 
            (weekTimeInRecords.length / 5) * 100 : 0; // Assuming 5-day work week
          
          // Calculate monthly stats
          const monthRecords = records.filter(record => record.timestamp >= startOfMonth);
          const monthTimeInRecords = monthRecords.filter(record => record.type === 'In');
          const monthOnTimeCount = monthRecords.filter(record => record.status === 'On Time').length;
          const monthLateCount = monthRecords.filter(record => record.status === 'Late').length;
          const monthEarlyCount = monthRecords.filter(record => record.status === 'Early').length;
          const monthAbsentCount = monthRecords.filter(record => record.status === 'Absent').length;
          
          // Calculate monthly attendance percentage
          const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
          const workDaysElapsed = Math.min(
            now.getDate(),
            Math.floor(daysInMonth * 5/7) // Approximate workdays in month (5/7 of days)
          );
          const monthAttendanceRate = workDaysElapsed > 0 ? 
            (monthTimeInRecords.length / workDaysElapsed) * 100 : 0;
          
          // Calculate punctuality trends (last 7 time-ins)
          const last7TimeIns = timeInRecords.slice(0, 7);
          const punctualityTrend = last7TimeIns.map(record => {
            const date = record.timestamp;
            return {
              date: format(date, 'MM/dd'),
              status: record.status,
              timeDiff: record.timeDiff || 0
            };
          });
          
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
            // Basic stats
            totalAttendance: totalRecords,
            onTimePercentage: totalRecords > 0 ? Math.round((onTimeRecords / totalRecords) * 100) : 0,
            latePercentage: totalRecords > 0 ? Math.round((lateRecords / totalRecords) * 100) : 0,
            earlyPercentage: totalRecords > 0 ? Math.round((earlyRecords / totalRecords) * 100) : 0,
            absences: absentRecords,
            
            // Quarterly data for chart
            quarterlyData: quarterlyData,
            
            // Today's status
            todayStatus: todayTimeIn ? todayTimeIn.status : (isTodayAbsent ? 'Absent' : 'Not Checked In'),
            todayTimeIn: todayTimeIn ? todayTimeIn.timestamp : null,
            todayTimeOut: todayTimeOut ? todayTimeOut.timestamp : null,
            todayWorkedHours: todayTimeIn && todayTimeOut ? 
              ((todayTimeOut.timestamp - todayTimeIn.timestamp) / (1000 * 60 * 60)).toFixed(1) : null,
            
            // Weekly stats
            weekOnTimeRate: weekTimeInRecords.length > 0 ? 
              Math.round((weekOnTimeCount / weekTimeInRecords.length) * 100) : 0,
            weekLateRate: weekTimeInRecords.length > 0 ? 
              Math.round((weekLateCount / weekTimeInRecords.length) * 100) : 0,
            weekEarlyRate: weekTimeInRecords.length > 0 ? 
              Math.round((weekEarlyCount / weekTimeInRecords.length) * 100) : 0,
            weekAbsentCount: weekAbsentCount,
            weekAttendanceRate: Math.round(weekAttendanceRate),
            weekEarlyCount: weekEarlyCount,
            weekOnTimeCount: weekOnTimeCount,
            weekLateCount: weekLateCount,
            
            // Monthly stats
            monthOnTimeRate: monthTimeInRecords.length > 0 ? 
              Math.round((monthOnTimeCount / monthTimeInRecords.length) * 100) : 0,
            monthLateRate: monthTimeInRecords.length > 0 ? 
              Math.round((monthLateCount / monthTimeInRecords.length) * 100) : 0,
            monthEarlyRate: monthTimeInRecords.length > 0 ? 
              Math.round((monthEarlyCount / monthTimeInRecords.length) * 100) : 0,
            monthAbsentCount: monthAbsentCount,
            monthAttendanceRate: Math.round(monthAttendanceRate),
            monthlyAttendanceCount: monthTimeInRecords.length,
            monthOnTimeCount: monthOnTimeCount,
            monthLateCount: monthLateCount,
            monthEarlyCount: monthEarlyCount,
            monthlyPunctualityRate: monthTimeInRecords.length > 0 ?
              Math.round(((monthOnTimeCount + monthEarlyCount) / monthTimeInRecords.length) * 100) : 0,
            
            // Trends and streaks
            punctualityTrend: punctualityTrend,
            onTimeStreak: onTimeStreak
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
      {showOverview ? (
        <UserDashboardOverview 
          user={auth.currentUser}
          userData={userData}
          attendanceStatus={attendanceStatus} 
          lastRecord={lastRecord}
          setShowOverview={setShowOverview}
        />
      ) : (
        <>
          <HeaderGrid>
            {/* Today's Schedule Card */}
            <div style={{ flex: '1', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <DashboardCardTitle>
                  <Calendar size={20} style={{ marginRight: '8px' }} />
                  Today's Schedule
                </DashboardCardTitle>
                <CardContent style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                  {(() => {
                    if (loadingSchedule) {
                      return (
                        <div style={{ textAlign: 'center', padding: '1rem' }}>Loading schedule...</div>
                      );
                    }
                    
                    if (!todaySchedule && (!userSchedule || (Array.isArray(userSchedule) && userSchedule.length === 0))) {
                      return (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff8e1', padding: '12px', borderRadius: '6px' }}>
                            <Warning size={20} style={{ marginRight: '10px', color: '#f57f17' }} />
                            <span>No schedule found for today</span>
                          </div>
                          
                          {/* Attendance Button - Always displayed even with no schedule */}
                          <AttendanceButtonsContainer>
                            {attendanceStatus === 'Checked In' ? (
                              <AttendanceButton 
                                variant="out" 
                                onClick={() => handleTimeInOutClick('Out')}
                                disabled={processingTimeOut}
                                style={{ width: '100%' }}
                              >
                                <SignOut size={18} />
                                TIME OUT
                              </AttendanceButton>
                            ) : (
                              <AttendanceButton 
                                variant="in" 
                                onClick={() => handleTimeInOutClick('In')}
                                disabled={processingTimeIn}
                                style={{ width: '100%' }}
                              >
                                <SignIn size={18} />
                                TIME IN
                              </AttendanceButton>
                            )}
                          </AttendanceButtonsContainer>
                        </div>
                      );
                    }
                    
                    return (() => {
                      // Build "now" and day names in the user's time zone
                      const userTZ = (userData && userData.timeRegion) ? userData.timeRegion : 'Asia/Manila';
                      const zonedNow = timestampToZonedDate(getCurrentTimestamp(), userTZ);
                      const today = new Date(zonedNow);
                      const now = new Date(zonedNow);
                      
                      // Determine active schedule (today or previous day) to handle overnight shifts
                      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                      const todayIdx = now.getDay();
                      const yesterdayIdx = (todayIdx + 6) % 7;
                      const todayName = dayNames[todayIdx];
                      const yesterdayName = dayNames[yesterdayIdx];

                      const schedToday = (Array.isArray(userSchedule) ? userSchedule.find(s => s.dayOfWeek === todayName) : null) || todaySchedule || null;
                      const schedPrev = Array.isArray(userSchedule) ? userSchedule.find(s => s.dayOfWeek === yesterdayName) : null;

                      // Helper to create Date from base date + time string
                      const createTimeDateWithBase = (baseDate, timeStr, isTimeIn = false) => {
                        if (!timeStr) {
                          const d = new Date(baseDate);
                          d.setHours(isTimeIn ? 9 : 17, 0, 0, 0);
                          return d;
                        }
                        try {
                          const [hours, minutes] = timeStr.split(':').map(Number);
                          const d = new Date(baseDate);
                          d.setHours(hours || 0, minutes || 0, 0, 0);
                          return d;
                        } catch (e) {
                          const d = new Date(baseDate);
                          d.setHours(isTimeIn ? 9 : 17, 0, 0, 0);
                          return d;
                        }
                      };

                      // Build windows for today candidate
                      let candidate = null;
                      let shiftStart = null;
                      let shiftEnd = null;
                      let activeDayOfWeek = null;

                      if (schedToday) {
                        const startToday = createTimeDateWithBase(today, schedToday.timeIn, true);
                        let endToday;
                        if (schedToday.timeOut) {
                          endToday = createTimeDateWithBase(today, schedToday.timeOut, false);
                          if (endToday <= startToday) endToday.setDate(endToday.getDate() + 1);
                        } else {
                          const dur = schedToday.shiftDuration || 8;
                          endToday = new Date(startToday.getTime());
                          endToday.setHours(endToday.getHours() + dur);
                        }
                        // If now falls in today's window, select it
                        if (now >= startToday && now < endToday) {
                          candidate = schedToday;
                          shiftStart = startToday;
                          shiftEnd = endToday;
                          activeDayOfWeek = todayName;
                        }
                      }

                      // If not within today's window, check previous day's window crossing midnight
                      if (!candidate && schedPrev) {
                        const basePrev = new Date(today);
                        basePrev.setDate(basePrev.getDate() - 1);
                        const startPrev = createTimeDateWithBase(basePrev, schedPrev.timeIn, true);
                        let endPrev;
                        if (schedPrev.timeOut) {
                          endPrev = createTimeDateWithBase(basePrev, schedPrev.timeOut, false);
                          if (endPrev <= startPrev) endPrev.setDate(endPrev.getDate() + 1); // spill to today
                        } else {
                          const durPrev = schedPrev.shiftDuration || 8;
                          endPrev = new Date(startPrev.getTime());
                          endPrev.setHours(endPrev.getHours() + durPrev);
                        }
                        if (now >= startPrev && now < endPrev) {
                          candidate = schedPrev;
                          shiftStart = startPrev;
                          shiftEnd = endPrev;
                          activeDayOfWeek = yesterdayName;
                        }
                      }

                      // If we still don't have a candidate, fallback: if there's no schedule for either day, show default panel
                      if (!candidate) {
                        // Create default schedule (9 AM - 5 PM)
                        const defaultTimeIn = '09:00';
                        const defaultTimeOut = '17:00';
                        
                        const formatDefaultTime = (timeStr) => {
                          const [hours, minutes] = timeStr.split(':').map(Number);
                          const date = new Date();
                          date.setHours(hours, minutes, 0, 0);
                          return format(date, 'h:mm a');
                        };
                        
                        return (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '6px' }}>
                              <div>
                                <div style={{ fontWeight: 'bold' }}>Default Shift</div>
                                <div style={{ fontSize: '0.85rem', color: '#555' }}>
                                  {formatDefaultTime(defaultTimeIn)} - {formatDefaultTime(defaultTimeOut)}
                                </div>
                              </div>
                              <StatusBadge status="Pending">
                                No Schedule
                              </StatusBadge>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff8e1', padding: '12px', borderRadius: '6px' }}>
                              <Warning size={20} style={{ marginRight: '10px', color: '#f57f17' }} />
                              <span>No schedule found for today. Using default values.</span>
                            </div>
                          </div>
                        );
                      }
                      
                      // Create proper Date objects for shift start and end times
                       const createTimeDate = (timeStr, isTimeIn = false) => {
                         if (!timeStr) {
                           // Use a default time if timeStr is undefined
                           const d = new Date(today);
                           d.setHours(isTimeIn ? 9 : 17, 0, 0, 0);
                           return d;
                         }
                         
                         try {
                           const [hours, minutes] = timeStr.split(':').map(Number);
                           const timeDate = new Date(today);
                           timeDate.setHours(hours || 0, minutes || 0, 0, 0);
                           return timeDate;
                         } catch (error) {
                           console.error('Error creating time date:', error);
                           // Use default times as fallback (return a Date, not a formatted string)
                           const d = new Date(today);
                           d.setHours(isTimeIn ? 9 : 17, 0, 0, 0);
                           return d;
                         }
                       };
                      
                      // Calculate shift duration in milliseconds
                       const totalShiftDuration = shiftEnd - shiftStart;
                      
                      // Calculate progress percentage based on scheduled time and duration
                      let progressPercentage = 0;
                      let statusText = "";
                      let elapsedTime = 0;
                      
                      if (now < shiftStart) {
                        // Shift hasn't started yet
                        progressPercentage = 0;
                        statusText = "Upcoming";
                        elapsedTime = 0;
                      } else if (now >= shiftEnd) {
                        // Shift is over
                        progressPercentage = 100;
                        statusText = "Completed";
                        elapsedTime = totalShiftDuration;
                       } else {
                         // Shift is in progress
                         // Calculate elapsed time since shift start
                         elapsedTime = now - shiftStart;
                         // Calculate progress as a percentage of the total shift duration
                         // Make sure it doesn't exceed 100% or go below 0%
                         progressPercentage = Math.min(100, Math.max(0, (elapsedTime / totalShiftDuration) * 100));
                         statusText = 'In Progress';
                       }
                       
                       // Format times for display
                       const formatTimeDisplay = (timeStr, isTimeOut = false) => {
                         // For time out, if we don't have the string but have calculated the end time
                         if (isTimeOut && !timeStr && shiftEnd) {
                           return format(shiftEnd, 'h:mm a') + ' (calculated)';
                         }
                         
                         if (!timeStr) {
                           // Use default times instead of showing N/A
                           const defaultTime = !isTimeOut ? '09:00' : '17:00';
                           const [hours, minutes] = defaultTime.split(':').map(Number);
                           const date = new Date();
                           date.setHours(hours, minutes, 0, 0);
                           return format(date, 'h:mm a') + ' (default)';
                         }
                         
                         try {
                           const [hours, minutes] = timeStr.split(':').map(Number);
                           const date = new Date();
                           date.setHours(hours || 0, minutes || 0, 0, 0);
                           return format(date, 'h:mm a');
                         } catch (error) {
                           console.error('Error formatting time for display:', error);
                           const defaultTime = !isTimeOut ? '09:00' : '17:00';
                           const [hours, minutes] = defaultTime.split(':').map(Number);
                           const date = new Date();
                           date.setHours(hours, minutes, 0, 0);
                           return format(date, 'h:mm a') + ' (default)';
                         }
                       };
                       
                       // Only show shift progress after the user has actually timed in
                       const hasTimedIn = attendanceStatus === 'Checked In';
                       
                       return (
                         <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '6px' }}>
                             <div>
                               <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{activeDayOfWeek || 'Today'}</div>
                               <div style={{ fontSize: '1rem', color: '#555' }}>
                                 {formatTimeDisplay(candidate?.timeIn, false)} - {formatTimeDisplay(candidate?.timeOut, true)}
                               </div>
                             </div>
                           </div>
                           
                           {/* Progress Bar */}
                           <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                             <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#666' }}>
                               <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>Shift Progress</span>
                               <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{hasTimedIn ? Math.round(progressPercentage) + '%' : '--'}</span>
                             </div>
                             {hasTimedIn ? (
                               <div style={{ height: '12px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                                 <div 
                                   style={{ 
                                     height: '100%', 
                                     width: `${progressPercentage}%`, 
                                     backgroundColor: progressPercentage < 30 ? '#42a5f5' : progressPercentage < 70 ? '#66bb6a' : '#8d6e63',
                                     borderRadius: '6px',
                                     transition: animateProgress ? 'width 0.5s ease-in-out' : 'none'
                                   }}
                                 />
                               </div>
                             ) : (
                               <div style={{ padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '6px', color: '#666' }}>
                                 Progress appears after you time in.
                               </div>
                             )}
                           </div>
                           
                           {/* Attendance Button */}
                           <AttendanceButtonsContainer>
                             {attendanceStatus === 'Checked In' ? (
                               <AttendanceButton 
                                 variant="out" 
                                 onClick={() => handleTimeInOutClick('Out')}
                                 disabled={processingTimeOut}
                                 style={{ width: '100%' }}
                               >
                                 <SignOut size={18} />
                                 TIME OUT
                               </AttendanceButton>
                             ) : (
                               <AttendanceButton 
                                 variant="in" 
                                 onClick={() => handleTimeInOutClick('In')}
                                 disabled={processingTimeIn}
                                 style={{ width: '100%' }}
                               >
                                 <SignIn size={18} />
                                 TIME IN
                               </AttendanceButton>
                             )}
                           </AttendanceButtonsContainer>
                         </div>
                       );
                     })()
                  })()}
                </CardContent>
              </Card>
            </div>
            
            {/* Welcome Card */}
            <div style={{ flex: '2', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <WelcomeCard style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <WelcomeContent style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <WelcomeTitle>
                      <UserCircle size={24} />
                      {getGreeting()}, {userName}
                    </WelcomeTitle>
                    {/*<Button 
                      onClick={() => setShowOverview(true)}
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', border: 'none', display: 'none' }}
                    >
                      View Full Dashboard
                    </Button>*/}
                  </div>
                  <p>{format(new Date(), "EEEE, MMMM d, yyyy 'at' h:mm a")}</p>
              
                  <StatsGrid style={{ marginTop: '1rem' }}>
                    <StatItem>
                      <IconContainer>
                        <ChartBar size={20} color="white" />
                      </IconContainer>
                      <StatValue>
                        {stats.monthlyAttendanceCount || 0}
                      </StatValue>
                      <StatLabel>Monthly<br/> Attendance Count</StatLabel>
                    </StatItem>
                    <StatItem>
                      <IconContainer>
                        <ClockClockwise size={20} color="white" style={{ color: '#42a5f5' }} />
                      </IconContainer>
                      <StatValue>
                        {stats.monthEarlyCount || 0}
                      </StatValue>
                      <StatLabel>Early<br/> Check-ins</StatLabel>
                    </StatItem>
                    <StatItem>
                      <IconContainer>
                        <ClockClockwise size={20} color="white" style={{ color: '#66bb6a' }} />
                      </IconContainer>
                      <StatValue>
                        {stats.monthOnTimeCount || 0}
                      </StatValue>
                      <StatLabel>On-Time<br/> Check-ins</StatLabel>
                    </StatItem>
                    <StatItem>
                      <IconContainer>
                        <ClockClockwise size={20} color="white" style={{ color: '#ff9800' }} />
                      </IconContainer>
                      <StatValue>
                        {stats.monthLateCount || 0}
                      </StatValue>
                      <StatLabel>Late<br/> Check-ins</StatLabel>
                    </StatItem>
                  </StatsGrid>
                </WelcomeContent>
              </WelcomeCard>
            </div>
          </HeaderGrid>
          
          {/* Quarterly Attendance Chart */}
          <QuarterlyAttendanceChart data={stats.quarterlyData || []} />
          
          {/* Main Dashboard Content */}
          <Grid style={{ marginTop: '1.5rem' }}>
        

        
        {/* Attendance Summary Card - Emphasized */}
        <Card style={{ gridColumn: 'span 2' }}>
          <DashboardCardTitle>
            <ChartBar size={20} style={{ marginRight: '8px' }} />
            Attendance Summary
          </DashboardCardTitle>
          <CardContent style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>Weekly Breakdown</div>
                <div style={{ fontSize: '0.85rem', opacity: '0.7' }}>Current Week</div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                <div style={{ backgroundColor: '#42a5f5', padding: '12px', borderRadius: '6px', color: 'white' }}>
                  <div style={{ fontSize: '0.85rem', opacity: '0.8' }}>Early</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '4px' }}>
                    {stats.weekEarlyCount || 0}
                  </div>
                  <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>
                    {stats.weekEarlyRate || 0}% of check-ins
                  </div>
                </div>
                
                <div style={{ backgroundColor: '#66bb6a', padding: '12px', borderRadius: '6px', color: 'white' }}>
                  <div style={{ fontSize: '0.85rem', opacity: '0.8' }}>On Time</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '4px' }}>
                    {stats.weekOnTimeCount || 0}
                  </div>
                  <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>
                    {stats.weekOnTimeRate || 0}% of check-ins
                  </div>
                </div>
                
                <div style={{ backgroundColor: '#ff9800', padding: '12px', borderRadius: '6px', color: 'white' }}>
                  <div style={{ fontSize: '0.85rem', opacity: '0.8' }}>Late</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '4px' }}>
                    {stats.weekLateCount || 0}
                  </div>
                  <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>
                    {stats.weekLateRate || 0}% of check-ins
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '8px' }}>
                <div style={{ backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.85rem', opacity: '0.7' }}>Attendance Rate</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '4px' }}>
                    {stats.weekAttendanceRate || 0}%
                  </div>
                  <div style={{ fontSize: '0.75rem', marginTop: '4px', opacity: '0.7' }}>
                    Days attended / Work days
                  </div>
                </div>
                
                <div style={{ backgroundColor: '#ffebee', padding: '12px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.85rem', opacity: '0.7' }}>Absences</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '4px' }}>
                    {stats.weekAbsentCount || 0}
                  </div>
                  <div style={{ fontSize: '0.75rem', marginTop: '4px', opacity: '0.7' }}>
                    This week
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: '8px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>Monthly Performance</div>
                <div style={{ fontSize: '0.85rem', opacity: '0.7' }}>{format(new Date(), 'MMMM yyyy')}</div>
              </div>
              

              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '8px' }}>
                <Tooltip text="Percentage of your check-ins that were early this month">
                  <div style={{ backgroundColor: '#e8f5e9', padding: '12px', borderRadius: '6px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                      {stats.monthEarlyRate || 0}%
                    </div>
                    <div style={{ fontSize: '0.8rem', marginTop: '4px' }}>
                      Early Rate
                    </div>
                  </div>
                </Tooltip>
                
                <Tooltip text="Percentage of your check-ins that were on time this month">
                  <div style={{ backgroundColor: '#e8f5e9', padding: '12px', borderRadius: '6px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                      {stats.monthOnTimeRate || 0}%
                    </div>
                    <div style={{ fontSize: '0.8rem', marginTop: '4px' }}>
                      On-Time Rate
                    </div>
                  </div>
                </Tooltip>
                
                <Tooltip text="Percentage of your check-ins that were late this month">
                  <div style={{ backgroundColor: '#e8f5e9', padding: '12px', borderRadius: '6px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                      {stats.monthLateRate || 0}%
                    </div>
                    <div style={{ fontSize: '0.8rem', marginTop: '4px' }}>
                      Late Rate
                    </div>
                  </div>
                </Tooltip>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
        </>
      )}
      
      {/* Add a rotating animation for the loading indicator */}
      <style>
        {`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .rotating {
            animation: rotate 1.5s linear infinite;
          }
        `}
      </style>
      
      {/* Attendance Confirmation Modal */}
      {showModal && (
        <ModalOverlay onClick={(e) => e.target === e.currentTarget && handleCloseModal()}>
          <ModalContent>
            <ModalTitle>
              {attendanceType === 'In' ? (
                <>
                  <SignIn size={24} weight="bold" color="#4caf50" />
                  Confirm Time In
                </>
              ) : (
                <>
                  <SignOut size={24} weight="bold" color="#f44336" />
                  Confirm Time Out
                </>
              )}
            </ModalTitle>
            
            <ModalInfo>

              <InfoRow>
                <InfoLabel>Current time:</InfoLabel>
                <InfoValue>{format(new Date(), 'h:mm a')}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Expected status:</InfoLabel>
                <InfoValue>
                  {isLoadingPrediction ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <ArrowClockwise size={16} className="rotating" />
                      <span>Calculating...</span>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {attendanceType === 'In' && (
                        <StatusTag status={predictedStatus}>
                          {predictedStatus}
                        </StatusTag>
                      )}
                      {attendanceType === 'Out' && (
                        <StatusTag status={predictedStatus}>
                          {predictedStatus === 'Complete' ? 'Complete Shift' : 
                           predictedStatus === 'Incomplete' ? 'Incomplete Shift' : 
                           predictedStatus === 'Overtime' ? 'Overtime' : predictedStatus}
                        </StatusTag>
                      )}
                    </div>
                  )}
                </InfoValue>
              </InfoRow>
            </ModalInfo>
            
            <div>
              <label htmlFor="attendanceNotes" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: '500' }}>
                <NotePencil size={18} />
                Optional Notes:
              </label>
              <TextArea
                id="attendanceNotes"
                value={attendanceNotes}
                onChange={(e) => setAttendanceNotes(e.target.value)}
                placeholder="Enter any additional notes about this attendance record (optional)"
              />
            </div>
            
            <ButtonGroup>
              <CancelButton onClick={handleCloseModal}>
                Cancel
              </CancelButton>
              <ConfirmButton 
                variant={attendanceType === 'In' ? 'in' : 'out'}
                onClick={handleConfirmAttendance}
                disabled={(attendanceType === 'In' && processingTimeIn) || (attendanceType === 'Out' && processingTimeOut)}
              >
                {(attendanceType === 'In' && processingTimeIn) || (attendanceType === 'Out' && processingTimeOut) ? (
                  'Processing...'
                ) : (
                  <>
                    {attendanceType === 'In' ? 'Confirm Time In' : 'Confirm Time Out'}
                    {attendanceType === 'In' ? <SignIn size={18} weight="bold" /> : <SignOut size={18} weight="bold" />}
                  </>
                )}
              </ConfirmButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default DashboardHome;

const HeaderGrid = styled(Grid)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 0;
`;
const WelcomeCard = styled(Card)`
  background: linear-gradient(135deg, #800000 0%, #330000 100%);
  color: white;
  margin-bottom: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const WelcomeTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const WelcomeContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AttendanceButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: space-between;
`;

const AttendanceButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 48%;
  border: none;
  background-color: ${props => props.variant === 'in' ? '#4caf50' : '#f44336'};
  color: white;
  
  &:hover {
    background-color: ${props => props.variant === 'in' ? '#43a047' : '#e53935'};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    background-color: #f0f0f0;
    color: #666;
  }
`;

const DashboardCardTitle = styled(CardTitle)`
  background: #111111;
  color: white;
  font-weight: bold;
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
  min-height: 170px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    if (props.status === 'Overtime') return '#e8f5e9';
    return '#f5f5f5';
  }};
  color: ${props => {
    if (props.status === 'Early') return '#1565c0';
    if (props.status === 'On Time') return '#2e7d32';
    if (props.status === 'Late') return '#c62828';
    if (props.status === 'Complete') return '#2e7d32';
    if (props.status === 'Incomplete') return '#ef6c00';
    if (props.status === 'Overtime') return '#2e7d32';
    return '#757575';
  }};
  border: 1px solid ${props => {
    if (props.status === 'Early') return '#bbdefb';
    if (props.status === 'On Time') return '#c8e6c9';
    if (props.status === 'Late') return '#ffcdd2';
    if (props.status === 'Complete') return '#c8e6c9';
    if (props.status === 'Incomplete') return '#ffe0b2';
    if (props.status === 'Overtime') return '#c8e6c9';
    return '#e0e0e0';
  }};
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
  position: relative;
`;

const ModalTitle = styled.h3`
  margin-top: 0;
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ModalInfo = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.span`
  color: #666;
  font-weight: 500;
`;

const InfoValue = styled.span`
  color: #333;
  font-weight: 600;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.95rem;
  resize: vertical;
  min-height: 80px;
  margin-bottom: 1rem;
  
  &:focus {
    outline: none;
    border-color: #800000;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;

const CancelButton = styled.button`
  background-color: #f0f0f0;
  color: #666;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const ConfirmButton = styled.button`
  background-color: ${props => props.variant === 'in' ? '#4caf50' : '#f44336'};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: ${props => props.variant === 'in' ? '#43a047' : '#e53935'};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;