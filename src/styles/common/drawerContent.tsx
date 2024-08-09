import { StyleSheet } from "react-native";

export const DrawerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001875',
    },
    header: {
        padding: 20,
        backgroundColor: '#001875',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
});
