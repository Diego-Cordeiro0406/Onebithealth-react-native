import React from "react";
import { View, StyleSheet } from 'react-native'
import Form from "../Form";

export default function Main() {
  return (
    <View style={styles.mainContainer}>
      <Form />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#E1E7E4',
    height: '75%',
    width: '100%',
  }
});