import React, { useState } from "react";
import {
  StyleSheet ,
  View,
  TextInput,
  Text,
  Keyboard,
  TouchableOpacity,
  FlatList,
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
  const [historyData, setHistoryData] = useState([]);

  const verficateFields = () => !appData.result && setErrorMessage('campo obrigatório*')

  const calculateImc = () => {
    if (height && weight) {
      const heightFormat = height.replace(',', '.')
      Keyboard.dismiss()
      const resultData = (weight / (heightFormat * heightFormat)).toFixed(2)
      setappData({
        result: resultData,
        resultMessage: 'Seu imc é igual:',
        textButton: 'Calcular Novamente',
      });
      setHistoryData((arr) => [...arr, {id: new Date().getTime(), imc: resultData}])
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
      {
        appData.result ? (
        <View style={ styles.infoContaIner }>
          <ResultImc result={appData.result} resultMessage={appData.resultMessage} />
          <TouchableOpacity
              style={ styles.calculateButton }
              onPress={calculateImc}
          >
            <Text style={ styles.textButton }>{appData.textButton}</Text>
          </TouchableOpacity>
          <View style={styles.listContainer}>
            <Text style={styles.historyText}>Calculos recentes</Text>
            <FlatList
              data={historyData}
              renderItem={({item}) => (
                <Text style={styles.historyImcText}>{item.imc}</Text>)
              }
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        ) : (
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
          </View>
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
  },
  listContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyText: {
    color: '#FF0043',
    fontSize: 24,
    fontWeight: 'bold',
  },
  historyImcText : {
    color: '#FF0043',
    fontSize: 24,
    fontWeight: 'bold',
  }
});