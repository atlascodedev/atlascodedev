import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Container, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { LottieAnimation } from '@atlascode/frontend-utility';
import data from './data.json';

/* eslint-disable-next-line */
export interface DefenseSectionAuxProps extends BoxProps {}

export function DefenseSectionAux({ sx, ...rest }: DefenseSectionAuxProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Container className="AtlasCode-DefenseCardSectionAux-root">
        <Box className="grid">
          <Box className="lottie-container">
            <LottieAnimation
              width={{ xs: '30em', lg: '52.5em' }}
              height={'auto'}
              animationData={data}
            />
          </Box>
          <Box className="text-container">
            <Typography className="text-title" variant="h2">
              Onde quer que você esteja, podemos trabalhar juntos.
            </Typography>
            <Typography className="text-aux" variant="h4">
              Nós trabalhamos de forma remota, e como valorizamos o
              relacionamento com nossos clientes e parceiros, nos adaptamos a
              sua realidade, onde quer que esteja.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default DefenseSectionAux;

const defaultStyles = () => {
  return {
    '.AtlasCode-DefenseCardSectionAux-root': {
      width: '100%',
      fontSize: '10px',
      color: (theme) => theme.palette.secondary.main,
      px: { xs: 3 },

      '.grid': {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '50% 50%' },
        gridAutoFlow: 'row',
        columnGap: { lg: 8 },
        rowGap: { xs: 3 },
        justifyItems: { xs: 'initial', sm: 'center', md: 'initial' },
      },

      '.lottie-container': {
        display: 'flex',
        justifyContent: 'center',
        order: { xs: 1, lg: 0 },
      },

      '.lottie': {},

      '.text-container': {
        display: 'flex',
        flexDirection: 'column',
        rowGap: { xs: 5 },
        justifyContent: { xs: 'center' },
        order: { xs: 0, lg: 1 },
      },

      '.text-title': {
        fontWeight: 900,
        fontSize: { xs: '2.4em', lg: '3.2em' },
        maxWidth: { xs: '26ch' },
        color: (theme) => theme.palette.secondary.light,
      },

      '.text-aux': {
        fontWeight: 600,
        fontSize: { xs: '1.6em', lg: '2em' },
        maxWidth: { xs: '36ch' },
        color: (theme) => theme.palette.secondary.light,
      },
    },
  } as SxProps<Theme>;
};
