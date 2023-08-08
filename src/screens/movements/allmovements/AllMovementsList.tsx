import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SectionList, SectionListData, View } from 'react-native';
import { style } from './allmovements.style';
import axios, { AxiosResponse } from 'axios';
import Text from '../../../components/Text/Text';
import ListItem from '../../../components/DataDisplay/ListItem';
import useMovements from '../../../hooks/useMovements';
import Spinner from '../../../components/atoms/Spinner/Spinner';
import { Movements } from '../../../models/Movements/Movements';
import { MovementsResponse } from '../../../models/Movements/MovementsResponse';

const AllMovementsList = () => {

    const { movements, getMovements, loading, moreData } = useMovements()

    return (
        <View style={style.container}>
            <SectionList
                renderItem={({ item }) => <ListItem
                    itemName={item.entity}
                    supportText={item.date}
                    infoLabel={`+ ${item.points}`}
                    icon={require('../../../assets/partner_logo.png')}
                    onPress={() => console.log('')} />}
                sections={movements}
                stickySectionHeadersEnabled={false}
                renderSectionHeader={({ section: { title } }) => (
                    <Text variant='small-body-bold' style={{ margin: 12 }}>{title}</Text>
                )}
                onEndReached={() => moreData ? getMovements() : null}
                ListFooterComponent={() => {
                    return (
                        loading && <Spinner
                            testID="button-activity-indicator"
                            size='large'
                        />
                    )
                }}
            />
        </View>
    );
}

export default AllMovementsList;