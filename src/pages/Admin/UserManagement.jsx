import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { getAllUsers, createOrUpdateUser, deleteUser, UserType, WeeklySchedule, addApprovedEmail, removeApprovedEmail, getApprovedEmails, validateShiftTimes, updateUserSchedule, getScheduleTemplates, createScheduleTemplate, updateScheduleTemplate, deleteScheduleTemplate } from '../../utils/userService';
import { auth } from '../../firebase';

//icons
import { PencilSimpleLine, Calendar, Trash, Copy, FloppyDisk } from 'phosphor-react'; 

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
        shifts: {}, // Empty object for shifts
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

  const handleScheduleUpdate = async (userId, shifts) => {
    try {
      const user = users.find(u => u.id === userId);
      if (!user) {
        console.error('User not found:', userId);
        return;
      }

      // Use the dedicated updateUserSchedule function instead of createOrUpdateUser
      await updateUserSchedule(userId, shifts);
      
      setShowScheduleModal(false);
      await loadUsers();
    } catch (error) {
      console.error('Error updating shifts:', error);
      alert('Error updating shifts: ' + error.message);
    }
  };

  const handleEditUser = async (userId, userData) => {
    try {
      const user = users.find(u => u.id === userId);
      if (!user) {
        console.error('User not found:', userId);
        return;
      }

      await createOrUpdateUser(userId, {
        ...userData,
        userType: user.userType,
        shifts: user.shifts,
        createdAt: user.createdAt
      });
      
      setShowEditModal(false);
      await loadUsers();
    } catch (error) {
      console.error('Error updating user:', error);
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

  const calculateTotalHours = (shifts) => {
    if (!shifts || Object.keys(shifts).length === 0) {
      return 0;
    }
    
    let totalHours = 0;
    
    Object.values(shifts).forEach(shift => {
      if (!shift.day || !shift.timeIn || !shift.duration) {
        return; // Skip invalid shifts
      }
      
      try {
        // Add the shift duration directly
        const duration = parseFloat(shift.duration);
        if (!isNaN(duration)) {
          totalHours += duration;
        }
      } catch (error) {
        console.error('Error calculating shift duration:', error);
      }
    });
    
    // Return with one decimal place
    return totalHours.toFixed(1);
  };

  const validateShiftTimes = (day, timeIn, duration, timeRegion) => {
    // Check if any of the parameters are null or undefined
    if (!day || !timeIn || !duration || !timeRegion) {
      return false;
    }

    // Validate day
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    if (!days.includes(day.toLowerCase())) {
      return false;
    }

    // Validate time format (HH:MM)
    const timePattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timePattern.test(timeIn)) {
      return false;
    }

    // Validate duration (positive number)
    const durationNum = parseFloat(duration);
    if (isNaN(durationNum) || durationNum <= 0) {
      return false;
    }

    // Validate time region
    const validTimeRegions = ['PHT', 'CST', 'EST'];
    if (!validTimeRegions.includes(timeRegion)) {
      return false;
    }

    return true;
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
          aValue = a.shifts ? Object.keys(a.shifts).length : 0;
          bValue = b.shifts ? Object.keys(b.shifts).length : 0;
          break;
        case 'totalHours':
          aValue = parseFloat(calculateTotalHours(a.shifts));
          bValue = parseFloat(calculateTotalHours(b.shifts));
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

  const ScheduleModal = ({ userId, userName, currentShifts }) => {
    const [shifts, setShifts] = useState(currentShifts || {});
    const [showShiftForm, setShowShiftForm] = useState(false);
    const [selectedShift, setSelectedShift] = useState(null);
    const [shiftFormData, setShiftFormData] = useState({
      day: 'monday',
      timeIn: '',
      duration: '',
      timeRegion: 'PHT'
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
      setShifts(currentShifts || {});
    }, [currentShifts]);

    const formatDayName = (day) => {
      if (!day || typeof day !== 'string') return '';
      return day.charAt(0).toUpperCase() + day.slice(1);
    };

    const handleAddShift = () => {
      setSelectedShift(null);
      setShiftFormData({
        day: 'monday',
        timeIn: '',
        duration: '',
        timeRegion: 'PHT'
      });
      setShowShiftForm(true);
    };

    const handleEditShift = (shiftId) => {
      const shift = shifts[shiftId];
      if (!shift) return;

      setSelectedShift(shiftId);
      setShiftFormData({
        day: shift.day || 'monday',
        timeIn: shift.timeIn || '',
        duration: shift.duration || '',
        timeRegion: shift.timeRegion || 'PHT'
      });
      setShowShiftForm(true);
    };

    const handleDeleteShift = (shiftId) => {
      if (!shiftId) return;
      const newShifts = { ...shifts };
      delete newShifts[shiftId];
      setShifts(newShifts);
    };

    const handleSaveShift = () => {
      if (!shiftFormData.timeIn || !shiftFormData.duration) {
        alert('Please fill in both time in and shift duration');
        return;
      }

      try {
        // Ensure we have valid day value
        const day = shiftFormData.day || 'monday';
        
        // Validate the shift times
        const isValid = validateShiftTimes(
          day,
          shiftFormData.timeIn,
          shiftFormData.duration,
          shiftFormData.timeRegion
        );
        
        if (!isValid) {
          alert('Invalid shift data. Please check all fields.');
          return;
        }

        // Create a unique shift ID if not editing an existing one
        const shiftId = selectedShift || `shift_${Date.now()}`;
        
        // Update the shifts with the new/edited shift
        setShifts(prev => ({
          ...prev,
          [shiftId]: {
            day: day,
            timeIn: shiftFormData.timeIn,
            duration: shiftFormData.duration,
            timeRegion: shiftFormData.timeRegion || 'PHT'
          }
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
        await updateUserSchedule(userId, shifts);
        setShowScheduleModal(false);
        await loadUsers();
      } catch (error) {
        console.error('Error updating shifts:', error);
        alert('Error updating shifts: ' + error.message);
      }
    };

    const handleSaveAsTemplate = async () => {
      try {
        if (!templateName.trim()) {
          alert('Please enter a template name');
          return;
        }

        if (Object.keys(shifts).length === 0) {
          alert('Please add at least one shift to the template');
          return;
        }

        await createScheduleTemplate({
          name: templateName,
          shifts: shifts
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

      // Confirm before overwriting existing shifts
      if (Object.keys(shifts).length > 0) {
        if (!confirm('This will replace the current shifts. Continue?')) {
          return;
        }
      }

      setShifts(selectedTemplate.shifts || {});
      setShowTemplateSelector(false);
      setSelectedTemplate(null);
    };

    return (
      <Modal>
        <ModalContent style={{ maxWidth: '800px', width: '90%' }}>
          <h2>Schedule for {userName}</h2>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <Button onClick={handleAddShift}>Add Shift</Button>
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
                <Label>Day of Week</Label>
                <Select
                  value={shiftFormData.day || 'monday'}
                  onChange={(e) => setShiftFormData(prev => ({ ...prev, day: e.target.value }))}
                >
                  {daysOfWeek.map(day => (
                    <option key={day} value={day}>{formatDayName(day)}</option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Expected Time In</Label>
                <TimeInput
                  value={shiftFormData.timeIn || ''}
                  onChange={(e) => setShiftFormData(prev => ({ ...prev, timeIn: e.target.value }))}
                />
              </FormGroup>
              <FormGroup>
                <Label>Shift Duration (hours)</Label>
                <Input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={shiftFormData.duration || ''}
                  onChange={(e) => setShiftFormData(prev => ({ ...prev, duration: e.target.value }))}
                  placeholder="Enter shift duration in hours"
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
                      {Object.entries(selectedTemplate.shifts || {}).map(([shiftId, shift]) => (
                        <div key={shiftId} style={{ 
                          marginBottom: '0.5rem',
                          padding: '0.5rem',
                          backgroundColor: '#F3F4F6',
                          borderRadius: '4px'
                        }}>
                          {formatDayName(shift.day)} {shift.timeIn} - {shift.duration} hours ({shift.timeRegion || 'PHT'})
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
            {Object.keys(shifts).length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6B7280' }}>
                No shifts added yet. Add a shift or apply a template to get started.
              </div>
            ) : (
              Object.entries(shifts).map(([shiftId, shift]) => {
                if (!shift) return null;
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
                      <strong>{formatDayName(shift.day)} {shift.timeIn}</strong>
                      <div style={{ fontSize: '0.9em', color: '#666' }}>
                        - {shift.duration} hours
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
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [templateName, setTemplateName] = useState('');
    const [templateShifts, setTemplateShifts] = useState({});
    const [showShiftForm, setShowShiftForm] = useState(false);
    const [selectedShift, setSelectedShift] = useState(null);
    const [shiftFormData, setShiftFormData] = useState({
      day: 'monday',
      timeIn: '',
      duration: '',
      timeRegion: 'PHT'
    });

    const daysOfWeek = [
      'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
    ];

    const timeRegions = [
      'PHT', 'CST', 'EST'
    ];

    const formatDayName = (day) => {
      if (!day || typeof day !== 'string') return '';
      return day.charAt(0).toUpperCase() + day.slice(1);
    };

    const handleSelectTemplate = (templateId) => {
      const template = scheduleTemplates.find(t => t.id === templateId);
      if (!template) return;
      
      setSelectedTemplate(templateId);
      setTemplateName(template.name);
      setTemplateShifts(template.shifts || {});
      setEditMode(true);
    };

    const handleCreateTemplate = () => {
      setSelectedTemplate(null);
      setTemplateName('');
      setTemplateShifts({});
      setEditMode(true);
    };

    const handleDeleteTemplate = async (templateId) => {
      if (!window.confirm('Are you sure you want to delete this template?')) return;
      
      try {
        await deleteScheduleTemplate(templateId);
        await loadScheduleTemplates();
        
        if (selectedTemplate === templateId) {
          setSelectedTemplate(null);
          setTemplateName('');
          setTemplateShifts({});
          setEditMode(false);
        }
      } catch (error) {
        console.error('Error deleting template:', error);
        alert('Error deleting template: ' + error.message);
      }
    };

    const handleAddShift = () => {
      setSelectedShift(null);
      setShiftFormData({
        day: 'monday',
        timeIn: '',
        duration: '',
        timeRegion: 'PHT'
      });
      setShowShiftForm(true);
    };

    const handleEditShift = (shiftId) => {
      const shift = templateShifts[shiftId];
      if (!shift) return;

      setSelectedShift(shiftId);
      setShiftFormData({
        day: shift.day || 'monday',
        timeIn: shift.timeIn || '',
        duration: shift.duration || '',
        timeRegion: shift.timeRegion || 'PHT'
      });
      setShowShiftForm(true);
    };

    const handleDeleteShift = (shiftId) => {
      if (!shiftId) return;
      const newShifts = { ...templateShifts };
      delete newShifts[shiftId];
      setTemplateShifts(newShifts);
    };

    const handleSaveShift = () => {
      if (!shiftFormData.timeIn || !shiftFormData.duration) {
        alert('Please fill in both time in and shift duration');
        return;
      }

      try {
        // Ensure we have valid day value
        const day = shiftFormData.day || 'monday';
        
        // Validate the shift times
        const isValid = validateShiftTimes(
          day,
          shiftFormData.timeIn,
          shiftFormData.duration,
          shiftFormData.timeRegion
        );
        
        if (!isValid) {
          alert('Invalid shift data. Please check all fields.');
          return;
        }

        // Create a unique shift ID if not editing an existing one
        const shiftId = selectedShift || `shift_${Date.now()}`;
        
        // Update the shifts with the new/edited shift
        setTemplateShifts(prev => ({
          ...prev,
          [shiftId]: {
            day: day,
            timeIn: shiftFormData.timeIn,
            duration: shiftFormData.duration,
            timeRegion: shiftFormData.timeRegion || 'PHT'
          }
        }));
        
        // Close the shift form
        setShowShiftForm(false);
      } catch (error) {
        console.error('Error saving shift:', error);
        alert(error.message || 'Error saving shift. Please check your input.');
      }
    };

    const handleSaveTemplate = async () => {
      try {
        if (!templateName.trim()) {
          alert('Please enter a template name');
          return;
        }

        if (Object.keys(templateShifts).length === 0) {
          alert('Please add at least one shift to the template');
          return;
        }

        if (selectedTemplate) {
          // Update existing template
          await updateScheduleTemplate(selectedTemplate, {
            name: templateName,
            shifts: templateShifts
          });
        } else {
          // Create new template
          await createScheduleTemplate({
            name: templateName,
            shifts: templateShifts
          });
        }

        await loadScheduleTemplates();
        setEditMode(false);
      } catch (error) {
        console.error('Error saving template:', error);
        alert('Error saving template: ' + error.message);
      }
    };

    return (
      <Modal>
        <ModalContent style={{ maxWidth: '700px' }}>
          <Title>
            Schedule Templates
            {!editMode && (
              <Button onClick={handleCreateTemplate}>
                Create New Template
              </Button>
            )}
          </Title>

          {editMode ? (
            showShiftForm ? (
              <div>
                <FormGroup>
                  <Label>Day of Week</Label>
                  <Select 
                    value={shiftFormData.day} 
                    onChange={(e) => setShiftFormData({...shiftFormData, day: e.target.value})}
                  >
                    {daysOfWeek.map(day => (
                      <option key={day} value={day}>
                        {formatDayName(day)}
                      </option>
                    ))}
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label>Expected Time In</Label>
                  <TimeInput 
                    value={shiftFormData.timeIn} 
                    onChange={(e) => setShiftFormData({...shiftFormData, timeIn: e.target.value})}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Shift Duration (hours)</Label>
                  <Input 
                    type="number" 
                    min="0.5" 
                    step="0.5" 
                    value={shiftFormData.duration} 
                    onChange={(e) => setShiftFormData({...shiftFormData, duration: e.target.value})}
                    placeholder="Enter shift duration in hours"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Time Region</Label>
                  <Select 
                    value={shiftFormData.timeRegion} 
                    onChange={(e) => setShiftFormData({...shiftFormData, timeRegion: e.target.value})}
                  >
                    {timeRegions.map(region => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </Select>
                </FormGroup>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                  <Button onClick={() => setShowShiftForm(false)}>Cancel</Button>
                  <Button onClick={handleSaveShift}>Save Shift</Button>
                </div>
              </div>
            ) : (
              <>
                <FormGroup>
                  <Label>Template Name</Label>
                  <Input 
                    type="text" 
                    value={templateName} 
                    onChange={(e) => setTemplateName(e.target.value)}
                    placeholder="Enter template name"
                  />
                </FormGroup>
                
                <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                  <Button onClick={handleAddShift}>Add Shift</Button>
                </div>
                
                {Object.keys(templateShifts).length > 0 ? (
                  <Table>
                    <thead>
                      <tr>
                        <Th>Day</Th>
                        <Th>Time In</Th>
                        <Th>Duration (hrs)</Th>
                        <Th>Region</Th>
                        <Th>Actions</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(templateShifts).map(([shiftId, shift]) => (
                        <tr key={shiftId}>
                          <Td>{formatDayName(shift.day)}</Td>
                          <Td>{shift.timeIn}</Td>
                          <Td>{shift.duration}</Td>
                          <Td>{shift.timeRegion}</Td>
                          <Td>
                            <Button onClick={() => handleEditShift(shiftId)}>
                              <Icon><PencilSimpleLine size={16} /></Icon>
                              Edit
                            </Button>
                            <Button onClick={() => handleDeleteShift(shiftId)}>
                              <Icon><Trash size={16} /></Icon>
                              Delete
                            </Button>
                          </Td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <p>No shifts added. Click "Add Shift" to create a new shift.</p>
                )}
                
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                  <Button onClick={() => setEditMode(false)} style={{ marginRight: '10px' }}>
                    Cancel
                  </Button>
                  <Button onClick={handleSaveTemplate}>
                    Save Template
                  </Button>
                </div>
              </>
            )
          ) : (
            <>
              {scheduleTemplates.length > 0 ? (
                <Table>
                  <thead>
                    <tr>
                      <Th>Name</Th>
                      <Th>Shifts</Th>
                      <Th>Actions</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleTemplates.map(template => (
                      <tr key={template.id}>
                        <Td>{template.name}</Td>
                        <Td>{template.shifts ? Object.keys(template.shifts).length : 0} shifts</Td>
                        <Td>
                          <Button onClick={() => handleSelectTemplate(template.id)}>
                            <Icon><PencilSimpleLine size={16} /></Icon>
                            Edit
                          </Button>
                          <Button onClick={() => handleDeleteTemplate(template.id)}>
                            <Icon><Trash size={16} /></Icon>
                            Delete
                          </Button>
                        </Td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <p>No templates found. Click "Create New Template" to create one.</p>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <Button onClick={() => setShowTemplatesModal(false)}>
                  Close
                </Button>
              </div>
            </>
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
                  backgroundColor: user.shifts && Object.keys(user.shifts).length > 0 ? '#10B981' : '#EF4444',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  {user.shifts ? Object.keys(user.shifts).length : 0}
                </span>
              </Td>
              <Td>
                <span style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                  backgroundColor: calculateTotalHours(user.shifts) > 0 ? '#3B82F6' : '#9CA3AF',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  {calculateTotalHours(user.shifts)} hrs
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
        <ScheduleModal userId={selectedUser.id} userName={selectedUser.name} currentShifts={selectedUser.shifts} />
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
