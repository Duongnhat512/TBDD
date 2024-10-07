import { View, StatusBar, TouchableOpacity, Text, Image, StyleSheet, TextInput, FlatList } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native'
import { CheckBox, } from '@rneui/themed';
import axios from 'axios'
import Header from '../header'

const Stack = createStackNavigator()

const ToDoListScreen = () => {
    const route = useRoute()
    const name = route.params.name
    const navigation = useNavigation()
    const url = "https://66fc952fc3a184a84d17640f.mockapi.io/api/v1"

    const [data, setData] = useState([])

    const fetchAllData = async () => {
        try{
            const response = await axios.get(`${url}/tasks`)
            if (response.status === 200) {
                setData(response.data)
            }
        }catch(error){
            console.error("Error fetching data:", error)
        }
    }

    const editData = async (item) => {
        try {
            const updatedDate = data.map((task) => {
                if (task.id === item.id) {
                    return { ...task, status: !task.status, name: item.name }
                }
                return task
            })
            setData(updatedDate)
            const response = await axios.put(`${url}/tasks/${item.id}`, item)
            if (response.status === 200 || response.status === 201) {
                console.log(response.status)
            }
        } catch (error) {
            console.error("Error editing task:", error)
        }
    }

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <CheckBox
                center
                checked={item.status}
                onPress={() => {
                    const updatedItem = { ...item, status: !item.status }
                    editData(updatedItem)
                }}
                containerStyle={{ backgroundColor: "transparent", borderColor: "transparent" }}
            />
            <Text>{item.name}</Text>
            <TouchableOpacity style={{ backgroundColor: "#00BDD6", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }}>
                <Text style={{ color: "#fff" }}>Edit</Text>
            </TouchableOpacity>
        </View>
    )

    useEffect(() => {
        fetchAllData()
    }, [])

    useFocusEffect(() => {
        fetchAllData()
    })

    return (
        <SafeAreaView style={styles.container}>
            <Header
                name={name}
            />
            <View style={styles.body}>
                <View style={styles.searchField}>
                    <Image
                        source={require('../../assets/search_icon.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <TextInput
                        style={{ color: "gray" }}
                        placeholder="Search"
                    />
                </View>
                <View style={styles.listTask}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('AddScreen', {name})}
                >
                    <Text style={{ fontSize: 50, color: "#fff" }}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
    },
    textInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#9095A0",
        padding: 10,
        flexDirection: "row",
        width: "80%",
        gap: 10,
        alignItems: "center",
    },
    button: {
        backgroundColor: "#8353E2",
        padding: 10,
        borderRadius: 10,
        width: "80%",
        alignItems: "center",
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 10,
        flex: 1,
    },
    body: {
        width: '100%',
        alignItems: 'center',
        flex: 11,
        gap: 50,
    },
    searchField: {
        width: '90%',
        backgroundColor: "#fff",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "#9095A0",
        gap: 15,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#DEE1E678",
        borderRadius: 30,
        paddingHorizontal: 10,
        marginVertical: 10,
        // width: "90%",
    },
    listTask: {
        width: "100%",
        // alignItems: "center",
        height: "50%",
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: "#00BDD6",
        borderRadius: 50,
        alignItems: "center",
        paddingHorizontal: 20,
    }
})

export default ToDoListScreen