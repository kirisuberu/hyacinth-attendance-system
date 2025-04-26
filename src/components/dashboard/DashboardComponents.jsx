import styled from 'styled-components';
import theme from '../../theme';

// Shared UI components for dashboard sections
export const Card = styled.div`
  background-color: ${theme.colors.background.default};
  border-radius: ${theme.borders.radius};
  box-shadow: ${theme.shadows.medium};
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid ${theme.colors.divider};
  color: ${theme.colors.primary.main};
`;

export const CardContent = styled.div`
  padding: 1.25rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid ${theme.colors.divider};
  }
  
  th {
    font-weight: 600;
    color: ${theme.colors.text.secondary};
  }
  
  tr:hover td {
    background-color: ${theme.colors.primary.main}05;
  }
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-left: 0.5rem;
  background-color: ${props => 
    props.status === 'In' ? `${theme.colors.status.success}20` : 
    props.status === 'Out' ? `${theme.colors.status.error}20` : 
    props.status === 'Late' ? `${theme.colors.status.warning}20` : 
    theme.colors.background.secondary};
  color: ${props => 
    props.status === 'In' ? theme.colors.status.success : 
    props.status === 'Out' ? theme.colors.status.error : 
    props.status === 'Late' ? theme.colors.status.warning : 
    theme.colors.text.secondary};
`;

export const Button = styled.button`
  background: linear-gradient(135deg, ${theme.colors.primary.main} 0%, ${theme.colors.primary.dark} 100%);
  color: ${theme.colors.primary.contrastText};
  border: none;
  border-radius: ${theme.borders.radius};
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${theme.colors.primary.main}40;
  }
  
  &:disabled {
    background: ${theme.colors.text.disabled};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${theme.colors.text.secondary};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borders.radius};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 2px ${theme.colors.primary.main}25;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borders.radius};
  font-size: 1rem;
  background-color: ${theme.colors.background.default};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 2px ${theme.colors.primary.main}25;
  }
`;

export const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
