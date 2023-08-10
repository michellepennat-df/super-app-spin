import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import Card from '../../components/Card/Card';
import Text from '../../components/Text/Text';
import {styles} from './Points.Style';

const partners = [
  {
    id: '1',
    name: 'Volaris',
    type: 'Movilidad',
    minPoints: 200,
    maxPoints: 1000,
  },
  {
    id: '2',
    name: 'Smart Fit',
    type: 'Deportes',
    minPoints: 400,
    maxPoints: 5000,
  },
  {
    id: '3',
    name: 'VIX',
    type: 'Entretenimiento',
    minPoints: 100,
    maxPoints: 4000,
  },
];

type ItemProps = {
  name: string;
  type: string;
};

const Item = ({name, type}: ItemProps) => (
  <TouchableOpacity style={styles.card}>

  </TouchableOpacity>
);

export const Points = () => {
  return (
    <View style={styles.container}>
      <Text variant="default-body">
        Elige la marca aliada en la que quieres usar tus puntos
      </Text>
      <FlatList
        data={partners}
        renderItem={({item}) => <Item name={item.name} type={item.type} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
