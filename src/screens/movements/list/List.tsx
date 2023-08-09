import React from 'react'
import { SectionList } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { MovementsListProps } from './types';
import ListItem from '../../../components/DataDisplay/ListItem';
import Text from '../../../components/Text/Text';
import Spinner from '../../../components/atoms/Spinner/Spinner';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigators/MainNavBar';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = StackNavigationProp<RootStackParamList, 'Movimientos'>

const MovementsList = ({ movements, getData, loading, moreData }: MovementsListProps) => {

    const navigation = useNavigation<Props>()

    return (
        <SectionList
            renderItem={({ item }) => <ListItem
                itemName={item.entity}
                supportText={item.date}
                infoLabel={`${item.operation == 'earned' ? '+ ' : '- '}${item.points}`}
                icon={require('../../../assets/partner_logo.png')}
                onPress={() => navigation.navigate('Detalles', { movement: item })} />}
            sections={movements}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={({ section: { title } }) => (
                <Text variant='small-body-bold' style={{ margin: 12 }}>{title}</Text>
            )}
            onEndReached={() => moreData ? getData() : null}
            ListFooterComponent={() => {
                return (
                    loading && <Spinner
                        testID="button-activity-indicator"
                        size='large'
                    />
                )
            }}
        />
    );
}

export default MovementsList;