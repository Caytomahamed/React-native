import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

const GameOver = (props) => {
  const { numberRounds, userNumber, onRest } = props;

  return (
    <View style={styles.screen}>
      <Text>The Game is Over 🌹</Text>
      <Text>Number of Rounds: {numberRounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="Start new Game" onPress={onRest} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
