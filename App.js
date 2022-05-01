import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAdding, setIsAdding] = useState(false); 

  const handleSubmit = (goal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goal },
    ]);
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    const removeGoal = goals.filter((item) => item.id !== id);
    setGoals(removeGoal);
  };
  
  const handleCancel = () => {
    setIsAdding(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add Goal" onPress={() => setIsAdding(true)} />
      <GoalInput
        onAdd={handleSubmit}
        visible={isAdding}
        onCancel={handleCancel}
      />
      {goals.length ? (
        <FlatList
          data={goals}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <GoalItem {...item} delete={handleDelete} />
          )}
        />
      ) : (
        <Text style={styles.notList}>🔥 No goals added yet </Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 50,
    position: "relative",
    height: "100%",
  },
  notList: {
    backgroundColor: "#f3f3f3",
    color: "black",
    padding: 20,
    marginBottom: 10,
    fontSize: 21,
    fontWeight: "500",
  },
});
