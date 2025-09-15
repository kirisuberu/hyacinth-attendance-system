import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { collection, query, where, getDocs, doc, getDoc, updateDoc, setDoc, deleteDoc, writeBatch } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import { Users, Calendar, Clock, X, Check, Plus, Pencil, CalendarPlus, SquaresFour, FileText, ChartLine, Table } from 'phosphor-react';
import styled from 'styled-components';
import { getAllRequests, updateRequestStatus, REQUEST_TYPES, REQUEST_STATUS } from '../../services/requestService';
import { useTimeFormat } from '../../contexts/TimeFormatContext';
import { utcToZonedTime, zonedTimeToUtc, format as formatTZ } from 'date-fns-tz';
import { addHours, parse } from 'date-fns';

function ManagerFunctionsView() {
  const context = useOutletContext();
  const userData = context?.userData || null;
  const { use24HourFormat } = useTimeFormat();
  const [departmentUsers, setDepartmentUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showAbsenceModal, setShowAbsenceModal] = useState(false);
  const [absenceDate, setAbsenceDate] = useState('');
  const [absenceType, setAbsenceType] = useState('absent');
  const [absenceReason, setAbsenceReason] = useState('');
  const [absentReason, setAbsentReason] = useState('');
  // Bulk absence modal state
  const [showBulkAbsenceModal, setShowBulkAbsenceModal] = useState(false);
  const [bulkSelectedUserIds, setBulkSelectedUserIds] = useState([]);
  const [bulkAbsenceType, setBulkAbsenceType] = useState('absent');
  const [bulkAbsenceReason, setBulkAbsenceReason] = useState('');
  const [bulkAbsentReason, setBulkAbsentReason] = useState('');
  const [userSchedules, setUserSchedules] = useState({});
  const [scheduleData, setScheduleData] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    selectedDays: [],
    timeIn: '09:00',
    timeRegion: 'Asia/Manila',
    shiftHours: '8',
    shiftMinutes: '0',
  });
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeptId, setSelectedDeptId] = useState('all');
  const [deptOptions, setDeptOptions] = useState([]); // [{ id, name }]
  // Calendar mode state
  const [calendarDate, setCalendarDate] = useState(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });
  const [absencesByDate, setAbsencesByDate] = useState({}); // { 'YYYY-MM-DD': [{ id, userId, type, reason }] }
  // Petition management state
  const [petitions, setPetitions] = useState([]);
  const [showPetitionModal, setShowPetitionModal] = useState(false);
  const [selectedPetition, setSelectedPetition] = useState(null);
  const [petitionAction, setPetitionAction] = useState(null);
  const [adminRemarks, setAdminRemarks] = useState('');
  const [processingPetition, setProcessingPetition] = useState(false);
  // Tabs: 'absences' | 'schedule'
  const [activeTab, setActiveTab] = useState('absences');
  // Day marking modal state (tri-column Absent/PTO/NCNS)
  const [showDayMarkModal, setShowDayMarkModal] = useState(false);
  // Map of userId -> { type: 'absent'|'pto'|'ncns'|null, reason: string, absentReason: string }
  const [dailySelections, setDailySelections] = useState({});
  // Search inside Day Mark modal
  const [dayMarkSearch, setDayMarkSearch] = useState('');
  // Per-type list modal for a specific day
  const [showTypeListModal, setShowTypeListModal] = useState(false);
  const [typeListDate, setTypeListDate] = useState('');
  const [typeListType, setTypeListType] = useState('absent');
  // userId -> { type, reason, absentReason }
  const [typeListEdits, setTypeListEdits] = useState({});

  // Get admin's departments
  const adminDepartments = React.useMemo(() => {
    if (!userData) return [];
    if (Array.isArray(userData.departments)) {
      return userData.departments.filter(Boolean);
    }
    if (userData.departmentId) {
      return [userData.departmentId];
    }
    return [];
  }, [userData]);

  // Helper constants and functions
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const calculateTotalHours = (schedules) => {
    if (!schedules || !Array.isArray(schedules) || schedules.length === 0) {
      return 0;
    }
    return schedules.reduce((total, schedule) => {
      return total + (Number(schedule.shiftDuration) || 0);
    }, 0).toFixed(1);
  };

  // Quick lookup of user data by id for display
  const userById = React.useMemo(() => {
    const map = {};
    for (const u of departmentUsers) map[u.id] = u;
    return map;
  }, [departmentUsers]);

  // Schedule tab: department filter chips (separate from top filter)
  const [selectedScheduleDeptIds, setSelectedScheduleDeptIds] = useState([]);
  useEffect(() => {
    // initialize to all available
    setSelectedScheduleDeptIds(deptOptions.map(d => d.id));
  }, [JSON.stringify(deptOptions)]);

  const scheduleDeptUsers = React.useMemo(() => {
    if (!selectedScheduleDeptIds.length) return [];
    const allow = new Set(selectedScheduleDeptIds);
    return departmentUsers.filter(u => Array.isArray(u.departments) && u.departments.some(id => allow.has(id)));
  }, [departmentUsers, selectedScheduleDeptIds]);

  const toggleScheduleDept = (id) => {
    setSelectedScheduleDeptIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };
  const selectAllScheduleDepts = () => setSelectedScheduleDeptIds(deptOptions.map(d => d.id));
  const clearAllScheduleDepts = () => setSelectedScheduleDeptIds([]);

  const endTimeOf = (timeIn, durationHours) => {
    try {
      const [h, m] = String(timeIn || '00:00').split(':').map(Number);
      const start = new Date();
      start.setHours(h || 0, m || 0, 0, 0);
      const ms = (Number(durationHours) || 0) * 60 * 60 * 1000;
      const end = new Date(start.getTime() + ms);
      const eh = String(end.getHours()).padStart(2, '0');
      const em = String(end.getMinutes()).padStart(2, '0');
      return `${eh}:${em}`;
    } catch {
      return timeIn;
    }
  };

  // Visual schedule toggle and timezone selection (style parity with Department Schedule)
  const [showVisualSchedule, setShowVisualSchedule] = useState(true);
  const [deptDisplayTimeZone, setDeptDisplayTimeZone] = useState(userData?.timeRegion || 'Asia/Manila');
  const supportedTimeZones = React.useMemo(() => ([
    { value: 'Asia/Manila', code: 'PHT', title: 'Philippine Time' },
    { value: 'America/Los_Angeles', code: 'PST', title: 'Pacific Time (US & Canada)' },
    { value: 'America/Denver', code: 'MST', title: 'Mountain Time (US & Canada)' },
    { value: 'America/Phoenix', code: 'MST-noDST', title: 'Mountain Time (no DST, Arizona)' },
    { value: 'America/Chicago', code: 'CST', title: 'Central Time (US & Canada)' },
    { value: 'America/New_York', code: 'EST', title: 'Eastern Time (US & Canada)' },
    { value: 'Pacific/Honolulu', code: 'HST', title: 'Hawaii–Aleutian (no DST)' },
  ]), []);
  const getTimePosition = (timeString) => {
    try {
      let hours, minutes;
      if (typeof timeString === 'string' && (/AM|PM/i.test(timeString))) {
        const d = parse(timeString, 'h:mm a', new Date());
        hours = d.getHours();
        minutes = d.getMinutes();
      } else {
        [hours, minutes] = String(timeString || '00:00').split(':').map(Number);
      }
      const total = (hours * 60) + (minutes || 0);
      return (total / (24 * 60)) * 100;
    } catch { return 0; }
  };

  // Timezone helpers (mirroring ScheduleView)
  const formatTime = (timeString, sourceTimeRegion = null, targetTimeRegion = deptDisplayTimeZone) => {
    if (!timeString) return 'N/A';
    try {
      if (!sourceTimeRegion || sourceTimeRegion === targetTimeRegion) {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(parseInt(hours, 10));
        date.setMinutes(parseInt(minutes, 10));
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: !use24HourFormat });
      }
      const [hours, minutes] = timeString.split(':');
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const sourceDate = new Date(today);
      sourceDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);
      const sourceZonedDate = zonedTimeToUtc(sourceDate, sourceTimeRegion);
      const targetZonedDate = utcToZonedTime(sourceZonedDate, targetTimeRegion);
      const fmt = use24HourFormat ? 'HH:mm' : 'h:mm a';
      return formatTZ(targetZonedDate, fmt, { timeZone: targetTimeRegion });
    } catch {
      return timeString;
    }
  };

  const calculateEndTime = (startTime, duration) => {
    try {
      const [hours, minutes] = startTime.split(':').map(Number);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const startDate = new Date(today);
      startDate.setHours(hours, minutes, 0, 0);
      const endDate = addHours(startDate, Number(duration) || 0);
      return `${String(endDate.getHours()).padStart(2, '0')}:${String(endDate.getMinutes()).padStart(2, '0')}`;
    } catch {
      let [h, m] = String(startTime || '00:00').split(':').map(Number);
      h = ((h || 0) + (Number(duration) || 0)) % 24;
      return `${String(h).padStart(2, '0')}:${String(m || 0).padStart(2, '0')}`;
    }
  };

  const convertScheduleToTimezone = (scheduleItem, sourceTimeRegion, targetTimeRegion) => {
    try {
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayIndex = dayNames.indexOf(scheduleItem.dayOfWeek);
      if (dayIndex === -1) return { ...scheduleItem, convertedDayOfWeek: scheduleItem.dayOfWeek };
      const [hours, minutes] = scheduleItem.timeIn.split(':').map(Number);
      const today = new Date();
      const currentDayIndex = today.getDay();
      const daysUntilTargetDay = (dayIndex - currentDayIndex + 7) % 7;
      const scheduleDate = new Date(today);
      scheduleDate.setDate(today.getDate() + daysUntilTargetDay);
      scheduleDate.setHours(hours, minutes, 0, 0);
      const sourceZonedDate = zonedTimeToUtc(scheduleDate, sourceTimeRegion);
      const targetZonedDate = utcToZonedTime(sourceZonedDate, targetTimeRegion);
      const convertedDayIndex = targetZonedDate.getDay();
      const convertedDayOfWeek = dayNames[convertedDayIndex];
      return { ...scheduleItem, convertedDayOfWeek, convertedTimeIn: formatTZ(targetZonedDate, 'HH:mm', { timeZone: targetTimeRegion }) };
    } catch {
      return { ...scheduleItem, convertedDayOfWeek: scheduleItem.dayOfWeek };
    }
  };

  // (moved) modalFilteredUsers is defined after filteredUsers

  const handleBulkMarkAbsences = async () => {
    if (!absenceDate) {
      toast.error('Please select a date');
      return;
    }
    if (!bulkSelectedUserIds || bulkSelectedUserIds.length === 0) {
      toast.error('Please select at least one user');
      return;
    }

    try {
      const batch = writeBatch(db);
      const timestampStr = new Date().toISOString();
      bulkSelectedUserIds.forEach((uid) => {
        const absenceId = `${uid}_${absenceDate}`;
        const absenceData = {
          userId: uid,
          date: absenceDate,
          type: bulkAbsenceType,
          reason: bulkAbsenceReason,
          absentReason: bulkAbsenceType === 'absent' ? bulkAbsentReason : '',
          markedBy: userData?.uid || 'system',
          markedByName: userData?.name || userData?.displayName || 'Admin',
          timestamp: timestampStr,
          status: 'approved',
        };
        console.log('[DEBUG] Marking absence:', { absenceId, absenceData });
        batch.set(doc(db, 'absences', absenceId), absenceData);
      });

      console.log('[DEBUG] Committing batch of', bulkSelectedUserIds.length, 'absences');
      await batch.commit();
      console.log('[DEBUG] Batch commit successful');

      if (activeTab === 'absences') {
        setAbsencesByDate((prev) => {
          const copy = { ...prev };
          const arr = copy[absenceDate] ? [...copy[absenceDate]] : [];
          const mapByUser = new Map(arr.map((a) => [a.userId, a]));
          bulkSelectedUserIds.forEach((uid) => {
            mapByUser.set(uid, { id: `${uid}_${absenceDate}`, userId: uid, type: bulkAbsenceType, reason: bulkAbsenceReason || '', absentReason: bulkAbsenceType === 'absent' ? (bulkAbsentReason || '') : '' });
          });
          copy[absenceDate] = Array.from(mapByUser.values());
          return copy;
        });
      }

      toast.success(`Marked ${bulkSelectedUserIds.length} user(s) as ${bulkAbsenceType}`);
      setShowBulkAbsenceModal(false);
      setBulkSelectedUserIds([]);
      setBulkAbsenceReason('');
    } catch (error) {
      console.error('Error marking absences in bulk:', error);
      toast.error('Failed to mark absences');
    }
  };

  const formatDuration = (durationHours) => {
    const total = Number(durationHours) || 0;
    const h = Math.floor(total);
    const m = Math.round((total - h) * 60);
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  };

  // Calendar helpers
  const pad2 = (n) => (n < 10 ? `0${n}` : `${n}`);
  const formatDateYYYYMMDD = (dateObj) => {
    const y = dateObj.getFullYear();
    const m = pad2(dateObj.getMonth() + 1);
    const d = pad2(dateObj.getDate());
    return `${y}-${m}-${d}`;
  };
  const monthTitle = (dateObj) =>
    dateObj.toLocaleString(undefined, { month: 'long', year: 'numeric' });
  const weekDayMondayIndex = (jsDay) => (jsDay + 6) % 7; // convert Sun(0)..Sat(6) -> Mon(0)..Sun(6)
  const formatLongDate = (dateStr) => {
    try {
      const [y, m, d] = (dateStr || '').split('-').map(Number);
      const dt = new Date(y, (m || 1) - 1, d || 1);
      return dt.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  // Fetch users in admin's departments
  useEffect(() => {
    const fetchDepartmentUsers = async () => {
      if (adminDepartments.length === 0) {
        setDepartmentUsers([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const usersRef = collection(db, 'users');
        
        // Query users by departmentId and departments array
        const qByDeptId = query(usersRef, where('departmentId', 'in', adminDepartments.slice(0, 10)));
        const qByDeptArray = query(usersRef, where('departments', 'array-contains-any', adminDepartments.slice(0, 10)));
        
        const [snapById, snapByArray] = await Promise.all([
          getDocs(qByDeptId),
          getDocs(qByDeptArray)
        ]);
        
        // Merge results and remove duplicates
        const docMap = new Map();
        for (const d of snapById.docs) docMap.set(d.id, d);
        for (const d of snapByArray.docs) docMap.set(d.id, d);
        const mergedDocs = Array.from(docMap.values());
        
        const users = mergedDocs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name || data.displayName || 'Unknown User',
            email: data.email || 'No email',
            role: data.role || 'user',
            status: data.status || 'active',
            departments: data.departments || (data.departmentId ? [data.departmentId] : []),
            position: data.position || 'N/A'
          };
        });
        
        // Filter out the current admin and exclude inactive users from the list
        const filteredUsers = users.filter(user => 
          user.id !== userData?.uid && ((user.status || 'active') === 'active')
        );
        setDepartmentUsers(filteredUsers);
        
        // Fetch schedules for all users (schedules are stored in users collection)
        const schedules = {};
        for (const user of filteredUsers) {
          try {
            const userDoc = await getDoc(doc(db, 'users', user.id));
            if (userDoc.exists()) {
              const userData = userDoc.data();
              if (userData.schedule && Array.isArray(userData.schedule)) {
                schedules[user.id] = { schedule: userData.schedule };
              }
            }
          } catch (error) {
            console.error(`Error fetching schedule for user ${user.id}:`, error);
          }
        }
        setUserSchedules(schedules);
        
      } catch (error) {
        console.error('Error fetching department users:', error);
        toast.error('Failed to load department users');
      } finally {
        setLoading(false);
      }
    };

    fetchDepartmentUsers();
  }, [adminDepartments, userData?.uid]);

  // Fetch absence petitions for department users
  const fetchPetitions = async () => {
    try {
      const allPetitions = await getAllRequests(REQUEST_TYPES.ABSENCE_PETITION);
      // Filter petitions for users in manager's departments
      const departmentUserIds = departmentUsers.map(u => u.id);
      const relevantPetitions = allPetitions.filter(petition => 
        departmentUserIds.includes(petition.userId)
      );
      setPetitions(relevantPetitions);
    } catch (error) {
      console.error('Error fetching petitions:', error);
    }
  };

  useEffect(() => {
    if (departmentUsers.length > 0) {
      fetchPetitions();
    }
  }, [departmentUsers]);

  // Load department metadata (names) for the manager's departments
  useEffect(() => {
    const loadDepartments = async () => {
      if (!adminDepartments || adminDepartments.length === 0) {
        setDeptOptions([]);
        return;
      }
      try {
        const results = [];
        for (const deptId of adminDepartments) {
          try {
            const d = await getDoc(doc(db, 'departments', deptId));
            if (d.exists()) {
              const data = d.data();
              results.push({ id: deptId, name: data.name || deptId });
            } else {
              results.push({ id: deptId, name: deptId });
            }
          } catch (e) {
            results.push({ id: deptId, name: deptId });
          }
        }
        setDeptOptions(results);
      } catch (err) {
        console.error('Error loading departments for filter:', err);
        setDeptOptions(adminDepartments.map(id => ({ id, name: id })));
      }
    };
    loadDepartments();
  }, [adminDepartments]);

  // Derived filtered users (by name and department)
  const filteredUsers = React.useMemo(() => {
    const term = (searchTerm || '').trim().toLowerCase();
    return departmentUsers.filter(u => {
      const deptOk = selectedDeptId === 'all' ? true : (Array.isArray(u.departments) ? u.departments.includes(selectedDeptId) : false);
      const nameLower = (u.name || '').toLowerCase();
      const emailLower = (u.email || '').toLowerCase();
      const matches = term ? (nameLower.includes(term) || emailLower.includes(term)) : true;
      return deptOk && matches;
    });
  }, [departmentUsers, searchTerm, selectedDeptId]);

  // Filtered users within the Day Mark modal (sorted alphabetically)
  const modalFilteredUsers = React.useMemo(() => {
    const t = (dayMarkSearch || '').trim().toLowerCase();
    let list = filteredUsers;
    if (t) {
      list = filteredUsers.filter((u) => {
        const name = (u.name || '').toLowerCase();
        const email = (u.email || '').toLowerCase();
        const pos = (u.position || '').toLowerCase();
        return name.includes(t) || email.includes(t) || pos.includes(t);
      });
    }
    return [...list].sort((a, b) => {
      const an = (a.name || a.email || a.id || '').toString().trim().toLowerCase();
      const bn = (b.name || b.email || b.id || '').toString().trim().toLowerCase();
      return an.localeCompare(bn);
    });
  }, [filteredUsers, dayMarkSearch]);

  // Load monthly absences for filtered users when in Absences tab
  useEffect(() => {
    if (activeTab !== 'absences') return;
    const loadMonthlyAbsences = async () => {
      try {
        const y = calendarDate.getFullYear();
        const m = calendarDate.getMonth();
        const start = new Date(y, m, 1);
        const end = new Date(y, m + 1, 0);
        const startStr = formatDateYYYYMMDD(start);
        const endStr = formatDateYYYYMMDD(end);

        const absencesRef = collection(db, 'absences');
        // Query by date range; filter by users client-side to avoid composite index needs
        const q = query(absencesRef, where('date', '>=', startStr), where('date', '<=', endStr));
        const snap = await getDocs(q);
        const allowedIds = new Set(filteredUsers.map(u => u.id));
        const map = {};
        snap.forEach(docSnap => {
          const data = docSnap.data();
          if (!allowedIds.has(data.userId)) return;
          const dateKey = data.date;
          if (!map[dateKey]) map[dateKey] = [];
          map[dateKey].push({ id: docSnap.id, userId: data.userId, type: data.type, reason: data.reason || '', absentReason: data.absentReason || '' });
        });
        setAbsencesByDate(map);
      } catch (err) {
        console.error('Error loading monthly absences:', err);
      }
    };
    loadMonthlyAbsences();
  }, [activeTab, calendarDate, filteredUsers]);

  const handleMarkAbsence = async () => {
    if (!selectedUser || !absenceDate) {
      toast.error('Please select a user and date');
      return;
    }

    try {
      const absenceData = {
        userId: selectedUser.id,
        date: absenceDate,
        type: absenceType,
        reason: absenceReason,
        absentReason: absenceType === 'absent' ? absentReason : '',
        markedBy: userData?.uid || 'system',
        markedByName: userData?.name || userData?.displayName || 'Admin',
        timestamp: new Date().toISOString(),
        status: 'approved'
      };

      // Create absence record
      const absenceId = `${selectedUser.id}_${absenceDate}`;
      await setDoc(doc(db, 'absences', absenceId), absenceData);
      // Optimistically update calendar state
      if (activeTab === 'absences') {
        setAbsencesByDate(prev => {
          const copy = { ...prev };
          const arr = copy[absenceDate] ? [...copy[absenceDate]] : [];
          const existingIndex = arr.findIndex(a => a.userId === selectedUser.id);
          const entry = { id: absenceId, userId: selectedUser.id, type: absenceType, reason: absenceReason || '', absentReason: absenceType === 'absent' ? (absentReason || '') : '' };
          if (existingIndex >= 0) arr[existingIndex] = entry; else arr.push(entry);
          copy[absenceDate] = arr;
          return copy;
        });
      }
      
      toast.success(`${absenceType === 'pto' ? 'PTO' : 'Absence'} marked for ${selectedUser.name}`);
      setShowAbsenceModal(false);
      setAbsenceDate('');
      setAbsenceReason('');
      setAbsentReason('');
      setSelectedUser(null);
    } catch (error) {
      console.error('Error marking absence:', error);
      toast.error('Failed to mark absence');
    }
  };

  const openAbsenceModal = (user) => {
    setSelectedUser(user);
    setAbsenceType('absent'); // Reset to default type
    setShowAbsenceModal(true);
  };

  const openScheduleModal = (user) => {
    setSelectedUser(user);
    const userSchedule = userSchedules[user.id] || {};
    setScheduleData(userSchedule.schedule || []);
    setShowScheduleModal(true);
  };

  const handleAddSchedule = () => {
    if (newSchedule.selectedDays.length === 0) {
      toast.warning('Please select at least one day of the week');
      return;
    }
    
    const localTime = new Date();
    const [hours, minutes] = newSchedule.timeIn.split(':').map(Number);
    localTime.setHours(hours, minutes, 0, 0);
    
    const durHours = parseInt(newSchedule.shiftHours || '0', 10);
    const durMinutes = parseInt(newSchedule.shiftMinutes || '0', 10);
    const safeHours = isNaN(durHours) ? 0 : durHours;
    const safeMinutes = isNaN(durMinutes) ? 0 : durMinutes;
    const totalMinutes = safeHours * 60 + safeMinutes;
    
    if (totalMinutes <= 0) {
      toast.warning('Please enter a valid shift duration');
      return;
    }
    if (totalMinutes > 24 * 60) {
      toast.warning('Shift duration cannot exceed 24 hours');
      return;
    }
    
    const durationInHours = totalMinutes / 60;
    
    const newScheduleEntries = newSchedule.selectedDays.map(day => ({
      id: `${Date.now()}-${day}`,
      dayOfWeek: day,
      timeIn: newSchedule.timeIn,
      timeRegion: newSchedule.timeRegion,
      shiftDuration: durationInHours,
      utcTimeIn: localTime.toISOString()
    }));
    
    const updatedSchedule = [...scheduleData, ...newScheduleEntries];
    setScheduleData(updatedSchedule);
    
    toast.success(`Added schedule for ${newSchedule.selectedDays.length} day(s)`);
    
    setNewSchedule({
      selectedDays: [],
      timeIn: '09:00',
      timeRegion: 'Asia/Manila',
      shiftHours: '8',
      shiftMinutes: '0',
    });
  };

  // Petition handling functions
  const handlePetitionAction = (petition, action) => {
    setSelectedPetition(petition);
    setPetitionAction(action);
    setAdminRemarks('');
    setShowPetitionModal(true);
  };

  const handleClosePetitionModal = () => {
    setShowPetitionModal(false);
    setSelectedPetition(null);
    setPetitionAction(null);
    setAdminRemarks('');
  };

  const handleSubmitPetitionAction = async (e) => {
    e.preventDefault();
    
    if (!adminRemarks.trim()) {
      toast.error('Please provide remarks for your decision');
      return;
    }
    
    try {
      setProcessingPetition(true);
      
      const status = petitionAction === 'approve' 
        ? REQUEST_STATUS.APPROVED 
        : REQUEST_STATUS.REJECTED;
      
      await updateRequestStatus(
        selectedPetition.id,
        status,
        adminRemarks
      );
      
      toast.success(`Petition ${petitionAction === 'approve' ? 'approved' : 'rejected'} successfully`);
      handleClosePetitionModal();
      fetchPetitions(); // Refresh the list
    } catch (error) {
      console.error('Error processing petition:', error);
      toast.error('Failed to process petition: ' + error.message);
    } finally {
      setProcessingPetition(false);
    }
  };

  const formatDate = (timestamp) => {
    try {
      let date;
      if (timestamp instanceof Date) {
        date = timestamp;
      } else if (typeof timestamp?.toDate === 'function') {
        date = timestamp.toDate();
      } else {
        date = new Date(timestamp);
      }
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (error) {
      return 'Invalid Date';
    }
  };

  const handleSaveSchedule = async () => {
    if (!selectedUser) return;
    
    try {
      const userRef = doc(db, 'users', selectedUser.id);
      await updateDoc(userRef, {
        schedule: scheduleData
      });
      
      setUserSchedules(prev => ({
        ...prev,
        [selectedUser.id]: { schedule: scheduleData }
      }));
      
      toast.success('Schedule updated successfully');
      setShowScheduleModal(false);
    } catch (error) {
      console.error('Error updating schedule:', error);
      toast.error(`Failed to update schedule: ${error.message}`);
    }
  };

  const handleDeleteSchedule = (scheduleId) => {
    const updatedSchedule = scheduleData.filter(item => item.id !== scheduleId);
    setScheduleData(updatedSchedule);
  };

  const handleEditSchedule = (schedule) => {
    setEditingSchedule(schedule);
    setIsEditing(true);
    setNewSchedule({
      selectedDays: [schedule.dayOfWeek],
      timeIn: schedule.timeIn,
      timeRegion: schedule.timeRegion,
      shiftHours: Math.floor(Number(schedule.shiftDuration || 0)).toString(),
      shiftMinutes: Math.round((Number(schedule.shiftDuration || 0) - Math.floor(Number(schedule.shiftDuration || 0))) * 60).toString(),
    });
  };

  const handleUpdateSchedule = () => {
    if (!editingSchedule) return;
    
    if (newSchedule.selectedDays.length === 0) {
      toast.warning('Please select at least one day of the week');
      return;
    }
    
    const localTime = new Date();
    const [hours, minutes] = newSchedule.timeIn.split(':').map(Number);
    localTime.setHours(hours, minutes, 0, 0);
    
    const durHours = parseInt(newSchedule.shiftHours || '0', 10);
    const durMinutes = parseInt(newSchedule.shiftMinutes || '0', 10);
    const safeHours = isNaN(durHours) ? 0 : durHours;
    const safeMinutes = isNaN(durMinutes) ? 0 : durMinutes;
    const totalMinutes = safeHours * 60 + safeMinutes;
    
    if (totalMinutes <= 0) {
      toast.warning('Please enter a valid shift duration');
      return;
    }
    if (totalMinutes > 24 * 60) {
      toast.warning('Shift duration cannot exceed 24 hours');
      return;
    }
    
    const durationInHours = totalMinutes / 60;
    
    let updatedSchedule = scheduleData.filter(item => item.id !== editingSchedule.id);
    
    const updatedEntries = newSchedule.selectedDays.map(day => ({
      id: day === editingSchedule.dayOfWeek ? editingSchedule.id : `${Date.now()}-${day}`,
      dayOfWeek: day,
      timeIn: newSchedule.timeIn,
      timeRegion: newSchedule.timeRegion,
      shiftDuration: durationInHours,
      utcTimeIn: localTime.toISOString()
    }));
    
    updatedSchedule = [...updatedSchedule, ...updatedEntries];
    setScheduleData(updatedSchedule);
    
    toast.success(`Updated schedule for ${newSchedule.selectedDays.length} day(s)`);
    
    setNewSchedule({
      selectedDays: [],
      timeIn: '09:00',
      timeRegion: 'Asia/Manila',
      shiftHours: '8',
      shiftMinutes: '0',
    });
    setIsEditing(false);
    setEditingSchedule(null);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditingSchedule(null);
    setNewSchedule({
      selectedDays: [],
      timeIn: '09:00',
      timeRegion: 'Asia/Manila',
      shiftHours: '8',
      shiftMinutes: '0',
    });
  };

  // Calendar actions
  const handleMonthChange = (delta) => {
    setCalendarDate(prev => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
  };

  const onDayClick = (dateStr) => {
    setAbsenceDate(dateStr);
    // Initialize selections from current absences for this date
    const existing = absencesByDate[dateStr] || [];
    const map = {};
    existing.forEach((a) => {
      map[a.userId] = { type: a.type || null, reason: a.reason || '', absentReason: a.type === 'absent' ? (a.absentReason || '') : '' };
    });
    setDailySelections(map);
    setDayMarkSearch('');
    setShowDayMarkModal(true);
  };

  const toggleSelection = (userId, type, checked) => {
    setDailySelections((prev) => {
      const next = { ...prev };
      const current = next[userId] || { type: null, reason: '', absentReason: '' };
      if (checked) {
        // Ensure a user can have only one type; selecting one clears others
        next[userId] = { type, reason: current.reason || '', absentReason: current.absentReason || '' };
      } else {
        next[userId] = { type: null, reason: '', absentReason: '' };
      }
      return next;
    });
  };

  const updateReason = (userId, field, value) => {
    setDailySelections((prev) => ({
      ...prev,
      [userId]: { type: prev[userId]?.type || null, reason: field === 'reason' ? value : (prev[userId]?.reason || ''), absentReason: field === 'absentReason' ? value : (prev[userId]?.absentReason || '') }
    }));
  };

  // Selection counts for summary chips
  const selectionCounts = React.useMemo(() => {
    const counts = { absent: 0, pto: 0, ncns: 0 };
    Object.values(dailySelections || {}).forEach((sel) => {
      if (sel?.type === 'absent') counts.absent += 1;
      if (sel?.type === 'pto') counts.pto += 1;
      if (sel?.type === 'ncns') counts.ncns += 1;
    });
    return counts;
  }, [dailySelections]);

  // Bulk helpers for column toolbars
  const selectAllOfType = (type) => {
    if (!['absent', 'pto', 'ncns'].includes(type)) return;
    setDailySelections((prev) => {
      const next = { ...prev };
      modalFilteredUsers.forEach((u) => {
        next[u.id] = {
          type,
          reason: prev[u.id]?.reason || '',
          absentReason: type === 'absent' ? (prev[u.id]?.absentReason || '') : ''
        };
      });
      return next;
    });
  };

  const clearAllOfType = (type) => {
    if (!['absent', 'pto', 'ncns'].includes(type)) return;
    setDailySelections((prev) => {
      const next = { ...prev };
      modalFilteredUsers.forEach((u) => {
        if (next[u.id]?.type === type) {
          next[u.id] = { type: null, reason: '', absentReason: '' };
        }
      });
      return next;
    });
  };

  // Keyboard navigation for rows: Up/Down to move focus, Space to toggle
  const handleRowKeyDown = (e, type, userId) => {
    const key = e.key;
    if (key === ' ' || key === 'Spacebar') {
      e.preventDefault();
      const isActive = dailySelections[userId]?.type === type;
      toggleSelection(userId, type, !isActive);
      return;
    }
    if (key === 'ArrowDown' || key === 'ArrowUp') {
      e.preventDefault();
      const rows = e.currentTarget?.parentElement?.querySelectorAll('[data-row="true"]');
      if (!rows || rows.length === 0) return;
      const currentIndex = Array.prototype.indexOf.call(rows, e.currentTarget);
      const nextIndex = key === 'ArrowDown' ? Math.min(currentIndex + 1, rows.length - 1) : Math.max(currentIndex - 1, 0);
      const nextEl = rows[nextIndex];
      if (nextEl && typeof nextEl.focus === 'function') nextEl.focus();
    }
  };

  const handleSubmitDayMarkings = async () => {
    if (!absenceDate) {
      toast.error('Please select a date');
      return;
    }

    try {
      const batch = writeBatch(db);
      const timestampStr = new Date().toISOString();

      // Build map of existing absences for comparison
      const existing = absencesByDate[absenceDate] || [];
      const existingByUser = new Map(existing.map((a) => [a.userId, a]));

      // For each user in filtered list, decide whether to set or delete
      const affectedUserIds = new Set([
        ...filteredUsers.map((u) => u.id),
        ...Object.keys(dailySelections || {})
      ]);

      affectedUserIds.forEach((uid) => {
        const sel = dailySelections[uid];
        const absenceId = `${uid}_${absenceDate}`;
        if (sel && sel.type) {
          const data = {
            userId: uid,
            date: absenceDate,
            type: sel.type,
            reason: sel.reason || '',
            absentReason: sel.type === 'absent' ? (sel.absentReason || '') : '',
            markedBy: userData?.uid || 'system',
            markedByName: userData?.name || userData?.displayName || 'Admin',
            timestamp: timestampStr,
            status: 'approved'
          };
          batch.set(doc(db, 'absences', absenceId), data);
        } else if (existingByUser.has(uid)) {
          // Was previously set but now cleared -> delete
          batch.delete(doc(db, 'absences', absenceId));
        }
      });

      await batch.commit();

      // Reflect in local calendar state
      setAbsencesByDate((prev) => {
        const copy = { ...prev };
        const entries = [];
        Object.entries(dailySelections).forEach(([uid, sel]) => {
          if (sel && sel.type) {
            entries.push({ id: `${uid}_${absenceDate}`, userId: uid, type: sel.type, reason: sel.reason || '', absentReason: sel.absentReason || '' });
          }
        });
        copy[absenceDate] = entries;
        if (entries.length === 0) delete copy[absenceDate];
        return copy;
      });

      toast.success('Day markings saved');
      setShowDayMarkModal(false);
      setDailySelections({});
    } catch (e) {
      console.error('Failed to save day markings:', e);
      toast.error('Failed to save day markings');
    }
  };

  const selectedUserAbsenceType = (dateStr) => {
    if (!selectedUser) return null;
    const list = absencesByDate[dateStr];
    if (!Array.isArray(list)) return null;
    const entry = list.find(a => a.userId === selectedUser.id);
    return entry?.type || null;
  };

  const handleDeleteSelectedUserAbsence = async (dateStr) => {
    if (!selectedUser) return;
    try {
      const id = `${selectedUser.id}_${dateStr}`;
      await deleteDoc(doc(db, 'absences', id));
      setAbsencesByDate(prev => {
        const copy = { ...prev };
        const arr = (copy[dateStr] || []).filter(a => a.userId !== selectedUser.id);
        if (arr.length > 0) copy[dateStr] = arr; else delete copy[dateStr];
        return copy;
      });
      toast.success('Removed absence for selected user');
    } catch (e) {
      console.error('Failed to delete absence:', e);
      toast.error('Failed to delete absence');
    }
  };

  // Delete any absence by its document id (used by per-badge X button)
  const handleDeleteAbsence = async (dateStr, absenceId) => {
    try {
      await deleteDoc(doc(db, 'absences', absenceId));
      setAbsencesByDate(prev => {
        const copy = { ...prev };
        const arr = (copy[dateStr] || []).filter(a => a.id !== absenceId);
        if (arr.length > 0) copy[dateStr] = arr; else delete copy[dateStr];
        return copy;
      });
      toast.success('Removed absence');
    } catch (e) {
      console.error('Failed to delete absence:', e);
      toast.error('Failed to delete absence');
    }
  };

  if (loading) {
    return (
      <Container>
        <LoadingMessage>Loading department users...</LoadingMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Manager Functions</Title>
      <Description>
        Manage users in your department: schedules, absences, and PTO.
      </Description>
      
      {adminDepartments.length === 0 ? (
        <NoDataMessage>
          You are not assigned to any departments. Contact a super admin to assign you to departments.
        </NoDataMessage>
      ) : (
        <>
          <TabsBar>
            <TabButton active={activeTab === 'absences'} onClick={() => setActiveTab('absences')}>
              Absences / PTO / NCNS
            </TabButton>
            <TabButton active={activeTab === 'schedule'} onClick={() => setActiveTab('schedule')}>
              Schedule
            </TabButton>
          </TabsBar>
          <ControlsBar>
            <SearchInput
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {adminDepartments.length > 1 && (
              <DeptFilterSelect
                value={selectedDeptId}
                onChange={(e) => setSelectedDeptId(e.target.value)}
                title="Filter by department"
              >
                <option value="all">All Departments</option>
                {deptOptions.map(d => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </DeptFilterSelect>
            )}

      {/* Per-Type List Modal for a Day */}
      {showTypeListModal && (
        <Modal>
          <TypeListModalContent>
            <ModalHeader>
              <h3>
                {formatLongDate(typeListDate)} · {typeListType === 'absent' ? 'Absent' : typeListType === 'pto' ? 'PTO' : 'No Call No Show'}
              </h3>
              <CloseButton onClick={() => setShowTypeListModal(false)}>
                <X size={20} />
              </CloseButton>
            </ModalHeader>

            <ModalBody>
              <TypeListHeader>
                <span>Members</span>
                <span style={{ color: '#666' }}>{Object.keys(typeListEdits).length} total</span>
              </TypeListHeader>
              <TypeList>
                {Object.keys(typeListEdits).length === 0 ? (
                  <NoDataMessage>No members for this tag.</NoDataMessage>
                ) : (
                  Object.entries(typeListEdits).map(([uid, sel]) => (
                    <TypeListRow key={uid}>
                      <TypeListName>{userById[uid]?.name || uid}</TypeListName>
                      <TypeListControls>
                        <Select
                          value={sel.type}
                          onChange={(e) => updateTypeListField(uid, 'type', e.target.value)}
                        >
                          <option value="absent">Absent</option>
                          <option value="pto">PTO</option>
                          <option value="ncns">NCNS</option>
                        </Select>
                        {sel.type === 'absent' && (
                          <Select
                            value={sel.absentReason || ''}
                            onChange={(e) => updateTypeListField(uid, 'absentReason', e.target.value)}
                          >
                            <option value="">Type</option>
                            <option value="medical">Medical</option>
                            <option value="emergency">Emergency</option>
                            <option value="personal">Personal</option>
                            <option value="transportation">Transportation/Inclement Weather</option>
                            <option value="maternity">Maternity/Paternity Leave</option>
                            <option value="others">Others</option>
                          </Select>
                        )}
                        <Input
                          type="text"
                          placeholder="Reason (Optional)"
                          value={sel.reason || ''}
                          onChange={(e) => updateTypeListField(uid, 'reason', e.target.value)}
                        />
                      </TypeListControls>
                      <TypeListActions>
                        <InlineButton onClick={() => saveTypeListRow(uid)}>Save</InlineButton>
                        <InlineButton onClick={() => deleteTypeListRow(uid)} style={{ borderColor: '#f5c2c2', background: '#ffecec' }}>Delete</InlineButton>
                      </TypeListActions>
                    </TypeListRow>
                  ))
                )}
              </TypeList>
            </ModalBody>

            <ModalFooter>
              <CancelButton onClick={() => setShowTypeListModal(false)}>Close</CancelButton>
            </ModalFooter>
          </TypeListModalContent>
        </Modal>
      )}
          </ControlsBar>
          {activeTab === 'absences' && (
            <>
          <SectionHeader>
            <SectionTitle>
              <Users size={20} />
              Department Users ({filteredUsers.length})
            </SectionTitle>
          </SectionHeader>
          
          {filteredUsers.length === 0 ? (
            <NoDataMessage>
              No matching users. Try adjusting search or department filters.
            </NoDataMessage>
          ) : (
            <CalendarContainer>
              <CalendarHeader>
                <MonthNav>
                  <MonthButton onClick={() => handleMonthChange(-1)}>Prev</MonthButton>
                  <MonthTitle>{monthTitle(calendarDate)}</MonthTitle>
                  <MonthButton onClick={() => handleMonthChange(1)}>Next</MonthButton>
                </MonthNav>
                <CalendarToolbar>
                  <strong>User:</strong>
                  <CalendarUserSelect
                    value={selectedUser?.id || ''}
                    onChange={(e) => {
                      const uid = e.target.value;
                      const found = filteredUsers.find(u => u.id === uid) || null;
                      setSelectedUser(found);
                    }}
                  >
                    <option value="">Select user</option>
                    {filteredUsers.map(u => (
                      <option key={u.id} value={u.id}>{u.name}</option>
                    ))}
                  </CalendarUserSelect>
                </CalendarToolbar>
              </CalendarHeader>

              <CalendarGrid>
                {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
                  <DayHeaderCell key={d}>{d}</DayHeaderCell>
                ))}
                {(() => {
                  const y = calendarDate.getFullYear();
                  const m = calendarDate.getMonth();
                  const first = new Date(y, m, 1);
                  const startOffset = weekDayMondayIndex(first.getDay());
                  const daysInMonth = new Date(y, m + 1, 0).getDate();
                  const cells = [];
                  for (let i = 0; i < startOffset; i++) cells.push(null);
                  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(y, m, d));
                  return cells.map((cell, idx) => {
                    if (!cell) return <DayCell key={`e-${idx}`} />;
                    const dateStr = formatDateYYYYMMDD(cell);
                    const entries = absencesByDate[dateStr] || [];
                    const total = entries.length;
                    return (
                      <DayCell 
                        key={dateStr} 
                        onClick={() => onDayClick(dateStr)}
                        $isToday={dateStr === formatDateYYYYMMDD(new Date())}
                      >
                        <DayCellTop>
                          <DayNumber $isToday={dateStr === formatDateYYYYMMDD(new Date())}>
                            {cell.getDate()}
                          </DayNumber>
                          {total > 0 && (
                            <AbsenceCount title={`${total} absence(s) on this day`}>{total}</AbsenceCount>
                          )}
                        </DayCellTop>
                        <DayCellBody>
                          {(() => {
                            const counts = { absent: 0, pto: 0, ncns: 0 };
                            entries.forEach((e) => {
                              if (e?.type === 'absent') counts.absent += 1;
                              else if (e?.type === 'pto') counts.pto += 1;
                              else if (e?.type === 'ncns') counts.ncns += 1;
                            });
                            const out = [];
                            if (counts.absent > 0) {
                              out.push(
                                <TypeTag
                                  key={`${dateStr}-absent`}
                                  $type="absent"
                                  onClick={(e) => { e.stopPropagation(); openTypeListModal(dateStr, 'absent'); }}
                                  title="View Absent list"
                                >
                                  Absent <CountBadge>{counts.absent}</CountBadge>
                                </TypeTag>
                              );
                            }
                            if (counts.pto > 0) {
                              out.push(
                                <TypeTag
                                  key={`${dateStr}-pto`}
                                  $type="pto"
                                  onClick={(e) => { e.stopPropagation(); openTypeListModal(dateStr, 'pto'); }}
                                  title="View PTO list"
                                >
                                  PTO <CountBadge>{counts.pto}</CountBadge>
                                </TypeTag>
                              );
                            }
                            if (counts.ncns > 0) {
                              out.push(
                                <TypeTag
                                  key={`${dateStr}-ncns`}
                                  $type="ncns"
                                  onClick={(e) => { e.stopPropagation(); openTypeListModal(dateStr, 'ncns'); }}
                                  title="View NCNS list"
                                >
                                  NCNS <CountBadge>{counts.ncns}</CountBadge>
                                </TypeTag>
                              );
                            }
                            return out;
                          })()}
                        </DayCellBody>
                      </DayCell>
                    );
                  });
                })()}
              </CalendarGrid>
            </CalendarContainer>
          )}
            </>
          )}

          {activeTab === 'schedule' && (
            <>
              <SectionHeader>
                <SectionTitle>
                  <Calendar size={20} />
                  Department Schedule
                </SectionTitle>
              </SectionHeader>

              <DeptFiltersBar>
                <div className="left">
                  <div className="left-header">
                    <div className="label">
                      <Users size={18} /> Departments
                      <span className="count">{selectedScheduleDeptIds.length}/{deptOptions.length}</span>
                    </div>
                    <div className="actions">
                      <button type="button" className="link" onClick={selectAllScheduleDepts}>Select all</button>
                      <span className="sep">•</span>
                      <button type="button" className="link" onClick={clearAllScheduleDepts}>Clear</button>
                    </div>
                  </div>
                  <div className={`chips ${deptOptions.length > 6 ? 'chips-scroll' : ''}`}>
                    {deptOptions.length === 0 ? (
                      <span className="hint">No departments assigned</span>
                    ) : (
                      deptOptions.map(dep => (
                        <label key={dep.id} className={`chip ${selectedScheduleDeptIds.includes(dep.id) ? 'active' : ''}`}>
                          <input
                            type="checkbox"
                            checked={selectedScheduleDeptIds.includes(dep.id)}
                            onChange={() => toggleScheduleDept(dep.id)}
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
                    <div className="view-toggle">
                      <button
                        type="button"
                        className={`toggle-btn ${showVisualSchedule ? 'active' : ''}`}
                        onClick={() => setShowVisualSchedule(true)}
                        title="Timeline"
                        aria-pressed={showVisualSchedule}
                      >
                        <ChartLine size={18} />
                      </button>
                      <button
                        type="button"
                        className={`toggle-btn ${!showVisualSchedule ? 'active' : ''}`}
                        onClick={() => setShowVisualSchedule(false)}
                        title="Table"
                        aria-pressed={!showVisualSchedule}
                      >
                        <Table size={18} />
                      </button>
                    </div>
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
              </DeptFiltersBar>

              {selectedScheduleDeptIds.length === 0 ? (
                <NoDataMessage>No Departments Selected</NoDataMessage>
              ) : scheduleDeptUsers.length === 0 ? (
                <NoDataMessage>No Department Members Found</NoDataMessage>
              ) : (
                <>
                  {showVisualSchedule ? (
                    <DeptScheduleGrid>
                      <div className="grid-header">Name</div>
                      <div className="grid-header">Sun</div>
                      <div className="grid-header">Mon</div>
                      <div className="grid-header">Tue</div>
                      <div className="grid-header">Wed</div>
                      <div className="grid-header">Thu</div>
                      <div className="grid-header">Fri</div>
                      <div className="grid-header">Sat</div>

                      {scheduleDeptUsers.map((u) => {
                        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                        const sched = (userSchedules[u.id]?.schedule) || [];
                        const converted = Array.isArray(sched)
                          ? sched.map(s => {
                              const tz = s.timeRegion || u.timeRegion || 'Asia/Manila';
                              const conv = convertScheduleToTimezone(s, tz, deptDisplayTimeZone);
                              return { ...s, ...conv, _tz: tz };
                            })
                          : [];
                        return (
                          <React.Fragment key={u.id}>
                            <div className="grid-name">
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                  <div style={{ fontWeight: 600 }}>{u.name}</div>
                                  <div style={{ fontSize: '0.8rem', color: '#666' }}>{u.position || 'Staff'}</div>
                                </div>
                                <InlineButton type="button" onClick={() => openScheduleModal(u)}>Edit</InlineButton>
                              </div>
                            </div>
                            {days.map((dayName, dayIndex) => {
                              const items = converted.filter(s => s.convertedDayOfWeek === dayName);
                              const prevDayName = days[(dayIndex - 1 + 7) % 7];
                              const prevDayItems = converted.filter(s => s.convertedDayOfWeek === prevDayName).filter(s => {
                                const tin = formatTime(s.timeIn, s._tz, deptDisplayTimeZone);
                                const toutRaw = calculateEndTime(s.timeIn, s.shiftDuration || 8);
                                const tout = formatTime(toutRaw, s._tz, deptDisplayTimeZone);
                                const startPos = getTimePosition(tin);
                                const endPos = getTimePosition(tout);
                                return endPos < startPos; // overnight shift spills into current day
                              });
                              return (
                                <div key={`${u.id}-${dayName}`} className="grid-day">
                                  {items.map((s, idx) => {
                                    const tin = formatTime(s.timeIn, s._tz, deptDisplayTimeZone);
                                    const toutRaw = calculateEndTime(s.timeIn, s.shiftDuration || 8);
                                    const tout = formatTime(toutRaw, s._tz, deptDisplayTimeZone);
                                    const startPos = getTimePosition(tin);
                                    const endPos = getTimePosition(tout);
                                    if (endPos < startPos) {
                                      const todayWidth = 100 - startPos;
                                      return (
                                        <DeptScheduleBlock
                                          key={`${idx}-overnight`}
                                          startPos={startPos}
                                          width={todayWidth}
                                          title={`${tin} - ${tout} (overnight)`}
                                          data-testid="overnight-block"
                                        />
                                      );
                                    }
                                    return (
                                      <DeptScheduleBlock
                                        key={idx}
                                        startPos={startPos}
                                        width={Math.max(endPos - startPos, 2)}
                                        title={`${tin} - ${tout}`}
                                      />
                                    );
                                  })}
                                  {prevDayItems.map((s, idx) => {
                                    const toutRaw = calculateEndTime(s.timeIn, s.shiftDuration || 8);
                                    const tout = formatTime(toutRaw, s._tz, deptDisplayTimeZone);
                                    const endPos = getTimePosition(tout);
                                    return (
                                      <DeptScheduleBlock
                                        key={`overflow-${idx}`}
                                        startPos={0}
                                        width={Math.max(endPos, 2)}
                                        title={`${formatTime(s.timeIn, s._tz, deptDisplayTimeZone)} - ${tout} (from previous day)`}
                                      />
                                    );
                                  })}
                                </div>
                              );
                            })}
                          </React.Fragment>
                        );
                      })}
                    </DeptScheduleGrid>
                  ) : (
                    <DeptScheduleTable>
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
                          <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scheduleDeptUsers.map((u) => {
                          const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                          const sched = (userSchedules[u.id]?.schedule) || [];
                          const dayCells = days.map((day) => {
                            const items = sched.filter(s => s.dayOfWeek === day);
                            if (items.length === 0) return <td key={`${u.id}-${day}`} style={{ color: '#999' }}>—</td>;
                            return (
                              <td key={`${u.id}-${day}`}>
                                {items.map((s, idx) => (
                                  <div key={idx} style={{ whiteSpace: 'nowrap' }}>
                                    {formatTime(s.timeIn, s.timeRegion || u.timeRegion || 'Asia/Manila', deptDisplayTimeZone)}
                                    {' '} - {' '}
                                    {formatTime(calculateEndTime(s.timeIn, s.shiftDuration || 8), s.timeRegion || u.timeRegion || 'Asia/Manila', deptDisplayTimeZone)}
                                  </div>
                                ))}
                              </td>
                            );
                          });
                          return (
                            <tr key={u.id}>
                              <td>
                                <div style={{ fontWeight: 600 }}>{u.name}</div>
                                <div style={{ fontSize: '0.85rem', color: '#666' }}>{u.position || 'Staff'}</div>
                              </td>
                              {dayCells}
                              <td style={{ textAlign: 'right' }}>
                                <InlineButton type="button" onClick={() => openScheduleModal(u)}>Edit</InlineButton>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </DeptScheduleTable>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
      
      {/* Absence/PTO Modal */}
      {showAbsenceModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h3>Mark {absenceType === 'pto' ? 'PTO' : 'Absence'} for {selectedUser?.name}</h3>
              <CloseButton onClick={() => setShowAbsenceModal(false)}>
                <X size={20} />
              </CloseButton>
            </ModalHeader>
            
            <ModalBody>
              <FormGroup>
                <Label>Date</Label>
                <InlineInputRow>
                  <Input
                    type="date"
                    value={absenceDate}
                    onChange={(e) => setAbsenceDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  <InlineButton
                    type="button"
                    onClick={() => setAbsenceDate(new Date().toISOString().split('T')[0])}
                    title="Set to today"
                  >
                    Today
                  </InlineButton>
                </InlineInputRow>
              </FormGroup>
              
              <FormGroup>
                <Label>Type</Label>
                <Select value={absenceType} onChange={(e) => setAbsenceType(e.target.value)}>
                  <option value="absent">Absent</option>
                  <option value="pto">PTO (Paid Time Off)</option>
                  <option value="ncns">No Call No Show (NCNS)</option>
                </Select>
              </FormGroup>
              
              {absenceType === 'absent' && (
                <FormGroup>
                  <Label>Absent Reason</Label>
                  <Select value={absentReason} onChange={(e) => setAbsentReason(e.target.value)}>
                    <option value="">Select reason...</option>
                    <option value="medical">Medical</option>
                    <option value="emergency">Emergency</option>
                    <option value="personal">Personal</option>
                    <option value="transportation">Transportation/Inclement Weather</option>
                    <option value="maternity">Maternity/Paternity Leave</option>
                    <option value="others">Others</option>
                  </Select>
                </FormGroup>
              )}
              
              <FormGroup>
                <Label>Reason (Optional)</Label>
                <TextArea
                  value={absenceReason}
                  onChange={(e) => setAbsenceReason(e.target.value)}
                  placeholder="Enter reason for absence/PTO..."
                  rows={3}
                />
              </FormGroup>
            </ModalBody>
            
            <ModalFooter>
              <CancelButton onClick={() => setShowAbsenceModal(false)}>Cancel</CancelButton>
              <SubmitButton onClick={handleMarkAbsence}>Mark {absenceType === 'pto' ? 'PTO' : 'Absence'}</SubmitButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

      {/* Schedule Editing Modal */}
      {showScheduleModal && (
        <Modal>
          <ScheduleModalContent>
            <ModalHeader>
              <ModalTitle>
                Edit Schedule{selectedUser ? ` • ${selectedUser.name}` : ''}
              </ModalTitle>
              <CloseButton onClick={() => setShowScheduleModal(false)}>
                <X size={20} />
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              <ScheduleSummary>
                <div>
                  <strong>Total Shifts:</strong> {scheduleData.length}
                </div>
                <div>
                  <strong>Total Hours:</strong> {calculateTotalHours(scheduleData)} hours/week
                </div>
              </ScheduleSummary>

              <ScheduleModalBody>
                <ScheduleColumn>
                  <ColumnTitle>Current Schedule</ColumnTitle>
                  {scheduleData.length > 0 ? (
                    <ScheduleListContainer>
                      <ScheduleGrid>
                        {scheduleData.map(schedule => (
                          <ScheduleCard key={schedule.id}>
                            <ScheduleHeader>
                              <ScheduleDay>{schedule.dayOfWeek}</ScheduleDay>
                              <ScheduleActions>
                                <ScheduleActionButton 
                                  onClick={() => handleEditSchedule(schedule)}
                                  title="Edit schedule"
                                >
                                  <Pencil size={16} />
                                </ScheduleActionButton>
                                <ScheduleActionButton 
                                  onClick={() => handleDeleteSchedule(schedule.id)}
                                  title="Delete schedule"
                                  $danger
                                >
                                  <X size={16} />
                                </ScheduleActionButton>
                              </ScheduleActions>
                            </ScheduleHeader>
                            <ScheduleTime>
                              <div><strong>Time In:</strong> {schedule.timeIn}</div>
                              <div><strong>Region:</strong> {schedule.timeRegion}</div>
                              <div><strong>Duration:</strong> {formatDuration(schedule.shiftDuration)}</div>
                            </ScheduleTime>
                          </ScheduleCard>
                        ))}
                      </ScheduleGrid>
                    </ScheduleListContainer>
                  ) : (
                    <NoScheduleMessage>No schedules found. Add a new schedule.</NoScheduleMessage>
                  )}
                </ScheduleColumn>

                <ScheduleColumn>
                  <ColumnTitle>{isEditing ? 'Edit Schedule' : 'Add New Schedule'}</ColumnTitle>

                  <FormGroup>
                    <Label>Days of Week (select multiple)</Label>
                    <DaysContainer>
                      {daysOfWeek.map(day => (
                        <DayCheckbox key={day}>
                          <input
                            type="checkbox"
                            id={`day-${day}`}
                            checked={newSchedule.selectedDays.includes(day)}
                            onChange={() => {
                              const updatedDays = newSchedule.selectedDays.includes(day)
                                ? newSchedule.selectedDays.filter(d => d !== day)
                                : [...newSchedule.selectedDays, day];
                              setNewSchedule({...newSchedule, selectedDays: updatedDays});
                            }}
                          />
                          <label htmlFor={`day-${day}`}>{day}</label>
                        </DayCheckbox>
                      ))}
                    </DaysContainer>
                  </FormGroup>

                  <ScheduleInputRow>
                    <FormGroup>
                      <Label>Time In</Label>
                      <Input 
                        type="time" 
                        value={newSchedule.timeIn}
                        onChange={(e) => setNewSchedule({...newSchedule, timeIn: e.target.value})}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Shift Duration</Label>
                      <DurationRow>
                        <DurationInput>
                          <SmallLabel>Hours</SmallLabel>
                          <Input 
                            type="number" 
                            min="0" 
                            max="24" 
                            value={newSchedule.shiftHours}
                            onChange={(e) => setNewSchedule({...newSchedule, shiftHours: e.target.value})}
                          />
                        </DurationInput>
                        <DurationInput>
                          <SmallLabel>Minutes</SmallLabel>
                          <Input 
                            type="number" 
                            min="0" 
                            max="59" 
                            value={newSchedule.shiftMinutes}
                            onChange={(e) => setNewSchedule({...newSchedule, shiftMinutes: e.target.value})}
                          />
                        </DurationInput>
                      </DurationRow>
                    </FormGroup>
                  </ScheduleInputRow>

                  <FormGroup>
                    <Label>Time Region</Label>
                    <Select 
                      value={newSchedule.timeRegion}
                      onChange={(e) => setNewSchedule({...newSchedule, timeRegion: e.target.value})}
                    >
                      <optgroup label="Asia & Pacific">
                        <option value="Asia/Manila">Asia/Manila (PHT)</option>
                        <option value="Asia/Singapore">Asia/Singapore (SGT)</option>
                        <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
                        <option value="Australia/Sydney">Australia/Sydney (AEST/AEDT)</option>
                      </optgroup>
                      <optgroup label="Americas">
                        <option value="America/New_York">America/New_York (Eastern)</option>
                        <option value="America/Chicago">America/Chicago (Central)</option>
                        <option value="America/Denver">America/Denver (Mountain)</option>
                        <option value="America/Los_Angeles">America/Los_Angeles (Pacific)</option>
                        <option value="America/Anchorage">America/Anchorage (Alaska)</option>
                        <option value="America/Adak">America/Adak (Hawaii-Aleutian)</option>
                        <option value="Pacific/Honolulu">Pacific/Honolulu (Hawaii)</option>
                        <option value="America/Phoenix">America/Phoenix (Arizona)</option>
                        <option value="America/Toronto">America/Toronto (Eastern Canada)</option>
                        <option value="America/Vancouver">America/Vancouver (Pacific Canada)</option>
                      </optgroup>
                      <optgroup label="Europe & Africa">
                        <option value="Europe/London">Europe/London (GMT/BST)</option>
                        <option value="Europe/Paris">Europe/Paris (CET/CEST)</option>
                        <option value="Europe/Berlin">Europe/Berlin (CET/CEST)</option>
                        <option value="Europe/Moscow">Europe/Moscow (MSK)</option>
                      </optgroup>
                    </Select>
                  </FormGroup>

                  <ScheduleButtonGroup>
                    {isEditing ? (
                      <>
                        <SubmitButton onClick={handleUpdateSchedule}>
                          Update Schedule
                        </SubmitButton>
                        <CancelButton onClick={cancelEdit}>
                          Cancel Edit
                        </CancelButton>
                      </>
                    ) : (
                      <SubmitButton onClick={handleAddSchedule}>
                        Add Schedule
                      </SubmitButton>
                    )}
                  </ScheduleButtonGroup>
                </ScheduleColumn>
              </ScheduleModalBody>
            </ModalBody>
            <ModalFooter>
              <CancelButton onClick={() => selectedUser && setScheduleData((userSchedules[selectedUser.id]?.schedule) || [])}>Discard Changes</CancelButton>
              <SubmitButton onClick={handleSaveSchedule}>Save Changes</SubmitButton>
            </ModalFooter>
          </ScheduleModalContent>
        </Modal>
      )}

      {/* Day Mark Modal (Absent / PTO / NCNS) */}
      {showDayMarkModal && (
        <Modal>
          <DayMarkModalContent>
            <ModalHeader>
              <h3>{formatLongDate(absenceDate)}</h3>
              <CloseButton onClick={() => setShowDayMarkModal(false)}>
                <X size={20} />
              </CloseButton>
            </ModalHeader>

            <ModalBody>
              <DayMarkToolbar>
                <DayMarkSearchInput
                  type="text"
                  placeholder="Search members by name, email, or position..."
                  value={dayMarkSearch}
                  onChange={(e) => setDayMarkSearch(e.target.value)}
                />
              </DayMarkToolbar>
              <SummaryBar>
                <SummaryLeft>
                  <strong>{modalFilteredUsers.length}</strong> member(s) shown
                </SummaryLeft>
                <SummaryChips>
                  <SummaryChip $type="absent" title="Selected Absent">{selectionCounts.absent} Absent</SummaryChip>
                  <SummaryChip $type="pto" title="Selected PTO">{selectionCounts.pto} PTO</SummaryChip>
                  <SummaryChip $type="ncns" title="Selected NCNS">{selectionCounts.ncns} NCNS</SummaryChip>
                </SummaryChips>
              </SummaryBar>
              <DayMarkGrid>
                <DayMarkColumn $variant="absent">
                  <DayMarkColumnHeader $variant="absent">
                    <DayMarkTitle>Absent</DayMarkTitle>
                    <ColumnToolbar>
                      <InlineButton type="button" onClick={() => selectAllOfType('absent')}>Select all</InlineButton>
                      <InlineButton type="button" onClick={() => clearAllOfType('absent')}>Clear</InlineButton>
                      <ColumnCount title="Selected in column">{selectionCounts.absent}</ColumnCount>
                    </ColumnToolbar>
                  </DayMarkColumnHeader>
                  <DayMarkList>
                    {modalFilteredUsers.map((u) => {
                      const active = dailySelections[u.id]?.type === 'absent';
                      return (
                        <DayMarkRow
                          key={`abs-${u.id}`}
                          $active={active}
                          tabIndex={0}
                          role="checkbox"
                          aria-checked={active}
                          data-row="true"
                          onKeyDown={(e) => handleRowKeyDown(e, 'absent', u.id)}
                          onClick={(e) => {
                            if (['INPUT','SELECT','TEXTAREA','BUTTON','LABEL'].includes(e.target.tagName)) return;
                            toggleSelection(u.id, 'absent', !active);
                          }}
                        >
                          <Checkbox
                            checked={active}
                            onChange={(e) => toggleSelection(u.id, 'absent', e.target.checked)}
                          />
                          <NameField>{u.name}</NameField>
                          <Select
                            disabled={!active}
                            value={dailySelections[u.id]?.absentReason || ''}
                            onChange={(e) => updateReason(u.id, 'absentReason', e.target.value)}
                          >
                            <option value="">Type</option>
                            <option value="medical">Medical</option>
                            <option value="emergency">Emergency</option>
                            <option value="personal">Personal</option>
                            <option value="transportation">Transportation/Inclement Weather</option>
                            <option value="maternity">Maternity/Paternity Leave</option>
                            <option value="others">Others</option>
                          </Select>
                          <Input
                            type="text"
                            placeholder="Reason (Optional)"
                            disabled={!active}
                            value={dailySelections[u.id]?.reason || ''}
                            onChange={(e) => updateReason(u.id, 'reason', e.target.value)}
                          />
                        </DayMarkRow>
                      );
                    })}
                  </DayMarkList>
                </DayMarkColumn>

                <DayMarkColumn $variant="pto">
                  <DayMarkColumnHeader $variant="pto">
                    <DayMarkTitle>PTO</DayMarkTitle>
                    <ColumnToolbar>
                      <InlineButton type="button" onClick={() => selectAllOfType('pto')}>Select all</InlineButton>
                      <InlineButton type="button" onClick={() => clearAllOfType('pto')}>Clear</InlineButton>
                      <ColumnCount title="Selected in column">{selectionCounts.pto}</ColumnCount>
                    </ColumnToolbar>
                  </DayMarkColumnHeader>
                  <DayMarkList>
                    {modalFilteredUsers.map((u) => {
                      const active = dailySelections[u.id]?.type === 'pto';
                      return (
                        <DayMarkRow
                          key={`pto-${u.id}`}
                          $active={active}
                          tabIndex={0}
                          role="checkbox"
                          aria-checked={active}
                          data-row="true"
                          onKeyDown={(e) => handleRowKeyDown(e, 'pto', u.id)}
                          onClick={(e) => {
                            if (['INPUT','SELECT','TEXTAREA','BUTTON','LABEL'].includes(e.target.tagName)) return;
                            toggleSelection(u.id, 'pto', !active);
                          }}
                        >
                          <Checkbox
                            checked={active}
                            onChange={(e) => toggleSelection(u.id, 'pto', e.target.checked)}
                          />
                          <NameField>{u.name}</NameField>
                          <Input
                            type="text"
                            placeholder="Reason (Optional)"
                            disabled={!active}
                            value={dailySelections[u.id]?.reason || ''}
                            onChange={(e) => updateReason(u.id, 'reason', e.target.value)}
                          />
                        </DayMarkRow>
                      );
                    })}
                  </DayMarkList>
                </DayMarkColumn>

                <DayMarkColumn $variant="ncns">
                  <DayMarkColumnHeader $variant="ncns">
                    <DayMarkTitle>No Call No Show</DayMarkTitle>
                    <ColumnToolbar>
                      <InlineButton type="button" onClick={() => selectAllOfType('ncns')}>Select all</InlineButton>
                      <InlineButton type="button" onClick={() => clearAllOfType('ncns')}>Clear</InlineButton>
                      <ColumnCount title="Selected in column">{selectionCounts.ncns}</ColumnCount>
                    </ColumnToolbar>
                  </DayMarkColumnHeader>
                  <DayMarkList>
                    {modalFilteredUsers.map((u) => {
                      const active = dailySelections[u.id]?.type === 'ncns';
                      return (
                        <DayMarkRow
                          key={`ncns-${u.id}`}
                          $active={active}
                          tabIndex={0}
                          role="checkbox"
                          aria-checked={active}
                          data-row="true"
                          onKeyDown={(e) => handleRowKeyDown(e, 'ncns', u.id)}
                          onClick={(e) => {
                            if (['INPUT','SELECT','TEXTAREA','BUTTON','LABEL'].includes(e.target.tagName)) return;
                            toggleSelection(u.id, 'ncns', !active);
                          }}
                        >
                          <Checkbox
                            checked={active}
                            onChange={(e) => toggleSelection(u.id, 'ncns', e.target.checked)}
                          />
                          <NameField>{u.name}</NameField>
                        </DayMarkRow>
                      );
                    })}
                  </DayMarkList>
                </DayMarkColumn>
              </DayMarkGrid>
            </ModalBody>

            <ModalFooter>
              <CancelButton onClick={() => setShowDayMarkModal(false)}>Cancel</CancelButton>
              <SubmitButton onClick={handleSubmitDayMarkings}>Submit</SubmitButton>
            </ModalFooter>
          </DayMarkModalContent>
        </Modal>
      )}
      
      {/* Bulk Absence/PTO Modal */}
      {showBulkAbsenceModal && (
        <Modal>
          <BulkModalContent>
            <ModalHeader>
              <h3>Mark Absences/PTO/Sick for Multiple Users</h3>
              <CloseButton onClick={() => setShowBulkAbsenceModal(false)}>
                <X size={20} />
              </CloseButton>
            </ModalHeader>

            <ModalBody>
              <FormGroup>
                <Label>Date</Label>
                <Input
                  type="date"
                  value={absenceDate}
                  onChange={(e) => setAbsenceDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </FormGroup>

              <FormGroup>
                <Label>Type</Label>
                <Select value={bulkAbsenceType} onChange={(e) => setBulkAbsenceType(e.target.value)}>
                  <option value="absent">Absent</option>
                  <option value="pto">PTO (Paid Time Off)</option>
                  <option value="ncns">No Call No Show (NCNS)</option>
                </Select>
              </FormGroup>
              
              {bulkAbsenceType === 'absent' && (
                <FormGroup>
                  <Label>Absent Reason</Label>
                  <Select value={bulkAbsentReason} onChange={(e) => setBulkAbsentReason(e.target.value)}>
                    <option value="">Select reason...</option>
                    <option value="medical">Medical</option>
                    <option value="emergency">Emergency</option>
                    <option value="personal">Personal</option>
                    <option value="transportation">Transportation/Inclement Weather</option>
                    <option value="maternity">Maternity/Paternity Leave</option>
                    <option value="others">Others</option>
                  </Select>
                </FormGroup>
              )}

              <FormGroup>
                <Label>Reason (Optional)</Label>
                <TextArea
                  value={bulkAbsenceReason}
                  onChange={(e) => setBulkAbsenceReason(e.target.value)}
                  placeholder="Enter reason for absence/PTO..."
                  rows={3}
                />
              </FormGroup>

              <FormGroup>
                <Label>Select Users (respects search and department filters)</Label>
                <BulkToolbar>
                  <SmallHelper>{filteredUsers.length} user(s) shown</SmallHelper>
                  <InlineButton type="button" onClick={() => setBulkSelectedUserIds(filteredUsers.map(u => u.id))}>Select all</InlineButton>
                  <InlineButton type="button" onClick={() => setBulkSelectedUserIds([])}>Clear</InlineButton>
                </BulkToolbar>
                <BulkUsersList>
                  {filteredUsers.map((u) => (
                    <BulkUserRow key={u.id}>
                      <input
                        type="checkbox"
                        id={`bulk-${u.id}`}
                        checked={bulkSelectedUserIds.includes(u.id)}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setBulkSelectedUserIds((prev) =>
                            checked ? [...new Set([...prev, u.id])] : prev.filter((id) => id !== u.id)
                          );
                        }}
                      />
                      <label htmlFor={`bulk-${u.id}`}>
                        <BulkUserInfo>
                          <strong>{u.name}</strong>
                          <span>{u.email}</span>
                        </BulkUserInfo>
                      </label>
                    </BulkUserRow>
                  ))}
                </BulkUsersList>
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <CancelButton onClick={() => setShowBulkAbsenceModal(false)}>Cancel</CancelButton>
              <SubmitButton onClick={handleBulkMarkAbsences} disabled={bulkSelectedUserIds.length === 0}>
                Mark for {bulkSelectedUserIds.length || 0} user(s)
              </SubmitButton>
            </ModalFooter>
          </BulkModalContent>
        </Modal>
      )}
      
      {/* Schedule Modal */}
      {showScheduleModal && selectedUser && (
        <Modal>
          <ScheduleModalContent>
            <ModalHeader>
              <h3>
                <Calendar size={24} style={{ marginRight: '0.5rem' }} />
                Manage Schedule for {selectedUser.name}
              </h3>
              <CloseButton onClick={() => setShowScheduleModal(false)}>
                <X size={20} />
              </CloseButton>
            </ModalHeader>
            
            <ScheduleSummary>
              <div>
                <strong>Total Shifts:</strong> {scheduleData.length}
              </div>
              <div>
                <strong>Total Hours:</strong> {calculateTotalHours(scheduleData)} hours/week
              </div>
            </ScheduleSummary>
            
            <ScheduleModalBody>
              {/* Left Column - Current Schedule */}
              <ScheduleColumn>
                <ColumnTitle>Current Schedule</ColumnTitle>
                
                {scheduleData.length > 0 ? (
                  <ScheduleListContainer>
                    <ScheduleGrid>
                      {scheduleData.map(schedule => (
                        <ScheduleCard key={schedule.id}>
                          <ScheduleHeader>
                            <ScheduleDay>{schedule.dayOfWeek}</ScheduleDay>
                            <ScheduleActions>
                              <ScheduleActionButton 
                                onClick={() => handleEditSchedule(schedule)}
                                title="Edit schedule"
                              >
                                <Pencil size={16} />
                              </ScheduleActionButton>
                              <ScheduleActionButton 
                                onClick={() => handleDeleteSchedule(schedule.id)}
                                title="Delete schedule"
                                $danger
                              >
                                <X size={16} />
                              </ScheduleActionButton>
                            </ScheduleActions>
                          </ScheduleHeader>
                          <ScheduleTime>
                            <div><strong>Time In:</strong> {schedule.timeIn}</div>
                            <div><strong>Region:</strong> {schedule.timeRegion}</div>
                            <div><strong>Duration:</strong> {formatDuration(schedule.shiftDuration)}</div>
                          </ScheduleTime>
                        </ScheduleCard>
                      ))}
                    </ScheduleGrid>
                  </ScheduleListContainer>
                ) : (
                  <NoScheduleMessage>No schedules found. Add a new schedule.</NoScheduleMessage>
                )}
              </ScheduleColumn>
              
              {/* Right Column - Add/Edit Schedule */}
              <ScheduleColumn>
                <ColumnTitle>{isEditing ? 'Edit Schedule' : 'Add New Schedule'}</ColumnTitle>
                
                <FormGroup>
                  <Label>Days of Week (select multiple)</Label>
                  <DaysContainer>
                    {daysOfWeek.map(day => (
                      <DayCheckbox key={day}>
                        <input
                          type="checkbox"
                          id={`day-${day}`}
                          checked={newSchedule.selectedDays.includes(day)}
                          onChange={() => {
                            const updatedDays = newSchedule.selectedDays.includes(day)
                              ? newSchedule.selectedDays.filter(d => d !== day)
                              : [...newSchedule.selectedDays, day];
                            setNewSchedule({...newSchedule, selectedDays: updatedDays});
                          }}
                        />
                        <label htmlFor={`day-${day}`}>{day}</label>
                      </DayCheckbox>
                    ))}
                  </DaysContainer>
                </FormGroup>
                
                <ScheduleInputRow>
                  <FormGroup>
                    <Label>Time In</Label>
                    <Input 
                      type="time" 
                      value={newSchedule.timeIn}
                      onChange={(e) => setNewSchedule({...newSchedule, timeIn: e.target.value})}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label>Shift Duration</Label>
                    <DurationRow>
                      <DurationInput>
                        <SmallLabel>Hours</SmallLabel>
                        <Input 
                          type="number" 
                          min="0" 
                          max="24" 
                          value={newSchedule.shiftHours}
                          onChange={(e) => setNewSchedule({...newSchedule, shiftHours: e.target.value})}
                        />
                      </DurationInput>
                      <DurationInput>
                        <SmallLabel>Minutes</SmallLabel>
                        <Input 
                          type="number" 
                          min="0" 
                          max="59" 
                          value={newSchedule.shiftMinutes}
                          onChange={(e) => setNewSchedule({...newSchedule, shiftMinutes: e.target.value})}
                        />
                      </DurationInput>
                    </DurationRow>
                  </FormGroup>
                </ScheduleInputRow>
                
                <FormGroup>
                  <Label>Time Region</Label>
                  <Select 
                    value={newSchedule.timeRegion}
                    onChange={(e) => setNewSchedule({...newSchedule, timeRegion: e.target.value})}
                  >
                    <optgroup label="Asia & Pacific">
                      <option value="Asia/Manila">Asia/Manila (PHT)</option>
                      <option value="Asia/Singapore">Asia/Singapore (SGT)</option>
                      <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
                      <option value="Australia/Sydney">Australia/Sydney (AEST/AEDT)</option>
                    </optgroup>
                    <optgroup label="Americas">
                      <option value="America/New_York">America/New_York (Eastern)</option>
                      <option value="America/Chicago">America/Chicago (Central)</option>
                      <option value="America/Denver">America/Denver (Mountain)</option>
                      <option value="America/Los_Angeles">America/Los_Angeles (Pacific)</option>
                      <option value="America/Anchorage">America/Anchorage (Alaska)</option>
                      <option value="America/Adak">America/Adak (Hawaii-Aleutian)</option>
                      <option value="Pacific/Honolulu">Pacific/Honolulu (Hawaii)</option>
                      <option value="America/Phoenix">America/Phoenix (Arizona)</option>
                      <option value="America/Toronto">America/Toronto (Eastern Canada)</option>
                      <option value="America/Vancouver">America/Vancouver (Pacific Canada)</option>
                    </optgroup>
                    <optgroup label="Europe & Africa">
                      <option value="Europe/London">Europe/London (GMT/BST)</option>
                      <option value="Europe/Paris">Europe/Paris (CET/CEST)</option>
                      <option value="Europe/Berlin">Europe/Berlin (CET/CEST)</option>
                      <option value="Europe/Moscow">Europe/Moscow (MSK)</option>
                    </optgroup>
                  </Select>
                </FormGroup>
                
                <ScheduleButtonGroup>
                  {isEditing ? (
                    <>
                      <SubmitButton onClick={handleUpdateSchedule}>
                        Update Schedule
                      </SubmitButton>
                      <CancelButton onClick={cancelEdit}>
                        Cancel Edit
                      </CancelButton>
                    </>
                  ) : (
                    <SubmitButton onClick={handleAddSchedule}>
                      Add Schedule
                    </SubmitButton>
                  )}
                </ScheduleButtonGroup>
              </ScheduleColumn>
            </ScheduleModalBody>
            
            <ModalFooter>
              <CancelButton onClick={() => setShowScheduleModal(false)}>Cancel</CancelButton>
              <SubmitButton onClick={handleSaveSchedule}>Save Changes</SubmitButton>
            </ModalFooter>
          </ScheduleModalContent>
        </Modal>
      )}
      
      {/* Absence Petitions Section */}
      <SectionHeader style={{ marginTop: '2rem' }}>
        <SectionTitle>
          <FileText size={20} />
          Absence Petitions ({petitions.filter(p => p.status === REQUEST_STATUS.PENDING).length} pending)
        </SectionTitle>
      </SectionHeader>
      
      {petitions.length === 0 ? (
        <NoDataMessage>No absence petitions found</NoDataMessage>
      ) : (
        <PetitionsTable>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Employee</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Remarks</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {petitions.map(petition => (
              <TableRow key={petition.id}>
                <TableCell>
                  <UserName>{petition.userName}</UserName>
                  <UserEmail>{petition.userEmail}</UserEmail>
                </TableCell>
                <TableCell>
                  {formatDate(petition.attendanceDate)}
                </TableCell>
                <TableCell>
                  <PetitionRemarks>
                    {petition.remarks.length > 60 
                      ? `${petition.remarks.substring(0, 60)}...` 
                      : petition.remarks}
                  </PetitionRemarks>
                </TableCell>
                <TableCell>
                  <StatusBadge status={petition.status}>
                    {petition.status.charAt(0).toUpperCase() + petition.status.slice(1)}
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  {petition.status === REQUEST_STATUS.PENDING ? (
                    <ActionButtonGroup>
                      <ActionButton 
                        approve
                        onClick={() => handlePetitionAction(petition, 'approve')}
                        title="Approve Petition"
                      >
                        <Check size={16} weight="bold" />
                      </ActionButton>
                      <ActionButton 
                        reject
                        onClick={() => handlePetitionAction(petition, 'reject')}
                        title="Reject Petition"
                      >
                        <X size={16} weight="bold" />
                      </ActionButton>
                    </ActionButtonGroup>
                  ) : (
                    <ActionButton 
                      onClick={() => handlePetitionAction(petition, 'view')}
                      title="View Details"
                    >
                      <FileText size={16} />
                    </ActionButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </PetitionsTable>
      )}
      
      {/* Petition Review Modal */}
      {showPetitionModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>
                {petitionAction === 'approve' ? 'Approve' : petitionAction === 'reject' ? 'Reject' : 'View'} Petition
              </ModalTitle>
              <CloseButton onClick={handleClosePetitionModal}>&times;</CloseButton>
            </ModalHeader>
            
            <ModalBody>
              <PetitionDetails>
                <DetailRow>
                  <DetailLabel>Employee:</DetailLabel>
                  <DetailValue>{selectedPetition?.userName}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Email:</DetailLabel>
                  <DetailValue>{selectedPetition?.userEmail}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Date:</DetailLabel>
                  <DetailValue>{formatDate(selectedPetition?.attendanceDate)}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Employee Remarks:</DetailLabel>
                  <DetailValue>{selectedPetition?.remarks}</DetailValue>
                </DetailRow>
                {selectedPetition?.adminRemarks && (
                  <DetailRow>
                    <DetailLabel>Admin Remarks:</DetailLabel>
                    <DetailValue>{selectedPetition.adminRemarks}</DetailValue>
                  </DetailRow>
                )}
              </PetitionDetails>
              
              {petitionAction !== 'view' && (
                <form onSubmit={handleSubmitPetitionAction}>
                  <FormGroup>
                    <Label>Admin Remarks</Label>
                    <PetitionTextArea 
                      value={adminRemarks}
                      onChange={(e) => setAdminRemarks(e.target.value)}
                      placeholder="Enter your remarks for this decision..."
                      required
                    />
                  </FormGroup>
                  
                  <ModalFooter>
                    <CancelButton type="button" onClick={handleClosePetitionModal}>Cancel</CancelButton>
                    <SubmitButton 
                      type="submit" 
                      disabled={processingPetition}
                      style={{
                        backgroundColor: petitionAction === 'approve' ? '#4caf50' : '#f44336'
                      }}
                    >
                      {processingPetition ? 'Processing...' : petitionAction === 'approve' ? 'Approve' : 'Reject'}
                    </SubmitButton>
                  </ModalFooter>
                </form>
              )}
              
              {petitionAction === 'view' && (
                <ModalFooter>
                  <CancelButton onClick={handleClosePetitionModal}>Close</CancelButton>
                </ModalFooter>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

export default ManagerFunctionsView;

// styled-components at the bottom per project preference
const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #555;
  margin-bottom: 1.5rem;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`;

const NoDataMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
`;

const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ControlsBar = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  flex: 1 1 260px;
  min-width: 220px;
  padding: 0.6rem 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  background: #fff;
  color: #333;
  
  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.15);
  }
`;

// Tabs (match UserManagement Tabs styles)
const TabsBar = styled.div`
  display: flex;
  border-bottom: 2px solid #ddd;
  margin-bottom: 1rem;
`;

const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  background: transparent;
  border: none;
  font-weight: ${({active}) => (active ? '600' : '400')};
  color: ${({active}) => (active ? '#800000' : '#333')};
  border-bottom: ${({active}) => (active ? '2px solid #800000' : '2px solid transparent')};
  margin-bottom: -2px;
  transition: all 0.2s ease;
  &:hover {
    color: #800000;
  }
`;

// Calendar per-type tag styles
const TypeTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  border: 1px solid;
  cursor: pointer;
  user-select: none;
  background: ${p => p.$type === 'absent' ? '#FDECEA'
    : p.$type === 'pto' ? '#E3F2FD'
    : '#f3f4f6'};
  color: ${p => p.$type === 'absent' ? '#C62828'
    : p.$type === 'pto' ? '#1565C0'
    : '#111827'};
  border-color: ${p => p.$type === 'absent' ? '#F5C6CB'
    : p.$type === 'pto' ? '#90CAF9'
    : '#D1D5DB'};
  &:hover { opacity: 0.9; }
`;

const CountBadge = styled.span`
  background: rgba(0,0,0,0.06);
  border-radius: 10px;
  padding: 0 6px;
  font-weight: 800;
`;

// Type List Modal styles
const TypeListModalContent = styled.div`
  background: white;
  border-radius: 8px;
  max-width: 900px;
  width: 96%;
  max-height: 90vh;
  overflow-y: auto;
`;

const TypeListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 0 0.25rem;
`;

const TypeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TypeListRow = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 2fr auto;
  align-items: center;
  gap: 10px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 10px;
  background: #fff;
`;

const TypeListName = styled.div`
  font-weight: 600;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TypeListControls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 8px;
  align-items: center;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const TypeListActions = styled.div`
  display: flex;
  gap: 6px;
  justify-content: flex-end;
`;

const DeptFilterSelect = styled.select`
  flex: 0 0 auto;
  min-width: 200px;
  padding: 0.6rem 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  background: #fff;
  color: #333;

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.15);
  }
`;

const UsersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
`;

const TableHeader = styled.thead`
  background: #f8f9fa;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f8f9fa;
  }
  
  &:hover {
    background: #e9ecef;
  }
`;

const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
`;

const TableActions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 0.75rem;
  border: ${p => p.$variant ? 'none' : '1px solid #ddd'};
  background: ${p => p.$variant === 'primary' ? '#4CAF50' : p.$variant === 'warning' ? '#FF9800' : '#f8f9fa'};
  color: ${p => p.$variant ? '#fff' : '#333'};
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.15s ease;

  &:hover {
    background: ${p => p.$variant === 'primary' ? '#43A047' : p.$variant === 'warning' ? '#FB8C00' : '#e9ecef'};
    border-color: ${p => p.$variant ? 'transparent' : '#adb5bd'};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: ${p => p.$variant === 'primary'
      ? '0 0 0 2px rgba(76, 175, 80, 0.2)'
      : p.$variant === 'warning'
      ? '0 0 0 2px rgba(255, 152, 0, 0.25)'
      : '0 0 0 2px rgba(0, 0, 0, 0.05)'};
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    color: #333;
  }
`;

const ModalTitle = styled.h3`
  margin: 0;
  color: #333;
  font-size: 1.25rem;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: #666;
  
  &:hover {
    color: #333;
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.5rem;
  border-top: 1px solid #eee;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const CancelButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 1px solid #ddd;
  background: #f8f9fa;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #e9ecef;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  background: #4caf50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #45a049;
  }
`;

const PlaceholderMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
`;

// Schedule Modal Styled Components
const ScheduleModalContent = styled.div`
  background: white;
  border-radius: 8px;
  max-width: 1000px;
  width: 95%;
  max-height: 90vh;
  overflow-y: auto;
`;

const ScheduleSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 1.5rem;
  background: #f5f9ff;
  padding: 0.75rem;
  border-radius: 6px;
`;

const ScheduleModalBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  padding: 0 1.5rem 1.5rem;
`;

const ScheduleColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h4`
  margin: 0 0 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
  color: #333;
`;

const ScheduleListContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const ScheduleCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
`;

const ScheduleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ScheduleDay = styled.h4`
  margin: 0;
  color: #333;
`;

const ScheduleActions = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const ScheduleActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border: none;
  background: ${props => props.$danger ? '#f44336' : '#000'};
  color: white;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const ScheduleTime = styled.div`
  font-size: 0.9rem;
  color: #666;
  
  div {
    margin-bottom: 0.25rem;
  }
`;

const NoScheduleMessage = styled.p`
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 2rem;
`;

const DaysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const DayCheckbox = styled.div`
  display: inline-flex;
  align-items: center;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
  
  input {
    margin-right: 0.5rem;
  }
  
  label {
    cursor: pointer;
    font-size: 0.9rem;
  }
  
  &:hover {
    background: #e9ecef;
  }
`;

const ScheduleInputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const DurationRow = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: flex-end;
`;

const DurationInput = styled.div`
  flex: 1;
`;

const SmallLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.8rem;
  color: #666;
`;

const ScheduleButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

// View Toggle Components
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ViewToggle = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  border: none;
  background: ${props => props.active ? '#4caf50' : '#f8f9fa'};
  color: ${props => props.active ? 'white' : '#666'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? '#45a049' : '#e9ecef'};
  }
  
  &:not(:last-child) {
    border-right: 1px solid #ddd;
  }
`;

// Calendar View Styled Components (placed at the bottom per project preference)
const CalendarContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  padding: 1rem;
  border: 1px solid #eee;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const MonthNav = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MonthButton = styled.button`
  padding: 0.35rem 0.6rem;
  border: 1px solid #ddd;
  background: #f8f9fa;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  &:hover { background: #e9ecef; }
`;

const MonthTitle = styled.h4`
  margin: 0 0.25rem;
  color: #333;
`;

const CalendarToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CalendarUserSelect = styled.select`
  min-width: 200px;
  padding: 0.5rem 0.6rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  background: #fff;
  color: #333;
  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.15);
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

const DayHeaderCell = styled.div`
  text-align: center;
  font-weight: 600;
  color: #333;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
`;

const DayCell = styled.div`
  position: relative;
  min-height: 100px;
  padding: 4px;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.2s;
  background: ${({$isToday}) => $isToday ? '#f0fdf4' : 'white'};
  border-color: ${({$isToday}) => $isToday ? '#4ade80' : '#e2e8f0'};

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
`;

const DayNumber = styled.span`
  font-weight: ${({$isToday}) => $isToday ? 'bold' : 'normal'};
  color: ${({$isToday}) => $isToday ? '#15803d' : 'inherit'};
`;

const DayCellTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AbsenceCount = styled.div`
  background: #f5f5f5;
  border: 1px solid #eee;
  color: #555;
  font-size: 0.7rem;
  padding: 0.1rem 0.35rem;
  border-radius: 999px;
`;

const DayCellBody = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  flex-wrap: wrap;
`;

const AbsenceTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  border: 1px solid;
  text-transform: capitalize;
  background: ${p => p.$type === 'absent' ? '#FDECEA' 
    : p.$type === 'pto' ? '#E3F2FD' 
    : p.$type === 'sick' ? '#E8F5E9' 
    : p.$type === 'emergency' ? '#F3E5F5' 
    : p.$type === 'ncns' ? '#f3f4f6' 
    : '#FFF3E0'};
  color: ${p => p.$type === 'absent' ? '#C62828' 
    : p.$type === 'pto' ? '#1565C0' 
    : p.$type === 'sick' ? '#2E7D32' 
    : p.$type === 'emergency' ? '#6A1B9A' 
    : p.$type === 'ncns' ? '#000000' 
    : '#EF6C00'};
  border-color: ${p => p.$type === 'absent' ? '#F5C6CB' 
    : p.$type === 'pto' ? '#90CAF9' 
    : p.$type === 'sick' ? '#A5D6A7' 
    : p.$type === 'emergency' ? '#CE93D8' 
    : p.$type === 'ncns' ? '#000000' 
    : '#FFCC80'};
`;

const RemoveAbsenceBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: inherit;
  cursor: pointer;
  padding: 0;
  &:hover { opacity: 0.8; }
`;

// Bulk Modal Styled Components (placed at the bottom per project preference)
const BulkModalContent = styled.div`
  background: white;
  border-radius: 8px;
  max-width: 800px;
  width: 95%;
  max-height: 90vh;
  overflow-y: auto;
`;

const BulkToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const SmallHelper = styled.span`
  color: #666;
  font-size: 0.85rem;
  margin-right: auto;
`;

const InlineButton = styled.button`
  padding: 0.25rem 0.5rem;
  border: 1px solid #ddd;
  background: #f8f9fa;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  &:hover { background: #e9ecef; }
`;

const BulkUsersList = styled.div`
  border: 1px solid #eee;
  border-radius: 6px;
  max-height: 300px;
  overflow-y: auto;
  background: #fff;
`;

const BulkUserRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid #f1f1f1;
  &:last-child { border-bottom: none; }
  label { cursor: pointer; flex: 1; }
`;

const InlineInputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
`;

const BulkUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  strong { color: #222; font-weight: 600; }
  span { color: #666; font-size: 0.85rem; }
`;

const UserName = styled.span`
  font-weight: 600;
  color: #333;
`;

const UserEmail = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const UserPosition = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const UserStatus = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${({status}) => status === 'active' ? '#e6f7ee' : '#fee2e2'};
  color: ${({status}) => status === 'active' ? '#065f46' : '#b91c1c'};
`;

const PetitionsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const PetitionRemarks = styled.div`
  max-width: 200px;
  word-wrap: break-word;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${({status}) => {
    switch(status) {
      case 'pending': return '#fef3c7';
      case 'approved': return '#d1fae5';
      case 'rejected': return '#fee2e2';
      default: return '#f3f4f6';
    }
  }};
  color: ${({status}) => {
    switch(status) {
      case 'pending': return '#92400e';
      case 'approved': return '#065f46';
      case 'rejected': return '#b91c1c';
      default: return '#374151';
    }
  }};
`;

const ActionButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const PetitionDetails = styled.div`
  margin-bottom: 1rem;
`;

const DetailRow = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: flex-start;
`;

const DetailLabel = styled.span`
  font-weight: 600;
  color: #333;
  min-width: 120px;
  margin-right: 0.5rem;
`;

const DetailValue = styled.span`
  color: #666;
  flex: 1;
`;

const PetitionTextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.15);
  }
`;

// Day Mark Modal Styled Components (placed at the bottom per project preference)
const DayMarkModalContent = styled.div`
  background: white;
  border-radius: 8px;
  max-width: 1100px;
  width: 96%;
  max-height: 90vh;
  overflow-y: auto;
`;

const DayMarkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const DayMarkColumn = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ $variant }) =>
    $variant === 'absent' ? '#f6d4d4' : $variant === 'pto' ? '#d9c8ea' : '#bdbdbd'};
  border-radius: 8px;
  padding: 16px;
  border: 1px solid rgba(0,0,0,0.1);
  max-height: 520px;
  overflow-y: auto;
`;

const DayMarkTitle = styled.h4`
  margin: 0 0 12px;
  color: #222;
`;

const DayMarkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// Department Schedule styles (mirroring ScheduleView) — placed at bottom
const DeptFiltersBar = styled.div`
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
  }
  .chip:hover {
    border-color: #fca5a5;
    background: #fef2f2;
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(220, 38, 38, 0.15);
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
  }
  .tzSelect:focus {
    outline: none;
    border-color: #f87171;
    box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.1);
  }
  .view-toggle {
    display: flex;
    background: #fef2f2;
    border: 1px solid #f3e8e8;
    border-radius: 8px;
    padding: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
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
    justify-content: center;
    min-width: 44px;
    color: #7f1d1d;
  }
  .toggle-btn.active {
    background: linear-gradient(135deg, #fecaca 0%, #fca5a5 60%, #f87171 100%);
    color: #7f1d1d;
    box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25);
    transform: translateY(-1px);
  }
  .toggle-btn:not(.active):hover {
    background: #fdeaea;
    color: #7f1d1d;
    transform: translateY(-0.5px);
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
  }
  .link:hover { 
    background: #fee2e2;
    color: #991b1b; 
    text-decoration: none;
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
    .left-header { flex-direction: column; align-items: stretch; gap: 0.75rem; }
  }
`;

const DeptScheduleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  th, td {
    padding: 0.85rem 0.9rem;
    text-align: left;
    border-bottom: 1px solid #eee;
    vertical-align: top;
  }
  th {
    background-color: #f8f9fa;
    font-weight: 600;
    color: #333;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }
  td:first-child, th:first-child {
    border-right: 1px solid #eee;
    width: 220px;
  }
  tr:last-child td { border-bottom: none; }
  tr:hover { background-color: #f5f5f5; }
`;

const DeptScheduleGrid = styled.div`
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
  }
  .grid-header:first-child {
    justify-content: flex-start;
    border-right: 1px solid #eee;
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
  }
  .grid-day::before {
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
  .grid-day::after {
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
`;

const DeptScheduleBlock = styled.div`
  position: absolute;
  left: ${props => props.startPos}%;
  width: ${props => props.width}%;
  height: 20px;
  background: linear-gradient(135deg, #FFD54F, #FFA000);
  border-radius: 6px;
  top: 50%;
  transform: translateY(-50%);
  cursor: default;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(255, 160, 0, 0.25);
  z-index: 5;

  &:hover {
    transform: translateY(-50%) scale(1.03);
    box-shadow: 0 4px 12px rgba(255, 160, 0, 0.35);
    z-index: 10;
  }
`;

const DayMarkRow = styled.div`
  display: grid;
  grid-template-columns: 26px 1.1fr 0.9fr 1.2fr;
  align-items: center;
  gap: 6px;
  background: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.85)')};
  border: 1px solid ${({ $active }) => ($active ? '#93c5fd' : '#e5e7eb')};
  box-shadow: ${({ $active }) => ($active ? '0 0 0 2px rgba(59,130,246,0.15)' : 'none')};
  border-left: 4px solid ${({ $active }) => ($active ? '#3b82f6' : 'transparent')};
  border-radius: 6px;
  padding: 6px;
  transition: all 0.15s ease;
  &:hover { border-color: #cbd5e1; }
`;

// Larger checkbox for better accessibility
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  accent-color: #3b82f6;
`;

// Day Mark summary and headers
const SummaryBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 8px 12px;
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 8px;
`;

const SummaryLeft = styled.div`
  color: #333;
`;

const SummaryChips = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`;

const SummaryChip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 999px;
  border: 1px solid;
  background: ${p => p.$type === 'absent' ? '#FDECEA'
    : p.$type === 'pto' ? '#E3F2FD'
    : '#f3f4f6'};
  color: ${p => p.$type === 'absent' ? '#C62828'
    : p.$type === 'pto' ? '#1565C0'
    : '#111827'};
  border-color: ${p => p.$type === 'absent' ? '#F5C6CB'
    : p.$type === 'pto' ? '#90CAF9'
    : '#e5e7eb'};
`;

const DayMarkColumnHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ $variant }) =>
    $variant === 'absent' ? '#f6d4d4' : $variant === 'pto' ? '#d9c8ea' : '#bdbdbd'};
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const ColumnToolbar = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const ColumnCount = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 6px;
  border-radius: 999px;
  font-size: 0.78rem;
  color: #111827;
  background: rgba(255,255,255,0.6);
  border: 1px solid rgba(0,0,0,0.08);
`;

const NameField = styled.div`
  font-size: 0.9rem;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Day Mark modal toolbar styles
const DayMarkToolbar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const DayMarkSearchInput = styled.input`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  background: #fff;
  color: #333;
  
  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.15);
  }
`;
