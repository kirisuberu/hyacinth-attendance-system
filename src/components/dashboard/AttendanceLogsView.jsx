import React, { useState } from 'react';
import AttendanceView from './AttendanceView';
import OvertimeView from './OvertimeView';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1rem;
`;

const Tab = styled.div`
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 3px solid ${props => props.active ? '#e91e63' : 'transparent'};
  color: ${props => props.active ? '#e91e63' : '#333'};
  transition: all 0.2s ease;
  
  &:hover {
    color: #e91e63;
  }
`;

const AttendanceLogsView = ({ user }) => {
  const [activeTab, setActiveTab] = useState('records');

  return (
    <Container>
      <TabContainer>
        <Tab 
          active={activeTab === 'records'} 
          onClick={() => setActiveTab('records')}
        >
          Records
        </Tab>
        <Tab 
          active={activeTab === 'overtime'} 
          onClick={() => setActiveTab('overtime')}
        >
          Overtime
        </Tab>
      </TabContainer>
      
      {activeTab === 'records' && <AttendanceView user={user} />}
      {activeTab === 'overtime' && <OvertimeView user={user} />}
    </Container>
  );
};

export default AttendanceLogsView;
