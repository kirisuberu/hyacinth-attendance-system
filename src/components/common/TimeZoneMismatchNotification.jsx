import React from 'react';
import styled from 'styled-components';
import { useTimeFormat } from '../../contexts/TimeFormatContext';
import { Link } from 'react-router-dom';

const NotificationContainer = styled.div`
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeeba;
  border-radius: 4px;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
`;

const WarningIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;

const NotificationText = styled.div`
  flex-grow: 1;
`;

const ActionLink = styled(Link)`
  color: #0056b3;
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap;
  margin-left: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 1rem;
  color: #856404;
  padding: 0;
  
  &:hover {
    color: #533f03;
  }
`;

/**
 * Component that shows a warning notification when the user's system time zone
 * differs from their configured work time zone
 */
const TimeZoneMismatchNotification = ({ onDismiss }) => {
  const { timeZone, systemTimeZone } = useTimeFormat();
  
  // Don't show if no mismatch or time zones not loaded yet
  if (!timeZone || !systemTimeZone || timeZone === systemTimeZone) {
    return null;
  }
  
  // Format time in both zones for comparison
  const now = new Date();
  const formatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
  
  let userZoneTime, systemZoneTime;
  
  try {
    userZoneTime = new Intl.DateTimeFormat('en-US', { ...formatOptions, timeZone }).format(now);
    systemZoneTime = new Intl.DateTimeFormat('en-US', { ...formatOptions, timeZone: systemTimeZone }).format(now);
  } catch (error) {
    console.error('Error formatting times for time zone comparison:', error);
    return null;
  }
  
  return (
    <NotificationContainer>
      <WarningIcon role="img" aria-label="Warning">⚠️</WarningIcon>
      <NotificationText>
        Time zone mismatch detected. Your device time zone ({systemTimeZone}: {systemZoneTime}) 
        differs from your configured work time zone ({timeZone}: {userZoneTime}).
        This may affect how your attendance times are calculated.
      </NotificationText>
      <ActionLink to="/settings">Update Settings</ActionLink>
      {onDismiss && (
        <CloseButton onClick={onDismiss} aria-label="Dismiss notification">
          ×
        </CloseButton>
      )}
    </NotificationContainer>
  );
};

export default TimeZoneMismatchNotification;
