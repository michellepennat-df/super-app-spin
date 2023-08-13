import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, Image, Platform, TouchableOpacity, View } from 'react-native';
import Text from '../../components/Text/Text';
import Spinner from '../../components/atoms/Spinner/Spinner';
import { useAppContext } from '../../context/Context';
import usePartners from '../../hooks/usePartners';
import { RootStackParamList } from '../../navigators/MainNavBar';
import { styles } from './Points.Style';

type ItemProps = {
  name: string;
  image: string;
  type: string;
  onPress: () => void;
};

const Item = ({name, type, image, onPress}: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.card,
      Platform.select({
        ios: {
          ...styles.shadowIOS,
          shadowColor: '#8b949e',
          shadowOffset: {
            width: 0,
            height: 2,
          },
        },
      }),
      Platform.select({
        android: {
          ...styles.shadowAndroid,
          shadowColor: '#020202',
        },
      }),
    ]}>
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={{uri: image}} alt={name} />
      <View>
        <Text variant="default-body-bold">{name}</Text>
        <Text variant="small-body">{type}</Text>
      </View>
    </View>
    <Image source={require('../../assets/rightArrow.png')} />
  </TouchableOpacity>
);

export const Points = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {partners, loading} = usePartners();
  const {selectPartner} = useAppContext();

  return (
    <View style={styles.container}>
      <Text variant="default-body" style={styles.mb16}>
        Elige la marca aliada en la que quieres usar tus puntos
      </Text>
      {loading ? (
        <Spinner testID="button-activity-indicator" size="large" />
      ) : (
        <FlatList
          data={partners}
          renderItem={({item}) => (
            <Item
              name={item.name}
              image={item.image}
              type={item.type}
              onPress={() => {
                navigation.navigate('ChangePoints');
                selectPartner(item);
              }}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};
