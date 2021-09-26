/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Container,
  Typography,
} from '@mui/material';
import data from './data.json';
import { LottieAnimation } from '@atlascode/frontend-utility';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';

export interface NotFoundPageProps extends BoxProps {
  RedirectButtonProps?: ButtonProps;
}

export function NotFoundPage({
  sx,
  RedirectButtonProps,
  ...rest
}: NotFoundPageProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Container maxWidth="lg" sx={styles.container}>
        <Box sx={styles.lottieContainer}>
          <LottieAnimation animationData={data} sx={styles.lottie} />
        </Box>

        <Typography variant="h1" sx={styles.title}>
          Página não encontrada.
        </Typography>

        <Typography variant="caption" sx={styles.aux}>
          Parece que não tem nada por aqui. Clique no botão para ser direcionado
          à página principal ou navega utilizando o menu.
        </Typography>

        <Button
          {...RedirectButtonProps}
          size="small"
          sx={styles.button}
          variant="outlined"
        >
          Voltar
        </Button>
      </Container>
    </Box>
  );
}

export default NotFoundPage;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
  },

  aux: {
    color: (theme) => theme.palette.secondary.light,
    fontWeight: 600,
    fontSize: { xs: '1.6em', lg: '1.85em' },
    maxWidth: { xs: '32ch' },
  },

  button: {
    fontSize: { xs: '1.5em' },
    padding: { xs: '0.6em 4.5em' },
  },

  title: {
    fontSize: { xs: '1.85em', lg: '2.5em' },
    lineHeight: { xs: '1.55em' },
    color: (theme) => theme.palette.secondary.light,
    maxWidth: { xs: '30ch' },
    fontWeight: 900,
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    py: { xs: '3em', lg: '5em' },
    gap: { xs: '3em', lg: '5em' },
  },

  lottieContainer: {
    position: 'relative',
    width: { xs: '30em', lg: '45em' },
    height: { xs: '20em', lg: '30em' },
  },

  lottie: {
    height: { xs: '100%' },
    width: { xs: '100%' },
    position: 'absolute',
  },
});
