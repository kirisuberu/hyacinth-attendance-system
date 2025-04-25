import React from 'react';
import { Card, CardTitle, CardContent } from './DashboardComponents';
import styled from 'styled-components';
import { Envelope, IdentificationCard, User, Buildings, UserCircle, Calendar, Clock } from 'phosphor-react';

const ProfileSection = styled.div`
  margin-bottom: 1.5rem;
`;

const ProfileField = styled.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const FieldLabel = styled.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`;

// Removed AdditionalInfoContainer

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FieldValue = styled.span`
  color: #333;
  word-break: break-word;
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
              <SectionTitle>
                <UserCircle size={20} weight="bold" />
                User Information
              </SectionTitle>
              <ProfileField>
                <FieldLabel>
                  <Envelope size={18} />
                  Email:
                </FieldLabel>
                <FieldValue>{user?.email}</FieldValue>
              </ProfileField>
              <ProfileField>
                <FieldLabel>
                  <User size={18} />
                  Name:
                </FieldLabel>
                <FieldValue>{user?.displayName}</FieldValue>
              </ProfileField>
              <ProfileField>
                <FieldLabel>
                  <IdentificationCard size={18} />
                  User ID:
                </FieldLabel>
                <FieldValue>{user?.uid}</FieldValue>
              </ProfileField>
              <ProfileField>
                <FieldLabel>
                  <Buildings size={18} />
                  Position:
                </FieldLabel>
                <FieldValue>{userData?.position || 'Not specified'}</FieldValue>
              </ProfileField>
              <ProfileField>
                <FieldLabel>
                  <UserCircle size={18} />
                  Role:
                </FieldLabel>
                <FieldValue>{userData?.role || 'Not specified'}</FieldValue>
              </ProfileField>
              
              {userData?.createdAt && (
                <ProfileField>
                  <FieldLabel>
                    <Calendar size={18} />
                    Created At:
                  </FieldLabel>
                  <FieldValue>
                    {(() => {
                      try {
                        const date = new Date(userData.createdAt.seconds * 1000);
                        return date.toLocaleString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true
                        });
                      } catch (error) {
                        console.error('Error formatting timestamp:', error);
                        return 'Invalid date';
                      }
                    })()
                  }</FieldValue>
                </ProfileField>
              )}
            </ProfileSection>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileView;
