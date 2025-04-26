import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth, db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Envelope, Lock, SignIn, UserPlus, Eye, EyeSlash, ArrowCounterClockwise } from 'phosphor-react';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #801100 100%);
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
  position: relative;
  
  &:focus-within {
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #800000;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  width: 100%;
  
  &:hover {
    background-color: #600000;
  }
  
  &:disabled {
    background-color: #b08080;
    cursor: not-allowed;
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
  color: #800000;
  border: 1px solid #800000;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  margin-top: 1rem;
  width: 100%;
  
  &:hover {
    background-color: rgba(128, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const ForgotPasswordLink = styled.button`
  background: none;
  border: none;
  color: #800000;
  font-size: 0.8rem;
  text-align: right;
  margin-top: 0.5rem;
  cursor: pointer;
  align-self: flex-end;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:disabled {
    color: #999;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: none;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #800000;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if there's a message in the location state (e.g., from registration)
  useEffect(() => {
    if (location.state?.message) {
      toast.info(location.state.message);
      // Clear the message after showing it
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);
  
  // Clear error when inputs change
  useEffect(() => {
    if (error) setError('');
  }, [email, password]);

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email address to reset your password');
      document.getElementById('email')?.focus();
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      document.getElementById('email')?.focus();
      return;
    }
    
    try {
      setResetLoading(true);
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true);
      toast.success('Password reset email sent! Check your inbox.');
    } catch (error) {
      console.error('Password reset error:', error);
      if (error.code === 'auth/user-not-found') {
        setError('No account found with this email address');
      } else {
        setError('Failed to send password reset email. Please try again.');
      }
    } finally {
      setResetLoading(false);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      document.getElementById('email')?.focus();
      return;
    }
    
    try {
      setError('');
      setLoading(true);
      
      try {
        // Attempt to sign in
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Check if the user's registration has been declined
        const declinedQuery = query(
          collection(db, 'declined_registrations'),
          where('userId', '==', user.uid)
        );
        const declinedSnapshot = await getDocs(declinedQuery);
        
        if (!declinedSnapshot.empty) {
          // User was declined, sign them out and show error
          await auth.signOut();
          setError('Your registration request has been declined. Please contact an administrator.');
          toast.error('Access denied: Registration declined');
          return;
        }
        
        // Check if the user has a pending registration request
        const pendingQuery = query(
          collection(db, 'registration_requests'),
          where('userId', '==', user.uid)
        );
        const pendingSnapshot = await getDocs(pendingQuery);
        
        if (!pendingSnapshot.empty) {
          // User has a pending request, sign them out and show message
          await auth.signOut();
          setError('Your registration request is pending approval. You will be notified when approved.');
          toast.info('Registration pending approval');
          return;
        }
        
        // Check if we're in development mode and Firebase emulator is not available
        const isEmulatorMode = import.meta.env.DEV && import.meta.env.VITE_USE_EMULATORS === 'true';
        if (isEmulatorMode) {
          // Store user info in localStorage for development fallback
          localStorage.setItem('dev_user', JSON.stringify({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || user.email.split('@')[0]
          }));
        }
        
        toast.success('Login successful!');
        navigate('/dashboard');
      } catch (authError) {
        console.error('Firebase auth error:', authError);
        
        // Check for development mode with emulator issues
        const isEmulatorMode = import.meta.env.DEV && import.meta.env.VITE_USE_EMULATORS === 'true';
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
            console.log('Authentication failed:', authError.code, authError.message);
            
            // Check if it's likely a registration issue
            const isLikelyNotRegistered = 
              authError.code === 'auth/user-not-found' || 
              (authError.code === 'auth/invalid-credential' && email.includes('@'));
              
            if (isLikelyNotRegistered) {
              setError(
                <span>
                  Account not found. Please check your email or 
                  <a href="/register" style={{color: '#800000', marginLeft: '4px', textDecoration: 'underline'}}>
                    register here
                  </a>
                </span>
              );
            } else {
              setError('Invalid email or password. Please check your credentials and try again.');
            }
            
            // Focus the email field for better UX
            document.getElementById('email')?.focus();
          } else if (authError.code === 'auth/network-request-failed') {
            setError('Network error. Please check your connection and try again.');
          } else if (authError.code === 'auth/too-many-requests') {
            setError('Too many failed login attempts. Please try again later or reset your password.');
          } else if (authError.code === 'auth/operation-not-allowed') {
            setError('Email/password sign-in is not enabled. Please contact the administrator.');
            console.error('Firebase email/password authentication is not enabled in the Firebase Console');
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
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <PasswordToggle 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
              </PasswordToggle>
            </InputWrapper>
            <ForgotPasswordLink 
              type="button"
              onClick={handleForgotPassword} 
              disabled={resetLoading}
              tabIndex="-1" // Prevent it from being focused with tab navigation
            >
              {resetLoading ? 'Sending...' : resetEmailSent ? 'Email sent!' : 'Forgot password?'}
            </ForgotPasswordLink>
          </FormGroup>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <ButtonGroup>
            <Button 
              type="submit" 
              disabled={loading}
              onClick={handleSubmit} // Add explicit click handler
            >
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
