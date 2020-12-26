import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Logo from './components/logo'
import TextInput from './components/TextInputs'
import Header from './components/Header'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Status from './screens/Status'
import  LoginApp from './screens/Login'
import 'react-native-gesture-handler';
import Home from './screens/Home'
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';

const Stack = createStackNavigator();

//This is the differents page of Rocket Elevator Mobile

function App() {
  return (
     <View style={styles.container}>
      <Stack.Navigator>
         <Stack.Screen name="LoginApp" component={LoginApp} />
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Status" component={Status} />
      </Stack.Navigator>
</View>
  );
}
export default ()=>{
  return(
    <NavigationContainer>
<App/>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});