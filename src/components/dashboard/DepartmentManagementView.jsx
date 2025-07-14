import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { doc, setDoc, updateDoc, deleteDoc, collection, onSnapshot, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { Users, Buildings, Pencil, Trash, X, Check, Plus } from 'phosphor-react';

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
  width: 300px;
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
  max-width: 500px;
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

function DepartmentManagementView({ isSuperAdmin }) {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [departmentData, setDepartmentData] = useState({
    name: '',
    code: '',
    description: ''
  });

  useEffect(() => {
    // Set up real-time listener for departments collection
    const unsubscribe = setupDepartmentsListener();
    
    // Cleanup listener on unmount
    return () => {
      if (unsubscribe) unsubscribe();
    };
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
            <DepartmentCard key={department.id}>
              <DepartmentName>{department.name}</DepartmentName>
              <DepartmentDescription>
                {department.description || 'No description provided'}
              </DepartmentDescription>
              <DepartmentMeta>
                <DepartmentCode>{department.code}</DepartmentCode>
                <DepartmentActions>
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
    </Container>
  );
}

export default DepartmentManagementView;
