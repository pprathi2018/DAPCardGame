import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import logo from '../assets/Ace_of_spades.svg.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles.js'
import GoToScreen from '../Utilities';


const EnterTeamsScreen = (props) => {
    return (
        <View style={styles.container}>
        <View style= {[{width: 350,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        alignItems: 'center',}]}>
          <View style = {{backgroundColor: 'transparent', position: 'absolute', width: 350, alignItems: 'center'}}>
            <Text style={[styles.mainText]}>Teams</Text>
          </View>
          <GoToScreen name = 'NumberTeams' buttonName ='Back' buttonStyle = {styles.backButton} />
        </View>
        
        <Image source = {logo} style = {styles.logo} />
        <Text>Enter number of teams: </Text>
        <GoToScreen name = 'GameMain' buttonName = 'Start' buttonStyle = {styles.button} />
      </View>
    );
}

export default EnterTeamsScreen;