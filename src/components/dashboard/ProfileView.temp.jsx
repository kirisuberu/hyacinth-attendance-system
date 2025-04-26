import React from 'react';
import { Card, CardTitle, CardContent } from './DashboardComponents';
import styled from 'styled-components';
import { 
  Envelope, 
  IdentificationCard, 
  User, 
  Buildings, 
  UserCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Heart, 
  Briefcase, 
  IdentificationBadge, 
  Status 
} from 'phosphor-react';

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
  // Format timestamp helper function
  const formatTimestamp = (timestamp) => {
    try {
      if (timestamp?.seconds) {
        return new Date(timestamp.seconds * 1000).toLocaleString();
      } else if (timestamp?.toDate) {
        return timestamp.toDate().toLocaleString();
      } else if (timestamp instanceof Date) {
        return timestamp.toLocaleString();
      } else if (typeof timestamp === 'string') {
        return new Date(timestamp).toLocaleString();
      }
      return 'Not specified';
    } catch (error) {
      console.error('Error formatting timestamp:', error);
      return 'Not specified';
    }
  };

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
                  <IdentificationBadge size={18} />
                  User ID:
                </FieldLabel>
                <FieldValue>{userData?.userId || user?.uid}</FieldValue>
              </ProfileField>
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
                <FieldValue>{userData?.name || user?.displayName}</FieldValue>
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
              <ProfileField>
                <FieldLabel>
                  <Status size={18} />
                  Status:
                </FieldLabel>
                <FieldValue>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    backgroundColor: userData?.status === 'active' ? '#e6f7ed' : '#ffebee',
                    color: userData?.status === 'active' ? '#4caf50' : '#f44336'
                  }}>
                    {userData?.status || 'active'}
                  </span>
                </FieldValue>
              </ProfileField>
              <ProfileField>
                <FieldLabel>
                  <Briefcase size={18} />
                  Employee Status:
                </FieldLabel>
                <FieldValue>{userData?.employeeStatus || 'Not specified'}</FieldValue>
              </ProfileField>
            </ProfileSection>

            <ProfileSection>
              <SectionTitle>
                <MapPin size={20} weight="bold" />
                Contact Information
              </SectionTitle>
              <ProfileField>
                <FieldLabel>
                  <MapPin size={18} />
                  Address:
                </FieldLabel>
                <FieldValue>{userData?.address || 'Not specified'}</FieldValue>
              </ProfileField>
              <ProfileField>
                <FieldLabel>
                  <Phone size={18} />
                  Phone Number:
                </FieldLabel>
                <FieldValue>{userData?.phoneNumber || userData?.contactNumber || 'Not specified'}</FieldValue>
              </ProfileField>
              <ProfileField>
                <FieldLabel>
                  <Calendar size={18} />
                  Date of Birth:
                </FieldLabel>
                <FieldValue>{userData?.dateOfBirth || 'Not specified'}</FieldValue>
              </ProfileField>
            </ProfileSection>

            <ProfileSection>
              <SectionTitle>
                <Heart size={20} weight="bold" />
                Emergency Contact
              </SectionTitle>
              <ProfileField>
                <FieldLabel>
                  <User size={18} />
                  Name:
                </FieldLabel>
                <FieldValue>{userData?.emergencyContactName || 'Not specified'}</FieldValue>
              </ProfileField>
              <ProfileField>
                <FieldLabel>
                  <Phone size={18} />
                  Phone:
                </FieldLabel>
                <FieldValue>{userData?.emergencyContactPhone || 'Not specified'}</FieldValue>
              </ProfileField>
              <ProfileField>
                <FieldLabel>
                  <Heart size={18} />
                  Relationship:
                </FieldLabel>
                <FieldValue>{userData?.emergencyContactRelationship || 'Not specified'}</FieldValue>
              </ProfileField>
            </ProfileSection>
            
            <ProfileSection>
              <SectionTitle>
                <Clock size={20} weight="bold" />
                Account Information
              </SectionTitle>
              <ProfileField>
                <FieldLabel>
                  <Calendar size={18} />
                  Created At:
                </FieldLabel>
                <FieldValue>{userData?.createdAt ? formatTimestamp(userData.createdAt) : 'Not specified'}</FieldValue>
              </ProfileField>
              {userData?.timeRegion && (
                <ProfileField>
                  <FieldLabel>
                    <Clock size={18} />
                    Time Region:
                  </FieldLabel>
                  <FieldValue>{userData.timeRegion.replace('_', ' ')}</FieldValue>
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
