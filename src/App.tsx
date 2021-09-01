import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme';
import {StatusBar} from 'react-native';
import Routes from './routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App: React.FC<{}> = () => {
  return (
    <SafeAreaProvider>
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="default" backgroundColor="#4308ba" />
      <Routes />
    </ThemeProvider>
    </SafeAreaProvider>
  );
};
