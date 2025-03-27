import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { formatInTimeZone } from 'date-fns-tz';
import { CircleNotch } from 'phosphor-react';

const ModalOverlay = styled.div`
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
  padding: 24px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 90vh;
  overflow-y: auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 20px;
  color: ${props => props.type === 'IN' ? '#2563EB' : '#DC2626'};
  text-align: center;
  
  span {
    font-weight: bold;
  }
`;

const InfoSection = styled.div`
  margin-bottom: 16px;
  
  .label {
    font-size: 0.875rem;
    color: #6B7280;
    margin-bottom: 4px;
  }
  
  .value {
    font-size: 1rem;
    color: #1F2937;
    font-weight: 500;
  }
`;

const StatusBadge = styled.div`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${props => {
    const status = props.status?.toLowerCase();
    if (status?.includes('early') && !status?.includes('out')) return '#DBEAFE'; // Light blue for early
    if (status?.includes('late')) return '#FEE2E2'; // Light red for late
    if (status?.includes('on time')) return '#DCFCE7'; // Light green for on time
    if (status?.includes('early out')) return '#FEE2E2'; // Light red for early out
    if (status?.includes('overtime')) return '#FEF3C7'; // Light yellow for overtime
    return '#F3F4F6'; // Light gray default
  }};
  color: ${props => {
    const status = props.status?.toLowerCase();
    if (status?.includes('early') && !status?.includes('out')) return '#1E40AF'; // Dark blue for early
    if (status?.includes('late')) return '#991B1B'; // Dark red for late
    if (status?.includes('on time')) return '#166534'; // Dark green for on time
    if (status?.includes('early out')) return '#991B1B'; // Dark red for early out
    if (status?.includes('overtime')) return '#92400E'; // Dark orange for overtime
    return '#6B7280'; // Gray default
  }};
`;

const NotesSection = styled.div`
  margin-bottom: 20px;
  
  .label {
    font-size: 0.875rem;
    color: #6B7280;
    margin-bottom: 4px;
  }
`;

