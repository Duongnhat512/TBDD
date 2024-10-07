import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native'
import Header from '../header'
import { useState } from 'react'
import axios from 'axios'

const AddScreen = () => {
    const route = useRoute()
    const name = route.params.name
    const navigation = useNavigation()
    
    const [taskName, setTaskName] = useState('')

    const url = "https://66fc952fc3a184a84d17640f.mockapi.io/api/v1";

    const addData = async () => {
        try {
            const response = await axios.post(`${url}/tasks`, { name: taskName, status: false });
            if (response.status === 200 || response.status === 201) {
                console.log('Task added successfully');
                navigation.navigate('ToDoList', { name });
            }
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header name={name} />
            <View style={styles.body}>
                <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 50 }}>
                    Add Your Job
                </Text>
                <View style={styles.textInput}>
                    <Image
                        source={require('../../assets/frame1.png')}
                    />
                    <TextInput
                        placeholder="Input your job"
                        style={{ width: "85%" }}
                        value={taskName}
                        onChangeText={setTaskName}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={addData}
                >
                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>Finish -{'>'}</Text>
                </TouchableOpacity>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ width: 200, height: 200 }}
                />
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
    },
    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        width: '80%',
        gap: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00BDD6',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: '40%',
    },
    body: {
        width: '100%',
        alignItems: 'center',
        flex: 11,
        gap: 50,
    },
})

export default AddScreen