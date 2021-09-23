import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { AboutUsHeroSVG } from '@atlascode/frontend-svgs';
import { Box, BoxProps, Container, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
/* eslint-disable-next-line */
export interface AboutUsHeroProps extends BoxProps {}

export function AboutUsHero({ sx, ...rest }: AboutUsHeroProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Container maxWidth="lg" className="AtlasCode-AboutUsHero-root">
        <Box className="AtlasCode-AboutUsHero-grid">
          <Box className="AtlasCode-AboutUsHero-illustration-container">
            <AboutUsHeroSVG
              sx={{ width: 'auto', maxHeight: { xs: '60em' } }}
              className="AtlasCode-AboutUsHero-illustration"
            />
          </Box>
          <Box className="AtlasCode-AboutUsHero-text-container">
            <Typography
              variant="h1"
              className="
              AtlasCode-AboutUsHero-text-title
              "
            >
              Criamos boas experiências digitais.
            </Typography>

            <Typography className="AtlasCode-AboutUsHero-text-aux">
              Ajudamos nossos clientes a apresentarem seus produtos e serviços
              de forma eficiente.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutUsHero;

const defaultStyles = () => {
  return {
    '.AtlasCode-AboutUsHero-root': {
      fontSize: '10px',

      '.AtlasCode-AboutUsHero-grid': {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '50% 50%' },
        gridTemplateRows: { xs: '50% 50%', lg: '1fr' },
        width: '100%',
        height: '100%',
        columnGap: { lg: 5 },
        px: { xs: 1.5 },
      },

      '.AtlasCode-AboutUsHero-illustration-container': {
        p: { lg: 5 },
        order: { xs: 1, lg: 0 },
        display: 'flex',
        justifyContent: { xs: 'center', lg: 'initial' },
      },

      '.AtlasCode-AboutUsHero-illustration': {
        maxHeight: '60em',
        width: { xs: 'auto' },
      },

      '.AtlasCode-AboutUsHero-text-container': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: { xs: 2 },
        textAlign: { sm: 'center', lg: 'initial' },
        order: { xs: 0, lg: 1 },
      },

      '.AtlasCode-AboutUsHero-text-title': {
        fontSize: { xs: '2.4em', lg: '3.8em' },
        fontWeight: 900,
        color: (theme) => theme.palette.secondary.light,
        maxWidth: { lg: '20ch' },
      },

      '.AtlasCode-AboutUsHero-text-aux': {
        fontSize: { xs: '1.6em', lg: '2.2em' },
        fontWeight: 700,
        color: (theme) => theme.palette.secondary.light,
        maxWidth: { lg: '36ch' },
      },
    },
  } as SxProps<Theme>;
};
