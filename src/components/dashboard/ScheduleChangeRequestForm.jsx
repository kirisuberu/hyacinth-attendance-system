import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import { Calendar, Clock, ArrowRight, CalendarPlus, NotePencil, Globe } from 'phosphor-react';
import { timeZones } from '../../utils/timeZones';

const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const FormTitle = styled.h3`
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

const SubmitButton = styled.button`
  background-color: #800000;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #600000;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const TimeInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const TimeInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TimeLabel = styled.span`
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoText = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  background-color: #f5f5f5;
  border-left: 3px solid #800000;
  border-radius: 0 4px 4px 0;
`;

const ScheduleChangeRequestForm = ({ user, userData, currentSchedule }) => {
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [timeIn, setTimeIn] = useState('');
  const [shiftDuration, setShiftDuration] = useState('8');
  const [reason, setReason] = useState('');
  const [timeRegion, setTimeRegion] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  // Set default time region based on user data or browser timezone
  useEffect(() => {
    const defaultTimeRegion = userData?.timeRegion || Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Manila';
    setTimeRegion(defaultTimeRegion);
  }, [userData]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!dayOfWeek || !timeIn || !shiftDuration || !reason || !timeRegion) {
      toast.error('Please fill in all fields');
      return;
    }
    
    try {
      setSubmitting(true);
      
      // Create the schedule change request
      const requestData = {
        userId: user.uid,
        userName: userData?.name || user.displayName || user.email,
        userEmail: userData?.email || user.email,
        dayOfWeek,
        timeIn,
        shiftDuration: parseFloat(shiftDuration),
        reason,
        status: 'pending', // pending, approved, rejected
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        adminNotes: '',
        timeRegion: timeRegion
      };
      
      // Add the request to Firestore
      await addDoc(collection(db, 'schedule_change_requests'), requestData);
      
      toast.success('Schedule change request submitted successfully');
      
      // Reset form
      setDayOfWeek('');
      setTimeIn('');
      setShiftDuration('8');
      setReason('');
      // Don't reset timeRegion as it should persist between submissions
    } catch (error) {
      console.error('Error submitting schedule change request:', error);
      toast.error('Failed to submit request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <FormContainer>
      <FormTitle>
        <CalendarPlus size={20} weight="fill" />
        Request Schedule Change
      </FormTitle>
      
      <InfoText>
        Submit a request to change your work schedule. Your request will be reviewed by an administrator.
      </InfoText>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="dayOfWeek">Day of Week</Label>
          <Select 
            id="dayOfWeek" 
            value={dayOfWeek} 
            onChange={(e) => setDayOfWeek(e.target.value)}
            required
          >
            <option value="">Select a day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </Select>
        </FormGroup>
        
        <TimeInputContainer>
          <TimeInputGroup>
            <TimeLabel>
              <Clock size={16} weight="fill" style={{ color: '#4CAF50' }} />
              Time In
            </TimeLabel>
            <Input 
              type="time" 
              value={timeIn} 
              onChange={(e) => setTimeIn(e.target.value)}
              required
            />
          </TimeInputGroup>
          
          <ArrowRight size={20} style={{ color: '#999', marginTop: '20px' }} />
          
          <TimeInputGroup>
            <TimeLabel>Shift Duration (hours)</TimeLabel>
            <Input 
              type="number" 
              min="1"
              step="0.5"
              value={shiftDuration} 
              onChange={(e) => setShiftDuration(e.target.value)}
              required
            />
          </TimeInputGroup>
        </TimeInputContainer>
        
        <FormGroup>
          <Label htmlFor="reason">
            <NotePencil size={16} style={{ marginRight: '0.5rem' }} />
            Reason for Change
          </Label>
          <TextArea 
            id="reason" 
            value={reason} 
            onChange={(e) => setReason(e.target.value)}
            placeholder="Please explain why you need to change your schedule..."
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="timeRegion">
            <Globe size={16} style={{ marginRight: '0.5rem' }} />
            Time Region
          </Label>
          <Select 
            id="timeRegion" 
            value={timeRegion} 
            onChange={(e) => setTimeRegion(e.target.value)}
            required
          >
            <option value="">Select a time region</option>
            {timeZones.map((zone) => (
              <option key={zone.value} value={zone.value}>
                {zone.label}
              </option>
            ))}
          </Select>
        </FormGroup>
        
        <SubmitButton type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Request'}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default ScheduleChangeRequestForm;
