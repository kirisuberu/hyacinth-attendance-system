import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import AbsentServiceView from '../../components/superadmin/AbsentServiceView';

const PageContainer = styled.div`
  padding: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

/**
 * Absent Service page component
 * Manages absent service settings and records
 * Only accessible to super admins
 */
function AbsentService() {
  const context = useOutletContext();
  const userData = context?.userData || null;
  
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
      <PageTitle>Absent Service</PageTitle>
      <AbsentServiceView />
    </PageContainer>
  );
}

export default AbsentService;
