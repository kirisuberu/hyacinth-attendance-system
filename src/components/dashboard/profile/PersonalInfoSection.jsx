import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { User, Phone, MapPin, EnvelopeSimple, PencilSimple, FloppyDisk, Calendar, UsersThree } from 'phosphor-react';
import { updateDoc, doc, Timestamp } from 'firebase/firestore';
import { db } from '../../../firebase';
import { toast } from 'react-toastify';
import { 
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  CancelButton,
  SubmitButton
} from '../ProfileStyles';

const PersonalInfoSection = ({ userData, userId, formatTimestamp }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Derive input-friendly YYYY-MM-DD value for date of birth
  const initialDob = useMemo(() => {
    const ts = userData?.dateOfBirth;
    if (!ts) return '';
    try {
      let d;
      if (ts?.toDate) d = ts.toDate();
      else if (typeof ts === 'object' && (typeof ts.seconds === 'number' || typeof ts._seconds === 'number')) {
        const secs = typeof ts.seconds === 'number' ? ts.seconds : ts._seconds;
        d = new Date(secs * 1000);
      } else if (typeof ts === 'number') {
        d = new Date(ts > 1e12 ? ts : ts * 1000);
      } else if (typeof ts === 'string') {
        d = new Date(ts);
      } else if (ts instanceof Date) {
        d = ts;
      }
      if (!d || isNaN(d.getTime())) return '';
      // Convert to YYYY-MM-DD in local time
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const dd = String(d.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    } catch {
      return '';
    }
  }, [userData?.dateOfBirth]);

  const [formData, setFormData] = useState({
    preferredName: userData?.preferredName || '',
    email: userData?.email || '',
    phoneNumber: userData?.phoneNumber || '',
    address: userData?.address || '',
    dateOfBirth: initialDob || '',
    emergencyContactName: userData?.emergencyContactName || '',
    emergencyContactRelationship: userData?.emergencyContactRelationship || '',
    emergencyContactPhone: userData?.emergencyContactPhone || ''
  });

  // Helper: Compute a robust full name/display name with fallbacks
  const getFullName = () => {
    const combined = `${userData?.firstName || ''} ${userData?.lastName || ''}`.trim();
    return (
      userData?.name ||
      combined ||
      userData?.displayName ||
      userData?.email ||
      'Not specified'
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOpenModal = () => {
    // Reset form data to current values when opening the modal
    setFormData({
      preferredName: userData?.preferredName || '',
      email: userData?.email || '',
      phoneNumber: userData?.phoneNumber || '',
      address: userData?.address || '',
      dateOfBirth: initialDob || '',
      emergencyContactName: userData?.emergencyContactName || '',
      emergencyContactRelationship: userData?.emergencyContactRelationship || '',
      emergencyContactPhone: userData?.emergencyContactPhone || ''
    });
    setShowEditModal(true);
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
  };

  const updatePersonalInfo = async () => {
    if (!userId) return;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    
    setLoading(true);
    try {
      const userRef = doc(db, 'users', userId);
      
      // Create the update object
      const updateData = { 
        preferredName: formData.preferredName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        emergencyContactName: formData.emergencyContactName,
        emergencyContactRelationship: formData.emergencyContactRelationship,
        emergencyContactPhone: formData.emergencyContactPhone
      };
      
      // Handle date of birth conversion to Timestamp if provided
      if (formData.dateOfBirth) {
        const d = new Date(formData.dateOfBirth);
        if (!isNaN(d.getTime())) {
          updateData.dateOfBirth = Timestamp.fromDate(d);
        }
      }
      
      await updateDoc(userRef, updateData);
      toast.success('Personal information updated successfully!');
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating personal information:', error);
      toast.error('Failed to update personal information.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hidden button that can be triggered from parent component */}
      <HiddenTriggerButton 
        data-edit-profile 
        onClick={handleOpenModal} 
        aria-hidden="true"
      />
      <PersonalSectionWrapper>
        
        <InfoHeader>
          <div>
            <SectionKicker>Basics</SectionKicker>
            <SectionLead>Keep your contact details up to date</SectionLead>
          </div>
        </InfoHeader>

        <InfoGrid>
          <InfoTile>
            <IconBubble>
              <User size={18} weight="bold" />
            </IconBubble>
            <TileBody>
              <TileLabel>Full Name</TileLabel>
              <TileValue>{getFullName()}</TileValue>
            </TileBody>
          </InfoTile>

          <InfoTile>
            <IconBubble>
              <User size={18} />
            </IconBubble>
            <TileBody>
              <TileLabel>Preferred Name</TileLabel>
              <TileValue>
                {userData?.preferredName || 'Not specified'}
              </TileValue>
            </TileBody>
          </InfoTile>

          <InfoTile>
            <IconBubble>
              <EnvelopeSimple size={18} />
            </IconBubble>
            <TileBody>
              <TileLabel>Email</TileLabel>
              <TileValue>
                {userData?.email || 'Not specified'}
              </TileValue>
            </TileBody>
          </InfoTile>

          <InfoTile>
            <IconBubble>
              <Phone size={18} />
            </IconBubble>
            <TileBody>
              <TileLabel>Phone Number</TileLabel>
              <TileValue>
                {userData?.phoneNumber || 'Not specified'}
              </TileValue>
            </TileBody>
          </InfoTile>

          <InfoTile className="span-2">
            <IconBubble>
              <MapPin size={18} />
            </IconBubble>
            <TileBody>
              <TileLabel>Address</TileLabel>
              <TileValue>
                {userData?.address || 'Not specified'}
              </TileValue>
            </TileBody>
          </InfoTile>
        </InfoGrid>
      </PersonalSectionWrapper>

      {/* Edit All Personal Info Modal */}
      {showEditModal && (
        <ModalOverlay>
          <ScrollableModalContent>
            <ModalHeader>
              <ModalTitle>Edit User Profile</ModalTitle>
              <CloseButton onClick={handleCancelEdit}>&times;</CloseButton>
            </ModalHeader>
            <ModalScrollArea>
              <TwoColumnMainGrid>
                <ModalSection>
                  <ModalSectionTitle>
                    <User size={16} />
                    Personal Information
                  </ModalSectionTitle>
                  
                  <FormGroup>
                    <Label htmlFor="preferredName">Preferred Name</Label>
                    <Input
                      type="text"
                      id="preferredName"
                      name="preferredName"
                      value={formData.preferredName}
                      onChange={handleChange}
                      placeholder="Enter your preferred name"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your address"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </ModalSection>
                
                <ModalSection>
                  <ModalSectionTitle>
                    <UsersThree size={16} />
                    Emergency Contact
                  </ModalSectionTitle>
                  
                  <FormGroup>
                    <Label htmlFor="emergencyContactName">Contact Name</Label>
                    <Input
                      type="text"
                      id="emergencyContactName"
                      name="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={handleChange}
                      placeholder="Enter contact name"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="emergencyContactRelationship">Relationship</Label>
                    <Input
                      type="text"
                      id="emergencyContactRelationship"
                      name="emergencyContactRelationship"
                      value={formData.emergencyContactRelationship}
                      onChange={handleChange}
                      placeholder="e.g. Spouse, Parent"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="emergencyContactPhone">Contact Phone</Label>
                    <Input
                      type="text"
                      id="emergencyContactPhone"
                      name="emergencyContactPhone"
                      value={formData.emergencyContactPhone}
                      onChange={handleChange}
                      placeholder="Enter emergency contact phone"
                    />
                  </FormGroup>
                </ModalSection>
              </TwoColumnMainGrid>
            </ModalScrollArea>
            
            <ModalFooter>
              <ButtonGroup>
                <CancelButton onClick={handleCancelEdit} disabled={loading}>
                  Cancel
                </CancelButton>
                <SubmitButton onClick={updatePersonalInfo} disabled={loading}>
                  {loading ? 'Updating...' : (
                    <>
                      <FloppyDisk size={16} style={{ marginRight: '6px' }} />
                      Save Changes
                    </>
                  )}
                </SubmitButton>
              </ButtonGroup>
            </ModalFooter>
          </ScrollableModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

// styled-components (kept at the bottom per project preference)
const PersonalSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 24px;
  margin-bottom: 24px;
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionKicker = styled.div`
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #800000;
  font-weight: 700;
`;

const SectionLead = styled.div`
  font-size: 0.9rem;
  color: #757575;
  margin-top: 4px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
`;

const InfoTile = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 12px;
  padding: 14px;
  border: 1px solid #eee;
  border-radius: 10px;
  background: #fff;
  transition: box-shadow 0.2s ease, transform 0.05s ease;

  &:hover {
    box-shadow: 0 6px 14px rgba(0,0,0,0.08);
  }

  &.span-2 {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    &.span-2 { grid-column: span 1; }
  }
`;

const IconBubble = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff3f3;
  color: #800000;
`;

const TileBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TileLabel = styled.div`
  font-size: 0.8rem;
  color: #757575;
  font-weight: 600;
`;

const TileValue = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 1rem;
  color: #333;
`;

const ScrollableModalContent = styled(ModalContent)`
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  max-width: 850px;
  width: 95%;
`;

const ModalScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 20px;
  /* Add scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: #d0d0d0 transparent;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #d0d0d0;
    border-radius: 10px;
  }
`;

const ModalFooter = styled.div`
  padding: 16px;
  border-top: 1px solid #eee;
  background: white;
  border-radius: 0 0 8px 8px;
`;

const TwoColumnMainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ModalSection = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  background: #fafafa;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ModalSectionTitle = styled.h3`
  font-size: 1rem;
  color: #800000;
  margin: 0 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const EditAllButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border: 1px solid #ffe1e1;
  border-radius: 8px;
  background: linear-gradient(to bottom, #fff6f6, #ffe1e1);
  color: #800000;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.15s ease;
  box-shadow: 0 2px 4px rgba(128,0,0,0.1);
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  
  &:hover {
    background: linear-gradient(to bottom, #ffe1e1, #ffd6d6);
    box-shadow: 0 3px 6px rgba(128,0,0,0.15);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(128,0,0,0.1);
  }
`;

// Hidden button for external triggering
const HiddenTriggerButton = styled.button`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
  overflow: hidden;
`;

export default PersonalInfoSection;
