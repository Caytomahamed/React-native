import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [entergoal, setEntergoal] = useState("");
  console.log(props.onAdd);

  const handleChage = (text) => {
    setEntergoal(text);
  };

  const handleSubmit = () => {
    props.onAdd(entergoal);
    setEntergoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Add goal"
          style={styles.inputText}
          onChangeText={handleChage}
          value={entergoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={handleSubmit} style={styles.btn} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  inputText: {
    width: "80%",
    color: "#000",
    fontSize: 21,
    fontWeight: "500",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 20,
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
