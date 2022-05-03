import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Color from "../../constant/Color";

const NumberOutput = props => {
  return <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor:Color.accent,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 22,
    color: Color.accent
  },
});

export default NumberOutput;
