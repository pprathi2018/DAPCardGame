import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import logo from './assets/Ace_of_spades.svg.png'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles.js'

const GoToScreen = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress ={() => navigation.navigate(props.name)} style = {props.buttonStyle} >
            <Text style = {styles.buttonText}> {props.buttonName} </Text>
        </TouchableOpacity>
    )
}

export default GoToScreen;