import React from "react";

import { StyleSheet ,View, TextInput, Text, Button } from 'react-native'

export default function Form() {
  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          style={styles.form}
          placeholder="ex. 1.70"
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text>Peso</Text>
        <TextInput
          style={styles.form}
          placeholder="ex. 90"
          keyboardType="numeric"
        />
      </View>
      <View>
        <Button title="Calcular"/>
      </View>
      {/* <ResultImc result={resultImc} resultMessage={messageImc} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#fff'
  }
});