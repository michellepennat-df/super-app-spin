import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import Text from '../../../components/Text/Text';
import useTheme from '../../../hooks/useTheme';
import {RootStackParamList} from '../../../navigators/MainNavBar';
import {style} from './Detail.Style';

const DetailPoints = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {colors} = useTheme();

  return (
    <ScrollView
      style={style.container}
      contentContainerStyle={{paddingTop: 40, paddingBottom: 16}}>
      <View
        style={{
          minHeight: 230,
          width: '100%',
          backgroundColor: '#087D6F',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <View style={{padding: 16}}>
        <Card
          style={{height: 180, position: 'relative'}}
          contentStyle={{alignItems: 'center'}}>
          <Card
            style={style.imageContainer}
            contentStyle={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={style.logo}
              source={require('../../../assets/partner_logo.png')}
            />
          </Card>
          <View style={style.points}>
            <Text variant="headline-medium">Volaris</Text>
            <View style={[style.gainsLabel]}>
              <Text variant="default-body">
                Toca el ícono para copiar el certificado de regalo o escríbelo
                desde la app o página web de Volaris
              </Text>
            </View>
          </View>
        </Card>
      </View>
      <View
        style={[
          style.infoConainer,
          {borderBottomColor: colors.stroke_secondary},
        ]}>
        <Button
          variant="hyperlink"
          styleText={{color: colors.ui_active}}
          text="¿Cómo usar mi certificado de regalo?"
          onPress={() => {}}
        />
        <View style={style.infoContainer}>
          <Text variant="label-default">Monto total:</Text>
          <Text variant="label-default-bold">200</Text>
        </View>
        <View style={style.infoContainer}>
          <Text variant="label-default">Valen:</Text>
          <Text variant="label-default-bold">$20.00</Text>
        </View>
        <View style={style.infoContainer}>
          <Text variant="label-default">Fecha:</Text>
          <Text variant="label-default-bold">03 de septiembre del 2023</Text>
        </View>
        <View style={style.infoContainer}>
          <Text variant="label-default">Válido hasta el:</Text>
          <Text variant="label-default-bold">26/11/2023</Text>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 16,
          gap: 8,
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: colors.stroke_secondary,
        }}>
        <Text variant="label-default">Número de transacción</Text>
        <Text
          variant="label-default-bold"
          style={{color: colors.content_tertiary}}>
          5dced89c-2b6e-4a1c-a715-c19b0a51
        </Text>
      </View>
      <View style={{padding: 16}}>
        <Button
          variant="primary"
          text="Usar certificado de regalo"
          onPress={() => {}}
        />
        <Button
          variant="inverted-primary"
          text="Guardar para otro momento"
          onPress={() => navigation.goBack()}
        />
      </View>
    </ScrollView>
  );
};

export default DetailPoints;
