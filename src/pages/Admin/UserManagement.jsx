import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { getAllUsers, createOrUpdateUser, deleteUser, UserType, WeeklySchedule, addApprovedEmail, removeApprovedEmail, getApprovedEmails, validateShiftTimes, updateUserSchedule, getScheduleTemplates, createScheduleTemplate, updateScheduleTemplate, deleteScheduleTemplate } from '../../utils/userService';
import { auth } from '../../firebase';

//icons
import { PencilSimpleLine, Calendar, Trash, Copy, FloppyDisk, CalendarBlank } from 'phosphor-react'; 

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  color: #1a1a1a;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  background: #f3f4f6;
  border-bottom: 2px solid #e5e7eb;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  color: #4b5563;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background: white;
  color: #4b5563;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #3b82f6;
  color: white;
  cursor: pointer;
  margin-right: 0.5rem;

  &:hover {
    background: #2563eb;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #1a1a1a;
  max-width: 500px;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #4b5563;
`;

const ErrorMessage = styled.div`
  color: #dc2626;
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
`;

const TimeInput = styled(Input).attrs({ 
  type: 'time',
  required: true,
  pattern: '[0-9]{2}:[0-9]{2}',
  placeholder: 'HH:MM'
})`
  /* Additional styling for time input */
`;

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createError, setCreateError] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    userType: UserType.MEMBER
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [approvedEmails, setApprovedEmails] = useState([]);
  const [newApprovedEmail, setNewApprovedEmail] = useState('');
  const [showApprovedEmailsModal, setShowApprovedEmailsModal] = useState(false);
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [scheduleTemplates, setScheduleTemplates] = useState([]);
  const [showTemplatesModal, setShowTemplatesModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showCreateTemplateModal, setShowCreateTemplateModal] = useState(false);
  const [newTemplateName, setNewTemplateName] = useState('');

  useEffect(() => {
    loadUsers();
    loadApprovedEmails();
    loadScheduleTemplates();
  }, []);

  const loadUsers = async () => {
    try {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
      setLoading(false);
    } catch (error) {
      console.error('Error loading users:', error);
      setLoading(false);
    }
  };

  const loadApprovedEmails = async () => {
    try {
      const emails = await getApprovedEmails();
      setApprovedEmails(emails);
    } catch (error) {
      console.error('Error loading approved emails:', error);
    }
  };

  const loadScheduleTemplates = async () => {
    try {
      const templates = await getScheduleTemplates();
      setScheduleTemplates(templates);
    } catch (error) {
      console.error('Error loading schedule templates:', error);
      alert('Error loading schedule templates: ' + error.message);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreateError('');
    
    try {
      // First add the email to approved emails list
      await addApprovedEmail(newUser.email);
      
      // Then create the user document in Firestore
      const userDocRef = await createOrUpdateUser(null, {
        name: newUser.name,
        email: newUser.email,
        userType: newUser.userType,
        schedule: {}, // Empty object for schedule
        createdAt: new Date().toISOString()
      });

      // Reset form and close modal
      setNewUser({
        name: '',
        email: '',
        userType: UserType.MEMBER
      });
      setShowCreateModal(false);
      
      // Reload users list and approved emails
      await Promise.all([loadUsers(), loadApprovedEmails()]);
    } catch (error) {
      console.error('Error creating user:', error);
      setCreateError(error.message);
    }
  };

  const handleUserTypeChange = async (userId, newType) => {
    try {
      const user = users.find(u => u.id === userId);
      if (!user) {
        console.error('User not found:', userId);
        return;
      }
      
      // Destructure the user object to exclude the id field
      const { id, ...userData } = user;
      
      await createOrUpdateUser(userId, {
        ...userData,
        userType: newType
      });
      await loadUsers();
    } catch (error) {
      console.error('Error updating user type:', error);
    }
  };

  const handleScheduleUpdate = async (userId, schedule) => {
    try {
      const user = users.find(u => u.id === userId);
      if (!user) {
        console.error('User not found:', userId);
        return;
      }

      // Use the dedicated updateUserSchedule function instead of createOrUpdateUser
      await updateUserSchedule(userId, schedule);
      
      setShowScheduleModal(false);
      await loadUsers();
    } catch (error) {
      console.error('Error updating schedule:', error);
      alert('Error updating schedule: ' + error.message);
    }
  };

  const handleEditUser = async (userId, userData) => {
    try {
      const user = users.find(u => u.id === userId);
      if (!user) {
        console.error('User not found:', userId);
        return;
      }

      // Check if email is being changed
      const isEmailChanged = user.email !== userData.email;
      
      // If email is being changed, check if it's already approved
      if (isEmailChanged) {
        const isApproved = approvedEmails.some(entry => entry.email === userData.email);
        if (!isApproved) {
          // Add the new email to approved emails first
          await addApprovedEmail(userData.email);
        }
      }

      await createOrUpdateUser(userId, {
        ...userData,
        userType: user.userType,
        schedule: user.schedule,
        createdAt: user.createdAt
      });
      
      setShowEditModal(false);
      
      // Reload users and approved emails if email was changed
      if (isEmailChanged) {
        await Promise.all([loadUsers(), loadApprovedEmails()]);
      } else {
        await loadUsers();
      }
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  };

  const handleDeleteUser = async () => {
    try {
      await deleteUser(userToDelete.id);
      setShowDeleteModal(false);
      setUserToDelete(null);
      await loadUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleAddApprovedEmail = async () => {
    try {
      await addApprovedEmail(newApprovedEmail);
      setNewApprovedEmail('');
      await loadApprovedEmails();
    } catch (error) {
      console.error('Error adding approved email:', error);
    }
  };

  const handleRemoveApprovedEmail = async (email) => {
    try {
      await removeApprovedEmail(email);
      await loadApprovedEmails();
    } catch (error) {
      console.error('Error removing approved email:', error);
    }
  };

  const handleSort = (field) => {
    // If clicking the same field, toggle direction
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // If clicking a new field, set it as the sort field and default to ascending
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const calculateTotalHours = (schedule) => {
    if (!schedule || Object.keys(schedule).length === 0) {
      return 0;
    }
    
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let totalMinutes = 0;
    
    Object.values(schedule).forEach(shift => {
      if (!shift.startDay || !shift.startTime || !shift.endTime) {
        return; // Skip invalid shifts
      }
      
      try {
        // Normalize day names to lowercase
        const startDayLower = shift.startDay.toLowerCase();
        const endDayLower = shift.isNextDay ? days[(days.indexOf(startDayLower) + 1) % 7] : startDayLower;
        
        const startDayIndex = days.indexOf(startDayLower);
        const endDayIndex = days.indexOf(endDayLower);
        
        if (startDayIndex === -1 || endDayIndex === -1) {
          return; // Skip invalid days
        }
        
        // Convert times to minutes for calculation
        const [startHour, startMinute] = shift.startTime.split(':').map(Number);
        const [endHour, endMinute] = shift.endTime.split(':').map(Number);
        
        if (isNaN(startHour) || isNaN(startMinute) || isNaN(endHour) || isNaN(endMinute)) {
          return; // Skip invalid time formats
        }
        
        const startTotalMinutes = startHour * 60 + startMinute;
        const endTotalMinutes = endHour * 60 + endMinute;
        
        // Calculate the duration considering day change
        let duration;
        if (startDayIndex === endDayIndex) {
          duration = endTotalMinutes - startTotalMinutes;
          if (duration < 0) {
            duration += 24 * 60; // Add 24 hours if end time is on next day
          }
        } else {
          const daysDiff = (endDayIndex - startDayIndex + 7) % 7;
          duration = (daysDiff * 24 * 60) + (endTotalMinutes - startTotalMinutes);
        }
        
        totalMinutes += duration;
      } catch (error) {
        console.error('Error calculating shift duration:', error);
      }
    });
    
    // Convert total minutes to hours with one decimal place
    return (totalMinutes / 60).toFixed(1);
  };

  const getSortedUsers = () => {
    if (!users.length) return [];
    
    return [...users].sort((a, b) => {
      let aValue, bValue;
      
      // Get the values to compare based on the sort field
      switch (sortField) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'type':
          aValue = a.userType.toLowerCase();
          bValue = b.userType.toLowerCase();
          break;
        case 'createdAt':
          // Handle dates - if createdAt doesn't exist, use current date
          aValue = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          bValue = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          break;
        case 'shiftCount':
          aValue = a.schedule ? Object.keys(a.schedule).length : 0;
          bValue = b.schedule ? Object.keys(b.schedule).length : 0;
          break;
        case 'totalHours':
          aValue = parseFloat(calculateTotalHours(a.schedule));
          bValue = parseFloat(calculateTotalHours(b.schedule));
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }
      
      // Compare based on direction
      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
    });
  };

  const validateShiftTimes = (startDay, startTime, endTime, isNextDay) => {
    // Convert days to numerical values (0 = Monday, 6 = Sunday)
    const dayToNumber = {
      'monday': 0,
      'tuesday': 1,
      'wednesday': 2,
      'thursday': 3,
      'friday': 4,
      'saturday': 5,
      'sunday': 6
    };

    const startDayNum = dayToNumber[startDay.toLowerCase()];

    if (startDayNum === undefined) {
      return false;
    }

    // Parse times (assuming format is HH:MM)
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);

    if (isNaN(startHour) || isNaN(startMinute) || isNaN(endHour) || isNaN(endMinute)) {
      return false;
    }

    // Calculate total minutes for start and end
    const startTotalMinutes = (startDayNum * 24 * 60) + (startHour * 60) + startMinute;
    const endTotalMinutes = (endDayNum * 24 * 60) + (endHour * 60) + endMinute;

    // End time should be after start time
    return endTotalMinutes > startTotalMinutes;
  };

  const ScheduleModal = ({ userId, userName, currentSchedule }) => {
    const [schedule, setSchedule] = useState(currentSchedule || {});
    const [showShiftForm, setShowShiftForm] = useState(false);
    const [selectedShift, setSelectedShift] = useState(null);
    const [shiftFormData, setShiftFormData] = useState({
      startDay: 'monday',
      startTime: '',
      endTime: '',
      timeRegion: 'PHT',
      isSpecificDate: false,
      specificDate: new Date().toISOString().split('T')[0],
      isNextDay: false
    });
    const [showTemplateSelector, setShowTemplateSelector] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [saveAsTemplateMode, setSaveAsTemplateMode] = useState(false);
    const [templateName, setTemplateName] = useState('');

    const daysOfWeek = [
      'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
    ];

    const timeRegions = [
      'PHT', 'CST', 'EST'
    ];

    useEffect(() => {
      setSchedule(currentSchedule || {});
    }, [currentSchedule]);

    const formatDayName = (day) => {
      if (!day || typeof day !== 'string') return '';
      return day.charAt(0).toUpperCase() + day.slice(1);
    };

    const formatDate = (dateString) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    };

    const handleAddShift = () => {
      setSelectedShift(null);
      setShiftFormData({
        startDay: 'monday',
        startTime: '',
        endTime: '',
        timeRegion: 'PHT',
        isSpecificDate: false,
        specificDate: new Date().toISOString().split('T')[0],
        isNextDay: false
      });
      setShowShiftForm(true);
    };

    const handleAddSpecificDateShift = () => {
      setSelectedShift(null);
      setShiftFormData({
        startDay: 'monday',
        startTime: '',
        endTime: '',
        timeRegion: 'PHT',
        isSpecificDate: true,
        specificDate: new Date().toISOString().split('T')[0],
        isNextDay: false
      });
      setShowShiftForm(true);
    };

    const handleEditShift = (shiftId) => {
      const shift = schedule[shiftId];
      if (!shift) return;

      if (shift.isSpecificDate) {
        setSelectedShift(shiftId);
        setShiftFormData({
          startDay: 'monday',
          startTime: shift.startTime || '',
          endTime: shift.endTime || '',
          timeRegion: shift.timeRegion || 'PHT',
          isSpecificDate: true,
          specificDate: shift.specificDate || new Date().toISOString().split('T')[0],
          isNextDay: shift.isNextDay || false
        });
      } else {
        setSelectedShift(shiftId);
        setShiftFormData({
          startDay: shift.startDay || 'monday',
          startTime: shift.startTime || '',
          endTime: shift.endTime || '',
          timeRegion: shift.timeRegion || 'PHT',
          isSpecificDate: false,
          specificDate: new Date().toISOString().split('T')[0],
          isNextDay: shift.isNextDay || false
        });
      }
      setShowShiftForm(true);
    };

    const handleDeleteShift = (shiftId) => {
      if (!shiftId) return;
      const newSchedule = { ...schedule };
      delete newSchedule[shiftId];
      setSchedule(newSchedule);
    };

    const handleSaveShift = () => {
      if (!shiftFormData.startTime || !shiftFormData.endTime) {
        alert('Please fill in both start and end times');
        return;
      }

      try {
        let isValid = false;
        
        if (shiftFormData.isSpecificDate) {
          // For specific date shifts, just validate that the times make sense
          const [startHour, startMinute] = shiftFormData.startTime.split(':').map(Number);
          const [endHour, endMinute] = shiftFormData.endTime.split(':').map(Number);
          
          if (isNaN(startHour) || isNaN(startMinute) || isNaN(endHour) || isNaN(endMinute)) {
            alert('Invalid time format');
            return;
          }
          
          const startTotalMinutes = startHour * 60 + startMinute;
          const endTotalMinutes = endHour * 60 + endMinute;
          
          // For specific date, if isNextDay is true, we don't need to validate that end time is after start time
          if (shiftFormData.isNextDay) {
            isValid = true;
          } else {
            // If same day, end time should be after start time
            isValid = endTotalMinutes > startTotalMinutes;
          }
          
          if (!isValid) {
            alert('For same day shifts, end time must be after start time.');
            return;
          }
        } else {
          // For weekly schedule, use the existing validation
          isValid = validateShiftTimes(
            shiftFormData.startDay,
            shiftFormData.startTime,
            shiftFormData.endTime,
            shiftFormData.isNextDay
          );
          
          if (!isValid) {
            alert('Invalid shift times. End time must be after start time.');
            return;
          }
        }

        // Create a unique shift ID if not editing an existing one
        const shiftId = selectedShift || `shift_${Date.now()}`;
        
        // Update the schedule with the new/edited shift
        const shiftData = shiftFormData.isSpecificDate
          ? {
              isSpecificDate: true,
              specificDate: shiftFormData.specificDate,
              startTime: shiftFormData.startTime,
              endTime: shiftFormData.endTime,
              timeRegion: shiftFormData.timeRegion || 'PHT',
              isNextDay: shiftFormData.isNextDay
            }
          : {
              startDay: shiftFormData.startDay,
              startTime: shiftFormData.startTime,
              endTime: shiftFormData.endTime,
              timeRegion: shiftFormData.timeRegion || 'PHT',
              isNextDay: shiftFormData.isNextDay
            };
        
        setSchedule(prev => ({
          ...prev,
          [shiftId]: shiftData
        }));
        
        // Close the shift form
        setShowShiftForm(false);
      } catch (error) {
        console.error('Error saving shift:', error);
        alert(error.message || 'Error saving shift. Please check your input.');
      }
    };

    const handleSaveSchedule = async () => {
      try {
        await updateUserSchedule(userId, schedule);
        setShowScheduleModal(false);
        await loadUsers();
      } catch (error) {
        console.error('Error updating schedule:', error);
        alert('Error updating schedule: ' + error.message);
      }
    };

    const handleSaveAsTemplate = async () => {
      try {
        if (!templateName.trim()) {
          alert('Please enter a template name');
          return;
        }

        if (Object.keys(schedule).length === 0) {
          alert('Please add at least one shift to the template');
          return;
        }

        await createScheduleTemplate({
          name: templateName,
          schedule: schedule
        });

        setSaveAsTemplateMode(false);
        setTemplateName('');
        await loadScheduleTemplates();
        alert('Template saved successfully!');
      } catch (error) {
        console.error('Error saving template:', error);
        alert('Error saving template: ' + error.message);
      }
    };

    const handleApplyTemplate = () => {
      if (!selectedTemplate) {
        alert('Please select a template first');
        return;
      }

      // Confirm before overwriting existing schedule
      if (Object.keys(schedule).length > 0) {
        if (!confirm('This will replace the current schedule. Continue?')) {
          return;
        }
      }

      setSchedule(selectedTemplate.schedule || {});
      setShowTemplateSelector(false);
      setSelectedTemplate(null);
    };

    return (
      <Modal>
        <ModalContent style={{ maxWidth: '800px', width: '90%' }}>
          <h2>Schedule for {userName}</h2>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <Button onClick={handleAddShift}>
              <Icon><Calendar size={16} /></Icon>
              Add Weekly Shift
            </Button>
            <Button onClick={handleAddSpecificDateShift} style={{ backgroundColor: '#8B5CF6' }}>
              <Icon><CalendarBlank size={16} /></Icon>
              Add Specific Date Shift
            </Button>
            <Button 
              onClick={() => setShowTemplateSelector(true)}
              style={{ backgroundColor: '#4F46E5' }}
            >
              <Icon><FloppyDisk size={16} /></Icon>
              Apply Template
            </Button>
            <Button 
              onClick={() => setSaveAsTemplateMode(true)}
              style={{ backgroundColor: '#059669' }}
            >
              <Icon><Copy size={16} /></Icon>
              Save as Template
            </Button>
          </div>

          {showShiftForm && (
            <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
              <h3>{selectedShift ? 'Edit Shift' : 'Add New Shift'}</h3>
              
              <FormGroup>
                <Label>Shift Type</Label>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input 
                      type="radio" 
                      checked={!shiftFormData.isSpecificDate} 
                      onChange={() => setShiftFormData(prev => ({ ...prev, isSpecificDate: false }))}
                      style={{ marginRight: '0.5rem' }}
                    />
                    Weekly Schedule
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input 
                      type="radio" 
                      checked={shiftFormData.isSpecificDate} 
                      onChange={() => setShiftFormData(prev => ({ ...prev, isSpecificDate: true }))}
                      style={{ marginRight: '0.5rem' }}
                    />
                    Specific Date
                  </label>
                </div>
              </FormGroup>
              
              {shiftFormData.isSpecificDate ? (
                <>
                  <FormGroup>
                    <Label>Date</Label>
                    <Input
                      type="date"
                      value={shiftFormData.specificDate}
                      onChange={(e) => setShiftFormData(prev => ({ ...prev, specificDate: e.target.value }))}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>End Time Is On</Label>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <input 
                          type="radio" 
                          checked={!shiftFormData.isNextDay} 
                          onChange={() => setShiftFormData(prev => ({ ...prev, isNextDay: false }))}
                          style={{ marginRight: '0.5rem' }}
                        />
                        Same Day
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <input 
                          type="radio" 
                          checked={shiftFormData.isNextDay} 
                          onChange={() => setShiftFormData(prev => ({ ...prev, isNextDay: true }))}
                          style={{ marginRight: '0.5rem' }}
                        />
                        Next Day
                      </label>
                    </div>
                  </FormGroup>
                </>
              ) : (
                <>
                  <FormGroup>
                    <Label>Start Day</Label>
                    <Select
                      value={shiftFormData.startDay || 'monday'}
                      onChange={(e) => setShiftFormData(prev => ({ ...prev, startDay: e.target.value }))}
                    >
                      {daysOfWeek.map(day => (
                        <option key={day} value={day}>{formatDayName(day)}</option>
                      ))}
                    </Select>
                  </FormGroup>
                  <FormGroup>
                    <Label>End Time Is On</Label>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <input 
                          type="radio" 
                          checked={!shiftFormData.isNextDay} 
                          onChange={() => setShiftFormData(prev => ({ ...prev, isNextDay: false }))}
                          style={{ marginRight: '0.5rem' }}
                        />
                        Same Day
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <input 
                          type="radio" 
                          checked={shiftFormData.isNextDay} 
                          onChange={() => setShiftFormData(prev => ({ ...prev, isNextDay: true }))}
                          style={{ marginRight: '0.5rem' }}
                        />
                        Next Day
                      </label>
                    </div>
                  </FormGroup>
                </>
              )}
              
              <FormGroup>
                <Label>Start Time</Label>
                <TimeInput
                  value={shiftFormData.startTime || ''}
                  onChange={(e) => setShiftFormData(prev => ({ ...prev, startTime: e.target.value }))}
                />
              </FormGroup>
              <FormGroup>
                <Label>End Time</Label>
                <TimeInput
                  value={shiftFormData.endTime || ''}
                  onChange={(e) => setShiftFormData(prev => ({ ...prev, endTime: e.target.value }))}
                />
              </FormGroup>
              <FormGroup>
                <Label>Time Region</Label>
                <Select
                  value={shiftFormData.timeRegion || 'PHT'}
                  onChange={(e) => setShiftFormData(prev => ({ ...prev, timeRegion: e.target.value }))}
                >
                  {timeRegions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </Select>
              </FormGroup>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <Button onClick={() => setShowShiftForm(false)} style={{ backgroundColor: '#6B7280' }}>
                  Cancel
                </Button>
                <Button onClick={handleSaveShift}>
                  Save Shift
                </Button>
              </div>
            </div>
          )}

          {showTemplateSelector && (
            <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
              <h3>Apply Template</h3>
              {scheduleTemplates.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '1rem', color: '#6B7280' }}>
                  No templates available. Create a template first.
                </div>
              ) : (
                <>
                  <FormGroup>
                    <Label>Select Template</Label>
                    <Select
                      value={selectedTemplate ? selectedTemplate.id : ''}
                      onChange={(e) => {
                        const template = scheduleTemplates.find(t => t.id === e.target.value);
                        setSelectedTemplate(template || null);
                      }}
                    >
                      <option value="">-- Select a template --</option>
                      {scheduleTemplates.map(template => (
                        <option key={template.id} value={template.id}>{template.name}</option>
                      ))}
                    </Select>
                  </FormGroup>
                  {selectedTemplate && (
                    <div style={{ marginTop: '1rem', maxHeight: '30vh', overflowY: 'auto' }}>
                      <h4>Template Preview</h4>
                      {Object.entries(selectedTemplate.schedule || {}).map(([shiftId, shift]) => (
                        <div key={shiftId} style={{ 
                          marginBottom: '0.5rem',
                          padding: '0.5rem',
                          backgroundColor: '#F3F4F6',
                          borderRadius: '4px'
                        }}>
                          {formatDayName(shift.startDay)} {shift.startTime} to {shift.endTime} ({shift.timeRegion || 'PHT'})
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <Button onClick={() => {
                  setShowTemplateSelector(false);
                  setSelectedTemplate(null);
                }} style={{ backgroundColor: '#6B7280' }}>
                  Cancel
                </Button>
                <Button 
                  onClick={handleApplyTemplate}
                  disabled={!selectedTemplate}
                >
                  Apply Template
                </Button>
              </div>
            </div>
          )}

          {saveAsTemplateMode && (
            <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
              <h3>Save as Template</h3>
              <FormGroup>
                <Label>Template Name</Label>
                <Input
                  type="text"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  placeholder="Enter template name"
                />
              </FormGroup>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <Button onClick={() => {
                  setSaveAsTemplateMode(false);
                  setTemplateName('');
                }} style={{ backgroundColor: '#6B7280' }}>
                  Cancel
                </Button>
                <Button onClick={handleSaveAsTemplate}>
                  Save Template
                </Button>
              </div>
            </div>
          )}

          <div style={{ marginTop: '1rem', maxHeight: '40vh', overflowY: 'auto' }}>
            {Object.keys(schedule).length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6B7280' }}>
                No shifts added yet. Add a shift or apply a template to get started.
              </div>
            ) : (
              Object.entries(schedule).map(([shiftId, shift]) => {
                if (!shift) return null;
                
                // Different display for specific date shifts
                if (shift.isSpecificDate) {
                  return (
                    <div key={shiftId} style={{ 
                      marginBottom: '1rem', 
                      padding: '1rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '4px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#F0F9FF' // Light blue background for specific date shifts
                    }}>
                      <div>
                        <div style={{ fontWeight: 'bold', color: '#3B82F6' }}>
                          <Icon><CalendarBlank size={16} /></Icon>
                          {formatDate(shift.specificDate)}
                        </div>
                        <div style={{ marginTop: '0.5rem' }}>
                          <strong>{shift.startTime || ''}</strong>
                          <span style={{ margin: '0 0.5rem', color: '#666' }}>to</span>
                          <strong>{shift.endTime || ''}</strong>
                          {shift.isNextDay && (
                            <span style={{ marginLeft: '0.5rem', color: '#6366F1', fontSize: '0.85em', fontStyle: 'italic' }}>
                              (Next Day)
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem' }}>
                          Time Region: {shift.timeRegion || 'PHT'}
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <Button onClick={() => handleEditShift(shiftId)}>
                          Edit
                        </Button>
                        <Button 
                          onClick={() => handleDeleteShift(shiftId)}
                          style={{ backgroundColor: '#DC2626' }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  );
                }
                
                // Regular weekly shift display
                return (
                  <div key={shiftId} style={{ 
                    marginBottom: '1rem', 
                    padding: '1rem',
                    border: '1px solid #e5e7eb',
                    borderRadius: '4px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div>
                        <Icon><Calendar size={16} /></Icon>
                        <strong> {formatDayName(shift.startDay)} {shift.startTime || ''}</strong>
                        <div style={{ fontSize: '0.9em', color: '#666', display: 'inline-block', margin: '0 0.5rem' }}>
                          to
                        </div>
                        <strong>{shift.endTime || ''}</strong>
                        {shift.isNextDay && (
                          <span style={{ marginLeft: '0.5rem', color: '#6366F1', fontSize: '0.85em', fontStyle: 'italic' }}>
                            (Next Day)
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem' }}>
                        Time Region: {shift.timeRegion || 'PHT'}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <Button onClick={() => handleEditShift(shiftId)}>
                        Edit
                      </Button>
                      <Button 
                        onClick={() => handleDeleteShift(shiftId)}
                        style={{ backgroundColor: '#DC2626' }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Button onClick={() => setShowScheduleModal(false)} style={{ backgroundColor: '#6B7280' }}>
              Cancel
            </Button>
            <Button onClick={handleSaveSchedule}>
              Save Schedule
            </Button>
          </div>
        </ModalContent>
      </Modal>
    );
  };

  const EditUserModal = () => {
    const [editData, setEditData] = useState({
      name: selectedUser?.name || '',
      email: selectedUser?.email || ''
    });
    const [error, setError] = useState('');
    const [originalEmail] = useState(selectedUser?.email || '');

    const handleSave = async () => {
      try {
        if (!editData.name.trim() || !editData.email.trim()) {
          setError('Name and email are required');
          return;
        }

        if (!editData.email.includes('@')) {
          setError('Please enter a valid email address');
          return;
        }

        // Check if email is being changed
        if (originalEmail !== editData.email) {
          // Check if the new email already exists for a different user
          const emailExists = users.some(u => 
            u.email === editData.email && u.id !== selectedUser.id
          );

          if (emailExists) {
            setError('This email is already in use by another user');
            return;
          }
        }

        await handleEditUser(selectedUser.id, editData);
        setShowEditModal(false);
      } catch (error) {
        console.error('Error updating user:', error);
        setError(error.message);
      }
    };

    return (
      <Modal>
        <ModalContent>
          <h2>Edit User Details</h2>
          <div style={{ marginTop: '1rem' }}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                value={editData.name}
                onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter name"
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                value={editData.email}
                onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter email"
              />
            </FormGroup>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Button onClick={() => setShowEditModal(false)} style={{ backgroundColor: '#6B7280' }}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </ModalContent>
      </Modal>
    );
  };

  const ApprovedEmailsModal = memo(() => {
    const [emailInput, setEmailInput] = useState(newApprovedEmail);
    
    const handleAddEmail = async () => {
      await handleAddApprovedEmail();
      setEmailInput('');
    };

    return (
      <Modal>
        <ModalContent>
          <h2>Manage Approved Emails</h2>
          <div style={{ marginTop: '1rem' }}>
            <FormGroup>
              <Label>Add New Email</Label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Input
                  type="email"
                  value={emailInput}
                  onChange={(e) => {
                    setEmailInput(e.target.value);
                    setNewApprovedEmail(e.target.value);
                  }}
                  placeholder="Enter email address"
                />
                <Button onClick={handleAddEmail}>Add</Button>
              </div>
            </FormGroup>
            <div style={{ marginTop: '1rem', maxHeight: '300px', overflowY: 'auto' }}>
              <Table>
                <thead>
                  <tr>
                    <Th>Email</Th>
                    <Th>Added At</Th>
                    <Th>Actions</Th>
                  </tr>
                </thead>
                <tbody>
                  {approvedEmails.map(({ email, addedAt }) => (
                    <tr key={email}>
                      <Td>{email}</Td>
                      <Td>{new Date(addedAt).toLocaleString()}</Td>
                      <Td>
                        <Button
                          onClick={() => handleRemoveApprovedEmail(email)}
                          style={{ backgroundColor: '#DC2626' }}
                        >
                          Remove
                        </Button>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Button onClick={() => setShowApprovedEmailsModal(false)} style={{ backgroundColor: '#6B7280' }}>
              Close
            </Button>
          </div>
        </ModalContent>
      </Modal>
    );
  });

  const ScheduleTemplatesModal = () => {
    const [templates, setTemplates] = useState(scheduleTemplates);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editFormData, setEditFormData] = useState({
      name: '',
      schedule: {}
    });
    const [showShiftForm, setShowShiftForm] = useState(false);
    const [selectedShift, setSelectedShift] = useState(null);
    const [shiftFormData, setShiftFormData] = useState({
      startDay: 'monday',
      startTime: '',
      endTime: '',
      timeRegion: 'PHT',
      isSpecificDate: false,
      specificDate: new Date().toISOString().split('T')[0],
      isNextDay: false
    });

    const daysOfWeek = [
      'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
    ];

    const timeRegions = [
      'PHT', 'CST', 'EST'
    ];

    useEffect(() => {
      setTemplates(scheduleTemplates);
    }, [scheduleTemplates]);

    const formatDayName = (day) => {
      if (!day || typeof day !== 'string') return '';
      return day.charAt(0).toUpperCase() + day.slice(1);
    };

    const formatDate = (dateString) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    };

    const handleAddShift = () => {
      setSelectedShift(null);
      setShiftFormData({
        startDay: 'monday',
        startTime: '',
        endTime: '',
        timeRegion: 'PHT',
        isSpecificDate: false,
        specificDate: new Date().toISOString().split('T')[0],
        isNextDay: false
      });
      setShowShiftForm(true);
    };

    const handleAddSpecificDateShift = () => {
      setSelectedShift(null);
      setShiftFormData({
        startDay: 'monday',
        startTime: '',
        endTime: '',
        timeRegion: 'PHT',
        isSpecificDate: true,
        specificDate: new Date().toISOString().split('T')[0],
        isNextDay: false
      });
      setShowShiftForm(true);
    };

    const handleEditShift = (shiftId) => {
      const shift = editFormData.schedule[shiftId];
      if (!shift) return;

      if (shift.isSpecificDate) {
        setSelectedShift(shiftId);
        setShiftFormData({
          startDay: 'monday',
          startTime: shift.startTime || '',
          endTime: shift.endTime || '',
          timeRegion: shift.timeRegion || 'PHT',
          isSpecificDate: true,
          specificDate: shift.specificDate || new Date().toISOString().split('T')[0],
          isNextDay: shift.isNextDay || false
        });
      } else {
        setSelectedShift(shiftId);
        setShiftFormData({
          startDay: shift.startDay || 'monday',
          startTime: shift.startTime || '',
          endTime: shift.endTime || '',
          timeRegion: shift.timeRegion || 'PHT',
          isSpecificDate: false,
          specificDate: new Date().toISOString().split('T')[0],
          isNextDay: shift.isNextDay || false
        });
      }
      setShowShiftForm(true);
    };

    const handleDeleteShift = (shiftId) => {
      if (!shiftId) return;
      const newSchedule = { ...editFormData.schedule };
      delete newSchedule[shiftId];
      setEditFormData(prev => ({ ...prev, schedule: newSchedule }));
    };

    const handleSaveShift = () => {
      if (!shiftFormData.startTime || !shiftFormData.endTime) {
        alert('Please fill in both start and end times');
        return;
      }

      try {
        let isValid = false;
        
        if (shiftFormData.isSpecificDate) {
          // For specific date shifts, just validate that the times make sense
          const [startHour, startMinute] = shiftFormData.startTime.split(':').map(Number);
          const [endHour, endMinute] = shiftFormData.endTime.split(':').map(Number);
          
          if (isNaN(startHour) || isNaN(startMinute) || isNaN(endHour) || isNaN(endMinute)) {
            alert('Invalid time format');
            return;
          }
          
          const startTotalMinutes = startHour * 60 + startMinute;
          const endTotalMinutes = endHour * 60 + endMinute;
          
          // For specific date, if isNextDay is true, we don't need to validate that end time is after start time
          if (shiftFormData.isNextDay) {
            isValid = true;
          } else {
            // If same day, end time should be after start time
            isValid = endTotalMinutes > startTotalMinutes;
          }
          
          if (!isValid) {
            alert('For same day shifts, end time must be after start time.');
            return;
          }
        } else {
          // For weekly schedule, use the existing validation
          isValid = validateShiftTimes(
            shiftFormData.startDay,
            shiftFormData.startTime,
            shiftFormData.endTime,
            shiftFormData.isNextDay
          );
          
          if (!isValid) {
            alert('Invalid shift times. End time must be after start time.');
            return;
          }
        }

        // Create a unique shift ID if not editing an existing one
        const shiftId = selectedShift || `shift_${Date.now()}`;
        
        // Update the schedule with the new/edited shift
        const shiftData = shiftFormData.isSpecificDate
          ? {
              isSpecificDate: true,
              specificDate: shiftFormData.specificDate,
              startTime: shiftFormData.startTime,
              endTime: shiftFormData.endTime,
              timeRegion: shiftFormData.timeRegion || 'PHT',
              isNextDay: shiftFormData.isNextDay
            }
          : {
              startDay: shiftFormData.startDay,
              startTime: shiftFormData.startTime,
              endTime: shiftFormData.endTime,
              timeRegion: shiftFormData.timeRegion || 'PHT',
              isNextDay: shiftFormData.isNextDay
            };
        
        setEditFormData(prev => ({
          ...prev,
          schedule: {
            ...prev.schedule,
            [shiftId]: shiftData
          }
        }));
        
        // Close the shift form
        setShowShiftForm(false);
      } catch (error) {
        console.error('Error saving shift:', error);
        alert(error.message || 'Error saving shift. Please check your input.');
      }
    };

    const handleCreateTemplate = async () => {
      try {
        if (!editFormData.name.trim()) {
          alert('Please enter a template name');
          return;
        }

        if (Object.keys(editFormData.schedule).length === 0) {
          alert('Please add at least one shift to the template');
          return;
        }

        await createScheduleTemplate({
          name: editFormData.name,
          schedule: editFormData.schedule
        });

        setShowEditForm(false);
        setEditFormData({
          name: '',
          schedule: {}
        });
        await loadScheduleTemplates();
      } catch (error) {
        console.error('Error creating template:', error);
        alert('Error creating template: ' + error.message);
      }
    };

    const handleEditTemplate = async () => {
      try {
        if (!editFormData.name.trim()) {
          alert('Please enter a template name');
          return;
        }

        if (Object.keys(editFormData.schedule).length === 0) {
          alert('Please add at least one shift to the template');
          return;
        }

        await updateScheduleTemplate(selectedTemplate.id, {
          name: editFormData.name,
          schedule: editFormData.schedule
        });

        setShowEditForm(false);
        setSelectedTemplate(null);
        setEditFormData({
          name: '',
          schedule: {}
        });
        await loadScheduleTemplates();
      } catch (error) {
        console.error('Error updating template:', error);
        alert('Error updating template: ' + error.message);
      }
    };

    const handleDeleteTemplate = async (templateId) => {
      if (!confirm('Are you sure you want to delete this template?')) {
        return;
      }

      try {
        await deleteScheduleTemplate(templateId);
        await loadScheduleTemplates();
      } catch (error) {
        console.error('Error deleting template:', error);
        alert('Error deleting template: ' + error.message);
      }
    };

    const handleEditTemplateClick = (template) => {
      setSelectedTemplate(template);
      setEditFormData({
        name: template.name,
        schedule: template.schedule
      });
      setShowEditForm(true);
    };

    const handleCreateNewTemplate = () => {
      setSelectedTemplate(null);
      setEditFormData({
        name: '',
        schedule: {}
      });
      setShowEditForm(true);
    };

    return (
      <Modal>
        <ModalContent style={{ maxWidth: '800px', width: '90%' }}>
          <h2>Schedule Templates</h2>
          <div style={{ marginBottom: '1rem' }}>
            <Button onClick={handleCreateNewTemplate}>Create New Template</Button>
          </div>

          {showEditForm ? (
            <div>
              <h3>{selectedTemplate ? 'Edit Template' : 'Create New Template'}</h3>
              <FormGroup>
                <Label>Template Name</Label>
                <Input
                  type="text"
                  value={editFormData.name}
                  onChange={(e) => setEditFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter template name"
                />
              </FormGroup>

              <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                <h4>Shifts</h4>
                <Button onClick={handleAddShift}>Add Shift</Button>
                <Button onClick={handleAddSpecificDateShift} style={{ backgroundColor: '#8B5CF6' }}>
                  <Icon><CalendarBlank size={16} /></Icon>
                  Add Specific Date Shift
                </Button>
              </div>

              {showShiftForm && (
                <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
                  <h4>{selectedShift ? 'Edit Shift' : 'Add New Shift'}</h4>
                  <FormGroup>
                    <Label>Shift Type</Label>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <input 
                          type="radio" 
                          checked={!shiftFormData.isSpecificDate} 
                          onChange={() => setShiftFormData(prev => ({ ...prev, isSpecificDate: false }))}
                          style={{ marginRight: '0.5rem' }}
                        />
                        Weekly Schedule
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <input 
                          type="radio" 
                          checked={shiftFormData.isSpecificDate} 
                          onChange={() => setShiftFormData(prev => ({ ...prev, isSpecificDate: true }))}
                          style={{ marginRight: '0.5rem' }}
                        />
                        Specific Date
                      </label>
                    </div>
                  </FormGroup>
                  
                  {shiftFormData.isSpecificDate ? (
                    <>
                      <FormGroup>
                        <Label>Date</Label>
                        <Input
                          type="date"
                          value={shiftFormData.specificDate}
                          onChange={(e) => setShiftFormData(prev => ({ ...prev, specificDate: e.target.value }))}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>End Time Is On</Label>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <input 
                              type="radio" 
                              checked={!shiftFormData.isNextDay} 
                              onChange={() => setShiftFormData(prev => ({ ...prev, isNextDay: false }))}
                              style={{ marginRight: '0.5rem' }}
                            />
                            Same Day
                          </label>
                          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <input 
                              type="radio" 
                              checked={shiftFormData.isNextDay} 
                              onChange={() => setShiftFormData(prev => ({ ...prev, isNextDay: true }))}
                              style={{ marginRight: '0.5rem' }}
                            />
                            Next Day
                          </label>
                        </div>
                      </FormGroup>
                    </>
                  ) : (
                    <>
                      <FormGroup>
                        <Label>Start Day</Label>
                        <Select
                          value={shiftFormData.startDay || 'monday'}
                          onChange={(e) => setShiftFormData(prev => ({ ...prev, startDay: e.target.value }))}
                        >
                          {daysOfWeek.map(day => (
                            <option key={day} value={day}>{formatDayName(day)}</option>
                          ))}
                        </Select>
                      </FormGroup>
                      <FormGroup>
                        <Label>End Time Is On</Label>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <input 
                              type="radio" 
                              checked={!shiftFormData.isNextDay} 
                              onChange={() => setShiftFormData(prev => ({ ...prev, isNextDay: false }))}
                              style={{ marginRight: '0.5rem' }}
                            />
                            Same Day
                          </label>
                          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <input 
                              type="radio" 
                              checked={shiftFormData.isNextDay} 
                              onChange={() => setShiftFormData(prev => ({ ...prev, isNextDay: true }))}
                              style={{ marginRight: '0.5rem' }}
                            />
                            Next Day
                          </label>
                        </div>
                      </FormGroup>
                    </>
                  )}
                  
                  <FormGroup>
                    <Label>Start Time</Label>
                    <TimeInput
                      value={shiftFormData.startTime || ''}
                      onChange={(e) => setShiftFormData(prev => ({ ...prev, startTime: e.target.value }))}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>End Time</Label>
                    <TimeInput
                      value={shiftFormData.endTime || ''}
                      onChange={(e) => setShiftFormData(prev => ({ ...prev, endTime: e.target.value }))}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Time Region</Label>
                    <Select
                      value={shiftFormData.timeRegion || 'PHT'}
                      onChange={(e) => setShiftFormData(prev => ({ ...prev, timeRegion: e.target.value }))}
                    >
                      {timeRegions.map(region => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </Select>
                  </FormGroup>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <Button onClick={() => setShowShiftForm(false)} style={{ backgroundColor: '#6B7280' }}>
                      Cancel
                    </Button>
                    <Button onClick={handleSaveShift}>
                      Save Shift
                    </Button>
                  </div>
                </div>
              )}

              <div style={{ marginTop: '1rem', maxHeight: '30vh', overflowY: 'auto' }}>
                {Object.entries(editFormData.schedule || {}).map(([shiftId, shift]) => {
                  if (!shift) return null;
                  
                  // Different display for specific date shifts
                  if (shift.isSpecificDate) {
                    return (
                      <div key={shiftId} style={{ 
                        marginBottom: '1rem', 
                        padding: '1rem',
                        border: '1px solid #e5e7eb',
                        borderRadius: '4px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#F0F9FF' // Light blue background for specific date shifts
                      }}>
                        <div>
                          <div style={{ fontWeight: 'bold', color: '#3B82F6' }}>
                            <Icon><CalendarBlank size={16} /></Icon>
                            {formatDate(shift.specificDate)}
                          </div>
                          <div style={{ marginTop: '0.5rem' }}>
                            <strong>{shift.startTime || ''}</strong>
                            <span style={{ margin: '0 0.5rem', color: '#666' }}>to</span>
                            <strong>{shift.endTime || ''}</strong>
                            {shift.isNextDay && (
                              <span style={{ marginLeft: '0.5rem', color: '#6366F1', fontSize: '0.85em', fontStyle: 'italic' }}>
                                (Next Day)
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem' }}>
                            Time Region: {shift.timeRegion || 'PHT'}
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <Button onClick={() => handleEditShift(shiftId)}>
                            Edit
                          </Button>
                          <Button 
                            onClick={() => handleDeleteShift(shiftId)}
                            style={{ backgroundColor: '#DC2626' }}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    );
                  }
                  
                  // Regular weekly shift display
                  return (
                    <div key={shiftId} style={{ 
                      marginBottom: '1rem', 
                      padding: '1rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '4px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div>
                        <div>
                          <Icon><Calendar size={16} /></Icon>
                          <strong> {formatDayName(shift.startDay)} {shift.startTime || ''}</strong>
                          <div style={{ fontSize: '0.9em', color: '#666', display: 'inline-block', margin: '0 0.5rem' }}>
                            to
                          </div>
                          <strong>{shift.endTime || ''}</strong>
                          {shift.isNextDay && (
                            <span style={{ marginLeft: '0.5rem', color: '#6366F1', fontSize: '0.85em', fontStyle: 'italic' }}>
                              (Next Day)
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem' }}>
                          Time Region: {shift.timeRegion || 'PHT'}
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <Button onClick={() => handleEditShift(shiftId)}>
                          Edit
                        </Button>
                        <Button 
                          onClick={() => handleDeleteShift(shiftId)}
                          style={{ backgroundColor: '#DC2626' }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <Button onClick={() => {
                  setShowEditForm(false);
                  setSelectedTemplate(null);
                }} style={{ backgroundColor: '#6B7280' }}>
                  Cancel
                </Button>
                <Button onClick={selectedTemplate ? handleEditTemplate : handleCreateTemplate}>
                  {selectedTemplate ? 'Update Template' : 'Create Template'}
                </Button>
              </div>
            </div>
          ) : (
            <div style={{ marginTop: '1rem', maxHeight: '60vh', overflowY: 'auto' }}>
              {templates.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#6B7280' }}>
                  No templates found. Create your first template to get started.
                </div>
              ) : (
                templates.map(template => (
                  <div key={template.id} style={{ 
                    marginBottom: '1rem', 
                    padding: '1rem',
                    border: '1px solid #e5e7eb',
                    borderRadius: '4px'
                  }}>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem'
                    }}>
                      <h3 style={{ margin: 0 }}>{template.name}</h3>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <Button onClick={() => handleEditTemplateClick(template)}>
                          Edit
                        </Button>
                        <Button 
                          onClick={() => handleDeleteTemplate(template.id)}
                          style={{ backgroundColor: '#DC2626' }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                    
                    <div style={{ fontSize: '0.9em', color: '#4B5563' }}>
                      {Object.entries(template.schedule || {}).map(([shiftId, shift]) => (
                        <div key={shiftId} style={{ 
                          marginBottom: '0.5rem',
                          padding: '0.5rem',
                          backgroundColor: '#F3F4F6',
                          borderRadius: '4px'
                        }}>
                          {formatDayName(shift.startDay)} {shift.startTime} to {shift.endTime} ({shift.timeRegion || 'PHT'})
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {!showEditForm && (
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <Button onClick={() => setShowTemplatesModal(false)} style={{ backgroundColor: '#6B7280' }}>
                Close
              </Button>
            </div>
          )}
        </ModalContent>
      </Modal>
    );
  };

  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Title>
        <span style={{ fontSize: '2.5rem' }}>User Management</span>
        <div>
          <Button onClick={() => setShowCreateModal(true)}>Create User</Button>
          <Button 
            onClick={() => setShowApprovedEmailsModal(true)}
            style={{ marginLeft: '0.5rem', backgroundColor: '#4B5563' }}
          >
            Manage Approved Emails
          </Button>
          <Button 
            onClick={() => setShowTemplatesModal(true)}
            style={{ marginLeft: '0.5rem', backgroundColor: '#4B5563' }}
          >
            Manage Schedule Templates
          </Button>
        </div>
      </Title>

      <Table>
        <thead>
          <tr>
            <Th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
              Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
            </Th>
            <Th>Email</Th>
            <Th onClick={() => handleSort('type')} style={{ cursor: 'pointer' }}>
              Type {sortField === 'type' && (sortDirection === 'asc' ? '↑' : '↓')}
            </Th>
            <Th onClick={() => handleSort('createdAt')} style={{ cursor: 'pointer' }}>
              Created {sortField === 'createdAt' && (sortDirection === 'asc' ? '↑' : '↓')}
            </Th>
            <Th onClick={() => handleSort('shiftCount')} style={{ cursor: 'pointer' }}>
              Shifts {sortField === 'shiftCount' && (sortDirection === 'asc' ? '↑' : '↓')}
            </Th>
            <Th onClick={() => handleSort('totalHours')} style={{ cursor: 'pointer' }}>
              Hours {sortField === 'totalHours' && (sortDirection === 'asc' ? '↑' : '↓')}
            </Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {getSortedUsers().map(user => (
            <tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>
                <Select
                  value={user.userType}
                  onChange={(e) => handleUserTypeChange(user.id, e.target.value)}
                >
                  {Object.values(UserType).map(type => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </Select>
              </Td>
              <Td>{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</Td>
              <Td>
                <span style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                  backgroundColor: user.schedule && Object.keys(user.schedule).length > 0 ? '#10B981' : '#EF4444',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  {user.schedule ? Object.keys(user.schedule).length : 0}
                </span>
              </Td>
              <Td>
                <span style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                  backgroundColor: calculateTotalHours(user.schedule) > 0 ? '#3B82F6' : '#9CA3AF',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  {calculateTotalHours(user.schedule)} hrs
                </span>
              </Td>
              <Td>
                <Button
                  onClick={() => {
                    setSelectedUser(user);
                    setShowEditModal(true);
                  }}
                  style={{ backgroundColor: '#4B5563' }}
                >
                  <Icon><PencilSimpleLine size={20} /></Icon>
                </Button>
                <Button
                  onClick={() => {
                    setSelectedUser(user);
                    setShowScheduleModal(true);
                  }}
                  style={{ backgroundColor: '#4B5563' }}
                >
                  <Icon><Calendar size={20} /></Icon>
                </Button>
                <Button 
                  style={{ marginLeft: '0.5rem', backgroundColor: '#EF4444' }}
                  onClick={() => {
                    setUserToDelete(user);
                    setShowDeleteModal(true);
                  }}
                >
                  <Icon><Trash size={20} /></Icon>
                </Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>

      {showCreateModal && (
        <Modal>
          <ModalContent>
            <h2>Create New User</h2>
            <form onSubmit={handleCreateUser}>
              <FormGroup style={{ marginBottom: '1rem' }}>
                <Label>Name</Label>
                <Input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>User Type</Label>
                <Select
                  value={newUser.userType}
                  onChange={(e) => setNewUser({ ...newUser, userType: e.target.value })}
                >
                  {Object.values(UserType).map(type => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              {createError && <ErrorMessage>{createError}</ErrorMessage>}
              <Button type="submit">Create User</Button>
              <Button
                type="button"
                onClick={() => setShowCreateModal(false)}
                style={{ background: '#6b7280', marginLeft: '0.5rem' }}
              >
                Cancel
              </Button>
            </form>
          </ModalContent>
        </Modal>
      )}

      {showScheduleModal && selectedUser && (
        <ScheduleModal userId={selectedUser.id} userName={selectedUser.name} currentSchedule={selectedUser.schedule} />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <Modal>
          <ModalContent>
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete user {userToDelete?.name}?</p>
            <p>This action cannot be undone.</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <Button
                onClick={() => {
                  setShowDeleteModal(false);
                  setUserToDelete(null);
                }}
                style={{ backgroundColor: '#6B7280' }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleDeleteUser}
                style={{ backgroundColor: '#EF4444' }}
              >
                Delete
              </Button>
            </div>
          </ModalContent>
        </Modal>
      )}

      {showEditModal && selectedUser && (
        <EditUserModal />
      )}

      {showApprovedEmailsModal && (
        <ApprovedEmailsModal />
      )}

      {showTemplatesModal && (
        <ScheduleTemplatesModal />
      )}
    </Container>
  );
}

export default UserManagement;
