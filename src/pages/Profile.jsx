import React, { useState } from 'react';
import styled from 'styled-components';
import { User } from 'phosphor-react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { toast } from 'react-toastify';

const Container = styled.div`
  padding: 1rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #800000;
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: none;
  background-color: #800000;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #600000;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ReadOnlyField = styled.div`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
  font-size: 1rem;
  color: #666;
`;

const ProfilePage = ({ user, userData, setUserData }) => {
  const [profileData, setProfileData] = useState({
    firstName: userData?.firstName || '',
    lastName: userData?.lastName || '',
    middleInitial: userData?.middleInitial || '',
    phoneNumber: userData?.phoneNumber || '',
    address: userData?.address || '',
    dateOfBirth: userData?.dateOfBirth || '',
    emergencyContactName: userData?.emergencyContactName || '',
    emergencyContactPhone: userData?.emergencyContactPhone || '',
    emergencyContactRelationship: userData?.emergencyContactRelationship || ''
  });
  
  const [isUpdating, setIsUpdating] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user?.uid || isUpdating) return;
    
    try {
      setIsUpdating(true);
      
      // Update the user document in Firestore
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, {
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        middleInitial: profileData.middleInitial,
        phoneNumber: profileData.phoneNumber,
        address: profileData.address,
        dateOfBirth: profileData.dateOfBirth,
        emergencyContactName: profileData.emergencyContactName,
        emergencyContactPhone: profileData.emergencyContactPhone,
        emergencyContactRelationship: profileData.emergencyContactRelationship
      });
      
      // Update local state
      setUserData(prev => ({
        ...prev,
        ...profileData
      }));
      
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    } finally {
      setIsUpdating(false);
    }
  };
  
  return (
    <Container>
      <Card>
        <Title>
          <User size={24} />
          My Profile
        </Title>
        
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Middle Initial</Label>
              <Input
                type="text"
                name="middleInitial"
                value={profileData.middleInitial}
                onChange={handleChange}
                maxLength={1}
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Email</Label>
              <ReadOnlyField>{user?.email || 'No email provided'}</ReadOnlyField>
            </FormGroup>
            
            <FormGroup>
              <Label>User ID (Non-editable)</Label>
              <ReadOnlyField>{userData?.userId || 'Not available'}</ReadOnlyField>
            </FormGroup>
            
            <FormGroup>
              <Label>Position</Label>
              <ReadOnlyField>{userData?.position || 'Not specified'}</ReadOnlyField>
            </FormGroup>
            
            <FormGroup>
              <Label>Role</Label>
              <ReadOnlyField>{userData?.role || 'member'}</ReadOnlyField>
            </FormGroup>
            
            <FormGroup>
              <Label>Date of Birth</Label>
              <Input
                type="date"
                name="dateOfBirth"
                value={profileData.dateOfBirth}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Phone Number</Label>
              <Input
                type="tel"
                name="phoneNumber"
                value={profileData.phoneNumber}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Address</Label>
              <Input
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleChange}
              />
            </FormGroup>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <h3>Emergency Contact Information</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
              <FormGroup>
                <Label>Emergency Contact Name</Label>
                <Input
                  type="text"
                  name="emergencyContactName"
                  value={profileData.emergencyContactName}
                  onChange={handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Emergency Contact Phone</Label>
                <Input
                  type="tel"
                  name="emergencyContactPhone"
                  value={profileData.emergencyContactPhone}
                  onChange={handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Relationship</Label>
                <Input
                  type="text"
                  name="emergencyContactRelationship"
                  value={profileData.emergencyContactRelationship}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <Button type="submit" disabled={isUpdating}>
              {isUpdating ? 'Updating...' : 'Update Profile'}
            </Button>
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default ProfilePage;
