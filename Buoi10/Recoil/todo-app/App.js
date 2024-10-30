import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import ToDoListScreen from './components/screens/todolist';
import AddScreen from './components/screens/addscreen'
import { RecoilRoot } from 'recoil';

const Stack = createStackNavigator();

const Screen1 = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleNameChange = (text) => {
    setName(text);
    console.log(name);

  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')}
      />
      <Text style={{ fontSize: 24, width: "50%", textAlign: "center", fontWeight: "bold", color: "#8353E2", }}>
        MANAGE YOUR TASK
      </Text>
      <View style={styles.textInput}>
        <Image
          source={require('./assets/Frame.png')}
        />
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={handleNameChange}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ToDoList', { name })}
      >
        <Text style={{ fontSize: 20, color: "#fff", }}>
          Get Started -{'>'}
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen1} options={{ headerShown: false }} />
        <Stack.Screen name="ToDoList" component={ToDoListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddScreen" component={AddScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
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
    backgroundColor: "#00BDD6",
    padding: 10,
    borderRadius: 10,
    width: "50%",
    alignItems: "center",
    marginTop: 50,
  },
});
