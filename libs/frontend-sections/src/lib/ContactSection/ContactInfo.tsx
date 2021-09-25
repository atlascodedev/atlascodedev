import { CircleIconButton } from '@atlascode/frontend-components';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box, BoxProps } from '@mui/system';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContactInfoProps extends BoxProps {
  facebookURL?: string;
  instagramURL?: string;
  whatsAppURL?: string;
}

const ContactInfo = ({
  sx,
  facebookURL,
  instagramURL,
  whatsAppURL,
  ...rest
}: ContactInfoProps) => {
  return (
    <Box sx={{ ...sx, ...styles.root }} {...rest}>
      <Box sx={styles.container}>
        <Typography sx={styles.title} variant="h2">
          Porto Alegre
        </Typography>
        <Typography sx={styles.info} variant="h4">
          {'(51) 9-8477-3704'}
        </Typography>
      </Box>

      <Box sx={styles.container}>
        <Typography sx={styles.title} variant="h2">
          São Paulo
        </Typography>
        <Typography sx={styles.info} variant="h4">
          {'(51) 9-8477-3704'}
        </Typography>
      </Box>

      <Typography variant="h2" sx={styles.email}>
        atendimento@atlascode.dev
      </Typography>

      <Box sx={styles.socialContainer}>
        <a href={instagramURL} rel="noopener noreferrer" target="_blank">
          <CircleIconButton
            inverted
            color="secondary"
            elevation={1}
            icon={Instagram}
            sx={styles.icon}
          />
        </a>
        <a href={facebookURL} rel="noopener noreferrer" target="_blank">
          <CircleIconButton
            inverted
            color="secondary"
            elevation={1}
            icon={Facebook}
            sx={styles.icon}
          />
        </a>
        <a href={whatsAppURL} rel="noopener noreferrer" target="_blank">
          <CircleIconButton
            inverted
            color="secondary"
            elevation={1}
            icon={WhatsApp}
            sx={styles.icon}
          />
        </a>
      </Box>
    </Box>
  );
};

export default ContactInfo;

const styles = AtlasStylesheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '10px',
    justifyContent: { xs: 'flex-start' },
    gap: { xs: '6em' },
    height: '100%',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 1 },
  },

  title: {
    fontSize: { xs: '2.6em' },
    color: (theme) => theme.palette.secondary.main,
    fontWeight: 900,
  },
  info: {
    fontSize: { xs: '2em' },
    color: (theme) => theme.palette.secondary.light,
  },

  email: {
    fontSize: { xs: '1.8em', lg: '2.2em' },
    color: (theme) => theme.palette.primary.main,
    fontWeight: 900,
  },

  socialContainer: {
    display: 'flex',
    gap: { xs: 3 },
  },

  icon: {
    fontSize: { xs: '1em' },
  },
});
