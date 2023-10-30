import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Axios1')}>
                    <Text style={styles.btnText}>Post1(Axios)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Fetch1')}>
                    <Text style={styles.btnText}>Post2(Fetch)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('GetWithAxios')}>
                    <Text style={styles.btnText}>GetWithAxios</Text>    
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('GetWithFetch')}>
                    <Text style={styles.btnText}>GetWithFetch</Text>
                </TouchableOpacity>
                


            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
    },
    btnContainer: {
        width: '90%',
        // height: '100%',
        // backgroundColor: 'blue',
        // marginTop: 20
    },

    btn: {
        width: '100%',
        // height: 40,
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },

});
export default Home;