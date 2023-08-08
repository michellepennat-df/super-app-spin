import {Image, View} from 'react-native';
import Text from '../../components/Text/Text';
import {styles} from './Home.Style';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/mobile.png')}
        alt="icon-mobile"
        style={styles.image}
      />
      <Text variant="headline-large">Pantalla home</Text>
    </View>
  );
};
