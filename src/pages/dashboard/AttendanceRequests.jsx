import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import AttendanceRequestsView from '../../components/dashboard/AttendanceRequestsView';

const PageContainer = styled.div`
  padding: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

/**
 * Attendance Requests page component
 * Displays and manages attendance adjustment requests
 * Only accessible to admins and super admins with appropriate permissions
 */
function AttendanceRequests() {
  const { userData } = useOutletContext();
  
  // Check if user has permission to access this page
  const canAccess = userData?.role === 'super_admin' || 
    (userData?.role === 'admin' && userData?.privileges?.canManageAttendanceRequests !== false);

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
      <PageTitle>Attendance Requests</PageTitle>
      <AttendanceRequestsView />
    </PageContainer>
  );
}

export default AttendanceRequests;
