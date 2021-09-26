import { Theme, Components } from '@mui/material';

export const buttonOverride = (theme: Theme): Components['MuiButton'] => {
  return {
    styleOverrides: {
      root: {
        fontSize: '1em',
        textTransform: 'inherit',
        boxShadow: 'none',
      },

      contained: {
        fontWeight: 800,
        borderRadius: '50px',
        padding: '0.8em 4em',
      },

      outlinedPrimary: {
        border: `2px solid ${theme.palette.primary.main}`,
        fontWeight: 500,
        borderRadius: '50px',
        padding: '0.8em 2.8em',
      },

      text: {
        padding: '0.3em 1.5em',
        fontWeight: 750,
      },

      textSecondary: {
        color: theme.palette.secondary.main,
      },
    },
  };
};

export const buttonBaseOverride = (
  theme: Theme
): Components['MuiButtonBase'] => {
  return {
    styleOverrides: {
      root: {
        fontSize: '1em',
      },
    },
  };
};

export default buttonOverride;
