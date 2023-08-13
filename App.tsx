import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import AppProvider from './src/context/Store';
import MainStack from './src/navigators/MainNavBar';
import ThemeProvider from './src/theme/ThemeProvider';
import {BottomSheet} from './src';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer theme={theme}>
        <AppProvider>
          <MainStack />
        </AppProvider>
      </NavigationContainer>
      <BottomSheet.Component />
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
