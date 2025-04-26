import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs, doc, updateDoc, deleteDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import { Trash, PencilSimple, Check, X, Users, Calendar, Clock, UserCircle, Plus, FloppyDisk, ArrowLeft, ArrowRight } from 'phosphor-react';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UserTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TableHead = styled.thead`
  background-color: #f5f5f5;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.color || '#333'};
  margin-right: 0.5rem;
  padding: 0.25rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const RoleTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => {
    switch(props.role) {
      case 'admin':
        return '#800000';
      case 'superadmin':
        return '#000000';
      default:
        return '#555555';
    }
  }};
  color: white;
`;

const StatusTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => {
    switch(props.status) {
      case 'active':
        return '#4caf50';
      case 'inactive':
        return '#f44336';
      case 'pending':
        return '#ff9800';
      default:
        return '#9e9e9e';
    }
  }};
  color: white;
`;

const SearchBar = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #800000;
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.1);
  }
`;

const ConfirmationModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const ModalTitle = styled.h3`
  margin-top: 0;
  color: #333;
`;

const ModalText = styled.p`
  margin-bottom: 1.5rem;
  color: #666;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  background-color: ${props => props.primary ? '#800000' : '#f5f5f5'};
  color: ${props => props.primary ? 'white' : '#333'};
  
  &:hover {
    background-color: ${props => props.primary ? '#600000' : '#e5e5e5'};
  }
`;

// Form elements for schedule editing
const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const DayCheckbox = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e0e0e0;
  }
  
  input {
    margin-right: 0.5rem;
  }
  
  input:checked + label {
    font-weight: 600;
    color: #800000;
  }
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
    border-color: #800000;
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #800000;
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.1);
  }
