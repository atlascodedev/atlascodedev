import {
  AtlasLoader,
  Footer,
  Header,
  WhatsAppButton,
} from '@atlascode/frontend-components';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { Box } from '@mui/material';
import { polkaPattern } from '@atlascode/frontend-jss-mixins';
import {
  HideOnScroll,
  MotionBox,
  ScrollBackTop,
} from '@atlascode/frontend-utility';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
/* eslint-disable-next-line */
export interface AppLayoutProps {
  children?: React.ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
  const [loader, setLoader] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (typeof window !== undefined) {
      setTimeout(() => {
        setLoader(false);
      }, 3500);
    }
  }, []);

  return (
    <React.Fragment>
      <AnimatePresence>
        {loader && (
          <MotionBox
            onAnimationStart={() =>
              (window.document.body.style.overflow = 'hidden')
            }
            onAnimationComplete={() =>
              (window.document.body.style.overflow = 'unset')
            }
            zIndex={50000}
            position="fixed"
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            top={0}
            left={0}
            initial="visible"
            exit="hidden"
            variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
          >
            <AtlasLoader />
          </MotionBox>
        )}
      </AnimatePresence>

      <div
        id="back-to-top-anchor"
        style={{ position: 'absolute', top: 0, left: 0 }}
      ></div>
      <HideOnScroll>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 10,
          }}
        >
          <Header
            callToActionButton={{
              action: () => console.log('hello world'),
              label: 'Faça seu orçamento',
            }}
            menuItems={[
              {
                action: () => console.log('clicked'),
                label: 'Sobre nós',
              },
              { action: () => console.log('clicked'), label: 'Serviços' },
              { action: () => console.log('clicked'), label: 'Projetos' },
              { action: () => console.log('clicked'), label: 'Blog' },
              { action: () => console.log('clicked'), label: 'Contato' },
            ]}
          />
        </div>
      </HideOnScroll>
      <Box
        sx={{
          height: '9em',
          fontSize: '10px',
          visibility: 'hidden',
          opacity: 0,
          width: '100%',
        }}
      />
      <ScrollBackTop />
      {props.children}
      <Box sx={styles.bgPattern} />
      <WhatsAppButton color="secondary" />
      <Footer />
    </React.Fragment>
  );
}
export default AppLayout;

const styles = AtlasStylesheet.create({
  bgPattern: {
    position: 'fixed',
    width: '100%',
    height: '150vh',
    top: 0,
    left: 0,
    zIndex: -1,
    ...(polkaPattern('#fff', 0.275, 25, '#333') as Record<string, unknown>),
  },
});
