import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import styles from './styles.js'

export const ListTable = () => {
    return (
      <View style = {{borderRadius: 10, width: 160, height: 240, marginLeft: 10, marginRight: 10, marginTop: 10, backgroundColor: 'white'}}>
        <TextInput style = {styles.teamHeader} defaultValue = "Enter Team Name" />
        <TextInput style = {styles.nameInput}/>
        <TextInput style = {styles.nameInput}/>
        <TextInput style = {styles.nameInput}/>
        <TextInput style = {styles.nameInput}/>
        <TextInput style = {styles.nameInput}/>
      </View>
    );
  }