import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import BodyText from "../components/StyleComponet/BodyText";

import Card from "../components/StyleComponet/Card";
import Input from "../components/StyleComponet/Input";
import MainButton from "../components/StyleComponet/MainButton";
import NumberOutput from "../components/StyleComponet/NumberOutput";
import Color from "../constant/Color";
import DefaultStyle from "../constant/DefaultStyle";


const StartGame = (props) => {
  const [enterValue, setEnterValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (enteredText) => {
    setEnterValue(enteredText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnterValue("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enterValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        { text: "okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirm(true);
    setSelectedNumber(chosenNumber);
    setEnterValue("");
    Keyboard.dismiss();
  };

  let confirmOutput;
  if (confirm) {
    confirmOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={DefaultStyle.text}>You selected</Text>
        <NumberOutput>{selectedNumber}</NumberOutput>
        <MainButton
          onPress={() => props.onStartGame(selectedNumber)}
        >Game Start</MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={DefaultStyle.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <BodyText>Select Number</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            outoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enterValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                style={styles.button}
                title="Reset"
                color={Color.accent}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                style={styles.button}
                title="Confirm"
                onPress={confirmInputHandler}
                color={Color.primary}
              />
            </View>
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    fontSize: 18,
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGame;
