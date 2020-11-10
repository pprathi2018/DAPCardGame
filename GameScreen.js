import React from "react";
import { createDeckAndDraw } from "./api";
import { CardLayout } from "./layout.components";

export default class GameScreen extends React.Component {
  state = {
    cardImageUrl: null,
    cardValue: null,
    deckId: null,
  };

  async componentDidMount() {
    const { deckId, value, image } = await createDeckAndDraw();
    this.setState({
      deckId,
      cardValue: value,
      cardImageUrl: image,
    });
  }

  render() {
    console.log(this.state);
    return (
      <CardLayout>
        <img src={this.state.cardImageUrl} alt="This is your card" />
      </CardLayout>
    );
  }
}
