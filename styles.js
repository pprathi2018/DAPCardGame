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
    teamHeader: {
      height: 41,
      width: 148,
      marginLeft: 6,
      marginTop: 6,
      textAlign: "center",
      borderColor: 'transparent',
      borderWidth: 2,
    },
    nameInput: {
      height: 31,
      width: 148,
      marginLeft: 6,
      marginTop: 6,
      textAlign: "center",
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 6,
    }
  });

  export default styles;