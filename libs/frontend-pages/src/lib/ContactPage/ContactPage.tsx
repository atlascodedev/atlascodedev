import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import {
  ContactSection,
  ContactSectionProps,
} from '@atlascode/frontend-sections';
import { Box } from '@mui/material';

/* eslint-disable-next-line */
export interface ContactPageProps extends ContactSectionProps {}

export function ContactPage(props: ContactPageProps) {
  return (
    <Box sx={styles.root}>
      <ContactSection {...props} />
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
