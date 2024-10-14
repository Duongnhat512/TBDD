import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Detail } from './components/screens/Detail';

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState("Donut");
  const [filteredData, setFilteredData] = useState([]);

  const url = "https://66fc952fc3a184a84d17640f.mockapi.io/api/v1"

  const fetchAllData = async () => {
    try {
      const response = await axios.get(`${url}/donuts`);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.itemCard}>
        <Image source={{ uri: item.img }} style={{ width: 100, height: 100 }} />
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.description}</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            ${item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace('$', '')}
          </Text>
        </View>
        <TouchableOpacity
          style={{ position: "absolute", bottom: 10, right: 10 }}
          onPress={() => navigation.navigate('Detail', { item })}
        >
          <Image
            source={require('./assets/plus_button.png')}
          />
        </TouchableOpacity>
      </Pressable>
    )
  }

  useEffect(() => {
    fetchAllData();
  })

  const handlePress = (button) => {
    setActiveButton(button);
    switch (button) {
      case "Pink Donut":
        filtDonut('Pink Donut');
        break;
      case "Floating":
        filtDonut('Floating');
        break;
      default:
        break;
    };
  }

  const filtDonut = (name) => {
    const filteredDonut = data.filter(item => item.name === name);
    setFilteredData(filteredDonut);
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20 }}>Welcome, Jala!</Text>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Choice your Best Food</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <TextInput placeholder="Search food" style={styles.search} />
        <Pressable>
          <Image
            source={require('./assets/search.png')}
          />
        </Pressable>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <TouchableOpacity
            style={[styles.collection, { backgroundColor: activeButton === 'Donut' ? '#F1B000' : '#C4C4C41F' }]}
            onPress={() => handlePress('Donut')}
          >
            <Text>Donut</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.collection, { backgroundColor: activeButton === 'Pink Donut' ? '#F1B000' : '#C4C4C41F' }]}
            onPress={() => handlePress('Pink Donut')}
          >
            <Text>Pink Donut</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.collection, { backgroundColor: activeButton === 'Floating' ? '#F1B000' : '#C4C4C41F' }]}
            onPress={() => handlePress('Floating')}
          >
            <Text>Floating</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={activeButton === "Donut" ? data : filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 10,
    padding: 20,
  },
  search: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    color: "gray",
    fontSize: 20,
    width: "80%",
  },
  collection: {
    padding: 10,
    backgroundColor: "#C4C4C42B",
    borderRadius: 5,
    marginVertical: 10,
  },
  itemCard: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    backgroundColor: "#F4DDDD",
    borderRadius: 5,
    marginVertical: 10,
    position: "relative",
  }
});
