import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Color from "../../constant/Color";

const HeaderStyle = props => {
  return (
    <View style= {styles.header}>
        <Text style={styles.headerText}>{props.title}</Text>
    </View>
  )
}

export default HeaderStyle

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: Color.primary,
    paddingTop: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "500",
  },
});