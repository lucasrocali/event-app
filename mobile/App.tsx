import React from 'react';
import RootNavigation from './src/navigation'
import { ThemeProvider } from 'styled-components/native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import themes from './src/utils/themes'
import Library from './src/library'
console.disableYellowBox = true

export default function App() {
  let colorScheme = useColorScheme();
  const theme = themes[colorScheme]

  if (__DEV__ && 0) {
    return (
      <Library />
    )
  }
  return (
    <AppearanceProvider>
      <ThemeProvider theme={theme}>
        <RootNavigation theme={theme} />
      </ThemeProvider>
    </AppearanceProvider>
  );
}