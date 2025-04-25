import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Envelope, Lock, SignIn, UserPlus } from 'phosphor-react';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
`;

const LoginCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #555;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 1rem;
  background-color: #f9f9f9;
  
  &:focus-within {
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #888;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(110, 142, 251, 0.3);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const RegisterButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  color: #6e8efb;
  border: 1px solid #6e8efb;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  margin-top: 1rem;
  width: 100%;
  
  &:hover {
    background-color: rgba(110, 142, 251, 0.1);
    transform: translateY(-2px);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #6e8efb;
  margin-bottom: 1rem;
  text-align: center;
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    try {
      setError('');
      setLoading(true);
      
      // Check if we're in development mode and Firebase emulator is not available
      const isEmulatorMode = import.meta.env.DEV && import.meta.env.VITE_USE_EMULATORS === 'true';
      
      try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Login successful!');
        navigate('/dashboard');
      } catch (authError) {
        console.error('Firebase auth error:', authError);
        
        // Check for development mode with emulator issues
        if (isEmulatorMode && (authError.code === 'auth/network-request-failed' || authError.message?.includes('network'))) {
          console.warn('Firebase emulator not available, using development login');
          
          // Check if this email/password matches the dev user in localStorage
          const devUser = localStorage.getItem('dev_user');
          if (devUser) {
            const parsedUser = JSON.parse(devUser);
            if (parsedUser.email === email) {
              // Simulate successful login
              toast.success('Development login successful!');
              navigate('/dashboard');
              return;
            }
          }
          
          // If no matching dev user, show invalid credential error
          setError('Invalid email or password');
          toast.error('Login failed');
        } else {
          // Handle normal auth errors
          if (authError.code === 'auth/invalid-credential' || 
              authError.code === 'auth/invalid-email' || 
              authError.code === 'auth/user-not-found' || 
              authError.code === 'auth/wrong-password') {
            setError('Invalid email or password. Please check your credentials and try again.');
            // Focus the email field for better UX
            document.getElementById('email')?.focus();
          } else if (authError.code === 'auth/network-request-failed') {
            setError('Network error. Please check your connection and try again.');
          } else if (authError.code === 'auth/too-many-requests') {
            setError('Too many failed login attempts. Please try again later or reset your password.');
          } else {
            console.error('Login error details:', authError);
            setError('Failed to log in. Please try again.');
          }
          toast.error('Login failed');
        }
      }
    } catch (error) {
      console.error('Unexpected login error:', error);
      setError('An unexpected error occurred. Please try again.');
      toast.error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Logo>Hyacinth</Logo>
        <Title>Attendance System</Title>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <InputWrapper>
              <Icon><Envelope size={18} /></Icon>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </InputWrapper>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <InputWrapper>
              <Icon><Lock size={18} /></Icon>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </InputWrapper>
          </FormGroup>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <ButtonGroup>
            <Button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : (
                <>
                  <Icon><SignIn size={18} /></Icon>
                  Login
                </>
              )}
            </Button>
            
            <RegisterButton to="/register">
              <Icon><UserPlus size={18} /></Icon>
              Register
            </RegisterButton>
          </ButtonGroup>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
}

export default Login;
