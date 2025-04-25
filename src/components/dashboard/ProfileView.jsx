import React from 'react';
import { Card, CardTitle, CardContent } from './DashboardComponents';
import styled from 'styled-components';

const ProfileSection = styled.div`
  margin-bottom: 1.5rem;
`;

const ProfileField = styled.p`
  margin: 0.5rem 0;
  display: flex;
  align-items: baseline;
`;

const FieldLabel = styled.strong`
  min-width: 120px;
  display: inline-block;
`;

const AdditionalInfoContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 4px;
`;

const ProfileView = ({ user, userData, loadingUserData }) => {
  return (
    <Card>
      <CardTitle>User Profile</CardTitle>
      <CardContent>
        {loadingUserData ? (
          <p>Loading user data...</p>
        ) : (
          <>
            <ProfileSection>
              <h3>Basic Information</h3>
              <ProfileField>
                <FieldLabel>Email:</FieldLabel> {user?.email}
              </ProfileField>
              <ProfileField>
                <FieldLabel>Name:</FieldLabel> {user?.displayName}
              </ProfileField>
              <ProfileField>
                <FieldLabel>User ID:</FieldLabel> {user?.uid}
              </ProfileField>
              <ProfileField>
                <FieldLabel>Position:</FieldLabel> {userData?.position || 'Not specified'}
              </ProfileField>
              <ProfileField>
                <FieldLabel>Role:</FieldLabel> {userData?.role || 'Not specified'}
              </ProfileField>
            </ProfileSection>
            
            <AdditionalInfoContainer>
              <h4 style={{ marginTop: 0 }}>Additional Information</h4>
              {userData ? (
                Object.entries(userData)
                  .filter(([key]) => !['position', 'role'].includes(key))
                  .map(([key, value]) => (
                    <ProfileField key={key}>
                      <FieldLabel>{key.charAt(0).toUpperCase() + key.slice(1)}:</FieldLabel> 
                      {typeof value === 'object' ? JSON.stringify(value) : value}
                    </ProfileField>
                  ))
              ) : (
                <p>No additional information available</p>
              )}
            </AdditionalInfoContainer>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileView;
