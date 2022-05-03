import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const Card = props => {
  return (
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 8,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card