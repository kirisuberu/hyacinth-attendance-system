import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTimeFormat } from '../../contexts/TimeFormatContext';
import { Button, Card, CardTitle, CardContent } from '../dashboard/DashboardComponents';
import { toast } from 'react-toastify';

// List of common time zones - expand as needed
const COMMON_TIME_ZONES = [
  { value: 'Asia/Manila', label: 'Asia/Manila (UTC+8)' },
  { value: 'Asia/Singapore', label: 'Asia/Singapore (UTC+8)' },
  { value: 'Asia/Tokyo', label: 'Asia/Tokyo (UTC+9)' },
  { value: 'Asia/Seoul', label: 'Asia/Seoul (UTC+9)' },
  { value: 'Asia/Shanghai', label: 'Asia/Shanghai (UTC+8)' },
  { value: 'Asia/Kolkata', label: 'Asia/Kolkata (UTC+5:30)' },
  { value: 'Asia/Dubai', label: 'Asia/Dubai (UTC+4)' },
  { value: 'Europe/London', label: 'Europe/London (UTC+0/+1)' },
  { value: 'Europe/Paris', label: 'Europe/Paris (UTC+1/+2)' },
  { value: 'Europe/Berlin', label: 'Europe/Berlin (UTC+1/+2)' },
  { value: 'America/New_York', label: 'America/New_York (UTC-5/-4)' },
  { value: 'America/Chicago', label: 'America/Chicago (UTC-6/-5)' },
  { value: 'America/Denver', label: 'America/Denver (UTC-7/-6)' },
  { value: 'America/Los_Angeles', label: 'America/Los_Angeles (UTC-8/-7)' },
  { value: 'America/Sao_Paulo', label: 'America/Sao_Paulo (UTC-3)' },
  { value: 'Australia/Sydney', label: 'Australia/Sydney (UTC+10/+11)' },
  { value: 'Pacific/Auckland', label: 'Pacific/Auckland (UTC+12/+13)' },
];

const SettingsContainer = styled.div`
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const InfoText = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const TimeZoneSettings = () => {
  const { timeZone, systemTimeZone, updateTimeZone } = useTimeFormat();
  const [selectedTimeZone, setSelectedTimeZone] = useState(timeZone || 'Asia/Manila');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handleTimeZoneChange = (e) => {
    setSelectedTimeZone(e.target.value);
  };

  const handleSave = async () => {
    const success = await updateTimeZone(selectedTimeZone);
    if (success) {
      toast.success('Time zone settings updated successfully');
    } else {
      toast.error('Failed to update time zone settings');
    }
  };

  const handleDetectSystem = () => {
    if (systemTimeZone) {
      setSelectedTimeZone(systemTimeZone);
      toast.info(`Detected system time zone: ${systemTimeZone}`);
    } else {
      toast.warn('Could not detect system time zone');
    }
  };

  // Format the current time in the selected time zone
  const formatTimeInZone = (date, timeZone) => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone,
        dateStyle: 'medium',
        timeStyle: 'medium',
      }).format(date);
    } catch (error) {
      console.error('Error formatting time in zone:', error);
      return 'Invalid time zone';
    }
  };

  return (
    <Card>
      <CardTitle>Time Zone Settings</CardTitle>
      <CardContent>
        <SettingsContainer>
          <FormGroup>
            <Label htmlFor="timeZone">Select your work time zone:</Label>
            <Select 
              id="timeZone" 
              value={selectedTimeZone} 
              onChange={handleTimeZoneChange}
            >
              {COMMON_TIME_ZONES.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
              {/* Show current time zone if not in list */}
              {timeZone && !COMMON_TIME_ZONES.some(tz => tz.value === timeZone) && (
                <option value={timeZone}>{timeZone}</option>
              )}
            </Select>
            <InfoText>
              This time zone will be used for all attendance calculations and displays.
            </InfoText>
          </FormGroup>
          
          <FormGroup>
            <Label>Current time in selected time zone:</Label>
            <div>
              <strong>{formatTimeInZone(currentTime, selectedTimeZone)}</strong>
            </div>
            <InfoText>
              Your system time zone: {systemTimeZone || 'Unknown'}
            </InfoText>
          </FormGroup>
          
          <ButtonContainer>
            <Button onClick={handleSave} primary>Save Settings</Button>
            <Button onClick={handleDetectSystem}>Use System Time Zone</Button>
          </ButtonContainer>
        </SettingsContainer>
      </CardContent>
    </Card>
  );
};

export default TimeZoneSettings;
