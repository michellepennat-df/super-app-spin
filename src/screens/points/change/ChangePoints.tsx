import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, ScrollView, View } from 'react-native';
import Button from '../../../components/Button/Button';
import Disclaimer from '../../../components/Disclaimer/Disclaimer';
import Text from '../../../components/Text/Text';
import Chip from '../../../components/atoms/Chip';
import PointsTag from '../../../components/atoms/Tag/PointsTag';
import TextInput from '../../../components/atoms/TextInput';
import { useAppContext } from '../../../context/Context';
import useTheme from '../../../hooks/useTheme';
import { RootStackParamList } from '../../../navigators/MainNavBar';
import { styles } from './ChangePoints.Style';

export const ChangePoints = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {points, selectedPartner} = useAppContext();
  const {colors} = useTheme();

  console.log(selectedPartner);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.points}>
          <Text variant="headline-large">
            {new Intl.NumberFormat('es-MX').format(points)} puntos
          </Text>
          <Image
            source={require('../../../assets/alert-info.png')}
            alt="alerta"
          />
        </View>
        <PointsTag
          leftIcon={require('../../../assets/starburst.png')}
          text={`Valen ${new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
          }).format(points / 10)}`}
        />
        {points >= 200 ||
          (points < 1000 && (
            <Text variant="small-body-bold" style={styles.mt32}>
              Escribe el valor de los puntos que quieres cambiar
            </Text>
          ))}
        {points > 1000 && (
          <>
            <Text variant="small-body-bold" style={[styles.mt32, styles.mb16]}>
              Elige o escribe el valor de los puntos que quieres cambiar
            </Text>
            <View style={styles.row}>
              <Chip
                text="$50"
                style={styles.chip}
                previewText="500 puntos"
                backgroundColor={colors.surface_informational}
              />
              <Chip
                text="$100"
                style={styles.chip}
                backgroundColor={colors.surface_informational}
                previewText="1000 puntos"
              />
            </View>
            <Text variant="small-body-bold" style={styles.mt32}>
              Otro:
            </Text>
          </>
        )}
        <TextInput
          style={styles.mt16}
          label="Monto en pesos"
          value={''}
          onChangeText={() => {}}
        />
        {points < 10000 && (
          <Text variant="extra-small-body" style={[styles.mt8, styles.mb16]}>
            El valor mínimo que puedes cambiar es $20.00
          </Text>
        )}
        {points >= 10000 && (
          <Text variant="extra-small-body" style={[styles.mt8, styles.mb16]}>
            El valor máximo que puedes cambiar es $1,000.00
          </Text>
        )}
        {points < 200 && (
          <Disclaimer
            variant="warning"
            text="Recuerda que necesitas tener mínimo $20.00 en puntos para poder cambiarlos con la marca que elegiste"
          />
        )}
      </ScrollView>
      <Button
        variant="primary"
        text="Continuar"
        disabled={points < 200}
        onPress={() => navigation.navigate('DetailPoints')}
      />
    </View>
  );
};
