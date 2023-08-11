import {StackScreenProps} from '@react-navigation/stack';
import React, {useMemo} from 'react';
import {Image, ScrollView, View} from 'react-native';
import Card from '../../../components/Card/Card';
import Text from '../../../components/Text/Text';
import useTheme from '../../../hooks/useTheme';
import {RootStackParamList} from '../../../navigators/MainNavBar';
import {style} from './Detail.Style';

type Props = StackScreenProps<RootStackParamList, 'Detalles'>;

const MovementDetail = ({navigation, route}: Props) => {
  const {movement} = route.params;

  const {colors} = useTheme();

  const startDate = useMemo(() => {
    const movemntDate = new Date(movement.date);
    return new Date(
      movemntDate.setMonth(movemntDate.getMonth() + 1),
    ).toLocaleDateString();
  }, []);

  return (
    <ScrollView
      style={[style.container, {backgroundColor: colors.surface_primary}]}
      contentContainerStyle={{paddingTop: 40, paddingBottom: 16}}>
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
          <View
            style={style.points}>
            <Text variant="headline-medium">{movement.entity}</Text>
            <View
              style={[
                style.gainsLabel,
                {backgroundColor: colors.surface_secondary},
              ]}>
              <Text variant="default-body">
                En esta compra{' '}
                {movement.operation == 'earned' ? 'ganaste' : 'usaste'}:
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text variant="headline-large" style={{color: colors.ui_active}}>
                {movement.operation == 'earned' ? '+ ' : '- '}
              </Text>
              <Text variant="headline-extra-large">{movement.points}</Text>
            </View>
          </View>
        </Card>
      </View>
      <View
        style={[
          style.infoConainer,
          {borderBottomColor: colors.stroke_secondary},
        ]}>
        <View style={style.infoContainer}>
          <Text variant="label-default">Monto total:</Text>
          <Text variant="label-default-bold">
            ${(movement.points / 10).toFixed(2)}
          </Text>
        </View>
        <View style={style.infoContainer}>
          <Text variant="label-default">Fecha:</Text>
          <Text variant="label-default-bold">
            {new Date(movement.date).toLocaleDateString()}
          </Text>
        </View>
        {movement.operation == 'earned' && (
          <View style={style.infoContainer}>
            <Text variant="label-default">Úsalos desde el:</Text>
            <Text variant="label-default-bold">{startDate}</Text>
          </View>
        )}
      </View>
      <View style={{paddingVertical: 16, gap: 8, padding: 16}}>
        <Text variant="label-default">Número de transacción</Text>
        <Text
          variant="label-default-bold"
          style={{color: colors.content_tertiary}}>
          ${movement.transactionNo}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MovementDetail;
