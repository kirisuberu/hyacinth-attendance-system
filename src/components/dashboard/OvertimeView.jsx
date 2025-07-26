import React from 'react';
import styled from 'styled-components';
import OvertimeRequestForm from './OvertimeRequestForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const OvertimeView = ({ user }) => {
  return (
    <Container>
      <OvertimeRequestForm user={user} />
    </Container>
  );
};

export default OvertimeView;
