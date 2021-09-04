import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { StatusBar } from 'react-native'
import Routes from './routes'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#3636dd" />
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
