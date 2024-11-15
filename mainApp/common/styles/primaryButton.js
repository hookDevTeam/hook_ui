import { StyleSheet } from 'react-native';

const primaryButtonStyle =StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 2,
        marginVertical: 1,
        alignItems: 'center',
        width: '100%',
        borderColor: '#fffff', // Border color
        borderWidth: 2,          // Border width
        borderRadius: 8
    },
    buttonText: {
        color: 'white',  // Adjust text color for better contrast with the background
        fontSize: 20,
    }
});

export default primaryButtonStyle;