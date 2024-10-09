import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

}

export default function App() {
  const [data, setData] = useState([]);

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
        <Pressable style={{position: "absolute", bottom: "10px", right: "10px"}}>
          <Image
            source={require('./assets/plus_button.png')}
          />
        </Pressable>
      </Pressable>
    )
  }

  useEffect(() => {
    fetchAllData();
  })


  return (
    <View style={styles.container}>
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
      <View>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Pressable style={styles.collection}>
            <Text>Donut</Text>
          </Pressable>
          <Pressable style={styles.collection}>
            <Text>Pink Donut</Text>
          </Pressable>
          <Pressable style={styles.collection}>
            <Text>Floating</Text>
          </Pressable>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
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
