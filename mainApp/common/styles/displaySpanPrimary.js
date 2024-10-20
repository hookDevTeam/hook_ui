import { StyleSheet } from 'react-native';

const displaySpanPrimary = StyleSheet.create({
    verticalContainer: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 200
    },

    h1: {
      color: '#fff',
      fontSize: 24,
      fontWeight: "bold"
    },

    text: {
      color: '#fff',  // White text color
    },
  });

  export default displaySpanPrimary;