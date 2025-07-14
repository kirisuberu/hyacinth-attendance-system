import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import ScheduleView from '../../components/dashboard/ScheduleView';

const PageContainer = styled.div`
  padding: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

/**
 * Schedule page component
 * Displays the user's schedule and allows schedule management
 */
function Schedule() {
  const context = useOutletContext();
  const user = context?.user || null;
  const userData = context?.userData || null;

  return (
    <PageContainer>
      <PageTitle>Schedule</PageTitle>
      <ScheduleView user={user} userData={userData} />
    </PageContainer>
  );
}

export default Schedule;
