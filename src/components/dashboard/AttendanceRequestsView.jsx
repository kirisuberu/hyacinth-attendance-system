import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { 
  getAllRequests, 
  updateRequestStatus, 
  REQUEST_TYPES, 
  REQUEST_STATUS 
} from '../../services/requestService';
import { Card, CardTitle, CardContent } from './DashboardComponents';
import { toast } from 'react-toastify';
import { Check, X, Clock, FileText } from 'phosphor-react';

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.active ? '#e91e63' : 'transparent'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  border-bottom: 3px solid ${props => props.active ? '#c2185b' : 'transparent'};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#e91e63' : '#f5f5f5'};
  }
`;

const RequestsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    background-color: #f9f9f9;
    font-weight: 600;
    color: #333;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  
  background-color: ${props => {
    switch (props.status) {
      case REQUEST_STATUS.PENDING: return '#fff8e1';
      case REQUEST_STATUS.APPROVED: return '#e8f5e9';
      case REQUEST_STATUS.REJECTED: return '#ffebee';
      default: return '#f5f5f5';
    }
  }};
  
  color: ${props => {
    switch (props.status) {
      case REQUEST_STATUS.PENDING: return '#f57c00';
      case REQUEST_STATUS.APPROVED: return '#2e7d32';
      case REQUEST_STATUS.REJECTED: return '#c62828';
      default: return '#757575';
    }
  }};
  
  border: 1px solid ${props => {
    switch (props.status) {
      case REQUEST_STATUS.PENDING: return '#ffe082';
      case REQUEST_STATUS.APPROVED: return '#a5d6a7';
      case REQUEST_STATUS.REJECTED: return '#ef9a9a';
      default: return '#e0e0e0';
    }
  }};
`;

const ActionButton = styled.button`
  padding: 6px;
  margin-right: 5px;
  background-color: ${props => props.approve ? '#e8f5e9' : props.reject ? '#ffebee' : '#f5f5f5'};
  color: ${props => props.approve ? '#2e7d32' : props.reject ? '#c62828' : '#757575'};
  border: 1px solid ${props => props.approve ? '#a5d6a7' : props.reject ? '#ef9a9a' : '#e0e0e0'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.approve ? '#a5d6a7' : props.reject ? '#ef9a9a' : '#e0e0e0'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 30px;
  color: #757575;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalTitle = styled.h3`
  margin-top: 0;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(Button)`
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const SubmitButton = styled(Button)`
  background-color: ${props => props.approve ? '#4caf50' : '#e91e63'};
  color: white;
  border: 1px solid ${props => props.approve ? '#388e3c' : '#c2185b'};
  
  &:hover {
    background-color: ${props => props.approve ? '#388e3c' : '#c2185b'};
  }