const NotesInput = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 8px 12px;
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  font-size: 0.875rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #2563EB;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
  
  &:disabled {
    background-color: #F3F4F6;
    cursor: not-allowed;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(Button)`
  background-color: white;
  color: #4B5563;
  border: 1px solid #D1D5DB;
  
  &:hover:not(:disabled) {
    background-color: #F3F4F6;
  }
`;

const ConfirmButton = styled(Button)`
  background-color: ${props => props.type === 'IN' ? '#2563EB' : '#DC2626'};
  color: white;
  border: none;
  
  &:hover:not(:disabled) {
    background-color: ${props => props.type === 'IN' ? '#1D4ED8' : '#B91C1C'};
  }
`;

const AttendanceConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  type,
  userData,
  status,
  timeDiff,
  shiftDuration
}) => {
  const [notes, setNotes] = useState('');
  const [calculatedStatus, setCalculatedStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Reset state when modal opens or closes
  useEffect(() => {
    if (isOpen) {
      setNotes('');
      setIsLoading(false);
      
      if (status) {
        setCalculatedStatus(status);
      } else {
        setCalculatedStatus('');
      }
    }
  }, [isOpen, status]);
  
  const handleConfirm = useCallback(async () => {
    if (isLoading) return; // Prevent multiple submissions
    
    setIsLoading(true);
    
    try {
      await onConfirm(notes);
      // Don't reset notes or loading state here - parent component will close the modal
    } catch (error) {
      console.error('Error confirming attendance:', error);
      alert('Failed to record attendance. Please try again.');
      setIsLoading(false); // Only reset loading state on error
    }
  }, [isLoading, notes, onConfirm]);
  
  // If modal is closed, don't render anything
  if (!isOpen) return null;
  
  const now = new Date();
  const timeFormat = 'hh:mm:ss a';
  const dateFormat = 'MMMM dd, yyyy';

  // Format current time in different timezones
  const phtTime = formatInTimeZone(now, 'Asia/Manila', `${dateFormat} ${timeFormat}`);
  const estTime = formatInTimeZone(now, 'America/New_York', timeFormat);
  const cstTime = formatInTimeZone(now, 'America/Chicago', timeFormat);

  // Format time difference exactly the same way as in AttendanceLogs.jsx
  const formatTimeDifference = (minutes, type) => {
    if (minutes === null || minutes === undefined) return 'N/A';
    
    // Use the timeDiff value directly as it's already calculated correctly in attendanceService.js
    const hours = Math.floor(Math.abs(minutes) / 60);
    const mins = Math.abs(minutes) % 60;
    
    let prefix = '';
    if (type === 'IN') {
      prefix = minutes < 0 ? 'Early by ' : 'Late by ';
    } else { // OUT
      prefix = minutes < 0 ? 'Early by ' : 'Overtime by ';
    }
    
    if (hours === 0 && mins === 0) {
      return 'On time';
    }
    
    let result = prefix;
    if (hours > 0) {
      result += `${hours}h `;
    }
    if (mins > 0 || hours === 0) {
      result += `${mins}m`;
    }
    
    return result;
  };

  // Format shift duration for display
  const formatShiftDuration = (duration) => {
    if (!duration) return 'N/A';
    
    const { hours, minutes } = duration;
    let result = '';
    
    if (hours > 0) {
      result += `${hours} hour${hours !== 1 ? 's' : ''} `;
    }
    
    if (minutes > 0 || hours === 0) {
      result += `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
    
    return result.trim();
  };

  // Get the appropriate status color
  const getStatusColor = (status) => {
    if (!status) return '#666666';
    
    const statusLower = status.toLowerCase();
    if (statusLower.includes('early') && !statusLower.includes('out')) {
      return '#1E40AF'; // Dark blue for early
    } else if (statusLower.includes('late')) {
      return '#991B1B'; // Dark red for late
    } else if (statusLower.includes('on time')) {
      return '#166534'; // Dark green for on time
    } else if (statusLower.includes('early out')) {
      return '#991B1B'; // Dark red for early out
    } else if (statusLower.includes('overtime')) {
      return '#92400E'; // Dark orange for overtime
    }
    
    return '#666666'; // Default gray
  };

  return (
    <ModalOverlay onClick={e => {
      if (!isLoading) {
        onClose();
      }
      e.stopPropagation();
    }}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Title type={type}>Confirm <span>{type === 'IN' ? 'Time In' : 'Time Out'}</span></Title>
        
        {/* User Information Section */}
        <InfoSection>
          <div className="label">Name</div>
          <div className="value">{userData?.name || 'N/A'}</div>
        </InfoSection>
        
        <InfoSection>
          <div className="label">Email</div>
          <div className="value">{userData?.email || 'N/A'}</div>
        </InfoSection>
        
        {/* Current Time Section */}
        <InfoSection>
          <div className="label">Current Time (PHT)</div>
          <div className="value">{phtTime}</div>
        </InfoSection>
        
        {/* Status Badge */}
        {calculatedStatus && (
          <InfoSection>
            <div className="label">Status</div>
            <StatusBadge status={calculatedStatus}>
              {calculatedStatus}
            </StatusBadge>
          </InfoSection>
        )}
        
        {/* Time Difference */}
        {timeDiff !== undefined && timeDiff !== null && (
          <InfoSection>
            <div className="label">Time Difference</div>
            <div className="value" style={{ 
              color: getStatusColor(calculatedStatus)
            }}>
              {formatTimeDifference(timeDiff, type)}
            </div>
          </InfoSection>
        )}

        {/* Display shift duration for time-out */}
        {type === 'OUT' && shiftDuration && (
          <InfoSection>
            <div className="label">Current Shift Duration</div>
            <div className="value" style={{ color: '#2563EB' }}>
              {formatShiftDuration(shiftDuration)}
            </div>
          </InfoSection>
        )}
        
        {/* Notes Section */}
        <NotesSection>
          <div className="label">Notes (Optional)</div>
          <NotesInput
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any notes here..."
            disabled={isLoading}
          />
        </NotesSection>
        
        {/* Buttons Section */}
        <ButtonsContainer>
          <CancelButton 
            onClick={onClose} 
            disabled={isLoading}
          >
            Cancel
          </CancelButton>
          <ConfirmButton 
            onClick={handleConfirm}
            disabled={isLoading}
            type={type}
          >
            {isLoading ? 'Processing...' : 'Confirm'}
          </ConfirmButton>
        </ButtonsContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AttendanceConfirmationModal;
