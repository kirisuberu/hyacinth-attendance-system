import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import RulesView from '../../components/superadmin/RulesView';

const PageContainer = styled.div`
  padding: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

/**
 * Rules page component
 * Manages system rules and settings
 * Only accessible to super admins
 */
function Rules() {
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
      <PageTitle>Rules</PageTitle>
      <RulesView />
    </PageContainer>
  );
}

export default Rules;
