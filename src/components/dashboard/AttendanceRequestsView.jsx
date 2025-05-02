import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { 
  getAllRequests, 
  updateRequestStatus, 
  REQUEST_TYPES, 
  REQUEST_STATUS 
} from '../../services/requestService';
import {
  getAllAttendanceRecords,
  overrideAttendanceRecord,
  deleteAttendanceRecord,
  getAttendanceOverrideHistory
} from '../../services/attendanceService';
import { Card, CardTitle, CardContent } from './DashboardComponents';
import { toast } from 'react-toastify';
import { Check, X, Clock, FileText, PencilSimple, Calendar, User, ClockClockwise, CaretDown, CaretUp, Eye, Trash } from 'phosphor-react';
import { auth } from '../../firebase';

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

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
`;

const FilterLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: #555;
`;

const FilterSelect = styled.select`
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const FilterInput = styled.input`
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const FilterButton = styled.button`
  padding: 8px 15px;
  background-color: #e91e63;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  align-self: flex-end;
  margin-top: auto;
  
  &:hover {
    background-color: #c2185b;
  }
`;

const OverrideButton = styled(ActionButton)`
  background-color: #e3f2fd;
  color: #1976d2;
  border: 1px solid #bbdefb;
  
  &:hover {
    background-color: #bbdefb;
  }
`;

const ViewHistoryButton = styled(ActionButton)`
  background-color: #f3e5f5;
  color: #7b1fa2;
  border: 1px solid #e1bee7;
  
  &:hover {
    background-color: #e1bee7;
  }
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
  border-radius: 8px;
  padding: 20px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const ModalTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  
  &:hover {
    color: #333;
  }
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FormLabel = styled.label`
  font-weight: 600;
  font-size: 0.9rem;
  color: #555;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const FormSelect = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const FormTextarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  min-height: 100px;
  resize: vertical;
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(FormButton)`
  background-color: #f5f5f5;
  color: #333;
  
  &:hover:not(:disabled) {
    background-color: #e0e0e0;
  }
`;

const SubmitButton = styled(FormButton)`
  background-color: #e91e63;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: #c2185b;
  }
`;

const HistoryContainer = styled.div`
  margin-top: 20px;
  border-top: 1px solid #eee;
  padding-top: 15px;
`;

const HistoryTitle = styled.h4`
  margin: 0 0 10px 0;
  color: #555;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const HistoryItem = styled.div`
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
`;

const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #777;
  margin-bottom: 5px;
`;

const HistoryContent = styled.div`
  font-size: 0.9rem;
`;

const HistoryChanges = styled.div`
  margin-top: 10px;
  font-size: 0.85rem;
  
  ul {
    margin: 5px 0;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 3px;
  }
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
  color: #666;
  cursor: pointer;
  padding: 5px;
  margin-top: 5px;
  
  &:hover {
    color: #333;
  }
`;

