import React from "react";
import { View, Text, StyleSheet, Button , Image} from "react-native";
import BodyText from "../components/StyleComponet/BodyText";
import MainButton from "../components/StyleComponet/MainButton";
import Color from "../constant/Color";
import DefaultStyle from "../constant/DefaultStyle";


const GameOver = (props) => {
  const { numberRounds, userNumber, onRest } = props;

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyle.title}>The Game is Over 🌹</Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          //local one source={require("../assets/success.png")}
          source={{
            uri: "https://images.pexels.com/photos/2747448/pexels-photo-2747448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }} // online source
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText style={styles.resultContainer}>
        Your phone needed <Text style={styles.highlight}> {numberRounds} </Text>{" "}
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber} </Text>
      </BodyText>
      <MainButton onPress={onRest} >Start New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 15,
    marginVertical: 15,
    textAlign: "center",
  },
  highlight: {
    color: Color.primary,
    fontFamily: "OpenSans-Bold",
  },
});

export default GameOver;
