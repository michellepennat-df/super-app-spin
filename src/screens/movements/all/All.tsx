import React from 'react';
import { View } from 'react-native';
import useMovements from '../../../hooks/useMovements';
import MovementsList from '../list/List';
import { styles } from './All.Style';

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
