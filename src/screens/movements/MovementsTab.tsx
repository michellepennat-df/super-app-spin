<<<<<<< HEAD
import React, { useState } from 'react'
import { Animated, Dimensions, View, useWindowDimensions } from 'react-native';
import { styles } from './movements.style';
import useTheme from '../../hooks/useTheme';
import TabBar from '../../components/TabBar/TabBar';
=======
import React, { useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
>>>>>>> origin/feature/develop/s1/benefits
import { SceneMap, TabView } from 'react-native-tab-view';
import TabBar from '../../components/TabBar/TabBar';
import useTheme from '../../hooks/useTheme';
import { styles } from './Movement.Style';
import AllMovementsList from './allmovements/AllMovementsList';
import EarnedMovements from './earnedmovements/EarnedMovements';
import UsedMovements from './usedmovements/usedMovements';

const Movements = () => {
  const layout = useWindowDimensions();
  const {colors} = useTheme();

<<<<<<< HEAD
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'all', title: 'Todos' },
        { key: 'earned', title: 'Ganados' },
        { key: 'used', title: 'Usados' },
    ]);
    //TODO: Views for earned and used
    const renderScene = SceneMap({
        all: AllMovementsList,
        earned: EarnedMovements,
        used: UsedMovements,
    });

    const SCREEN_WIDTH = Dimensions.get('window').width

    return (
        <View style={[styles.container, { backgroundColor: colors.surface_primary }]}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={(props) => <TabBar {...props} indicatorStyle={{ width: SCREEN_WIDTH / 3.73 }} indicatorContainerStyle={{left: 12, right: 12, width: 'auto'}} />}
                initialLayout={{ width: layout.width }}
            />
        </View>
    );
}

export default Movements;
=======
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'all', title: 'Todos'},
    {key: 'earned', title: 'Ganados'},
    {key: 'used', title: 'Usados'},
  ]);
  //TODO: Views for earned and used
  const renderScene = SceneMap({
    all: AllMovementsList,
    earned: AllMovementsList,
    used: AllMovementsList,
  });

  return (
    <View style={[styles.container, {backgroundColor: colors.surface_primary}]}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        //TODO: Check for a better Styling
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorContainerStyle={{marginHorizontal: 10}}
            indicatorStyle={{width: 100}}
          />
        )}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};

export default Movements;
>>>>>>> origin/feature/develop/s1/benefits
