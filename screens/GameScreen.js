import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert,FlatList } from "react-native";
import Card from "../components/StyleComponet/Card";
import MainButton from "../components/StyleComponet/MainButton";
import NumberOutput from "../components/StyleComponet/NumberOutput";
import { Ionicons } from '@expo/vector-icons';
import BodyText from "../components/StyleComponet/BodyText";


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

const renderPassGuess = (listLenght , itemData) => {
  return (
    <View style={styles.listItem}>
      <BodyText>#{listLenght - itemData.index}</BodyText>
      <Ionicons name="ios-checkmark-circle-outline" size={24} color="green" />
      <BodyText>{itemData.item}</BodyText>
    </View>
  );
};

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  let [current, setCurrent] = useState(initialGuess);
  const [passGuess, setPassGuess] = useState([initialGuess.toString()]);

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
      currentLow.current = current + 1 ;  // +1 to exclude the current guess
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      current
    );
    setCurrent(nextNumber);
    setPassGuess((prevGuess) => [nextNumber.toString(), ...prevGuess]);
  };
  
  const {userChoice, onGameOver} = props

  useEffect(() => {
    if (current === userChoice) {
      onGameOver(passGuess.length);
    }
  }, [current, userChoice, onGameOver]);
  
  return (
    <View style={styles.screen}>
      <Text>Oppenent's Guess</Text>
      <NumberOutput>{current}</NumberOutput>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <MainButton
            onPress={() => {
              generateNextNumber("Lower");
            }}
          >
            <Ionicons name="md-remove" size={24} color="white" />
          </MainButton>
        </View>
        <View style={styles.button}>
          <MainButton
            onPress={() => {
              generateNextNumber("Greater");
            }}
          >
            <Ionicons name="md-add" size={24} color="white" />
          </MainButton>
        </View>
      </Card>
      <View style={styles.listConainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {passGuess.map((guess, index) => renderPassGuess(guess, passGuess.length - index))}
        </ScrollView> */}
        <FlatList
         keyExtractor={(item) => item}
          data={passGuess}
          renderItem={( item ) => renderPassGuess(passGuess.length, item)}
          contentContainerStyle={styles.list}
        />
      </View>
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
    maxWidth: "90%",
    width: 400,
    marginTop: 20,
  },
  button: {
    width: 100,
  },
  listConainer: {
    flex: 1,
    width: "60%",
  },
  list : {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default GameScreen;
