import styled, { css } from 'styled-components';

// Container components
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  font-family: 'Inter', sans-serif;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
`;

export const ProfileTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

// Card components
export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const CardTitle = styled.div`
  padding: 16px 24px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
  font-weight: 600;
  color: #333;
`;

export const CardContent = styled.div`
  padding: 20px;
`;

// Section components
export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
`;

export const ProfileField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
`;

export const FieldLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #757575;
`;

export const FieldValue = styled.div`
  font-size: 1rem;
  color: #333;
  margin-left: 26px;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  color: #1976d2;
  cursor: pointer;
  padding: 0;
  margin-left: 8px;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const FullWidthSection = styled.div`
  width: 100%;
`;

// Modal components
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const ModalTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #757575;
  
  &:hover {
    color: #333;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 6px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 0.95rem;
  
  &:focus {
    outline: none;
    border-color: #1976d2;
    box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: white;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled.button`
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

// New components for redesigned profile view
export const ProfileGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

export const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  align-items: start;
  
  /* Ensure all columns have consistent styling */
  > div {
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    padding: 24px;
    border: 1px solid #f0f0f0;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;


export const TabsContainer = styled.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0;
  margin-bottom: 0;
  overflow-x: auto;
`;

export const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: none;
  border-bottom: 2px solid transparent;
  background: none;
  font-size: 0.95rem;
  font-weight: 500;
  color: #757575;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${props => props.active && css`
    color: #800000;
    border-bottom-color: #800000;
  `}
  
  &:hover {
    color: #800000;
  }
  
  &:disabled {
    color: #bdbdbd;
    cursor: not-allowed;
    border-bottom-color: transparent;
    opacity: 0.6;
  }
`;

export const ProfileBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  
  .profile-left {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UserInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserName = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const UserTitle = styled.div`
  font-size: 1rem;
  color: #555;
`;

export const UserStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: #757575;
  margin-top: 4px;
`;

export const StatusIndicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => {
    switch(props.status?.toLowerCase()) {
      case 'active': return '#4CAF50';
      case 'away': return '#FF9800';
      case 'busy': return '#F44336';
      case 'offline': return '#9E9E9E';
      default: return '#4CAF50';
    }
  }};
`;
