import React from 'react';
import { Navigate, Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../firebase';
import { checkUserAdminStatus } from '../utils/userService';
import { useEffect, useState } from 'react';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #1a1a1a;
  color: white;
  padding: 2rem;
`;

const MainContent = styled.main`
  flex: 1;
  background: #f3f4f6;
  padding: 2rem;
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1rem;
  margin: 0.5rem -1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background: #3b82f6;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  padding: 0 1rem;
`;

function AdminLayout() {
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async (user) => {
      try {
        if (!user) {
          console.log('No user found in checkAdminStatus');
          setIsAdmin(false);
          setLoading(false);
          return;
        }

        console.log('Checking admin status for user:', {
          email: user.email,
          uid: user.uid,
          emailVerified: user.emailVerified
        });

        const isUserAdmin = await checkUserAdminStatus(user);
        console.log('Admin status check result:', isUserAdmin);
        setIsAdmin(isUserAdmin);
      } catch (error) {
        console.error('Error checking admin status:', error);
        console.error('Error details:', {
          code: error.code,
          message: error.message
        });
        setIsAdmin(false);
      }
      setLoading(false);
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('Auth state changed - Current user:', {
          email: user.email,
          uid: user.uid
        });
        checkAdminStatus(user);
      } else {
        console.log('Auth state changed - No user logged in');
        setIsAdmin(false);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem',
        color: '#4B5563'
      }}>
        Loading...
      </div>
    );
  }

  if (!isAdmin) {
    console.log('User is not admin, redirecting to home');
    return <Navigate to="/" replace />;
  }

  return (
    <LayoutContainer>
      <Sidebar>
        <Logo>Hyacinth Admin</Logo>
        <nav>
          <NavLink to="/admin/users">User Management</NavLink>
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
          <NavLink to="/admin/reports">Reports</NavLink>
        </nav>
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
}

export default AdminLayout;
