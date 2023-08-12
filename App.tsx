import {
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import PointsProvider from './src/context/points/State';
import MainStack from './src/navigators/MainNavBar';
import ThemeProvider from './src/theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer theme={theme}>
        <PointsProvider>
          <MainStack />
        </PointsProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

export default App;