const formatDate = (timestamp) => {
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
  try {
    const date = timestamp.toDate();
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (error) {
    console.error('Error formatting time:', error);
    return 'Invalid Time';
  }
};

const formatDateTime = (timestamp) => {
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
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showOverrideModal, setShowOverrideModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedAttendance, setSelectedAttendance] = useState(null);
  const [adminRemarks, setAdminRemarks] = useState('');
  const [actionType, setActionType] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [deleteReason, setDeleteReason] = useState('');
  const [overrideData, setOverrideData] = useState({
    type: '',
    status: '',
    timestamp: '',
    reason: ''
  });
  const [attendanceFilters, setAttendanceFilters] = useState({
    userId: '',
    startDate: '',
    endDate: '',
    type: ''
  });
  const [overrideHistory, setOverrideHistory] = useState([]);
  const [expandedHistoryItems, setExpandedHistoryItems] = useState({});
  
  // Fetch requests on component mount and when tab changes
  useEffect(() => {
    if (activeTab === 'absence' || activeTab === 'overtime') {
      fetchRequests();
    } else if (activeTab === 'override') {
      fetchAttendanceRecords();
    }
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
  
  const fetchAttendanceRecords = async () => {
    try {
      setLoading(true);
      const records = await getAllAttendanceRecords({
        ...attendanceFilters,
        limit: 50
      });
      setAttendanceRecords(records);
    } catch (error) {
      console.error('Error getting attendance records:', error);
      toast.error('Failed to load attendance records');
    } finally {
      setLoading(false);
    }
  };
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setAttendanceFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const applyFilters = () => {
    fetchAttendanceRecords();
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
  
  const handleOpenOverrideModal = (record) => {
    setSelectedAttendance(record);
    setOverrideData({
      type: record.type || '',
      status: record.status || '',
      timestamp: record.timestamp ? new Date(record.timestamp.seconds * 1000).toISOString().slice(0, 16) : '',
      reason: ''
    });
    setShowOverrideModal(true);
  };
  
  const handleCloseOverrideModal = () => {
    setShowOverrideModal(false);
    setSelectedAttendance(null);
    setOverrideData({
      type: '',
      status: '',
      timestamp: '',
      reason: ''
    });
  };
  
  const handleOverrideChange = (e) => {
    const { name, value } = e.target;
    setOverrideData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmitOverride = async (e) => {
    e.preventDefault();
    
    if (!overrideData.reason.trim()) {
      toast.error('Please provide a reason for the override');
      return;
    }
    
    try {
      setProcessing(true);
      
      // Get current user info (admin)
      const currentUser = auth.currentUser;
      const adminId = currentUser?.uid || 'unknown-admin';
      const adminName = currentUser?.displayName || currentUser?.email || 'Admin User';
      
      // Prepare the new data
      const newData = {};
      
      if (overrideData.type !== selectedAttendance.type) {
        newData.type = overrideData.type;
      }
      
      if (overrideData.status !== selectedAttendance.status) {
        newData.status = overrideData.status;
      }
      
      if (overrideData.timestamp) {
        const newTimestamp = new Date(overrideData.timestamp);
        if (selectedAttendance.timestamp && 
            (newTimestamp.getTime() !== selectedAttendance.timestamp.toDate().getTime())) {
          newData.timestamp = newTimestamp;
        }
      }
      
      // Only proceed if there are changes
      if (Object.keys(newData).length === 0) {
        toast.info('No changes were made to the record');
        setProcessing(false);
        return;
      }
      
      await overrideAttendanceRecord(
        selectedAttendance.id,
        newData,
        adminId,
        adminName,
        overrideData.reason
      );
      
      toast.success('Attendance record overridden successfully');
      handleCloseOverrideModal();
      fetchAttendanceRecords(); // Refresh the list
    } catch (error) {
      console.error('Error overriding attendance record:', error);
      toast.error('Failed to override attendance record: ' + error.message);
    } finally {
      setProcessing(false);
    }
  };
  
  const handleViewHistory = async (record) => {
    try {
      setLoading(true);
      setSelectedAttendance(record);
      
      const history = await getAttendanceOverrideHistory(record.id);
      setOverrideHistory(history);
      setShowHistoryModal(true);
    } catch (error) {
      console.error('Error fetching override history:', error);
      toast.error('Failed to load override history');
    } finally {
      setLoading(false);
    }
  };
  
  const handleCloseHistoryModal = () => {
    setShowHistoryModal(false);
    setSelectedAttendance(null);
    setOverrideHistory([]);
    setExpandedHistoryItems({});
  };
  
  const handleOpenDeleteModal = (record) => {
    setSelectedAttendance(record);
    setDeleteReason('');
    setShowDeleteModal(true);
  };
  
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedAttendance(null);
    setDeleteReason('');
  };
  
  const handleDeleteAttendance = async (e) => {
    e.preventDefault();
    
    if (!deleteReason.trim()) {
      toast.error('Please provide a reason for deleting this record');
      return;
    }
    
    try {
      setProcessing(true);
      
      // Get current user info (admin)
      const currentUser = auth.currentUser;
      const adminId = currentUser?.uid || 'unknown-admin';
      const adminName = currentUser?.displayName || currentUser?.email || 'Admin User';
      
      await deleteAttendanceRecord(
        selectedAttendance.id,
        adminId,
        adminName,
        deleteReason
      );
      
      toast.success('Attendance record deleted successfully');
      handleCloseDeleteModal();
      fetchAttendanceRecords(); // Refresh the list
    } catch (error) {
      console.error('Error deleting attendance record:', error);
      toast.error('Failed to delete attendance record: ' + error.message);
    } finally {
      setProcessing(false);
    }
  };
  
  const toggleHistoryItemExpand = (historyId) => {
    setExpandedHistoryItems(prev => ({
      ...prev,
      [historyId]: !prev[historyId]
    }));
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
            <th>Date</th>
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
            <th>Remarks</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.userName}</td>
              <td>{formatDate(request.date)}</td>
              <td>{request.hours} hours</td>
              <td>{request.remarks}</td>
              <td>
                <StatusBadge status={request.status}>
                  {request.status}
                </StatusBadge>
              </td>
              <td>
                {request.status === REQUEST_STATUS.PENDING && (
                  <>
                    <ActionButton 
                      approve
                      onClick={() => handleAction(request, 'approve')}
                      title="Approve Request"
                    >
                      <Check size={16} weight="bold" />
                    </ActionButton>
                    <ActionButton 
                      reject
                      onClick={() => handleAction(request, 'reject')}
                      title="Reject Request"
                    >
                      <X size={16} weight="bold" />
                    </ActionButton>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </RequestsTable>
    );
  };
  
  const renderAttendanceOverride = () => {
    if (loading && attendanceRecords.length === 0) {
      return <EmptyState>Loading attendance records...</EmptyState>;
    }
    
    return (
      <>
        <FilterContainer>
          <FilterGroup>
            <FilterLabel>Employee ID</FilterLabel>
            <FilterInput 
              type="text" 
              name="userId" 
              value={attendanceFilters.userId} 
              onChange={handleFilterChange} 
              placeholder="Enter employee ID"
            />
          </FilterGroup>
          
          <FilterGroup>
            <FilterLabel>Start Date</FilterLabel>
            <FilterInput 
              type="date" 
              name="startDate" 
              value={attendanceFilters.startDate} 
              onChange={handleFilterChange}
            />
          </FilterGroup>
          
          <FilterGroup>
            <FilterLabel>End Date</FilterLabel>
            <FilterInput 
              type="date" 
              name="endDate" 
              value={attendanceFilters.endDate} 
              onChange={handleFilterChange}
            />
          </FilterGroup>
          
          <FilterGroup>
            <FilterLabel>Record Type</FilterLabel>
            <FilterSelect 
              name="type" 
              value={attendanceFilters.type} 
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              <option value="In">Time In</option>
              <option value="Out">Time Out</option>
              <option value="Absent">Absent</option>
            </FilterSelect>
          </FilterGroup>
          
          <FilterGroup>
            <FilterButton onClick={applyFilters}>
              Apply Filters
            </FilterButton>
          </FilterGroup>
        </FilterContainer>
        
        {attendanceRecords.length === 0 ? (
          <EmptyState>No attendance records found</EmptyState>
        ) : (
          <RequestsTable>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Date & Time</th>
                <th>Type</th>
                <th>Status</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map(record => (
                <tr key={record.id} style={record.isOverridden ? { backgroundColor: '#fff8e1' } : {}}>
                  <td>{record.name}</td>
                  <td>{record.formattedDate}</td>
                  <td>{record.type}</td>
                  <td>
                    <StatusBadge status={record.status === 'Late' ? REQUEST_STATUS.REJECTED : 
                               record.status === 'Early' ? REQUEST_STATUS.APPROVED : 
                               REQUEST_STATUS.PENDING}>
                      {record.status}
                    </StatusBadge>
                  </td>
                  <td>
                    {record.notes || 'N/A'}
                    {record.isOverridden && (
                      <div style={{ fontSize: '0.8rem', color: '#e65100', marginTop: '3px' }}>
                        Overridden by {record.overrideInfo?.overriddenBy || 'Admin'}
                      </div>
                    )}
                  </td>
                  <td>
                    <OverrideButton 
                      onClick={() => handleOpenOverrideModal(record)}
                      title="Override Record"
                    >
                      <PencilSimple size={16} weight="bold" />
                    </OverrideButton>
                    
                    {record.isOverridden && (
                      <ViewHistoryButton 
                        onClick={() => handleViewHistory(record)}
                        title="View Override History"
                      >
                        <ClockClockwise size={16} weight="bold" />
                      </ViewHistoryButton>
                    )}
                    
                    {/* Delete button for duplicate records */}
                    <ActionButton 
                      reject
                      onClick={() => handleOpenDeleteModal(record)}
                      title="Delete Record (for duplicates)"
                    >
                      <Trash size={16} weight="bold" />
                    </ActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </RequestsTable>
        )}
      </>
    );
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
          <Tab 
            active={activeTab === 'override'} 
            onClick={() => handleTabChange('override')}
          >
            Attendance Override
          </Tab>
        </TabContainer>
        
        {activeTab === 'absence' && renderAbsencePetitions()}
        {activeTab === 'overtime' && renderOvertimeRequests()}
        {activeTab === 'override' && renderAttendanceOverride()}
        
        {/* Action Modal */}
        {showModal && (
          <Modal>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>
                  {actionType === 'approve' ? 'Approve' : actionType === 'reject' ? 'Reject' : 'View'} Request
                </ModalTitle>
                <ModalCloseButton onClick={handleCloseModal}>&times;</ModalCloseButton>
              </ModalHeader>
              
              <ModalForm onSubmit={handleSubmitAction}>
                {actionType === 'view' ? (
                  <div>
                    <p><strong>Employee:</strong> {selectedRequest?.userName}</p>
                    <p><strong>Email:</strong> {selectedRequest?.userEmail}</p>
                    <p><strong>Date:</strong> {selectedRequest?.date ? formatDate(selectedRequest.date) : 'N/A'}</p>
                    <p><strong>Type:</strong> {selectedRequest?.type === REQUEST_TYPES.ABSENCE_PETITION ? 'Absence Petition' : 'Overtime Request'}</p>
                    {selectedRequest?.type === REQUEST_TYPES.OVERTIME_REQUEST && (
                      <p><strong>Hours:</strong> {selectedRequest?.hours} hours</p>
                    )}
                    <p><strong>Remarks:</strong> {selectedRequest?.remarks}</p>
                    <p><strong>Status:</strong> {selectedRequest?.status}</p>
                    {selectedRequest?.adminRemarks && (
                      <p><strong>Admin Remarks:</strong> {selectedRequest.adminRemarks}</p>
                    )}
                    <FormActions>
                      <CancelButton type="button" onClick={handleCloseModal}>Close</CancelButton>
                    </FormActions>
                  </div>
                ) : (
                  <>
                    <FormGroup>
                      <FormLabel>Admin Remarks</FormLabel>
                      <FormTextarea 
                        value={adminRemarks}
                        onChange={(e) => setAdminRemarks(e.target.value)}
                        placeholder="Enter your remarks for this decision..."
                        required
                      />
                    </FormGroup>
                    
                    <FormActions>
                      <CancelButton type="button" onClick={handleCloseModal}>Cancel</CancelButton>
                      <SubmitButton 
                        type="submit" 
                        disabled={processing}
                        style={{
                          backgroundColor: actionType === 'approve' ? '#4caf50' : '#f44336'
                        }}
                      >
                        {processing ? 'Processing...' : actionType === 'approve' ? 'Approve' : 'Reject'}
                      </SubmitButton>
                    </FormActions>
                  </>
                )}
              </ModalForm>
            </ModalContent>
          </Modal>
        )}
        
        {/* Override Modal */}
        {showOverrideModal && (
          <Modal>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>Override Attendance Record</ModalTitle>
                <ModalCloseButton onClick={handleCloseOverrideModal}>&times;</ModalCloseButton>
              </ModalHeader>
              
              <ModalForm onSubmit={handleSubmitOverride}>
                <FormGroup>
                  <FormLabel>Employee</FormLabel>
                  <FormInput 
                    type="text" 
                    value={selectedAttendance?.name || ''} 
                    disabled 
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Record Type</FormLabel>
                  <FormSelect 
                    name="type" 
                    value={overrideData.type} 
                    onChange={handleOverrideChange}
                  >
                    <option value="In">Time In</option>
                    <option value="Out">Time Out</option>
                    <option value="Absent">Absent</option>
                  </FormSelect>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Status</FormLabel>
                  <FormSelect 
                    name="status" 
                    value={overrideData.status} 
                    onChange={handleOverrideChange}
                  >
                    <option value="On Time">On Time</option>
                    <option value="Late">Late</option>
                    <option value="Early">Early</option>
                    <option value="Absent">Absent</option>
                  </FormSelect>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Date & Time</FormLabel>
                  <FormInput 
                    type="datetime-local" 
                    name="timestamp" 
                    value={overrideData.timestamp} 
                    onChange={handleOverrideChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Reason for Override</FormLabel>
                  <FormTextarea 
                    name="reason" 
                    value={overrideData.reason} 
                    onChange={handleOverrideChange} 
                    placeholder="Provide a reason for this override..."
                    required
                  />
                </FormGroup>
                
                <FormActions>
                  <CancelButton 
                    type="button" 
                    onClick={handleCloseOverrideModal}
                  >
                    Cancel
                  </CancelButton>
                  <SubmitButton 
                    type="submit" 
                    disabled={processing}
                  >
                    {processing ? 'Processing...' : 'Submit Override'}
                  </SubmitButton>
                </FormActions>
              </ModalForm>
            </ModalContent>
          </Modal>
        )}
        
        {/* History Modal */}
        {showHistoryModal && (
          <Modal>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>Override History</ModalTitle>
                <ModalCloseButton onClick={handleCloseHistoryModal}>&times;</ModalCloseButton>
              </ModalHeader>
              
              <div>
                <h4 style={{ margin: '0 0 15px 0' }}>Attendance Record Details</h4>
                <p><strong>Employee:</strong> {selectedAttendance?.name}</p>
                <p><strong>Date & Time:</strong> {selectedAttendance?.formattedDate}</p>
                <p><strong>Type:</strong> {selectedAttendance?.type}</p>
                <p><strong>Current Status:</strong> {selectedAttendance?.status}</p>
                
                <HistoryContainer>
                  <HistoryTitle>
                    <ClockClockwise size={18} />
                    Override History
                  </HistoryTitle>
                  
                  {overrideHistory.length === 0 ? (
                    <p>No override history found</p>
                  ) : (
                    overrideHistory.map(history => (
                      <HistoryItem key={history.id}>
                        <HistoryHeader>
                          <span>Overridden by {history.overriddenBy?.name} on {new Date(history.timestamp).toLocaleString()}</span>
                        </HistoryHeader>
                        <HistoryContent>
                          <p><strong>Reason:</strong> {history.reason}</p>
                          
                          <ExpandButton onClick={() => toggleHistoryItemExpand(history.id)}>
                            {expandedHistoryItems[history.id] ? (
                              <>
                                <CaretUp size={14} />
                                Hide Changes
                              </>
                            ) : (
                              <>
                                <CaretDown size={14} />
                                View Changes
                              </>
                            )}
                          </ExpandButton>
                          
                          {expandedHistoryItems[history.id] && (
                            <HistoryChanges>
                              <p><strong>Changes:</strong></p>
                              <ul>
                                {history.previousData?.type !== history.newData?.type && (
                                  <li>Type: {history.previousData?.type} → {history.newData?.type}</li>
                                )}
                                {history.previousData?.status !== history.newData?.status && (
                                  <li>Status: {history.previousData?.status} → {history.newData?.status}</li>
                                )}
                                {history.previousData?.timestamp && history.newData?.timestamp && 
                                 history.previousData.timestamp.seconds !== history.newData.timestamp.seconds && (
                                  <li>
                                    Timestamp: 
                                    {new Date(history.previousData.timestamp.seconds * 1000).toLocaleString()} → 
                                    {new Date(history.newData.timestamp.seconds * 1000).toLocaleString()}
                                  </li>
                                )}
                              </ul>
                            </HistoryChanges>
                          )}
                        </HistoryContent>
                      </HistoryItem>
                    ))
                  )}
                </HistoryContainer>
              </div>
            </ModalContent>
          </Modal>
        )}
        
        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <Modal>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>Delete Attendance Record</ModalTitle>
                <ModalCloseButton onClick={handleCloseDeleteModal}>&times;</ModalCloseButton>
              </ModalHeader>
              
              <ModalForm onSubmit={handleDeleteAttendance}>
                <div>
                  <h4 style={{ margin: '0 0 15px 0', color: '#d32f2f' }}>Warning: This action cannot be undone</h4>
                  <p><strong>Employee:</strong> {selectedAttendance?.name}</p>
                  <p><strong>Date & Time:</strong> {selectedAttendance?.formattedDate}</p>
                  <p><strong>Type:</strong> {selectedAttendance?.type}</p>
                  <p><strong>Status:</strong> {selectedAttendance?.status}</p>
                  
                  <FormGroup>
                    <FormLabel>Reason for Deletion (required)</FormLabel>
                    <FormTextarea
                      name="deleteReason"
                      value={deleteReason}
                      onChange={(e) => setDeleteReason(e.target.value)}
                      placeholder="Explain why this record is being deleted (e.g., duplicate record)"
                      required
                    />
                  </FormGroup>
                </div>
                
                <FormActions>
                  <CancelButton 
                    type="button" 
                    onClick={handleCloseDeleteModal}
                    disabled={processing}
                  >
                    Cancel
                  </CancelButton>
                  <SubmitButton 
                    type="submit" 
                    disabled={processing}
                    style={{ backgroundColor: '#d32f2f' }}
                  >
                    {processing ? 'Processing...' : 'Delete Record'}
                  </SubmitButton>
                </FormActions>
              </ModalForm>
            </ModalContent>
          </Modal>
        )}
      </CardContent>
    </Card>
  );
};

export default AttendanceRequestsView;
