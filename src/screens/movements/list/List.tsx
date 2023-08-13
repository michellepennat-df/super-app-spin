import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { SectionList } from 'react-native';
import ListItem from '../../../components/DataDisplay/ListItem';
import Text from '../../../components/Text/Text';
import Spinner from '../../../components/atoms/Spinner/Spinner';
import { Movement } from '../../../models/movement/Movement';
import { RootStackParamList } from '../../../navigators/MainNavBar';
import { MovementsListProps } from './types';

type Props = StackNavigationProp<RootStackParamList, 'Movimientos'>;

const MovementsList = ({
  movements,
  getData,
  loading,
  moreData,
}: MovementsListProps) => {
  const navigation = useNavigation<Props>();

  const capitalizedDate = useCallback((item: Movement) => {
    const localFormattedDate = new Date(item.date).toLocaleDateString('es-MX', {
      weekday: 'long',
      day: '2-digit',
    });
    return (
      localFormattedDate.charAt(0).toUpperCase() + localFormattedDate.slice(1)
    );
  }, []);

  return (
    <SectionList
      testID="movements-list"
      renderItem={({item}) => (
        <ListItem
          itemName={item.entity}
          supportText={capitalizedDate(item)}
          infoLabel={`${item.operation == 'earned' ? '+ ' : '- '}${
            item.points
          }`}
          icon={require('../../../assets/partner_logo.png')}
          onPress={() => navigation.navigate('Detalles', {movement: item})}
        />
      )}
      sections={movements}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({section: {title}}) => (
        <Text variant="small-body-bold" style={{margin: 12}}>
          {title}
        </Text>
      )}
      onEndReached={() => (moreData ? getData() : null)}
      ListFooterComponent={() => {
        return (
          loading && <Spinner testID="button-activity-indicator" size="large" />
        );
      }}
    />
  );
};

export default MovementsList;
