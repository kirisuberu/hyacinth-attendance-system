import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import AttendanceLogsView from '../../components/dashboard/AttendanceLogsView';

const PageContainer = styled.div`
  padding: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

/**
 * Attendance Logs page component
 * Displays the user's attendance history and logs
 */
function AttendanceLogs() {
  const context = useOutletContext();
  const user = context?.user || null;

  return (
    <PageContainer>
      <PageTitle>Attendance Logs</PageTitle>
      <AttendanceLogsView user={user} />
    </PageContainer>
  );
}

export default AttendanceLogs;
