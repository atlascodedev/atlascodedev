import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import {
  AWSLogo,
  CloudSectionSVG,
  GoogleCloudLogo,
} from '@atlascode/frontend-svgs';
import { Box, BoxProps, Container, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface CloudPitchSectionProps extends BoxProps {}

export function CloudPitchSection({ sx, ...rest }: CloudPitchSectionProps) {
  return (
    <Box sx={{ ...sx, ...styles.root }} {...rest}>
      <Container sx={styles.grid} maxWidth="lg">
        <Box sx={styles.textContainer}>
          <Typography variant="h2" sx={styles.title}>
            Métodos inteligentes. Melhores resultados.
          </Typography>

          <Typography variant="h4" sx={styles.aux}>
            Seu negócio precisa crescer, mas os custos não. Receba milhares de
            acessos sem ter problemas com servidores ou gastos desnecessários.
          </Typography>

          <Box sx={styles.cloudLogoContainer}>
            <Box sx={styles.cloudLogo}>
              <GoogleCloudLogo sx={styles.logo} />
            </Box>

            <Box sx={styles.cloudLogo}>
              <AWSLogo sx={styles.logo} />
            </Box>
          </Box>
        </Box>

        <Box sx={styles.illustrationContainer}>
          <Box sx={styles.illustration} component={CloudSectionSVG} />
        </Box>
      </Container>
    </Box>
  );
}

export default CloudPitchSection;

const styles = AtlasStylesheet.create({
  root: {
    width: '100%',
    bgcolor: (theme) => theme.palette.secondary.main,
    fontSize: '10px',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '50% 50%' },
    gridAutoFlow: 'row',
    width: '100%',
    height: '100%',
    px: { xs: 4 },
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: { xs: 5 },
  },

  title: {
    fontSize: { xs: '2.2em', lg: '3.8em' },
    fontWeight: 900,
    color: (theme) => theme.palette.secondary.contrastText,
  },

  aux: {
    fontSize: { xs: '1.6em', lg: '2em' },
    fontWeight: 600,
    color: (theme) => theme.palette.secondary.contrastText,
    maxWidth: { xs: '40ch' },
  },

  cloudLogoContainer: {
    display: 'flex',
    gap: { xs: 5 },
  },

  cloudLogo: {
    width: { xs: '12.1em', lg: '16.1em' },
    height: { xs: '7.6em', lg: '10em' },
    borderRadius: '12px',
    bgcolor: (theme) => theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    p: 3,
  },

  logo: {
    width: 'auto',
    maxHeight: '6.5em',
  },

  illustrationContainer: {
    p: { xs: 5 },
  },

  illustration: {},
});
