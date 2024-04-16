import React from "react";

import { View, Text, StyleSheet } from 'react-native'

export default function ResultImc(props) {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.messageText}>{props.resultMessage}</Text>
      <Text style={styles.resultText}>{props.result}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '100%'
  },
  messageText: {
    color: '#FF0043',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultText: {
    color: '#FF0043',
    fontSize: 48,
    fontWeight: 'bold',
  },
});