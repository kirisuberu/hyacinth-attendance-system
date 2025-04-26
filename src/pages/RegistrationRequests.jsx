import React from 'react';
import styled from 'styled-components';
import { UserPlus } from 'phosphor-react';

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

const RegistrationRequestsPage = () => {
  return (
    <Container>
      <Card>
        <Title>
          <UserPlus size={24} />
          Registration Requests
        </Title>
        <Text>
          Manage user registration requests here. You can approve or reject pending registration requests.
        </Text>
      </Card>
      
      {/* Add registration requests content here */}
    </Container>
  );
};

export default RegistrationRequestsPage;
