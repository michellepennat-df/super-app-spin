import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useMemo, useState} from 'react';
import {Alert, Image, ScrollView, View} from 'react-native';
import Button from '../../../components/Button/Button';
import Disclaimer from '../../../components/Disclaimer/Disclaimer';
import Text from '../../../components/Text/Text';
import Chip from '../../../components/atoms/Chip';
import SnackBar from '../../../components/atoms/SnackBar';
import PointsTag from '../../../components/atoms/Tag/PointsTag';
import TextInput from '../../../components/atoms/TextInput';
import {useAppContext} from '../../../context/Context';
import useTheme from '../../../hooks/useTheme';
import {RootStackParamList} from '../../../navigators/MainNavBar';
import {styles} from './ChangePoints.Style';

export const ChangePoints = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {points, postMovement, putPoints, setPoints} = useAppContext();
  const {colors} = useTheme();

  const [pointsToChange, setPointsToChange] = useState<string>();
  const [chipSelected, setSelectedChip] = useState<string>();

  const errorByMin = useMemo(() => +(points || 0) < 200, [points]);

  const error = useMemo(() => {
    if (+(pointsToChange || 0) > points / 10)
      return 'El valor máximo que puedes cambiar es $1,000.00';

    return undefined;
  }, [pointsToChange]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewPoints}>
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
        </View>
        {points >= 200 ||
          (points < 1000 && (
            <Text variant="small-body-bold" style={styles.mt16}>
              Escribe el valor de los puntos que quieres cambiar
            </Text>
          ))}
        {points > 1000 && points < 10000 && (
          <>
            <Text variant="small-body-bold" style={[styles.mt16, styles.mb16]}>
              Elige o escribe el valor de los puntos que quieres cambiar
            </Text>
            <View style={styles.row}>
              <Chip
                text="$50"
                style={styles.chip}
                previewText="500 puntos"
                backgroundColor={colors.surface_informational}
                selected={chipSelected === '500'}
                onPress={() => {
                  setSelectedChip('500');
                  setPointsToChange('');
                }}
              />
              <Chip
                text="$100"
                style={styles.chip}
                backgroundColor={colors.surface_informational}
                previewText="1000 puntos"
                selected={chipSelected === '1000'}
                onPress={() => {
                  setSelectedChip('1000');
                  setPointsToChange('');
                }}
              />
            </View>
            <Text variant="small-body-bold" style={styles.mt32}>
              Otro:
            </Text>
          </>
        )}
        {points > 10000 && (
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
                selected={chipSelected === '500'}
                onPress={() => {
                  setSelectedChip('500');
                  setPointsToChange('');
                }}
              />
              <Chip
                text="$100"
                style={styles.chip}
                backgroundColor={colors.surface_informational}
                previewText="1000 puntos"
                selected={chipSelected === '1000'}
                onPress={() => {
                  setSelectedChip('1000');
                  setPointsToChange('');
                }}
              />
            </View>
            <View style={styles.row}>
              <Chip
                text="$200"
                style={styles.chip}
                backgroundColor={colors.surface_informational}
                previewText="2000 puntos"
                selected={chipSelected === '2000'}
                onPress={() => {
                  setSelectedChip('2000');
                  setPointsToChange('');
                }}
              />
              <Chip
                text="$500"
                style={styles.chip}
                backgroundColor={colors.surface_informational}
                previewText="5000 puntos"
                selected={chipSelected === '5000'}
                onPress={() => {
                  setSelectedChip('5000');
                  setPointsToChange('');
                }}
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
          value={pointsToChange || ''}
          keyboardType="numeric"
          error={error}
          editable={!errorByMin}
          onChangeText={e => {
            if (Number.isNaN(+e)) {
              setPointsToChange('');
              return;
            }
            setSelectedChip(undefined);
            setPointsToChange(e);
          }}
        />
        {points < 10000 && !error && (
          <Text variant="extra-small-body" style={[styles.mt8, styles.mb16]}>
            El valor mínimo que puedes cambiar es $20.00
          </Text>
        )}
        {points >= 10000 && !error && (
          <Text variant="extra-small-body" style={[styles.mt8, styles.mb16]}>
            El valor máximo que puedes cambiar es $1,000.00
          </Text>
        )}
        {errorByMin && (
          <Disclaimer
            variant="warning"
            text="Recuerda que necesitas tener mínimo $20.00 en puntos para poder cambiarlos con la marca que elegiste"
          />
        )}
      </ScrollView>
      <Button
        variant="primary"
        text="Continuar"
        disabled={errorByMin || (!pointsToChange && !chipSelected)}
        onPress={async () => {
          try {
            if (!pointsToChange && !chipSelected)
              return Alert.alert('Debe ingresar una cantidad');
            const response = await postMovement(
              +(pointsToChange || chipSelected || 0) / 10,
            );
            await putPoints(+(pointsToChange || chipSelected || 0) / 10);
            setPoints(points - +(pointsToChange || chipSelected || 0));
            SnackBar.show({
              text: '¡Listo! Cambiaste tus puntos',
              variant: 'info',
              withIcon: false,
            });
            if (response.data)
              navigation.navigate('DetailPoints', response.data[0]);
            else Alert.alert('No se pudo consumir la data');
          } catch (error) {
            console.error(error);
            Alert.alert('No se pudo consumir la data');
          }
        }}
      />
    </View>
  );
};
