import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import ScheduleChangeRequestsView from '../../components/dashboard/ScheduleChangeRequestsView';

const PageContainer = styled.div`
  padding: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

/**
 * Schedule Change Requests page component
 * Displays and manages schedule change requests
 * Only accessible to admins and super admins with appropriate permissions
 */
function ScheduleChangeRequests() {
  const context = useOutletContext();
  const userData = context?.userData || null;
  
  // Check if user has permission to access this page
  const canAccess = userData?.role === 'super_admin' || 
    (userData?.role === 'admin' && userData?.privileges?.canManageSchedules !== false);

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
      <PageTitle>Schedule Change Requests</PageTitle>
      <ScheduleChangeRequestsView />
    </PageContainer>
  );
}

export default ScheduleChangeRequests;
