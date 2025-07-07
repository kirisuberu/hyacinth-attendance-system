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
  CheckSquare,
  PencilSimple,
  X,
  Lock,
  Key
} from 'phosphor-react';
import { doc, updateDoc } from 'firebase/firestore';
import { updateEmail, EmailAuthProvider, reauthenticateWithCredential, verifyBeforeUpdateEmail } from 'firebase/auth';
import { db, auth } from '../../firebase';
import { toast } from 'react-toastify';

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

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #800000;
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(128, 0, 0, 0.1);
  }
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
  position: relative;
  
  ${EditButton} {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const FieldValue = styled.span`
  color: #333;
  word-break: break-word;
  font-weight: 400;
  flex: 1;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const ModalTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  
  &:hover {
    color: #333;
  }
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FormLabel = styled.label`
  font-weight: 600;
  font-size: 0.9rem;
  color: #555;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f0f0f0;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e0e0e0;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #800000;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #600000;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ProfileView = ({ user, userData, loadingUserData }) => {
  const [copied, setCopied] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showEmergencyContactModal, setShowEmergencyContactModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [editData, setEditData] = useState({
    address: '',
    phoneNumber: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
    newEmail: '',
    currentPassword: ''
  });
  const [processing, setProcessing] = useState(false);
  const [emailUpdateError, setEmailUpdateError] = useState('');
  
  // Initialize edit data when opening modals
  const handleOpenContactModal = () => {
    setEditData(prev => ({
      ...prev,
      address: userData?.address || '',
      phoneNumber: userData?.phoneNumber || userData?.contactNumber || ''
    }));
    setShowContactModal(true);
  };
  
  const handleOpenEmergencyContactModal = () => {
    setEditData(prev => ({
      ...prev,
      emergencyContactName: userData?.emergencyContactName || '',
      emergencyContactPhone: userData?.emergencyContactPhone || '',
      emergencyContactRelationship: userData?.emergencyContactRelationship || ''
    }));
    setShowEmergencyContactModal(true);
  };
  
  const handleOpenEmailModal = () => {
    setEditData(prev => ({
      ...prev,
      newEmail: user?.email || '',
      currentPassword: ''
    }));
    setEmailUpdateError('');
    setShowEmailModal(true);
  };
  
  const handleCloseContactModal = () => {
    setShowContactModal(false);
  };
  
  const handleCloseEmergencyContactModal = () => {
    setShowEmergencyContactModal(false);
  };
  
  const handleCloseEmailModal = () => {
    setShowEmailModal(false);
    setEmailUpdateError('');
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleUpdateContactInfo = async (e) => {
    e.preventDefault();
    
    try {
      setProcessing(true);
      
      // Get the user document ID
      const userId = userData?.userId || user?.uid;
      if (!userId) {
        toast.error('User ID not found');
        return;
      }
      
      // Update the user document in Firestore
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        address: editData.address.trim(),
        phoneNumber: editData.phoneNumber.trim()
      });
      
      toast.success('Contact information updated successfully');
      handleCloseContactModal();
    } catch (error) {
      console.error('Error updating contact information:', error);
      toast.error(`Failed to update contact information: ${error.message}`);
    } finally {
      setProcessing(false);
    }
  };
  
  const handleUpdateEmergencyContact = async (e) => {
    e.preventDefault();
    
    try {
      setProcessing(true);
      
      // Get the user document ID
      const userId = userData?.userId || user?.uid;
      if (!userId) {
        toast.error('User ID not found');
        return;
      }
      
      // Update the user document in Firestore
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        emergencyContactName: editData.emergencyContactName.trim(),
        emergencyContactPhone: editData.emergencyContactPhone.trim(),
        emergencyContactRelationship: editData.emergencyContactRelationship.trim()
      });
      
      toast.success('Emergency contact information updated successfully');
      handleCloseEmergencyContactModal();
    } catch (error) {
      console.error('Error updating emergency contact information:', error);
      toast.error(`Failed to update emergency contact information: ${error.message}`);
    } finally {
      setProcessing(false);
    }
  };
  
  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    setEmailUpdateError('');
    
    try {
      setProcessing(true);
      
      // Validate inputs
      const newEmail = editData.newEmail.trim();
      const currentPassword = editData.currentPassword;
      
      if (!newEmail) {
        setEmailUpdateError('Email cannot be empty');
        return;
      }
      
      if (!currentPassword) {
        setEmailUpdateError('Current password is required to update email');
        return;
      }
      
      // Get the current user
      const currentUser = auth.currentUser;
      if (!currentUser) {
        toast.error('You must be logged in to update your email');
        return;
      }
      
      // If the email hasn't changed, no need to update
      if (newEmail === currentUser.email) {
        toast.info('New email is the same as current email');
        handleCloseEmailModal();
        return;
      }
      
      // Re-authenticate the user before updating email
      const credential = EmailAuthProvider.credential(
        currentUser.email,
        currentPassword
      );
      
      await reauthenticateWithCredential(currentUser, credential);
      
      // Use verifyBeforeUpdateEmail instead of updateEmail
      // This will send a verification email to the new address
      await verifyBeforeUpdateEmail(currentUser, newEmail);
      
      // Update email in Firestore only after verification
      // This will be handled when the user verifies their email and logs in with the new email
      // For now, we'll just show a success message about verification
      
      toast.success(
        'Verification email sent to ' + newEmail + '. ' +
        'Please check your inbox and follow the verification link to complete the email change.'
      );
      handleCloseEmailModal();
    } catch (error) {
      console.error('Error updating email:', error);
      
      // Handle specific Firebase Auth errors
      if (error.code === 'auth/requires-recent-login') {
        setEmailUpdateError('For security reasons, please log out and log back in before changing your email.');
      } else if (error.code === 'auth/email-already-in-use') {
        setEmailUpdateError('This email is already in use by another account.');
      } else if (error.code === 'auth/invalid-email') {
        setEmailUpdateError('The email address is not valid.');
      } else if (error.code === 'auth/wrong-password') {
        setEmailUpdateError('Incorrect password. Please try again.');
      } else if (error.code === 'auth/operation-not-allowed') {
        setEmailUpdateError('Email update operation is not allowed. Please contact your administrator.');
      } else {
        setEmailUpdateError(`Failed to update email: ${error.message}`);
      }
    } finally {
      setProcessing(false);
    }
  };
  
  // Helper function to format timestamps in a more readable format (e.g., "May 8, 2000")
  const formatTimestamp = (timestamp) => {
    try {
      // If timestamp is missing or invalid, return 'Not specified'
      if (!timestamp) return 'Not specified';
      
      let seconds;
      
      // Extract the timestamp seconds based on the format
      if (timestamp?.seconds) {
        // Firebase Timestamp object
        seconds = timestamp.seconds;
      } else if (timestamp?.toDate) {
        // Firebase Timestamp with toDate method
        seconds = Math.floor(timestamp.toDate().getTime() / 1000);
      } else if (timestamp instanceof Date) {
        // JavaScript Date object
        seconds = Math.floor(timestamp.getTime() / 1000);
      } else if (typeof timestamp === 'string') {
        // ISO string or other string format
        seconds = Math.floor(new Date(timestamp).getTime() / 1000);
      } else {
        return 'Not specified';
      }
      
      // Create a UTC date from the seconds timestamp
      // This ensures we're working with the exact date stored in Firestore
      const utcDate = new Date(0); // 0 = Unix epoch (1970-01-01T00:00:00Z)
      utcDate.setUTCSeconds(seconds);
      
      // Extract date components in UTC to avoid any timezone shifts
      const year = utcDate.getUTCFullYear();
      const month = utcDate.getUTCMonth(); // 0-indexed month
      const day = utcDate.getUTCDate();
      
      // Create a formatter with explicit options to ensure consistent display
      const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC' // Force UTC to avoid any timezone adjustments
      });
      
      // Format the date using the formatter
      return formatter.format(utcDate);
    } catch (error) {
      console.error('Error formatting timestamp:', error, timestamp);
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
                <EditButton onClick={handleOpenEmailModal} title="Update Email Address">
                  <PencilSimple size={16} weight="bold" />
                  <span style={{ marginLeft: '4px' }}>Edit</span>
                </EditButton>
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
                  <EditButton onClick={handleOpenContactModal} title="Edit Contact Information">
                    <PencilSimple size={16} weight="bold" />
                    <span style={{ marginLeft: '4px' }}>Edit</span>
                  </EditButton>
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
                  <EditButton onClick={handleOpenEmergencyContactModal} title="Edit Emergency Contact">
                    <PencilSimple size={16} weight="bold" />
                    <span style={{ marginLeft: '4px' }}>Edit</span>
                  </EditButton>
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
      
      {/* Contact Information Edit Modal */}
      {showContactModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Contact Information</ModalTitle>
              <ModalCloseButton onClick={handleCloseContactModal}>&times;</ModalCloseButton>
            </ModalHeader>
            
            <ModalForm onSubmit={handleUpdateContactInfo}>
              <FormGroup>
                <FormLabel>Address</FormLabel>
                <FormInput
                  type="text"
                  name="address"
                  value={editData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Phone Number</FormLabel>
                <FormInput
                  type="text"
                  name="phoneNumber"
                  value={editData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </FormGroup>
              
              <FormActions>
                <CancelButton 
                  type="button" 
                  onClick={handleCloseContactModal}
                  disabled={processing}
                >
                  Cancel
                </CancelButton>
                <SubmitButton 
                  type="submit" 
                  disabled={processing}
                >
                  {processing ? 'Saving...' : 'Save Changes'}
                </SubmitButton>
              </FormActions>
            </ModalForm>
          </ModalContent>
        </Modal>
      )}
      
      {/* Emergency Contact Edit Modal */}
      {showEmergencyContactModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Emergency Contact</ModalTitle>
              <ModalCloseButton onClick={handleCloseEmergencyContactModal}>&times;</ModalCloseButton>
            </ModalHeader>
            
            <ModalForm onSubmit={handleUpdateEmergencyContact}>
              <FormGroup>
                <FormLabel>Contact Name</FormLabel>
                <FormInput
                  type="text"
                  name="emergencyContactName"
                  value={editData.emergencyContactName}
                  onChange={handleInputChange}
                  placeholder="Enter emergency contact name"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Contact Phone</FormLabel>
                <FormInput
                  type="text"
                  name="emergencyContactPhone"
                  value={editData.emergencyContactPhone}
                  onChange={handleInputChange}
                  placeholder="Enter emergency contact phone"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Relationship</FormLabel>
                <FormInput
                  type="text"
                  name="emergencyContactRelationship"
                  value={editData.emergencyContactRelationship}
                  onChange={handleInputChange}
                  placeholder="Enter relationship (e.g., Parent, Spouse)"
                />
              </FormGroup>
              
              <FormActions>
                <CancelButton 
                  type="button" 
                  onClick={handleCloseEmergencyContactModal}
                  disabled={processing}
                >
                  Cancel
                </CancelButton>
                <SubmitButton 
                  type="submit" 
                  disabled={processing}
                >
                  {processing ? 'Saving...' : 'Save Changes'}
                </SubmitButton>
              </FormActions>
            </ModalForm>
          </ModalContent>
        </Modal>
      )}
      
      {/* Email Update Modal */}
      {showEmailModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>
                <Envelope size={20} weight="bold" style={{ marginRight: '8px' }} />
                Update Email Address
              </ModalTitle>
              <ModalCloseButton onClick={handleCloseEmailModal}>&times;</ModalCloseButton>
            </ModalHeader>
            
            <ModalForm onSubmit={handleUpdateEmail}>
              <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px', border: '1px solid #e9ecef' }}>
                <Info size={18} style={{ color: '#0d6efd', marginRight: '8px', verticalAlign: 'middle' }} />
                <span style={{ fontSize: '0.9rem' }}>
                  Updating your email will change both your login credentials and profile information.
                  You will need to use the new email for future logins.
                </span>
              </div>
              
              {emailUpdateError && (
                <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f8d7da', borderRadius: '4px', border: '1px solid #f5c2c7', color: '#842029' }}>
                  <X size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                  <span>{emailUpdateError}</span>
                </div>
              )}
              
              <FormGroup>
                <FormLabel>New Email Address</FormLabel>
                <FormInput
                  type="email"
                  name="newEmail"
                  value={editData.newEmail}
                  onChange={handleInputChange}
                  placeholder="Enter new email address"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>
                  <Lock size={16} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                  Current Password (for verification)
                </FormLabel>
                <FormInput
                  type="password"
                  name="currentPassword"
                  value={editData.currentPassword}
                  onChange={handleInputChange}
                  placeholder="Enter your current password"
                  required
                />
              </FormGroup>
              
              <FormActions>
                <CancelButton 
                  type="button" 
                  onClick={handleCloseEmailModal}
                  disabled={processing}
                >
                  Cancel
                </CancelButton>
                <SubmitButton 
                  type="submit" 
                  disabled={processing}
                >
                  {processing ? 'Updating...' : 'Update Email'}
                </SubmitButton>
              </FormActions>
            </ModalForm>
          </ModalContent>
        </Modal>
      )}
    </Card>
  );
};

export default ProfileView;
