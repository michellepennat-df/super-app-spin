import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import ThemeProvider from './src/theme/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import MainNavBar from './src/navigators/MainNavBar';
import 'react-native-gesture-handler';

const App = () => {

  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <MainNavBar />
          {/* <NavBar /> */}
          {/* <TabBar navigationState={{ index: 1, routes }}  layout={{width:100, height:100}} position={interpolation} jumpTo={(key) => console.log(key)}/> */}
          {/* <Button text="Hola ironhackers" onPress={() => console.log('spin')} /> */}
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider >
  );
};

export default App;
