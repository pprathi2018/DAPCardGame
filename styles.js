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
      color: '#888',
      fontSize: 18,
      marginHorizontal: 20,
    },
    button: {
      backgroundColor: 'blue',
      padding: 20,
      borderRadius: 5,
      marginBottom: 10,
      marginTop: 10,
    },
    buttonText: {
      fontSize: 20,
      color: '#fff'
    },
    textInput: {
      height: 40,
      width: 200,
      borderColor: 'gray',
      borderWidth: 4,
    },
  });

  export default styles;