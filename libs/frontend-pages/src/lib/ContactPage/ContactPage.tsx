import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { ContactSection } from '@atlascode/frontend-sections';
import { Box } from '@mui/material';

/* eslint-disable-next-line */
export interface ContactPageProps {}

export function ContactPage(props: ContactPageProps) {
  return (
    <Box sx={styles.root}>
      <ContactSection />
    </Box>
  );
}

export default ContactPage;

const styles = AtlasStylesheet.create({
  root: {
    pt: { xs: 3, lg: 8 },
    pb: { xs: 15 },
  },
});
