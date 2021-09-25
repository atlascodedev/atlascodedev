import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@emotion/cache';
import { ThemeProvider } from '@atlascode/frontend-theme';
import { AppLayout } from '@atlascode/frontend-components';
import { MotionBox } from '@atlascode/frontend-utility';

function CustomApp(props: AppProps & { emotionCache?: EmotionCache }) {
  const clientSideCache = createEmotionCache({ key: 'css' });
  const {
    Component,
    pageProps,
    emotionCache = clientSideCache,
    router,
  } = props;

  return (
    <>
      <Head>
        <title>{'AtlasCode - Desenvolvimento & Estratégia'}</title>
        <meta
          property="og:title"
          content="AtlasCode - Desenvolvimento de web e estratégia de marketing digital ."
        />
        <meta
          property="og:description"
          content="O AtlasCode utilizas as melhores tecnologias do mercado a fim de proporcionar uma experiência diferenciada para seus clientes. A empresa conta com especialistas na área do desenvolvimento de web, e-commerce e aplicativos mobile e com consultores de marketing digital que lhe auxiliarão em seu projeto do começo ao fim, seja no planejamento e na estratégia de sua marca, quanto no desenvolvimento de seu produto."
        />
        <meta
          name="description"
          content="O AtlasCode utilizas as melhores tecnologias do mercado a fim de proporcionar uma experiência diferenciada para seus clientes. A empresa conta com especialistas na área do desenvolvimento de web, e-commerce e aplicativos mobile e com consultores de marketing digital que lhe auxiliarão em seu projeto do começo ao fim, seja no planejamento e na estratégia de sua marca, quanto no desenvolvimento de seu produto."
        />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider>
          <MotionBox
            animate="visible"
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                zIndex: 3000,
              },
              hidden: {
                opacity: 0,
                zIndex: -1,
              },
            }}
            transition={{
              duration: 1,
            }}
            sx={{ width: '100%', height: '100%' }}
            key={router.route}
          >
            <AppLayout>
              <div className="app">
                <Component {...pageProps} />
              </div>
            </AppLayout>
          </MotionBox>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default CustomApp;

// Front simples para landing -
// Front com painel - Nextjs + Painel dinâmico  + Instanciar EC2 ou equivalente na nuvem e rodar imagem do POSTGRES
