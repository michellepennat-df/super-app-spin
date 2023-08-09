import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 16
    },
    contentConainter: {
        gap: 24,
        paddingBottom: 16,
        flex: 1
    },
    infoContainer: {
        flexDirection: "row",
        gap: 24,
        justifyContent: "space-between",
        paddingHorizontal: 16,
        alignItems: "center"
    },
    actionContainer: {
        gap: 24,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    closeSesionButton: {
        gap: 12,
        flexDirection: 'row',
        alignItems: "center"
    },
    versionText: {
        alignSelf: 'center'
    },
    globeIcon: {
        height: 120,
        width: 120
    },
    logoutIcon: {
        height: 24,
        width: 24
    }

})