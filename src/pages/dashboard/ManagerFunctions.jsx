import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import ManagerFunctionsView from '../../components/dashboard/ManagerFunctionsView';

/**
 * Manager Functions page component
 * Accessible to admins and super admins
 */
function ManagerFunctions() {
  const context = useOutletContext();
  const userData = context?.userData || null;

  const isSuperAdmin = userData?.role === 'super_admin' || userData?.role === 'superadmin' || userData?.role === 'super-admin';
  const isAdmin = userData?.role === 'admin';
  const canUseManagerFunctions = userData?.privileges?.canUseManagerFunctions === true;

  if (!(isSuperAdmin || (isAdmin && canUseManagerFunctions))) {
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
      <ManagerFunctionsView />
    </PageContainer>
  );
}

export default ManagerFunctions;

// styled-components at the bottom per project preference
const PageContainer = styled.div`
  padding: 1rem;
`;

