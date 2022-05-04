import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import HeaderStyle from "./components/StyleComponet/HeaderStyle";
import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";
import  {AppLoading } from "expo";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  let [fontsLoaded] = useFonts({
   "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
   "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setSelectedNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setSelectedNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGame onStartGame={startGameHandler} />;


  if (selectedNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={selectedNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        numberRounds={guessRounds}
        userNumber={selectedNumber}
        onRest={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <HeaderStyle title="Gusse a Number" />
      {content}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

// container: {
//   paddingHorizontal: 30,
//   paddingTop: 50,
//   position: "relative",
//   height: "100%",
// },
// notList: {
//   backgroundColor: "#f3f3f3",
//   color: "black",
//   padding: 20,
//   marginBottom: 10,
//   fontSize: 21,
//   fontWeight: "500",
// },
// });
