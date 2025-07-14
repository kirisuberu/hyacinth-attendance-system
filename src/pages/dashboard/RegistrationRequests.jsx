import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import RegistrationRequestsView from '../../components/dashboard/RegistrationRequestsView';

const PageContainer = styled.div`
  padding: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

/**
 * Registration Requests page component
 * Displays and manages pending registration requests
 * Only accessible to admins and super admins with appropriate permissions
 */
function RegistrationRequests() {
  const context = useOutletContext();
  const userData = context?.userData || null;
  
  // Check if user has permission to access this page
  const canAccess = userData?.role === 'super_admin' || 
    (userData?.role === 'admin' && userData?.privileges?.canManageRegistrations !== false);

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
      <PageTitle>Registration Requests</PageTitle>
      <RegistrationRequestsView />
    </PageContainer>
  );
}

export default RegistrationRequests;
