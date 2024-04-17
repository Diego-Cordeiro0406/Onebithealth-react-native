import React, { useState } from "react";
import {
  StyleSheet ,
  View,
  TextInput,
  Text,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import ResultImc from "./ResultImc";

export default function Form() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [appData, setappData] = useState({
    resultMessage: '',
    result: null,
    textButton: 'Calcular'
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const verficateFields = () => !appData.result && setErrorMessage('campo obrigatório*')

  const calculateImc = () => {
    if (height && weight) {
      const heightFormat = height.replace(',', '.')
      Keyboard.dismiss()
      setappData({
        result: (weight / (heightFormat * heightFormat)).toFixed(2),
        resultMessage: 'Seu imc é igual:',
        textButton: 'Calcular Novamente',
      });
      setErrorMessage(null)
      setHeight(null)
      setWeight(null)
    } else {
      verficateFields()
      setappData({
      result: null,
      resultMessage: '',
      textButton: 'Calcular',
    })
    }
  }

  return (
    <View style={ styles.formContainer }>
      <View style={ styles.infoContaIner }>
        <Text style={styles.labelText}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
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
        <Text style={styles.errorMessage}>{errorMessage}</Text>
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
      {
        appData.result && (
          <ResultImc result={appData.result} resultMessage={appData.resultMessage} />
        )
      }
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
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 6,
  }
});