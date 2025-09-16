import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Calendar, PencilSimple } from 'phosphor-react';
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

const AdditionalInfoSection = ({ userData, userId, formatTimestamp }) => {
  const [showDobModal, setShowDobModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Derive input-friendly YYYY-MM-DD value
  const initialDob = useMemo(() => {
    const ts = userData?.dateOfBirth;
    if (!ts) return '';
    try {
      // If already stored as a YYYY-MM-DD string, use it directly
      if (typeof ts === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(ts)) {
        return ts;
      }
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

  const [dobValue, setDobValue] = useState(initialDob);

  const updateDob = async () => {
    if (!userId) return;
    if (!dobValue) {
      toast.error('Please select a valid date.');
      return;
    }
    setLoading(true);
    try {
      const userRef = doc(db, 'users', userId);
      // Store DOB as a date-only string (YYYY-MM-DD) to avoid timezone shifts
      // Validate the pattern
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dobValue)) throw new Error('Invalid date');
      await updateDoc(userRef, { dateOfBirth: dobValue });
      toast.success('Date of Birth updated successfully!');
      setShowDobModal(false);
    } catch (err) {
      console.error('Error updating Date of Birth:', err);
      toast.error('Failed to update Date of Birth.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DatesSectionWrapper>
      <InfoHeader>
        <div>
          <SectionKicker>Personal Dates</SectionKicker>
          <SectionLead>Manage your birthdate. Account creation date is read-only.</SectionLead>
        </div>
      </InfoHeader>

      <InfoGrid>
        <InfoTile>
          <IconBubble>
            <Calendar size={18} />
          </IconBubble>
          <TileBody>
            <TileLabel>Date of Birth</TileLabel>
            <TileValue>
              {userData?.dateOfBirth ? formatTimestamp(userData.dateOfBirth) : 'Not specified'}
            </TileValue>
          </TileBody>
        </InfoTile>

        <InfoTile>
          <IconBubble>
            <Calendar size={18} />
          </IconBubble>
          <TileBody>
            <TileLabel>Account Created</TileLabel>
            <TileValue>
              {userData?.createdAt ? formatTimestamp(userData.createdAt) : 'Not specified'}
            </TileValue>
          </TileBody>
        </InfoTile>
      </InfoGrid>

      {showDobModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Date of Birth</ModalTitle>
              <CloseButton onClick={() => setShowDobModal(false)}>&times;</CloseButton>
            </ModalHeader>
            <FormGroup>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={dobValue}
                onChange={(e) => setDobValue(e.target.value)}
              />
            </FormGroup>
            <ButtonGroup>
              <CancelButton onClick={() => setShowDobModal(false)} disabled={loading}>
                Cancel
              </CancelButton>
              <SubmitButton onClick={updateDob} disabled={loading}>
                {loading ? 'Updating...' : 'Update'}
              </SubmitButton>
            </ButtonGroup>
          </ModalContent>
        </ModalOverlay>
      )}
    </DatesSectionWrapper>
  );
};

// styled-components (kept at the bottom per project preference)
const DatesSectionWrapper = styled.div`
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

export default AdditionalInfoSection;
