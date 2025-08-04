import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, query, where, orderBy, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { format } from 'date-fns';
import { CalendarCheck, Clock, ArrowRight, CalendarX, ClockClockwise } from 'phosphor-react';



const UserScheduleRequests = ({ user }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!user?.uid) return;
    
    setLoading(true);
    
    // Create a query for this user's schedule change requests
    const requestsQuery = query(
      collection(db, 'schedule_change_requests'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );
    
    // Set up real-time listener
    const unsubscribe = onSnapshot(requestsQuery, (snapshot) => {
      const requestsList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setRequests(requestsList);
      setLoading(false);
    }, (error) => {
      console.error('Error fetching schedule change requests:', error);
      setLoading(false);
    });
    
    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [user]);
  
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
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <ClockClockwise size={16} weight="fill" />;
      case 'approved':
        return <CalendarCheck size={16} weight="fill" />;
      case 'rejected':
        return <CalendarX size={16} weight="fill" />;
      default:
        return null;
    }
  };
  
  return (
    <Container>
      <Title>
        <ClockClockwise size={20} weight="fill" />
        My Schedule Change Requests
      </Title>
      
      {loading ? (
        <p>Loading your requests...</p>
      ) : requests.length > 0 ? (
        requests.map(request => (
          <RequestCard key={request.id} status={request.status}>
            <RequestHeader>
              <RequestDate>Submitted on {formatDate(request.createdAt)}</RequestDate>
              <StatusBadge status={request.status}>
                {getStatusIcon(request.status)}
                {request.status === 'pending' ? 'Pending Review' : 
                 request.status === 'approved' ? 'Approved' : 'Rejected'}
              </StatusBadge>
            </RequestHeader>
            
            <RequestDetails>
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
              
              {request.updatedAt && request.updatedAt !== request.createdAt && (
                <DetailItem>
                  <DetailLabel>Last Updated</DetailLabel>
                  <DetailValue>{formatDate(request.updatedAt)}</DetailValue>
                </DetailItem>
              )}
            </RequestDetails>
            
            <div>
              <DetailLabel>Reason for Change</DetailLabel>
              <ReasonText>{request.reason}</ReasonText>
            </div>
            
            {request.adminNotes && (
              <AdminNotes>
                <strong>Admin Notes:</strong> {request.adminNotes}
              </AdminNotes>
            )}
          </RequestCard>
        ))
      ) : (
        <EmptyState>
          <ClockClockwise size={32} weight="duotone" style={{ color: '#999', marginBottom: '1rem' }} />
          <h4>No Requests Found</h4>
          <p>You haven't submitted any schedule change requests yet.</p>
        </EmptyState>
      )}
    </Container>
  );
};

export default UserScheduleRequests;

const Container = styled.div`
  margin-top: 2rem;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #800000;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
`;

const RequestCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
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
`;

const RequestDate = styled.span`
  font-size: 0.85rem;
  color: #666;
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

const AdminNotes = styled.div`
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  font-size: 0.9rem;
  
  strong {
    color: #333;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  color: #666;
  margin-top: 1rem;
`;