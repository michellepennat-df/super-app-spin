import {Image, View} from 'react-native';
import Card from '../../components/Card/Card';
import GridView from '../../components/GridView/GridView';
import Text from '../../components/Text/Text';
import PointsTag from '../../components/atoms/Tag/PointsTag';
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
  return (
    <View style={styles.container}>
      <GridView data={columns} />
      <GridView data={cards} />
      <Text variant="headline-large">Acumula productos</Text>
      <Text variant="default-body">
        Muy pronto podrás sumar tus compras y ganar productos de regalo
      </Text>
      <Text variant="headline-large">Gana más puntos</Text>
      <Text variant="default-body">
        Muy pronto podrás ganar más puntos en el total de tu compra
      </Text>
      <Text variant="headline-large">Suma al comprar</Text>
      <Text variant="default-body">
        Muy pronto podrás acumular compras y llevarte productos de regalo
      </Text>
    </View>
  );
};
