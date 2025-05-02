import React from 'react';
import AttendanceView from './AttendanceView';
import OvertimeRequestForm from './OvertimeRequestForm';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AttendanceLogsView = ({ user }) => {
  return (
    <Container>
      <AttendanceView user={user} />
      <OvertimeRequestForm user={user} />
    </Container>
  );
};

export default AttendanceLogsView;
