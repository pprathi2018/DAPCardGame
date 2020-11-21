import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import logo from '../assets/Ace_of_spades.svg.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles.js'
import GoToScreen from '../Utilities';
import { FlatList } from 'react-native-gesture-handler';


const EnterTeamsScreen = (props) => {

    const data = [
        {
            id: 1,
            title: 'Dan'
        },
        {
            id: 2,
            title: 'Andrew'
        },
        {
            id: 3,
            title: 'Praneeth'
        }
    ];

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
        
        <View style = {{width: 350, height: 510, backgroundColor: 'green'}} >
            <View style = {{width: 170, height: 250, backgroundColor: 'blue'}}>
                <FlatList 
                    data = {data}
                />
            </View>
        </View>






        <GoToScreen name = 'GameMain' buttonName = 'Start' buttonStyle = {styles.button} />
      </View>
    );
}

export default EnterTeamsScreen;