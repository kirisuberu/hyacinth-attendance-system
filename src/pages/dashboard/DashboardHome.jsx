import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import DashboardHomeComponent from '../../components/dashboard/DashboardHome';

const PageContainer = styled.div`
  padding: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

/**
 * Dashboard Home page component
 * Displays the main dashboard view with attendance status and summary
 */
function DashboardHome() {
  const { attendanceStatus, lastRecord } = useOutletContext();

  return (
    <PageContainer>
      <PageTitle>Dashboard</PageTitle>
      <DashboardHomeComponent 
        attendanceStatus={attendanceStatus} 
        lastRecord={lastRecord} 
      />
    </PageContainer>
  );
}

export default DashboardHome;
