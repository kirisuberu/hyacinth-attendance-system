import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Card, CardTitle, CardContent } from './DashboardComponents';
import { 
  getRegistrationRequests,
  updateRegistrationRequest,
  approveRegistrationRequest,
  declineRegistrationRequest
} from '../../services/registrationService';
import { 
  CheckCircle, 
  XCircle, 
  Pencil, 
  User, 
  Buildings, 
  Calendar, 
  ClockCounterClockwise 
} from 'phosphor-react';

const RequestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const RequestCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-left: 4px solid #6e8efb;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const RequestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const RequestTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RequestDate = styled.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const RequestDetails = styled.div`
  margin-bottom: 1.5rem;
`;

const DetailRow = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`;

const DetailLabel = styled.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DetailValue = styled.span`
  color: #333;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const AcceptButton = styled(Button)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`;

const DeclineButton = styled(Button)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`;

const EditButton = styled(Button)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`;

const EditModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #555;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SaveButton = styled(Button)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`;

const CancelButton = styled(Button)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`;

const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`;

const formatDate = (timestamp) => {
  if (!timestamp) return 'N/A';
  
  try {
    let date;
    
    if (timestamp?.seconds) {
      // Firebase Timestamp object
      date = new Date(timestamp.seconds * 1000);
    } else if (timestamp?.toDate) {
      // Firebase Timestamp with toDate method
      date = timestamp.toDate();
    } else if (timestamp instanceof Date) {
      // JavaScript Date object
      date = timestamp;
    } else if (typeof timestamp === 'string') {
      // ISO string or other string format
      date = new Date(timestamp);
    } else {
      return 'Invalid date';
    }
    
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  } catch (error) {
    console.error('Error formatting timestamp:', error);
    return 'Invalid date';
  }
};

const RegistrationRequestsView = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingRequest, setEditingRequest] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    role: ''
  });
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    fetchRegistrationRequests();
  }, []);

  const fetchRegistrationRequests = async () => {
    try {
      setLoading(true);
      const requestsData = await getRegistrationRequests();
      setRequests(requestsData);
    } catch (error) {
      console.error('Error fetching registration requests:', error);
      toast.error('Failed to load registration requests');
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (request) => {
    try {
      setProcessing(true);
      await approveRegistrationRequest(request);
      toast.success(`Registration for ${request.name || request.email} approved`);
      
      // Refresh the list
      fetchRegistrationRequests();
    } catch (error) {
      console.error('Error approving registration:', error);
      toast.error('Failed to approve registration');
    } finally {
      setProcessing(false);
    }
  };

  const handleDecline = async (request) => {
    try {
      setProcessing(true);
      await declineRegistrationRequest(request);
      toast.success(`Registration for ${request.name || request.email} declined`);
      
      // Refresh the list
      fetchRegistrationRequests();
    } catch (error) {
      console.error('Error declining registration:', error);
      toast.error('Failed to decline registration');
    } finally {
      setProcessing(false);
    }
  };

  const handleEdit = (request) => {
    setEditingRequest(request);
    setFormData({
      name: request.name || '',
      email: request.email || '',
      position: request.position || '',
      role: request.role || 'user'
    });
  };

  const handleCloseModal = () => {
    setEditingRequest(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    
    try {
      setProcessing(true);
      
      // Update the registration request
      await updateRegistrationRequest(editingRequest.id, {
        name: formData.name,
        email: formData.email,
        position: formData.position,
        role: formData.role
      });
      
      toast.success('Registration request updated');
      
      // Close modal and refresh the list
      setEditingRequest(null);
      fetchRegistrationRequests();
    } catch (error) {
      console.error('Error updating registration request:', error);
      toast.error('Failed to update registration request');
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardTitle>Registration Requests</CardTitle>
        <CardContent>
          <LoadingState>Loading registration requests...</LoadingState>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardTitle>Registration Requests</CardTitle>
      <CardContent>
        <RequestsContainer>
          {requests.length === 0 ? (
            <EmptyState>
              <p>No pending registration requests</p>
            </EmptyState>
          ) : (
            requests.map(request => (
              <RequestCard key={request.id}>
                <RequestHeader>
                  <RequestTitle>
                    <User size={18} weight="bold" />
                    {request.name || request.email}
                  </RequestTitle>
                  <RequestDate>
                    <ClockCounterClockwise size={14} />
                    {formatDate(request.createdAt)}
                  </RequestDate>
                </RequestHeader>
                
                <RequestDetails>
                  <DetailRow>
                    <DetailLabel>
                      <User size={16} />
                      Email:
                    </DetailLabel>
                    <DetailValue>{request.email}</DetailValue>
                  </DetailRow>
                  
                  <DetailRow>
                    <DetailLabel>
                      <Buildings size={16} />
                      Position:
                    </DetailLabel>
                    <DetailValue>{request.position || 'Not specified'}</DetailValue>
                  </DetailRow>
                  
                  <DetailRow>
                    <DetailLabel>
                      <User size={16} />
                      Role:
                    </DetailLabel>
                    <DetailValue>{request.role || 'user'}</DetailValue>
                  </DetailRow>
                </RequestDetails>
                
                <ActionButtons>
                  <EditButton 
                    onClick={() => handleEdit(request)}
                    disabled={processing}
                  >
                    <Pencil size={16} />
                    Edit
                  </EditButton>
                  
                  <AcceptButton 
                    onClick={() => handleAccept(request)}
                    disabled={processing}
                  >
                    <CheckCircle size={16} />
                    Accept
                  </AcceptButton>
                  
                  <DeclineButton 
                    onClick={() => handleDecline(request)}
                    disabled={processing}
                  >
                    <XCircle size={16} />
                    Decline
                  </DeclineButton>
                </ActionButtons>
              </RequestCard>
            ))
          )}
        </RequestsContainer>
        
        {editingRequest && (
          <EditModal>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>Edit Registration Request</ModalTitle>
                <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
              </ModalHeader>
              
              <Form onSubmit={handleSaveEdit}>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="position">Position</Label>
                  <Input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="Enter position"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="role">Role</Label>
                  <Select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="super_admin">Super Admin</option>
                  </Select>
                </FormGroup>
                
                <ModalButtons>
                  <CancelButton type="button" onClick={handleCloseModal}>
                    Cancel
                  </CancelButton>
                  <SaveButton type="submit" disabled={processing}>
                    Save Changes
                  </SaveButton>
                </ModalButtons>
              </Form>
            </ModalContent>
          </EditModal>
        )}
      </CardContent>
    </Card>
  );
};

export default RegistrationRequestsView;
