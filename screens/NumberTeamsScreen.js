import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import logo from '../assets/Ace_of_spades.svg.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles.js'
import GoToScreen from '../Utilities';

const NumberTeamsScreen = (props) => {
    const [value, setText] = React.useState('');
  
    React.useEffect(() => {
      const unsubscribe = props.navigation.addListener('focus', () => {
        setText('');
      });
      return unsubscribe;
    }, [props.navigation]);
  
  
    checkNumTeams = () => {
      if (isNaN(value) || value < 1 || value > 4) {
        alert('Enter valid number of teams');
        setText('');
      }
      else {
        props.navigation.navigate('EnterTeams');
      }
    }
  
  
  
    return (
      <View style={styles.container}>
        <View style= {[{width: 350,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        alignItems: 'center',}]}>
          <View style = {{backgroundColor: 'transparent', position: 'absolute', width: 350, alignItems: 'center'}}>
            <Text style={[styles.mainText]}>Game Title</Text>
          </View>
          <GoToScreen name = 'Home' buttonName ='Back' buttonStyle = {styles.backButton} />
        </View>
        
        <Image source = {logo} style = {styles.logo} />
        <Text style = {styles.numTeamsText}> Enter number teams between 1 and 4!</Text>
  
        <TextInput style = {styles.textInput}
          label = "Number of Teams"
          onChangeText = {(text) => setText(text)}
          clearButtonMode = 'always'
          clearTextOnFocus = {true}
        />
  
        <Text> {value} </Text>
  
        <TouchableOpacity onPress = {checkNumTeams} style = {styles.button} >
          <Text style = {styles.buttonText}> Next </Text>
        </TouchableOpacity>
        
      </View>
    );
  }

export default NumberTeamsScreen;