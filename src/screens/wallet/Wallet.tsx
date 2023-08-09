import { Image, View } from 'react-native';
import Text from '../../components/Text/Text';
import { styles } from './Wallet.Style';

export const Wallet = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/diamond.png')}
        alt="icon-diamond"
      />
      <Text variant="headline-large">Pantalla cartera</Text>
    </View>
  );
};
