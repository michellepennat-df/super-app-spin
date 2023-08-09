import React from 'react';
import { SectionList, View } from 'react-native';
import ListItem from '../../../components/DataDisplay/ListItem';
import Text from '../../../components/Text/Text';
import Spinner from '../../../components/atoms/Spinner/Spinner';
import useMovements from '../../../hooks/useMovements';
import { styles } from './All.Style';

const AllMovementsList = () => {
  const {movements, getMovements, loading, moreData} = useMovements();
  return (
    <View style={styles.container}>
      <SectionList
        renderItem={({item}) => (
          <ListItem
            itemName={item.entity}
            supportText={item.date}
            infoLabel={`+ ${item.points}`}
            icon={require('../../../assets/partner_logo.png')}
            onPress={() => console.log('')}
          />
        )}
        sections={movements}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({section: {title}}) => (
          <Text variant="small-body-bold" style={{margin: 12}}>
            {title}
          </Text>
        )}
        onEndReached={() => (moreData ? getMovements() : null)}
        ListFooterComponent={() => {
          return (
            loading && (
              <Spinner testID="button-activity-indicator" size="large" />
            )
          );
        }}
      />
    </View>
  );
};

export default AllMovementsList;
