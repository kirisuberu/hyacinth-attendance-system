import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { auth, db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { CheckCircle } from 'phosphor-react';

function EmailVerified() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    const refreshAuth = async () => {
      try {
        if (auth.currentUser) {
          await auth.currentUser.reload();
          // After reload, also sync the updated email to Firestore
          try {
            const user = auth.currentUser;
            if (user?.uid && user?.email) {
              const userRef = doc(db, 'users', user.uid);
              await updateDoc(userRef, { email: user.email });
            }
          } catch (syncErr) {
            console.debug('Firestore email sync after verification failed:', syncErr);
          }
        }
      } catch (e) {
        console.debug('Auth reload after verification failed:', e);
      }
    };
    refreshAuth();
  }, []);

  const handleContinue = () => {
    navigate(currentUser ? '/dashboard' : '/');
  };

  return (
    <Wrapper>
      <Card>
        <IconWrapper>
          <CheckCircle size={56} weight="fill" />
        </IconWrapper>
        <Title>Email verified!</Title>
        <Subtitle>
          Your email change has been confirmed. You can now use your new email to sign in.
        </Subtitle>
        <PrimaryButton onClick={handleContinue}>
          {currentUser ? 'Go to Dashboard' : 'Go to Login'}
        </PrimaryButton>
      </Card>
    </Wrapper>
  );
}

export default EmailVerified;

// styled-components (keep styles at the bottom)
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f7f7fb;
`;

const Card = styled.div`
  background: #fff;
  padding: 32px 28px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  max-width: 480px;
  width: 92%;
  text-align: center;
`;

const IconWrapper = styled.div`
  color: #22c55e;
  display: inline-flex;
  margin-bottom: 12px;
`;

const Title = styled.h1`
  margin: 0 0 8px 0;
  font-size: 1.5rem;
  color: #111827;
`;

const Subtitle = styled.p`
  margin: 0 0 20px 0;
  color: #6b7280;
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background: #6e8efb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.15s ease;

  &:hover {
    background: #5a79e0;
  }
`;
