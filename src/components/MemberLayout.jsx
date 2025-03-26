import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { recordAttendance, getUserAttendanceStatus, calculateAttendanceStatus } from '../utils/attendanceService';
import AttendanceConfirmationModal from './AttendanceConfirmationModal';
import { House, Calendar, Clock, ChartBar, ListChecks, SignOut } from 'phosphor-react';
import { safeTimestampToDate } from '../utils/dateUtils';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body, #root {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
  
  body {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0;
  padding: 0;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 0;
  }
`;

const MainContainer = styled.div`
  margin-left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background: #f9fafb;
  color: #111827;
  padding: 0;
  
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: calc(100vw - 250px);
    margin-left: 250px;
    padding-left: 0;
    border-left: none;
  }
`;

const TopNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #1f2937;
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  height: 60px;
  
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
  
  @media (min-width: 1024px) {
    padding-left: 2rem;
    left: 250px;
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  padding: 0;
  position: relative;
  width: 30px;
  z-index: 1000;
  
  span {
    background-color: white;
    border-radius: 3px;
    display: block;
    height: 3px;
    transition: all 0.3s ease;
    width: 100%;
  }
  
  &.open {
    span:first-child {
      transform: translateY(8px) rotate(45deg);
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:last-child {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Sidebar = styled.aside`
  background: #1f2937;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  margin-right: 0 !important;
  z-index: 100;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  
  &.open {
    transform: translateX(0);
  }
  
  @media (min-width: 1024px) {
    position: fixed;
    transform: translateX(0);
    flex-shrink: 0;
    width: 250px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
  display: ${props => props.isOpen ? 'block' : 'none'};
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #f3f4f6;
  text-decoration: none;
  padding: 1rem 1.5rem;
  display: block;
  transition: background 0.2s;
  position: relative;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }

  &.active {
    background: #3b82f6;
    color: white;
    font-weight: 600;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 4px;
      background: white;
    }
  }
  
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  padding: 1.5rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  .name {
    font-weight: 500;
    font-size: 0.875rem;
    color: white;
  }
  
  .email {
    font-size: 0.75rem;
    color: #e5e7eb;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  @media (min-width: 768px) {
    .name {
      font-size: 1rem;
    }
    
    .email {
      font-size: 0.875rem;
      max-width: 200px;
    }
  }
`;

const Content = styled.main`
  flex: 1;
  margin-left: 0;
  padding: 0;
  background: #f9fafb;
  color: #111827;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  
  & > * {
    max-width: 100%;
    overflow-x: hidden;
  }
  
  @media (min-width: 768px) {
    padding: 0;
  }
  
  @media (min-width: 1024px) {
    padding-left: 0;
  }
`;

const TimeInOutBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  background: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
  margin-top: 60px;
  margin-left: 0;
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 1.5rem 2rem;
  }
`;

const TimeButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  flex: 1;
  order: 1;
  
  @media (min-width: 768px) {
    flex-direction: row;
    order: 1;
  }
`;

const TimeRecordCard = styled.div`
  margin-top: 0;
  padding: 1rem;
  background: #fff;
  color: #111827;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  flex: 1;
  order: 2;
  
  @media (min-width: 768px) {
    margin-top: 0;
    order: 2;
  }
`;

const TimeButton = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
  font-size: 0.875rem;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
`;

const TimeInButton = styled(TimeButton)`
  background: #10b981;
  color: white;
  order: 1;
  font-size: 1.5rem;
  
  &:hover:not(:disabled) {
    background: #059669;
  }
  
  &:disabled {
    background: #6ee7b7;
    color: #f9fafb;
  }
  
  @media (min-width: 768px) {
    order: 1;
  }
`;

const TimeOutButton = styled(TimeButton)`
  background: #ef4444;
  color: white;
  order: 3;
  font-size: 1.5rem;
  
  &:hover:not(:disabled) {
    background: #dc2626;
  }
  
  &:disabled {
    background: #fca5a5;
    color: #f9fafb;
  }
  
  @media (min-width: 768px) {
    order: 3;
  }
`;

const LogoutButton = styled.button`
  margin: 1rem 1.5rem;
  padding: 0.75rem 1rem;
  background: rgba(239, 68, 68, 0.15);
  color: #fca5a5;
  border: 1px solid #ef4444;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(239, 68, 68, 0.25);
    color: white;
  }
  
  @media (min-width: 768px) {
    margin: 1rem 2rem;
  }
`;

const ConfirmationPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1100;
  max-width: 90%;
  width: 400px;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
`;

const PopupTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #111827;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: #10B981;
  }
`;

const PopupContent = styled.div`
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #4B5563;
  
  p {
    margin: 0.5rem 0;
  }
  
  .shift-duration {
    margin-top: 1rem;
    padding: 0.75rem;
    background: #F0FDF4;
    border-radius: 4px;
    border-left: 4px solid #22C55E;
    
    p {
      margin: 0;
      color: #166534;
      
      &:first-child {
        font-weight: 600;
        margin-bottom: 0.25rem;
      }
    }
  }
`;

const PopupButton = styled.button`
  padding: 0.5rem 1.5rem;
  background: #10B981;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #059669;
  }
`;

const progressAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const TimeoutProgressContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TimeoutProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #4b5563;
  
  .time-left {
    font-weight: 600;
    color: ${props => props.percentage < 25 ? '#ef4444' : props.percentage < 50 ? '#f59e0b' : '#10b981'};
  }
`;

const TimeoutProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.percentage}%;
    background: ${props => 
      props.percentage < 25 
        ? 'linear-gradient(90deg, #ef4444, #f87171)' 
        : props.percentage < 50 
          ? 'linear-gradient(90deg, #f59e0b, #fbbf24)' 
          : 'linear-gradient(90deg, #10b981, #34d399)'};
    background-size: 200% 200%;
    animation: ${progressAnimation} 2s ease infinite;
    border-radius: 4px;
    transition: width 1s ease;
  }
`;

const calculateShiftTiming = (userSchedule) => {
  if (!userSchedule || Object.keys(userSchedule).length === 0) {
    return { inShift: false, nextTimeIn: null };
  }

  const now = new Date();
  const currentDayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const yesterdayDate = new Date(now);
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterdayDayOfWeek = yesterdayDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  
  const currentTime = now.getHours() * 60 + now.getMinutes(); // Current time in minutes
  
  // Check if user is currently in a shift
  let currentShift = null;
  let shiftEndTime = null;

  // First check for overnight shifts that started yesterday
  Object.entries(userSchedule).forEach(([shiftId, shift]) => {
    if (shift.startDay && shift.startDay.toLowerCase() === yesterdayDayOfWeek &&
        shift.endDay && shift.endDay.toLowerCase() === currentDayOfWeek) {
      
      // This is an overnight shift from yesterday to today
      const [endHours, endMinutes] = shift.endTime.split(':').map(Number);
      const shiftEndTimeMinutes = endHours * 60 + endMinutes;
      
      // If current time is before the end time, user is in this shift
      if (currentTime < shiftEndTimeMinutes) {
        const endTime = new Date(now);
        endTime.setHours(endHours, endMinutes, 0, 0);
        
        currentShift = { ...shift, id: shiftId };
        shiftEndTime = endTime;
      }
    }
  });

  // If not in an overnight shift, check for shifts that start and end today
  if (!currentShift) {
    Object.entries(userSchedule).forEach(([shiftId, shift]) => {
      if (shift.startDay && shift.startDay.toLowerCase() === currentDayOfWeek &&
          shift.endDay && shift.endDay.toLowerCase() === currentDayOfWeek) {
        
        const [startHours, startMinutes] = shift.startTime.split(':').map(Number);
        const [endHours, endMinutes] = shift.endTime.split(':').map(Number);
        
        const shiftStartTimeMinutes = startHours * 60 + startMinutes;
        const shiftEndTimeMinutes = endHours * 60 + endMinutes;
        
        // If current time is between start and end, user is in this shift
        if (currentTime >= shiftStartTimeMinutes && currentTime < shiftEndTimeMinutes) {
          const endTime = new Date(now);
          endTime.setHours(endHours, endMinutes, 0, 0);
          
          currentShift = { ...shift, id: shiftId };
          shiftEndTime = endTime;
        }
      }
    });
  }

  // If user is in a shift, return the current shift info
  if (currentShift && shiftEndTime) {
    return {
      inShift: true,
      currentShift,
      shiftEndTime,
      nextTimeIn: null
    };
  }

  // If not in a shift, calculate next time in
  // Get all shifts sorted by day and time
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const currentDayIndex = daysOfWeek.indexOf(currentDayOfWeek);
  
  // Create a map of shifts by day
  const shiftsByDay = {};
  daysOfWeek.forEach(day => {
    shiftsByDay[day] = [];
  });
  
  // Populate shifts by day
  Object.entries(userSchedule).forEach(([shiftId, shift]) => {
    if (shift.startDay && shift.startTime) {
      const day = shift.startDay.toLowerCase();
      if (shiftsByDay[day]) {
        shiftsByDay[day].push({
          ...shift,
          id: shiftId
        });
      }
    }
  });
  
  // Sort shifts within each day by start time
  Object.keys(shiftsByDay).forEach(day => {
    shiftsByDay[day].sort((a, b) => {
      const [aHours, aMinutes] = a.startTime.split(':').map(Number);
      const [bHours, bMinutes] = b.startTime.split(':').map(Number);
      return (aHours * 60 + aMinutes) - (bHours * 60 + bMinutes);
    });
  });
  
  // First check today's remaining shifts
  const todayShifts = shiftsByDay[currentDayOfWeek];
  for (const shift of todayShifts) {
    const [hours, minutes] = shift.startTime.split(':').map(Number);
    const shiftStartTime = hours * 60 + minutes;
    
    if (shiftStartTime > currentTime) {
      // This shift is later today
      const nextTimeIn = new Date(now);
      nextTimeIn.setHours(hours, minutes, 0, 0);
      
      return {
        inShift: false,
        nextTimeIn,
        shift
      };
    }
  }
  
  // Check future days
  for (let i = 1; i <= 7; i++) {
    const nextDayIndex = (currentDayIndex + i) % 7;
    const nextDay = daysOfWeek[nextDayIndex];
    const nextDayShifts = shiftsByDay[nextDay];
    
    if (nextDayShifts.length > 0) {
      // Take the first shift of the next day that has shifts
      const nextShift = nextDayShifts[0];
      const [hours, minutes] = nextShift.startTime.split(':').map(Number);
      
      // Calculate days to add
      const daysToAdd = i;
      
      const nextTimeIn = new Date(now);
      nextTimeIn.setDate(nextTimeIn.getDate() + daysToAdd);
      nextTimeIn.setHours(hours, minutes, 0, 0);
      
      return {
        inShift: false,
        nextTimeIn,
        shift: nextShift
      };
    }
  }
  
  return { inShift: false, nextTimeIn: null };
};

