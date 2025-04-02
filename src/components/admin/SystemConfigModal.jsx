import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { X, Save, Sliders, Clock, Calendar, Bell, LayoutDashboard, ArrowClockwise } from 'phosphor-react';

// Styled components
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
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  overflow-x: auto;
`;

const Tab = styled.button`
  padding: 10px 15px;
  background: ${props => props.active ? '#f0f0f0' : 'transparent'};
  border: none;
  border-bottom: ${props => props.active ? '2px solid #4a6cf7' : '2px solid transparent'};
  cursor: pointer;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  color: ${props => props.active ? '#4a6cf7' : '#666'};
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #f8f8f8;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #555;
`;

const Description = styled.p`
  margin: 0 0 8px 0;
  font-size: 0.85rem;
  color: #777;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #4a6cf7;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SaveButton = styled(Button)`
  background-color: #4a6cf7;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: #3a5ce5;
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
`;

const NotificationBar = styled.div`
  padding: 10px 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  background-color: ${props => props.type === 'error' ? '#f8d7da' : '#d4edda'};
  color: ${props => props.type === 'error' ? '#721c24' : '#155724'};
  border: 1px solid ${props => props.type === 'error' ? '#f5c6cb' : '#c3e6cb'};
`;

// Default configuration values
const DEFAULT_CONFIG = {
  attendanceRules: {
    timeIn: {
      early: -60,
      onTime: 5,
    },
    timeOut: {
      earlyOut: -15,
      onTime: 60,
    }
  },
  shiftRules: {
    minHoursBetweenShifts: 4,
    lateNightShiftStartHour: 22,
    earlyMorningEndHour: 8,
    largeTimeDiffThreshold: 600,
  },
  systemBehavior: {
    enableMobileAccess: false,
    enableNotifications: true,
    requireNotesForLateAttendance: false,
    requireNotesForEarlyOut: false,
    autoLogoutAfterMinutes: 60,
  }
};

const SystemConfigModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('attendance');
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  
  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    
    // Auto-hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };
  
  const handleSave = async () => {
    try {
      // In a real implementation, we would save to Firebase here
      showNotification('System configuration saved successfully', 'success');
      
      // For now, just close the modal
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (error) {
      console.error('Error saving system configuration:', error);
      showNotification('Failed to save system configuration', 'error');
    }
  };
  
  const handleChange = (section, key, value) => {
    setConfig({
      ...config,
      [section]: {
        ...config[section],
        [key]: value
      }
    });
  };
  
  const handleNestedChange = (section, parentKey, childKey, value) => {
    setConfig({
      ...config,
      [section]: {
        ...config[section],
        [parentKey]: {
          ...config[section][parentKey],
          [childKey]: value
        }
      }
    });
  };
  
  if (!isOpen) return null;
  
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <Title>
            <Icon><Sliders size={24} /></Icon>
            System Configuration
          </Title>
          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
        </ModalHeader>
        
        {notification.show && (
          <NotificationBar type={notification.type}>
            {notification.message}
          </NotificationBar>
        )}
        
        <Tabs>
          <Tab 
            active={activeTab === 'attendance'} 
            onClick={() => setActiveTab('attendance')}
          >
            <Icon><Clock size={16} /></Icon>
            Attendance Rules
          </Tab>
          <Tab 
            active={activeTab === 'shifts'} 
            onClick={() => setActiveTab('shifts')}
          >
            <Icon><Calendar size={16} /></Icon>
            Shift Rules
          </Tab>
          <Tab 
            active={activeTab === 'system'} 
            onClick={() => setActiveTab('system')}
          >
            <Icon><Bell size={16} /></Icon>
            System Behavior
          </Tab>
        </Tabs>
        
        {activeTab === 'attendance' && (
          <Section>
            <SectionTitle>
              <Icon><Clock size={20} /></Icon>
              Attendance Rules
            </SectionTitle>
            
            <FormGroup>
              <Label>Time-In Early Threshold (minutes)</Label>
              <Description>Minutes before schedule to be considered "Early"</Description>
              <Input 
                type="number" 
                value={Math.abs(config.attendanceRules.timeIn.early)} 
                onChange={(e) => handleNestedChange('attendanceRules', 'timeIn', 'early', -Math.abs(parseInt(e.target.value)))}
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Time-In On-Time Threshold (minutes)</Label>
              <Description>Minutes after schedule to still be considered "On Time"</Description>
              <Input 
                type="number" 
                value={config.attendanceRules.timeIn.onTime} 
                onChange={(e) => handleNestedChange('attendanceRules', 'timeIn', 'onTime', parseInt(e.target.value))}
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Time-Out Early-Out Threshold (minutes)</Label>
              <Description>Minutes before schedule to be considered "Early Out"</Description>
              <Input 
                type="number" 
                value={Math.abs(config.attendanceRules.timeOut.earlyOut)} 
                onChange={(e) => handleNestedChange('attendanceRules', 'timeOut', 'earlyOut', -Math.abs(parseInt(e.target.value)))}
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Time-Out On-Time Threshold (minutes)</Label>
              <Description>Minutes after schedule to still be considered "On Time"</Description>
              <Input 
                type="number" 
                value={config.attendanceRules.timeOut.onTime} 
                onChange={(e) => handleNestedChange('attendanceRules', 'timeOut', 'onTime', parseInt(e.target.value))}
              />
            </FormGroup>
          </Section>
        )}
        
        {activeTab === 'shifts' && (
          <Section>
            <SectionTitle>
              <Icon><Calendar size={20} /></Icon>
              Shift Rules
            </SectionTitle>
            
            <FormGroup>
              <Label>Minimum Hours Between Shifts</Label>
              <Description>Minimum hours required between shifts before allowing time-in for next shift</Description>
              <Input 
                type="number" 
                value={config.shiftRules.minHoursBetweenShifts} 
                onChange={(e) => handleChange('shiftRules', 'minHoursBetweenShifts', parseInt(e.target.value))}
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Late Night Shift Start Hour</Label>
              <Description>Hour (24h format) when late night shifts start</Description>
              <Input 
                type="number" 
                min="0"
                max="23"
                value={config.shiftRules.lateNightShiftStartHour} 
                onChange={(e) => handleChange('shiftRules', 'lateNightShiftStartHour', parseInt(e.target.value))}
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Early Morning End Hour</Label>
              <Description>Hour (24h format) for early morning shift ends</Description>
              <Input 
                type="number" 
                min="0"
                max="12"
                value={config.shiftRules.earlyMorningEndHour} 
                onChange={(e) => handleChange('shiftRules', 'earlyMorningEndHour', parseInt(e.target.value))}
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Large Time Difference Threshold (minutes)</Label>
              <Description>Minutes threshold for detecting calculation errors (e.g., 600 = 10 hours)</Description>
              <Input 
                type="number" 
                value={config.shiftRules.largeTimeDiffThreshold} 
                onChange={(e) => handleChange('shiftRules', 'largeTimeDiffThreshold', parseInt(e.target.value))}
              />
            </FormGroup>
          </Section>
        )}
        
        {activeTab === 'system' && (
          <Section>
            <SectionTitle>
              <Icon><Bell size={20} /></Icon>
              System Behavior
            </SectionTitle>
            
            <FormGroup>
              <Label>
                <input 
                  type="checkbox" 
                  checked={config.systemBehavior.enableMobileAccess} 
                  onChange={(e) => handleChange('systemBehavior', 'enableMobileAccess', e.target.checked)}
                  style={{ marginRight: '8px' }}
                />
                Enable Mobile Access
              </Label>
              <Description>Allow users to access the system from mobile devices</Description>
            </FormGroup>
            
            <FormGroup>
              <Label>
                <input 
                  type="checkbox" 
                  checked={config.systemBehavior.enableNotifications} 
                  onChange={(e) => handleChange('systemBehavior', 'enableNotifications', e.target.checked)}
                  style={{ marginRight: '8px' }}
                />
                Enable Notifications
              </Label>
              <Description>Enable system notifications for important events</Description>
            </FormGroup>
            
            <FormGroup>
              <Label>
                <input 
                  type="checkbox" 
                  checked={config.systemBehavior.requireNotesForLateAttendance} 
                  onChange={(e) => handleChange('systemBehavior', 'requireNotesForLateAttendance', e.target.checked)}
                  style={{ marginRight: '8px' }}
                />
                Require Notes for Late Attendance
              </Label>
              <Description>Require users to provide notes when they're late</Description>
            </FormGroup>
            
            <FormGroup>
              <Label>
                <input 
                  type="checkbox" 
                  checked={config.systemBehavior.requireNotesForEarlyOut} 
                  onChange={(e) => handleChange('systemBehavior', 'requireNotesForEarlyOut', e.target.checked)}
                  style={{ marginRight: '8px' }}
                />
                Require Notes for Early Out
              </Label>
              <Description>Require users to provide notes when they leave early</Description>
            </FormGroup>
            
            <FormGroup>
              <Label>Auto Logout After Inactivity (minutes)</Label>
              <Description>Automatically log users out after this period of inactivity</Description>
              <Input 
                type="number" 
                value={config.systemBehavior.autoLogoutAfterMinutes} 
                onChange={(e) => handleChange('systemBehavior', 'autoLogoutAfterMinutes', parseInt(e.target.value))}
              />
            </FormGroup>
          </Section>
        )}
        
        <ButtonGroup>
          <SaveButton type="button" onClick={handleSave}>
            <Icon><Save size={16} /></Icon>
            Save Changes
          </SaveButton>
        </ButtonGroup>
      </ModalContent>
    </Modal>
  );
};

export default SystemConfigModal;
