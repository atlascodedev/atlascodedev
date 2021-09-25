import { WhatsAppButton } from '../WhatsAppButton/WhatsAppButton';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { AtlasLoader } from '../AtlasLoader/AtlasLoader';
import {
  AtlasStylesheet,
  scrollToElem,
  redirectToWhatsapp,
} from '@atlascode/frontend-helpers';
import { Box } from '@mui/material';
import { polkaPattern } from '@atlascode/frontend-jss-mixins';
import {
  HideOnScroll,
  MotionBox,
  ScrollBackTop,
} from '@atlascode/frontend-utility';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { alertStore } from '@atlascode/frontend-utility';

/* eslint-disable-next-line */
export interface AppLayoutProps {
  children?: React.ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
  const [loader, setLoader] = React.useState<boolean>(true);
  const [mobileMenuVisibility, setMobileMenuVisibility] =
    React.useState<boolean>(false);

  const toggleMobileMenuVisibility = (open: boolean) => {
    setMobileMenuVisibility(open);
  };

  const router = useRouter();

  const handleMenuClick = (id?: string, link?: string) => {
    if (router.route === '/' && id) {
      scrollToElem(id);
    } else if (router.route === '/' && link) {
      router.push(link);
    } else if (router.route !== '/' && id) {
      router.push('/');
      router.events.on('routeChangeComplete', () => {
        scrollToElem(id);
      });
    } else if (router.route !== '/' && !id && !link) {
      router.push('/');
    } else {
      _.noop();
    }
  };

  React.useEffect(() => {
    if (typeof window !== undefined) {
      setTimeout(() => {
        setLoader(false);
      }, 3500);
    }
  }, []);

  const NAVIGATION_ITEMS_REF = React.useRef([
    {
      action: () => handleMenuClick(undefined, 'sobre-nos'),
      label: 'Sobre nós',
    },
    {
      action: () => handleMenuClick('#services'),
      label: 'Serviços',
    },
    { action: () => handleMenuClick('#projects'), label: 'Projetos' },
    {
      action: () => handleMenuClick(undefined, 'contato'),
      label: 'Contato',
    },
  ]);

  return (
    <React.Fragment>
      <AnimatePresence>
        {loader && router.route === '/' && (
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
            logoClick={() => {
              router.route === '/'
                ? scrollToElem('#back-to-top-anchor')
                : router.push('/');
            }}
            callToActionButton={{
              action: () => handleMenuClick(undefined, 'contato'),
              label: 'Faça seu orçamento',
            }}
            AnimatedBurguerMenuProps={{
              colorOpen: '#333',
              colorClosed: '#333',
              fontSize: '4px',
              open: mobileMenuVisibility,
              onClick: () => toggleMobileMenuVisibility(!mobileMenuVisibility),
            }}
            menuItems={NAVIGATION_ITEMS_REF.current}
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
      <MobileMenu
        open={mobileMenuVisibility}
        onClose={() => toggleMobileMenuVisibility(false)}
        onOpen={() => toggleMobileMenuVisibility(true)}
        menuItems={NAVIGATION_ITEMS_REF.current}
      />
      <WhatsAppButton
        onClick={() =>
          redirectToWhatsapp(
            '5551984773704',
            'Olá, estou vindo através do website e gostaria de mais informações.'
          )
        }
        color="secondary"
      />
      <Footer
        instagramURL="https://www.instagram.com/atlascode/?hl=pt-br"
        facebookURL="https://www.facebook.com/atlascodedev"
        footerNavigation={NAVIGATION_ITEMS_REF.current}
      />
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
