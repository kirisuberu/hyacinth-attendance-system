import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { collection, query, where, getDocs, doc, getDoc, updateDoc, setDoc, deleteDoc, writeBatch } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import { Users, Calendar, Clock, X, Check, Plus, Pencil, CalendarX, CalendarPlus, SquaresFour, ListBullets, FileText } from 'phosphor-react';
import styled from 'styled-components';
import { getAllRequests, updateRequestStatus, REQUEST_TYPES, REQUEST_STATUS } from '../../services/requestService';

function ManagerFunctionsView() {
  const context = useOutletContext();
  const userData = context?.userData || null;
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
  const [viewMode, setViewMode] = useState('rows'); // 'tiles' or 'rows'
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

      if (viewMode === 'calendar') {
        setAbsencesByDate((prev) => {
          const copy = { ...prev };
          const arr = copy[absenceDate] ? [...copy[absenceDate]] : [];
          const mapByUser = new Map(arr.map((a) => [a.userId, a]));
          bulkSelectedUserIds.forEach((uid) => {
            mapByUser.set(uid, { id: `${uid}_${absenceDate}`, userId: uid, type: bulkAbsenceType, reason: bulkAbsenceReason || '' });
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

  // Load monthly absences for filtered users when in calendar view
  useEffect(() => {
    if (viewMode !== 'calendar') return;
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
          map[dateKey].push({ id: docSnap.id, userId: data.userId, type: data.type, reason: data.reason || '' });
        });
        setAbsencesByDate(map);
      } catch (err) {
        console.error('Error loading monthly absences:', err);
      }
    };
    loadMonthlyAbsences();
  }, [viewMode, calendarDate, filteredUsers]);

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
      if (viewMode === 'calendar') {
        setAbsencesByDate(prev => {
          const copy = { ...prev };
          const arr = copy[absenceDate] ? [...copy[absenceDate]] : [];
          const existingIndex = arr.findIndex(a => a.userId === selectedUser.id);
          const entry = { id: absenceId, userId: selectedUser.id, type: absenceType, reason: absenceReason || '' };
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
    setBulkAbsenceType('absent');
    setBulkAbsenceReason('');
    setBulkSelectedUserIds(selectedUser ? [selectedUser.id] : []);
    setShowBulkAbsenceModal(true);
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
          </ControlsBar>
          <SectionHeader>
            <SectionTitle>
              <Users size={20} />
              Department Users ({filteredUsers.length})
            </SectionTitle>
            <ViewToggle>
              <ToggleButton 
                active={viewMode === 'rows'} 
                onClick={() => setViewMode('rows')}
                title="Rows view"
              >
                <ListBullets size={16} />
              </ToggleButton>
              <ToggleButton 
                active={viewMode === 'calendar'} 
                onClick={() => setViewMode('calendar')}
                title="Calendar view"
              >
                <Calendar size={16} />
              </ToggleButton>
            </ViewToggle>
          </SectionHeader>
          
          {filteredUsers.length === 0 ? (
            <NoDataMessage>
              No matching users. Try adjusting search or department filters.
            </NoDataMessage>
          ) : viewMode === 'rows' ? (
            <UsersTable>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Email</TableHeaderCell>
                  <TableHeaderCell>Position</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell>Actions</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map(user => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <UserName>{user.name}</UserName>
                    </TableCell>
                    <TableCell>
                      <UserEmail>{user.email}</UserEmail>
                    </TableCell>
                    <TableCell>
                      <UserPosition>{user.position}</UserPosition>
                    </TableCell>
                    <TableCell>
                      <UserStatus status={user.status}>
                        {user.status === 'active' ? 'Active' : 'Inactive'}
                      </UserStatus>
                    </TableCell>
                    <TableCell>
                      <TableActions>
                        <ActionButton $variant="primary" onClick={() => openScheduleModal(user)}>
                          <Calendar size={16} />
                          Schedule
                        </ActionButton>
                        <ActionButton $variant="warning" onClick={() => openAbsenceModal(user)}>
                          <CalendarX size={16} />
                          Mark Absence/PTO
                        </ActionButton>
                      </TableActions>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </UsersTable>
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
                          {entries.map((a) => (
                            <AbsenceTag
                              key={a.id}
                              $type={a.type}
                              title={`${a.type}${a.reason ? ': ' + a.reason : ''}`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {a.type}
                              <RemoveAbsenceBtn
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteAbsence(dateStr, a.id);
                                }}
                                title="Remove"
                              >
                                <X size={12} />
                              </RemoveAbsenceBtn>
                            </AbsenceTag>
                          ))}
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
