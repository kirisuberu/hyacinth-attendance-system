import styled, { keyframes } from 'styled-components';

// Animation for the container
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Animation for the content
const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Animation for the text
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const DeviceRestrictionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Roboto', sans-serif;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const DeviceRestrictionContent = styled.div`
  text-align: center;
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  max-width: 90%;
  animation: ${slideIn} 0.7s ease-out;
  border: 2px solid #e0e0e0;
  overflow: hidden;
`;

export const Title = styled.h1`
  color: #d32f2f;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Message = styled.p`
  margin: 0.7rem 0;
  font-size: 1.2rem;
  color: #333;
  line-height: 1.5;
`;

export const ErrorMessage = styled.p`
  margin: 1rem 0;
  font-size: 1.1rem;
  color: #555;
  font-style: italic;
`;

export const FunMessage = styled.p`
  margin: 1.5rem 0 0.5rem;
  font-size: 1.3rem;
  color: #ff5722;
  font-style: italic;
  font-weight: bold;
  animation: ${pulse} 2s infinite;
`;
