import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import ProfileView from '../../components/dashboard/ProfileView';

const PageContainer = styled.div`
  padding: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

/**
 * Profile page component
 * Displays and allows editing of the user's profile information
 */
function Profile() {
  const { user, userData, loadingUserData } = useOutletContext();

  return (
    <PageContainer>
      <PageTitle>Profile</PageTitle>
      <ProfileView 
        user={user} 
        userData={userData} 
        loadingUserData={loadingUserData} 
      />
    </PageContainer>
  );
}

export default Profile;
