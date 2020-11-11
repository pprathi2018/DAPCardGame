import React, { useState } from "react";
import HomeScreen from "./HomeScreen";
import NumberTeams from "./NumberTeams";
import EnterTeams from "./EnterTeams";
import Packs from "./Packs";
import GameMain from "./GameMain";
import GamePassPlay from "./GamePassPlay";
import GameCard from "./GameCard";
import GameOver from "./GameOver";
import { createAppContainer } from "react-navigation";

/////////////
// App.js
import { createStackNavigator } from "react-navigation-stack";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  NumberTeams: {
    screen: NumberTeams,
  },
  EnterTeams: {
    screen: EnterTeams,
  },
  Packs: {
    screen: Packs,
  },
  GameMain: {
    screen: GameMain,
  },
  GamePassPlay: {
    screen: GamePassPlay,
  },
  GameCard: {
    screen: GameCard,
  },
  GameOver: {
    screen: GameOver,
  },
});

const AppContainer = createAppContainer(AppNavigator);
const bgColor = "rgba(220,20,60,.75)";
