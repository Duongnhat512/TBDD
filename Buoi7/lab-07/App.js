import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

const url = "https://66fc952fc3a184a84d17640f.mockapi.io/api/v1";


export default function App() {
  const [data, setData] = useState([]);
  const fetchAllData = async () => {
    const response = await axios.get(`${url}/todos`)
    console.log(response);
    if (response.status === 200) {
      setData(response.data);
    }
  }
  const addData = async () => {
    const response = await axios.post(`${url}/todos`, { todo: "New todo" })
    if (response.status === 200 || response.status === 201) {
      console.log(response.status);
      fetchAllData();
    }
  }
  const deleteData = async (id) => {
    const response = await axios.delete(`${url}/todos/${id}`)
    console.log(response.status);
    if (response.status === 200 || response.status === 201) {
      fetchAllData();
    }
  }
  const editData = async (id, newTodo) => {
    const data = { todo: newTodo }
    const response = await axios.put(`${url}/todos/${id}`, { data })
    console.log(response.status);
    if (response.status === 200 || response.status === 201) {
      fetchAllData();
    }
  }
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.todo}</Text>
    </View>
  );
  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <View style={[styles.container,]}>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "#3b82f6" }]}
        onPress={() => addData()}
      >
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "red" }]}
        onPress={() => deleteData(3)}
      >
        <Text style={styles.btnText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "#e5e7eb" }]}
        onPress={() => editData(1, "Edit todo")}
      >
        <Text
          style={[styles.btnText, { color: "black" }]}

        >Edit</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  btn: {
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: "50%",
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  }
});
