import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react'
import { Image, Pressable, View } from 'react-native';
import Text from '../Text/Text';
import useTheme from '../../hooks/useTheme';
import { StackHeaderProps } from '@react-navigation/stack';
import { styles } from './AppHeader.style';

const AppHeader = (props: BottomTabHeaderProps | StackHeaderProps) => {
    const { colors } = useTheme()

    console.log(props.navigation.getState().routeNames)

    return (
        <View style={[styles.container, { backgroundColor: colors.surface_primary }]}>
            {
                (props.navigation.getParent() && props.navigation.getState().type !== 'tab') &&
                <Pressable
                    onPress={() => props.navigation.goBack()}
                    style={styles.backButtonContainer}>
                    <Image
                        resizeMode='contain'
                        style={styles.backArrowIcon}
                        source={require('../../assets/back_arrow.png')}
                    />
                </Pressable>
            }
            <Text variant='headline-small'>{props.options.title ? props.options.title : props.route.name}</Text>
        </View>
    );
}

export default AppHeader;