import { Image, View } from 'react-native';
import MobilePNG from '../../assets/mobile.png';
import Text from '../../components/Text/Text';
import { styles } from './home.style';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={MobilePNG} alt="icon-mobile" style={styles.image} />
      <Text variant='headline-large'>Pantalla home</Text>
    </View>
  );
};
