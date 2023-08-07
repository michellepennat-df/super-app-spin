import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import CustomNavBar from '../components/CustomNavBar/CustomNavBar';
import useTheme from '../hooks/useTheme';
import {Benefits} from '../screens/benefits/benefits';
import {Home} from '../screens/home/home';

export type RootNavBarParamList = {
  Home: undefined;
  Beneficios: undefined;
  Cartera: undefined;
  Cuenta: undefined;
};

export type RootStackParamList = {
  BenefitsStack: {init: boolean};
  Detail: {};
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootNavBarParamList>();

const BenefitsStack = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BenefitsStack" component={Benefits} />
      <Stack.Screen name="Detail" component={Home} />
    </Stack.Navigator>
  );
};

const MainNavBar = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={(props: any) => (
        <CustomNavBar
          {...props}
          focusedColor={colors.content_primary}
          blurColor={colors.content_tertiary}
        />
      )}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Beneficios" component={Benefits} />
      <Tab.Screen name="Cartera" component={Home} />
      <Tab.Screen name="Cuenta" component={Home} />
    </Tab.Navigator>
  );
};

export default MainNavBar;
