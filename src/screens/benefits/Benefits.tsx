import {Image, ScrollView, View} from 'react-native';
import Card from '../../components/Card/Card';
import GridView from '../../components/GridView/GridView';
import Text from '../../components/Text/Text';
import PointsTag from '../../components/atoms/Tag/PointsTag';
import useTheme from '../../hooks/useTheme';
import {styles} from './Benefits.Style';

const columnOne = (
  <View>
    <Text variant="small-body-bold">Tienes</Text>
    <Text variant="headline-extra-large">10,657</Text>
    <PointsTag
      leftIcon={require('../../assets/points.png')}
      text="Valen $156.00"
    />
  </View>
);
const columnTwo = (
  <View>
    <Image
      style={styles.image}
      source={require('../../assets/images/spin-premia.png')}
      alt="Spin Premia"
    />
  </View>
);

const card1 = <Card variant="content-stacked" title="Consulta tu historial" />;

const card2 = <Card variant="content-stacked" title="Cambia tus puntos" />;

const columns: any = [];
columns.push(columnOne);
columns.push(columnTwo);

const cards: any = [];
cards.push(card1);
cards.push(card2);

export const Benefits = () => {
  const {colors} = useTheme();
  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.surface_primary}]}>
      <View>
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
      <View>
        <Card variant="content-stacked" title="Consulta tu historial" />
        <Card variant="content-stacked" title="Cambia tus puntos" />
      </View>
      <Text variant="headline-large">Acumula productos</Text>
      <Text variant="default-body">
        Muy pronto podrás sumar tus compras y ganar productos de regalo
      </Text>
      <Image source={require('../../assets/images/seals.png')} alt="Sellos" />
      <Text variant="headline-large">Gana más puntos</Text>
      <Text variant="default-body">
        Muy pronto podrás ganar más puntos en el total de tu compra
      </Text>
      <Image
        source={require('../../assets/images/aditionals-points.png')}
        alt="Sellos"
      />
      <Text variant="headline-large">Suma al comprar</Text>
      <Text variant="default-body">
        Muy pronto podrás acumular compras y llevarte productos de regalo
      </Text>
      <Image source={require('../../assets/images/rewards.png')} alt="Sellos" />
    </ScrollView>
  );
};
