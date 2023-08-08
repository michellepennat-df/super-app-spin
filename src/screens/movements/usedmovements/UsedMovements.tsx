import React from 'react'
import useMovements from '../../../hooks/useMovements';
import { View } from 'react-native';
import MovementsList from '../movementslist/MovementsList';
import { style } from './usedmovements.style';

const UsedMovements = () => {
    
    const { movements, getMovements, loading, moreData } = useMovements('used')

    return (
        <View style={style.container}>
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