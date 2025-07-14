import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import AdminPrivilegesView from '../../components/dashboard/AdminPrivilegesView';

const PageContainer = styled.div`
  padding: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

/**
 * Admin Privileges page component
 * Manages admin user privileges
 * Only accessible to super admins
 */
function AdminPrivileges() {
  const { userData } = useOutletContext();
  
  // Check if user has permission to access this page
  const isSuperAdmin = userData?.role === 'super_admin';

  if (!isSuperAdmin) {
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
      <PageTitle>Admin Privileges</PageTitle>
      <AdminPrivilegesView />
    </PageContainer>
  );
}

export default AdminPrivileges;
