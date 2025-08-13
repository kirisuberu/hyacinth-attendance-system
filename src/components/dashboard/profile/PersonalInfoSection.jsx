import React, { useState } from 'react';
import styled from 'styled-components';
import { User, Phone, MapPin, EnvelopeSimple, PencilSimple } from 'phosphor-react';
import { updateDoc, doc } from 'firebase/firestore';
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

const PersonalInfoSection = ({ userData, userId }) => {
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPreferredNameModal, setShowPreferredNameModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(userData?.phoneNumber || '');
  const [address, setAddress] = useState(userData?.address || '');
  const [email, setEmail] = useState(userData?.email || '');
  const [preferredName, setPreferredName] = useState(userData?.preferredName || '');
  const [loading, setLoading] = useState(false);

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

  const handlePhoneChange = (e) => setPhoneNumber(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const updatePhone = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, { phoneNumber });
      toast.success('Phone number updated successfully!');
      setShowPhoneModal(false);
    } catch (error) {
      console.error('Error updating phone number:', error);
      toast.error('Failed to update phone number.');
    } finally {
      setLoading(false);
    }
  };

  const updateAddress = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, { address });
      toast.success('Address updated successfully!');
      setShowAddressModal(false);
    } catch (error) {
      console.error('Error updating address:', error);
      toast.error('Failed to update address.');
    } finally {
      setLoading(false);
    }
  };

  const updateEmail = async () => {
    if (!userId) return;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    
    setLoading(true);
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, { email });
      toast.success('Email updated successfully!');
      setShowEmailModal(false);
    } catch (error) {
      console.error('Error updating email:', error);
      toast.error('Failed to update email.');
    } finally {
      setLoading(false);
    }
  };

  const updatePreferredName = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, { preferredName });
      toast.success('Preferred name updated successfully!');
      setShowPreferredNameModal(false);
    } catch (error) {
      console.error('Error updating preferred name:', error);
      toast.error('Failed to update preferred name.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
                <InlineEdit
                  aria-label="Edit preferred name"
                  onClick={() => { setPreferredName(userData?.preferredName || ''); setShowPreferredNameModal(true); }}
                >
                  <PencilSimple size={14} />
                  <span>{userData?.preferredName ? ' Edit' : ' Add'}</span>
                </InlineEdit>
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
                <InlineEdit aria-label="Edit email" onClick={() => setShowEmailModal(true)}>
                  <PencilSimple size={14} />
                  <span>{userData?.email ? ' Edit' : ' Add'}</span>
                </InlineEdit>
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
                <InlineEdit
                  aria-label="Edit phone number"
                  onClick={() => { setPhoneNumber(userData?.phoneNumber || ''); setShowPhoneModal(true); }}
                >
                  <PencilSimple size={14} />
                  <span>{userData?.phoneNumber ? ' Edit' : ' Add'}</span>
                </InlineEdit>
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
                <InlineEdit
                  aria-label="Edit address"
                  onClick={() => { setAddress(userData?.address || ''); setShowAddressModal(true); }}
                >
                  <PencilSimple size={14} />
                  <span>{userData?.address ? ' Edit' : ' Add'}</span>
                </InlineEdit>
              </TileValue>
            </TileBody>
          </InfoTile>
        </InfoGrid>
      </PersonalSectionWrapper>

      {/* Edit Preferred Name Modal */}
      {showPreferredNameModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Preferred Name</ModalTitle>
              <CloseButton onClick={() => setShowPreferredNameModal(false)}>&times;</CloseButton>
            </ModalHeader>
            <FormGroup>
              <Label htmlFor="preferredName">Preferred Name</Label>
              <Input
                type="text"
                id="preferredName"
                value={preferredName}
                onChange={(e) => setPreferredName(e.target.value)}
                placeholder="Enter your preferred name"
              />
            </FormGroup>
            <ButtonGroup>
              <CancelButton onClick={() => setShowPreferredNameModal(false)} disabled={loading}>
                Cancel
              </CancelButton>
              <SubmitButton onClick={updatePreferredName} disabled={loading}>
                {loading ? 'Updating...' : 'Update'}
              </SubmitButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Edit Phone Modal */}
      {showPhoneModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Phone Number</ModalTitle>
              <CloseButton onClick={() => setShowPhoneModal(false)}>&times;</CloseButton>
            </ModalHeader>
            <FormGroup>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="Enter your phone number"
              />
            </FormGroup>
            <ButtonGroup>
              <CancelButton onClick={() => setShowPhoneModal(false)} disabled={loading}>
                Cancel
              </CancelButton>
              <SubmitButton onClick={updatePhone} disabled={loading}>
                {loading ? 'Updating...' : 'Update'}
              </SubmitButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Edit Address Modal */}
      {showAddressModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Address</ModalTitle>
              <CloseButton onClick={() => setShowAddressModal(false)}>&times;</CloseButton>
            </ModalHeader>
            <FormGroup>
              <Label htmlFor="address">Address</Label>
              <Input
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
                placeholder="Enter your address"
              />
            </FormGroup>
            <ButtonGroup>
              <CancelButton onClick={() => setShowAddressModal(false)} disabled={loading}>
                Cancel
              </CancelButton>
              <SubmitButton onClick={updateAddress} disabled={loading}>
                {loading ? 'Updating...' : 'Update'}
              </SubmitButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Edit Email Modal */}
      {showEmailModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Email</ModalTitle>
              <CloseButton onClick={() => setShowEmailModal(false)}>&times;</CloseButton>
            </ModalHeader>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
              />
            </FormGroup>
            <ButtonGroup>
              <CancelButton onClick={() => setShowEmailModal(false)} disabled={loading}>
                Cancel
              </CancelButton>
              <SubmitButton onClick={updateEmail} disabled={loading}>
                {loading ? 'Updating...' : 'Update'}
              </SubmitButton>
            </ButtonGroup>
          </ModalContent>
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

const InlineEdit = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 6px;
  padding: 4px 8px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: transparent;
  color: #800000;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.15s ease;

  &:hover {
    background: #fff3f3;
    border-color: #ffe1e1;
  }
`;

export default PersonalInfoSection;
