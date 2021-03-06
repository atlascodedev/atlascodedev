import React from 'react';
import { ThemeProvider } from '../libs/frontend-theme/src/lib/ThemeProvider/ThemeProvider';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      brazilDesktop1: {
        name: 'Desktop - 1#',
        styles: {
          width: '1366px',
          height: '768px',
        },
      },

      brazilDesktop2: {
        name: 'Desktop - 2#',
        styles: {
          width: '1920px',
          height: '1080px',
        },
      },

      brazilPhone1: {
        name: 'Mobile - 1#',
        styles: {
          width: '360px',
          height: '640px',
        },
      },

      brazilPhone2: {
        name: 'Mobile - 2#',
        styles: {
          width: '414px',
          height: '896px',
        },
      },

      ipad: {
        name: 'iPad',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },

      ipadPro: {
        name: 'iPad - Pro',
        styles: {
          width: '1024px',
          height: '1366px',
        },
      },
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Do not use JSX as it is not picked up by Babel during webpack bundling time, preventing us from directly importing this file inside our local storybook preview file within individual libraries. 
const withTheme = (StoryFn, context) =>  React.createElement(ThemeProvider, {}, StoryFn())

export const decorators = [withTheme];
