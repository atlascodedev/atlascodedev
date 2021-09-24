import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@emotion/cache';
import { ThemeProvider } from '@atlascode/frontend-theme';
import { AppLayout } from '@atlascode/frontend-components';

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
        <title>Welcome to frontend!</title>
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider>
          <AppLayout>
            <div className="app">
              <Component {...pageProps} />
            </div>
          </AppLayout>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default CustomApp;

// Front simples para landing -
// Front com painel - Nextjs + Painel dinâmico  + Instanciar EC2 ou equivalente na nuvem e rodar imagem do POSTGRES
