import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Button from '../components/Button';
import Status from './Status';
import Login from './Login';

const HomeScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //get request to show all the elevator
  useEffect(() => {
    fetch('https://zaddi.azurewebsites.net/api/elevators/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  //Show all the ID of elevators of Rocket Elevator Inc, When we choose one, it's show us the status page of the elevator that is choosen
  return (
    <View>
      <Button
        title="Logout"
        mode="contained"
        onPress={() => props.navigation.navigate('LoginApp')}>
        Log Out
      </Button>

      <TouchableOpacity>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Button
                Elevator
                ID
                mode="outlined"
                onPress={() => {
                  props.navigation.navigate('Status', {
                    id: item.id,
                  });
                }}>
                {item.id}
              </Button>
            )}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
