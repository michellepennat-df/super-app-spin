import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: "center",
        padding: 8,
        paddingStart: 16,
        borderBottomWidth: 1,
        gap: 12,
    },
    coreContent: {
        flex: 1
    },
    iconContainer: {
        height: 40,
        width: 40,
        padding: 8
    },
    icon: {
        height: 40,
        width: 40,
        borderRadius: 100
    },
})