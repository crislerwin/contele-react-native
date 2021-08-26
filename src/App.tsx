import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme';
import {StatusBar} from 'react-native';
import Routes from './routes';

export const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="default" backgroundColor="#5a11eb" />
      <Routes />
    </ThemeProvider>
  );
};
