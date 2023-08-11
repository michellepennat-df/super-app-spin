import {ScrollView, View} from 'react-native';
import Button from '../../../components/Button/Button';
import Disclaimer from '../../../components/Disclaimer/Disclaimer';
import Text from '../../../components/Text/Text';
import PointsTag from '../../../components/atoms/Tag/PointsTag';
import TextInput from '../../../components/atoms/TextInput';
import {usePointsContext} from '../../../context/points/Context';
import useTheme from '../../../hooks/useTheme';
import {styles} from './ChangePoints.Style';

export const ChangePoints = () => {
  const {points} = usePointsContext();
  const {colors} = useTheme();
  return (
    <View
      style={[styles.container, , {backgroundColor: colors.surface_primary}]}>
      <ScrollView>
        <Text variant="headline-large">
          {new Intl.NumberFormat('es-MX').format(points)} puntos
        </Text>
        <PointsTag
          leftIcon={require('../../../assets/starburst.png')}
          text={`Valen ${new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
          }).format(points / 10)}`}
        />
        <Text variant="small-body-bold" style={[styles.mt32, styles.mb16]}>
          Escribe el valor de los puntos que quieres cambiar
        </Text>
        <TextInput label="Monto en pesos" value={''} onChangeText={() => {}} />
        <Text variant="extra-small-body" style={[styles.mt8, styles.mb16]}>
          El valor mínimo que puedes cambiar es $20.00
        </Text>
        <Disclaimer
          variant="warning"
          text="Recuerda que necesitas tener mínimo $20.00 en puntos para poder cambiarlos con la marca que elegiste"
        />
      </ScrollView>
      <Button variant="primary" text="Continuar" onPress={() => {}} />
    </View>
  );
};
