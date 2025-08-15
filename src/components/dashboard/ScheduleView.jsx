import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Card, CardTitle, CardContent } from './DashboardComponents';
import styled from 'styled-components';
import { format, addHours, parse, isToday as isDateToday } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc, format as formatTZ } from 'date-fns-tz';
import { useTimeFormat } from '../../contexts/TimeFormatContext';
import { Clock, Calendar, ArrowRight, CalendarPlus, X, Users, ChartLine, Table } from 'phosphor-react';
import ScheduleChangeRequestForm from './ScheduleChangeRequestForm';
import UserScheduleRequests from './UserScheduleRequests';



const ScheduleView = ({ user, userData }) => {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showRequestPopup, setShowRequestPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [departmentUsers, setDepartmentUsers] = useState([]);
  const [departmentUsersLoading, setDepartmentUsersLoading] = useState(false);
  const [departmentUsersError, setDepartmentUsersError] = useState(null);
  const [availableDepartments, setAvailableDepartments] = useState([]); // {id, name}
  const [selectedDepartmentIds, setSelectedDepartmentIds] = useState([]);
  const { use24HourFormat } = useTimeFormat();
  const userTimeRegion = userData?.timeRegion || Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Manila';
  const [deptDisplayTimeZone, setDeptDisplayTimeZone] = useState(userTimeRegion);
  const [showVisualSchedule, setShowVisualSchedule] = useState(true);
  const supportedTimeZones = React.useMemo(() => {
    // PH and USA time zones. Show codes as labels; full meaning on hover
    const curated = [
      { value: 'Asia/Manila', code: 'PHT', title: 'Philippine Time' },
      { value: 'America/Los_Angeles', code: 'PST', title: 'Pacific Time (US & Canada)' },
      { value: 'America/Denver', code: 'MST', title: 'Mountain Time (US & Canada)' },
      { value: 'America/Phoenix', code: 'MST - no DST', title: 'Mountain Time (no DST, Arizona)' },
      { value: 'America/Chicago', code: 'CST', title: 'Central Time (US & Canada)' },
      { value: 'America/New_York', code: 'EST', title: 'Eastern Time (US & Canada)' },
      { value: 'America/Anchorage', code: 'AKST', title: 'Alaska Time' },
      { value: 'Pacific/Honolulu', code: 'HST', title: 'Hawaii–Aleutian Time (no DST)' },
    ];
    let list = curated;
    if (typeof Intl !== 'undefined' && typeof Intl.supportedValuesOf === 'function') {
      try {
        const supported = new Set(Intl.supportedValuesOf('timeZone'));
        list = curated.filter(tz => supported.has(tz.value));
      } catch (e) {
        console.error('Error getting supported timezones:', e);
      }
    }
    if (userTimeRegion && !list.some(tz => tz.value === userTimeRegion)) {
      list = [
        { value: userTimeRegion, code: 'Local', title: `${userTimeRegion} (Your timezone)` },
        ...list,
      ];
    }
    return list;
  }, [userTimeRegion]);

  // Handlers for department filter toggles
  const handleToggleDepartment = (id) => {
    setSelectedDepartmentIds((prev) => {
      if (!Array.isArray(prev)) return [id];
      return prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
    });
  };
  const handleSelectAllDepartments = () => {
    setSelectedDepartmentIds(availableDepartments.map(d => d.id));
  };
  const handleClearAllDepartments = () => {
    setSelectedDepartmentIds([]);
  };

  // Load departments this user can filter by (their affiliations)
  useEffect(() => {
    const loadUserDepartments = async () => {
      const ids = Array.isArray(userData?.departments)
        ? userData.departments.filter(Boolean)
        : (userData?.departmentId ? [userData.departmentId] : []);
      if (ids.length === 0) {
        setAvailableDepartments([]);
        setSelectedDepartmentIds([]);
        return;
      }
      try {
        // Fetch each department doc to get names
        const results = [];
        for (const id of ids) {
          try {
            const depDoc = await getDoc(doc(db, 'departments', id));
            if (depDoc.exists()) {
              const data = depDoc.data();
              results.push({ id, name: data.name || data.departmentName || 'Unnamed Department' });
            } else {
              results.push({ id, name: id });
            }
          } catch (e) {
            console.warn('Failed to fetch department', id, e);
            results.push({ id, name: id });
          }
        }
        setAvailableDepartments(results);
        setSelectedDepartmentIds(ids);
      } catch (e) {
        console.warn('Error loading user departments', e);
        setAvailableDepartments(ids.map(id => ({ id, name: id })));
        setSelectedDepartmentIds(ids);
      }
    };
    loadUserDepartments();
  }, [user?.uid, userData?.departmentId, JSON.stringify(userData?.departments)]);

  // Fetch schedules of users in the same department
  useEffect(() => {
    const fetchDepartmentUsers = async () => {
      console.log('Attempting to fetch department users with selection:', {
        userUid: user?.uid,
        selectedDepartmentIds,
      });
      
      if (!user?.uid) {
        setDepartmentUsers([]);
        return;
      }
      if (!Array.isArray(selectedDepartmentIds) || selectedDepartmentIds.length === 0) {
        // Nothing selected
        setDepartmentUsers([]);
        return;
      }

      try {
        setDepartmentUsersLoading(true);
        setDepartmentUsersError(null);
        
        // Query users with the same department (support both schemas)
        const usersRef = collection(db, 'users');
        // Use 'in' and 'array-contains-any' for multi-select (limit 10 ids)
        const idsForQuery = selectedDepartmentIds.slice(0, 10);
        const qByDeptId = query(usersRef, where('departmentId', 'in', idsForQuery));
        const qByDeptArray = query(usersRef, where('departments', 'array-contains-any', idsForQuery));
        console.log('Firestore queries created:', { selectedDepartmentIds: idsForQuery });
        const [snapById, snapByArray] = await Promise.all([
          getDocs(qByDeptId),
          getDocs(qByDeptArray)
        ]);
        // Merge unique docs by id
        const docMap = new Map();
        for (const d of snapById.docs) docMap.set(d.id, d);
        for (const d of snapByArray.docs) docMap.set(d.id, d);
        const mergedDocs = Array.from(docMap.values());
        console.log('Department users query result (merged):', { byIdCount: snapById.size, byArrayCount: snapByArray.size, mergedCount: mergedDocs.length });
        
        // Helper: convert legacy schedule object with shifts to array format
        const legacyToArray = (legacy) => {
          if (!legacy) return [];
          const shifts = Array.isArray(legacy.shifts) ? legacy.shifts : [];
          const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const toHours = (t) => {
            const [h, m] = (t || '00:00').split(':').map(Number);
            return h + (m || 0) / 60;
          };
          return shifts.map(s => {
            const start = toHours(s.timeIn);
            const end = toHours(s.timeOut);
            let dur = end - start;
            if (isNaN(dur)) dur = 8;
            if (dur < 0) dur += 24; // overnight
            const duration = Math.round(dur); // use whole hours for addHours()
            return {
              dayOfWeek: dayNames[s.day] || 'Monday',
              timeIn: s.timeIn || '09:00',
              shiftDuration: duration,
              timeRegion: legacy.timeRegion || 'Asia/Manila'
            };
          });
        };

        // Map users with their schedules
        const departmentMembersData = [];
        
        // Process each user (include current user as well)
        for (const docSnapshot of mergedDocs) {
          const memberData = docSnapshot.data();
          
          // Add user with their schedule (include current user)
          const displayName = (memberData.name && memberData.name.trim())
            || (memberData.displayName && memberData.displayName.trim())
            || (`${memberData.firstName || ''} ${memberData.lastName || ''}`.trim())
            || 'Unknown User';

          let memberSchedule = [];
          if (Array.isArray(memberData.schedule) && memberData.schedule.length > 0) {
            memberSchedule = memberData.schedule;
          } else if (memberData.scheduleId) {
            try {
              const scheduleDocRef = doc(db, 'schedules', memberData.scheduleId);
              const scheduleDoc = await getDoc(scheduleDocRef);
              if (scheduleDoc.exists()) {
                const schedData = scheduleDoc.data();
                // If already array, use it; if legacy object, convert
                if (Array.isArray(schedData)) {
                  memberSchedule = schedData;
                } else if (schedData && Array.isArray(schedData.shifts)) {
                  memberSchedule = legacyToArray(schedData);
                }
              }
            } catch (e) {
              console.warn('Failed to fetch schedule by scheduleId for user', docSnapshot.id, e);
            }
          }

          // For current user, fallback to their personal schedule if still empty
          if (memberSchedule.length === 0 && docSnapshot.id === user.uid) {
            if (Array.isArray(userData?.schedule) && userData.schedule.length > 0) {
              memberSchedule = userData.schedule;
            } else if (Array.isArray(schedule)) {
              memberSchedule = schedule;
            }
          }

          departmentMembersData.push({
            id: docSnapshot.id,
            name: displayName,
            email: memberData.email || 'No email',
            position: memberData.position || 'Staff',
            schedule: memberSchedule,
            timeRegion: memberData.timeRegion || 'Asia/Manila'
          });
        }
        
        // Ensure current user is included even if not returned by queries
        const hasCurrentUser = departmentMembersData.some(u => u.id === user.uid);
        if (!hasCurrentUser) {
          console.log('Current user not returned by department queries; injecting self with fallback schedule');
          departmentMembersData.push({
            id: user.uid,
            name: userData?.name || userData?.displayName || 'You',
            email: userData?.email || user?.email || 'No email',
            position: userData?.position || 'Staff',
            schedule: (Array.isArray(userData?.schedule) && userData.schedule.length > 0)
              ? userData.schedule
              : (Array.isArray(schedule) ? schedule : []),
            timeRegion: userData?.timeRegion || 'Asia/Manila'
          });
        }

        // Optional: place current user on top
        departmentMembersData.sort((a, b) => (a.id === user.uid ? -1 : b.id === user.uid ? 1 : 0));

        setDepartmentUsers(departmentMembersData);
        console.log('Department members data set:', departmentMembersData);
      } catch (error) {
        console.error('Error fetching department users:', error);
        setDepartmentUsersError('Failed to load department schedules. Please try again later.');
      } finally {
        setDepartmentUsersLoading(false);
      }
    };
    
    console.log('Tab effect triggered with activeTab:', activeTab);
    if (activeTab === 'department') {
      console.log('Fetching department users...');
      fetchDepartmentUsers();
    }
  }, [user, userData, activeTab, schedule, JSON.stringify(selectedDepartmentIds)]);

  useEffect(() => {
    const fetchUserSchedule = async () => {
      if (!user?.uid) return;
      
      try {
        setLoading(true);
        
        // First check if userData already has the schedule
        if (userData && userData.schedule && Array.isArray(userData.schedule) && userData.schedule.length > 0) {
          console.log('Using schedule from userData prop:', userData.schedule);
          setSchedule(userData.schedule);
        } else {
          // Get the user document which now contains the schedule directly
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            const userDocData = userDoc.data();
            
            // Check if the user has a schedule array in their document
            if (userDocData.schedule && Array.isArray(userDocData.schedule) && userDocData.schedule.length > 0) {
              console.log('Found user schedule in Firestore:', userDocData.schedule);
              setSchedule(userDocData.schedule);
            } else if (userDocData.scheduleId) {
              // Legacy support: If user still has a scheduleId, fetch that schedule
              const scheduleId = userDocData.scheduleId;
              const scheduleDocRef = doc(db, 'schedules', scheduleId);
              const scheduleDoc = await getDoc(scheduleDocRef);
              
              if (scheduleDoc.exists()) {
                setSchedule(scheduleDoc.data());
              }
            } else {
              // If no specific schedule, check for default schedules
              const schedulesRef = collection(db, 'schedules');
              const q = query(schedulesRef, where('isDefault', '==', true));
              const querySnapshot = await getDocs(q);
              
              if (!querySnapshot.empty) {
                // Use the first default schedule
                setSchedule(querySnapshot.docs[0].data());
              }
            }
          }
        }
      } catch (error) {
        console.error('Error fetching schedule:', error);
        setError('Failed to load schedule. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserSchedule();
  }, [user, userData]);

  const getDayName = (dayIndex) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  };
  
  // Function to get day index for sorting (Sunday = 0, Monday = 1, etc.)
  const getDayIndex = (dayName) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days.indexOf(dayName);
  };
  
  const formatTime = (timeString, sourceTimeRegion = null, targetTimeRegion = userTimeRegion) => {
    if (!timeString) return 'N/A';
    
    try {
      // If no source time region is provided, just format the time string
      if (!sourceTimeRegion || sourceTimeRegion === targetTimeRegion) {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(parseInt(hours, 10));
        date.setMinutes(parseInt(minutes, 10));
        
        return date.toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit', 
          hour12: !use24HourFormat 
        });
      }
      
      // Convert time from source time region to target time region
      const [hours, minutes] = timeString.split(':');
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset to start of day
      
      // Create a date object in the source time zone
      const sourceDate = new Date(today);
      sourceDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);
      
      // Convert to UTC then to target time zone
      const sourceZonedDate = zonedTimeToUtc(sourceDate, sourceTimeRegion);
      const targetZonedDate = utcToZonedTime(sourceZonedDate, targetTimeRegion);
      
      // Format based on user's time format preference
      const formatString = use24HourFormat ? 'HH:mm' : 'h:mm a';
      return formatTZ(targetZonedDate, formatString, { timeZone: targetTimeRegion });
    } catch (error) {
      console.error('Error formatting time:', error);
      return timeString;
    }
  };
  
  const calculateEndTime = (startTime, duration, timeRegion) => {
    try {
      // Parse the start time
      const [hours, minutes] = startTime.split(':').map(Number);
      
      // Create a date object for today with the start time
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset to start of day
      
      const startDate = new Date(today);
      startDate.setHours(hours, minutes, 0, 0);
      
      // Add the duration to get the end time
      const endDate = addHours(startDate, duration);
      
      // Format the end time
      return format(endDate, 'HH:mm');
    } catch (error) {
      console.error('Error calculating end time:', error);
      let endHour = (parseInt(startTime.split(':')[0], 10) + duration) % 24;
      let endMinute = startTime.split(':')[1];
      return `${endHour.toString().padStart(2, '0')}:${endMinute}`;
    }
  };
  
  const getCurrentDayIndex = () => {
    return new Date().getDay();
  };

  // Helper to convert schedule item to target timezone and get the resulting day
  const convertScheduleToTimezone = (scheduleItem, sourceTimeRegion, targetTimeRegion) => {
    try {
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayIndex = dayNames.indexOf(scheduleItem.dayOfWeek);
      if (dayIndex === -1) return { ...scheduleItem, convertedDayOfWeek: scheduleItem.dayOfWeek };
      
      // Create a date representing the schedule time in the source timezone
      const [hours, minutes] = scheduleItem.timeIn.split(':').map(Number);
      
      // Use current week to get a real date for the day
      const today = new Date();
      const currentDayIndex = today.getDay();
      const daysUntilTargetDay = (dayIndex - currentDayIndex + 7) % 7;
      
      const scheduleDate = new Date(today);
      scheduleDate.setDate(today.getDate() + daysUntilTargetDay);
      scheduleDate.setHours(hours, minutes, 0, 0);
      
      // Convert from source timezone to target timezone
      const sourceZonedDate = zonedTimeToUtc(scheduleDate, sourceTimeRegion);
      const targetZonedDate = utcToZonedTime(sourceZonedDate, targetTimeRegion);
      
      // Get the day of the week in the target timezone
      const convertedDayIndex = targetZonedDate.getDay();
      const convertedDayOfWeek = dayNames[convertedDayIndex];
      
      return {
        ...scheduleItem,
        convertedDayOfWeek,
        convertedTimeIn: formatTZ(targetZonedDate, 'HH:mm', { timeZone: targetTimeRegion })
      };
    } catch (error) {
      console.error('Error converting schedule to timezone:', error);
      return { ...scheduleItem, convertedDayOfWeek: scheduleItem.dayOfWeek };
    }
  };

  // Helper to calculate position percentage based on time (0% = 12:00 AM, 100% = 11:59:59 PM)
  const getTimePosition = (timeString) => {
    try {
      // Handle both 24-hour and 12-hour formats
      let hours, minutes;
      if (timeString.includes('AM') || timeString.includes('PM')) {
        const time = parse(timeString, 'h:mm a', new Date());
        hours = time.getHours();
        minutes = time.getMinutes();
      } else {
        [hours, minutes] = timeString.split(':').map(Number);
      }
      const totalMinutes = hours * 60 + minutes;
      const maxMinutes = 24 * 60; // Total minutes in a day
      return (totalMinutes / maxMinutes) * 100;
    } catch (error) {
      console.error('Error calculating time position:', error);
      return 0;
    }
  };

  return (
    <>
      <Card>
        <CardTitle style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Calendar size={20} style={{ marginRight: '8px' }} />
            Schedule View
          </div>
          <RequestButton onClick={() => setShowRequestPopup(true)}>
            <CalendarPlus size={16} />
            Update Schedule
          </RequestButton>
        </CardTitle>
        <CardContent>
          <TabContainer>
            <TabButton 
              active={activeTab === 'personal'} 
              onClick={() => {
                console.log('Switching to personal tab');
                setActiveTab('personal');
              }}
            >
              <Calendar size={18} />
              My Schedule
            </TabButton>
            <TabButton 
              active={activeTab === 'department'} 
              onClick={() => {
                console.log('Switching to department tab');
                setActiveTab('department');
              }}
            >
              <Users size={18} />
              Department Schedule
            </TabButton>
          </TabContainer>
          {activeTab === 'personal' && (
            <div>
              {loading ? (
                <p>Loading your schedule...</p>
              ) : error ? (
                <EmptyState>
                  <div style={{ marginBottom: '1rem' }}>
                    <Calendar size={48} weight="duotone" style={{ color: '#999', marginBottom: '1rem' }} />
                  </div>
                  <h3 style={{ margin: '0 0 0.5rem 0', color: '#555' }}>No Schedule Found</h3>
                  <p style={{ margin: '0 0 1rem 0' }}>You don't have any assigned schedule yet.</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#777' }}>Please contact your administrator to set up your work schedule.</p>
                </EmptyState>
              ) : schedule ? (
                <>
                  {Array.isArray(schedule) ? (
                    // New format: schedule is an array of schedule objects
                    <>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                        {[...schedule]
                          .sort((a, b) => getDayIndex(a.dayOfWeek) - getDayIndex(b.dayOfWeek))
                          .map((scheduleItem, index) => {
                          const today = new Date();
                          const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                          const dayIndex = dayNames.indexOf(scheduleItem.dayOfWeek);
                          const isToday = today.getDay() === dayIndex;
                          
                          // Get the schedule's time region
                          const scheduleTimeRegion = scheduleItem.timeRegion || 'Asia/Manila';
                          
                          // Format the time in the user's preferred time region
                          const formattedTimeIn = formatTime(scheduleItem.timeIn, scheduleTimeRegion, userTimeRegion);
                          const duration = scheduleItem.shiftDuration || 8;
                          
                          // Calculate end time based on start time and duration
                          const endTime = calculateEndTime(scheduleItem.timeIn, duration, scheduleTimeRegion);
                          const formattedEndTime = formatTime(endTime, scheduleTimeRegion, userTimeRegion);
                          
                          return (
                            <DayCard key={index} isToday={isToday}>
                              <h3>
                                <Calendar weight="fill" size={20} style={{ color: isToday ? '#1a73e8' : '#666' }} />
                                {scheduleItem.dayOfWeek}
                              </h3>
                            
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                              <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                                <Clock size={18} weight="fill" style={{ marginRight: '0.5rem', color: '#4CAF50' }} />
                                <div>
                                  <div style={{ fontWeight: '600' }}>{formattedTimeIn}</div>
                                  <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '2px' }}>Time In</div>
                                </div>
                              </div>
                              
                              <ArrowRight size={16} style={{ color: '#999', margin: '0 0.5rem' }} />
                              
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Clock size={18} weight="fill" style={{ marginRight: '0.5rem', color: '#F44336' }} />
                                <div>
                                  <div style={{ fontWeight: '600' }}>{formattedEndTime}</div>
                                  <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '2px' }}>Time Out</div>
                                </div>
                              </div>
                            </div>
                            
                            <div style={{ 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              padding: '0.75rem', 
                              backgroundColor: '#f9f9f9', 
                              borderRadius: '8px',
                              fontSize: '0.9rem'
                            }}>
                              <div>
                                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Duration</div>
                                <div>{scheduleItem.shiftDuration} hours</div>
                              </div>
                              
                              <div style={{ textAlign: 'right' }}>
                                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Time Zone</div>
                                <div style={{ fontSize: '0.85rem' }}>{userTimeRegion}</div>
                              </div>
                            </div>
                          </DayCard>
                        );
                      })}
                    </div>
                    
                    <div style={{ marginTop: '2rem' }}>
                      <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#555' }}>Schedule Overview</h3>
                      <ScheduleTable>
                        <thead>
                          <tr>
                            <th>Day</th>
                            <th>Time In</th>
                            <th>Time Out</th>
                            <th>Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[...schedule]
                            .sort((a, b) => getDayIndex(a.dayOfWeek) - getDayIndex(b.dayOfWeek))
                            .map((scheduleItem, index) => {
                            const today = new Date();
                            const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                            const dayIndex = dayNames.indexOf(scheduleItem.dayOfWeek);
                            const isToday = today.getDay() === dayIndex;
                            
                            // Get the schedule's time region
                            const scheduleTimeRegion = scheduleItem.timeRegion || 'Asia/Manila';
                            
                            // Format the time in the user's preferred time region
                            const formattedTimeIn = formatTime(scheduleItem.timeIn, scheduleTimeRegion, userTimeRegion);
                            const duration = scheduleItem.shiftDuration || 8;
                            
                            // Calculate end time based on start time and duration
                            const endTime = calculateEndTime(scheduleItem.timeIn, duration, scheduleTimeRegion);
                            const formattedEndTime = formatTime(endTime, scheduleTimeRegion, userTimeRegion);
                            
                            return (
                              <tr key={index} style={{ backgroundColor: isToday ? '#f0f7ff' : 'transparent' }}>
                                <td style={{ fontWeight: isToday ? '600' : '400', color: isToday ? '#1a73e8' : 'inherit' }}>
                                  {scheduleItem.dayOfWeek}
                                  {isToday && <span style={{ marginLeft: '0.5rem', fontSize: '0.7rem', backgroundColor: '#1a73e8', color: 'white', padding: '2px 6px', borderRadius: '10px' }}>TODAY</span>}
                                </td>
                                <td>{formattedTimeIn}</td>
                                <td>{formattedEndTime}</td>
                                <td>{scheduleItem.shiftDuration} hours</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </ScheduleTable>
                      
                      <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#666', textAlign: 'right' }}>
                        All times shown in your local time zone: <strong>{userTimeRegion}</strong>
                      </div>
                    </div>
                  </>
                ) : (
                  // Legacy format: schedule is an object with shifts property
                  <>
                    <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid #4CAF50' }}>
                      <h3 style={{ margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar weight="fill" size={20} style={{ color: '#4CAF50' }} />
                        {schedule.name || 'Standard Schedule'}
                      </h3>
                      <p style={{ margin: 0, color: '#666' }}>Your assigned work schedule</p>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                      {schedule.shifts && [...schedule.shifts]
                        .sort((a, b) => a.day - b.day)
                        .map((shift, index) => {
                        const today = new Date();
                        const isToday = today.getDay() === shift.day;
                        
                        return (
                          <DayCard key={index} isToday={isToday}>
                            <h3>
                              <Calendar weight="fill" size={20} style={{ color: isToday ? '#1a73e8' : '#666' }} />
                              {getDayName(shift.day)}
                            </h3>
                            
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                              <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                                <Clock size={18} weight="fill" style={{ marginRight: '0.5rem', color: '#4CAF50' }} />
                                <div>
                                  <div style={{ fontWeight: '600' }}>{formatTime(shift.timeIn)}</div>
                                  <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '2px' }}>Time In</div>
                                </div>
                              </div>
                              
                              <ArrowRight size={16} style={{ color: '#999', margin: '0 0.5rem' }} />
                              
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Clock size={18} weight="fill" style={{ marginRight: '0.5rem', color: '#F44336' }} />
                                <div>
                                  <div style={{ fontWeight: '600' }}>{formatTime(shift.timeOut)}</div>
                                  <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '2px' }}>Time Out</div>
                                </div>
                              </div>
                            </div>
                          </DayCard>
                        );
                      })}
                    </div>
                    
                    <div style={{ marginTop: '2rem' }}>
                      <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#555' }}>Schedule Overview</h3>
                      <ScheduleTable>
                        <thead>
                          <tr>
                            <th>Day</th>
                            <th>Time In</th>
                            <th>Time Out</th>
                            <th>Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {schedule.shifts && [...schedule.shifts]
                            .sort((a, b) => a.day - b.day)
                            .map((shift, index) => {
                            const today = new Date();
                            const isToday = today.getDay() === shift.day;
                            
                            // Calculate duration in hours
                            const timeInParts = shift.timeIn.split(':').map(Number);
                            const timeOutParts = shift.timeOut.split(':').map(Number);
                            const timeInHours = timeInParts[0] + timeInParts[1]/60;
                            const timeOutHours = timeOutParts[0] + timeOutParts[1]/60;
                            let duration = timeOutHours - timeInHours;
                            if (duration < 0) duration += 24; // Handle overnight shifts
                            const durationFormatted = Math.round(duration * 10) / 10; // Round to 1 decimal place
                            
                            return (
                              <tr key={index} style={{ backgroundColor: isToday ? '#f0f7ff' : 'transparent' }}>
                                <td style={{ fontWeight: isToday ? '600' : '400', color: isToday ? '#1a73e8' : 'inherit' }}>
                                  {getDayName(shift.day)}
                                  {isToday && <span style={{ marginLeft: '0.5rem', fontSize: '0.7rem', backgroundColor: '#1a73e8', color: 'white', padding: '2px 6px', borderRadius: '10px' }}>TODAY</span>}
                                </td>
                                <td>{formatTime(shift.timeIn)}</td>
                                <td>{formatTime(shift.timeOut)}</td>
                                <td>{durationFormatted} hours</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </ScheduleTable>
                    </div>
                  </>
                )}
              </>
              ) : (
                <EmptyState>
                  <div style={{ marginBottom: '1rem' }}>
                    <Calendar size={48} weight="duotone" style={{ color: '#999', marginBottom: '1rem' }} />
                  </div>
                  <h3 style={{ margin: '0 0 0.5rem 0', color: '#555' }}>No Schedule Found</h3>
                  <p style={{ margin: '0 0 1rem 0' }}>You don't have any assigned schedule yet.</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#777' }}>Please contact your administrator to set up your work schedule.</p>
                </EmptyState>
              )}
            </div>
          )}
          {activeTab === 'department' && (
          <div>
            <FiltersBar>
              <div className="left">
                <div className="left-header">
                  <div className="label">
                    <Users size={18} /> Departments
                    <span className="count">{selectedDepartmentIds.length}/{availableDepartments.length}</span>
                  </div>
                  <div className="actions">
                    <button type="button" className="link" onClick={handleSelectAllDepartments}>Select all</button>
                    <span className="sep">•</span>
                    <button type="button" className="link" onClick={handleClearAllDepartments}>Clear</button>
                  </div>
                </div>
                <div className={`chips ${availableDepartments.length > 6 ? 'chips-scroll' : ''}`}>
                  {availableDepartments.length === 0 ? (
                    <span className="hint">No departments assigned</span>
                  ) : (
                    availableDepartments.map(dep => (
                      <label key={dep.id} className={`chip ${selectedDepartmentIds.includes(dep.id) ? 'active' : ''}`}>
                        <input
                          type="checkbox"
                          checked={selectedDepartmentIds.includes(dep.id)}
                          onChange={() => handleToggleDepartment(dep.id)}
                        />
                        <span>{dep.name}</span>
                      </label>
                    ))
                  )}
                </div>
              </div>
              <div className="right">
                <div className="view-group">
                  <span className="label">View</span>
                  <ViewToggle>
                    <button 
                      type="button" 
                      className={`toggle-btn ${showVisualSchedule ? 'active' : ''}`}
                      onClick={() => setShowVisualSchedule(true)}
                      title="Timeline"
                      aria-label="Timeline view"
                      aria-pressed={showVisualSchedule}
                    >
                      <ChartLine size={18} weight={showVisualSchedule ? 'fill' : 'regular'} />
                    </button>
                    <button 
                      type="button" 
                      className={`toggle-btn ${!showVisualSchedule ? 'active' : ''}`}
                      onClick={() => setShowVisualSchedule(false)}
                      title="Table"
                      aria-label="Table view"
                      aria-pressed={!showVisualSchedule}
                    >
                      <Table size={18} weight={!showVisualSchedule ? 'fill' : 'regular'} />
                    </button>
                  </ViewToggle>
                </div>
                
                <div className="timezone-group">
                  <span className="label">Time zone</span>
                  <select
                    className="tzSelect"
                    value={deptDisplayTimeZone}
                    onChange={(e) => setDeptDisplayTimeZone(e.target.value)}
                  >
                    {supportedTimeZones.map((tz) => (
                      <option key={tz.value} value={tz.value} title={tz.title}>{tz.code}</option>
                    ))}
                  </select>
                </div>
              </div>
            </FiltersBar>

            {departmentUsersLoading ? (
              <p>Loading department schedules...</p>
            ) : departmentUsersError ? (
              <EmptyState>
                <div style={{ marginBottom: '1rem' }}>
                  <Users size={48} weight="duotone" style={{ color: '#999', marginBottom: '1rem' }} />
                </div>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#555' }}>Error Loading Department Schedules</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#777' }}>{departmentUsersError}</p>
              </EmptyState>
            ) : (selectedDepartmentIds.length === 0) ? (
              <EmptyState>
                <div style={{ marginBottom: '1rem' }}>
                  <Users size={48} weight="duotone" style={{ color: '#999', marginBottom: '1rem' }} />
                </div>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#555' }}>No Departments Selected</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#777' }}>Use the filters above to select one or more departments to display schedules.</p>
              </EmptyState>
            ) : departmentUsers.length === 0 ? (
              <EmptyState>
                <div style={{ marginBottom: '1rem' }}>
                  <Users size={48} weight="duotone" style={{ color: '#999', marginBottom: '1rem' }} />
                </div>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#555' }}>No Department Members Found</h3>
                <p style={{ margin: '0 0 1rem 0' }}>There are no other users in your department.</p>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#777' }}>Department members and their schedules will appear here.</p>
              </EmptyState>
            ) : (
              <>
                {showVisualSchedule ? (
                  <ScheduleGrid>
                    {/* Header row */}
                    <div className="grid-header">Name</div>
                    <div className="grid-header">Sun</div>
                    <div className="grid-header">Mon</div>
                    <div className="grid-header">Tue</div>
                    <div className="grid-header">Wed</div>
                    <div className="grid-header">Thu</div>
                    <div className="grid-header">Fri</div>
                    <div className="grid-header">Sat</div>
                    
                    {/* User rows */}
                    {departmentUsers.map((deptUser) => {
                      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                      
                      // Convert all schedule items to target timezone and group by converted day
                      const convertedSchedules = Array.isArray(deptUser.schedule) ? deptUser.schedule.map(s => {
                        const tz = s.timeRegion || deptUser.timeRegion || 'Asia/Manila';
                        return convertScheduleToTimezone(s, tz, deptDisplayTimeZone);
                      }) : [];
                      
                      return (
                        <React.Fragment key={deptUser.id}>
                          {/* Name cell */}
                          <div className="grid-name">
                            <div style={{ fontWeight: 600 }}>{deptUser.name}</div>
                            <div style={{ fontSize: '0.8rem', color: '#666' }}>{deptUser.position || 'Staff'}</div>
                          </div>
                          
                          {/* Day cells */}
                          {days.map((dayName, dayIndex) => {
                            const items = convertedSchedules.filter(s => s.convertedDayOfWeek === dayName);
                            
                            // Check for overnight shifts from previous day
                            const prevDayName = days[(dayIndex - 1 + 7) % 7];
                            const prevDayItems = convertedSchedules.filter(s => {
                              if (s.convertedDayOfWeek !== prevDayName) return false;
                              const tz = s.timeRegion || deptUser.timeRegion || 'Asia/Manila';
                              const tin = formatTime(s.timeIn, tz, deptDisplayTimeZone);
                              const end = calculateEndTime(s.timeIn, s.shiftDuration || 8, tz);
                              const tout = formatTime(end, tz, deptDisplayTimeZone);
                              const startPos = getTimePosition(tin);
                              const endPos = getTimePosition(tout);
                              return endPos < startPos; // Overnight shift
                            });
                            
                            return (
                              <div key={dayName} className="grid-day">
                                {/* Regular shifts for this day */}
                                {items.map((s, idx) => {
                                  const tz = s.timeRegion || deptUser.timeRegion || 'Asia/Manila';
                                  const tin = formatTime(s.timeIn, tz, deptDisplayTimeZone);
                                  const end = calculateEndTime(s.timeIn, s.shiftDuration || 8, tz);
                                  const tout = formatTime(end, tz, deptDisplayTimeZone);
                                  
                                  const startPos = getTimePosition(tin);
                                  const endPos = getTimePosition(tout);
                                  
                                  if (endPos < startPos) {
                                    // Overnight shift
                                    const todayWidth = 100 - startPos;
                                    return (
                                      <ScheduleBlock
                                        key={`${idx}-overnight`}
                                        startPos={startPos}
                                        width={todayWidth}
                                        title={`${tin} - ${tout} (overnight shift)`}
                                        isOvernight={true}
                                        extendsToNext={true}
                                      />
                                    );
                                  } else {
                                    // Regular shift within the day
                                    return (
                                      <ScheduleBlock
                                        key={idx}
                                        startPos={startPos}
                                        width={endPos - startPos}
                                        title={`${tin} - ${tout}`}
                                      />
                                    );
                                  }
                                })}
                                
                                {/* Overflow blocks from previous day's overnight shifts */}
                                {prevDayItems.map((s, idx) => {
                                  const tz = s.timeRegion || deptUser.timeRegion || 'Asia/Manila';
                                  const tin = formatTime(s.timeIn, tz, deptDisplayTimeZone);
                                  const end = calculateEndTime(s.timeIn, s.shiftDuration || 8, tz);
                                  const tout = formatTime(end, tz, deptDisplayTimeZone);
                                  const endPos = getTimePosition(tout);
                                  
                                  return (
                                    <ScheduleBlock
                                      key={`overflow-${idx}`}
                                      startPos={0}
                                      width={endPos}
                                      title={`${tin} - ${tout} (from previous day)`}
                                      isOverflow={true}
                                    />
                                  );
                                })}
                              </div>
                            );
                          })}
                        </React.Fragment>
                      );
                    })}
                  </ScheduleGrid>
                ) : (
                  <ScheduleTable>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {departmentUsers.map((deptUser) => {
                        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                        
                        // Convert all schedule items to target timezone and group by converted day
                        const convertedSchedules = Array.isArray(deptUser.schedule) ? deptUser.schedule.map(s => {
                          const tz = s.timeRegion || deptUser.timeRegion || 'Asia/Manila';
                          return convertScheduleToTimezone(s, tz, deptDisplayTimeZone);
                        }) : [];
                        
                        const cells = days.map((dayName, dayIndex) => {
                          const items = convertedSchedules.filter(s => s.convertedDayOfWeek === dayName);
                          
                          // Also check for overnight shifts that start the previous day
                          const prevDayName = days[(dayIndex - 1 + 7) % 7];
                          const prevDayItems = convertedSchedules.filter(s => {
                            if (s.convertedDayOfWeek !== prevDayName) return false;
                            const tz = s.timeRegion || deptUser.timeRegion || 'Asia/Manila';
                            const tin = formatTime(s.timeIn, tz, deptDisplayTimeZone);
                            const end = calculateEndTime(s.timeIn, s.shiftDuration || 8, tz);
                            const tout = formatTime(end, tz, deptDisplayTimeZone);
                            const startPos = getTimePosition(tin);
                            const endPos = getTimePosition(tout);
                            return endPos < startPos; // Overnight shift
                          });
                          
                          if (items.length === 0 && prevDayItems.length === 0) {
                            return (
                              <td key={dayName} style={{ color: '#999' }}>—</td>
                            );
                          }
                          return (
                            <td key={dayName}>
                              <div>
                                {items.map((s, idx) => {
                                  const tz = s.timeRegion || deptUser.timeRegion || 'Asia/Manila';
                                  const tin = formatTime(s.timeIn, tz, deptDisplayTimeZone);
                                  const end = calculateEndTime(s.timeIn, s.shiftDuration || 8, tz);
                                  const tout = formatTime(end, tz, deptDisplayTimeZone);
                                  return (
                                    <div key={idx} style={{ whiteSpace: 'nowrap', marginBottom: '2px' }}>{tin} - {tout}</div>
                                  );
                                })}
                              </div>
                            </td>
                          );
                        });
                        return (
                          <tr key={deptUser.id}>
                            <td>
                              <div style={{ fontWeight: 600 }}>{deptUser.name}</div>
                              <div style={{ fontSize: '0.8rem', color: '#666' }}>{deptUser.position || 'Staff'}</div>
                            </td>
                            {cells}
                          </tr>
                        );
                      })}
                    </tbody>
                  </ScheduleTable>
                )}

                <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#666', textAlign: 'right' }}>
                  All times shown in: <strong>{deptDisplayTimeZone}</strong>
                </div>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
    
    {/* User's Schedule Change Requests History */}
    <UserScheduleRequests user={user} />
    
    {/* Schedule Change Request Popup */}
    {showRequestPopup && (
      <PopupOverlay onClick={(e) => e.target === e.currentTarget && setShowRequestPopup(false)}>
        <PopupContent>
          <CloseButton onClick={() => setShowRequestPopup(false)}>
            <X size={24} weight="bold" />
          </CloseButton>
          <ScheduleChangeRequestForm 
            user={user} 
            userData={userData} 
            currentSchedule={schedule} 
            isPopup={true} 
            onClose={() => setShowRequestPopup(false)}
          />
        </PopupContent>
      </PopupOverlay>
    )}
  </>
  );
};

export default ScheduleView;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: 200px repeat(7, 1fr);
  gap: 0;
  margin-top: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background: white;
  
  .grid-header {
    background: #f8f9fa;
    padding: 1rem;
    font-weight: 600;
    color: #333;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:first-child {
      justify-content: flex-start;
      border-right: 1px solid #eee;
    }
  }
  
  .grid-name {
    padding: 1rem;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .grid-day {
    position: relative;
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
    background: #fafafa;
    min-height: 44px;
    display: flex;
    align-items: center;
    
    /* 6-hour grid lines (minor) */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: repeating-linear-gradient(
        to right,
        transparent 0,
        transparent calc(25% - 1px),
        rgba(160, 160, 160, 0.65) calc(25% - 1px),
        rgba(160, 160, 160, 0.65) 25%
      );
      pointer-events: none;
      z-index: 0;
    }
    
    /* 12AM marker (major, thicker at start of cell) */
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(
        to right,
        rgba(120, 120, 120, 0.95) 0,
        rgba(120, 120, 120, 0.95) 2px,
        transparent 2px
      );
      pointer-events: none;
      z-index: 0;
    }
    
    &:hover {
      background: #f0f7ff;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 150px repeat(7, 1fr);
    
    .grid-header, .grid-name {
      padding: 0.75rem 0.5rem;
      font-size: 0.9rem;
    }
    
    .grid-day {
      padding: 0.25rem;
      min-height: 40px;
    }
  }
`;

const ScheduleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  
  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #eee;
    border-right: none; /* Remove vertical borders between day columns */
    position: relative;
  }
  
  /* Only add border between name column and day columns */
  td:first-child, th:first-child {
    border-right: 1px solid #eee;
  }
  
  th {
    background-color: #f8f9fa;
    font-weight: 600;
    color: #333;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
  
  @media (max-width: 768px) {
    th, td {
      padding: 0.75rem 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

const FiltersBar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  background: linear-gradient(135deg, #ffffff 0%, #fef9f9 100%);
  border: 1px solid #f0e6e6;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.08);

  .left { 
    display: flex; 
    flex-direction: column; 
    gap: 0.75rem; 
    flex: 1 1 auto; 
  }
  
  .left-header { 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    gap: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #f0e6e6;
  }
  
  .label { 
    display: inline-flex; 
    align-items: center; 
    gap: 0.5rem; 
    font-weight: 600; 
    color: #7f1d1d;
    font-size: 1rem;
  }
  
  .label .count { 
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); 
    color: #dc2626; 
    border: 1px solid #f87171; 
    border-radius: 999px; 
    padding: 4px 10px; 
    font-size: 0.75rem; 
    font-weight: 700;
    box-shadow: 0 1px 3px rgba(220, 38, 38, 0.15);
  }
  
  .actions { 
    display: inline-flex; 
    align-items: center; 
    gap: 0.75rem; 
    white-space: nowrap; 
  }
  
  
  .chips { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 0.6rem; 
  }
  
  .chips.chips-scroll { 
    max-height: 110px; 
    overflow-y: auto; 
    padding-right: 0.5rem;
    
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f3e8e8;
      border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #f87171;
      border-radius: 3px;
    }
  }
  
  .hint { 
    color: #9ca3af; 
    font-size: 0.9rem;
    font-style: italic;
  }

  .chip { 
    display: inline-flex; 
    align-items: center; 
    gap: 0.5rem; 
    padding: 0.5rem 0.8rem; 
    border: 2px solid #f3e8e8; 
    border-radius: 999px; 
    background: #fff; 
    cursor: pointer; 
    user-select: none;
    transition: all 0.2s ease;
    font-size: 0.9rem;
    font-weight: 500;
    
    &:hover {
      border-color: #fca5a5;
      background: #fef2f2;
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(220, 38, 38, 0.15);
    }
  }
  
  .chip.active { 
    border-color: #dc2626; 
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    color: #7f1d1d;
    box-shadow: 0 2px 8px rgba(220, 38, 38, 0.2);
  }
  
  .chip input { 
    accent-color: #dc2626; 
  }

  .right { 
    display: flex; 
    flex-direction: column;
    align-items: flex-start; 
    gap: 0.5rem; 
    white-space: nowrap;
    padding: 0.5rem;
    background: rgba(254, 242, 242, 0.5);
    border-radius: 8px;
    border: 1px solid #f3e8e8;
  }
  
  .view-group, .timezone-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .timezone-group .label {
    margin-right: 0.25rem;
  }
  
  .tzSelect { 
    padding: 0.45rem 0.6rem; 
    border: 1px solid #f3e8e8; 
    border-radius: 8px; 
    background: #fff; 
    color: #374151;
    font-size: 0.9rem;
    line-height: 1.2;
    min-width: 110px;
    transition: border-color 0.2s ease;
    
    &:focus {
      outline: none;
      border-color: #f87171;
      box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.1);
    }
  }
  
  .link { 
    background: none; 
    border: none; 
    padding: 0.25rem 0.5rem; 
    color: #dc2626; 
    cursor: pointer;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover {
      background: #fee2e2;
      color: #991b1b;
      text-decoration: none;
    }
  }
  
  .sep { 
    color: #d1d5db; 
    font-weight: bold;
  }
  
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    padding: 1rem;
    
    .left-header {
      flex-direction: column;
      align-items: stretch;
      gap: 0.75rem;
    }
    
    .actions {
      justify-content: center;
    }
    
    .right { 
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .search { 
      flex-basis: 100%; 
      max-width: none;
    }
  }
  
  @media (max-width: 600px) {
    .chips {
      justify-content: center;
    }
    
    .chip {
      font-size: 0.85rem;
      padding: 0.4rem 0.6rem;
    }
  }
`;

const DayCard = styled.div`
  background-color: ${props => props.isToday ? '#f0f7ff' : 'white'};
  border: 1px solid ${props => props.isToday ? '#bbd6fb' : '#eee'};
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  ${props => props.isToday && `
    &:before {
      content: 'TODAY';
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #1a73e8;
      color: white;
      font-size: 0.7rem;
      font-weight: bold;
      padding: 3px 8px;
      border-radius: 12px;
      letter-spacing: 0.5px;
    }
  `}
  
  h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    color: ${props => props.isToday ? '#1a73e8' : '#333'};
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px dashed #ddd;
`;

const PopupOverlay = styled.div`
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

const PopupContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 1.5rem;
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const TabButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#800000' : '#555'};
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.active ? '#800000' : 'transparent'};
    transition: all 0.2s ease;
  }
  
  &:hover {
    color: #800000;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.2rem;
  padding: 0.25rem;
  border-radius: 50%;
  
  &:hover {
    background-color: #f0f0f0;
    color: #333;
  }
`;

const RequestButton = styled.button`
  background-color: #800000;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #600000;
  }
`;

const ViewToggle = styled.div`
  display: flex;
  background: #fef2f2;
  border: 1px solid #f3e8e8;
  border-radius: 8px;
  padding: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  .toggle-btn {
    background: transparent;
    border: none;
    padding: 0.5rem 0.6rem;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.375rem;
    position: relative;
    min-width: 44px;
    justify-content: center;
    font-weight: 500;
    color: #7f1d1d;
    
    .icon {
      font-size: 0.9rem;
      filter: grayscale(0.3);
      transition: filter 0.3s ease;
    }
    
    .label {
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.025em;
    }
    
    &.active {
      background: linear-gradient(135deg, #fecaca 0%, #fca5a5 60%, #f87171 100%);
      color: #7f1d1d;
      box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);
      transform: translateY(-1px);
      
      .icon {
        filter: none;
      }
    }
    
    &:hover:not(.active) {
      background: #fdeaea;
      color: #7f1d1d;
      transform: translateY(-0.5px);
      
      .icon {
        filter: none;
      }
    }
    
    &:active {
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .toggle-btn {
      min-width: 60px;
      padding: 0.4rem 0.6rem;
      
      .label {
        font-size: 0.75rem;
      }
    }
  }
`;

const ScheduleTimeline = styled.div`
  position: relative;
  width: 100%;
  height: 32px;
  background: linear-gradient(to right, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%);
  border: 1px solid #dee2e6;
  border-radius: 4px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 100%;
    background: #6c757d;
    opacity: 0.3;
  }
`;

const ScheduleBlock = styled.div`
  position: absolute;
  left: ${props => props.startPos}%;
  width: ${props => props.width}%;
  height: 20px;
  background: linear-gradient(135deg, #FFD54F, #FFA000);
  border-radius: 6px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(255, 160, 0, 0.25);
  z-index: ${props => props.extendsToNext ? 10 : 5};
  border: none;
  overflow: hidden;
  
  ${props => props.extendsToNext && `
    /* Extend the block to bridge the gap to next cell */
    transform: translateY(-50%) scaleX(1.2);
    transform-origin: left center;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}
  
  ${props => props.isOverflow && `
    background: linear-gradient(135deg, #FF8F00, #FF6F00);
    opacity: 0.85;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}
  
  &:hover {
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 4px 12px rgba(255, 160, 0, 0.35);
    z-index: 15;
  }
  
  &:active {
    transform: translateY(-50%) scale(0.98);
  }
  
  .time-text {
    color: white;
    font-size: 0.7rem;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 4px;
  }
  
  @media (max-width: 768px) {
    .time-text {
      font-size: 0.6rem;
    }
  }
`;

const ScheduleOverflowBlock = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  width: ${props => Math.max(props.width, 5)}%;
  height: 100%;
  background: linear-gradient(135deg, #FFC107 0%, #FF8F00 100%);
  border: 1px solid #B36B00;
  border-radius: 3px;
  z-index: 3;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    z-index: 4;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -1px;
    top: 0;
    width: 2px;
    height: 100%;
    background: #FFC107;
  }
`;