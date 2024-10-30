import { View, StatusBar, TouchableOpacity, Text, Image, StyleSheet, TextInput, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native'
import { CheckBox, Tile, } from '@rneui/themed';
import axios from 'axios'
import Header from '../header'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { fetchData, createData, updateData, deleteData } from '../../apiSlice';
import store from '../../store'

const Stack = createStackNavigator()

const MainComponent = () => {
    const route = useRoute()
    const name = route.params.name
    const navigation = useNavigation()

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [updateId, setUpdateId] = useState(null);

    const { data, loading, error } = useSelector((state) => state.api)

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleUpdate = () => {
        dispatch(updateData({id: updateId, updateData: {title: title}}));
        setTitle('');
        setUpdateId(null);
    }
    
    const handleDelete = () => {
        dispatch(deleteData(updateId));
        setTitle('');
        setUpdateId(null);
    }

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <CheckBox
                center
                checked={item.status}
                onPress={() => {
                    const updatedItem = { ...item, status: !item.status }
                    handleUpdate(updatedItem)
                }}
                containerStyle={{ backgroundColor: "transparent", borderColor: "transparent" }}
            />
            <Text>{item.title}</Text>
            <TouchableOpacity style={{ backgroundColor: "#00BDD6", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }}>
                <Text style={{ color: "#fff" }}>Edit</Text>
            </TouchableOpacity>
        </View>
    )

    useFocusEffect(
        useCallback(() => {
            dispatch(fetchData());
        }, [dispatch])
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

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
                    onPress={() => navigation.navigate('AddScreen', { name })}
                >
                    <Text style={{ fontSize: 50, color: "#fff" }}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const ToDoListScreen = () => {
    return (
        <Provider store={store}>
            <MainComponent />
        </Provider>
    );
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