import React, { useState } from 'react';
import styled from 'styled-components';
import { User, UsersThree, Phone, PencilSimple } from 'phosphor-react';
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

const EmergencyContactSection = ({ userData, userId }) => {
  const [showNameModal, setShowNameModal] = useState(false);
  const [showRelationshipModal, setShowRelationshipModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(userData?.emergencyContactName || '');
  const [relationship, setRelationship] = useState(userData?.emergencyContactRelationship || '');
  const [phone, setPhone] = useState(userData?.emergencyContactPhone || '');

  const updateContactName = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, { emergencyContactName: name });
      toast.success('Emergency contact name updated successfully!');
      setShowNameModal(false);
    } catch (error) {
      console.error('Error updating emergency contact name:', error);
      toast.error('Failed to update contact name.');
    } finally {
      setLoading(false);
    }
  };

  const updateRelationship = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, { emergencyContactRelationship: relationship });
      toast.success('Relationship updated successfully!');
      setShowRelationshipModal(false);
    } catch (error) {
      console.error('Error updating relationship:', error);
      toast.error('Failed to update relationship.');
    } finally {
      setLoading(false);
    }
  };

  const updateContactPhone = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, { emergencyContactPhone: phone });
      toast.success('Emergency contact phone updated successfully!');
      setShowPhoneModal(false);
    } catch (error) {
      console.error('Error updating contact phone:', error);
      toast.error('Failed to update contact phone.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <EmergencySectionWrapper>
        <InfoHeader>
          <div>
            <SectionKicker>Emergency</SectionKicker>
            <SectionLead>Who to contact in case of emergency</SectionLead>
          </div>
        </InfoHeader>

        <InfoGrid>
          <InfoTile>
            <IconBubble>
              <User size={18} />
            </IconBubble>
            <TileBody>
              <TileLabel>Contact Name</TileLabel>
              <TileValue>
                {userData?.emergencyContactName || 'Not specified'}
              </TileValue>
            </TileBody>
          </InfoTile>

          <InfoTile>
            <IconBubble>
              <UsersThree size={18} />
            </IconBubble>
            <TileBody>
              <TileLabel>Relationship</TileLabel>
              <TileValue>
                {userData?.emergencyContactRelationship || 'Not specified'}
              </TileValue>
            </TileBody>
          </InfoTile>

          <InfoTile>
            <IconBubble>
              <Phone size={18} />
            </IconBubble>
            <TileBody>
              <TileLabel>Phone</TileLabel>
              <TileValue>
                {userData?.emergencyContactPhone || 'Not specified'}
              </TileValue>
            </TileBody>
          </InfoTile>
        </InfoGrid>
      </EmergencySectionWrapper>

      {showNameModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Emergency Contact Name</ModalTitle>
              <CloseButton onClick={() => setShowNameModal(false)}>&times;</CloseButton>
            </ModalHeader>
            <FormGroup>
              <Label htmlFor="emergencyContactName">Name</Label>
              <Input
                id="emergencyContactName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter contact name"
              />
            </FormGroup>
            <ButtonGroup>
              <CancelButton onClick={() => setShowNameModal(false)} disabled={loading}>
                Cancel
              </CancelButton>
              <SubmitButton onClick={updateContactName} disabled={loading}>
                {loading ? 'Updating...' : 'Update'}
              </SubmitButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}

      {showRelationshipModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Relationship</ModalTitle>
              <CloseButton onClick={() => setShowRelationshipModal(false)}>&times;</CloseButton>
            </ModalHeader>
            <FormGroup>
              <Label htmlFor="emergencyContactRelationship">Relationship</Label>
              <Input
                id="emergencyContactRelationship"
                type="text"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                placeholder="e.g. Spouse, Parent, Sibling"
              />
            </FormGroup>
            <ButtonGroup>
              <CancelButton onClick={() => setShowRelationshipModal(false)} disabled={loading}>
                Cancel
              </CancelButton>
              <SubmitButton onClick={updateRelationship} disabled={loading}>
                {loading ? 'Updating...' : 'Update'}
              </SubmitButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}

      {showPhoneModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Emergency Contact Phone</ModalTitle>
              <CloseButton onClick={() => setShowPhoneModal(false)}>&times;</CloseButton>
            </ModalHeader>
            <FormGroup>
              <Label htmlFor="emergencyContactPhone">Phone</Label>
              <Input
                id="emergencyContactPhone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter contact phone number"
              />
            </FormGroup>
            <ButtonGroup>
              <CancelButton onClick={() => setShowPhoneModal(false)} disabled={loading}>
                Cancel
              </CancelButton>
              <SubmitButton onClick={updateContactPhone} disabled={loading}>
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
const EmergencySectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  min-height: 400px;
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

export default EmergencyContactSection;
