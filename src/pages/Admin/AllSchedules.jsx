import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

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

const ScheduleTable = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  background-color: #f3f4f6;
  border-bottom: 2px solid #e5e7eb;
`;

const UserColumn = styled.div`
  padding: 1.25rem;
  font-weight: 700;
  border-right: 1px solid #e5e7eb;
  color: #111827;
  font-size: 1rem;
`;

const DaysHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: 700;
`;

const DayCell = styled.div`
  padding: 1.25rem 0.5rem;
  border-right: 1px solid #e5e7eb;
  color: #111827;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s;
  
  &:last-child {
    border-right: none;
  }
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  &.active {
    background-color: #dbeafe;
    color: #1e40af;
    font-weight: 700;
  }
  
  &.active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #3b82f6;
  }
`;

const FilterBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;
  padding: 0.5rem 0.75rem;
  background-color: #dbeafe;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e40af;
`;

const ClearFilterButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  background-color: #bfdbfe;
  color: #1e40af;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #93c5fd;
  }
`;

const ShiftBlock = styled.div`
  position: absolute;
  height: 44px;
  top: 38px;
  background-color: ${props => props.isCurrentShift ? '#dbeafe' : '#f3f4f6'};
  border-left: 4px solid ${props => props.isCurrentShift ? '#3b82f6' : '#9ca3af'};
  border-radius: 6px;
  padding: 0.375rem 0.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 70px;
  color: #111827;
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.7);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.isCurrentShift ? '#bfdbfe' : '#e5e7eb'};
  }
`;

const ShiftTime = styled.span`
  font-weight: 700;
  color: ${props => props.isCurrentShift ? '#1e3a8a' : '#111827'};
  letter-spacing: 0.01em;
`;

const NoScheduleMessage = styled.p`
  color: #4b5563;
  font-style: italic;
  padding: 1.5rem;
  text-align: center;
  background-color: #f9fafb;
  border-radius: 6px;
  font-size: 1.1rem;
  margin: 1rem 0;
  border: 1px dashed #d1d5db;
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

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  border-bottom: 1px solid #e5e7eb;
  min-height: 120px;
  &:last-child {
    border-bottom: none;
  }
  &:nth-child(even) {
    background-color: #f9fafb;
  }
  &:hover {
    background-color: #f3f4f6;
  }
`;

const UserInfo = styled.div`
  padding: 1.25rem;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.div`
  font-weight: 600;
  color: #111827;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.div`
  font-size: 0.95rem;
  color: #4b5563;
`;

const TimelineContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  position: relative;
  height: 100%;
`;

const DayColumn = styled.div`
  position: relative;
  border-right: 1px solid #e5e7eb;
  min-height: 120px;
  height: 100%;
  &:last-child {
    border-right: none;
  }
  &:nth-child(odd) {
    background-color: rgba(249, 250, 251, 0.5);
  }
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
      // Same day shift
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

  if (loading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return <Container>{error}</Container>;
  }

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
      
      {filteredUsers.length === 0 ? (
        <NoScheduleMessage>No users found matching your search criteria.</NoScheduleMessage>
      ) : (
        <ScheduleTable>
          <TableHeader>
            <UserColumn>User</UserColumn>
            <DaysHeader>
              {days.map((day, index) => (
                <DayCell 
                  key={day} 
                  className={selectedDays.includes(index) ? 'active' : ''}
                  onClick={() => handleDayClick(index)}
                >
                  {day}
                </DayCell>
              ))}
            </DaysHeader>
          </TableHeader>
          
          {sortedUsers.map(user => (
            <TableRow key={user.id}>
              <UserInfo>
                <UserName>{user.name || 'Unknown User'}</UserName>
                <UserEmail>{user.email}</UserEmail>
              </UserInfo>
              
              <TimelineContainer>
                {days.map((day, index) => (
                  <DayColumn key={day}>
                    {user.schedule && Object.values(user.schedule)
                      .filter(shift => {
                        if (!shift || !shift.startDay || !shift.startTime) return false;
                        
                        // Get the original day index
                        const originalDayIndex = getDayIndex(shift.startDay);
                        
                        // Get the day change from timezone conversion
                        const convertedTime = convertTime(shift.startTime);
                        const dayChange = convertedTime.dayChange;
                        
                        // Calculate the effective day after timezone conversion
                        const effectiveDayIndex = (originalDayIndex + dayChange + 7) % 7;
                        
                        // Check if this shift should be displayed on this day
                        return effectiveDayIndex === index;
                      })
                      .map((shift, shiftIndex) => {
                        const { left, width } = calculateShiftPosition(shift);
                        return (
                          <ShiftBlock 
                            key={shiftIndex}
                            style={{ 
                              left, 
                              width,
                              // Ensure minimum width for visibility
                              minWidth: '70px'
                            }}
                            isCurrentShift={isCurrentShift(shift)}
                            onClick={(e) => handleShiftClick(e, shift)}
                          >
                            <ShiftTime isCurrentShift={isCurrentShift(shift)}>
                              {formatTimeWithDayInfo(shift.startTime)}
                            </ShiftTime>
                          </ShiftBlock>
                        );
                      })
                    }
                  </DayColumn>
                ))}
              </TimelineContainer>
            </TableRow>
          ))}
        </ScheduleTable>
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
