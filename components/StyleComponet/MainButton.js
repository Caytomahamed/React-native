import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Color from '../../constant/Color'

const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress= {props.onPress}>
        <View style={styles.button} >
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontFamily: "OpenSans-Regular",
    fontSize: 18,
    textAlign: "center",
  },
});

export default MainButton