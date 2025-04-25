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

const AdditionalInfoContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

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
                Basic Information
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
            </ProfileSection>
            
            <AdditionalInfoContainer>
              <SectionTitle>
                <Clock size={20} weight="bold" />
                Additional Information
              </SectionTitle>
              {userData ? (
                Object.entries(userData)
                  .filter(([key]) => !['position', 'role', 'uid', 'userId', 'id'].includes(key))
                  .map(([key, value]) => {
                    // Format timestamp fields (createdAt, updatedAt, etc.)
                    let displayValue = value;
                    let icon = null;
                    
                    // Determine icon based on field name
                    if (key.toLowerCase().includes('time') || key.toLowerCase().includes('date') || key.toLowerCase().includes('created') || key.toLowerCase().includes('updated')) {
                      icon = <Calendar size={18} />;
                    } else if (key.toLowerCase().includes('email')) {
                      icon = <Envelope size={18} />;
                    } else if (key.toLowerCase().includes('name')) {
                      icon = <User size={18} />;
                    } else {
                      icon = <IdentificationCard size={18} />;
                    }
                    
                    // Check if it's a Firebase timestamp
                    if (value && typeof value === 'object' && value.seconds !== undefined && value.nanoseconds !== undefined) {
                      try {
                        const date = new Date(value.seconds * 1000);
                        displayValue = date.toLocaleString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                          second: '2-digit',
                          hour12: true
                        });
                        icon = <Calendar size={18} />;
                      } catch (error) {
                        console.error('Error formatting timestamp:', error);
                        displayValue = 'Invalid date';
                      }
                    } else if (typeof value === 'object') {
                      try {
                        displayValue = JSON.stringify(value, null, 2);
                      } catch (error) {
                        console.error('Error stringifying object:', error);
                        displayValue = 'Complex object';
                      }
                    }
                    
                    // Format field name
                    const formattedKey = key.replace(/([A-Z])/g, ' $1')
                      .replace(/^./, str => str.toUpperCase())
                      .replace(/([a-z])([A-Z])/g, '$1 $2');
                    
                    return (
                      <ProfileField key={key}>
                        <FieldLabel>
                          {icon}
                          {formattedKey}:
                        </FieldLabel>
                        <FieldValue>{displayValue}</FieldValue>
                      </ProfileField>
                    );
                  })
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
