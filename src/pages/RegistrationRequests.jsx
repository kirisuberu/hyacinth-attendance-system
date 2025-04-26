import React from 'react';
import styled from 'styled-components';
import RegistrationRequestsView from '../components/dashboard/RegistrationRequestsView';

const PageTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`;

function RegistrationRequests() {
  return (
    <div>
      <PageTitle>Registration Requests</PageTitle>
      <RegistrationRequestsView />
    </div>
  );
}

export default RegistrationRequests;
