import React, { Component } from "react";
import styles from "./styles.js";
import logo from "./assets/Ace_of_spades.svg.png";
import { TouchableOpacity, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class GameCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Game Title</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("GamePassOrPlay")}
          style={styles.button}
        >
          <Text style={styles.buttonText}> Back </Text>
        </TouchableOpacity>
        <Image source={logo} style={styles.logo} />
        <Text>Enter number of teams: </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("GameOver")}
          style={styles.button}
        >
          <Text style={styles.buttonText}> finish </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
