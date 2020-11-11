import React, { Component } from "react";
import styles from "./styles.js";
import logo from "./assets/Ace_of_spades.svg.png";
import { TouchableOpacity, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class EnterTeams extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*       <Text style={styles.mainText}>Game Title</Text>
        <TouchableOpacity onPress = {() => navigation.navigate('NumberTeams')} style = {styles.button} >
            <Text style = {styles.buttonText}> Back </Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => navigation.navigate("Packs")}
          style={styles.button}
        >
          <Text style={styles.buttonText}> Start! </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
