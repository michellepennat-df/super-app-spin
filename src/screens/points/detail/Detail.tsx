import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import Text from '../../../components/Text/Text';
import useTheme from '../../../hooks/useTheme';
import {RootStackParamList} from '../../../navigators/MainNavBar';
import {styles} from './Detail.Style';

const DetailPoints = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {colors} = useTheme();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingTop: 40, paddingBottom: 16}}>
      <View style={styles.banner} />
      <View style={{padding: 16}}>
        <Card
          style={{
            position: 'relative',
            paddingHorizontal: 8,
            paddingVertical: 16,
          }}
          contentStyle={{alignItems: 'center'}}>
          <Card
            style={styles.imageContainer}
            contentStyle={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={styles.logo}
              source={require('../../../assets/partner_logo.png')}
            />
          </Card>
          <View style={styles.points}>
            <Text variant="headline-medium">Volaris</Text>
            <Text variant="default-body" style={styles.text}>
              Toca el ícono para copiar el certificado de regalo o escríbelo
              desde la app o página web de Volaris
            </Text>
            <View style={styles.row}>
              <View>
                <Text variant="label-extra-small">Certificado de regalo</Text>
                <Text variant="default-body-bold">42738499092812000</Text>
              </View>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/copy.png')}
                  alt="icon-copy"
                />
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </View>
      <View
        style={[
          styles.infoConainer,
          {borderBottomColor: colors.stroke_secondary},
        ]}>
        <Button
          variant="hyperlink"
          styleText={{color: colors.ui_active}}
          text="¿Cómo usar mi certificado de regalo?"
          onPress={() => {}}
        />
        <View style={styles.infoContainer}>
          <Text variant="label-default">Monto total:</Text>
          <Text variant="label-default-bold">200</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text variant="label-default">Valen:</Text>
          <Text variant="label-default-bold">$20.00</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text variant="label-default">Fecha:</Text>
          <Text variant="label-default-bold">03 de septiembre del 2023</Text>
        </View>
        <View style={styles.infoContainer}>
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
