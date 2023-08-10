import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import MainStack from './src/navigators/MainNavBar';
import ThemeProvider from './src/theme/ThemeProvider';
import PointsProvider from './src/context/points/State';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <PointsProvider>
            <MainStack />
          </PointsProvider>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
