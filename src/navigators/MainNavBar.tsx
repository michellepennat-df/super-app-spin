import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CustomNavBar from '../components/CustomNavBar/CustomNavBar';
import useTheme from '../hooks/useTheme';
import {Benefits} from '../screens/benefits/Benefits';
import {Home} from '../screens/home/Home';
import Movements from '../screens/movements/MovementsTab';
import { Movement } from '../models/Movements/Movement';

export type RootNavBarParamList = {
  Home: undefined;
  Beneficios: undefined;
  Cartera: undefined;
  Cuenta: undefined;
};

export type RootStackParamList = {
  BenefitsStack: {init: boolean};
  Movimientos: undefined;
  Detalles: {movement:Movement};
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootNavBarParamList>();

const BenefitsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'left'}}>
      <Stack.Screen
        name="BenefitsStack"
        component={Benefits}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Movimientos" component={Movements} />
      <Stack.Screen name="Detalles" component={Home} />
    </Stack.Navigator>
  );
};

const MainNavBar = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{headerTitleAlign: 'left'}}
      tabBar={(props: any) => (
        <CustomNavBar
          {...props}
          key={1}
          focusedColor={colors.content_primary}
          blurColor={colors.content_tertiary}
        />
      )}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Beneficios" component={BenefitsStack} />
      <Tab.Screen
        name="Cartera"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Cuenta"
        component={Home}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default MainNavBar;
