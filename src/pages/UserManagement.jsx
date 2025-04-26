import React from 'react';
import styled from 'styled-components';
import UserManagementView from '../components/dashboard/UserManagementView';

const PageTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`;

function UserManagement() {
  return (
    <div>
      <PageTitle>User Management</PageTitle>
      <UserManagementView />
    </div>
  );
}

export default UserManagement;
