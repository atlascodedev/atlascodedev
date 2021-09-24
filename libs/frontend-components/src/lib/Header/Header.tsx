import { SxProps } from '@mui/system';
import { Box, BoxProps, Button, Paper, Theme } from '@mui/material';
import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { AtlasLogo } from '@atlascode/frontend-svgs';
import React from 'react';
import AnimatedBurguerMenu, {
  KotaBurguerProps,
} from '../AnimatedBurguerMenu/AnimatedBurguerMenu';

export type MenuItem = {
  action: (...args: unknown[]) => void;
  label: string;
};

/* eslint-disable-next-line */
export interface HeaderProps extends BoxProps<typeof Paper> {
  menuItems: MenuItem[];
  callToActionButton: MenuItem;
  AnimatedBurguerMenuProps?: KotaBurguerProps;
}

export function Header({
  sx,
  elevation = 1,
  menuItems = [],
  callToActionButton = {
    action: () => console.log('Button was clicked'),
    label: 'Faça seu orçamento',
  },
  AnimatedBurguerMenuProps = {
    fontSize: '6px',
  },
  ...rest
}: HeaderProps) {
  const defaultStylesMemoized = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box
      {...rest}
      elevation={elevation}
      component={Paper}
      sx={defaultStylesMemoized}
    >
      <Box className="grid-container">
        <Box className="logo-container">
          <AtlasLogo className="logo" />
        </Box>

        <Box className="burguer-container">
          <AnimatedBurguerMenu {...AnimatedBurguerMenuProps} />
        </Box>

        <Box className="menu-items-container">
          {menuItems &&
            menuItems.map(({ action, label }, index) => {
              return (
                <Button
                  variant="text"
                  className="menu-item"
                  key={index}
                  onClick={action}
                  color="secondary"
                >
                  {label}
                </Button>
              );
            })}
        </Box>

        <Box className="cta-container">
          <Button
            className="cta-button"
            onClick={callToActionButton.action}
            variant="outlined"
            color="primary"
          >
            {callToActionButton.label}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

const defaultStyles = () => {
  return {
    fontSize: '10px',
    height: '9em',
    width: '100%',

    '.burguer-container': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '@media (min-width: 1024px)': {
        display: 'none',
      },
    },

    '.grid-container': {
      display: 'grid',
      width: '100%',
      height: '100%',
      gridTemplateColumns: '70% 30%',
      gridTemplateRows: '1fr',
      py: 1.5,

      '@media(min-width: 1024px)': {
        gridTemplateColumns: '22.5% 55% 22.5%',
      },
    },

    '.logo-container': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      pl: 2.5,

      '@media (min-width: 1024px)': {
        justifyContent: 'center',
        px: 1,
        pl: 0,
      },
    },

    '.logo': {
      width: '14em',
      height: 'auto',

      '@media (min-width: 1024px)': {
        width: '19em',
      },
    },

    '.menu-items-container': {
      alignItems: 'center',
      display: 'none',
      justifyContent: 'center',
      gap: 2,

      '@media (min-width: 1024px)': {
        display: 'flex',
      },
    },

    '.menu-item': {
      fontSize: '1.75em',
      height: 'fit-content',
    },

    '.cta-container': {
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',

      '@media (min-width: 1024px)': {
        display: 'flex',
      },
    },

    '.cta-button': {
      fontSize: '1.5em',
    },
  } as SxProps<Theme>;
};
