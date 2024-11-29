import { StyleSheet } from 'react-native';

const ProfileStyle = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#000000',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'center',
      height: "5%"
    },
    button: {
        padding: 10,
        borderRadius: 1,
        marginVertical: 1,
        alignItems: 'center',
        width: '100%'
    },
    buttonText: {
        color: 'white',  // Adjust text color for better contrast with the background
        fontSize: 16,
      }
  });

  export default ProfileStyle;