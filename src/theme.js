// Theme configuration for the Hyacinth Attendance System
const theme = {
  colors: {
    // Primary color (red)
    primary: {
      main: '#D32F2F',      // Main red
      light: '#EF5350',     // Lighter red
      dark: '#B71C1C',      // Darker red
      contrastText: '#FFFFFF' // Text on primary color
    },
    // Accent color (gold)
    accent: {
      main: '#FFD700',      // Gold
      light: '#FFEB3B',     // Light gold
      dark: '#FFC107',      // Dark gold
      contrastText: '#212121' // Text on accent color
    },
    // Background colors (white variations)
    background: {
      default: '#FFFFFF',   // Default white
      paper: '#F5F5F5',     // Paper white (slightly off-white)
      secondary: '#FAFAFA'  // Secondary background
    },
    // Text colors
    text: {
      primary: '#212121',   // Primary text
      secondary: '#757575', // Secondary text
      disabled: '#9E9E9E',  // Disabled text
      hint: '#9E9E9E'       // Hint text
    },
    // Status colors
    status: {
      success: '#4CAF50',   // Success green
      warning: '#FF9800',   // Warning orange
      error: '#F44336',     // Error red
      info: '#2196F3'       // Info blue
    },
    // Other utility colors
    divider: '#E0E0E0',     // Divider color
    border: '#DDDDDD'       // Border color
  },
  // Typography
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  // Spacing
  spacing: {
    unit: 8, // Base spacing unit in pixels
  },
  // Shadows
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)'
  },
  // Borders
  borders: {
    radius: '4px'
  },
  // Transitions
  transitions: {
    default: '0.3s ease'
  }
};

export default theme;
