import React, { useState } from "react";
import { StyleSheet ,View, TextInput, Text, Button, TouchableOpacity } from 'react-native'

import ResultImc from "./ResultImc";

export default function Form() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [appData, setappData] = useState({
    resultMessage: 'Preencha o peso e altura',
    result: null,
    textButton: 'Calcular'
  });

  const calculateImc = () => {
    if (height && weight) {
      setappData({
        result: (weight / (height * height)).toFixed(2),
        resultMessage: 'Seu IMC é igual:',
        textButton: 'Calcular Novamente',
      })
      setHeight(null)
      setWeight(null)
    } else {
      setappData({
      result: null,
      resultMessage: 'Preencha o peso e altura',
      textButton: 'Calcular',
    })
    }
  }

  return (
    <View style={ styles.formContainer }>
      <View style={ styles.infoContaIner }>
        <Text style={styles.labelText}>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          style={styles.input}
          placeholder="ex. 1.70"
          keyboardType="numeric"
        />
      </View>
      <View style={ styles.infoContaIner }>
        <Text style={styles.labelText}>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          style={styles.input}
          placeholder="ex. 90"
          keyboardType="numeric"
        />
      </View>
      <View style={ styles.infoContaIner }>
        <TouchableOpacity
          style={ styles.calculateButton }
          onPress={calculateImc}
        >
          <Text style={ styles.textButton }>{appData.textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc result={appData.result} resultMessage={appData.resultMessage} />
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    paddingTop: 20,
    width: '100%',
  },
  infoContaIner: {
    marginTop: 10,
    marginBottom: 10,
    height: 'auto',
    width: '80%',
  },
  input: {
    backgroundColor: '#F7F5F7',
    borderRadius: 50,
    height: 45,
    paddingLeft: 10,
    width: '100%'
  },
  labelText: {
    fontSize: 18,
    marginLeft: 6,
    // marginTop: 5,
    marginBottom: 5,
  },
  calculateButton: {
    alignItems: 'center',
    backgroundColor: '#FF0043',
    borderRadius: 30,
    height: 50,
    justifyContent: 'center',
    width: '100%'
  },
  textButton: {
    color: '#FFF',
    fontSize: 20

  }
});