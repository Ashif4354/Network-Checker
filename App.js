import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Pages/Home/Home';
import Axios1 from './src/Pages/Post/Axios1';
import Fetch1 from './src/Pages/Post/Fetch1';
import WithAxios from './src/Pages/Get/WithAxios';  
import WithFetch from './src/Pages/Get/WithFetch';


const MyStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="Home" component={Home} />
        <MyStack.Screen name="Axios1" component={Axios1} />
        <MyStack.Screen name="GetWithAxios" component={WithAxios} />
        <MyStack.Screen name="GetWithFetch" component={WithFetch} />
        <MyStack.Screen name="Fetch1" component={Fetch1} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
}

export default App;