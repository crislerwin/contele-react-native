import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme } from './theme'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Routes } from './routes';
import 'react-native-gesture-handler';

export const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
    <NavigationContainer>
    <StatusBar barStyle="default" backgroundColor="#cfc4e4" translucent />
    <Routes />
    </NavigationContainer>;
    </ThemeProvider>
  );
   
};