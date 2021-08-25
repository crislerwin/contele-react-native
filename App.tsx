import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme } from './src/theme'
import { Home } from './src/Home';

export const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};