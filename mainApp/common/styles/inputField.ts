import { StyleSheet } from 'react-native';

const inputFieldStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 0, // No margin between each input field container
      paddingVertical: 0,
      gap: 5
    },
    text: {
      color: '#fff',  // White text color
    },

    label: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 5 // You can adjust this if needed, but keep it minimal
    },
  });

  export default inputFieldStyle;