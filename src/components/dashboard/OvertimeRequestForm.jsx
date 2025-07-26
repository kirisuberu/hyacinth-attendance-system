import React, { useState } from 'react';
import styled from 'styled-components';
import { createOvertimeRequest } from '../../services/requestService';
import { toast } from 'react-toastify';
import { Card, CardTitle, CardContent } from './DashboardComponents';
import { Clock, CalendarBlank, Timer, ClipboardText } from 'phosphor-react';

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
    border-color: #e91e63;
    box-shadow: 0 0 0 2px rgba(233, 30, 99, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #e91e63;
    box-shadow: 0 0 0 2px rgba(233, 30, 99, 0.2);
  }
`;

const SubmitButton = styled.button`
  background-color: #e91e63;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: #c2185b;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const OvertimeRequestForm = ({ user }) => {
  const [date, setDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [remarks, setRemarks] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!date || !timeFrom || !timeTo || !remarks.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // Validate that timeTo is after timeFrom
    if (timeFrom >= timeTo) {
      toast.error('End time must be after start time');
      return;
    }
    
    try {
      setSubmitting(true);
      
      await createOvertimeRequest(
        user.uid,
        date,
        timeFrom,
        timeTo,
        remarks
      );
      
      toast.success('Overtime request submitted successfully');
      
      // Reset form
      setDate('');
      setTimeFrom('');
      setTimeTo('');
      setRemarks('');
    } catch (error) {
      console.error('Error submitting overtime request:', error);
      toast.error('Failed to submit request: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };
  
  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];
  
  return (
    <Card>
      <CardTitle>
        <Clock size={24} weight="bold" style={{ marginRight: '8px' }} />
        Submit Overtime Request
      </CardTitle>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="date">
              <CalendarBlank size={16} style={{ marginRight: '8px' }} />
              Date
            </Label>
            <Input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </FormGroup>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <FormGroup style={{ flex: 1 }}>
              <Label htmlFor="timeFrom">
                <Timer size={16} style={{ marginRight: '8px' }} />
                Start Time
              </Label>
              <Input
                type="time"
                id="timeFrom"
                value={timeFrom}
                onChange={(e) => setTimeFrom(e.target.value)}
                required
              />
            </FormGroup>
            
            <FormGroup style={{ flex: 1 }}>
              <Label htmlFor="timeTo">
                <Timer size={16} style={{ marginRight: '8px' }} />
                End Time
              </Label>
              <Input
                type="time"
                id="timeTo"
                value={timeTo}
                onChange={(e) => setTimeTo(e.target.value)}
                required
              />
            </FormGroup>
          </div>
          
          <FormGroup>
            <Label htmlFor="remarks">
              <ClipboardText size={16} style={{ marginRight: '8px' }} />
              Reason for Overtime
            </Label>
            <TextArea
              id="remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Please provide details about the reason for overtime, and who requested it."
              required
            />
          </FormGroup>
          
          <SubmitButton type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : (
              <>
                <Clock size={18} />
                Submit Request
              </>
            )}
          </SubmitButton>
        </form>
      </CardContent>
    </Card>
  );
};

export default OvertimeRequestForm;
