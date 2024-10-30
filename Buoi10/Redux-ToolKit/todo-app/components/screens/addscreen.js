import { useRoute, useNavigation } from '@react-navigation/native';
import Header from '../header';
import { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createData } from '../../apiSlice';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import store from '../../store'

const MainComponent = () => {
    const route = useRoute();
    const name = route.params.name;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    
    const [taskName, setTaskName] = useState('');

    const addData = () => {
        dispatch(createData({ title: taskName }));
        navigation.navigate('ToDoList', { name });
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
            </View>
        </SafeAreaView>
    );
};

const AddScreen = () => {
    return (
        <Provider store={store} >
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
    body: {
        flex: 1,
        width: '100%',
        padding: 20,
    },
    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
});

export default AddScreen;