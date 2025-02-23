import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { getAllUsers, createOrUpdateUser, deleteUser, UserType, WeeklySchedule, addApprovedEmail, removeApprovedEmail, getApprovedEmails, validateShiftTimes } from '../../utils/userService';
import { auth } from '../../firebase';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #1a1a1a;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const TimeInput = styled(Input).attrs({ type: 'time' })`
  width: auto;
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

  useEffect(() => {
    loadUsers();
    loadApprovedEmails();
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

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreateError('');
    
    try {
      // Create the user document in Firestore with just email and name
      const userDocRef = await createOrUpdateUser(null, {
        name: newUser.name,
        email: newUser.email,
        userType: newUser.userType,
        schedule: WeeklySchedule,
        createdAt: new Date().toISOString()
      });

      // Automatically add the email to approved emails list
      await addApprovedEmail(newUser.email);

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

      await createOrUpdateUser(userId, {
        name: user.name,
        email: user.email,
        userType: user.userType,
        schedule: schedule,
        createdAt: user.createdAt
      });
      
      setShowScheduleModal(false);
      await loadUsers();
    } catch (error) {
      console.error('Error updating schedule:', error);
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
        schedule: user.schedule,
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

  const ScheduleModal = () => {
    const [schedule, setSchedule] = useState(selectedUser?.schedule || {});
    const [selectedShift, setSelectedShift] = useState(null);
    const [showShiftForm, setShowShiftForm] = useState(false);
    const [shiftFormData, setShiftFormData] = useState({
      startDay: 'monday',
      startTime: '',
      endDay: 'monday',
      endTime: ''
    });

    const daysOfWeek = [
      'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
    ];

    const formatDayName = (day) => {
      if (!day || typeof day !== 'string') return '';
      return day.charAt(0).toUpperCase() + day.slice(1);
    };

    const handleAddShift = () => {
      setSelectedShift(null);
      setShiftFormData({
        startDay: 'monday',
        startTime: '',
        endDay: 'monday',
        endTime: ''
      });
      setShowShiftForm(true);
    };

    const handleEditShift = (shiftId) => {
      const shift = schedule[shiftId];
      if (!shift) return;

      setSelectedShift(shiftId);
      setShiftFormData({
        startDay: shift.startDay || 'monday',
        startTime: shift.startTime || '',
        endDay: shift.endDay || 'monday',
        endTime: shift.endTime || ''
      });
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
        if (!validateShiftTimes(
          shiftFormData.startDay || 'monday',
          shiftFormData.startTime,
          shiftFormData.endDay || 'monday',
          shiftFormData.endTime
        )) {
          alert('Invalid shift times. Please check your input.');
          return;
        }

        const shiftId = selectedShift || `shift_${Date.now()}`;
        setSchedule(prev => ({
          ...prev,
          [shiftId]: {
            startDay: shiftFormData.startDay || 'monday',
            startTime: shiftFormData.startTime,
            endDay: shiftFormData.endDay || 'monday',
            endTime: shiftFormData.endTime
          }
        }));
        setShowShiftForm(false);
      } catch (error) {
        alert(error.message);
      }
    };

    const handleSave = async () => {
      try {
        await handleScheduleUpdate(selectedUser.id, schedule);
        setShowScheduleModal(false);
        await loadUsers();
      } catch (error) {
        console.error('Error updating schedule:', error);
        alert('Error saving schedule. Please try again.');
      }
    };

    return (
      <Modal>
        <ModalContent>
          <h2>Edit Schedule - {selectedUser?.name || 'User'}</h2>
          
          <div style={{ marginBottom: '1rem' }}>
            <Button onClick={handleAddShift}>Add Shift</Button>
          </div>

          {showShiftForm && (
            <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
              <h3>{selectedShift ? 'Edit Shift' : 'Add New Shift'}</h3>
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
                <Label>Start Time</Label>
                <TimeInput
                  value={shiftFormData.startTime || ''}
                  onChange={(e) => setShiftFormData(prev => ({ ...prev, startTime: e.target.value }))}
                />
              </FormGroup>
              <FormGroup>
                <Label>End Day</Label>
                <Select
                  value={shiftFormData.endDay || 'monday'}
                  onChange={(e) => setShiftFormData(prev => ({ ...prev, endDay: e.target.value }))}
                >
                  {daysOfWeek.map(day => (
                    <option key={day} value={day}>{formatDayName(day)}</option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>End Time</Label>
                <TimeInput
                  value={shiftFormData.endTime || ''}
                  onChange={(e) => setShiftFormData(prev => ({ ...prev, endTime: e.target.value }))}
                />
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

          <div style={{ marginTop: '1rem', maxHeight: '50vh', overflowY: 'auto' }}>
            {Object.entries(schedule || {}).map(([shiftId, shift]) => {
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
                    <strong>{formatDayName(shift.startDay)} {shift.startTime || ''}</strong>
                    <div style={{ fontSize: '0.9em', color: '#666' }}>
                      to
                    </div>
                    <strong>{formatDayName(shift.endDay)} {shift.endTime || ''}</strong>
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
            <Button onClick={() => setShowScheduleModal(false)} style={{ backgroundColor: '#6B7280' }}>
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

  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Title>
        User Management
        <div>
          <Button
            style={{ fontSize: '1rem', marginRight: '1rem' }}
            onClick={() => setShowApprovedEmailsModal(true)}
          >
            Manage Approved Emails
          </Button>
          <Button
            style={{ fontSize: '1rem' }}
            onClick={() => setShowCreateModal(true)}
          >
            Add New User
          </Button>
        </div>
      </Title>

      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Type</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
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
              <Td>
                <Button
                  onClick={() => {
                    setSelectedUser(user);
                    setShowEditModal(true);
                  }}
                  style={{ backgroundColor: '#4B5563' }}
                >
                  Edit User
                </Button>
                <Button
                  onClick={() => {
                    setSelectedUser(user);
                    setShowScheduleModal(true);
                  }}
                  style={{ backgroundColor: '#4B5563' }}
                >
                  Edit Schedule
                </Button>
                <Button 
                  style={{ marginLeft: '0.5rem', backgroundColor: '#EF4444' }}
                  onClick={() => {
                    setUserToDelete(user);
                    setShowDeleteModal(true);
                  }}
                >
                  Delete
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
        <ScheduleModal />
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
    </Container>
  );
}

export default UserManagement;
