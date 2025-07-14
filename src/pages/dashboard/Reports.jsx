import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import ReportsView from '../../components/dashboard/ReportsView';

const PageContainer = styled.div`
  padding: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

/**
 * Reports page component
 * Displays attendance and other system reports
 * Only accessible to admins and super admins with appropriate permissions
 */
function Reports() {
  const { userData } = useOutletContext();
  
  // Check if user has permission to access this page
  const canAccess = userData?.role === 'super_admin' || 
    (userData?.role === 'admin' && userData?.privileges?.canViewReports !== false);

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
      <PageTitle>Reports</PageTitle>
      <ReportsView />
    </PageContainer>
  );
}

export default Reports;
