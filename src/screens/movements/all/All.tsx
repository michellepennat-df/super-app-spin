import React from 'react';
import { SectionList, View } from 'react-native';
import ListItem from '../../../components/DataDisplay/ListItem';
import Text from '../../../components/Text/Text';
import Spinner from '../../../components/atoms/Spinner/Spinner';
import useMovements from '../../../hooks/useMovements';
import { styles } from './All.Style';
import MovementsList from '../list/List';

const AllMovementsList = () => {
  const { movements, getMovements, loading, moreData } = useMovements('history');
  return (
    <View style={styles.container}>
      <MovementsList
        movements={movements}
        getData={getMovements}
        loading={loading}
        moreData={moreData}
      />
    </View>
  );
};

export default AllMovementsList;
