import React, { useState } from 'react'
import { Animated, Dimensions, View, useWindowDimensions } from 'react-native';
import { styles } from './movements.style';
import useTheme from '../../hooks/useTheme';
import TabBar from '../../components/TabBar/TabBar';
import { SceneMap, TabView } from 'react-native-tab-view';
import AllMovementsList from './allmovements/AllMovementsList';
import EarnedMovements from './earnedmovements/EarnedMovements';
import UsedMovements from './usedmovements/usedMovements';

const Movements = () => {
    const layout = useWindowDimensions();
    const { colors } = useTheme()

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