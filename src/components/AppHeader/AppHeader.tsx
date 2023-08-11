import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {StackHeaderProps} from '@react-navigation/stack';
import React from 'react';
import {Image, Pressable, SafeAreaView, StatusBar, View} from 'react-native';
import Text from '../Text/Text';
import {styles} from './AppHeader.style';

const AppHeader = (props: BottomTabHeaderProps | StackHeaderProps) => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor:
            props.route.name === 'DetailPoints' ? '#087D6F' : '#ffffff',
        }}
      />
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              props.route.name === 'DetailPoints' ? '#087D6F' : '#ffffff',
          },
        ]}>
        {props.navigation.getState().type !== 'tab' && (
          <Pressable
            onPress={() => props.navigation.goBack()}
            style={styles.backButtonContainer}>
            {props.route.name !== 'DetailPoints' ? (
              <Image
                resizeMode="contain"
                style={styles.backArrowIcon}
                source={require('../../assets/back_arrow.png')}
              />
            ) : (
              <></>
            )}
          </Pressable>
        )}
        <Text
          variant="headline-small"
          style={{
            color: props.route.name === 'DetailPoints' ? '#ffffff' : '#05053D',
          }}>
          {props.options.title ? props.options.title : props.route.name}
        </Text>
      </View>
    </>
  );
};

export default AppHeader;
