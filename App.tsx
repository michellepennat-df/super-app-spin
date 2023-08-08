import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import MainNavBar from './src/navigators/MainNavBar';
import ThemeProvider from './src/theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <MainNavBar />
          {/* <NavBar /> */}
          {/* <TabBar navigationState={{ index: 1, routes }}  layout={{width:100, height:100}} position={interpolation} jumpTo={(key) => console.log(key)}/> */}
          {/* <Button text="Hola ironhackers" onPress={() => console.log('spin')} /> */}
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
