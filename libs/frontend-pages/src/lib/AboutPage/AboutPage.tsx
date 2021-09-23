import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { Box, BoxProps, Button, Typography } from '@mui/material';
import {
  AboutUsHero,
  AssociatesSection,
  DefenseSectionAux,
  TechnologiesSlider,
  WorkflowSection,
} from '@atlascode/frontend-sections';

/* eslint-disable-next-line */
export interface AboutPageProps {}

const employees = {
  employee3: {
    role: 'Desenvolvedor Full Stack',
    img: 'images/aleks.png',
  },
  employee2: {
    role: 'UI/UX Designer',
    img: 'images/alex.png',
  },
  employee1: {
    role: 'Desenvolvedor Full Stack',
    img: 'images/kadu.png',
  },
};

export function AboutPage(props: AboutPageProps) {
  return (
    <Box>
      <AboutUsHero sx={styles.aboutUsHero} />
      <AssociatesSection {...employees} sx={styles.associatesSection} />
      <DefenseSectionAux sx={styles.defenseSectionAux} />
      <Box sx={styles.techSlider}>
        <Typography variant="h3" sx={styles.techTitle}>
          Tecnologias que utilizamos
        </Typography>
        <TechnologiesSlider />
      </Box>

      <WorkflowSection sx={styles.workflowSection} />

      <Box sx={styles.endCtaContainer}>
        <Typography sx={styles.endCtaTitle} variant="h2">
          Ficou interessado? Vamos trabalhar juntos.
        </Typography>

        <Button sx={styles.endCtaButton} variant="outlined" color="primary">
          Fale conosco
        </Button>
      </Box>
    </Box>
  );
}

export default AboutPage;

const styles = AtlasStylesheet.create({
  endCtaContainer: {
    display: 'flex',
    textAlign: 'center',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '10px',
    gap: { xs: 5 },
    my: { xs: 15 },
  },

  endCtaTitle: {
    fontSize: { xs: '2.4em', lg: '3.8em' },
    fontWeight: 900,
    color: (theme) => theme.palette.secondary.light,
    maxWidth: { xs: '24ch' },
  },

  endCtaButton: {
    fontSize: { xs: '1.8em' },
  },

  workflowSection: {
    mt: { xs: 10 },
  },

  aboutUsHero: {
    py: { xs: 0, lg: 10 },
    pb: { xs: 10 },
  },

  associatesSection: {
    mt: { xs: 10 },
  },

  defenseSectionAux: {
    mt: { xs: 10 },
  },

  techSlider: {
    mt: { xs: 10 },
    py: { xs: 10 },
    bgcolor: (theme) => theme.palette.secondary.main,
    fontSize: '10px',
  },

  techTitle: {
    py: { xs: 5 },
    fontSize: { xs: '2.4em', lg: '3.8em' },
    color: (theme) => theme.palette.secondary.contrastText,
    fontWeight: 900,
    textAlign: 'center',
  },
});
