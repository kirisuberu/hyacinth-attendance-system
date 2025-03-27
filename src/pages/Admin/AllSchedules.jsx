import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs, doc, updateDoc, deleteField } from 'firebase/firestore';
import { db } from '../../firebase';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, getDate, addMonths, subMonths } from 'date-fns';
import { Calendar, CaretLeft, CaretRight, Trash, PencilSimple } from 'phosphor-react';

const Container = styled.div`
  padding: 2.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.75rem;
  color: #1a1a1a;
  margin-bottom: 2.5rem;
  font-weight: 600;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const SearchContainer = styled.div`
  flex: 1;
  max-width: 600px;
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TimezoneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: 1.5rem;
`;

const TimezoneLabel = styled.span`
  font-weight: 600;
  color: #4b5563;
`;

const TimezoneSelect = styled.select`
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background-color: white;
  color: #111827;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const SortButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${props => props.active ? '#dbeafe' : '#f9fafb'};
  border: 1px solid ${props => props.active ? '#3b82f6' : '#d1d5db'};
  border-radius: 0.5rem;
  color: ${props => props.active ? '#1e40af' : '#4b5563'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.active ? '#bfdbfe' : '#f3f4f6'};
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const SortLabel = styled.span`
  font-weight: 600;
  color: #4b5563;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.875rem 1.25rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const CalendarContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

const MonthNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MonthTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  min-width: 200px;
  text-align: center;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #d1d5db;
  background-color: white;
  color: #4b5563;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid #e5e7eb;
`;

const WeekdayHeader = styled.div`
  padding: 0.75rem;
  text-align: center;
  font-weight: 600;
  color: #4b5563;
  background-color: #f9fafb;
  border-right: 1px solid #e5e7eb;
  
  &:last-child {
    border-right: none;
  }
`;

const CalendarDay = styled.div`
  min-height: 120px;
  border-right: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.5rem;
  position: relative;
  background-color: ${props => props.isCurrentMonth ? 'white' : '#f9fafb'};
  cursor: pointer;
  
  &:last-child {
    border-right: none;
  }
  
  &:nth-last-child(-n+7) {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

const DayNumber = styled.div`
  font-weight: ${props => props.isToday ? '700' : '500'};
  color: ${props => props.isToday ? '#3b82f6' : '#111827'};
  background-color: ${props => props.isToday ? '#dbeafe' : 'transparent'};
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;

const ScheduleCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dbeafe;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e40af;
  margin-top: 0.5rem;
  width: fit-content;
`;

const DayScheduleModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

const DayScheduleContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  padding: 1.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow-y: auto;
`;

const DayScheduleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.75rem;
`;

const DayScheduleTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ScheduleItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ScheduleItem = styled.div`
  background-color: #dbeafe;
  border-left: 3px solid #3b82f6;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  position: relative;
  
  &:hover {
    background-color: #bfdbfe;
  }
`;

const ActionButtons = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  display: flex;
  gap: 0.25rem;
  opacity: 0;
  transition: opacity 0.2s;
  
  ${ScheduleItem}:hover & {
    opacity: 1;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: none;
  background-color: ${props => props.delete ? '#fee2e2' : '#e0f2fe'};
  color: ${props => props.delete ? '#b91c1c' : '#0369a1'};
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.delete ? '#fecaca' : '#bae6fd'};
  }
`;

const UserName = styled.div`
  font-weight: 600;
  color: #111827;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
`;

const ShiftTime = styled.div`
  font-size: 0.8rem;
  color: #4b5563;
`;

const NoSchedulesMessage = styled.p`
  color: #6b7280;
  font-style: italic;
  text-align: center;
  padding: 1rem 0;
`;

const ScheduleModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  padding: 1.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
  
  &:hover {
    color: #111827;
  }
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #4b5563;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const CancelButton = styled(Button)`
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  color: #4b5563;
  
  &:hover {
    background-color: #e5e7eb;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #3b82f6;
  border: 1px solid #2563eb;
  color: white;
  
  &:hover {
    background-color: #2563eb;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #ef4444;
  border: 1px solid #dc2626;
  color: white;
  
  &:hover {
    background-color: #dc2626;
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;

const ShiftTooltip = styled.div`
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  z-index: 20;
  width: 220px;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  font-size: 0.95rem;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? 1 : 0};
  transition: visibility 0s, opacity 0.2s linear;
`;

const TooltipHeader = styled.div`
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #111827;
  font-size: 1.1rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
`;

const TooltipRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 0.25rem 0;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TooltipLabel = styled.span`
  color: #4b5563;
  font-weight: 500;
`;

const TooltipValue = styled.span`
  color: #111827;
  font-weight: 600;
`;

function AllSchedules() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [tooltipInfo, setTooltipInfo] = useState({
    visible: false,
    shift: null,
    top: 0,
    left: 0
  });
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [selectedDays, setSelectedDays] = useState([]); // Array of selected day indices
  const [selectedTimezone, setSelectedTimezone] = useState('PHT'); // Default to PHT
  
  // Calendar state
  const [currentDate, setCurrentDate] = useState(new Date(2025, 2, 1)); // March 2025
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('edit'); // 'edit' or 'delete'
  const [selectedDay, setSelectedDay] = useState(null);
  const [isDayModalOpen, setIsDayModalOpen] = useState(false);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const usersRef = collection(db, 'users');
        const querySnapshot = await getDocs(usersRef);
        
        const userData = querySnapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          .filter(user => user.name && user.email); // Ensure we have basic user info
        
        setUsers(userData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to load users: ' + err.message);
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setTooltipInfo(prev => ({ ...prev, visible: false }));
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Timezone offset in hours from UTC
  const timezoneOffsets = {
    PHT: 8, // UTC+8
    CST: -6, // UTC-6
    EST: -5  // UTC-5
  };

  // Convert time from PHT (default storage format) to selected timezone
  const convertTime = (timeString, fromTimezone = 'PHT', toTimezone = selectedTimezone) => {
    if (!timeString) return { time: 'Not set', dayChange: 0 };
    
    // Parse the time string
    const [hours, minutes] = timeString.split(':').map(Number);
    
    // Calculate the time difference between timezones
    const fromOffset = timezoneOffsets[fromTimezone];
    const toOffset = timezoneOffsets[toTimezone];
    const hourDifference = toOffset - fromOffset;
    
    // Apply the offset
    let newHours = hours + hourDifference;
    let dayChange = 0; // 0 = same day, -1 = previous day, 1 = next day
    
    // Handle day wrapping
    if (newHours < 0) {
      newHours += 24;
      dayChange = -1; // Previous day
    } else if (newHours >= 24) {
      newHours -= 24;
      dayChange = 1; // Next day
    }
    
    // Format the time
    const hour = newHours;
    const period = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    const minutesFormatted = minutes.toString().padStart(2, '0');
    
    return {
      time: `${hour12}:${minutesFormatted} ${period}`,
      dayChange
    };
  };

  const formatTimeWithDayInfo = (time) => {
    if (!time) return 'Not set';
    
    // Convert the time to the selected timezone
    const result = convertTime(time);
    
    // Add day change information if needed
    if (result.dayChange === -1) {
      return `${result.time} (previous day)`;
    } else if (result.dayChange === 1) {
      return `${result.time} (next day)`;
    } else {
      return result.time;
    }
  };

  const formatTime = (time) => {
    if (!time) return 'Not set';
    
    // Convert the time to the selected timezone
    const result = convertTime(time);
    return result.time;
  };

  const formatDayName = (day) => {
    if (!day) return 'Not set';
    return day.charAt(0).toUpperCase() + day.slice(1);
  };

  const isCurrentShift = (shift) => {
    if (!shift || !shift.startDay || !shift.endDay || !shift.startTime || !shift.endTime) {
      return false;
    }

    const today = new Date().getDay();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    
    // Get the original day indices
    const startDayIndex = getDayIndex(shift.startDay);
    const endDayIndex = getDayIndex(shift.endDay);
    
    // Get timezone conversion information
    const convertedStartTime = convertTime(shift.startTime);
    const convertedEndTime = convertTime(shift.endTime);
    
    // Apply day changes from timezone conversion
    const effectiveStartDayIndex = (startDayIndex + convertedStartTime.dayChange + 7) % 7;
    const effectiveEndDayIndex = (endDayIndex + convertedEndTime.dayChange + 7) % 7;
    
    // Check if today is within the effective start and end days
    let isTodayInShiftRange = false;
    
    if (effectiveStartDayIndex === effectiveEndDayIndex) {
      // Shift starts and ends on the same day
      isTodayInShiftRange = today === effectiveStartDayIndex;
    } else if (effectiveStartDayIndex < effectiveEndDayIndex) {
      // Normal range (e.g., Monday to Wednesday)
      isTodayInShiftRange = today >= effectiveStartDayIndex && today <= effectiveEndDayIndex;
    } else {
      // Wrap-around range (e.g., Saturday to Monday)
      isTodayInShiftRange = today >= effectiveStartDayIndex || today <= effectiveEndDayIndex;
    }
    
    if (!isTodayInShiftRange) {
      return false;
    }
    
    // Parse the converted times
    const startTimeParts = convertedStartTime.time.split(' ');
    const startTimeValue = startTimeParts[0];
    const startPeriod = startTimeParts[1];
    
    const endTimeParts = convertedEndTime.time.split(' ');
    const endTimeValue = endTimeParts[0];
    const endPeriod = endTimeParts[1];
    
    const [startHourStr, startMinuteStr] = startTimeValue.split(':');
    const [endHourStr, endMinuteStr] = endTimeValue.split(':');
    
    let startHour = parseInt(startHourStr);
    let endHour = parseInt(endHourStr);
    const startMinutes = parseInt(startMinuteStr);
    const endMinutes = parseInt(endMinuteStr);
    
    // Convert to 24-hour format
    if (startPeriod === 'PM' && startHour !== 12) {
      startHour += 12;
    } else if (startPeriod === 'AM' && startHour === 12) {
      startHour = 0;
    }
    
    if (endPeriod === 'PM' && endHour !== 12) {
      endHour += 12;
    } else if (endPeriod === 'AM' && endHour === 12) {
      endHour = 0;
    }
    
    const currentTime = currentHour * 60 + currentMinutes;
    const startTime = startHour * 60 + startMinutes;
    const endTime = endHour * 60 + endMinutes;
    
    // Check if current time is within the shift time range
    if (today === effectiveStartDayIndex && today === effectiveEndDayIndex) {
      // Same day calculation
      if (startTime <= endTime) {
        return currentTime >= startTime && currentTime <= endTime;
      } else {
        // End time is earlier than start time on the same day, which means it wraps to the next day
        return currentTime >= startTime || currentTime <= endTime;
      }
    } else if (today === effectiveStartDayIndex) {
      // First day of multi-day shift
      return currentTime >= startTime;
    } else if (today === effectiveEndDayIndex) {
      // Last day of multi-day shift
      return currentTime <= endTime;
    } else {
      // Middle day of multi-day shift
      return true;
    }
  };

  const getDayIndex = (day) => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days.indexOf(day.toLowerCase());
  };

  const calculateShiftDuration = (shift) => {
    if (!shift || !shift.startDay || !shift.endDay || !shift.startTime || !shift.endTime) {
      return 0;
    }

    // Convert start and end times to the selected timezone
    const convertedStartTime = convertTime(shift.startTime);
    const convertedEndTime = convertTime(shift.endTime);
    
    // Parse the converted times
    const startTimeParts = convertedStartTime.time.split(' ');
    const startTimeValue = startTimeParts[0];
    const startPeriod = startTimeParts[1];
    
    const endTimeParts = convertedEndTime.time.split(' ');
    const endTimeValue = endTimeParts[0];
    const endPeriod = endTimeParts[1];
    
    const [startHourStr, startMinuteStr] = startTimeValue.split(':');
    const [endHourStr, endMinuteStr] = endTimeValue.split(':');
    
    let startHour = parseInt(startHourStr);
    let endHour = parseInt(endHourStr);
    const startMinutes = parseInt(startMinuteStr);
    const endMinutes = parseInt(endMinuteStr);
    
    // Convert to 24-hour format
    if (startPeriod === 'PM' && startHour !== 12) {
      startHour += 12;
    } else if (startPeriod === 'AM' && startHour === 12) {
      startHour = 0;
    }
    
    if (endPeriod === 'PM' && endHour !== 12) {
      endHour += 12;
    } else if (endPeriod === 'AM' && endHour === 12) {
      endHour = 0;
    }
    
    // Calculate duration considering day changes
    let duration;
    
    // Check if the days are different in the original schedule
    const startDayIndex = getDayIndex(shift.startDay);
    const endDayIndex = getDayIndex(shift.endDay);
    const dayDifference = (endDayIndex - startDayIndex + 7) % 7;
    
    // Apply timezone day changes
    const effectiveStartDay = startDayIndex + convertedStartTime.dayChange;
    const effectiveEndDay = endDayIndex + convertedEndTime.dayChange;
    const effectiveDayDifference = (effectiveEndDay - effectiveStartDay + 7) % 7;
    
    if (effectiveDayDifference === 0) {
      // Same day calculation
      if (endHour < startHour || (endHour === startHour && endMinutes < startMinutes)) {
        // End time is earlier than start time on the same day, which means it wraps to the next day
        duration = ((24 + endHour) * 60 + endMinutes) - (startHour * 60 + startMinutes);
      } else {
        duration = (endHour * 60 + endMinutes) - (startHour * 60 + startMinutes);
      }
    } else {
      // Different day calculation
      duration = ((24 * effectiveDayDifference) + endHour * 60 + endMinutes) - (startHour * 60 + startMinutes);
    }
    
    return Math.round(duration / 60 * 10) / 10; // Round to 1 decimal place
  };

  const calculateShiftPosition = (shift) => {
    if (!shift || !shift.startTime) return { left: 0, width: 0 };
    
    // Convert the time to the selected timezone for positioning
    const convertedTime = convertTime(shift.startTime);
    
    // Get the day change information
    const dayChange = convertedTime.dayChange;
    
    // If the day has changed, we need to adjust the visual position
    let totalMinutes;
    if (dayChange === -1) {
      // Previous day - show at the end of the current day
      totalMinutes = 23 * 60;
    } else if (dayChange === 1) {
      // Next day - show at the beginning of the current day
      totalMinutes = 0;
    } else {
      // Same day - normal calculation
      const timeParts = convertedTime.time.split(' ');
      const timeValue = timeParts[0];
      const period = timeParts[1];
      
      const [hourStr, minuteStr] = timeValue.split(':');
      let hour = parseInt(hourStr);
      const minutes = parseInt(minuteStr);
      
      // Convert to 24-hour format
      if (period === 'PM' && hour !== 12) {
        hour += 12;
      } else if (period === 'AM' && hour === 12) {
        hour = 0;
      }
      
      totalMinutes = hour * 60 + minutes;
    }
    
    // Calculate position as percentage of day (24 hours)
    // Limit the left position to ensure it's visible (at least 5% from the left edge)
    const left = Math.min(Math.max((totalMinutes / (24 * 60)) * 100, 5), 90);
    
    // Calculate width based on duration
    const duration = calculateShiftDuration(shift);
    // Ensure minimum width for visibility
    const width = Math.max((duration / 24) * 100, 10);
    
    return { left: `${left}%`, width: `${width}%` };
  };

  const handleShiftClick = (e, shift) => {
    e.stopPropagation();
    
    const rect = e.currentTarget.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    setTooltipInfo({
      visible: true,
      shift,
      top: rect.top + scrollTop - 100, // Position above the shift block
      left: rect.left + (rect.width / 2) - 110 // Center the tooltip
    });
  };

  const handleCloseTooltip = () => {
    setTooltipInfo(prev => ({ ...prev, visible: false }));
  };

  const filteredUsers = users.filter(user => {
    // First apply search term filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const nameMatch = user.name && user.name.toLowerCase().includes(searchLower);
      const emailMatch = user.email && user.email.toLowerCase().includes(searchLower);
      
      if (!nameMatch && !emailMatch) return false;
    }
    
    // Then apply day filter if any days are selected
    if (selectedDays.length > 0) {
      // Check if user has any shifts on any of the selected days
      const hasShiftOnSelectedDays = user.schedule && 
        Object.values(user.schedule).some(shift => 
          shift && 
          shift.startDay && 
          selectedDays.includes(getDayIndex(shift.startDay))
        );
      
      return hasShiftOnSelectedDays;
    }
    
    return true;
  });

  // Sort users based on sortOrder
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const nameA = a.name ? a.name.toLowerCase() : '';
    const nameB = b.name ? b.name.toLowerCase() : '';
    
    if (sortOrder === 'asc') {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const handleDayClick = (index) => {
    setSelectedDays(prevSelectedDays => {
      if (prevSelectedDays.includes(index)) {
        // Remove day if already selected
        return prevSelectedDays.filter(dayIndex => dayIndex !== index);
      } else {
        // Add day if not already selected
        return [...prevSelectedDays, index];
      }
    });
  };

  const clearDayFilters = () => {
    setSelectedDays([]);
  };

  const handleTimezoneChange = (e) => {
    setSelectedTimezone(e.target.value);
  };

  // Calendar navigation functions
  const goToPreviousMonth = () => {
    setCurrentDate(prevDate => subMonths(prevDate, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(prevDate => addMonths(prevDate, 1));
  };

  // Get calendar days for the current month
  const getDaysInMonth = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    return eachDayOfInterval({ start: monthStart, end: monthEnd });
  };

  // Get day of week for the first day of the month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = () => {
    return startOfMonth(currentDate).getDay();
  };

  // Check if a user has a schedule on a specific day
  const getUserSchedulesForDay = (user, date) => {
    if (!user.schedule) return [];
    
    const dayOfWeek = format(date, 'EEEE').toLowerCase();
    
    return Object.entries(user.schedule)
      .filter(([_, shift]) => 
        shift && 
        shift.startDay && 
        shift.startDay.toLowerCase() === dayOfWeek
      )
      .map(([shiftId, shift]) => ({
        id: shiftId,
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        ...shift
      }));
  };

  // Get all schedules for a specific day
  const getAllSchedulesForDay = (date) => {
    return users.flatMap(user => getUserSchedulesForDay(user, date));
  };

  // Handle schedule edit
  const handleEditSchedule = (schedule) => {
    setSelectedSchedule(schedule);
    setModalMode('edit');
    setIsModalOpen(true);
  };

  // Handle schedule delete
  const handleDeleteSchedule = (schedule) => {
    setSelectedSchedule(schedule);
    setModalMode('delete');
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSchedule(null);
  };

  // Save schedule changes
  const handleSaveSchedule = async (e) => {
    e.preventDefault();
    
    try {
      const userRef = doc(db, 'users', selectedSchedule.userId);
      
      // Update the schedule in Firestore
      await updateDoc(userRef, {
        [`schedule.${selectedSchedule.id}.startTime`]: e.target.startTime.value,
        [`schedule.${selectedSchedule.id}.endTime`]: e.target.endTime.value,
      });
      
      // Update local state
      setUsers(prevUsers => 
        prevUsers.map(user => {
          if (user.id === selectedSchedule.userId) {
            return {
              ...user,
              schedule: {
                ...user.schedule,
                [selectedSchedule.id]: {
                  ...user.schedule[selectedSchedule.id],
                  startTime: e.target.startTime.value,
                  endTime: e.target.endTime.value,
                }
              }
            };
          }
          return user;
        })
      );
      
      handleCloseModal();
    } catch (error) {
      console.error('Error updating schedule:', error);
      alert('Failed to update schedule: ' + error.message);
    }
  };

  // Delete schedule
  const handleConfirmDelete = async () => {
    try {
      const userRef = doc(db, 'users', selectedSchedule.userId);
      
      // Delete the schedule field in Firestore
      await updateDoc(userRef, {
        [`schedule.${selectedSchedule.id}`]: deleteField()
      });
      
      // Update local state
      setUsers(prevUsers => 
        prevUsers.map(user => {
          if (user.id === selectedSchedule.userId) {
            const updatedSchedule = { ...user.schedule };
            delete updatedSchedule[selectedSchedule.id];
            
            return {
              ...user,
              schedule: updatedSchedule
            };
          }
          return user;
        })
      );
      
      handleCloseModal();
    } catch (error) {
      console.error('Error deleting schedule:', error);
      alert('Failed to delete schedule: ' + error.message);
    }
  };

  // Handle calendar day click to show popup
  const handleCalendarDayClick = (day, schedules) => {
    setSelectedDay({
      date: day,
      schedules
    });
    setIsDayModalOpen(true);
  };

  // Close day schedules modal
  const handleCloseDayModal = () => {
    setIsDayModalOpen(false);
    setSelectedDay(null);
  };

  if (loading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return <Container>{error}</Container>;
  }

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const daysInMonth = getDaysInMonth();
  const firstDayOfMonth = getFirstDayOfMonth();
  const today = new Date();

  return (
    <Container onClick={handleCloseTooltip}>
      <Title>
        All User Schedules
        {selectedDays.length > 0 && (
          <FilterBadge>
            Filtering by: {selectedDays.map(dayIndex => days[dayIndex]).join(', ')}
            <ClearFilterButton onClick={(e) => {
              e.stopPropagation();
              clearDayFilters();
            }}>×</ClearFilterButton>
          </FilterBadge>
        )}
      </Title>
      
      <ControlsContainer>
        <SearchContainer>
          <SearchInput 
            type="text" 
            placeholder="Search by name or email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        
        <SortContainer>
          <SortLabel>Sort by name:</SortLabel>
          <SortButton 
            active={sortOrder === 'asc'} 
            onClick={toggleSortOrder}
          >
            {sortOrder === 'asc' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                A-Z
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Z-A
              </>
            )}
          </SortButton>
          
          <TimezoneContainer>
            <TimezoneLabel>Timezone:</TimezoneLabel>
            <TimezoneSelect 
              value={selectedTimezone}
              onChange={handleTimezoneChange}
            >
              <option value="PHT">PHT (UTC+8)</option>
              <option value="CST">CST (UTC-6)</option>
              <option value="EST">EST (UTC-5)</option>
            </TimezoneSelect>
          </TimezoneContainer>
        </SortContainer>
      </ControlsContainer>
      
      {/* Monthly Calendar View */}
      <CalendarContainer>
        <CalendarHeader>
          <MonthNavigation>
            <NavButton onClick={goToPreviousMonth}>
              <Icon><CaretLeft size={16} /></Icon>
            </NavButton>
            <MonthTitle>
              <Icon><Calendar size={18} /></Icon>
              {format(currentDate, 'MMMM yyyy')}
            </MonthTitle>
            <NavButton onClick={goToNextMonth}>
              <Icon><CaretRight size={16} /></Icon>
            </NavButton>
          </MonthNavigation>
        </CalendarHeader>
        
        <CalendarGrid>
          {days.map(day => (
            <WeekdayHeader key={day}>{day.substring(0, 3)}</WeekdayHeader>
          ))}
          
          {/* Empty cells for days before the first day of the month */}
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <CalendarDay key={`empty-${index}`} isCurrentMonth={false} />
          ))}
          
          {/* Calendar days */}
          {daysInMonth.map(day => {
            const schedules = getAllSchedulesForDay(day);
            
            return (
              <CalendarDay 
                key={day.toString()} 
                isCurrentMonth={true}
                onClick={() => handleCalendarDayClick(day, schedules)}
              >
                <DayNumber isToday={isSameDay(day, today)}>
                  {getDate(day)}
                </DayNumber>
                
                {schedules.length > 0 && (
                  <ScheduleCount>
                    {schedules.length} {schedules.length === 1 ? 'person' : 'people'} scheduled
                  </ScheduleCount>
                )}
              </CalendarDay>
            );
          })}
        </CalendarGrid>
      </CalendarContainer>
      
      {/* Day Schedules Modal */}
      {isDayModalOpen && selectedDay && (
        <DayScheduleModal onClick={handleCloseDayModal}>
          <DayScheduleContent onClick={e => e.stopPropagation()}>
            <DayScheduleHeader>
              <DayScheduleTitle>
                <Icon><Calendar size={18} /></Icon>
                {format(selectedDay.date, 'EEEE, MMMM d, yyyy')}
              </DayScheduleTitle>
              <CloseButton onClick={handleCloseDayModal}>&times;</CloseButton>
            </DayScheduleHeader>
            
            {selectedDay.schedules.length === 0 ? (
              <NoSchedulesMessage>No schedules for this day</NoSchedulesMessage>
            ) : (
              <ScheduleItemsList>
                {selectedDay.schedules.map((schedule, index) => (
                  <ScheduleItem 
                    key={`${schedule.userId}-${schedule.id}-${index}`}
                  >
                    <UserName>{schedule.userName}</UserName>
                    <ShiftTime>
                      {formatTime(schedule.startTime)} - {formatTime(schedule.endTime)}
                    </ShiftTime>
                    
                    <ActionButtons>
                      <ActionButton 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditSchedule(schedule);
                          handleCloseDayModal();
                        }}
                      >
                        <PencilSimple size={14} />
                      </ActionButton>
                      <ActionButton 
                        delete 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteSchedule(schedule);
                          handleCloseDayModal();
                        }}
                      >
                        <Trash size={14} />
                      </ActionButton>
                    </ActionButtons>
                  </ScheduleItem>
                ))}
              </ScheduleItemsList>
            )}
          </DayScheduleContent>
        </DayScheduleModal>
      )}
      
      {/* Schedule Edit/Delete Modal */}
      {isModalOpen && selectedSchedule && (
        <ScheduleModal onClick={handleCloseModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                {modalMode === 'edit' ? 'Edit Schedule' : 'Delete Schedule'}
              </ModalTitle>
              <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            </ModalHeader>
            
            {modalMode === 'edit' ? (
              <ModalForm onSubmit={handleSaveSchedule}>
                <FormGroup>
                  <Label>User</Label>
                  <Input 
                    type="text" 
                    value={selectedSchedule.userName} 
                    disabled 
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Day</Label>
                  <Input 
                    type="text" 
                    value={selectedSchedule.startDay} 
                    disabled 
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Start Time</Label>
                  <Input 
                    type="time" 
                    name="startTime" 
                    defaultValue={selectedSchedule.startTime} 
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>End Time</Label>
                  <Input 
                    type="time" 
                    name="endTime" 
                    defaultValue={selectedSchedule.endTime} 
                    required 
                  />
                </FormGroup>
                
                <ButtonGroup>
                  <CancelButton type="button" onClick={handleCloseModal}>
                    Cancel
                  </CancelButton>
                  <SubmitButton type="submit">
                    Save Changes
                  </SubmitButton>
                </ButtonGroup>
              </ModalForm>
            ) : (
              <>
                <p>Are you sure you want to delete this schedule for {selectedSchedule.userName}?</p>
                <p>Day: {selectedSchedule.startDay}</p>
                <p>Time: {formatTime(selectedSchedule.startTime)} - {formatTime(selectedSchedule.endTime)}</p>
                
                <ButtonGroup>
                  <CancelButton onClick={handleCloseModal}>
                    Cancel
                  </CancelButton>
                  <DeleteButton onClick={handleConfirmDelete}>
                    Delete Schedule
                  </DeleteButton>
                </ButtonGroup>
              </>
            )}
          </ModalContent>
        </ScheduleModal>
      )}
      
      {tooltipInfo.visible && tooltipInfo.shift && (
        <ShiftTooltip 
          visible={tooltipInfo.visible} 
          top={tooltipInfo.top} 
          left={tooltipInfo.left}
          onClick={(e) => e.stopPropagation()}
        >
          <TooltipHeader>
            {formatDayName(tooltipInfo.shift.startDay)}
            {tooltipInfo.shift.startDay !== tooltipInfo.shift.endDay && 
              ` - ${formatDayName(tooltipInfo.shift.endDay)}`}
          </TooltipHeader>
          <TooltipRow>
            <TooltipLabel>Start Time (PHT):</TooltipLabel>
            <TooltipValue>{tooltipInfo.shift.startTime}</TooltipValue>
          </TooltipRow>
          <TooltipRow>
            <TooltipLabel>End Time (PHT):</TooltipLabel>
            <TooltipValue>{tooltipInfo.shift.endTime}</TooltipValue>
          </TooltipRow>
          <TooltipRow>
            <TooltipLabel>Start Time ({selectedTimezone}):</TooltipLabel>
            <TooltipValue>{formatTimeWithDayInfo(tooltipInfo.shift.startTime)}</TooltipValue>
          </TooltipRow>
          <TooltipRow>
            <TooltipLabel>End Time ({selectedTimezone}):</TooltipLabel>
            <TooltipValue>{formatTimeWithDayInfo(tooltipInfo.shift.endTime)}</TooltipValue>
          </TooltipRow>
          <TooltipRow>
            <TooltipLabel>Duration:</TooltipLabel>
            <TooltipValue>{calculateShiftDuration(tooltipInfo.shift)} hours</TooltipValue>
          </TooltipRow>
        </ShiftTooltip>
      )}
    </Container>
  );
}

export default AllSchedules;
