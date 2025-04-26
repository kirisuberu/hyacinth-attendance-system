import React from 'react';
import styled from 'styled-components';
import { Users } from 'phosphor-react';
import UserManagementView from '../components/dashboard/UserManagementView';

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

const UserManagementPage = () => {
  return (
    <Container>
      <Card>
        <Title>
          <Users size={24} />
          User Management
        </Title>
        <UserManagementView />
      </Card>
    </Container>
  );
};

export default UserManagementPage;
