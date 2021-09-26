import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { BoxProps, Theme, Box } from '@mui/material';
import { SxProps } from '@mui/system';
import { AtlasLogoMinimal } from '@atlascode/frontend-svgs';
import { CircleIconButton } from '../CircleIconButton/CircleIconButton';
import { Facebook, Instagram } from '@mui/icons-material';

/* eslint-disable-next-line */
export interface FooterProps extends BoxProps {
  facebookURL?: string;
  instagramURL?: string;
  footerNavigation?: Array<{
    label: string;
    action: (...args: unknown[]) => void;
  }>;
}

export function Footer({
  sx,
  facebookURL = 'https://facebook.com',
  instagramURL = 'https://instagram.com',
  footerNavigation = [],
  ...rest
}: FooterProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Box className="grid">
        <Box className="footer-item-list">
          <FooterItem className="primary">Navegação</FooterItem>
          {footerNavigation.map((value, index) => {
            return (
              <FooterItem onClick={value.action} key={index}>
                {value.label}
              </FooterItem>
            );
          })}
        </Box>
        <Box className="footer-item-list">
          <FooterItem className="primary">Especialistas em</FooterItem>
          <FooterItem>Arquitetura da informação</FooterItem>
          <FooterItem>Branding</FooterItem>
          <FooterItem>Desenvolvimento de websites</FooterItem>
          <FooterItem>Desenvolvimento de aplicativos</FooterItem>
          <FooterItem>Experiência do usuário</FooterItem>
        </Box>
        <Box className="footer-item-list extra-gap">
          <FooterItem className="primary">Segue ae!</FooterItem>
          <Box className="footer-socials-icon-container">
            <a href={facebookURL} rel="noopener noreferrer" target="_blank">
              <CircleIconButton icon={Facebook} color="secondary" />
            </a>

            <a href={instagramURL} rel="noopener noreferrer" target="_blank">
              <CircleIconButton icon={Instagram} color="secondary" />
            </a>
          </Box>

          <Box className="footer-contact-email">atendimento@atlascode.dev</Box>
        </Box>
      </Box>
      <Box className="footer-logo">
        <AtlasLogoMinimal sx={{ width: '3.7em', height: 'auto' }} />
      </Box>
    </Box>
  );
}

export default Footer;

const FooterItem = ({ className, ...props }: BoxProps) => {
  return (
    <Box
      className={[...(className?.split(' ') ?? []), 'footer-item'].join(' ')}
      {...props}
    />
  );
};

const defaultStyles = () => {
  return {
    fontSize: '10px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: (theme) => theme.palette.secondary.main,
    borderRadius: '50px 50px 0px 0px',

    '@media (min-width: 1024px)': {
      borderRadius: '100px 100px 0px 0px',
    },

    '.footer-socials-icon-container': {
      display: 'flex',
      gap: 3,
    },

    '.footer-contact-email': {
      color: (theme) => theme.palette.secondary.contrastText,
      fontWeight: 800,
      fontSize: { xs: '1.8em', md: '2em' },
    },

    '.footer-item-list': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      py: 6.5,
      cursor: 'pointer',

      '@media (min-width: 1024px)': {
        alignItems: 'flex-start',
      },

      '&.extra-gap': {
        gap: 4,
      },
    },

    '.footer-item': {
      fontSize: { xs: '1.6em' },
      fontWeight: 'bold',
      color: (theme) => theme.palette.secondary.contrastText,

      '&.primary': {
        fontSize: { xs: '1.4em' },
        fontWeight: 800,
        color: (theme) => theme.palette.primary.main,
        textTransform: 'uppercase',
      },
    },

    '.footer-logo': {
      display: 'flex',
      width: '92%',
      borderTop: (theme) => `0.5px solid ${theme.palette.grey[500]}`,
      alignItems: 'center',
      justifyContent: 'center',
      py: 4,
      m: 'auto',
    },

    '.grid': {
      borderRadius: 'inherit',
      display: 'grid',
      gridTemplateRows: 'auto',
      gridTemplateColumns: '1fr',
      gridAutoFlow: 'row',
      width: '100%',
      height: '100%',

      '@media (min-width: 1024px)': {
        gridTemplateColumns: '33.333% 33.333% 33.333%',
        gridTemplateRows: '1fr',
        justifyItems: 'center',
      },
    },
  } as SxProps<Theme>;
};
