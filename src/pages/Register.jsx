import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Envelope, Lock, User, ArrowLeft, CheckCircle, IdentificationCard, Eye, EyeSlash, SpinnerGap } from 'phosphor-react';
import { submitRegistrationRequest } from '../services/registrationService';
import theme from '../theme';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, ${theme.colors.primary.main} 0%, ${theme.colors.primary.dark} 100%);
  padding: 2rem 1rem;
`;

const RegisterCard = styled.div`
  background-color: ${theme.colors.background.default};
  border-radius: ${theme.borders.radius};
  box-shadow: ${theme.shadows.large};
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`;

const Title = styled.h1`
  color: ${theme.colors.text.primary};
  font-size: 2rem;
  margin-bottom: 1.5rem;
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

const NameRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const NameField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${props => props.flex || 1};
  min-width: ${props => props.minWidth || '0'};
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: ${theme.colors.text.secondary};
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borders.radius};
  padding: 0 1rem;
  background-color: ${theme.colors.background.paper};
  position: relative;
  
  &:focus-within {
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 2px ${theme.colors.primary.main}25;
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: ${theme.colors.primary.main};
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

const Select = styled.select`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  appearance: none;
  cursor: pointer;
  width: 100%;
  
  &:focus {
    outline: none;
  }
  
  option {
    background-color: ${theme.colors.background.default};
    color: ${theme.colors.text.primary};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${theme.colors.primary.main};
  color: ${theme.colors.primary.contrastText};
  border: none;
  border-radius: ${theme.borders.radius};
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  transition: background-color ${theme.transitions.default};
  margin-top: 1.5rem;
  
  &:hover {
    background-color: ${theme.colors.primary.dark};
  }
  
  &:disabled {
    background-color: ${theme.colors.primary.light};
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const PasswordToggle = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.primary.main};
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

const Spinner = styled(SpinnerGap)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.primary.main};
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  text-decoration: none;
  transition: color ${theme.transitions.default};
  
  &:hover {
    color: ${theme.colors.primary.dark};
  }
  
  ${Icon} {
    margin-right: 0.25rem;
  }
`;

const ErrorMessage = styled.div`
  color: ${theme.colors.status.error};
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const PasswordRequirements = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: ${theme.colors.text.secondary};
`;

const RequirementItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${props => props.met ? theme.colors.status.success : theme.colors.text.secondary};
`;

function Register() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleInitial: '',
    email: '',
    password: '',
    confirmPassword: '',
    position: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);
  const navigate = useNavigate();
  
  // Clear errors when form data changes
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setErrors({});
    }
  }, [formData]);

  // Password requirements
  const passwordRequirements = {
    length: formData.password.length >= 4,
    validChars: /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(formData.password),
    hasLetter: /[a-zA-Z]/.test(formData.password),
    hasNumber: /[0-9]/.test(formData.password),
    match: formData.password === formData.confirmPassword && formData.confirmPassword !== ''
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle middle initial uppercase conversion
    if (name === 'middleInitial') {
      setFormData(prev => ({
        ...prev,
        [name]: value.toUpperCase()
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Check email availability with debounce
    if (name === 'email' && value.includes('@') && value.includes('.')) {
      setCheckingEmail(true);
      const timer = setTimeout(() => {
        checkEmailAvailability(value);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  };
  
  // Check if email is already registered
  const checkEmailAvailability = async (email) => {
    try {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setCheckingEmail(false);
        return;
      }
      
      // Check if email exists using Firebase Auth REST API
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=${import.meta.env.VITE_FIREBASE_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          continueUri: window.location.href,
          identifier: email
        })
      }).then(res => res.json());
      
      if (response.registered) {
        setErrors(prev => ({
          ...prev,
          email: 'This email is already registered. Please use a different email or login instead.'
        }));
      }
    } catch (error) {
      console.error('Error checking email:', error);
    } finally {
      setCheckingEmail(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRequirements.length) {
      newErrors.password = 'Password must be at least 4 characters';
    } else if (!passwordRequirements.validChars) {
      newErrors.password = 'Password contains invalid characters';
    } else if (!passwordRequirements.hasLetter) {
      newErrors.password = 'Password must contain at least one letter';
    } else if (!passwordRequirements.hasNumber) {
      newErrors.password = 'Password must contain at least one number';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.position) {
      newErrors.position = 'Please select your position';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      setLoading(true);
      
      // Check if we're in development mode and Firebase emulator is not available
      const isEmulatorMode = import.meta.env.DEV && import.meta.env.VITE_USE_EMULATORS === 'true';
      let userId, userCredential;
      
      try {
        // If email doesn't exist, proceed with user creation
        userCredential = await createUserWithEmailAndPassword(
          auth, 
          formData.email, 
          formData.password
        );
        userId = userCredential.user.uid;
      } catch (authError) {
        console.error('Auth error:', authError);
        
        // Handle specific auth errors
        if (authError.code === 'auth/email-already-in-use') {
          // Special handling for email-already-in-use error
          // Instead of throwing an error, we'll use this email for registration request
          console.log('Email already exists in Auth but proceeding with registration request');
          
          // Generate a temporary userId for the registration request
          userId = `temp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
        } else {
        
          if (isEmulatorMode && (authError.code === 'auth/network-request-failed' || authError.message?.includes('network'))) {
            // In development with emulator issues, generate a mock user ID
            console.warn('Firebase emulator not available, using mock authentication');
            userId = `dev_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
          } else {
            // For other auth errors, rethrow
            throw authError;
          }
        }
      }
      
      // Create full name from parts
      const fullName = `${formData.lastName}, ${formData.firstName}${formData.middleInitial ? ' ' + formData.middleInitial + '.' : ''}`;
      
      // Update profile with display name if we have a user credential
      if (userCredential?.user) {
        try {
          await updateProfile(userCredential.user, {
            displayName: fullName
          });
        } catch (profileError) {
          console.warn('Could not update profile, continuing with registration:', profileError);
        }
      }
      
      // Create registration request document
      const userDoc = {
        userId: userId,
        lastName: formData.lastName,
        firstName: formData.firstName,
        middleInitial: formData.middleInitial,
        name: fullName,
        email: formData.email,
        position: formData.position,
        role: 'user', // Default role for new registrations
        status: 'pending',
        userID: `uid_${Date.now()}_${Math.random().toString(36).substring(2, 7)}` // Permanent userID
      };
      
      try {
        // Submit registration request instead of creating user directly
        await submitRegistrationRequest(userDoc);
      } catch (firestoreError) {
        console.error('Firestore error:', firestoreError);
        
        if (isEmulatorMode) {
          console.warn('Firebase emulator not available, skipping Firestore operation');
          // In development, we can still proceed without Firestore
        } else {
          throw firestoreError;
        }
      }
      
      toast.success('Registration request submitted! An administrator will review your request.');
      
      // Store user info in localStorage for development fallback
      if (isEmulatorMode && !userCredential) {
        localStorage.setItem('dev_user', JSON.stringify({
          uid: userId,
          email: formData.email,
          displayName: fullName
        }));
        navigate('/dashboard'); // Only in dev mode we can proceed to dashboard
      } else {
        // In production, redirect to a confirmation page or login
        navigate('/login', { 
          state: { 
            message: 'Your registration request has been submitted. You will be notified when your account is approved.'
          } 
        });
      }
    } catch (error) {
      console.error('Registration error:', error);
      
      // Handle specific Firebase auth errors
      if (error.code === 'auth/email-already-in-use' || 
          (typeof error === 'object' && error.code === 'auth/email-already-in-use')) {
        const errorMessage = error.message || 'Email is already registered. Please use a different email or login instead.';
        setErrors(prev => ({
          ...prev,
          email: errorMessage
        }));
        
        // Show a toast with a link to login
        toast.error(
          <div>
            Email already exists. <a href="/" style={{color: 'white', textDecoration: 'underline'}}>Login instead?</a>
          </div>,
          { autoClose: 5000 }
        );
        
        // Scroll to the email field and focus it
        document.getElementById('email')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        document.getElementById('email')?.focus();
      } else if (error.code === 'auth/network-request-failed') {
        toast.error('Network error. Please check your connection and try again.');
      } else if (error.code === 'auth/operation-not-allowed') {
        setErrors(prev => ({
          ...prev,
          email: 'Email/password registration is not enabled. Please contact the administrator.'
        }));
        console.error('Firebase email/password authentication is not enabled in the Firebase Console');
      } else if (error.code?.includes('auth/')) {
        toast.error(`Authentication error: ${error.message || 'Please try again later'}`);
      } else {
        console.error('Registration error details:', error);
        toast.error('Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterContainer>
      <RegisterCard>
        <BackLink to="/">
          <Icon><ArrowLeft size={16} /></Icon>
          Back to Login
        </BackLink>
        
        <Title>Create Account</Title>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Full Name</Label>
            <NameRow>
              <NameField flex="2" minWidth="150px">
                <Label htmlFor="lastName">Last Name</Label>
                <InputWrapper>
                  <Icon><User size={18} /></Icon>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                  />
                </InputWrapper>
                {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
              </NameField>
              
              <NameField flex="2" minWidth="150px">
                <Label htmlFor="firstName">First Name</Label>
                <InputWrapper>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                  />
                </InputWrapper>
                {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
              </NameField>
              
              <NameField flex="1" minWidth="80px">
                <Label htmlFor="middleInitial">M.I.</Label>
                <InputWrapper>
                  <Input
                    id="middleInitial"
                    name="middleInitial"
                    type="text"
                    value={formData.middleInitial}
                    onChange={handleChange}
                    placeholder="M.I."
                    maxLength="1"
                  />
                </InputWrapper>
              </NameField>
            </NameRow>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <InputWrapper>
              <Icon><Envelope size={18} /></Icon>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {checkingEmail && (
                <PasswordToggle as="span" aria-label="Checking email">
                  <Spinner size={18} />
                </PasswordToggle>
              )}
            </InputWrapper>
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="position">Position</Label>
            <InputWrapper>
              <Icon><IdentificationCard size={18} /></Icon>
              <Select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
              >
                <option value="" disabled>Select your position</option>
                <option value="Intern/OJT">Intern/OJT</option>
                <option value="Employed/Onboarded">Employed/Onboarded</option>
              </Select>
            </InputWrapper>
            {errors.position && <ErrorMessage>{errors.position}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <InputWrapper>
              <Icon><Lock size={18} /></Icon>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
              />
              <PasswordToggle 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
              </PasswordToggle>
            </InputWrapper>
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            
            <PasswordRequirements>
              <RequirementItem met={passwordRequirements.length}>
                <Icon><CheckCircle size={14} weight={passwordRequirements.length ? "fill" : "regular"} /></Icon>
                At least 4 characters
              </RequirementItem>
              <RequirementItem met={passwordRequirements.validChars}>
                <Icon><CheckCircle size={14} weight={passwordRequirements.validChars ? "fill" : "regular"} /></Icon>
                Valid characters (letters, numbers, and special characters)
              </RequirementItem>
              <RequirementItem met={passwordRequirements.hasLetter}>
                <Icon><CheckCircle size={14} weight={passwordRequirements.hasLetter ? "fill" : "regular"} /></Icon>
                At least one letter
              </RequirementItem>
              <RequirementItem met={passwordRequirements.hasNumber}>
                <Icon><CheckCircle size={14} weight={passwordRequirements.hasNumber ? "fill" : "regular"} /></Icon>
                At least one number
              </RequirementItem>
            </PasswordRequirements>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <InputWrapper>
              <Icon><Lock size={18} /></Icon>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
              <PasswordToggle 
                type="button" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
              </PasswordToggle>
            </InputWrapper>
            {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
            
            {formData.confirmPassword && (
              <RequirementItem met={passwordRequirements.match}>
                <Icon><CheckCircle size={14} weight={passwordRequirements.match ? "fill" : "regular"} /></Icon>
                Passwords match
              </RequirementItem>
            )}
          </FormGroup>
          
          <Button type="submit" disabled={loading || checkingEmail}>
            {loading ? (
              <>
                <Spinner size={18} />
                Creating Account...
              </>
            ) : checkingEmail ? (
              'Checking email...'
            ) : (
              'Register'
            )}
          </Button>
        </Form>
      </RegisterCard>
    </RegisterContainer>
  );
}

export default Register;
