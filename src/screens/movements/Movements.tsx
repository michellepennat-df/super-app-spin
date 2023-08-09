import React, { useState } from 'react';
import { Dimensions, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import TabBar from '../../components/TabBar/TabBar';
import useTheme from '../../hooks/useTheme';
import AllMovementsList from './all/All';
import EarnedMovements from './earned/Earned';
import { styles } from './Movement.Style';
import UsedMovements from './used/Used';

const Movements = () => {
  const layout = useWindowDimensions();
  const {colors} = useTheme();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'all', title: 'Todos'},
    {key: 'earned', title: 'Ganados'},
    {key: 'used', title: 'Usados'},
  ]);
  //TODO: Views for earned and used
  const renderScene = SceneMap({
    all: AllMovementsList,
    earned: EarnedMovements,
    used: UsedMovements,
  });

  const SCREEN_WIDTH = Dimensions.get('window').width;

  return (
    <View style={[styles.container, {backgroundColor: colors.surface_primary}]}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{width: SCREEN_WIDTH / 3.73}}
            indicatorContainerStyle={{left: 12, right: 12, width: 'auto'}}
          />
        )}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};

export default Movements;
