import {Image, ScrollView, View} from 'react-native';
import StackedCardGrid from '../../components/GridView/StackedCardGrid';
import Text from '../../components/Text/Text';
import PointsTag from '../../components/atoms/Tag/PointsTag';
import useTheme from '../../hooks/useTheme';
import {styles} from './Benefits.Style';

const data = [
  {
    title: 'Consulta tu historial',
    icon: (
      <Image source={require('../../assets/images/history.png')} width={124} />
    ),
    onPress: () => {},
  },
  {
    title: 'Cambia tus puntos',
    icon: (
      <Image source={require('../../assets/images/points.png')} width={124} />
    ),
    onPress: () => {},
  },
];

export const Benefits = () => {
  const {colors} = useTheme();
  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.surface_primary}]}>
      <View style={styles.row}>
        <View>
          <Text variant="small-body-bold">Tienes</Text>
          <Text variant="headline-extra-large">10,657</Text>
          <PointsTag
            leftIcon={require('../../assets/points.png')}
            text="Valen $156.00"
          />
        </View>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/images/spin-premia.png')}
            alt="Spin Premia"
          />
        </View>
      </View>
      <StackedCardGrid data={data} titlesSize="default" numberOfColumns={2} />
      <Text style={[styles.mb16, styles.mt24]} variant="headline-large">
        Acumula productos
      </Text>
      <Text style={styles.mb16} variant="default-body">
        Muy pronto podrás sumar tus compras y ganar productos de regalo
      </Text>
      <Image source={require('../../assets/images/seals.png')} alt="Sellos" />
      <Text style={styles.mb16} variant="headline-large">
        Gana más puntos
      </Text>
      <Text style={styles.mb16} variant="default-body">
        Muy pronto podrás ganar más puntos en el total de tu compra
      </Text>
      <Image
        source={require('../../assets/images/aditionals-points.png')}
        alt="Sellos"
      />
      <Text style={styles.mb16} variant="headline-large">
        Suma al comprar
      </Text>
      <Text style={styles.mb16} variant="default-body">
        Muy pronto podrás acumular compras y llevarte productos de regalo
      </Text>
      <Image source={require('../../assets/images/rewards.png')} alt="Sellos" />
      <ScrollView horizontal >
        <Image style={styles.item} source={require('../../assets/images/card.jpg')} alt="Card" />
        <Image style={styles.item} source={require('../../assets/images/card.jpg')} alt="Card" />
        <Image style={styles.item} source={require('../../assets/images/card.jpg')} alt="Card" />
      </ScrollView>
    </ScrollView>
  );
};
