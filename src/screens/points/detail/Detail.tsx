import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {FlatList, Image, ScrollView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import Text from '../../../components/Text/Text';
import BottomSheet from '../../../components/atoms/BottomSheet';
import useTheme from '../../../hooks/useTheme';
import {RootStackParamList} from '../../../navigators/MainNavBar';
import {styles} from './Detail.Style';

const instructions = [
  '1. Copia tu certificado de regalo de Spin Premia',
  '2. Entra a la app o página web de Volaris',
  '3. Elige tu próximo destino y vuelos',
  '4. Antes de terminar tu compra, pega o escribe el certificado de regalo al elegir tu método de pago',
];

const DetailPoints = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute();
  const params = route.params as any;

  const {colors} = useTheme();

  useEffect(() => {
    console.log(JSON.stringify(params));
  }, []);

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
          onPress={() => {
            BottomSheet.show({
              title: '¿Cómo usar un certificado de regalo?',
              children: (
                <>
                  <FlatList
                    data={instructions}
                    renderItem={({item}) => (
                      <View style={styles.textModal}>
                        <Text variant="default-body">{item}</Text>
                      </View>
                    )}
                  />
                  <Image
                    style={styles.imgModal}
                    source={require('../../../assets/placeholder.png')}
                    alt="instrucciones"
                  />
                </>
              ),
              headerBackgroundColor: '#ffffff',
              bodyBackgroundColor: '#ffffff',
              contentStyle: {
                paddingHorizontal: 16,
              },
            });
          }}
        />
        <View style={styles.infoContainer}>
          <Text variant="label-default">Monto total:</Text>
          <Text variant="label-default-bold">{params.data[0].points*10}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text variant="label-default">Valen:</Text>
          <Text variant="label-default-bold">${params.data[0].points}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text variant="label-default">Fecha:</Text>
          <Text variant="label-default-bold">{params.data[0].date}</Text>
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
          {params.data[0].transactionNo}
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
          onPress={() => navigation.navigate("Movimientos")}
        />
      </View>
    </ScrollView>
  );
};

export default DetailPoints;
