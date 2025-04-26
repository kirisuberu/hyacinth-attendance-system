import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs, doc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import { Trash, PencilSimple, Check, X, Users, Calendar, Clock } from 'phosphor-react';

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

function UserManagementView() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [scheduleData, setScheduleData] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    selectedDays: [],
    timeIn: '09:00',
    timeRegion: 'Asia/Manila',
    shiftDuration: '8',
  });
  
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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
      
      <SearchBar
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
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
                    <ActionButton 
                      color="#000000"
                      onClick={() => handleScheduleClick(user)}
                      title="Manage Schedule"
                    >
                      <Calendar size={20} />
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
      
      {showScheduleModal && selectedUser && (
        <ConfirmationModal>
          <ModalContent style={{ maxWidth: '600px', width: '100%' }}>
            <ModalTitle>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={24} />
                Manage Schedule for {selectedUser.name || selectedUser.email}
              </div>
            </ModalTitle>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Current Schedule</h4>
              
              {scheduleData.length > 0 ? (
                <ScheduleGrid>
                  {scheduleData.map(schedule => (
                    <ScheduleCard key={schedule.id}>
                      <ScheduleHeader>
                        <ScheduleDay>{schedule.dayOfWeek}</ScheduleDay>
                        <ActionButton 
                          color="#f44336" 
                          onClick={() => handleDeleteSchedule(schedule.id)}
                          title="Delete schedule"
                        >
                          <Trash size={16} />
                        </ActionButton>
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
              <h4 style={{ marginBottom: '0.5rem' }}>Add New Schedule</h4>
              
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
              
              <Button 
                primary 
                onClick={handleAddSchedule}
                style={{ marginTop: '0.5rem' }}
              >
                Add Schedule
              </Button>
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
