import React from "react";

import { View, Text, StyleSheet } from 'react-native'

export default function Title() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.textTitle}>ONEBITHEALTH</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    backgroundColor: '#E1E7E4',
    flex: 1,
    height: '25%',
    justifyContent: 'center',
    width: '100%',
  },
  textTitle: {
    color: '#FF0043',
    fontSize: 24,
    fontWeight: 'bold',
  }
});