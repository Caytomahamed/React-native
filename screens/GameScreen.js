import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/StyleComponet/Card";
import NumberOutput from "../components/StyleComponet/NumberOutput";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  let [current, setCurrent] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  
  const [rounds, setRounds] = useState(0);

  const currentHigh = useRef(100);
  const currentLow = useRef(1);

  const generateNextNumber = (direction) => {
    if (
      (direction === "Lower" && current < props.userChoice) ||
      (direction === "Greater" && current > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "Lower") {
       currentHigh.current = current;
    } else {
      currentLow.current = current;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      current
    );
    setCurrent(nextNumber);
    setRounds(current => current + 1);
  };
  
  const {userChoice, onGameOver} = props

  useEffect(() => {
    if (current === userChoice) {
      onGameOver(rounds);
    }
  }, [current, userChoice, onGameOver]);
  
  return (
    <View style={styles.screen}>
      <Text>Oppenent's Guess</Text>
      <NumberOutput>{current}</NumberOutput>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="LOWER"
            onPress={() => {
              generateNextNumber("Lower");
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="GREATER"
            onPress={() => {
              generateNextNumber("Greater");
            }}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    maxWidth: "80%",
    width: 300,
    marginTop: 20,
  },
  button: {
    width: 100,
  },
});

export default GameScreen;
