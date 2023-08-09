import { Image, View } from 'react-native';
import Text from '../../components/Text/Text';
<<<<<<< HEAD
import { styles } from './home.style';
=======
import { styles } from './Home.Style';
>>>>>>> origin/feature/develop/s1/benefits

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/mobile.png')}
        alt="icon-mobile"
      />
      <Text variant="headline-large">Pantalla home</Text>
    </View>
  );
};
