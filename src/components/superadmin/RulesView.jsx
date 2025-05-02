import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, CardTitle, CardContent } from '../dashboard/DashboardComponents';
import { Gear, FloppyDisk, ClockClockwise, ArrowClockwise, GlobeHemisphereWest, LockSimple, LockSimpleOpen } from 'phosphor-react';
import { getAttendanceRules, updateAttendanceRules } from '../../services/systemSettingsService';
import { toast } from 'react-toastify';

const RulesSection = styled.div`
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  }
`;

const SectionTitle = styled.h3`
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
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FormLabel = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #444;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: #800000;
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.1);
  }
  
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Description = styled.p`
  font-size: 0.85rem;
  color: #666;
  margin-top: 0.25rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
  border: none;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #800000;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: #600000;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #f0f0f0;
  color: #333;
  
  &:hover:not(:disabled) {
    background-color: #e0e0e0;
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;

const RuleDescription = styled.div`
  background-color: #f9f9f9;
  border-left: 4px solid #800000;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 0 4px 4px 0;
`;

const RulesView = () => {
  const [rules, setRules] = useState({
    timeIn: {
      earlyThreshold: 15,
      onTimeThreshold: 5
    },
    timeOut: {
      incompleteThreshold: 30,
      overtimeThreshold: 30
    },
    timeRegion: {
      lockToDeviceRegion: false
    }
  });
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [originalRules, setOriginalRules] = useState(null);
  
  // Fetch current rules on component mount
  useEffect(() => {
    const fetchRules = async () => {
      try {
        setLoading(true);
        const fetchedRules = await getAttendanceRules();
        setRules(fetchedRules);
        setOriginalRules(JSON.parse(JSON.stringify(fetchedRules))); // Deep copy for reset functionality
      } catch (error) {
        console.error('Error fetching attendance rules:', error);
        toast.error('Failed to load attendance rules');
      } finally {
        setLoading(false);
      }
    };
    
    fetchRules();
  }, []);
  
  // Handle input change
  const handleInputChange = (section, field, value) => {
    if (typeof value === 'boolean') {
      // Handle boolean values (like toggles)
      setRules(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
      return;
    }
    
    // Ensure value is a positive number
    const numValue = parseInt(value, 10);
    if (isNaN(numValue) || numValue < 0) return;
    
    setRules(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: numValue
      }
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setSaving(true);
      await updateAttendanceRules(rules);
      setOriginalRules(JSON.parse(JSON.stringify(rules))); // Update original rules after successful save
      toast.success('Attendance rules updated successfully');
    } catch (error) {
      console.error('Error updating attendance rules:', error);
      toast.error('Failed to update attendance rules');
    } finally {
      setSaving(false);
    }
  };
  
  // Reset form to original values
  const handleReset = () => {
    if (originalRules) {
      setRules(JSON.parse(JSON.stringify(originalRules)));
    }
  };
  
  // Check if form has been modified
  const isFormModified = () => {
    if (!originalRules) return false;
    
    return (
      rules.timeIn.earlyThreshold !== originalRules.timeIn.earlyThreshold ||
      rules.timeIn.onTimeThreshold !== originalRules.timeIn.onTimeThreshold ||
      rules.timeOut.incompleteThreshold !== originalRules.timeOut.incompleteThreshold ||
      rules.timeOut.overtimeThreshold !== originalRules.timeOut.overtimeThreshold ||
      rules.timeRegion?.lockToDeviceRegion !== originalRules.timeRegion?.lockToDeviceRegion
    );
  };
  
  return (
    <Card>
      <CardTitle>
        <Icon><Gear size={24} weight="bold" /></Icon>
        Attendance Rules Configuration
      </CardTitle>
      <CardContent>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
            <p>Loading attendance rules...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <RuleDescription>
              <p>These settings control how the system determines the status of attendance records. Changes will apply to all future attendance records.</p>
            </RuleDescription>
            
            <RulesSection>
              <SectionTitle>
                <ClockClockwise size={20} weight="bold" />
                Time-In Rules
              </SectionTitle>
              
              <FormRow>
                <FormGroup>
                  <FormLabel>Early Threshold (minutes)</FormLabel>
                  <FormInput
                    type="number"
                    min="0"
                    value={rules.timeIn.earlyThreshold}
                    onChange={(e) => handleInputChange('timeIn', 'earlyThreshold', e.target.value)}
                  />
                  <Description>
                    Users who time in more than {rules.timeIn.earlyThreshold} minutes before their scheduled time will be marked as "Early".
                  </Description>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>On-Time Threshold (minutes)</FormLabel>
                  <FormInput
                    type="number"
                    min="0"
                    value={rules.timeIn.onTimeThreshold}
                    onChange={(e) => handleInputChange('timeIn', 'onTimeThreshold', e.target.value)}
                  />
                  <Description>
                    Users who time in up to {rules.timeIn.onTimeThreshold} minutes after their scheduled time will still be marked as "On Time".
                  </Description>
                </FormGroup>
              </FormRow>
            </RulesSection>
            
            <RulesSection>
              <SectionTitle>
                <ClockClockwise size={20} weight="bold" />
                Time-Out Rules
              </SectionTitle>
              
              <FormRow>
                <FormGroup>
                  <FormLabel>Incomplete Threshold (minutes)</FormLabel>
                  <FormInput
                    type="number"
                    min="0"
                    value={rules.timeOut.incompleteThreshold}
                    onChange={(e) => handleInputChange('timeOut', 'incompleteThreshold', e.target.value)}
                  />
                  <Description>
                    Users who time out more than {rules.timeOut.incompleteThreshold} minutes before their scheduled shift end will be marked as "Incomplete".
                  </Description>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Overtime Threshold (minutes)</FormLabel>
                  <FormInput
                    type="number"
                    min="0"
                    value={rules.timeOut.overtimeThreshold}
                    onChange={(e) => handleInputChange('timeOut', 'overtimeThreshold', e.target.value)}
                  />
                  <Description>
                    Users who time out more than {rules.timeOut.overtimeThreshold} minutes after their scheduled shift end will be marked as "Overtime".
                  </Description>
                </FormGroup>
              </FormRow>
            </RulesSection>
            
            <RulesSection>
              <SectionTitle>
                <GlobeHemisphereWest size={20} weight="bold" />
                Time Region Settings
              </SectionTitle>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '1rem',
                background: rules.timeRegion?.lockToDeviceRegion ? '#f9f9f9' : 'white',
                borderRadius: '8px',
                border: '1px solid #eee',
                transition: 'all 0.2s ease'
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '0.5rem',
                    fontWeight: '600',
                    color: '#444'
                  }}>
                    {rules.timeRegion?.lockToDeviceRegion ? 
                      <LockSimple size={18} style={{ marginRight: '0.5rem' }} /> : 
                      <LockSimpleOpen size={18} style={{ marginRight: '0.5rem' }} />
                    }
                    Lock User Time Region to Device
                  </div>
                  <Description>
                    {rules.timeRegion?.lockToDeviceRegion ? 
                      "Users' time region will be automatically set to match their device's detected time region and they won't be able to change it." : 
                      "Users can manually select their preferred time region regardless of their device's detected time region."}
                  </Description>
                </div>
                <label className="switch" style={{ 
                  position: 'relative',
                  display: 'inline-block',
                  width: '60px',
                  height: '34px',
                  marginLeft: '1rem'
                }}>
                  <input 
                    type="checkbox" 
                    checked={rules.timeRegion?.lockToDeviceRegion || false}
                    onChange={(e) => handleInputChange('timeRegion', 'lockToDeviceRegion', e.target.checked)}
                    style={{ opacity: 0, width: 0, height: 0 }}
                  />
                  <span style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: rules.timeRegion?.lockToDeviceRegion ? '#800000' : '#ccc',
                    transition: '.4s',
                    borderRadius: '34px',
                    '&:before': {
                      position: 'absolute',
                      content: '""',
                      height: '26px',
                      width: '26px',
                      left: '4px',
                      bottom: '4px',
                      backgroundColor: 'white',
                      transition: '.4s',
                      borderRadius: '50%',
                      transform: rules.timeRegion?.lockToDeviceRegion ? 'translateX(26px)' : 'translateX(0)'
                    }
                  }}>
                    <div style={{
                      position: 'absolute',
                      height: '26px',
                      width: '26px',
                      left: '4px',
                      bottom: '4px',
                      backgroundColor: 'white',
                      transition: '.4s',
                      borderRadius: '50%',
                      transform: rules.timeRegion?.lockToDeviceRegion ? 'translateX(26px)' : 'translateX(0)'
                    }} />
                  </span>
                </label>
              </div>
            </RulesSection>
            
            <ButtonContainer>
              <SecondaryButton
                type="button"
                onClick={handleReset}
                disabled={saving || !isFormModified()}
              >
                <Icon><ArrowClockwise size={16} /></Icon>
                Reset
              </SecondaryButton>
              
              <PrimaryButton
                type="submit"
                disabled={saving || !isFormModified()}
              >
                <Icon><FloppyDisk size={16} /></Icon>
                {saving ? 'Saving...' : 'Save Changes'}
              </PrimaryButton>
            </ButtonContainer>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default RulesView;
