import React from 'react';
import RootNavigation from './src/navigation/RootNavigation'
import { ThemeProvider } from 'styled-components/native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import themes from './src/utils/themes'

export default function App() {
  let colorScheme = useColorScheme();
  const theme = themes[colorScheme]
  return (
    <AppearanceProvider>
      <ThemeProvider theme={theme}>
        <RootNavigation />
      </ThemeProvider>
    </AppearanceProvider>
  );
}