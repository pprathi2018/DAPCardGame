import {StyleSheet} from 'react-native';

const bgColor = 'rgba(220,20,60,.75)'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 350,
      height: 508,
      marginBottom: 10,
    },
    mainText: {
      fontSize: 40,
      fontWeight: "bold",
    },
    numTeamsText: {
      fontSize: 20,
    },
    button: {
      backgroundColor: 'black',
      padding: 20,
      borderRadius: 5,
      marginBottom: 10,
      marginTop: 10,
    },
    backButton: {
      backgroundColor: 'black',
      padding: 5,
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 10,
      alignSelf: 'flex-start'
    },
    buttonText: {
      fontSize: 20,
      color: '#fff'
    },
    textInput: {
      height: 40,
      width: 80,
      borderColor: 'gray',
      borderWidth: 4,
    },
  });

  export default styles;