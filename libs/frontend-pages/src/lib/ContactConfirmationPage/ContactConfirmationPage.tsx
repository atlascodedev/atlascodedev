import { LottieAnimation } from '@atlascode/frontend-utility';
import { Box, BoxProps, Button, Container, Typography } from '@mui/material';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import data from './data.json';

/* eslint-disable-next-line */
export interface ContactConfirmationPageProps {}

export function ContactConfirmationPage(props: ContactConfirmationPageProps) {
  return (
    <Box sx={styles.root}>
      <Container sx={styles.container} maxWidth="lg">
        <LottieAnimation sx={styles.lottie} animationData={data} />

        <Box sx={styles.textContainer}>
          <Typography variant="h1" sx={styles.title}>
            Contato efetuado.
          </Typography>

          <Typography sx={styles.aux} variant="h2">
            Seu contato foi enviado com sucesso, retornaremos em breve. Obrigado
            pelo interesse!
          </Typography>

          <Button sx={styles.button} color="primary" variant="outlined">
            Voltar à página principal
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactConfirmationPage;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    pb: { xs: 2 },
  },

  lottie: {
    height: { xs: 'auto' },
    width: { xs: '30em', lg: '50em' },
  },

  textContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    pb: { xs: 6 },
    gap: { xs: 5 },
    transform: { xs: 'translateY(-35px)', lg: 'translateY(-100px)' },
  },

  title: {
    color: (theme) => theme.palette.secondary.light,
    fontWeight: 900,
    fontSize: { xs: '2.4em', lg: '3.8em' },
  },

  aux: {
    color: (theme) => theme.palette.secondary.light,
    fontWeight: 600,
    fontSize: { xs: '1.6em', lg: '2.4em' },
    maxWidth: { xs: '32ch' },
  },

  button: {
    fontSize: { xs: '1.3em' },
  },
});
