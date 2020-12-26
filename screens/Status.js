import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Appbar, Button } from 'react-native-paper';

const Status = (props) => {
  const { id } = props.route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //
  useEffect(() => {
    fetch(`https://zaddi.azurewebsites.net/api/elevators/`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [data]);

  useEffect(() => {
    return () => {
      console.log('cleaned up');
    };
  }, []);

  //It's the put rquest for the REST API to change the elevators to Inactive if we push the button to do so
  function changeStatus() {
    fetch(`https://zaddi.azurewebsites.net/api/elevators/${id}/Status`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': ' application/json',
      }),
      body: JSON.stringify({
        status: 'Inactive',
      }),
    })
      .then((response) => response.text())
      .then((responseText) => {
        alert(responseText);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // Return the color of the Status. If red, the status is inactive. If green, it's active.
  return (
    <View>
      <TouchableOpacity>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text
            style={[
              styles.status,
              data.elevatorStatus == 'Inactive'
                ? { backgroundColor: 'green' }
                : { backgroundColor: 'red' },
              data.elevatorStatus == 'Active'
                ? { backgroundColor: 'red' }
                : { backgroundColor: 'green' },
            ]}>
            {data.status}
          </Text>
        )}

        <Button
          style={styles.buttonText}
          mode="outlined"
          onPress={() => changeStatus()}>
          PUT THE ELEVATOR INACTIVE
        </Button>

        <Button
          style={styles.buttonText}
          mode="outlined"
          onPress={() => props.navigation.navigate('Home')}>
          Back
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  status: {
    padding: 20,
    borderRadius: 5,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Status;
