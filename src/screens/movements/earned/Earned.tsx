import React from 'react'
import useMovements from '../../../hooks/useMovements';
import { View } from 'react-native';
import MovementsList from '../list/List';
import { style } from './Earned.Style';

const EarnedMovements = () => {
    
    const { movements, getMovements, loading, moreData } = useMovements('earned')

    return (
        <View 
        testID='earne-movements-list'
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

export default EarnedMovements;