import React from 'react'
import useMovements from '../../../hooks/useMovements';
import { View } from 'react-native';
import MovementsList from '../list/List';
import { style } from './Used.Style';

const UsedMovements = () => {
    
    const { movements, getMovements, loading, moreData } = useMovements('used')

    return (
        <View 
        testID='used-movements-list'
        style={style.container}>
            <MovementsList
                movements={movements}
                getData={getMovements}
                loading={loading}
                moreData={moreData}
            />
        </View>
    );
}

export default UsedMovements;