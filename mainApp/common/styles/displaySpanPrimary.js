import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const displaySpanPrimary = StyleSheet.create({
    verticalContainer: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '80%'
    },

    verticalContainerFromStart: {
      flex: 1,
      backgroundColor: '#000000',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      height: height * 0.3,
      alignItems: 'flex-start',
      paddingLeft: 10,
      gap: 0
    },

    profileImage: {
      width: "100%",
      height: "40%"
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