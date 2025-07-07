import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, query, orderBy, getDocs, doc, updateDoc, Timestamp, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { 
  CalendarCheck, 
  Clock, 
  ArrowRight, 
  CalendarX, 
  ClockClockwise, 
  CheckCircle, 
  XCircle,
  NotePencil,
  User,
  Envelope,
  Calendar
} from 'phosphor-react';
import { Card, CardTitle, CardContent } from './DashboardComponents';

const RequestsContainer = styled.div`
  margin-bottom: 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid #ddd;
  background-color: ${props => props.active ? '#800000' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#600000' : '#f5f5f5'};
  }
`;

const RequestCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid ${props => {
    switch (props.status) {
      case 'pending': return '#FFC107';
      case 'approved': return '#4CAF50';
      case 'rejected': return '#F44336';
      default: return '#9E9E9E';
    }
  }};
`;

const RequestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UserEmail = styled.div`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: ${props => {
    switch (props.status) {
      case 'pending': return '#FFF8E1';
      case 'approved': return '#E8F5E9';
      case 'rejected': return '#FFEBEE';
      default: return '#F5F5F5';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'pending': return '#F57C00';
      case 'approved': return '#2E7D32';
      case 'rejected': return '#C62828';
      default: return '#757575';
    }
  }};
  border: 1px solid ${props => {
    switch (props.status) {
      case 'pending': return '#FFE082';
      case 'approved': return '#A5D6A7';
      case 'rejected': return '#EF9A9A';
      default: return '#E0E0E0';
    }
  }};
`;

const RequestDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailLabel = styled.span`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

const DetailValue = styled.span`
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TimeDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ReasonText = styled.p`
  margin: 0.5rem 0;
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ApproveButton = styled(Button)`
  background-color: #4CAF50;
  color: white;
  border: none;
  
  &:hover {
    background-color: #388E3C;
  }
`;

const RejectButton = styled(Button)`
  background-color: #F44336;
  color: white;
  border: none;
  
  &:hover {
    background-color: #D32F2F;
  }
`;

const EditButton = styled(Button)`
  background-color: #2196F3;
  color: white;
  border: none;
  
  &:hover {
    background-color: #1976D2;
  }
`;

const Modal = styled.div`
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
  padding: 1.5rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #eee;
`;

const ModalTitle = styled.h3`
  margin: 0;
  color: #333;
  font-size: 1.2rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  
  &:hover {
    color: #333;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #444;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #333;
  background-color: #f9f9f9;
  
  &:focus {
    outline: none;
    border-color: #800000;
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.1);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #333;
  background-color: #f9f9f9;
  
  &:focus {
    outline: none;
    border-color: #800000;
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #333;
  background-color: #f9f9f9;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #800000;
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.1);
  }
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const CancelButton = styled(Button)`
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const SaveButton = styled(Button)`
  background-color: #800000;
  color: white;
  border: none;
  
  &:hover {
    background-color: #600000;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  color: #666;
`;