`;

const RequestDetails = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const DetailRow = styled.div`
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const formatDate = (timestamp) => {
  if (!timestamp) return 'N/A';
  
  try {
    const date = timestamp.toDate();
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
};

const formatTime = (timestamp) => {
  if (!timestamp) return 'N/A';
  
  try {
    const date = timestamp.toDate();
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  } catch (error) {
    console.error('Error formatting time:', error);
    return 'Invalid Time';
  }
};

const formatDateTime = (timestamp) => {
  if (!timestamp) return 'N/A';
  
  try {
    const date = timestamp.toDate();
    return `${formatDate(timestamp)} at ${formatTime(timestamp)}`;
  } catch (error) {
    console.error('Error formatting date time:', error);
    return 'Invalid Date/Time';
  }
};

const AttendanceRequestsView = () => {
  const [activeTab, setActiveTab] = useState('absence');
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [adminRemarks, setAdminRemarks] = useState('');
  const [actionType, setActionType] = useState(null);
  const [processing, setProcessing] = useState(false);
  
  // Fetch requests on component mount and when tab changes
  useEffect(() => {
    fetchRequests();
  }, [activeTab]);
  
  const fetchRequests = async () => {
    try {
      setLoading(true);
      const requestType = activeTab === 'absence' 
        ? REQUEST_TYPES.ABSENCE_PETITION 
        : REQUEST_TYPES.OVERTIME_REQUEST;
      
      const data = await getAllRequests(requestType);
      setRequests(data);
    } catch (error) {
      console.error('Error fetching requests:', error);
      toast.error('Failed to load requests');
    } finally {
      setLoading(false);
    }
  };
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const handleAction = (request, action) => {
    setSelectedRequest(request);
    setActionType(action);
    setAdminRemarks('');
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRequest(null);
    setActionType(null);
    setAdminRemarks('');
  };
  
  const handleSubmitAction = async (e) => {
    e.preventDefault();
    
    if (!adminRemarks.trim()) {
      toast.error('Please provide remarks for your decision');
      return;
    }
    
    try {
      setProcessing(true);
      
      const status = actionType === 'approve' 
        ? REQUEST_STATUS.APPROVED 
        : REQUEST_STATUS.REJECTED;
      
      await updateRequestStatus(
        selectedRequest.id,
        status,
        adminRemarks
      );
      
      toast.success(`Request ${actionType === 'approve' ? 'approved' : 'rejected'} successfully`);
      handleCloseModal();
      fetchRequests(); // Refresh the list
    } catch (error) {
      console.error('Error processing request:', error);
      toast.error('Failed to process request: ' + error.message);
    } finally {
      setProcessing(false);
    }
  };
  
  const renderAbsencePetitions = () => {
    if (loading) {
      return <EmptyState>Loading requests...</EmptyState>;
    }
    
    if (requests.length === 0) {
      return <EmptyState>No absence petitions found</EmptyState>;
    }
    
    return (
      <RequestsTable>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Absence Date</th>
            <th>Submitted</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.userName}<br/><small>{request.userEmail}</small></td>
              <td>{formatDateTime(request.attendanceDate)}</td>
              <td>{formatDateTime(request.createdAt)}</td>
              <td>
                {request.remarks.length > 50 
                  ? `${request.remarks.substring(0, 50)}...` 
                  : request.remarks}
              </td>
              <td>
                <StatusBadge status={request.status}>
                  {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                </StatusBadge>
              </td>
              <td>
                {request.status === REQUEST_STATUS.PENDING ? (
                  <>
                    <ActionButton 
                      approve 
                      onClick={() => handleAction(request, 'approve')}
                      title="Approve"
                    >
                      <Check size={16} />
                    </ActionButton>
                    <ActionButton 
                      reject 
                      onClick={() => handleAction(request, 'reject')}
                      title="Reject"
                    >
                      <X size={16} />
                    </ActionButton>
                  </>
                ) : (
                  <ActionButton 
                    onClick={() => handleAction(request, 'view')}
                    title="View Details"
                  >
                    <FileText size={16} />
                  </ActionButton>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </RequestsTable>
    );
  };
  
  const renderOvertimeRequests = () => {
    if (loading) {
      return <EmptyState>Loading requests...</EmptyState>;
    }
    
    if (requests.length === 0) {
      return <EmptyState>No overtime requests found</EmptyState>;
    }
    
    return (
      <RequestsTable>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Hours</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.userName}<br/><small>{request.userEmail}</small></td>
              <td>{formatDate(request.date)}</td>
              <td>{request.hours}</td>
              <td>
                {request.remarks.length > 50 
                  ? `${request.remarks.substring(0, 50)}...` 
                  : request.remarks}
              </td>
              <td>
                <StatusBadge status={request.status}>
                  {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                </StatusBadge>
              </td>
              <td>
                {request.status === REQUEST_STATUS.PENDING ? (
                  <>
                    <ActionButton 
                      approve 
                      onClick={() => handleAction(request, 'approve')}
                      title="Approve"
                    >
                      <Check size={16} />
                    </ActionButton>
                    <ActionButton 
                      reject 
                      onClick={() => handleAction(request, 'reject')}
                      title="Reject"
                    >
                      <X size={16} />
                    </ActionButton>
                  </>
                ) : (
                  <ActionButton 
                    onClick={() => handleAction(request, 'view')}
                    title="View Details"
                  >
                    <FileText size={16} />
                  </ActionButton>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </RequestsTable>
    );
  };
  
  const renderRequestDetails = () => {
    if (!selectedRequest) return null;
    
    if (selectedRequest.type === REQUEST_TYPES.ABSENCE_PETITION) {
      return (
        <RequestDetails>
          <DetailRow><strong>Employee:</strong> {selectedRequest.userName}</DetailRow>
          <DetailRow><strong>Email:</strong> {selectedRequest.userEmail}</DetailRow>
          <DetailRow><strong>Absence Date:</strong> {formatDateTime(selectedRequest.attendanceDate)}</DetailRow>
          <DetailRow><strong>Submitted:</strong> {formatDateTime(selectedRequest.createdAt)}</DetailRow>
          <DetailRow><strong>Status:</strong> {selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}</DetailRow>
          <DetailRow><strong>Reason:</strong> {selectedRequest.remarks}</DetailRow>
          {selectedRequest.status !== REQUEST_STATUS.PENDING && (
            <DetailRow><strong>Admin Remarks:</strong> {selectedRequest.adminRemarks}</DetailRow>
          )}
        </RequestDetails>
      );
    } else {
      return (
        <RequestDetails>
          <DetailRow><strong>Employee:</strong> {selectedRequest.userName}</DetailRow>
          <DetailRow><strong>Email:</strong> {selectedRequest.userEmail}</DetailRow>
          <DetailRow><strong>Date:</strong> {formatDate(selectedRequest.date)}</DetailRow>
          <DetailRow><strong>Hours Requested:</strong> {selectedRequest.hours}</DetailRow>
          <DetailRow><strong>Submitted:</strong> {formatDateTime(selectedRequest.createdAt)}</DetailRow>
          <DetailRow><strong>Status:</strong> {selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}</DetailRow>
          <DetailRow><strong>Reason:</strong> {selectedRequest.remarks}</DetailRow>
          {selectedRequest.status !== REQUEST_STATUS.PENDING && (
            <DetailRow><strong>Admin Remarks:</strong> {selectedRequest.adminRemarks}</DetailRow>
          )}
        </RequestDetails>
      );
    }
  };
  
  return (
    <Card>
      <CardTitle>Attendance Requests</CardTitle>
      <CardContent>
        <TabContainer>
          <Tab 
            active={activeTab === 'absence'} 
            onClick={() => handleTabChange('absence')}
          >
            Absence Petitions
          </Tab>
          <Tab 
            active={activeTab === 'overtime'} 
            onClick={() => handleTabChange('overtime')}
          >
            Overtime Requests
          </Tab>
        </TabContainer>
        
        {activeTab === 'absence' ? renderAbsencePetitions() : renderOvertimeRequests()}
        
        {/* Action Modal */}
        {showModal && (
          <Modal>
            <ModalContent>
              <ModalTitle>
                {actionType === 'view' 
                  ? 'Request Details' 
                  : actionType === 'approve' 
                    ? 'Approve Request' 
                    : 'Reject Request'}
              </ModalTitle>
              
              {renderRequestDetails()}
              
              {actionType !== 'view' ? (
                <ModalForm onSubmit={handleSubmitAction}>
                  <div>
                    <p>Please provide remarks for your decision:</p>
                  </div>
                  <TextArea
                    value={adminRemarks}
                    onChange={(e) => setAdminRemarks(e.target.value)}
                    placeholder="Enter your remarks (required)"
                    required
                  />
                  <ButtonGroup>
                    <CancelButton type="button" onClick={handleCloseModal} disabled={processing}>
                      Cancel
                    </CancelButton>
                    <SubmitButton 
                      type="submit" 
                      approve={actionType === 'approve'}
                      disabled={processing || !adminRemarks.trim()}
                    >
                      {processing 
                        ? 'Processing...' 
                        : actionType === 'approve' 
                          ? 'Approve' 
                          : 'Reject'}
                    </SubmitButton>
                  </ButtonGroup>
                </ModalForm>
              ) : (
                <ButtonGroup>
                  <CancelButton type="button" onClick={handleCloseModal}>
                    Close
                  </CancelButton>
                </ButtonGroup>
              )}
            </ModalContent>
          </Modal>
        )}
      </CardContent>
    </Card>
  );
};

export default AttendanceRequestsView;