`;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const ScheduleCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
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

const ScheduleTime = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const ScheduleActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;

const TopActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;

function UserManagementView() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [addUserPage, setAddUserPage] = useState(1); // Track the current page of the add user modal
  const [selectedUser, setSelectedUser] = useState(null);
  const [scheduleData, setScheduleData] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    selectedDays: [],
    timeIn: '09:00',
    timeRegion: 'Asia/Manila',
    shiftDuration: '8',
  });
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editUserData, setEditUserData] = useState({
    firstName: '',
    lastName: '',
    middleInitial: '',
    email: '',
    position: '',
    role: 'member'
  });
  const [newUserData, setNewUserData] = useState({
    firstName: '',
    lastName: '',
    middleInitial: '',
    email: '',
    position: '',
    role: 'member',
    status: 'active',
    address: '',
    contactNumber: '',
    employeeStatus: 'regular'
  });
  
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Calculate total hours from all shifts
  const calculateTotalHours = (schedules) => {
    if (!schedules || !Array.isArray(schedules) || schedules.length === 0) {
      return 0;
    }
    
    const totalHours = schedules.reduce((sum, schedule) => {
      return sum + (parseInt(schedule.shiftDuration, 10) || 0);
    }, 0);
    
    return totalHours;
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const usersCollection = collection(db, 'users');
      const userSnapshot = await getDocs(usersCollection);
      const usersList = userSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          // Store both the document ID and the userId field if it exists
          id: doc.id,
          userId: data.userId || doc.id, // Ensure we have a userId, fallback to doc.id
          ...data,
          schedule: data.schedule || []
        };
      });
      setUsers(usersList);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Failed to load users');
      setLoading(false);
    }
  };

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const handleEditClick = (user) => {
    // Parse the name into first name, last name, and middle initial
    let firstName = '', lastName = '', middleInitial = '';
    
    if (user.name) {
      const nameParts = user.name.trim().split(' ');
      if (nameParts.length === 1) {
        firstName = nameParts[0];
      } else if (nameParts.length === 2) {
        firstName = nameParts[0];
        lastName = nameParts[1];
      } else if (nameParts.length >= 3) {
        firstName = nameParts[0];
        // Check if middle part is just an initial (one character with a period)
        if (nameParts[1].length === 2 && nameParts[1].endsWith('.')) {
          middleInitial = nameParts[1].charAt(0);
          lastName = nameParts.slice(2).join(' ');
        } else {
          middleInitial = nameParts[1];
          lastName = nameParts.slice(2).join(' ');
        }
      }
    }
    
    setEditUserData({
      firstName,
      lastName,
      middleInitial,
      email: user.email || '',
      position: user.position || '',
      role: user.role || 'member'
    });
    
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const confirmDelete = async () => {
    if (!userToDelete) return;
    
    try {
      // Use the userId field if available, otherwise fall back to id
      const documentId = userToDelete.userId || userToDelete.id;
      
      // Delete the user document from Firestore
      await deleteDoc(doc(db, 'users', documentId));
      
      // Update the local state
      setUsers(users.filter(user => {
        // Filter out the deleted user by matching either ID
        return !(user.userId === userToDelete.userId || user.id === userToDelete.id);
      }));
      
      toast.success(`User ${userToDelete.name || userToDelete.email} has been deleted`);
      setShowDeleteModal(false);
      setUserToDelete(null);
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error(`Failed to delete user: ${error.message}`);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const toggleUserStatus = async (user, currentStatus) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    
    try {
      // Use the userId field if available, otherwise fall back to id
      const documentId = user.userId || user.id;
      
      const userRef = doc(db, 'users', documentId);
      await updateDoc(userRef, {
        status: newStatus
      });
      
      // Update the local state
      setUsers(users.map(u => {
        // Match by both potential IDs to ensure we update the correct user
        const isMatch = (u.userId && u.userId === user.userId) || 
                       (u.id === user.id);
        return isMatch ? { ...u, status: newStatus } : u;
      }));
      
      toast.success(`User status updated to ${newStatus}`);
    } catch (error) {
      console.error('Error updating user status:', error);
      toast.error(`Failed to update user status: ${error.message}`);
    }
  };

  const handleScheduleClick = (user) => {
    setSelectedUser(user);
    setScheduleData(user.schedule || []);
    setShowScheduleModal(true);
    setIsEditing(false);
    setEditingSchedule(null);
  };

  const handleUpdateUser = async () => {
    if (!selectedUser) return;
    
    try {
      // Format the name
      let fullName = editUserData.firstName;
      if (editUserData.middleInitial) {
        fullName += ` ${editUserData.middleInitial}.`;
      }
      if (editUserData.lastName) {
        fullName += ` ${editUserData.lastName}`;
      }
      
      // Validate required fields
      if (!fullName.trim() || !editUserData.email.trim()) {
        toast.error('Name and email are required');
        return;
      }
      
      // Use the userId field if available, otherwise fall back to id
      const documentId = selectedUser.userId || selectedUser.id;
      
      // Update the user document in Firestore
      const userRef = doc(db, 'users', documentId);
      await updateDoc(userRef, {
        name: fullName.trim(),
        email: editUserData.email.trim(),
        position: editUserData.position.trim(),
        role: editUserData.role
      });
      
      // Update the local state
      setUsers(users.map(u => {
        // Match by both potential IDs to ensure we update the correct user
        const isMatch = (u.userId && u.userId === selectedUser.userId) || 
                       (u.id === selectedUser.id);
        return isMatch ? { 
          ...u, 
          name: fullName.trim(),
          email: editUserData.email.trim(),
          position: editUserData.position.trim(),
          role: editUserData.role
        } : u;
      }));
      
      toast.success('User information updated successfully');
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error(`Failed to update user: ${error.message}`);
    }
  };

  const handleAddUser = async () => {
    try {
      // Format the name
      let fullName = newUserData.firstName;
      if (newUserData.middleInitial) {
        fullName += ` ${newUserData.middleInitial}.`;
      }
      if (newUserData.lastName) {
        fullName += ` ${newUserData.lastName}`;
      }
      
      // Validate required fields
      if (!fullName.trim() || !newUserData.email.trim()) {
        toast.error('Name and email are required');
        return;
      }
      
      // Generate a unique userId
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(2, 8);
      const userId = `uid_${timestamp}_${randomString}`;
      
      // Create a document ID based on user type and name
      const sanitizedName = fullName.trim().toLowerCase().replace(/\s+/g, '_');
      const documentId = `${newUserData.role}_${sanitizedName}_${timestamp}`;
      
      // Create the user document in Firestore
      const userRef = doc(db, 'users', documentId);
      await setDoc(userRef, {
        userId: userId, // Permanent, non-editable ID
        name: fullName.trim(),
        email: newUserData.email.trim(),
        position: newUserData.position.trim(),
        role: newUserData.role,
        status: newUserData.status,
        address: newUserData.address.trim(),
        contactNumber: newUserData.contactNumber.trim(),
        employeeStatus: newUserData.employeeStatus,
        createdAt: serverTimestamp(),
        schedule: []
      });
      
      // Add the new user to the local state
      const newUser = {
        id: documentId,
        userId: userId,
        name: fullName.trim(),
        email: newUserData.email.trim(),
        position: newUserData.position.trim(),
        role: newUserData.role,
        status: newUserData.status,
        address: newUserData.address.trim(),
        contactNumber: newUserData.contactNumber.trim(),
        employeeStatus: newUserData.employeeStatus,
        schedule: [],
        createdAt: new Date() // Local representation of server timestamp
      };
      
      setUsers([...users, newUser]);
      
      toast.success(`User ${fullName.trim()} added successfully`);
      setShowAddUserModal(false);
      setAddUserPage(1); // Reset to first page
      
      // Reset the form
      setNewUserData({
        firstName: '',
        lastName: '',
        middleInitial: '',
        email: '',
        position: '',
        role: 'member',
        status: 'active',
        address: '',
        contactNumber: '',
        employeeStatus: 'regular'
      });
    } catch (error) {
      console.error('Error adding user:', error);
      toast.error(`Failed to add user: ${error.message}`);
    }
  };

  const handleAddSchedule = () => {
    // Check if at least one day is selected
    if (newSchedule.selectedDays.length === 0) {
      toast.warning('Please select at least one day of the week');
      return;
    }
    
    // Convert time to UTC for storage
    const localTime = new Date();
    const [hours, minutes] = newSchedule.timeIn.split(':').map(Number);
    localTime.setHours(hours, minutes, 0, 0);
    
    // Create schedule entries for each selected day
    const newScheduleEntries = newSchedule.selectedDays.map(day => ({
      id: `${Date.now()}-${day}`, // Unique ID for each schedule entry
      dayOfWeek: day,
      timeIn: newSchedule.timeIn,
      timeRegion: newSchedule.timeRegion,
      shiftDuration: parseInt(newSchedule.shiftDuration, 10),
      utcTimeIn: localTime.toISOString() // Store UTC time
    }));
    
    // Add to the current schedule data
    const updatedSchedule = [...scheduleData, ...newScheduleEntries];
    setScheduleData(updatedSchedule);
    
    toast.success(`Added schedule for ${newSchedule.selectedDays.length} day(s)`);
    
    // Reset form
    setNewSchedule({
      selectedDays: [],
      timeIn: '09:00',
      timeRegion: 'Asia/Manila',
      shiftDuration: '8',
    });
  };

  const handleSaveSchedule = async () => {
    if (!selectedUser) return;
    
    try {
      // First, we need to determine the correct document ID to use
      // If userId exists, use that as the document ID, otherwise fall back to id
      const documentId = selectedUser.userId || selectedUser.id;
      
      console.log('Updating schedule for user with document ID:', documentId);
      
      const userRef = doc(db, 'users', documentId);
      await updateDoc(userRef, {
        schedule: scheduleData
      });
      
      // Update local state
      setUsers(users.map(user => {
        // Match by both potential IDs to ensure we update the correct user
        const isMatch = (user.userId && user.userId === selectedUser.userId) || 
                       (user.id === selectedUser.id);
        return isMatch ? { ...user, schedule: scheduleData } : user;
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
      shiftDuration: schedule.shiftDuration.toString(),
    });
  };

  const handleUpdateSchedule = () => {
    if (!editingSchedule) return;
    
    // Validate that at least one day is selected
    if (newSchedule.selectedDays.length === 0) {
      toast.warning('Please select at least one day of the week');
      return;
    }
    
    // Convert time to UTC for storage
    const localTime = new Date();
    const [hours, minutes] = newSchedule.timeIn.split(':').map(Number);
    localTime.setHours(hours, minutes, 0, 0);
    
    // Remove the old schedule entry
    let updatedSchedule = scheduleData.filter(item => item.id !== editingSchedule.id);
    
    // Create updated schedule entries for each selected day
    const updatedEntries = newSchedule.selectedDays.map(day => ({
      id: day === editingSchedule.dayOfWeek ? editingSchedule.id : `${Date.now()}-${day}`,
      dayOfWeek: day,
      timeIn: newSchedule.timeIn,
      timeRegion: newSchedule.timeRegion,
      shiftDuration: parseInt(newSchedule.shiftDuration, 10),
      utcTimeIn: localTime.toISOString()
    }));
    
    // Add the updated entries to the schedule data
    updatedSchedule = [...updatedSchedule, ...updatedEntries];
    setScheduleData(updatedSchedule);
    
    toast.success(`Updated schedule for ${newSchedule.selectedDays.length} day(s)`);
    
    // Reset form and editing state
    setNewSchedule({
      selectedDays: [],
      timeIn: '09:00',
      timeRegion: 'Asia/Manila',
      shiftDuration: '8',
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
      shiftDuration: '8',
    });
  };

  const filteredUsers = users.filter(user => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      (user.name && user.name.toLowerCase().includes(searchTermLower)) ||
      (user.email && user.email.toLowerCase().includes(searchTermLower)) ||
      (user.role && user.role.toLowerCase().includes(searchTermLower)) ||
      (user.position && user.position.toLowerCase().includes(searchTermLower))
    );
  });

  return (
    <Container>
      <Title>
        <Users size={24} weight="bold" />
        User Management
      </Title>
      
      <TopActions>
        <SearchBar
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <Button primary onClick={() => setShowAddUserModal(true)}>
          <Icon><Plus size={16} /></Icon>
          Add User
        </Button>
      </TopActions>
      
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <UserTable>
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Position</TableHeader>
              <TableHeader>Role</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Shifts</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.name || 'N/A'}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.position || 'N/A'}</TableCell>
                  <TableCell>
                    <RoleTag role={user.role}>{user.role || 'member'}</RoleTag>
                  </TableCell>
                  <TableCell>
                    <StatusTag status={user.status || 'active'}>
                      {user.status || 'active'}
                    </StatusTag>
                  </TableCell>
                  <TableCell>
                    {user.schedule && Array.isArray(user.schedule) ? (
                      <div>
                        <div><strong>{user.schedule.length}</strong> shifts</div>
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>
                          {calculateTotalHours(user.schedule)} total hours
                        </div>
                      </div>
                    ) : (
                      'No shifts'  
                    )}
                  </TableCell>
                  <TableCell>
                    <ActionButton 
                      color="#000000"
                      onClick={() => handleScheduleClick(user)}
                      title="Manage Schedule"
                    >
                      <Calendar size={20} />
                    </ActionButton>
                    <ActionButton 
                      color="#1a73e8"
                      onClick={() => handleEditClick(user)}
                      title="Edit User"
                    >
                      <PencilSimple size={20} />
                    </ActionButton>
                    <ActionButton 
                      color={user.status === 'active' ? '#f44336' : '#4caf50'}
                      onClick={() => toggleUserStatus(user, user.status || 'active')}
                      title={user.status === 'active' ? 'Deactivate user' : 'Activate user'}
                    >
                      {user.status === 'active' ? <X size={20} /> : <Check size={20} />}
                    </ActionButton>
                    <ActionButton 
                      color="#f44336" 
                      onClick={() => handleDeleteClick(user)}
                      title="Delete user"
                    >
                      <Trash size={20} />
                    </ActionButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} style={{ textAlign: 'center' }}>
                  No users found
                </TableCell>
              </TableRow>
            )}
          </tbody>
        </UserTable>
      )}
      
      {showDeleteModal && (
        <ConfirmationModal>
          <ModalContent>
            <ModalTitle>Confirm Deletion</ModalTitle>
            <ModalText>
              Are you sure you want to delete the user {userToDelete?.name || userToDelete?.email}? 
              This action cannot be undone.
            </ModalText>
            <ModalButtons>
              <Button onClick={cancelDelete}>Cancel</Button>
              <Button primary onClick={confirmDelete}>Delete</Button>
            </ModalButtons>
          </ModalContent>
        </ConfirmationModal>
      )}
      
      {showEditModal && selectedUser && (
        <ConfirmationModal>
          <ModalContent style={{ maxWidth: '500px', width: '100%' }}>
            <ModalTitle>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <UserCircle size={24} />
                Edit User: {selectedUser.name || selectedUser.email}
              </div>
            </ModalTitle>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <FormGroup>
                <Label>First Name</Label>
                <Input 
                  type="text" 
                  value={editUserData.firstName}
                  onChange={(e) => setEditUserData({...editUserData, firstName: e.target.value})}
                  placeholder="First Name"
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Middle Initial</Label>
                <Input 
                  type="text" 
                  value={editUserData.middleInitial}
                  onChange={(e) => setEditUserData({...editUserData, middleInitial: e.target.value})}
                  placeholder="Middle Initial"
                  maxLength={1}
                />
                <div style={{ fontSize: '0.8rem', marginTop: '0.25rem', color: '#666' }}>
                  Just the first letter, without period
                </div>
              </FormGroup>
              
              <FormGroup>
                <Label>Last Name</Label>
                <Input 
                  type="text" 
                  value={editUserData.lastName}
                  onChange={(e) => setEditUserData({...editUserData, lastName: e.target.value})}
                  placeholder="Last Name"
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Email</Label>
                <Input 
                  type="email" 
                  value={editUserData.email}
                  onChange={(e) => setEditUserData({...editUserData, email: e.target.value})}
                  placeholder="Email Address"
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Position</Label>
                <Input 
                  type="text" 
                  value={editUserData.position}
                  onChange={(e) => setEditUserData({...editUserData, position: e.target.value})}
                  placeholder="Position"
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Role</Label>
                <Select
                  value={editUserData.role}
                  onChange={(e) => setEditUserData({...editUserData, role: e.target.value})}
                >
                  <option value="member">Member</option>
                  <option value="admin">Admin</option>
                  <option value="super_admin">Super Admin</option>
                </Select>
              </FormGroup>
            </div>
            
            <ModalButtons>
              <Button onClick={() => setShowEditModal(false)}>Cancel</Button>
              <Button primary onClick={handleUpdateUser}>Save Changes</Button>
            </ModalButtons>
          </ModalContent>
        </ConfirmationModal>
      )}
      
      {showAddUserModal && (
        <ConfirmationModal>
          <ModalContent style={{ maxWidth: '500px', width: '100%' }}>
            <ModalTitle>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <UserCircle size={24} />
                Add New User {addUserPage > 1 && `- Page ${addUserPage} of 2`}
              </div>
            </ModalTitle>
            
            {/* Page 1 - Basic Information */}
            {addUserPage === 1 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <FormGroup>
                  <Label>First Name <span style={{ color: 'red' }}>*</span></Label>
                  <Input 
                    type="text" 
                    value={newUserData.firstName}
                    onChange={(e) => setNewUserData({...newUserData, firstName: e.target.value})}
                    placeholder="First Name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Middle Initial</Label>
                  <Input 
                    type="text" 
                    value={newUserData.middleInitial}
                    onChange={(e) => setNewUserData({...newUserData, middleInitial: e.target.value})}
                    placeholder="Middle Initial"
                    maxLength={1}
                  />
                  <div style={{ fontSize: '0.8rem', marginTop: '0.25rem', color: '#666' }}>
                    Just the first letter, without period
                  </div>
                </FormGroup>
                
                <FormGroup>
                  <Label>Last Name <span style={{ color: 'red' }}>*</span></Label>
                  <Input 
                    type="text" 
                    value={newUserData.lastName}
                    onChange={(e) => setNewUserData({...newUserData, lastName: e.target.value})}
                    placeholder="Last Name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Email <span style={{ color: 'red' }}>*</span></Label>
                  <Input 
                    type="email" 
                    value={newUserData.email}
                    onChange={(e) => setNewUserData({...newUserData, email: e.target.value})}
                    placeholder="Email Address"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Position</Label>
                  <Input 
                    type="text" 
                    value={newUserData.position}
                    onChange={(e) => setNewUserData({...newUserData, position: e.target.value})}
                    placeholder="Position"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Role</Label>
                  <Select
                    value={newUserData.role}
                    onChange={(e) => setNewUserData({...newUserData, role: e.target.value})}
                  >
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                    <option value="super_admin">Super Admin</option>
                  </Select>
                </FormGroup>
                
                <FormGroup>
                  <Label>Status</Label>
                  <Select
                    value={newUserData.status}
                    onChange={(e) => setNewUserData({...newUserData, status: e.target.value})}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="pending">Pending</option>
                  </Select>
                </FormGroup>
              </div>
            )}
            
            {/* Page 2 - Additional Information */}
            {addUserPage === 2 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <FormGroup>
                  <Label>Address</Label>
                  <Input 
                    type="text" 
                    value={newUserData.address}
                    onChange={(e) => setNewUserData({...newUserData, address: e.target.value})}
                    placeholder="Complete Address"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Contact Number</Label>
                  <Input 
                    type="text" 
                    value={newUserData.contactNumber}
                    onChange={(e) => setNewUserData({...newUserData, contactNumber: e.target.value})}
                    placeholder="Contact Number"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Employee Status</Label>
                  <Select
                    value={newUserData.employeeStatus}
                    onChange={(e) => setNewUserData({...newUserData, employeeStatus: e.target.value})}
                  >
                    <option value="regular">Regular</option>
                    <option value="probationary">Probationary</option>
                    <option value="intern">Intern</option>
                  </Select>
                </FormGroup>
              </div>
            )}
            
            <ModalButtons>
              {addUserPage === 1 ? (
                <>
                  <Button onClick={() => setShowAddUserModal(false)}>Cancel</Button>
                  <Button primary onClick={() => setAddUserPage(2)}>
                    <Icon><ArrowRight size={16} /></Icon>
                    Next
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={() => setAddUserPage(1)}>
                    <Icon><ArrowLeft size={16} /></Icon>
                    Back
                  </Button>
                  <Button primary onClick={handleAddUser}>
                    <Icon><FloppyDisk size={16} /></Icon>
                    Add User
                  </Button>
                </>
              )}
            </ModalButtons>
          </ModalContent>
        </ConfirmationModal>
      )}
      
      {showScheduleModal && selectedUser && (
        <ConfirmationModal>
          <ModalContent style={{ maxWidth: '600px', width: '100%' }}>
            <ModalTitle>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={24} />
                Manage Schedule for {selectedUser.name || selectedUser.email}
              </div>
            </ModalTitle>
            
            <div style={{ marginBottom: '1rem', background: '#f5f9ff', padding: '0.75rem', borderRadius: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>Total Shifts:</strong> {scheduleData.length}
                </div>
                <div>
                  <strong>Total Hours:</strong> {calculateTotalHours(scheduleData)} hours/week
                </div>
              </div>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Current Schedule</h4>
              
              {scheduleData.length > 0 ? (
                <ScheduleGrid>
                  {scheduleData.map(schedule => (
                    <ScheduleCard key={schedule.id}>
                      <ScheduleHeader>
                        <ScheduleDay>{schedule.dayOfWeek}</ScheduleDay>
                        <div>
                          <ActionButton 
                            color="#000000" 
                            onClick={() => handleEditSchedule(schedule)}
                            title="Edit schedule"
                            style={{ marginRight: '4px' }}
                          >
                            <PencilSimple size={16} />
                          </ActionButton>
                          <ActionButton 
                            color="#f44336" 
                            onClick={() => handleDeleteSchedule(schedule.id)}
                            title="Delete schedule"
                          >
                            <Trash size={16} />
                          </ActionButton>
                        </div>
                      </ScheduleHeader>
                      <ScheduleTime>
                        <div><strong>Time In:</strong> {schedule.timeIn}</div>
                        <div><strong>Region:</strong> {schedule.timeRegion}</div>
                        <div><strong>Duration:</strong> {schedule.shiftDuration} hours</div>
                      </ScheduleTime>
                    </ScheduleCard>
                  ))}
                </ScheduleGrid>
              ) : (
                <p>No schedules found. Add a new schedule below.</p>
              )}
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>{isEditing ? 'Edit Schedule' : 'Add New Schedule'}</h4>
              
              <FormGroup>
                <Label>Days of Week (select multiple)</Label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
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
                </div>
              </FormGroup>
              
              <FormGroup>
                <Label>Time In</Label>
                <Input 
                  type="time" 
                  value={newSchedule.timeIn}
                  onChange={(e) => setNewSchedule({...newSchedule, timeIn: e.target.value})}
                />
              </FormGroup>
              
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
              
              <FormGroup>
                <Label>Shift Duration (hours)</Label>
                <Input 
                  type="number" 
                  min="1" 
                  max="24" 
                  value={newSchedule.shiftDuration}
                  onChange={(e) => setNewSchedule({...newSchedule, shiftDuration: e.target.value})}
                />
              </FormGroup>
              
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                {isEditing ? (
                  <>
                    <Button 
                      primary 
                      onClick={handleUpdateSchedule}
                    >
                      Update Schedule
                    </Button>
                    <Button 
                      onClick={cancelEdit}
                    >
                      Cancel Edit
                    </Button>
                  </>
                ) : (
                  <Button 
                    primary 
                    onClick={handleAddSchedule}
                  >
                    Add Schedule
                  </Button>
                )}
              </div>
            </div>
            
            <ModalButtons>
              <Button onClick={() => setShowScheduleModal(false)}>Cancel</Button>
              <Button primary onClick={handleSaveSchedule}>Save Changes</Button>
            </ModalButtons>
          </ModalContent>
        </ConfirmationModal>
      )}
    </Container>
  );
}

export default UserManagementView;
