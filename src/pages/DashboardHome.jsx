import React from 'react';
import styled from 'styled-components';
import { House } from 'phosphor-react';

const Container = styled.div`
  padding: 1rem;
`;

const WelcomeCard = styled.div`
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

const DashboardHome = ({ userData }) => {
  return (
    <Container>
      <WelcomeCard>
        <Title>
          <House size={24} />
          Welcome, {userData?.firstName || 'User'}!
        </Title>
        <Text>
          This is your dashboard home page. You can view your schedule, manage your attendance, 
          and access your profile from the navigation menu.
        </Text>
      </WelcomeCard>
      
      {/* Add more dashboard content here */}
    </Container>
  );
};

export default DashboardHome;