const ScheduleChangeRequestsView = ({ user, userData }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [currentRequest, setCurrentRequest] = useState(null);
  const [editData, setEditData] = useState({
    dayOfWeek: '',
    timeIn: '',
    shiftDuration: '',
    adminNotes: '',
    status: ''
  });
  const [processing, setProcessing] = useState(false);
  
  useEffect(() => {
    fetchRequests();
  }, [filter]);
  
  const fetchRequests = async () => {
    try {
      setLoading(true);
      
      let requestsQuery;
      
      if (filter === 'all') {
        requestsQuery = query(
          collection(db, 'schedule_change_requests'),
          orderBy('createdAt', 'desc')
        );
      } else {
        requestsQuery = query(
          collection(db, 'schedule_change_requests'),
          where('status', '==', filter),
          orderBy('createdAt', 'desc')
        );
      }
      
      const querySnapshot = await getDocs(requestsQuery);
      
      const requestsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setRequests(requestsList);
    } catch (error) {
      console.error('Error fetching schedule change requests:', error);
      toast.error('Failed to load schedule change requests');
    } finally {
      setLoading(false);
    }
  };
  
  const handleEditRequest = (request) => {
    setCurrentRequest(request);
    setEditData({
      dayOfWeek: request.dayOfWeek,
      timeIn: request.timeIn,
      shiftDuration: request.shiftDuration.toString(),
      adminNotes: request.adminNotes || '',
      status: request.status
    });
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentRequest(null);
    setEditData({
      dayOfWeek: '',
      timeIn: '',
      shiftDuration: '',
      adminNotes: '',
      status: ''
    });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSaveChanges = async () => {
    if (!currentRequest) return;
    
    try {
      setProcessing(true);
      
      const requestRef = doc(db, 'schedule_change_requests', currentRequest.id);
      
      await updateDoc(requestRef, {
        dayOfWeek: editData.dayOfWeek,
        timeIn: editData.timeIn,
        shiftDuration: parseInt(editData.shiftDuration, 10),
        adminNotes: editData.adminNotes.trim(),
        status: editData.status,
        updatedAt: Timestamp.now()
      });
      
      // If approved, update the user's schedule
      if (editData.status === 'approved' && currentRequest.userId) {
        await updateUserSchedule(currentRequest.userId, {
          dayOfWeek: editData.dayOfWeek,
          timeIn: editData.timeIn,
          shiftDuration: parseInt(editData.shiftDuration, 10),
          timeRegion: currentRequest.timeRegion || 'Asia/Manila'
        });
      }
      
      toast.success('Request updated successfully');
      handleCloseModal();
      fetchRequests();
    } catch (error) {
      console.error('Error updating request:', error);
      toast.error('Failed to update request');
    } finally {
      setProcessing(false);
    }
  };
  
  const updateUserSchedule = async (userId, scheduleData) => {
    try {
      // Get the user document
      const userRef = doc(db, 'users', userId);
      const userDoc = await getDocs(userRef);
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        let schedule = userData.schedule || [];
        
        // Check if the day already exists in the schedule
        const dayIndex = schedule.findIndex(item => item.dayOfWeek === scheduleData.dayOfWeek);
        
        if (dayIndex !== -1) {
          // Update existing day
          schedule[dayIndex] = {
            ...schedule[dayIndex],
            ...scheduleData
          };
        } else {
          // Add new day to schedule
          schedule.push(scheduleData);
        }
        
        // Update the user's schedule
        await updateDoc(userRef, { schedule });
      }
    } catch (error) {
      console.error('Error updating user schedule:', error);
      throw error;
    }
  };
  
  const handleApproveRequest = async (request) => {
    try {
      setProcessing(true);
      
      const requestRef = doc(db, 'schedule_change_requests', request.id);
      
      await updateDoc(requestRef, {
        status: 'approved',
        updatedAt: Timestamp.now()
      });
      
      // Update the user's schedule
      if (request.userId) {
        await updateUserSchedule(request.userId, {
          dayOfWeek: request.dayOfWeek,
          timeIn: request.timeIn,
          shiftDuration: request.shiftDuration,
          timeRegion: request.timeRegion || 'Asia/Manila'
        });
      }
      
      toast.success('Request approved successfully');
      fetchRequests();
    } catch (error) {
      console.error('Error approving request:', error);
      toast.error('Failed to approve request');
    } finally {
      setProcessing(false);
    }
  };
  
  const handleRejectRequest = async (request) => {
    try {
      setProcessing(true);
      
      const requestRef = doc(db, 'schedule_change_requests', request.id);
      
      await updateDoc(requestRef, {
        status: 'rejected',
        updatedAt: Timestamp.now()
      });
      
      toast.success('Request rejected');
      fetchRequests();
    } catch (error) {
      console.error('Error rejecting request:', error);
      toast.error('Failed to reject request');
    } finally {
      setProcessing(false);
    }
  };
  
  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    
    try {
      const date = timestamp.toDate();
      return format(date, 'MMM d, yyyy h:mm a');
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid date';
    }
  };
  
  return (
    <Card>
      <CardTitle>Schedule Change Requests</CardTitle>
      <CardContent>
        <FilterContainer>
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            All Requests
          </FilterButton>
          <FilterButton 
            active={filter === 'pending'} 
            onClick={() => setFilter('pending')}
          >
            Pending
          </FilterButton>
          <FilterButton 
            active={filter === 'approved'} 
            onClick={() => setFilter('approved')}
          >
            Approved
          </FilterButton>
          <FilterButton 
            active={filter === 'rejected'} 
            onClick={() => setFilter('rejected')}
          >
            Rejected
          </FilterButton>
        </FilterContainer>
        
        <RequestsContainer>
          {loading ? (
            <p>Loading requests...</p>
          ) : requests.length > 0 ? (
            requests.map(request => (
              <RequestCard key={request.id} status={request.status}>
                <RequestHeader>
                  <UserInfo>
                    <UserName>
                      <User size={16} />
                      {request.userName || 'Unknown User'}
                    </UserName>
                    <UserEmail>
                      <Envelope size={14} />
                      {request.userEmail || 'No email'}
                    </UserEmail>
                  </UserInfo>
                  
                  <StatusBadge status={request.status}>
                    {request.status === 'pending' ? (
                      <>
                        <ClockClockwise size={16} weight="fill" />
                        Pending Review
                      </>
                    ) : request.status === 'approved' ? (
                      <>
                        <CheckCircle size={16} weight="fill" />
                        Approved
                      </>
                    ) : (
                      <>
                        <XCircle size={16} weight="fill" />
                        Rejected
                      </>
                    )}
                  </StatusBadge>
                </RequestHeader>
                
                <RequestDetails>
                  <DetailItem>
                    <DetailLabel>Submitted On</DetailLabel>
                    <DetailValue>
                      <Calendar size={16} />
                      {formatDate(request.createdAt)}
                    </DetailValue>
                  </DetailItem>
                  
                  <DetailItem>
                    <DetailLabel>Day Requested</DetailLabel>
                    <DetailValue>
                      {request.dayOfWeek}
                    </DetailValue>
                  </DetailItem>
                  
                  <DetailItem>
                    <DetailLabel>Schedule</DetailLabel>
                    <DetailValue>
                      <TimeDisplay>
                        <div>
                          <Clock size={16} weight="fill" style={{ color: '#4CAF50', marginRight: '4px' }} />
                          {request.timeIn}
                        </div>
                        <ArrowRight size={14} style={{ color: '#999' }} />
                        <div>{request.shiftDuration} hours</div>
                      </TimeDisplay>
                    </DetailValue>
                  </DetailItem>
                </RequestDetails>
                
                <div>
                  <DetailLabel>Reason for Change</DetailLabel>
                  <ReasonText>{request.reason}</ReasonText>
                </div>
                
                {request.adminNotes && (
                  <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
                    <DetailLabel>Admin Notes</DetailLabel>
                    <ReasonText>{request.adminNotes}</ReasonText>
                  </div>
                )}
                
                {request.status === 'pending' && (
                  <ActionButtons>
                    <ApproveButton 
                      onClick={() => handleApproveRequest(request)}
                      disabled={processing}
                    >
                      <CheckCircle size={18} weight="fill" />
                      Approve
                    </ApproveButton>
                    
                    <RejectButton 
                      onClick={() => handleRejectRequest(request)}
                      disabled={processing}
                    >
                      <XCircle size={18} weight="fill" />
                      Reject
                    </RejectButton>
                    
                    <EditButton 
                      onClick={() => handleEditRequest(request)}
                      disabled={processing}
                    >
                      <NotePencil size={18} weight="fill" />
                      Edit
                    </EditButton>
                  </ActionButtons>
                )}
                
                {request.status !== 'pending' && (
                  <ActionButtons>
                    <EditButton 
                      onClick={() => handleEditRequest(request)}
                      disabled={processing}
                    >
                      <NotePencil size={18} weight="fill" />
                      Edit
                    </EditButton>
                  </ActionButtons>
                )}
              </RequestCard>
            ))
          ) : (
            <EmptyState>
              <ClockClockwise size={48} weight="duotone" style={{ color: '#999', marginBottom: '1rem' }} />
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#555' }}>No Requests Found</h3>
              <p style={{ margin: 0, color: '#777' }}>
                {filter === 'all' 
                  ? 'There are no schedule change requests yet.' 
                  : `There are no ${filter} requests.`}
              </p>
            </EmptyState>
          )}
        </RequestsContainer>
        
        {showModal && currentRequest && (
          <Modal>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>Edit Schedule Change Request</ModalTitle>
                <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
              </ModalHeader>
              
              <FormGroup>
                <Label>User</Label>
                <Input 
                  type="text" 
                  value={currentRequest.userName || 'Unknown User'} 
                  disabled 
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Day of Week</Label>
                <Select 
                  name="dayOfWeek" 
                  value={editData.dayOfWeek} 
                  onChange={handleInputChange}
                >
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label>Time In</Label>
                <Input 
                  type="time" 
                  name="timeIn" 
                  value={editData.timeIn} 
                  onChange={handleInputChange} 
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Shift Duration (hours)</Label>
                <Select 
                  name="shiftDuration" 
                  value={editData.shiftDuration} 
                  onChange={handleInputChange}
                >
                  <option value="4">4 hours</option>
                  <option value="6">6 hours</option>
                  <option value="8">8 hours</option>
                  <option value="10">10 hours</option>
                  <option value="12">12 hours</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label>Status</Label>
                <Select 
                  name="status" 
                  value={editData.status} 
                  onChange={handleInputChange}
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label>Admin Notes</Label>
                <TextArea 
                  name="adminNotes" 
                  value={editData.adminNotes} 
                  onChange={handleInputChange}
                  placeholder="Add notes about this request..."
                />
              </FormGroup>
              
              <ModalButtons>
                <CancelButton onClick={handleCloseModal}>
                  Cancel
                </CancelButton>
                <SaveButton 
                  onClick={handleSaveChanges}
                  disabled={processing}
                >
                  {processing ? 'Saving...' : 'Save Changes'}
                </SaveButton>
              </ModalButtons>
            </ModalContent>
          </Modal>
        )}
      </CardContent>
    </Card>
  );
};

export default ScheduleChangeRequestsView;
