import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { AboutPage } from '@atlascode/frontend-pages';
import { useRouter } from 'next/router';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AboutUsPageProps {}

const AboutUsPage = (props: AboutUsPageProps) => {
  const router = useRouter();

  return (
    <Box sx={styles.root}>
      <AboutPage
        CallToActionButtonProps={{
          onClick: () => router.push('/contato'),
        }}
      />
    </Box>
  );
};

export default AboutUsPage;

const styles = AtlasStylesheet.create({
  root: {},
});
