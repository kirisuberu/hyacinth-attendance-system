import React, { useState } from 'react';
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
  CheckCircle,
  Info,
  Copy,
  CheckSquare
} from 'phosphor-react';

const ProfileSection = styled.div`
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ProfileField = styled.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  border-bottom: 1px solid #f0f0f0;
  
  &:hover {
    background-color: #f9f9f9;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const FieldLabel = styled.strong`
  min-width: 200px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #444;
  font-weight: 500;
  margin-right: 15px;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #800000;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
`;

const FieldValue = styled.span`
  color: #333;
  word-break: break-word;
  font-weight: 400;
  flex: 1;
`;

const ProfileView = ({ user, userData, loadingUserData }) => {
  const [copied, setCopied] = useState(false);
  
  // Helper function to format timestamps in a more readable format (e.g., "May 8, 2000")
  const formatTimestamp = (timestamp) => {
    try {
      let date;
      
      // Check for different timestamp formats
      if (timestamp?.seconds) {
        // Firebase Timestamp object
        date = new Date(timestamp.seconds * 1000);
      } else if (timestamp?.toDate) {
        // Firebase Timestamp with toDate method
        date = timestamp.toDate();
      } else if (timestamp instanceof Date) {
        // JavaScript Date object
        date = timestamp;
      } else if (typeof timestamp === 'string') {
        // ISO string or other string format
        date = new Date(timestamp);
      } else {
        return 'Not specified';
      }
      
      // Format date as "Month Day, Year"
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting timestamp:', error);
      return 'Not specified';
    }
  };
  
  // Function to copy user ID to clipboard
  const copyUserId = () => {
    const userId = userData?.userId || user?.uid;
    if (userId) {
      navigator.clipboard.writeText(userId)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }
  };

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FullWidthSection = styled(ProfileSection)`
  grid-column: 1 / -1;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
  position: relative;
`;

const ProfileAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #800000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  margin-right: 1.5rem;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h2`
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.5rem;
`;

const ProfileRole = styled.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background-color: #800000;
  color: white;
  margin-right: 0.5rem;
`;

  return (
    <Card>
      <CardTitle>
        <UserCircle size={24} weight="bold" style={{ marginRight: '8px' }} />
        User Profile
      </CardTitle>
      <CardContent>
        {loadingUserData ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
            <p>Loading user profile data...</p>
          </div>
        ) : (
          <>
            <FullWidthSection>
              <ProfileHeader>
                <ProfileAvatar>
                  {userData?.name ? userData.name.charAt(0).toUpperCase() : user?.email ? user.email.charAt(0).toUpperCase() : 'U'}
                </ProfileAvatar>
                <ProfileInfo>
                  <ProfileName>{userData?.name || user?.displayName || 'User'}</ProfileName>
                  <div>
                    <ProfileRole>{userData?.role || 'member'}</ProfileRole>
                    <span style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      backgroundColor: userData?.status === 'active' ? '#e6f7ed' : '#ffebee',
                      color: userData?.status === 'active' ? '#4caf50' : '#f44336'
                    }}>
                      {userData?.status || 'active'}
                    </span>
                  </div>
                </ProfileInfo>
                <button 
                  onClick={copyUserId}
                  style={{
                    background: copied ? '#e6f7ed' : '#f0f0f0',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '6px 12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    marginLeft: 'auto',
                    fontSize: '0.85rem'
                  }}
                >
                  {copied ? (
                    <>
                      <CheckSquare size={16} weight="bold" color="#4caf50" />
                      <span style={{ color: '#4caf50', fontWeight: 500 }}>Copied!</span>
                    </>
                  ) : (
                    <>
                      <IdentificationBadge size={16} />
                      <span>Copy ID</span>
                    </>
                  )}
                </button>
              </ProfileHeader>
              <ProfileField>
                <FieldLabel>
                  <Envelope size={18} weight="bold" />
                  Email:
                </FieldLabel>
                <FieldValue>{user?.email}</FieldValue>
              </ProfileField>
              <ProfileField>
                <FieldLabel>
                  <Calendar size={18} weight="bold" />
                  Date Hired:
                </FieldLabel>
                <FieldValue>
                  {userData?.dateHired ? formatTimestamp(userData.dateHired) : 'Not specified'}
                </FieldValue>
              </ProfileField>
            </FullWidthSection>
            
            <ProfileContainer>
              <ProfileSection>
                <SectionTitle>
                  <UserCircle size={20} weight="bold" />
                  Basic Information
                </SectionTitle>
                <ProfileField>
                  <FieldLabel>
                    <Buildings size={18} />
                    Employment Status:
                  </FieldLabel>
                  <FieldValue>
                    {userData?.employmentStatus 
                      ? userData.employmentStatus.charAt(0).toUpperCase() + userData.employmentStatus.slice(1) 
                      : userData?.position 
                        ? userData.position.charAt(0).toUpperCase() + userData.position.slice(1)
                        : 'Not specified'}
                  </FieldValue>
                </ProfileField>
                <ProfileField>
                  <FieldLabel>
                    <Briefcase size={18} />
                    Position:
                  </FieldLabel>
                  <FieldValue>{userData?.position || 'Not specified'}</FieldValue>
                </ProfileField>
                <ProfileField>
                  <FieldLabel>
                    <Calendar size={18} />
                    Date of Birth:
                  </FieldLabel>
                  <FieldValue>
                    {userData?.dateOfBirth ? formatTimestamp(userData.dateOfBirth) : 'Not specified'}
                  </FieldValue>
                </ProfileField>
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
            </ProfileContainer>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileView;
