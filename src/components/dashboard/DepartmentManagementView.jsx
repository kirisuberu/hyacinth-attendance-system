import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { doc, setDoc, updateDoc, deleteDoc, collection, onSnapshot, serverTimestamp, query, orderBy, where, getDocs, writeBatch } from 'firebase/firestore';
import { db } from '../../firebase';
import { Users, Buildings, Pencil, Trash, Plus, UserMinus } from 'phosphor-react';

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

const DepartmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const DepartmentCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  border-left: 5px solid ${props => props.color || '#800000'};
`;

const DepartmentName = styled.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const DepartmentDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const DepartmentMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const DepartmentCode = styled.span`
  color: #800000;
  font-weight: 500;
  font-size: 0.9rem;
`;

const DepartmentActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.color || '#333'};
  padding: 0.25rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const AddDepartmentButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #800000;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #600000;
  }
`;

const SearchBar = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: ${props => props.fullWidth ? '100%' : '300px'};
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #800000;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TopControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const ModalOverlay = styled.div`
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
  max-width: ${props => props.wide ? '800px' : '500px'};
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const ModalTitle = styled.h3`
  margin-top: 0;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.25rem;
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
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
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
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #800000;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #800000;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  color: #666;
`;

function DepartmentManagementView({ isSuperAdmin, isAdmin, canEdit = false }) {
  // Both super admins and admins can manage departments
  const canManageDepartments = isSuperAdmin || isAdmin;
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [departmentMembers, setDepartmentMembers] = useState([]);
  const [loadingMembers, setLoadingMembers] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [loadingAllUsers, setLoadingAllUsers] = useState(false);
  const [membersSearchTerm, setMembersSearchTerm] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [departmentData, setDepartmentData] = useState({
    name: '',
    code: '',
    description: '',
    color: '#800000' // Default color (maroon)
  });

  useEffect(() => {
    // Set up real-time listener for departments collection
    const unsubscribe = setupDepartmentsListener();
    
    // Cleanup listener on unmount
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);
  
  // Fetch all users once
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const setupDepartmentsListener = () => {
    try {
      setLoading(true);
      const departmentsCollection = collection(db, 'departments');
      const departmentsQuery = query(departmentsCollection, orderBy('name'));
      
      // Set up real-time listener
      return onSnapshot(departmentsQuery, (snapshot) => {
        const departmentsList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setDepartments(departmentsList);
        setLoading(false);
        console.log('Real-time departments data update:', departmentsList.length);
      }, (error) => {
        console.error('Error in departments listener:', error);
        toast.error('Failed to load departments');
        setLoading(false);
      });
    } catch (error) {
      console.error('Error setting up departments listener:', error);
      toast.error('Failed to load departments');
      setLoading(false);
      return null;
    }
  };

  const handleAddDepartment = async () => {
    try {
      // Validate required fields
      if (!departmentData.name.trim() || !departmentData.code.trim()) {
        toast.error('Department name and code are required');
        return;
      }
      
      // Check if code already exists
      const codeExists = departments.some(
        dept => dept.code.toLowerCase() === departmentData.code.trim().toLowerCase()
      );
      
      if (codeExists) {
        toast.error('Department code already exists. Please use a unique code.');
        return;
      }
      
      // Generate a unique ID for the department
      const timestamp = Date.now();
      const sanitizedName = departmentData.name.trim().toLowerCase().replace(/\s+/g, '_');
      const documentId = `dept_${sanitizedName}_${timestamp}`;
      
      // Create the department document in Firestore
      const departmentRef = doc(db, 'departments', documentId);
      await setDoc(departmentRef, {
        name: departmentData.name.trim(),
        code: departmentData.code.trim().toUpperCase(),
        description: departmentData.description.trim(),
        color: departmentData.color || '#800000', // Include the color field
        createdAt: serverTimestamp()
      });
      
      toast.success(`Department "${departmentData.name}" has been added`);
      setShowAddModal(false);
      resetDepartmentForm();
    } catch (error) {
      console.error('Error adding department:', error);
      toast.error(`Failed to add department: ${error.message}`);
    }
  };

  const handleEditDepartment = async () => {
    try {
      // Validate required fields
      if (!departmentData.name.trim() || !departmentData.code.trim()) {
        toast.error('Department name and code are required');
        return;
      }
      
      // Check if code already exists (excluding the current department)
      const codeExists = departments.some(
        dept => dept.id !== selectedDepartment.id && 
               dept.code.toLowerCase() === departmentData.code.trim().toLowerCase()
      );
      
      if (codeExists) {
        toast.error('Department code already exists. Please use a unique code.');
        return;
      }
      
      // Update the department document in Firestore
      const departmentRef = doc(db, 'departments', selectedDepartment.id);
      await updateDoc(departmentRef, {
        name: departmentData.name.trim(),
        code: departmentData.code.trim().toUpperCase(),
        description: departmentData.description.trim(),
        color: departmentData.color || '#800000', // Include the color field
        updatedAt: serverTimestamp()
      });
      
      toast.success(`Department "${departmentData.name}" has been updated`);
      setShowEditModal(false);
      setSelectedDepartment(null);
    } catch (error) {
      console.error('Error updating department:', error);
      toast.error(`Failed to update department: ${error.message}`);
    }
  };

  const handleDeleteDepartment = async () => {
    if (!selectedDepartment) return;
    
    try {
      // TODO: Check if department is assigned to any users before deletion
      
      // Delete the department document from Firestore
      await deleteDoc(doc(db, 'departments', selectedDepartment.id));
      
      toast.success(`Department "${selectedDepartment.name}" has been deleted`);
      setShowDeleteModal(false);
      setSelectedDepartment(null);
    } catch (error) {
      console.error('Error deleting department:', error);
      toast.error(`Failed to delete department: ${error.message}`);
    }
  };

  const handleEditClick = (department) => {
    setSelectedDepartment(department);
    setDepartmentData({
      name: department.name || '',
      code: department.code || '',
      description: department.description || ''
    });
    setShowEditModal(true);
  };

  const handleDeleteClick = (department) => {
    setSelectedDepartment(department);
    setShowDeleteModal(true);
  };

  const handleMembersClick = async (department) => {
    setSelectedDepartment(department);
    setShowMembersModal(true);
    setMembersSearchTerm('');
    await fetchDepartmentMembers(department.id);
  };
  
  const fetchDepartmentMembers = async (departmentId) => {
    try {
      setLoadingMembers(true);
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('departments', 'array-contains', departmentId));
      const querySnapshot = await getDocs(q);
      
      const members = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setDepartmentMembers(members);
      setLoadingMembers(false);
    } catch (error) {
      console.error('Error fetching department members:', error);
      toast.error('Failed to load department members');
      setLoadingMembers(false);
      setDepartmentMembers([]);
    }
  };
  
  const fetchAllUsers = async () => {
    try {
      setLoadingAllUsers(true);
      const usersRef = collection(db, 'users');
      const q = query(usersRef, orderBy('firstName'));
      const querySnapshot = await getDocs(q);
      
      const users = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setAllUsers(users);
      setLoadingAllUsers(false);
    } catch (error) {
      console.error('Error fetching all users:', error);
      toast.error('Failed to load users');
      setLoadingAllUsers(false);
    }
  };
  
  const handleAddUserToDepartment = async (userId) => {
    if (!selectedDepartment || isProcessing) return;
    
    try {
      setIsProcessing(true);
      
      // Get the user document
      const userRef = doc(db, 'users', userId);
      const user = allUsers.find(u => u.id === userId);
      
      // Check if user already has this department
      const userDepartments = user.departments || [];
      if (userDepartments.includes(selectedDepartment.id)) {
        toast.info('User is already in this department');
        setIsProcessing(false);
        return;
      }
      
      // Add department to user's departments array
      const updatedDepartments = [...userDepartments, selectedDepartment.id];
      await updateDoc(userRef, {
        departments: updatedDepartments,
        updatedAt: serverTimestamp()
      });
      
      // Refresh the members list
      await fetchDepartmentMembers(selectedDepartment.id);
      
      toast.success(`User added to ${selectedDepartment.name} department`);
      setIsProcessing(false);
    } catch (error) {
      console.error('Error adding user to department:', error);
      toast.error('Failed to add user to department');
      setIsProcessing(false);
    }
  };
  
  const handleRemoveUserFromDepartment = async (userId) => {
    if (!selectedDepartment || isProcessing) return;
    
    try {
      setIsProcessing(true);
      
      // Get the user document
      const userRef = doc(db, 'users', userId);
      const user = departmentMembers.find(m => m.id === userId);
      
      if (!user) {
        toast.error('User not found');
        setIsProcessing(false);
        return;
      }
      
      // Remove department from user's departments array
      const userDepartments = user.departments || [];
      const updatedDepartments = userDepartments.filter(deptId => deptId !== selectedDepartment.id);
      
      await updateDoc(userRef, {
        departments: updatedDepartments,
        updatedAt: serverTimestamp()
      });
      
      // Refresh the members list
      await fetchDepartmentMembers(selectedDepartment.id);
      
      toast.success(`User removed from ${selectedDepartment.name} department`);
      setIsProcessing(false);
    } catch (error) {
      console.error('Error removing user from department:', error);
      toast.error('Failed to remove user from department');
      setIsProcessing(false);
    }
  };

  const resetDepartmentForm = () => {
    setDepartmentData({
      name: '',
      code: '',
      description: ''
    });
  };

  const filteredDepartments = departments.filter(department => {
    const searchLower = searchTerm.toLowerCase();
    return (
      department.name.toLowerCase().includes(searchLower) ||
      department.code.toLowerCase().includes(searchLower) ||
      (department.description && department.description.toLowerCase().includes(searchLower))
    );
  });

  return (
    <Container>
      <Title>
        <Buildings size={24} weight="bold" />
        Department Management
      </Title>
      
      <TopControls>
        <SearchBar
          type="text"
          placeholder="Search departments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <AddDepartmentButton onClick={() => {
          resetDepartmentForm();
          setShowAddModal(true);
        }}>
          <Plus size={18} />
          Add Department
        </AddDepartmentButton>
      </TopControls>
      
      {loading ? (
        <div>Loading departments...</div>
      ) : filteredDepartments.length > 0 ? (
        <DepartmentsGrid>
          {filteredDepartments.map(department => (
            <DepartmentCard key={department.id} color={department.color || '#800000'}>
              <DepartmentName>{department.name}</DepartmentName>
              <DepartmentDescription>
                {department.description || 'No description provided'}
              </DepartmentDescription>
              <DepartmentMeta>
                <DepartmentCode>{department.code}</DepartmentCode>
                <DepartmentActions>
                  <ActionButton 
                    onClick={() => handleMembersClick(department)}
                    title="See Department Members"
                    color="#2196f3"
                  >
                    <Users size={18} />
                  </ActionButton>
                  <ActionButton 
                    onClick={() => handleEditClick(department)}
                    title="Edit Department"
                  >
                    <Pencil size={18} />
                  </ActionButton>
                  <ActionButton 
                    onClick={() => handleDeleteClick(department)}
                    title="Delete Department"
                    color="#f44336"
                  >
                    <Trash size={18} />
                  </ActionButton>
                </DepartmentActions>
              </DepartmentMeta>
            </DepartmentCard>
          ))}
        </DepartmentsGrid>
      ) : (
        <EmptyState>
          <Buildings size={48} weight="light" style={{ marginBottom: '1rem', opacity: 0.5 }} />
          <h3>No departments found</h3>
          <p>
            {searchTerm ? 'No departments match your search criteria.' : 'Start by adding a department.'}
          </p>
        </EmptyState>
      )}
      
      {/* Add Department Modal */}
      {showAddModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>
              <Buildings size={24} />
              Add New Department
            </ModalTitle>
            
            <FormGroup>
              <Label htmlFor="departmentName">Department Name*</Label>
              <Input
                id="departmentName"
                type="text"
                value={departmentData.name}
                onChange={(e) => setDepartmentData({...departmentData, name: e.target.value})}
                placeholder="e.g., Human Resources"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="departmentCode">Department Code*</Label>
              <Input
                id="departmentCode"
                type="text"
                value={departmentData.code}
                onChange={(e) => setDepartmentData({...departmentData, code: e.target.value})}
                placeholder="e.g., HR"
                maxLength={10}
              />
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Short code to identify the department (max 10 characters)
              </div>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="departmentDescription">Description</Label>
              <TextArea
                id="departmentDescription"
                value={departmentData.description}
                onChange={(e) => setDepartmentData({...departmentData, description: e.target.value})}
                placeholder="Describe the department's function or purpose"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="departmentColor">Department Color</Label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '4px',
                    backgroundColor: departmentData.color,
                    border: '1px solid #ddd'
                  }}
                />
                <Input
                  id="departmentColor"
                  type="text"
                  value={departmentData.color}
                  onChange={(e) => setDepartmentData({...departmentData, color: e.target.value})}
                  placeholder="#RRGGBB"
                  style={{ width: '120px' }}
                />
                <Input
                  type="color"
                  value={departmentData.color}
                  onChange={(e) => setDepartmentData({...departmentData, color: e.target.value})}
                  style={{ width: '40px', padding: '0', height: '36px' }}
                />
              </div>
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Choose a color to represent this department
              </div>
            </FormGroup>
            
            <ModalButtons>
              <Button onClick={() => setShowAddModal(false)}>Cancel</Button>
              <Button 
                primary 
                onClick={handleAddDepartment}
                disabled={!departmentData.name.trim() || !departmentData.code.trim()}
              >
                Add Department
              </Button>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
      
      {/* Edit Department Modal */}
      {showEditModal && selectedDepartment && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>
              <Buildings size={24} />
              Edit Department
            </ModalTitle>
            
            <FormGroup>
              <Label htmlFor="editDepartmentName">Department Name*</Label>
              <Input
                id="editDepartmentName"
                type="text"
                value={departmentData.name}
                onChange={(e) => setDepartmentData({...departmentData, name: e.target.value})}
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="editDepartmentCode">Department Code*</Label>
              <Input
                id="editDepartmentCode"
                type="text"
                value={departmentData.code}
                onChange={(e) => setDepartmentData({...departmentData, code: e.target.value})}
                maxLength={10}
              />
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Short code to identify the department (max 10 characters)
              </div>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="editDepartmentDescription">Description</Label>
              <TextArea
                id="editDepartmentDescription"
                value={departmentData.description}
                onChange={(e) => setDepartmentData({...departmentData, description: e.target.value})}
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="editDepartmentColor">Department Color</Label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '4px',
                    backgroundColor: departmentData.color,
                    border: '1px solid #ddd'
                  }}
                />
                <Input
                  id="editDepartmentColor"
                  type="text"
                  value={departmentData.color}
                  onChange={(e) => setDepartmentData({...departmentData, color: e.target.value})}
                  placeholder="#RRGGBB"
                  style={{ width: '120px' }}
                />
                <Input
                  type="color"
                  value={departmentData.color}
                  onChange={(e) => setDepartmentData({...departmentData, color: e.target.value})}
                  style={{ width: '40px', padding: '0', height: '36px' }}
                />
              </div>
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>
                Choose a color to represent this department
              </div>
            </FormGroup>
            
            <ModalButtons>
              <Button onClick={() => {
                setShowEditModal(false);
                setSelectedDepartment(null);
              }}>
                Cancel
              </Button>
              <Button 
                primary 
                onClick={handleEditDepartment}
                disabled={!departmentData.name.trim() || !departmentData.code.trim()}
              >
                Save Changes
              </Button>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedDepartment && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>
              <Trash size={24} />
              Delete Department
            </ModalTitle>
            
            <p>
              Are you sure you want to delete the department "{selectedDepartment.name}"?
            </p>
            <p style={{ color: '#f44336' }}>
              This action cannot be undone.
            </p>
            
            <ModalButtons>
              <Button onClick={() => {
                setShowDeleteModal(false);
                setSelectedDepartment(null);
              }}>
                Cancel
              </Button>
              <Button 
                primary 
                onClick={handleDeleteDepartment}
                style={{ backgroundColor: '#f44336' }}
              >
                Delete Department
              </Button>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Department Members Modal */}
      {showMembersModal && selectedDepartment && (
        <ModalOverlay>
          <ModalContent wide>
            <ModalTitle>
              <Users size={24} />
              {selectedDepartment.name} Department Members
            </ModalTitle>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', marginTop: '1rem' }}>
              <div style={{ width: '60%', borderRight: '1px solid #eee', paddingRight: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginTop: 0, marginBottom: '1rem' }}>Current Members</h3>
                
                {loadingMembers ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    Loading members...
                  </div>
                ) : departmentMembers.length > 0 ? (
                  <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr>
                          <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: '1px solid #eee' }}>Name</th>
                          <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: '1px solid #eee' }}>Email</th>
                          <th style={{ textAlign: 'center', padding: '0.75rem', borderBottom: '1px solid #eee' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {departmentMembers.map(member => {
                          const displayName = (() => {
                            if (member.firstName && member.lastName) {
                              return `${member.firstName} ${member.lastName}`;
                            } else if (member.firstName) {
                              return member.firstName;
                            } else if (member.lastName) {
                              return member.lastName;
                            } else if (member.displayName) {
                              return member.displayName;
                            } else if (member.email) {
                              return member.email.split('@')[0];
                            } else {
                              return 'Unnamed User';
                            }
                          })();
                          
                          return (
                            <tr key={member.id}>
                              <td style={{ padding: '0.75rem', borderBottom: '1px solid #f5f5f5' }}>
                                {displayName}
                              </td>
                              <td style={{ padding: '0.75rem', borderBottom: '1px solid #f5f5f5' }}>
                                {member.email || 'No email'}
                              </td>
                              <td style={{ padding: '0.75rem', borderBottom: '1px solid #f5f5f5', textAlign: 'center' }}>
                                <ActionButton 
                                  onClick={() => handleRemoveUserFromDepartment(member.id)}
                                  title="Remove from department"
                                  color="#f44336"
                                  disabled={isProcessing}
                                >
                                  <UserMinus size={18} />
                                </ActionButton>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '2rem 0', color: '#666' }}>
                    <Users size={32} weight="light" style={{ opacity: 0.5, marginBottom: '1rem' }} />
                    <p>No members found in this department</p>
                  </div>
                )}
              </div>
              
              <div style={{ width: '40%' }}>
                <h3 style={{ fontSize: '1.1rem', marginTop: 0, marginBottom: '1rem' }}>Add Members</h3>
                
                <div style={{ marginBottom: '1rem' }}>
                  <SearchBar
                    fullWidth
                    type="text"
                    placeholder="Search users..."
                    value={membersSearchTerm}
                    onChange={(e) => setMembersSearchTerm(e.target.value)}
                  />
                </div>
                
                {loadingAllUsers ? (
                  <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                    Loading users...
                  </div>
                ) : (
                  <div style={{ maxHeight: '350px', overflowY: 'auto' }}>
                    {allUsers
                      .filter(user => {
                        // Filter users who are not already in the department
                        const userDepts = user.departments || [];
                        if (userDepts.includes(selectedDepartment.id)) {
                          return false;
                        }
                        
                        // Filter by search term if present
                        if (membersSearchTerm.trim()) {
                          const searchLower = membersSearchTerm.toLowerCase();
                          const firstName = user.firstName || '';
                          const lastName = user.lastName || '';
                          const email = user.email || '';
                          
                          return firstName.toLowerCase().includes(searchLower) || 
                                lastName.toLowerCase().includes(searchLower) || 
                                email.toLowerCase().includes(searchLower) || 
                                `${firstName} ${lastName}`.toLowerCase().includes(searchLower);
                        }
                        
                        return true;
                      })
                      .map(user => {
                        const displayName = (() => {
                          if (user.firstName && user.lastName) {
                            return `${user.firstName} ${user.lastName}`;
                          } else if (user.firstName) {
                            return user.firstName;
                          } else if (user.lastName) {
                            return user.lastName;
                          } else if (user.displayName) {
                            return user.displayName;
                          } else if (user.email) {
                            return user.email.split('@')[0];
                          } else {
                            return 'Unnamed User';
                          }
                        })();
                        
                        return (
                          <div 
                            key={user.id} 
                            style={{ 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              padding: '0.75rem',
                              borderBottom: '1px solid #f5f5f5',
                              backgroundColor: 'white'
                            }}
                          >
                            <div>
                              <div style={{ fontWeight: '500' }}>{displayName}</div>
                              <div style={{ fontSize: '0.85rem', color: '#666' }}>{user.email}</div>
                            </div>
                            <ActionButton 
                              onClick={() => handleAddUserToDepartment(user.id)}
                              title="Add to department"
                              color="#4caf50"
                              disabled={isProcessing}
                            >
                              <UserPlus size={18} />
                            </ActionButton>
                          </div>
                        );
                      })
                    }
                    
                    {allUsers.filter(user => {
                      const userDepts = user.departments || [];
                      return !userDepts.includes(selectedDepartment.id);
                    }).length === 0 && (
                      <div style={{ textAlign: 'center', padding: '1rem 0', color: '#666' }}>
                        <p>All users are already in this department</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            <ModalButtons>
              <Button onClick={() => {
                setShowMembersModal(false);
                setSelectedDepartment(null);
                setDepartmentMembers([]);
                setMembersSearchTerm('');
              }}>
                Close
              </Button>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default DepartmentManagementView;
