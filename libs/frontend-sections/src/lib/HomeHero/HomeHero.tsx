import {
  Box,
  BoxProps,
  Button,
  Container,
  Theme,
  Typography,
} from '@mui/material';
import { HomeHeroIllustration } from '@atlascode/frontend-svgs';
import { SxProps } from '@mui/system';
import { polkaPattern } from '@atlascode/frontend-jss-mixins';
import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
/* eslint-disable-next-line */
export interface HomeHeroProps extends BoxProps {
  ctaAction: (...args: unknown[]) => void;
}

export function HomeHero({ sx, ctaAction, ...rest }: HomeHeroProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box {...rest} sx={defaultStylesMemo}>
      <Container className="root-container" maxWidth="lg">
        <Box className="grid">
          <Box className="cta-container">
            <Typography className="cta-main-text" variant="h1">
              Criação de websites, aplicativos e campanhas para mídias sociais.
            </Typography>

            <Typography className="cta-aux-text" variant="h3">
              Alcance e conquiste mais clientes apresentando o seu negócio de
              forma estratégica para o mercado.
            </Typography>

            <Button
              className="cta-button"
              fullWidth={false}
              variant="contained"
              color="primary"
              onClick={ctaAction}
            >
              Nossos serviços
            </Button>
          </Box>
          <Box className="illustration-container">
            <HomeHeroIllustration className="illustration" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HomeHero;

const defaultStyles = () => {
  return {
    position: 'relative',
    fontSize: '10px',

    '.root-container': {
      p: { xs: '3em' },
      mt: { xs: '4em' },
    },

    '.grid': {
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', lg: '50% 50%' },
      gridTemplateRows: { xs: '50% 50%', lg: '1fr' },
      height: '100%',
      alignContent: 'center',
      gap: { xs: 3 },
      justifyItems: { xs: 'stretch', sm: 'center', lg: 'stretch' },
    },

    '.cta-container': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: { xs: 'center', lg: 'center' },
      gap: { xs: 3, lg: 5 },
    },

    '.cta-main-text': {
      maxWidth: { xs: '22ch', lg: '22ch' },
      fontSize: { xs: '2.4em', lg: '3.8em' },
      fontWeight: 900,
      color: (theme) => theme.palette.secondary.main,
    },

    '.cta-aux-text': {
      maxWidth: { xs: '36ch', lg: '36ch' },
      fontSize: { xs: '1.6em', lg: '2.2em' },
      fontWeight: 600,
      color: (theme) => theme.palette.secondary.light,
      lineHeight: '1.5em',
    },

    '.cta-button': {
      width: 'fit-content',
      fontSize: { xs: '1.2em', lg: '1.4em' },
    },

    '.illustration-container': {
      p: { xs: 3, lg: 1 },
    },

    '.illustration': {
      width: '100%',
      height: 'auto',
    },

    '.background-pattern': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: -1,
      // ...(polkaPattern('#fff', 0.35, 50, '#333') as Record<string, unknown>),
    },
  } as SxProps<Theme>;
};
