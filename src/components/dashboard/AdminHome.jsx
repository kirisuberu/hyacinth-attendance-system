import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UserPlus, Users, Gear, ChartBar } from 'phosphor-react';

const AdminHomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const AdminCard = styled(Link)`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #800000;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const CardDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

function AdminHome() {
  const adminFeatures = [
    {
      title: 'Registration Requests',
      description: 'Review and approve new user registration requests',
      icon: <UserPlus size={24} />,
      link: '/admin/registration-requests'
    },
    {
      title: 'User Management',
      description: 'Manage users, roles, and permissions',
      icon: <Users size={24} />,
      link: '/admin/user-management'
    },
    {
      title: 'System Settings',
      description: 'Configure system-wide settings and preferences',
      icon: <Gear size={24} />,
      link: '/admin/settings'
    },
    {
      title: 'Reports & Analytics',
      description: 'View attendance reports and analytics',
      icon: <ChartBar size={24} />,
      link: '/admin/reports'
    }
  ];

  return (
    <AdminHomeContainer>
      {adminFeatures.map((feature, index) => (
        <AdminCard key={index} to={feature.link}>
          <CardIcon>
            <Icon>{feature.icon}</Icon>
          </CardIcon>
          <CardTitle>{feature.title}</CardTitle>
          <CardDescription>{feature.description}</CardDescription>
        </AdminCard>
      ))}
    </AdminHomeContainer>
  );
}

export default AdminHome;
