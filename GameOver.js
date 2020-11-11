import React, { Component } from "react";
import styles from "./styles.js";
import logo from "./assets/Ace_of_spades.svg.png";
import { TouchableOpacity, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class GameOver extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>You lost ur bad</Text>
        <Image source={logo} style={styles.logo} />
      </View>
    );
  }
}
