import { View, StatusBar, TouchableOpacity, Text, Image, StyleSheet, TextInput, FlatList, ActivityIndicator, Button } from 'react-native';
import React, { useEffect, startTransition } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState, RecoilRoot } from 'recoil';
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';
import { CheckBox } from '@rneui/themed';
import { tasksState, fetchTasks, updateTask, deleteTask } from '../../atoms';
import Header from '../header';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainComponent = () => {
    const route = useRoute();
    const name = route.params.name;
    const navigation = useNavigation();

    const [tasks, setTasks] = useRecoilState(tasksState);
    const fetchedTasks = useRecoilValue(fetchTasks);
    const setUpdatedTask = useSetRecoilState(updateTask);
    const setDeletedTask = useSetRecoilState(deleteTask);

    useEffect(() => {
        setTasks(fetchedTasks);
    }, [fetchedTasks, setTasks]);

    const handleUpdate = (task) => {
        const updatedTask = { ...task, status: !task.status };
        setUpdatedTask(updatedTask);
    };

    const handleDelete = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setDeletedTask(deleteTask);
    };

    const renderItem = ({ item }) => (
        <View key={item.id} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>{item.title}</Text>
            <Button title="Update" onPress={() => handleUpdate(item)} />
            <Button title="Delete" onPress={() => handleDelete(item.id)} />
        </View>
    );

    if (!tasks.length) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header name="ToDo List" />
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
                        data={tasks}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('AddScreen', { name: 'ToDo List' })}
                >
                    <Text style={{ fontSize: 50, color: "#fff" }}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const ToDoListScreen = () => {
    return (
        <RecoilRoot>
            <SafeAreaView style={styles.container}>
                <MainComponent />
            </SafeAreaView>
        </RecoilRoot>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        gap: 30,
    },
    body: {
        flex: 1,
        width: '100%',
        padding: 20,
    },
    searchField: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    listTask: {
        flex: 1,
    },
    button: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#007BFF',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ToDoListScreen;