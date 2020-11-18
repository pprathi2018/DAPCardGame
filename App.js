import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import logo from './assets/Ace_of_spades.svg.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles.js'
import HomeScreen from './screens/HomeScreen.js'
import NumberTeamsScreen from './screens/NumberTeamsScreen.js'
import EnterTeamsScreen from './screens/EnterTeamsScreen.js'
import PacksScreen from './screens/PacksScreen.js'
import GameMainScreen from './screens/GameMainScreen.js'
import GamePassOrPlayScreen from './screens/GamePassOrPlayScreen.js'
import GameCardScreen from './screens/GameCardScreen.js'
import GameOverScreen from './screens/GameOverScreen.js'

export default function App() {

  const Stack = createStackNavigator();

  function MyStackNavigator() {
    return (
      <Stack.Navigator initialRouteName = 'Home' headerMode = {false}>
        <Stack.Screen name = 'Home' component = {HomeScreen}/>
        <Stack.Screen name = 'NumberTeams' component = {NumberTeamsScreen} />
        <Stack.Screen name = 'EnterTeams' component = {EnterTeamsScreen} />
        <Stack.Screen name = 'Packs' component = {PacksScreen} />
        <Stack.Screen name = 'GameMain' component = {GameMainScreen} />
        <Stack.Screen name = 'GamePassOrPlay' component = {GamePassOrPlayScreen} />
        <Stack.Screen name = 'GameCard' component = {GameCardScreen} />
        <Stack.Screen name = 'GameOver' component = {GameOverScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <MyStackNavigator />
    </NavigationContainer>
  );
}