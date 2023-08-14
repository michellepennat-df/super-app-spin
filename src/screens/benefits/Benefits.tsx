import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, ScrollView, View } from 'react-native';
import StackedCardGrid from '../../components/GridView/StackedCardGrid';
import Text from '../../components/Text/Text';
import PointsTag from '../../components/atoms/Tag/PointsTag';
import { useAppContext } from '../../context/Context';
import { RootStackParamList } from '../../navigators/MainNavBar';
import { styles } from './Benefits.Style';

export const Benefits = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {points} = useAppContext();

  const data = [
    {
      title: 'Consulta tu historial',
      icon: (
        <Image
          source={require('../../assets/images/history.png')}
          width={124}
        />
      ),
      onPress: () => {
        navigation.navigate('Movimientos');
      },
    },
    {
      title: 'Cambia tus puntos',
      icon: (
        <Image source={require('../../assets/images/points.png')} width={124} />
      ),
      onPress: () => {
        navigation.navigate('Puntos');
      },
    },
  ];

  return (
    <ScrollView testID="benefits-container" style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text variant="small-body-bold">Tienes</Text>
          <Text variant="headline-large">
            {new Intl.NumberFormat('es-MX').format(points)}
          </Text>
          <PointsTag
            leftIcon={require('../../assets/starburst.png')}
            text={`Valen ${new Intl.NumberFormat('es-MX', {
              style: 'currency',
              currency: 'MXN',
            }).format(points / 10)}`}
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
      <StackedCardGrid
        data={data}
        titlesSize="small"
        numberOfColumns={2}
        containerStyle={styles.cards}
      />
      <Text style={[styles.mb16, styles.mt24]} variant="headline-small">
        Acumula productos
      </Text>
      <Text style={styles.mb16} variant="default-body">
        Muy pronto podrás sumar tus compras y ganar productos de regalo
      </Text>
      <Image source={require('../../assets/images/seals.png')} alt="Sellos" />
      <Text style={[styles.mb16, styles.mt24]} variant="headline-small">
        Gana más puntos
      </Text>
      <Text style={styles.mb16} variant="default-body">
        Muy pronto podrás ganar más puntos en el total de tu compra
      </Text>
      <Image
        style={styles.mb16}
        source={require('../../assets/images/aditionals-points.png')}
        alt="Sellos"
      />
      <View style={styles.viewSell}>
        <Text style={[styles.mb16, styles.mt24]} variant="headline-small">
          Suma al comprar
        </Text>
        <Text style={styles.mb16} variant="default-body">
          Muy pronto podrás acumular compras y llevarte productos de regalo
        </Text>
        <Image
          source={require('../../assets/images/rewards.png')}
          alt="Sellos"
        />
      </View>
      <ScrollView horizontal style={styles.mt24}>
        <Image
          style={styles.item}
          source={require('../../assets/images/card.jpg')}
          alt="Card"
        />
        <Image
          style={styles.item}
          source={require('../../assets/images/card.jpg')}
          alt="Card"
        />
        <Image
          style={styles.item}
          source={require('../../assets/images/card.jpg')}
          alt="Card"
        />
      </ScrollView>
    </ScrollView>
  );
};
