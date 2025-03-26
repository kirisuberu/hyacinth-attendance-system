import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { doc, getDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
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
  },
  timeOut: {
    earlyOut: -15, // minutes before schedule to be considered "Early Out"
    onTime: 60,    // minutes after schedule to still be considered "On Time"
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
      // Find admin user document
      const usersRef = collection(db, 'users');
      const adminQuery = query(usersRef, where("userType", "==", "admin"));
      const adminSnapshot = await getDocs(adminQuery);
      
      if (adminSnapshot.empty) {
        console.error('No admin user found');
        setRules(DEFAULT_RULES);
        setLoading(false);
        return;
      }
      
      // Get the first admin user document
      const adminDoc = adminSnapshot.docs[0];
      const adminData = adminDoc.data();
      
      if (adminData.attendanceRules) {
        setRules(adminData.attendanceRules);
      } else {
        // If no rules found in admin document, use defaults
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

  const handleInputChange = (section, rule, value) => {
    // Convert to number and validate
    const numValue = parseInt(value, 10);
    
    if (isNaN(numValue)) return;
    
    setRules(prevRules => ({
      ...prevRules,
      [section]: {
        ...prevRules[section],
        [rule]: numValue
      }
    }));
  };

  const saveRules = async () => {
    setSaving(true);
    try {
      // Find admin user document
      const usersRef = collection(db, 'users');
      const adminQuery = query(usersRef, where("userType", "==", "admin"));
      const adminSnapshot = await getDocs(adminQuery);
      
      if (adminSnapshot.empty) {
        throw new Error('No admin user found');
      }
      
      // Get the first admin user document
      const adminDoc = adminSnapshot.docs[0];
      
      // Update the admin document with the rules
      await updateDoc(doc(db, 'users', adminDoc.id), {
        attendanceRules: rules
      });
      
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
            Beyond this threshold, they will be marked as "Overtime".
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
