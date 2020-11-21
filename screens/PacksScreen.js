import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import logo from '../assets/Ace_of_spades.svg.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles.js'
import GoToScreen from '../Utilities';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { ListTable } from "../containers.js";

const packComponent = (logo) => {
  <View style = {{borderRadius: 10, width: 160, height: 240, marginLeft: 10, marginRight: 10, marginTop: 10, backgroundColor: 'white'}}>
    <TouchableHighlight source = {logo} style = {styles.logo} />
  </View>
}

const PacksScreen = (props) => {
    return (
      <View style={styles.container}>
        <View style= {[{width: 370,
                        backgroundColor: 'transparent',
                        flexDirection: 'row'}]}>
          <View style = {{backgroundColor: 'transparent', position: 'absolute', width: 350, alignItems: 'center'}}>
            <Text style={[styles.mainText]}>Packs</Text>
          </View>
          <GoToScreen name = 'EnterTeams' buttonName ='Back' buttonStyle = {styles.backButton} />
        </View>
        
        <View style = {{width: 370, height: 520, backgroundColor: 'transparent', flexDirection: 'row', flexWrap: 'wrap'}} >
          <ListTable></ListTable>
        </View>

        <GoToScreen name = 'GameMain' buttonName = 'Start' buttonStyle = {styles.button} />
      </View>
    );
}

export default PacksScreen;