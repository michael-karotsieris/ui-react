import React from 'react';
import { buildTheme, resetCss, GlobalCss, ThemeProvider } from '../src';

const theme = buildTheme({
  colors: {
    brandPrimary: '#4b6cb7',
    brandSecondary: '#182848',
  },
});

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalCss
        theme={theme}
        resetCss={resetCss}
      />
      <div id='themeroot'>
        <Story />
      </div>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  previewTabs: {
    canvas: {
      hidden: true,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', ['Welcome', 'Theming Goals', 'Architecture'], 'Subatoms', ['Colors', 'Dimensions', 'Fonts'], 'Atoms', 'Molecules', 'Organisms'],
    },
  },
};