const formatCountdown = (targetDate) => {
  if (!targetDate) return null;
  
  const now = new Date();
  const diffMs = targetDate - now;
  
  if (diffMs <= 0) return null;
  
  // Calculate days, hours, minutes
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
  let countdownText = '';
  if (days > 0) {
    countdownText += `${days} day${days !== 1 ? 's' : ''} `;
  }
  if (hours > 0 || days > 0) {
    countdownText += `${hours} hour${hours !== 1 ? 's' : ''} `;
  }
  countdownText += `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  
  return countdownText;
};

function MemberLayout() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [todayRecord, setTodayRecord] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const [pendingStatus, setPendingStatus] = useState('');
  const [pendingTimeDiff, setPendingTimeDiff] = useState(null);
  const [canTimeIn, setCanTimeIn] = useState(true);
  const [canTimeOut, setCanTimeOut] = useState(false);
  const [confirmationPopup, setConfirmationPopup] = useState({ 
    show: false, 
    message: '', 
    shiftInfo: null, 
    type: '',
    status: ''
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timeoutProgress, setTimeoutProgress] = useState({ percentage: 100, timeLeft: '', endTime: null });
  const [isRecording, setIsRecording] = useState(false);
  const [userSchedule, setUserSchedule] = useState(null);
  const [hasScheduleForToday, setHasScheduleForToday] = useState(false);
  const [noScheduleMessage, setNoScheduleMessage] = useState('');
  const location = useLocation();
  const isMobile = window.innerWidth < 1024;

  useEffect(() => {
    checkTodayAttendance();
    fetchUserInfo();
  }, []);

  useEffect(() => {
    // Close sidebar on route change (especially for mobile)
    closeSidebar();
  }, [location]);

  useEffect(() => {
    // Handle window resize to determine mobile state
    const handleResize = () => {
      // Update isMobile state
      const newIsMobile = window.innerWidth < 1024;
      
      // If transitioning from mobile to desktop, ensure sidebar is visible
      if (!newIsMobile && window.innerWidth >= 1024) {
        // No need to explicitly open sidebar on desktop as it's handled by CSS
        // Just make sure it's closed on mobile when transitioning to desktop
        if (sidebarOpen) {
          closeSidebar();
        }
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  useEffect(() => {
    // Fetch user info when the component mounts
    const fetchUserInfo = async () => {
      if (!auth.currentUser) return;
      
      try {
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserName(userData.name || auth.currentUser.displayName || 'Member User');
          setUserEmail(userData.email);
          setUserType(userData.type);
          setUserSchedule(userData.schedule || {});
          
          // Check if user has a schedule for today
          const now = new Date();
          const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
          const previousDay = new Date(now);
          previousDay.setDate(previousDay.getDate() - 1);
          const previousDayOfWeek = previousDay.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
          
          let hasSchedule = false;
          let message = '';
          
          // Check if user has any schedule entries
          if (Object.keys(userData.schedule || {}).length === 0) {
            hasSchedule = false;
            message = 'No schedule configured for this user.';
          } else {
            // Check for shifts that start today or overnight shifts that end today
            Object.values(userData.schedule || {}).forEach(shift => {
              if (shift.startDay && shift.startDay.toLowerCase() === dayOfWeek) {
                hasSchedule = true;
              } else if (shift.startDay && shift.startDay.toLowerCase() === previousDayOfWeek && 
                        shift.endDay && shift.endDay.toLowerCase() === dayOfWeek) {
                hasSchedule = true;
              }
            });
            
            if (!hasSchedule) {
              message = `No schedule configured for ${dayOfWeek}.`;
            }
          }
          
          setHasScheduleForToday(hasSchedule);
          setNoScheduleMessage(message);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
    
    fetchUserInfo();
  }, []);

  useEffect(() => {
    // Fetch the user's attendance status when the component mounts or when auth.currentUser changes
    const fetchAttendanceStatus = async () => {
      if (!auth.currentUser) return;
      
      try {
        const result = await getUserAttendanceStatus(auth.currentUser.uid);
        if (result.success) {
          setCanTimeIn(result.canTimeIn);
          setCanTimeOut(result.canTimeOut);
        } else {
          console.error('Error fetching attendance status:', result.error);
        }
      } catch (error) {
        console.error('Error in fetchAttendanceStatus:', error);
      }
    };
    
    fetchAttendanceStatus();
  }, [auth.currentUser]);

  useEffect(() => {
    // Calculate the expected end time based on the schedule
    if (todayRecord && todayRecord.type === 'IN' && todayRecord.scheduleTime) {
      const [startHours, startMinutes] = todayRecord.scheduleTime.split(':').map(Number);
      const timestampDate = safeTimestampToDate(todayRecord.timestamp);
      
      if (!timestampDate) {
        console.error('Invalid timestamp in todayRecord:', todayRecord.timestamp);
        return;
      }
      
      // Get the shift duration from the record or use a default of 10 hours
      const shiftDuration = todayRecord.shiftDuration ? 
        todayRecord.shiftDuration.hours + (todayRecord.shiftDuration.minutes / 60) : 10;
      
      // Create a new Date object for the end time
      const endTime = new Date(timestampDate);
      
      // Calculate total minutes and handle day overflow properly
      const totalMinutes = startMinutes + (shiftDuration * 60);
      const hoursToAdd = Math.floor(totalMinutes / 60);
      const minutesRemaining = Math.floor(totalMinutes % 60);
      
      // Set the hours and minutes directly
      endTime.setHours(startHours + hoursToAdd, minutesRemaining, 0, 0);
      
      // If the end time is in the past, don't show the progress bar
      if (endTime <= new Date()) {
        setTimeoutProgress({ percentage: 0, timeLeft: 'Shift ended', endTime: null });
        return;
      }
      
      // Update the timeout progress
      const updateProgress = () => {
        const now = new Date();
        const startTime = new Date(todayRecord.timestamp.seconds * 1000);
        const totalDuration = endTime - startTime;
        const elapsed = now - startTime;
        const remaining = endTime - now;
        
        // Calculate percentage of time remaining
        const percentage = Math.max(0, Math.min(100, (remaining / totalDuration) * 100));
        
        // Format time left
        const hoursLeft = Math.floor(remaining / (1000 * 60 * 60));
        const minutesLeft = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const timeLeft = `${hoursLeft}h ${minutesLeft}m`;
        
        setTimeoutProgress({ 
          percentage, 
          timeLeft, 
          endTime 
        });
      };
      
      // Initial update
      updateProgress();
      
      // Set up interval to update progress
      const intervalId = setInterval(updateProgress, 60000); // Update every minute
      
      return () => clearInterval(intervalId);
    } else {
      // Reset progress if not timed in
      setTimeoutProgress({ percentage: 100, timeLeft: '', endTime: null });
    }
  }, [todayRecord]);

  const fetchUserInfo = async () => {
    if (!auth.currentUser) return;

    try {
      const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUserName(userData.name);
        setUserEmail(userData.email);
        setUserType(userData.type);
        setUserSchedule(userData.schedule || {});
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const checkTodayAttendance = async () => {
    if (!auth.currentUser) return;

    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // Create end of day timestamp
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      // Use a simpler query that doesn't require a composite index
      const q = query(
        collection(db, 'attendance'),
        where('userId', '==', auth.currentUser.uid)
      );

      const querySnapshot = await getDocs(q);
      console.log(`Found ${querySnapshot.size} total attendance records for user`);
      
      if (!querySnapshot.empty) {
        // Get all records
        const allRecords = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // Filter for today's records client-side
        const todayRecords = allRecords.filter(record => {
          if (!record.timestamp) return false;
          
          const recordDate = safeTimestampToDate(record.timestamp);
          
          if (!recordDate) {
            console.error('Invalid timestamp in record:', record.timestamp);
            return false; // Skip this record
          }
          
          const isToday = recordDate >= today && recordDate < tomorrow;
          if (isToday) {
            console.log('Found today\'s record:', {
              id: record.id,
              type: record.type,
              timestamp: recordDate.toLocaleString(),
              status: record.status
            });
          }
          return isToday;
        });
        
        console.log(`Found ${todayRecords.length} records for today`);
        
        // Sort by timestamp in descending order
        todayRecords.sort((a, b) => {
          const timestampA = a.timestamp?.seconds || 0;
          const timestampB = b.timestamp?.seconds || 0;
          return timestampB - timestampA;
        });
        
        if (todayRecords.length > 0) {
          const latestRecord = todayRecords[0];
          
          // Format the status with time difference
          let statusText = latestRecord.status || 'No Status';
          if (latestRecord.timeDiffHours || latestRecord.timeDiffMinutes) {
            const parts = [];
            if (latestRecord.timeDiffHours) {
              parts.push(`${Math.abs(latestRecord.timeDiffHours)}h`);
            }
            if (latestRecord.timeDiffMinutes) {
              parts.push(`${Math.abs(latestRecord.timeDiffMinutes)}m`);
            }
            if (parts.length > 0) {
              const isEarly = latestRecord.timeDiff && typeof latestRecord.timeDiff.totalMinutes === 'number' 
                ? latestRecord.timeDiff.totalMinutes < 0 
                : false;
              statusText += ` (${parts.join(' and ')}${isEarly ? ' early' : ' late'})`;
            }
          }
          
          setTodayRecord({
            ...latestRecord,
            formattedStatus: statusText
          });
        } else {
          setTodayRecord(null);
        }
      } else {
        setTodayRecord(null);
      }
    } catch (error) {
      console.error('Error checking attendance:', error);
    }
  };

  const handleTimeButtonClick = async (type) => {
    // If user has no schedule for today, show a warning message but allow them to continue
    if (!hasScheduleForToday) {
      const confirmContinue = window.confirm(`Warning: You don't have a scheduled shift today. Are you sure you want to time ${type.toLowerCase()} for emergency work?`);
      if (!confirmContinue) {
        return;
      }
    }
    
    try {
      const now = new Date();
      
      // Get the current day of the week
      const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
      
      // Get the user's schedule for today
      let scheduleTime;
      if (userSchedule) {
        const todaySchedule = Object.values(userSchedule).find(
          shift => shift.startDay && shift.startDay.toLowerCase() === dayOfWeek
        );
        
        if (todaySchedule) {
          scheduleTime = type.toUpperCase() === 'IN' ? todaySchedule.startTime : todaySchedule.endTime;
        }
      }
      
      // Default times if no schedule is found
      if (!scheduleTime) {
        scheduleTime = type.toUpperCase() === 'IN' ? '09:00' : '18:00';
      }
      
      console.log(`Using schedule time: ${scheduleTime} for ${type}`);
      
      // Use the same calculation as in AttendanceLogs.jsx via attendanceService.js
      const { status, timeDiff } = await calculateAttendanceStatus(scheduleTime, now, type.toUpperCase(), 'PHT');
      
      console.log(`Calculated status: ${status}, timeDiff:`, timeDiff);
      
      // Store the raw minutes for the modal to use with the same formatter as AttendanceLogs
      setPendingTimeDiff(timeDiff && timeDiff.totalMinutes !== undefined ? timeDiff.totalMinutes : 0);
      setPendingStatus(status);
      setPendingAction(type.toUpperCase());
      setShowModal(true);
    } catch (error) {
      console.error('Error calculating attendance status:', error);
      alert('Error calculating attendance status. Please try again.');
    }
  };

  const handleTimeRecord = async (type, notes) => {
    if (!auth.currentUser || isRecording) return;

    try {
      // Set recording state to prevent multiple submissions
      setIsRecording(true);
      console.log(`Recording ${type} attendance with notes: ${notes}`);
      
      const result = await recordAttendance(
        auth.currentUser.uid,
        type,
        notes
      );
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to record attendance');
      }

      setShowModal(false);
      
      // Update the time in/out button states
      setCanTimeIn(type === 'OUT');
      setCanTimeOut(type === 'IN');
      
      // Add a small delay to ensure the Firestore record is fully processed
      setTimeout(() => {
        console.log('Refreshing attendance records after recording');
        checkTodayAttendance();
      }, 1000);

      // Show status message
      const statusMessage = `${type} recorded - ${result.status}`;
      
      // For OUT records, calculate shift timing
      let shiftInfo = null;
      if (type === 'OUT') {
        // Get user schedule
        try {
          const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            const userSchedule = userData.schedule || {};
            
            // Calculate shift timing
            const shiftTiming = calculateShiftTiming(userSchedule);
            
            if (shiftTiming.inShift) {
              // User is currently in a shift
              shiftInfo = {
                inShift: true,
                shiftName: shiftTiming.currentShift.name || 'Current Shift',
                endTime: shiftTiming.shiftEndTime,
                countdown: formatCountdown(shiftTiming.shiftEndTime)
              };
            } else if (shiftTiming.nextTimeIn) {
              // User has a next shift scheduled
              shiftInfo = {
                inShift: false,
                shiftName: shiftTiming.shift.name || 'Next Shift',
                startTime: shiftTiming.nextTimeIn,
                countdown: formatCountdown(shiftTiming.nextTimeIn)
              };
            }
          }
        } catch (error) {
          console.error('Error calculating shift timing:', error);
        }
      }
      
      if (result.timeDiff) {
        const hours = Math.abs(result.timeDiff?.hours || 0);
        const minutes = Math.abs(result.timeDiff?.minutes || 0);
        const timeDesc = [];
        if (hours > 0) timeDesc.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
        if (minutes > 0) timeDesc.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
        
        if (timeDesc.length > 0) {
          const isEarly = result.timeDiff && typeof result.timeDiff.totalMinutes === 'number' 
            ? result.timeDiff.totalMinutes < 0 
            : false;
          let message = `${statusMessage} (${timeDesc.join(' and ')}${isEarly ? ' early' : ' late'})`;
          
          // Show confirmation popup instead of alert
          setConfirmationPopup({
            show: true,
            message: message,
            shiftInfo: shiftInfo,
            type: type,
            status: result.status
          });
        } else {
          // Show confirmation popup instead of alert
          setConfirmationPopup({
            show: true,
            message: statusMessage,
            shiftInfo: shiftInfo,
            type: type,
            status: result.status
          });
        }
      } else {
        // Show confirmation popup instead of alert
        setConfirmationPopup({
          show: true,
          message: statusMessage,
          shiftInfo: shiftInfo,
          type: type,
          status: result.status
        });
      }
    } catch (error) {
      console.error('Error recording time:', error);
      alert(error.message || 'Failed to record attendance. Please try again.');
    } finally {
      setIsRecording(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const formatTime = (timestamp) => {
    const date = safeTimestampToDate(timestamp);
    if (!date) return 'N/A';
    
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const user = auth.currentUser;
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <GlobalStyles />
      <LayoutContainer>
        <Sidebar 
          className={sidebarOpen ? 'open' : ''}
        >
          <Logo>Hyacinth Attendance</Logo>
          <NavLink to="/member/dashboard" className={({ isActive }) => isActive ? 'active' : ''} onClick={isMobile ? closeSidebar : undefined}>
            <Icon><House size={16} /></Icon>
            Dashboard
          </NavLink>
          <NavLink to="/member/my-schedule" className={({ isActive }) => isActive ? 'active' : ''} onClick={isMobile ? closeSidebar : undefined}>
            <Icon><Calendar size={16} /></Icon>
            My Schedule
          </NavLink>
          <NavLink to="/member/all-schedules" className={({ isActive }) => isActive ? 'active' : ''} onClick={isMobile ? closeSidebar : undefined}>
            <Icon><ListChecks size={16} /></Icon>
            All Schedules
          </NavLink>
          <NavLink to="/member/realtime-attendance" className={({ isActive }) => isActive ? 'active' : ''} onClick={isMobile ? closeSidebar : undefined}>
            <Icon><Clock size={16} /></Icon>
            Real-Time Attendance
          </NavLink>
          <NavLink to="/member/reports" className={({ isActive }) => isActive ? 'active' : ''} onClick={isMobile ? closeSidebar : undefined}>
            <Icon><ChartBar size={16} /></Icon>
            Reports
          </NavLink>
          <LogoutButton onClick={handleLogout}>
            <Icon><SignOut size={16} /></Icon>
            Logout
          </LogoutButton>
        </Sidebar>

        <Overlay isOpen={sidebarOpen} onClick={closeSidebar} />

        <MainContainer>
          <TopNav>
            <HamburgerButton 
              onClick={toggleSidebar}
              className={sidebarOpen ? 'open' : ''}
            >
              <span></span>
              <span></span>
              <span></span>
            </HamburgerButton>
            
            <UserInfo>
              <span className="name">{user.displayName || 'User'}</span>
              <span className="email">{user.email}</span>
            </UserInfo>
          </TopNav>

          <TimeInOutBar>
            <TimeButtonsContainer>
              <TimeInButton 
                onClick={() => handleTimeButtonClick('in')} 
                disabled={!canTimeIn || isRecording}
                title={!hasScheduleForToday ? "No schedule for today, but you can still time in for emergency work" : (canTimeIn ? 'Time In' : 'Already timed in')}
              >
                Time In
              </TimeInButton>
              
              <TimeOutButton 
                onClick={() => handleTimeButtonClick('out')} 
                disabled={!canTimeOut || isRecording}
                title={!hasScheduleForToday ? "No schedule for today, but you can still time out for emergency work" : (canTimeOut ? 'Time Out' : 'Need to time in first')}
              >
                Time Out
              </TimeOutButton>
            </TimeButtonsContainer>
            
            {todayRecord && (
              <TimeRecordCard>
                <p style={{ margin: '0 0 0.5rem', fontWeight: 'bold', color: '#111827' }}>Today's Record:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ flex: '1 0 45%', minWidth: '120px' }}>
                    <p style={{ margin: '0', fontSize: '0.875rem', color: '#111827' }}><strong>Type:</strong> {todayRecord.type}</p>
                    <p style={{ margin: '0', fontSize: '0.875rem', color: '#111827' }}><strong>Time:</strong> {formatTime(todayRecord.timestamp)}</p>
                  </div>
                  <div style={{ flex: '1 0 45%', minWidth: '120px' }}>
                    {todayRecord.scheduleTime && (
                      <p style={{ margin: '0', fontSize: '0.875rem', color: '#111827' }}><strong>Schedule:</strong> {new Date(`1970-01-01T${todayRecord.scheduleTime}`).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                      })}</p>
                    )}
                    <p style={{ margin: '0', fontSize: '0.875rem', color: '#111827' }}><strong>Status:</strong> <span style={{
                      padding: '0.25rem 0.5rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      display: 'inline-block',
                      marginTop: '0.25rem',
                      background: todayRecord.status?.toLowerCase().includes('late') ? '#FEE2E2' :
                                todayRecord.status?.toLowerCase().includes('early') ? '#DBEAFE' :
                                todayRecord.status?.toLowerCase().includes('overtime') ? '#FEF3C7' : '#DCFCE7',
                      color: todayRecord.status?.toLowerCase().includes('late') ? '#991B1B' :
                            todayRecord.status?.toLowerCase().includes('early') ? '#1E40AF' :
                            todayRecord.status?.toLowerCase().includes('overtime') ? '#92400E' : '#166534'
                    }}>{todayRecord.formattedStatus}</span></p>
                  </div>
                </div>
                
                {/* Display shift duration for OUT records */}
                {todayRecord.type === 'OUT' && todayRecord.shiftDurationHours !== undefined && (
                  <div style={{ 
                    marginTop: '0.5rem', 
                    padding: '0.5rem', 
                    background: '#F0FDF4', 
                    borderRadius: '4px', 
                    borderLeft: '4px solid #22C55E' 
                  }}>
                    <p style={{ margin: '0', fontWeight: 'bold', fontSize: '0.875rem', color: '#166534' }}>Shift Duration:</p>
                    <p style={{ margin: '0', fontSize: '0.875rem', color: '#166534' }}>
                      {todayRecord.shiftDurationHours > 0 && `${todayRecord.shiftDurationHours} hour${todayRecord.shiftDurationHours !== 1 ? 's' : ''} `}
                      {todayRecord.shiftDurationMinutes > 0 && `${todayRecord.shiftDurationMinutes} minute${todayRecord.shiftDurationMinutes !== 1 ? 's' : ''}`}
                    </p>
                  </div>
                )}
                
                {/* Display timeout progress for IN records */}
                {todayRecord.type === 'IN' && timeoutProgress.endTime && (
                  <TimeoutProgressContainer>
                    <TimeoutProgressLabel percentage={timeoutProgress.percentage}>
                      <span>Time remaining in shift:</span>
                      <span className="time-left">{timeoutProgress.timeLeft}</span>
                    </TimeoutProgressLabel>
                    <TimeoutProgressBar percentage={timeoutProgress.percentage} />
                  </TimeoutProgressContainer>
                )}
              </TimeRecordCard>
            )}
          </TimeInOutBar>

          <Content>
            <Outlet />
          </Content>

          <AttendanceConfirmationModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onConfirm={(notes) => handleTimeRecord(pendingAction, notes)}
            type={pendingAction}
            userData={{
              name: userName,
              email: userEmail
            }}
            status={pendingStatus}
            timeDiff={pendingTimeDiff}
          />
          
          {confirmationPopup.show && (
            <PopupOverlay>
              <ConfirmationPopup>
                <PopupTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {confirmationPopup.type} Recorded
                </PopupTitle>
                
                <PopupContent>
                  <p>{confirmationPopup.message}</p>
                  {confirmationPopup.shiftInfo && confirmationPopup.type === 'OUT' && (
                    <div className="shift-info">
                      {confirmationPopup.shiftInfo.inShift ? (
                        <>
                          <p>Time Remaining in Shift:</p>
                          <p>{confirmationPopup.shiftInfo.shiftName} - Ends at {new Date(confirmationPopup.shiftInfo.endTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                          {confirmationPopup.shiftInfo.countdown && (
                            <p>Remaining: {confirmationPopup.shiftInfo.countdown}</p>
                          )}
                        </>
                      ) : (
                        <>
                          <p>Next Time In:</p>
                          <p>{confirmationPopup.shiftInfo.shiftName} - {new Date(confirmationPopup.shiftInfo.startTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                          {confirmationPopup.shiftInfo.countdown && (
                            <p>Countdown: {confirmationPopup.shiftInfo.countdown}</p>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </PopupContent>
                <PopupButton onClick={() => setConfirmationPopup({ show: false, message: '', shiftInfo: null, type: '', status: '' })}>
                  OK
                </PopupButton>
              </ConfirmationPopup>
            </PopupOverlay>
          )}
        </MainContainer>
      </LayoutContainer>
    </>
  );
}

export default MemberLayout;
