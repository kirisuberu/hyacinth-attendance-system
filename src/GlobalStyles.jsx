import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${theme.typography.fontFamily};
  }

  body {
    background-color: ${theme.colors.background.default};
    color: ${theme.colors.text.primary};
    font-size: ${theme.typography.fontSize}px;
    line-height: 1.5;
  }

  a {
    color: ${theme.colors.primary.main};
    text-decoration: none;
    transition: color ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.primary.dark};
    }
  }

  button {
    cursor: pointer;
    font-family: ${theme.typography.fontFamily};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
    font-weight: ${theme.typography.fontWeightBold};
    line-height: 1.2;
  }

  p {
    margin-bottom: 1rem;
  }

  /* Toast notification styling */
  .Toastify__toast {
    border-radius: ${theme.borders.radius};
  }

  .Toastify__toast--success {
    background-color: ${theme.colors.status.success};
  }

  .Toastify__toast--error {
    background-color: ${theme.colors.status.error};
  }

  .Toastify__toast--warning {
    background-color: ${theme.colors.status.warning};
  }

  .Toastify__toast--info {
    background-color: ${theme.colors.status.info};
  }
`;

export default GlobalStyles;
