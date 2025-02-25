import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

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
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const InfoSection = styled.div`
  margin-bottom: 1.5rem;
  
  .label {
    font-weight: 600;
    color: #4b5563;
    margin-bottom: 0.25rem;
  }
  
  .value {
    color: #1f2937;
  }
`;

const TimeSection = styled.div`
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;

  .timezone {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }

    .label {
      font-weight: 500;
      color: #4b5563;
    }

    .time {
      color: #1f2937;
      font-family: monospace;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

  &.confirm {
    background-color: #10B981;
    color: white;
    &:hover {
      background-color: #059669;
    }
  }

  &.cancel {
    background-color: #EF4444;
    color: white;
    &:hover {
      background-color: #DC2626;
    }
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #10B981;
    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.1);
  }
`;

const AttendanceConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  type,
  userData
}) => {
  if (!isOpen) return null;

  const [notes, setNotes] = React.useState('');
  
  const handleConfirm = () => {
    onConfirm(notes);
    setNotes(''); // Reset notes after submission
  };

  const now = new Date();
  const timeFormat = 'hh:mm:ss a';

  // Format times in different timezones
  const phtTime = formatInTimeZone(now, 'Asia/Manila', timeFormat);
  const estTime = formatInTimeZone(now, 'America/New_York', timeFormat);
  const cstTime = formatInTimeZone(now, 'America/Chicago', timeFormat);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Title>Confirm {type === 'IN' ? 'Time In' : 'Time Out'}</Title>
        
        <InfoSection>
          <div className="label">Name</div>
          <div className="value">{userData.name}</div>
        </InfoSection>
        
        <InfoSection>
          <div className="label">Email</div>
          <div className="value">{userData.email}</div>
        </InfoSection>

        <TimeSection>
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
          />
        </InfoSection>

        <ButtonGroup>
          <Button className="cancel" onClick={onClose}>
            Cancel
          </Button>
          <Button className="confirm" onClick={handleConfirm}>
            Confirm
          </Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AttendanceConfirmationModal;
