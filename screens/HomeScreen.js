import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import logo from '../assets/Ace_of_spades.svg.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles.js'
import GoToScreen from '../Utilities.js'

const HomeScreen = (props) => {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Game Title</Text>
        <Image source = {logo} style = {styles.logo} />
        {/*<TouchableOpacity onPress = {() => props.navigation.navigate('NumberTeams')} style = {styles.button} >
          <Text style = {styles.buttonText}>Start Game</Text>
        </TouchableOpacity>*/}
        <GoToScreen name = 'NumberTeams' buttonName = 'Game Start' buttonStyle = {styles.button}/>
        <StatusBar style="auto" />
      </View>
    );
  }

export default HomeScreen;