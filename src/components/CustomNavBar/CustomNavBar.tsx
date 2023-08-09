import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Text from '../Text/Text';
import Icon from '../atoms/Icon/Icon';
import useTheme from '../../hooks/useTheme';

interface CustomNavbarProps extends BottomTabBarProps {
    focusedColor: string,
    blurColor: string,
}

const CustomNavBar = ({ state, descriptors, navigation, focusedColor, blurColor }: CustomNavbarProps) => {

    const {colors} = useTheme()

    return (
        <View style={[styles.tabBarContainer,{backgroundColor:colors.surface_primary}]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel.toString()
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const icon = label == 'Home' ? (isFocused ? require('../../assets/icon_nav_home_filled.png') : require('../../assets/icon_nav_home_outline.png')) :
                    label == 'Beneficios' ? (isFocused ? require('../../assets/icon_nav_benefits_filled.png') : require('../../assets/icon_nav_benefits_outline.png')) :
                        label == 'Cartera' ? require('../../assets/icon_nav_wallet.png') :
                            (isFocused ? require('../../assets/icon_nav_profile_filled.png') : require('../../assets/icon_nav_profile_outline.png'))

                return (
                    <TouchableOpacity
                        key={label}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabItemContainer}
                    >
                        <Image
                            style={[styles.icon, { tintColor: isFocused ? focusedColor : blurColor }]}
                            source={icon}
                        />
                        <Text variant='label-extra-small-bold' style={{ color: isFocused ? focusedColor : blurColor, textAlign: 'center' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        height: 76,
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 12,
        elevation:8,
        shadowOffset:{
            width:1,
            height:-1
        },
        shadowOpacity:.1,
        shadowColor:'black'
    },
    tabItemContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between'
    },
    icon: {
        height: 24,
        width: 24,
    }
})

export default CustomNavBar;