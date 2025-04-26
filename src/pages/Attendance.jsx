import React from 'react';
import styled from 'styled-components';
import { Clock, ClockClockwise } from 'phosphor-react';

const Container = styled.div`
  padding: 1rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Text = styled.p`
  color: #666;
  line-height: 1.6;
`;

const AttendancePage = ({ attendanceStatus, lastRecord, use24HourFormat }) => {
  return (
    <Container>
      <Card>
        <Title>
          <Clock size={24} />
          Attendance
        </Title>
        <Text>
          View and manage your attendance records here. You can see your current status and recent attendance history.
        </Text>
        
        <div style={{ marginTop: '1.5rem' }}>
          <h3>Current Status</h3>
          {attendanceStatus ? (
            <div>
              <p>You are currently <strong>{attendanceStatus}</strong></p>
              {lastRecord && (
                <p>
                  Last action at: {lastRecord.timestamp.toDate().toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    hour12: !use24HourFormat
                  })}
                </p>
              )}
            </div>
          ) : (
            <p>You are not currently clocked in.</p>
          )}
        </div>
      </Card>
      
      <Card>
        <Title>
          <ClockClockwise size={24} />
          Recent Attendance History
        </Title>
        
        {/* Add attendance history content here */}
        <Text>
          Your recent attendance records will be displayed here.
        </Text>
      </Card>
    </Container>
  );
};

export default AttendancePage;
