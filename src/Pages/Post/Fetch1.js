import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'


const Fetch1 = () => {
    const [url, setUrl] = useState('');
    const [body, setBody] = useState('');
    const [headers, setHeaders] = useState('');
    const [response, setResponse] = useState('');

    const sendRequest = () => {
        console.log('Pressed');
        console.log(url);
        console.log(body);
        console.log(headers);

        const bodyy = JSON.parse(body);
        const header = JSON.parse(headers);

        fetch(url, { method: 'POST', body: bodyy, headers: header })
            .then((response) => response.json())
            .then((json) => {
                console.log("RESPONSE", json);
                setResponse("RESPONSE" + json);
            })
            .catch((error) => {
                console.error("ERROR", error);
                setResponse("ERROR" + error);
            });
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
                    value={body}
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
        // width: '100%',
        // height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
    },
    input: {
        width: '90%',
        // height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 10,
        paddingLeft: 10
    },
    btn: {
        width: '90%',
        // height: 40,
        backgroundColor: 'red',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        padding: 10
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    response: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 10
    }
});

export default Fetch1;

