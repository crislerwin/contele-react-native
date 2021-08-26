import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme } from './theme'
import 'react-native-gesture-handler';
import { Home } from './pages/Home';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { Routes } from './routes';

export const App: React.FC<{}> = () => {
  return (
    <NavigationContainer>
    <ThemeProvider theme={theme}>
       <StatusBar barStyle="default" backgroundColor="#5a11eb"  />
     <Home />
    </ThemeProvider>
    </NavigationContainer>
  );
   
};