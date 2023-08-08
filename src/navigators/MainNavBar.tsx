import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/home/home';
import CustomNavBar from '../components/CustomNavBar/CustomNavBar';
import useTheme from '../hooks/useTheme';
import { Benefits } from '../screens/benefits/benefits';
import Movements from '../screens/movements/MovementsTab';

export type RootNavBarParamList = {
    Home: undefined,
    Beneficios:undefined,
    Cartera:undefined,
    Cuenta:undefined
}

const Tab = createBottomTabNavigator<RootNavBarParamList>()

const MainNavBar = () => {

    const { colors } = useTheme()

    return (
        <Tab.Navigator tabBar={(props) => <CustomNavBar {...props} focusedColor={colors.content_primary}  blurColor={colors.content_tertiary}/>}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Beneficios' component={Benefits} />
            <Tab.Screen name='Cartera' component={Movements} />
            <Tab.Screen name='Cuenta' component={Home} />
        </Tab.Navigator>
    );
}

export default MainNavBar;