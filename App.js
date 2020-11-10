import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import logo from './assets/Ace_of_spades.svg.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles.js'

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home' headerMode={false}>
        <Stack.Screen name = 'Home' component = {HomeScreen} />
        <Stack.Screen name = 'NumberTeams' component = {NumberTeamsScreen} />
        <Stack.Screen name = 'EnterTeams' component = {EnterTeamsScreen} />
        <Stack.Screen name = 'Packs' component = {PacksScreen} />
        <Stack.Screen name = 'GameMain' component = {GameMainScreen} />
        <Stack.Screen name = 'GamePassOrPlay' component = {GamePassOrPlayScreen} />
        <Stack.Screen name = 'GameCard' component = {GameCardScreen} />
        <Stack.Screen name = 'GameOver' component = {GameOverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Game Title</Text>
      <Image source = {logo} style = {styles.logo} />
      <TouchableOpacity onPress = {() => navigation.navigate('NumberTeams')} style = {styles.button} >
        <Text style = {styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


/** 
function HomeToNumberTeams({ navigation }) {
  return (
  <TouchableOpacity onPress = {() => navigation.navigate('NumberTeams')} style = {styles.button} >
    <Text style = {styles.buttonText}>Start Game</Text>
  </TouchableOpacity>)
}
*/

function NumberTeamsScreen({ props }) {
  const [value, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Game Title</Text>
      <TouchableOpacity onPress = {() => this.props.navigation.navigate('Home')} style = {styles.button} >
        <Text style = {styles.buttonText}> Back </Text>
      </TouchableOpacity>
      <Image source = {logo} style = {styles.logo} />
      <Text style = {styles.mainText}> Enter number teams</Text>

      <TextInput style = {styles.textInput}
        label = "Number of Teams"
        onChangeText = {text => setText(text)}
      />

      <Text> {value} </Text>

      <TouchableOpacity onPress = {() => this.props.navigation.navigate('EnterTeams')} style = {styles.button} >
        <Text style = {styles.buttonText}> Next </Text>
      </TouchableOpacity>
      
    </View>
  );
}

function EnterTeamsScreen({ navigation }) {
  return (
    <View style={styles.container}>
{/*       <Text style={styles.mainText}>Game Title</Text>
      <TouchableOpacity onPress = {() => navigation.navigate('NumberTeams')} style = {styles.button} >
        <Text style = {styles.buttonText}> Back </Text>
      </TouchableOpacity> */}



      <TouchableOpacity onPress = {() => navigation.navigate('Packs')} style = {styles.button} >
        <Text style = {styles.buttonText}> Start! </Text>
      </TouchableOpacity>
    </View>
  );
}

function PacksScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}> Packs </Text>
      <TouchableOpacity onPress = {() => navigation.navigate('EnterTeams')} style = {styles.button} >
        <Text style = {styles.buttonText}> Back </Text>
      </TouchableOpacity>
      <Image source = {logo} style = {styles.logo} />
      <Text>Enter number of teams: </Text>
      <TouchableOpacity onPress = {() => navigation.navigate('GameMain')} style = {styles.button} >
        <Text style = {styles.buttonText}> Start </Text>
      </TouchableOpacity>
    </View>
  );
}

function GameMainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Game Title</Text>
      <TouchableOpacity onPress = {() => navigation.navigate('Packs')} style = {styles.button} >
        <Text style = {styles.buttonText}> Back </Text>
      </TouchableOpacity>
      <Image source = {logo} style = {styles.logo} />
      <Text>Enter number of teams: </Text>
      <TouchableOpacity onPress = {() => navigation.navigate('GamePassOrPlay')} style = {styles.button} >
        <Text style = {styles.buttonText}> Yeehur </Text>
      </TouchableOpacity>
    </View>
  );
}

function GamePassOrPlayScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Game Title</Text>
      <TouchableOpacity onPress = {() => navigation.navigate('GameMain')} style = {styles.button} >
        <Text style = {styles.buttonText}> Back </Text>
      </TouchableOpacity>
      <Image source = {logo} style = {styles.logo} />
      <Text>Enter number of teams: </Text>
      <TouchableOpacity onPress = {() => navigation.navigate('GameCard')} style = {styles.button} >
        <Text style = {styles.buttonText}> Yur </Text>
      </TouchableOpacity>
    </View>
  );
}

function GameCardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Game Title</Text>
      <TouchableOpacity onPress = {() => navigation.navigate('GamePassOrPlay')} style = {styles.button} >
        <Text style = {styles.buttonText}> Back </Text>
      </TouchableOpacity>
      <Image source = {logo} style = {styles.logo} />
      <Text>Enter number of teams: </Text>
      <TouchableOpacity onPress = {() => navigation.navigate('GameOver')} style = {styles.button} >
        <Text style = {styles.buttonText}> finish </Text>
      </TouchableOpacity>
    </View>
  );
}

function GameOverScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>You lost ur bad</Text>
      <Image source = {logo} style = {styles.logo} />
    </View>
  );
}

const bgColor = 'rgba(220,20,60,.75)'

/**
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
    width: 40,
    borderColor: 'gray',
    borderWidth: 4,
  },
});
*/
