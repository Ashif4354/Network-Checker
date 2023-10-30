import React, { useState } from 'react';
import axios from 'axios';
import { ScrollView, View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';


const WithAxios = () => {
    const [response, setResponse] = useState(null);
    const [url, setUrl] = useState('');

    const sendRequest = () => {
        axios.get(url)
            .then(res => {
                console.log("RESPONSE ", res.data);
                setResponse("RESPONSE " + res.data);
            })
            .catch(err => {
                console.log("ERROR ", err.message);
                setResponse("ERROR " + err.message);
            }
            )
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput
                    placeholder="URL"   
                    placeholderTextColor="grey"
                    onChangeText={text => setUrl(text)}
                    value={url}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.btn} onPress={sendRequest}>
                    <Text style={styles.btnText}>Send Request</Text>
                </TouchableOpacity>
                <Text style={styles.response}>{response}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
    },
    btnContainer: {
        width: '90%',
        // height: '100%',
        backgroundColor: 'blue',
        // marginTop: 20
    },

    btn: {
        width: '100%',
        height: 40,
        backgroundColor: 'red',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 10
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    input: {
        borderWidth: 1,
        // borderColor: 'grey',
        borderRadius: 5,
        width: '90%',
        marginVertical: 1,
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'black'
    },
    response: {
        fontSize: 16,
        color: 'black',
        marginTop: 10
    }
});

export default WithAxios;
