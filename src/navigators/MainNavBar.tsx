import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import CustomNavBar from '../components/CustomNavBar/CustomNavBar';
import useTheme from '../hooks/useTheme';
import {Movement} from '../models/Movements/Movement';
import {Benefits} from '../screens/benefits/Benefits';
import {Home} from '../screens/home/Home';
import Movements from '../screens/movements/Movements';

export type RootNavBarParamList = {
  Home: undefined;
  Beneficios: {init: boolean};
  Cartera: undefined;
  Cuenta: undefined;
};

export type RootStackParamList = {
  BenefitsStack: {init: boolean};
  Movimientos: undefined;
  Detalles: {movement: Movement};
};

type BenefitsRouteProps = RouteProp<RootNavBarParamList, 'Beneficios'>;
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootNavBarParamList>();

const BenefitsStack = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<BenefitsRouteProps>();

  useEffect(() => {
    if (route.params?.init)
      navigation.reset({
        index: 0,
        routes: [{name: 'BenefitsStack'}],
      });
  }, [route.params?.init]);

  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'left'}}>
      <Stack.Screen
        name="BenefitsStack"
        component={Benefits}
        options={{title: 'Beneficios'}}
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
      screenOptions={{headerShown: false}}
      tabBar={(props: BottomTabBarProps) => (
        <CustomNavBar
          {...props}
          focusedColor={colors.content_primary}
          blurColor={colors.content_tertiary}
        />
      )}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Beneficios" component={BenefitsStack} />
      <Tab.Screen name="Cartera" component={Home} />
      <Tab.Screen name="Cuenta" component={Home} />
    </Tab.Navigator>
  );
};

export default MainNavBar;
