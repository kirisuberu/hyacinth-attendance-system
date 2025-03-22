import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { formatInTimeZone } from 'date-fns-tz';
import { CircleNotch } from 'phosphor-react';
import EarlyINGif from '../assets/gif/TimeInOut/EarlyIN.gif';
import EarlyOUTGif from '../assets/gif/TimeInOut/EarlyOUT.gif';
import LateINGif from '../assets/gif/TimeInOut/LateIN.gif';
import OnTimeINGif from '../assets/gif/TimeInOut/OnTimeIN.gif';
import OnTimeOUTGif from '../assets/gif/TimeInOut/OnTimeOUT.gif';
import OvertimeOUTGif from '../assets/gif/TimeInOut/OvertimeOUT.gif';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.3s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  font-weight: 600;
  text-align: center;
  font-size: 1.5rem;
  
  span {
    color: ${props => props.type === 'IN' ? '#10B981' : '#EF4444'};
  }
`;

const InfoSection = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  
  .label {
    font-weight: 600;
    color: #6B7280;
    margin-bottom: 0.25rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .value {
    color: #1f2937;
    font-size: 1.1rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid #E5E7EB;
  }
`;

const TimeSection = styled.div`
  background: #F9FAFB;
  padding: 1.25rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  width: 100%;
  border: 1px solid #E5E7EB;

  .title {
    font-weight: 600;
    color: #4B5563;
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .timezone {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px dashed #E5E7EB;
    
    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }

    .label {
      font-weight: 500;
      color: #6B7280;
    }

    .time {
      color: #111827;
      font-family: 'Roboto Mono', monospace;
      font-weight: 500;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
  flex: 1;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  &.confirm {
    background-color: ${props => props.type === 'IN' ? '#10B981' : '#EF4444'};
    color: white;
    &:hover:not(:disabled) {
      background-color: ${props => props.type === 'IN' ? '#059669' : '#DC2626'};
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    &:active:not(:disabled) {
      transform: translateY(0);
    }
  }

  &.cancel {
    background-color: #F3F4F6;
    color: #4B5563;
    &:hover:not(:disabled) {
      background-color: #E5E7EB;
      transform: translateY(-2px);
    }
    &:active:not(:disabled) {
      transform: translateY(0);
    }
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  resize: vertical;
  font-family: inherit;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.type === 'IN' ? '#10B981' : '#EF4444'};
    box-shadow: 0 0 0 2px ${props => props.type === 'IN' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'};
  }
  
  &::placeholder {
    color: #9CA3AF;
  }
`;

const GifContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  max-width: 280px;
  display: flex;
  justify-content: center;
  
  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const StatusBadge = styled.div`
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  
  background-color: ${props => {
    const status = props.status.toLowerCase();
    if (status === 'early' || status === 'on time') return '#ECFDF5';
    if (status === 'late') return '#FEF2F2';
    if (status === 'early out') return '#FEF3C7';
    if (status === 'overtime') return '#EFF6FF';
    return '#F3F4F6';
  }};
  
  color: ${props => {
    const status = props.status.toLowerCase();
    if (status === 'early' || status === 'on time') return '#059669';
    if (status === 'late') return '#DC2626';
    if (status === 'early out') return '#D97706';
    if (status === 'overtime') return '#2563EB';
    return '#4B5563';
  }};
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  animation: ${props => props.spin ? 'spin 1s linear infinite' : 'none'};
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AttendanceConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  type,
  userData,
  status,
  timeDiff
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
  
  // Memoize the handleConfirm function to prevent recreating it on each render
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

  // Format times in different timezones
  const phtTime = formatInTimeZone(now, 'Asia/Manila', timeFormat);
  const estTime = formatInTimeZone(now, 'America/New_York', timeFormat);
  const cstTime = formatInTimeZone(now, 'America/Chicago', timeFormat);

  // Determine which GIF to display based on status and type
  const getGifSource = () => {
    if (!calculatedStatus) return null;
    
    const statusLower = calculatedStatus.toLowerCase().trim();
    const upperType = type?.toUpperCase();
    
    // Exact matches first - these are the most reliable
    if (upperType === 'IN') {
      if (statusLower === 'early') return EarlyINGif;
      if (statusLower === 'late') return LateINGif;
      if (statusLower === 'on time') return OnTimeINGif;
    } else if (upperType === 'OUT') {
      if (statusLower === 'early out') return EarlyOUTGif;
      if (statusLower === 'overtime') return OvertimeOUTGif;
      if (statusLower === 'on time') return OnTimeOUTGif;
    }
    
    // Fallback for partial matches
    if (upperType === 'IN') {
      if (statusLower.includes('early')) return EarlyINGif;
      if (statusLower.includes('late')) return LateINGif;
      if (statusLower.includes('on time') || statusLower.includes('ontime')) return OnTimeINGif;
    } else if (upperType === 'OUT') {
      if (statusLower.includes('early') && (statusLower.includes('out') || statusLower.includes('time'))) return EarlyOUTGif;
      if (statusLower.includes('overtime') || statusLower.includes('over time')) return OvertimeOUTGif;
      if (statusLower.includes('on time') || statusLower.includes('ontime')) return OnTimeOUTGif;
    }
    
    // Last resort fallbacks based on just the type
    if (upperType === 'IN') return OnTimeINGif;
    if (upperType === 'OUT') return OnTimeOUTGif;
    
    return null;
  };

  // Get the appropriate GIF based on status and type
  const gifSource = getGifSource();

  // Prevent closing the modal by clicking outside when processing
  const handleOverlayClick = (e) => {
    if (!isLoading) {
      onClose();
    }
    e.stopPropagation();
  };

  const formatTimeDifference = (timeDiff, type) => {
    const hours = Math.floor(Math.abs(timeDiff.totalMinutes) / 60);
    const minutes = Math.abs(timeDiff.totalMinutes) % 60;
    const formattedTime = `${hours}h ${minutes}m`;
    return type === 'IN' 
      ? (timeDiff.totalMinutes < 0 ? `Early by ${formattedTime}` : timeDiff.totalMinutes > 5 ? `Late by ${formattedTime}` : `On time`)
      : (timeDiff.totalMinutes < 0 ? `Early out by ${formattedTime}` : timeDiff.totalMinutes > 5 ? `Overtime by ${formattedTime}` : `On time`);
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Title type={type}>Confirm <span>{type === 'IN' ? 'Time In' : 'Time Out'}</span></Title>
        {/* Display calculated status */}
        {calculatedStatus && (
          <StatusBadge status={calculatedStatus}>
            {calculatedStatus}
          </StatusBadge>
        )}
        
        {gifSource && (
          <GifContainer>
            <img src={gifSource} alt={`${calculatedStatus} animation`} />
          </GifContainer>
        )}
        
        <InfoSection>
          <div className="label">Name</div>
          <div className="value">{userData?.name}</div>
        </InfoSection>
        
        <InfoSection>
          <div className="label">Email</div>
          <div className="value">{userData?.email}</div>
        </InfoSection>

        {/* Display time difference if available */}
        {timeDiff && (
          <InfoSection>
            <div className="label">Time Difference</div>
            <div className="value" style={{ 
              color: type === 'IN' 
                ? (timeDiff.totalMinutes < 0 ? '#1E40AF' : timeDiff.totalMinutes > 5 ? '#991B1B' : '#166534')
                : (timeDiff.totalMinutes < 0 ? '#991B1B' : timeDiff.totalMinutes > 5 ? '#92400E' : '#166534')
            }}>
              {formatTimeDifference(timeDiff, type)}
            </div>
          </InfoSection>
        )}

        <TimeSection>
          <div className="title">Current Time</div>
          <div className="timezone">
            <span className="label">PHT</span>
            <span className="time">{phtTime}</span>
          </div>
          <div className="timezone">
            <span className="label">EST</span>
            <span className="time">{estTime}</span>
          </div>
          <div className="timezone">
            <span className="label">CST</span>
            <span className="time">{cstTime}</span>
          </div>
        </TimeSection>

        <InfoSection>
          <div className="label">Remarks (Optional)</div>
          <TextArea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="I am late because . . ."
            type={type}
            disabled={isLoading}
          />
        </InfoSection>

        <ButtonGroup>
          <Button 
            className="cancel" 
            onClick={onClose} 
            disabled={isLoading}
            type="button"
          >
            Cancel
          </Button>
          <Button 
            className="confirm" 
            onClick={handleConfirm} 
            type={type}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Icon spin><CircleNotch size={16} weight="bold" /></Icon>
                Processing...
              </>
            ) : (
              'Confirm'
            )}
          </Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AttendanceConfirmationModal;
