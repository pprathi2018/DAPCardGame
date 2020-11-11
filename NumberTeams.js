import React, { Component } from "react";
import styles from "./styles.js";
import logo from "./assets/Ace_of_spades.svg.png";
import { TouchableOpacity, View, Text } from "react-native";

export default class NumberTeams extends React.Component {
  render() {
    const [value, setText] = useState("");

    React.useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
        setText("");
      });
      return unsubscribe;
    }, [navigation]);

    checkNumTeams = () => {
      if (isNaN(value) || value < 1 || value > 4) {
        alert("Enter valid number of teams");
        setText("");
      } else {
        navigation.navigate("EnterTeams");
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Game Title</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}> Back </Text>
        </TouchableOpacity>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.numTeamsText}>
          {" "}
          Enter number teams between 1 and 4!
        </Text>

        <TextInput
          style={styles.textInput}
          label="Number of Teams"
          //onSubmitEditing={handleNumTeams}
          onChangeText={(text) => setText(text)}
          clearButtonMode="always"
          clearTextOnFocus={true}
        />

        <Text> {value} </Text>

        <TouchableOpacity onPress={checkNumTeams} style={styles.button}>
          <Text style={styles.buttonText}> Next </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
