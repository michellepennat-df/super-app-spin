import {Image, View} from 'react-native';
import Text from '../../components/Text/Text';
// import {styles} from './Home.Style';

export const Home = () => {
  return (
    <View>
      <Image source={require('../../assets/mobile.png')} alt="icon-mobile" />
      <Text variant="headline-large">Pantalla home</Text>
    </View>
  );
};

// style={styles.container}
// style={styles.image}
// import {StyleSheet} from 'react-native';

// export const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//   },
//   image: {
//     width: 120,
//     height: 120,
//   },
// });

// import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     }
// })