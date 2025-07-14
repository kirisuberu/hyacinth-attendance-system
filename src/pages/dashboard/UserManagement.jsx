import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import UserManagementView from '../../components/dashboard/UserManagementView';

const PageContainer = styled.div`
  padding: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

/**
 * User Management page component
 * Displays and manages user accounts
 * Only accessible to admins and super admins with appropriate permissions
 */
function UserManagement() {
  const context = useOutletContext();
  const userData = context?.userData || null;
  
  // Check if user has permission to access this page
  const canAccess = userData?.role === 'super_admin' || 
    (userData?.role === 'admin' && userData?.privileges?.canManageUsers !== false);
  
  const isSuperAdmin = userData?.role === 'super_admin';

  if (!canAccess) {
    return (
      <PageContainer>
        <div style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>
          You do not have permission to access this page.
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageTitle>User Management</PageTitle>
      <UserManagementView isSuperAdmin={isSuperAdmin} />
    </PageContainer>
  );
}

export default UserManagement;
