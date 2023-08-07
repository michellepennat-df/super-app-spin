import React, { useState } from 'react'
import { Animated, View, useWindowDimensions } from 'react-native';
import { styles } from './movements.style';
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
    ]);
    const renderScene = SceneMap({
        all: AllMovementsList,
    });


    return (
        <View style={[styles.container, { backgroundColor: colors.surface_primary }]}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={(props) => <TabBar {...props} />}
                initialLayout={{ width: layout.width }}
            />
        </View>
    );
}

export default Movements;