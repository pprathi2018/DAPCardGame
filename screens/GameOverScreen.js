import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import logo from '../assets/Ace_of_spades.svg.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles.js'

const GameOverScreen = (props) => {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>You lost ur bad</Text>
        <Image source = {logo} style = {styles.logo} />
      </View>
    );
}

export default GameOverScreen;