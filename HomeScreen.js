import React, { Component } from "react";
import styles from "./styles.js";
import logo from "./assets/Ace_of_spades.svg.png";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Homescreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Game Title</Text>
        <Image source={logo} style={styles.logo} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("NumberTeams")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}
