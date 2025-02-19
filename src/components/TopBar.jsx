import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TopBarContainer = styled.div`
  background: linear-gradient(to right, #1d4ed8, #1e3a8a);
  color: white;
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
  font-size: 1.125rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TimeZoneBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 150px;
  text-align: center;
`;

const TimeZoneLabel = styled.span`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: #bfdbfe;
`;

const TimeDisplay = styled.span`
  font-family: monospace;
  font-size: 1.125rem;
  white-space: nowrap;
`;

const TopBarTitle = styled.h1`
  font-size: 1.5rem;
  color: white;
  margin: 0;
  margin-bottom: 1rem;
  text-align: center;
`;

const TopBar = () => {
  const [times, setTimes] = useState({
    est: '',
    pht: '',
    cst: '',
  });

  useEffect(() => {
    const formatters = {
      est: new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      }),
      pht: new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Manila',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      }),
      cst: new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Chicago',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      })
    };

    const updateTimes = () => {
      const now = new Date();
      setTimes({
        est: formatters.est.format(now),
        pht: formatters.pht.format(now),
        cst: formatters.cst.format(now)
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TopBarContainer>
      <TopBarTitle>Hyacinth Attendance</TopBarTitle>

      <TimeContainer>
        <TimeZoneBlock>
          <TimeZoneLabel>EST</TimeZoneLabel>
          <TimeDisplay>{times.est}</TimeDisplay>
        </TimeZoneBlock>
        <TimeZoneBlock>
          <TimeZoneLabel>PHT</TimeZoneLabel>
          <TimeDisplay>{times.pht}</TimeDisplay>
        </TimeZoneBlock>
        <TimeZoneBlock>
          <TimeZoneLabel>CST</TimeZoneLabel>
          <TimeDisplay>{times.cst}</TimeDisplay>
        </TimeZoneBlock>
      </TimeContainer>
    </TopBarContainer>
  );
};

export default TopBar;
