import React, { useState, useEffect } from 'react';
import { useTimeFormat } from '../../contexts/TimeFormatContext';
import { formatTimeForDisplay, timestampToZonedDate } from '../../utils/timeZoneUtils';
import styled from 'styled-components';
import { Tooltip } from './Tooltip';

/**
 * Component for displaying times with timezone awareness
 * Converts Firestore timestamps to the appropriate time zone for display
 */
const TimeZoneDisplay = ({ 
  timestamp, 
  timeZone = null, 
  showDate = false,
  showSeconds = false,
  className 
}) => {
  const { use24HourFormat } = useTimeFormat();
  const [formattedTime, setFormattedTime] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const [tooltipContent, setTooltipContent] = useState('');
  
  useEffect(() => {
    if (!timestamp) {
      setFormattedTime('--:--');
      setFormattedDate('');
      setTooltipContent('No timestamp provided');
      return;
    }
    
    try {
      // Convert timestamp to user's preferred timezone or default system timezone
      const dateObj = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      
      // Format the time for display
      let timeOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: !use24HourFormat
      };
      
      if (showSeconds) {
        timeOptions.second = '2-digit';
      }
      
      if (timeZone) {
        timeOptions.timeZone = timeZone;
      }
      
      // Format the date
      const dateOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        ...(timeZone ? { timeZone } : {})
      };
      
      // Apply formatting
      const timeString = new Intl.DateTimeFormat('en-US', timeOptions).format(dateObj);
      const dateString = new Intl.DateTimeFormat('en-US', dateOptions).format(dateObj);
      
      setFormattedTime(timeString);
      setFormattedDate(dateString);
      
      // Create tooltip content showing the time in different formats
      const tzName = timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      const utcFormatted = dateObj.toUTCString();
      const localFormatted = dateObj.toLocaleString();
      const isoFormatted = dateObj.toISOString();
      
      setTooltipContent(
        `Time: ${timeString}\n` +
        `Date: ${dateString}\n` +
        `Timezone: ${tzName}\n` +
        `UTC: ${utcFormatted}\n` +
        `ISO: ${isoFormatted}`
      );
    } catch (error) {
      console.error('Error formatting time:', error);
      setFormattedTime('Error');
      setFormattedDate('');
      setTooltipContent(`Error formatting time: ${error.message}`);
    }
  }, [timestamp, timeZone, use24HourFormat, showSeconds]);
  
  return (
    <Container className={className}>
      <Tooltip content={tooltipContent}>
        <TimeWrapper>
          {formattedTime}
          {showDate && formattedDate && (
            <DateSpan>{formattedDate}</DateSpan>
          )}
        </TimeWrapper>
      </Tooltip>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
`;

const TimeWrapper = styled.span`
  white-space: nowrap;
  cursor: help;
  border-bottom: 1px dotted #999;
`;

const DateSpan = styled.span`
  font-size: 0.85em;
  margin-left: 5px;
  color: #666;
`;

export default TimeZoneDisplay;
