import React, { useState } from 'react'
import { Animated, View, useWindowDimensions } from 'react-native';
import { styles } from './Movement.Style';
import useTheme from '../../hooks/useTheme';
import TabBar from '../../components/TabBar/TabBar';
import { SceneMap, TabView } from 'react-native-tab-view';
import AllMovementsList from './allmovements/AllMovementsList';

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
        earned: AllMovementsList,
        used: AllMovementsList,
    });


    return (
        <View style={[styles.container, { backgroundColor: colors.surface_primary }]}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                //TODO: Check for a better Styling
                renderTabBar={(props) => <TabBar {...props} indicatorContainerStyle={{ marginHorizontal: 10 }} indicatorStyle={{ width: 100 }} />}
                initialLayout={{ width: layout.width }}
            />
        </View>
    );
}

export default Movements;