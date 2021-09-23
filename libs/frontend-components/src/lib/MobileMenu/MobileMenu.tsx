import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { SwipeableDrawer, Paper, Box, Button } from '@mui/material';
import React from 'react';
import { AtlasLogo } from '@atlascode/frontend-svgs';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MobileMenuProps {
  open?: boolean;
}

const ITEMS = ['Hello', 'World', 'Its me', 'Ok'];

export const MobileMenu = ({ open = false }: MobileMenuProps) => {
  return (
    <SwipeableDrawer
      sx={styles.root}
      onClose={() => console.log('hello')}
      onOpen={() => console.log('open')}
      open={open}
      anchor="left"
    >
      <Box sx={styles.container} component={Paper} elevation={0}>
        <Box component={Paper} elevation={5} sx={styles.logoContainer}>
          <AtlasLogo sx={styles.logo} />
        </Box>

        <Box sx={styles.list}>
          {ITEMS.map((value, index) => {
            return (
              <Button
                sx={styles.listItem}
                key={index}
                variant="text"
                color="secondary"
                fullWidth
              >
                {value}
              </Button>
            );
          })}
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};

export default MobileMenu;

const styles = AtlasStylesheet.create({
  logo: {
    width: '100%',
  },

  listItem: {
    py: { xs: 3 },
    fontWeight: 900,
    color: (theme) => theme.palette.secondary.light,
    fontSize: { xs: '2.5em' },
  },

  listIcon: {
    fontSize: { xs: '1em' },
  },

  logoContainer: {
    width: '100%',
    height: { xs: '10em' },
    p: { xs: '2.5em' },
  },

  root: {
    fontSize: '10px',
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
  },
  container: {
    height: '100%',
    maxWidth: { xs: '30em' },
  },
});
