import React from 'react'
import { Image, Pressable, View } from 'react-native';
import { style } from './account.style';
import useTheme from '../../hooks/useTheme';
import Text from '../../components/Text/Text';
import PointsTag from '../../components/atoms/Tag/PointsTag';
import { version } from '../../../package.json'

const Account = () => {

    const { colors } = useTheme()

    return (
        <View style={[style.container, { backgroundColor: colors.surface_primary }]}>
            <View style={style.contentConainter}>
                <View style={style.infoContainer}>
                    <View style={{ gap: 10 }}>
                        <Text variant='headline-large' >Maria Florencia</Text>
                        <PointsTag
                            leftIcon={require('../../assets/starburst.png')}
                            text="1,200 puntos"
                        />
                    </View>
                    <Image
                        style={style.globeIcon}
                        source={require('../../assets/globe_icon_new.png')}
                    />
                </View>
                <View style={[style.actionContainer, { borderBottomColor: colors.stroke_secondary }]}>
                    <Text variant='headline-small'>Otras acciones</Text>
                    <Pressable style={style.closeSesionButton}>
                        <View style={{ paddingHorizontal: 8 }}>
                            <Image
                                style={style.logoutIcon}
                                source={require('../../assets/logout.png')}
                            />
                        </View>
                        <Text variant='default-body' >Cierra sesión</Text>
                    </Pressable>
                </View>
            </View>
            <Text variant='label-small' style={[style.versionText, { color: colors.inverse_content_secondary, }]}>Versión {version}</Text>
        </View>
    );
}

export default Account;