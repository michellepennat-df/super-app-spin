import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import CustomNavBar from '../components/CustomNavBar/CustomNavBar';
import useTheme from '../hooks/useTheme';
import { Movement } from '../models/movement/Movement';
import { Benefits } from '../screens/benefits/Benefits';
import { Home } from '../screens/home/Home';
import Movements from '../screens/movements/Movements';
import Account from '../screens/account/Account';
import MovementDetail from '../screens/movements/detail/Detail';
import AppHeader from '../components/AppHeader/AppHeader';
import { Wallet } from '../screens/wallet/Wallet';
import { Points } from '../screens/points/Points';
import { usePointsContext } from '../context/movements/Context';

export type RootNavBarParamList = {
  Home: undefined;
  Beneficios: { init: boolean };
  Cartera: undefined;
  Cuenta: undefined;
};

export type RootStackParamList = {
  MainNavBar: { init: boolean };
  Movimientos: undefined;
  Detalles: { movement: Movement };
  Puntos: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootNavBarParamList>();

const MainNavBar = () => {
  const { colors } = useTheme();

  const { getPoints } = usePointsContext()

  useEffect(() => {
    getPoints()
  }, [])

  return (
    <Tab.Navigator
      screenOptions={{
        header: (props) => <AppHeader {...props} />
      }}
      tabBar={(props: BottomTabBarProps) => (
        <CustomNavBar
          {...props}
          focusedColor={colors.content_primary}
          blurColor={colors.content_tertiary}
        />
      )}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} />
      <Tab.Screen
        name="Beneficios"
        component={Benefits} />
      <Tab.Screen
        name="Cartera"
        component={Wallet}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cuenta"
        component={Account}
      />
    </Tab.Navigator>
  );
};

const MainStack = () => {

  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'left',
      header: (props) => <AppHeader {...props} />
    }}>
      <Stack.Screen
        name="MainNavBar"
        component={MainNavBar}
        options={{ title: 'Beneficios', headerShown: false }}
      />
      <Stack.Screen name="Movimientos" component={Movements} />
      <Stack.Screen name="Detalles" component={MovementDetail} options={{ title: 'Detalle de movimiento' }} />
      <Stack.Screen name="Puntos" component={Points} options={{ title: 'Detalle de movimiento' }} />
    </Stack.Navigator>
  );
};


export default MainStack;
