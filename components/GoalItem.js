import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GoalItem = (props) => {
  const { value, id } = props;

  return (
    <TouchableOpacity onPress={() => props.delete(id)}>
      <View style={styles.listItem}>
        <Text style={styles.listText}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};
//
const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    padding: 10,
    marginTop: 15,

    //shadowColor: "#866ab3",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 3,
    shadowRadius: 3,
    elevation: 10,
  },
  listText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000",
    marginHorizontal: 10,
  },
});
export default GoalItem;
