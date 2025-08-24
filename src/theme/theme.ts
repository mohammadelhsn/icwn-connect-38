import { createTheme } from '@mui/material/styles';

// Define the color palette based on the original design system
const colors = {
  // Brand Colors - Greens
  green: {
    900: '#0B3D2E',
    800: '#12483A',
    700: '#1E614B',
    600: '#2F7D5E',
    500: '#4F9C75',
    100: '#E9F3EE',
    50: '#F4F9F6'
  },
  // Beiges
  beige: {
    50: '#FBF7F0',
    100: '#F5EFE6',
    200: '#EAE1D2'
  },
  // Neutrals
  ink: {
    900: '#0F172A',
    600: '#475569'
  },
  // Accents
  gold: {
    500: '#C8A641',
    100: '#F6EFD5'
  },
  // Semantic Colors
  success: '#2E7D32',
  warning: '#B45309',
  info: '#0369A1',
  error: '#B91C1C'
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.green[700],
      light: colors.green[500],
      dark: colors.green[900],
      contrastText: '#ffffff',
    },
    secondary: {
      main: colors.green[50],
      light: colors.beige[50],
      dark: colors.green[100],
      contrastText: colors.green[900],
    },
    success: {
      main: colors.success,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    error: {
      main: colors.error,
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: colors.green[900],
      secondary: colors.ink[600],
    },
    grey: {
      50: colors.beige[50],
      100: colors.beige[100],
      200: colors.beige[200],
      300: colors.ink[600],
      400: colors.ink[600],
      500: colors.ink[600],
      600: colors.ink[600],
      700: colors.green[700],
      800: colors.green[800],
      900: colors.green[900],
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Segoe UI',
      'Helvetica Neue',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontFamily: [
        'Plus Jakarta Sans',
        'Inter',
        'Segoe UI',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
      ].join(','),
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: [
        'Plus Jakarta Sans',
        'Inter',
        'Segoe UI',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
      ].join(','),
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: [
        'Plus Jakarta Sans',
        'Inter',
        'Segoe UI',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
      ].join(','),
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: [
        'Plus Jakarta Sans',
        'Inter',
        'Segoe UI',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
      ].join(','),
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: [
        'Plus Jakarta Sans',
        'Inter',
        'Segoe UI',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
      ].join(','),
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: [
        'Plus Jakarta Sans',
        'Inter',
        'Segoe UI',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
      ].join(','),
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 3px 0 rgba(11, 61, 46, 0.1), 0 1px 2px -1px rgba(11, 61, 46, 0.1)',
    '0 4px 6px -1px rgba(11, 61, 46, 0.1), 0 2px 4px -2px rgba(11, 61, 46, 0.1)',
    '0 10px 15px -3px rgba(11, 61, 46, 0.1), 0 4px 6px -4px rgba(11, 61, 46, 0.1)',
    '0 20px 25px -5px rgba(11, 61, 46, 0.1), 0 8px 10px -6px rgba(11, 61, 46, 0.1)',
    // ... extend shadows as needed
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
    '0 25px 50px -12px rgba(11, 61, 46, 0.25)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 500,
          padding: '12px 24px',
          transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        contained: {
          boxShadow: '0 1px 3px 0 rgba(11, 61, 46, 0.1), 0 1px 2px -1px rgba(11, 61, 46, 0.1)',
          '&:hover': {
            boxShadow: '0 4px 6px -1px rgba(11, 61, 46, 0.1), 0 2px 4px -2px rgba(11, 61, 46, 0.1)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderWidth: '1px',
          '&:hover': {
            borderWidth: '1px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 1px 3px 0 rgba(11, 61, 46, 0.1), 0 1px 2px -1px rgba(11, 61, 46, 0.1)',
          border: `1px solid ${colors.beige[200]}`,
          transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 4px 6px -1px rgba(11, 61, 46, 0.1), 0 2px 4px -2px rgba(11, 61, 46, 0.1)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontSize: '0.75rem',
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: colors.green[900],
          boxShadow: '0 1px 3px 0 rgba(11, 61, 46, 0.1), 0 1px 2px -1px rgba(11, 61, 46, 0.1)',
          borderBottom: `1px solid ${colors.beige[200]}`,
        },
      },
    },
  },
});

export { colors };