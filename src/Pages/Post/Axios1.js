import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Axios1 = () => {
  const [ip, setIp] = useState('');
  const [bodyy, setBody] = useState('');
  const [headers, setHeaders] = useState('');
  const [response, setResponse] = useState('');

  const sendRequest = () => {
    console.log('Pressed');
    console.log(ip);
    console.log(bodyy);
    console.log(headers);

    const body = JSON.parse(bodyy);
    const header = JSON.parse(headers);

    axios.post(ip, body, { headers: header }, httpsAgent = require('https'))
      .then(res => {
        console.log("RESPONSE", res.data);
        setResponse("RESPONSE" + res.data);
      })
      .catch(err => {
        console.log("ERROR", err.message);
        setResponse("ERROR" + err.message);
      }
      )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Network Checker</Text>

      <View style={styles.formContainer}>
        <TextInput
          placeholder="IP address"
          onChangeText={text => setIp(text)}
          value={ip}
          placeholderTextColor="grey"
          style={styles.input}
        />
        <TextInput
          placeholder="headers"
          placeholderTextColor="grey"
          multiline
          numberOfLines={6}
          onChangeText={text => setHeaders(text)}
          value={headers}
          style={styles.input}
        />
        <TextInput
          placeholder="body"
          multiline
          numberOfLines={6}
          placeholderTextColor="grey"
          onChangeText={text => setBody(text)}
          value={bodyy}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={sendRequest}
          style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>

        <View style={styles.responseContainer}>
          <Text style={styles.responseText}>{response}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    // justifyContent:'center',
    // backgroundColor: 'yellow',
  },
  text: {
    fontSize: 30,
    color: 'red'
  },
  formContainer: {
    // backgroundColor: 'blue',
    width: '90%',
    height: '100%',
    // alignItems: 'center',
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    // borderColor: 'grey',
    borderRadius: 5,
    // width: '90%',
    marginVertical: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'black'
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  responseContainer: {
    width: '100%',
    height: '46%',
    // backgroundColor: 'grey',
    marginTop: 2,
    borderRadius: 5,
    padding: 10
  },


})

export default Axios1;