import React, { useState } from 'react';
import styled from 'styled-components';
import { FloppyDisk, Sliders, Clock, Calendar, Bell, ArrowClockwise, ChartBar } from 'phosphor-react';

// Styled components
const PageContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: #333;
`;

const PageHeader = styled.div`
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

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: #10B981;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    background-color: #059669;
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
  color: ${props => props.active ? '#4a6cf7' : '#333'};
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
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  background-color: white;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  color: #333;
`;

const NotificationBar = styled.div`
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: ${props => props.type === 'error' ? '#FEE2E2' : '#D1FAE5'};
  color: ${props => props.type === 'error' ? '#DC2626' : '#059669'};
  font-weight: 500;
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  color: inherit;
`;

// Default configuration
const DEFAULT_CONFIG = {
  attendance: {
    earlyThreshold: 60, // minutes
    lateThreshold: 5, // minutes
    earlyOutThreshold: 5, // minutes
    overtimeThreshold: 30, // minutes
    timeFormat: '24h',
    allowManualEntry: false,
    requireNotes: {
      late: true,
      earlyOut: true,
      overtime: false
    }
  },
  shifts: {
    defaultShiftDuration: 8, // hours
    minBreakBetweenShifts: 8, // hours
    maxConsecutiveWorkDays: 6,
    allowShiftSwap: true,
    requireApprovalForSwap: true
  },
  system: {
    notifyAdminOnLate: true,
    autoGenerateReports: true,
    reportFrequency: 'weekly',
    dataRetentionPeriod: 365, // days
    backupFrequency: 'daily'
  }
};

const SystemConfig = () => {
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
  
  return (
    <PageContainer>
      <PageHeader>
        <Title>
          <Icon><Sliders size={24} /></Icon>
          System Configuration
        </Title>
        <SaveButton onClick={handleSave}>
          <Icon><FloppyDisk size={18} /></Icon>
          Save Changes
        </SaveButton>
      </PageHeader>
      
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
        <SettingsGrid>
          <Card>
            <SectionTitle>
              <Icon><Clock size={20} /></Icon>
              Time Thresholds
            </SectionTitle>
            <FormGroup>
              <Label htmlFor="earlyThreshold">Early Time-in Threshold (minutes)</Label>
              <Input 
                type="number" 
                id="earlyThreshold" 
                value={config.attendance.earlyThreshold}
                onChange={(e) => handleChange('attendance', 'earlyThreshold', parseInt(e.target.value))}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="lateThreshold">Late Time-in Threshold (minutes)</Label>
              <Input 
                type="number" 
                id="lateThreshold" 
                value={config.attendance.lateThreshold}
                onChange={(e) => handleChange('attendance', 'lateThreshold', parseInt(e.target.value))}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="earlyOutThreshold">Early Time-out Threshold (minutes)</Label>
              <Input 
                type="number" 
                id="earlyOutThreshold" 
                value={config.attendance.earlyOutThreshold}
                onChange={(e) => handleChange('attendance', 'earlyOutThreshold', parseInt(e.target.value))}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="overtimeThreshold">Overtime Threshold (minutes)</Label>
              <Input 
                type="number" 
                id="overtimeThreshold" 
                value={config.attendance.overtimeThreshold}
                onChange={(e) => handleChange('attendance', 'overtimeThreshold', parseInt(e.target.value))}
              />
            </FormGroup>
          </Card>
          
          <Card>
            <SectionTitle>
              <Icon><Clock size={20} /></Icon>
              Attendance Options
            </SectionTitle>
            <FormGroup>
              <Label htmlFor="timeFormat">Time Format</Label>
              <Select 
                id="timeFormat" 
                value={config.attendance.timeFormat}
                onChange={(e) => handleChange('attendance', 'timeFormat', e.target.value)}
              >
                <option value="12h">12-hour (AM/PM)</option>
                <option value="24h">24-hour</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>
                <Checkbox 
                  type="checkbox" 
                  checked={config.attendance.allowManualEntry}
                  onChange={(e) => handleChange('attendance', 'allowManualEntry', e.target.checked)}
                />
                Allow Manual Time Entry
              </Label>
            </FormGroup>
            <FormGroup>
              <Label>Required Notes</Label>
              <div style={{ marginLeft: '10px' }}>
                <Label>
                  <Checkbox 
                    type="checkbox" 
                    checked={config.attendance.requireNotes.late}
                    onChange={(e) => handleNestedChange('attendance', 'requireNotes', 'late', e.target.checked)}
                  />
                  Require Notes for Late Time-in
                </Label>
              </div>
              <div style={{ marginLeft: '10px' }}>
                <Label>
                  <Checkbox 
                    type="checkbox" 
                    checked={config.attendance.requireNotes.earlyOut}
                    onChange={(e) => handleNestedChange('attendance', 'requireNotes', 'earlyOut', e.target.checked)}
                  />
                  Require Notes for Early Time-out
                </Label>
              </div>
              <div style={{ marginLeft: '10px' }}>
                <Label>
                  <Checkbox 
                    type="checkbox" 
                    checked={config.attendance.requireNotes.overtime}
                    onChange={(e) => handleNestedChange('attendance', 'requireNotes', 'overtime', e.target.checked)}
                  />
                  Require Notes for Overtime
                </Label>
              </div>
            </FormGroup>
          </Card>
        </SettingsGrid>
      )}
      
      {activeTab === 'shifts' && (
        <SettingsGrid>
          <Card>
            <SectionTitle>
              <Icon><Calendar size={20} /></Icon>
              Shift Settings
            </SectionTitle>
            <FormGroup>
              <Label htmlFor="defaultShiftDuration">Default Shift Duration (hours)</Label>
              <Input 
                type="number" 
                id="defaultShiftDuration" 
                value={config.shifts.defaultShiftDuration}
                onChange={(e) => handleChange('shifts', 'defaultShiftDuration', parseInt(e.target.value))}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="minBreakBetweenShifts">Minimum Break Between Shifts (hours)</Label>
              <Input 
                type="number" 
                id="minBreakBetweenShifts" 
                value={config.shifts.minBreakBetweenShifts}
                onChange={(e) => handleChange('shifts', 'minBreakBetweenShifts', parseInt(e.target.value))}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="maxConsecutiveWorkDays">Maximum Consecutive Work Days</Label>
              <Input 
                type="number" 
                id="maxConsecutiveWorkDays" 
                value={config.shifts.maxConsecutiveWorkDays}
                onChange={(e) => handleChange('shifts', 'maxConsecutiveWorkDays', parseInt(e.target.value))}
              />
            </FormGroup>
          </Card>
          
          <Card>
            <SectionTitle>
              <Icon><ArrowClockwise size={20} /></Icon>
              Shift Swap Options
            </SectionTitle>
            <FormGroup>
              <Label>
                <Checkbox 
                  type="checkbox" 
                  checked={config.shifts.allowShiftSwap}
                  onChange={(e) => handleChange('shifts', 'allowShiftSwap', e.target.checked)}
                />
                Allow Shift Swapping
              </Label>
            </FormGroup>
            <FormGroup>
              <Label>
                <Checkbox 
                  type="checkbox" 
                  checked={config.shifts.requireApprovalForSwap}
                  onChange={(e) => handleChange('shifts', 'requireApprovalForSwap', e.target.checked)}
                />
                Require Admin Approval for Shift Swaps
              </Label>
            </FormGroup>
          </Card>
        </SettingsGrid>
      )}
      
      {activeTab === 'system' && (
        <SettingsGrid>
          <Card>
            <SectionTitle>
              <Icon><Bell size={20} /></Icon>
              Notifications
            </SectionTitle>
            <FormGroup>
              <Label>
                <Checkbox 
                  type="checkbox" 
                  checked={config.system.notifyAdminOnLate}
                  onChange={(e) => handleChange('system', 'notifyAdminOnLate', e.target.checked)}
                />
                Notify Admin on Late Time-ins
              </Label>
            </FormGroup>
          </Card>
          
          <Card>
            <SectionTitle>
              <Icon><ChartBar size={20} /></Icon>
              Reports & Data
            </SectionTitle>
            <FormGroup>
              <Label>
                <Checkbox 
                  type="checkbox" 
                  checked={config.system.autoGenerateReports}
                  onChange={(e) => handleChange('system', 'autoGenerateReports', e.target.checked)}
                />
                Auto-generate Reports
              </Label>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="reportFrequency">Report Frequency</Label>
              <Select 
                id="reportFrequency" 
                value={config.system.reportFrequency}
                onChange={(e) => handleChange('system', 'reportFrequency', e.target.value)}
                disabled={!config.system.autoGenerateReports}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="biweekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="dataRetentionPeriod">Data Retention Period (days)</Label>
              <Input 
                type="number" 
                id="dataRetentionPeriod" 
                value={config.system.dataRetentionPeriod}
                onChange={(e) => handleChange('system', 'dataRetentionPeriod', parseInt(e.target.value))}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="backupFrequency">Backup Frequency</Label>
              <Select 
                id="backupFrequency" 
                value={config.system.backupFrequency}
                onChange={(e) => handleChange('system', 'backupFrequency', e.target.value)}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </Select>
            </FormGroup>
          </Card>
        </SettingsGrid>
      )}
    </PageContainer>
  );
};

export default SystemConfig;
