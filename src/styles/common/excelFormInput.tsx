import { StyleSheet } from "react-native";

export const FormInput = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 4,
    },
    importExportButton: {
        backgroundColor: '#007BFF',
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 16,
        alignSelf: 'center',
        width: '90%',
    },
});