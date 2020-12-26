import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../components/logo';
import TextInput from '../components/TextInputs';
import Header from '../components/Header';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';

const StartupScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, onChangeText] = React.useState('nicolas.genest@codeboxx.biz');
  // const image = { uri: "https://reactjs.org/logo-og.png" };
  useEffect(() => {
    fetch('https://zaddi.azurewebsites.net/api/employee/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function findArrayElementByTitle(array, title) {
    return array.find((element) => {
      return element.email === title;
    });
  }

  //  console.log(data)
  return (
    <View style={styles.container}>
      <Logo />

      <Text> Welcome to Rocket Elevators</Text>
      <Text style={{ color: 'black', margin: 10 }}>
        Please login using your email.
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder=""
        required
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />

      <TouchableOpacity style={styles.button}>
        <Button
          title="Submit"
          style={styles.button}
          onPress={() => {
            if (findArrayElementByTitle(data, value) != undefined) {
              props.navigation.navigate('Home');
            } else {
              alert('The email entered is not valid');
            }
          }}>
          {' '}
          Log in{' '}
        </Button>
      </TouchableOpacity>
    </View>
  );
};

//Alternative to use the LOGIN, to test, change the export default to LoginApp

const LoginApp = (props) => {
  const [email, setEmail] = useState('');

  const verifyEmail = () => {
    return axios
      .get(`https://zaddi.azurewebsites.net/api/employee/`)
      .then(function (response) {
        const statusCode = response.status;

        if (statusCode == 200) {
          props.navigation.replace('Home');
        }
      })
      .catch(function (error) {
        console.log(`This ${email} is incorrect.`);
        alert(`${email} is not correct`);
      });
  };

  axios.get(`https://zaddi.azurewebsites.net/api/employee/`).then((res) => {
    console.log(res);
    console.log(res.data);
  });

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.viewStyle}>
        <Text style={styles.insertEmail}>Please insert your email</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder=""
          required
          onChangeText={(emailvalue) => {
            setEmail(emailvalue);
          }}
          value={email}
        />
        <TouchableOpacity onPress={() => verifyEmail()} style={styles.button}>
          <Button
            title="Submit"
            onPress={() => verifyEmail()}
            style={styles.button}></Button>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StartupScreen;
