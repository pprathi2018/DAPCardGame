import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import logo from '../assets/Ace_of_spades.svg.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles.js'
import GoToScreen from '../Utilities.js'

const GamePassOrPlayScreen = (props) => {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Game Title</Text>
        <GoToScreen name = 'GameMain' buttonName = 'Back' buttonStyle = {styles.button} />
        <Image source = {logo} style = {styles.logo} />
        <Text>Enter number of teams: </Text>
        <GoToScreen name = 'GameCard' buttonName = 'Yur' buttonStyle = {styles.button} />
      </View>
    );
}

export default GamePassOrPlayScreen;