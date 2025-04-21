import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { FloppyDisk, ArrowClockwise } from 'phosphor-react';
import { useAuth } from '../../contexts/AuthContext';

// Styled components
const Container = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  margin-bottom: 2rem;
  color: #4b5563;
  line-height: 1.5;
`;

const RulesSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

const RuleItem = styled.div`
  margin-bottom: 1.5rem;
`;

const RuleLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #374151;
`;

const RuleDescription = styled.p`
  margin-bottom: 0.5rem;
  color: #6b7280;
  font-size: 0.9rem;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  width: 80px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
`;

const UnitLabel = styled.span`
  color: #6b7280;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;

  &.primary {
    background-color: #3b82f6;
    color: white;
    &:hover {
      background-color: #2563eb;
    }
  }

  &.secondary {
    background-color: #e5e7eb;
    color: #374151;
    &:hover {
      background-color: #d1d5db;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;

const SuccessMessage = styled.div`
  background-color: #dcfce7;
  color: #166534;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  display: ${props => props.visible ? 'block' : 'none'};
`;

// Default rules values
const DEFAULT_RULES = {
  timeIn: {
    early: -60, // minutes before schedule to be considered "Early"
    onTime: 5,  // minutes after schedule to still be considered "On Time"
    late: 15,   // minutes after schedule to be considered "Late"
    gracePeriod: 5 // minutes after scheduled start time where lateness is ignored
  },
  timeOut: {
    earlyOut: -15, // minutes before schedule to be considered "Early Out"
    onTime: 60,    // minutes after schedule to still be considered "On Time"
    overtime: 30,  // minutes after schedule to be considered "Overtime"
    gracePeriod: 5 // minutes before scheduled end time where early out is ignored
  },
  attendance: {
    minWorkingHours: 8, // minimum hours for full day
    maxLatesPerMonth: 3,
    maxAbsencesPerMonth: 2
  },
  shift: {
    allowEarlyTimeIn: true,
    allowLateTimeOut: true,
    minOvertimeMinutes: 15,
    autoApproveOvertime: false
  },
  notes: {
    requireForEarlyLate: true
  }
};

function Rules() {
  const [rules, setRules] = useState(DEFAULT_RULES);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    fetchRules();
  }, []);

  const fetchRules = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, 'rules', 'attendance');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setRules(docSnap.data());
      } else {
        setRules(DEFAULT_RULES);
      }
    } catch (error) {
      console.error('Error fetching rules:', error);
      alert('Failed to load attendance rules. Please try again.');
      setRules(DEFAULT_RULES);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (section, rule, value, isBoolean = false) => {
    let newValue = value;
    if (!isBoolean) {
      newValue = parseInt(value, 10);
      if (isNaN(newValue)) return;
    }
    setRules(prevRules => ({
      ...prevRules,
      [section]: {
        ...prevRules[section],
        [rule]: isBoolean ? value : newValue
      }
    }));
  };

  // Helper for boolean toggles
  const handleToggle = (section, rule) => {
    setRules(prevRules => ({
      ...prevRules,
      [section]: {
        ...prevRules[section],
        [rule]: !prevRules[section][rule]
      }
    }));
  };


  const saveRules = async () => {
    setSaving(true);
    try {
      const docRef = doc(db, 'rules', 'attendance');
      await setDoc(docRef, rules, { merge: true });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error saving rules:', error);
      alert('Failed to save attendance rules. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const resetToDefaults = () => {
    if (window.confirm('Are you sure you want to reset all rules to default values?')) {
      setRules(DEFAULT_RULES);
    }
  };

  if (loading) {
    return <div>Loading attendance rules...</div>;
  }

  return (
    <Container>
      <Title>Attendance Rules</Title>
      <Description>
        Configure the conditions that determine attendance status when users time in and out.
        These settings affect how the system classifies attendance records throughout the application.
      </Description>

      <SuccessMessage visible={showSuccess}>
        Rules saved successfully!
      </SuccessMessage>

      <RulesSection>
        <SectionTitle>Time In Rules</SectionTitle>
        <RuleItem>
          <RuleLabel>Early Threshold</RuleLabel>
          <RuleDescription>
            Users who time in this many minutes (or more) before their scheduled time will be marked as "Early".
          </RuleDescription>
          <InputGroup>
            <Input 
              type="number" 
              value={Math.abs(rules.timeIn.early)} 
              onChange={(e) => handleInputChange('timeIn', 'early', -Math.abs(parseInt(e.target.value, 10)))}
              min="0"
            />
            <UnitLabel>minutes before schedule</UnitLabel>
          </InputGroup>
        </RuleItem>
        <RuleItem>
          <RuleLabel>On Time Threshold</RuleLabel>
          <RuleDescription>
            Users who time in up to this many minutes after their scheduled time will still be marked as "On Time".
          </RuleDescription>
          <InputGroup>
            <Input 
              type="number" 
              value={rules.timeIn.onTime} 
              onChange={(e) => handleInputChange('timeIn', 'onTime', e.target.value)}
              min="0"
            />
            <UnitLabel>minutes after schedule</UnitLabel>
          </InputGroup>
        </RuleItem>
        <RuleItem>
          <RuleLabel>Late Threshold</RuleLabel>
          <RuleDescription>
            Users who time in this many minutes (or more) after their scheduled time will be marked as "Late".
          </RuleDescription>
          <InputGroup>
            <Input 
              type="number" 
              value={rules.timeIn.late} 
              onChange={(e) => handleInputChange('timeIn', 'late', e.target.value)}
              min="0"
            />
            <UnitLabel>minutes after schedule</UnitLabel>
          </InputGroup>
        </RuleItem>
        <RuleItem>
          <RuleLabel>Grace Period</RuleLabel>
          <RuleDescription>
            Lateness is ignored if within this many minutes after scheduled start time.
          </RuleDescription>
          <InputGroup>
            <Input 
              type="number" 
              value={rules.timeIn.gracePeriod} 
              onChange={(e) => handleInputChange('timeIn', 'gracePeriod', e.target.value)}
              min="0"
            />
            <UnitLabel>minutes</UnitLabel>
          </InputGroup>
        </RuleItem>
      </RulesSection>

      <RulesSection>
        <SectionTitle>Time Out Rules</SectionTitle>
        <RuleItem>
          <RuleLabel>Early Out Threshold</RuleLabel>
          <RuleDescription>
            Users who time out this many minutes (or more) before their scheduled end time will be marked as "Early Out".
          </RuleDescription>
          <InputGroup>
            <Input 
              type="number" 
              value={Math.abs(rules.timeOut.earlyOut)} 
              onChange={(e) => handleInputChange('timeOut', 'earlyOut', -Math.abs(parseInt(e.target.value, 10)))}
              min="0"
            />
            <UnitLabel>minutes before schedule</UnitLabel>
          </InputGroup>
        </RuleItem>
        <RuleItem>
          <RuleLabel>On Time Threshold</RuleLabel>
          <RuleDescription>
            Users who time out up to this many minutes after their scheduled end time will still be marked as "On Time".
          </RuleDescription>
          <InputGroup>
            <Input 
              type="number" 
              value={rules.timeOut.onTime} 
              onChange={(e) => handleInputChange('timeOut', 'onTime', e.target.value)}
              min="0"
            />
            <UnitLabel>minutes after schedule</UnitLabel>
          </InputGroup>
        </RuleItem>
        <RuleItem>
          <RuleLabel>Overtime Threshold</RuleLabel>
          <RuleDescription>
            Users who time out this many minutes (or more) after their scheduled end time will be marked as "Overtime".
          </RuleDescription>
          <InputGroup>
            <Input 
              type="number" 
              value={rules.timeOut.overtime} 
              onChange={(e) => handleInputChange('timeOut', 'overtime', e.target.value)}
              min="0"
            />
            <UnitLabel>minutes after schedule</UnitLabel>
          </InputGroup>
        </RuleItem>
        <RuleItem>
          <RuleLabel>Grace Period</RuleLabel>
          <RuleDescription>
            Early out is ignored if within this many minutes before scheduled end time.
          </RuleDescription>
          <InputGroup>
            <Input 
              type="number" 
              value={rules.timeOut.gracePeriod} 
              onChange={(e) => handleInputChange('timeOut', 'gracePeriod', e.target.value)}
              min="0"
            />
            <UnitLabel>minutes</UnitLabel>
          </InputGroup>
        </RuleItem>
      </RulesSection>

      <RulesSection>
        <SectionTitle>Attendance Policies</SectionTitle>
        <RuleItem>
          <RuleLabel>Minimum Working Hours</RuleLabel>
          <RuleDescription>
            Minimum number of hours required to be considered a full day.
          </RuleDescription>
          <InputGroup>
            <Input 
              type="number" 
              value={rules.attendance.minWorkingHours} 
              onChange={(e) => handleInputChange('attendance', 'minWorkingHours', e.target.value)}
              min="0"
            />
            <UnitLabel>hours</UnitLabel>
          </InputGroup>
        </RuleItem>
        <RuleItem>
          <RuleLabel>Max Lates Per Month</RuleLabel>
          <RuleDescription>
            Number of times a user can be late before triggering a warning.
          </RuleDescription>
          <InputGroup>
            <Input 
              type="number" 
              value={rules.attendance.maxLatesPerMonth} 
              onChange={(e) => handleInputChange('attendance', 'maxLatesPerMonth', e.target.value)}
              min="0"
            />
            <UnitLabel>lates</UnitLabel>
          </InputGroup>
        </RuleItem>
        <RuleItem>
          <RuleLabel>Max Absences Per Month</RuleLabel>
          <RuleDescription>
            Number of absences allowed before escalation.
          </RuleDescription>
          <InputGroup>
            <Input 
              type="number" 
              value={rules.attendance.maxAbsencesPerMonth} 
              onChange={(e) => handleInputChange('attendance', 'maxAbsencesPerMonth', e.target.value)}
              min="0"
            />
            <UnitLabel>absences</UnitLabel>
          </InputGroup>
        </RuleItem>
      </RulesSection>

      <RulesSection>
        <SectionTitle>Shift & Overtime</SectionTitle>
        <RuleItem>
          <RuleLabel>Allow Early Time In</RuleLabel>
          <RuleDescription>
            Whether users can time in before their shift.
          </RuleDescription>
          <InputGroup>
            <input type="checkbox" checked={rules.shift.allowEarlyTimeIn} onChange={() => handleToggle('shift', 'allowEarlyTimeIn')} />
            <UnitLabel>{rules.shift.allowEarlyTimeIn ? 'Allowed' : 'Not Allowed'}</UnitLabel>
          </InputGroup>
        </RuleItem>
        <RuleItem>
          <RuleLabel>Allow Late Time Out</RuleLabel>
          <RuleDescription>
            Whether users can time out after their shift.
          </RuleDescription>
          <InputGroup>
            <input type="checkbox" checked={rules.shift.allowLateTimeOut} onChange={() => handleToggle('shift', 'allowLateTimeOut')} />
            <UnitLabel>{rules.shift.allowLateTimeOut ? 'Allowed' : 'Not Allowed'}</UnitLabel>
          </InputGroup>
        </RuleItem>
        <RuleItem>
          <RuleLabel>Minimum Overtime Minutes</RuleLabel>
          <RuleDescription>
            Minimum overtime duration to be counted as overtime.
          </RuleDescription>
          <InputGroup>
            <Input 
              type="number" 
              value={rules.shift.minOvertimeMinutes} 
              onChange={(e) => handleInputChange('shift', 'minOvertimeMinutes', e.target.value)}
              min="0"
            />
            <UnitLabel>minutes</UnitLabel>
          </InputGroup>
        </RuleItem>
        <RuleItem>
          <RuleLabel>Auto-approve Overtime</RuleLabel>
          <RuleDescription>
            Whether overtime is automatically approved.
          </RuleDescription>
          <InputGroup>
            <input type="checkbox" checked={rules.shift.autoApproveOvertime} onChange={() => handleToggle('shift', 'autoApproveOvertime')} />
            <UnitLabel>{rules.shift.autoApproveOvertime ? 'Enabled' : 'Disabled'}</UnitLabel>
          </InputGroup>
        </RuleItem>
      </RulesSection>

      <RulesSection>
        <SectionTitle>Notes Policy</SectionTitle>
        <RuleItem>
          <RuleLabel>Require Notes for Early/Late</RuleLabel>
          <RuleDescription>
            Whether users must provide a note if they are early or late.
          </RuleDescription>
          <InputGroup>
            <input type="checkbox" checked={rules.notes.requireForEarlyLate} onChange={() => handleToggle('notes', 'requireForEarlyLate')} />
            <UnitLabel>{rules.notes.requireForEarlyLate ? 'Required' : 'Not Required'}</UnitLabel>
          </InputGroup>
        </RuleItem>
      </RulesSection>

      <ButtonGroup>
        <Button 
          className="primary" 
          onClick={saveRules}
          disabled={saving}
        >
          <Icon><FloppyDisk size={16} /></Icon>
          {saving ? 'Saving...' : 'Save Rules'}
        </Button>
        <Button 
          className="secondary" 
          onClick={resetToDefaults}
        >
          <Icon><ArrowClockwise size={16} /></Icon>
          Reset to Defaults
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default Rules;
