import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import logo from '../assets/Ace_of_spades.svg.png'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles.js'
import GoToScreen from '../Utilities';
import { FlatList } from 'react-native-gesture-handler';
import { ListTable } from '../containers.js';

const EnterTeamsScreen = () => {
  const route = useRoute();
  const {numTeams} = route.params;

  const createListTables = () => {
    var listTables = [];
    for (var i = 1; i <= numTeams; i++) {
      listTables.push(<ListTable key = {i} />);
    }
    return listTables;
  }

    return (
      <View style={styles.container}>
        <View style= {[{width: 350,
                        height: 80,
                        backgroundColor: 'transparent',
                        flexDirection: 'row'}]}>
          <View style = {{backgroundColor: 'transparent', position: 'absolute', width: 350, alignItems: 'center'}}>
            <Text style={[styles.mainText]}>Teams</Text>
          </View>
          <GoToScreen name = 'NumberTeams' buttonName ='Back' buttonStyle = {styles.backButton} />
        </View>

        <View style = {{width: 370, height: 520, backgroundColor: 'transparent', flexDirection: 'row', flexWrap: 'wrap'}} >
          {createListTables()}
        </View>
        

        <GoToScreen name = 'Packs' buttonName = 'Start' buttonStyle = {styles.button} />
        
        {/*<TouchableOpacity onPress = {storeNeighborTeams} style = {styles.button} >
          <Text style = {styles.buttonText}> Next </Text>
        </TouchableOpacity>*/}
      </View>
    );
}

export default EnterTeamsScreen;