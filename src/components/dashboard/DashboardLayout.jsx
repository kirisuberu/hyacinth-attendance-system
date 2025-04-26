import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import styled from 'styled-components';
import { House, SignOut, Calendar, Clock, User, SignIn, SignOut as SignOutIcon, UserPlus } from 'phosphor-react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import theme from '../../theme';

// Styled components for layout
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background: linear-gradient(180deg, ${theme.colors.primary.main} 0%, ${theme.colors.primary.dark} 100%);
  color: ${theme.colors.primary.contrastText};
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  color: ${theme.colors.accent.main};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: bold;
  }
`;

const SidebarTimeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: auto;
  padding: 0.75rem;
  background-color: ${theme.colors.accent.main};
  color: ${theme.colors.accent.contrastText};
  border: none;
  border-radius: ${theme.borders.radius};
  cursor: pointer;
  font-weight: 500;
  transition: all ${theme.transitions.default};
  
  &:hover {
    background-color: ${theme.colors.accent.dark};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
`;

const TimeInSidebarButton = styled(SidebarTimeButton)`
  background-color: #4caf50;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: #43a047;
  }
`;

const TimeOutSidebarButton = styled(SidebarTimeButton)`
  background-color: #f44336;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: #e53935;
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: ${theme.colors.background.default};
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${theme.colors.divider};
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const UserName = styled.span`
  margin-right: 1rem;
  font-weight: 500;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  color: ${theme.colors.text.secondary};
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;
  border-radius: ${theme.borders.radius};
  transition: all ${theme.transitions.default};
  
  &:hover {
    background-color: ${theme.colors.primary.main}15;
    color: ${theme.colors.primary.main};
  }
`;

// Main layout component
const DashboardLayout = ({ 
  user, 
  activeTab, 
  setActiveTab, 
  attendanceStatus, 
  loading, 
  handleTimeInOut, 
  lastRecord,
  isSuperAdmin,
  children 
}) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Failed to sign out');
    }
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <Logo>Hyacinth</Logo>
        
        <NavItem 
          className={activeTab === 'dashboard' ? 'active' : ''} 
          onClick={() => setActiveTab('dashboard')}
        >
          <Icon><House size={16} /></Icon>
          Dashboard
        </NavItem>
        
        <NavItem 
          className={activeTab === 'attendance' ? 'active' : ''} 
          onClick={() => setActiveTab('attendance')}
        >
          <Icon><Clock size={16} /></Icon>
          Attendance
        </NavItem>
        
        <NavItem 
          className={activeTab === 'schedule' ? 'active' : ''} 
          onClick={() => setActiveTab('schedule')}
        >
          <Icon><Calendar size={16} /></Icon>
          Schedule
        </NavItem>
        
        <NavItem 
          className={activeTab === 'profile' ? 'active' : ''} 
          onClick={() => setActiveTab('profile')}
        >
          <Icon><User size={16} /></Icon>
          Profile
        </NavItem>
        
        {isSuperAdmin && (
          <NavItem 
            className={activeTab === 'registration_requests' ? 'active' : ''} 
            onClick={() => setActiveTab('registration_requests')}
          >
            <Icon><UserPlus size={16} /></Icon>
            Registration Requests
          </NavItem>
        )}
        
        <div style={{ marginTop: 'auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem', opacity: '0.8' }}>Attendance Actions</p>
            
            <TimeInSidebarButton 
              onClick={() => handleTimeInOut('In')} 
              disabled={loading || attendanceStatus === 'In'}
            >
              <Icon><SignIn size={16} /></Icon>
              Time In
            </TimeInSidebarButton>
            
            <TimeOutSidebarButton 
              onClick={() => handleTimeInOut('Out')} 
              disabled={loading || attendanceStatus === 'Out' || !attendanceStatus}
            >
              <Icon><SignOutIcon size={16} /></Icon>
              Time Out
            </TimeOutSidebarButton>
            
            {attendanceStatus && (
              <div style={{ padding: '0.5rem 0', textAlign: 'center', fontSize: '0.85rem' }}>
                Status: <strong>{attendanceStatus === 'In' ? 'Clocked In' : 'Clocked Out'}</strong>
              </div>
            )}
          </div>
          
          <NavItem onClick={handleLogout}>
            <Icon><SignOut size={16} /></Icon>
            Logout
          </NavItem>
        </div>
      </Sidebar>
      
      <Content>
        <Header>
          <Title>
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'attendance' && 'Attendance'}
            {activeTab === 'schedule' && 'Schedule'}
            {activeTab === 'profile' && 'Profile'}
            {activeTab === 'registration_requests' && 'Registration Requests'}
          </Title>
          
          <UserInfo>
            <UserName>{user?.displayName}</UserName>
            <LogoutButton onClick={handleLogout}>
              <SignOut size={16} />
              Logout
            </LogoutButton>
          </UserInfo>
        </Header>
        
        {children}
      </Content>
    </DashboardContainer>
  );
};

export default DashboardLayout;
