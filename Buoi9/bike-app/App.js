import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ListBike } from './screens/ListBike';
import { Detail } from './screens/Detail'

const Stack = createStackNavigator();

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold' }}
      >A premium online store for sporter and their stylish choice</Text>
      <View
        style={styles.card}
      >
        <Image
          source={{ uri: "https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffBKVxcHy15mVMq7OEP3o5hFHCJWxypoIz0H2ESLy-4mPStipA-AYPsiCTlQ4yOvkI6l2ZE2ZmhSRODPwqreye3Xt1rTP5UI-xRnCrcDzf92w1UkN2AJrbv4N8em6Ugi~bSArHE6icqM7XCIbkuLofZJX~lI6IgkscUqGAkUGYBZTQgAaMU~sM8W2WLGsxdklUbkVmTIODLQDDZtAOoKaPhULcxg64F3vf2-houa-vw2XoIqWI5xBcL26x9xJiLD1ylWlmK~0OAwlboimHTt599QF5H0HpYzln9WMKcDqlntVTZQegSIZm-xBZa6-Jsdwi4kpOh4KK~35aZRM3jhag__" }}
          style={{ width: 292, height: 275 }}
        />
      </View>
      <Text
        style={{ fontSize: 26, textAlign: 'center', fontWeight: 'bold' }}
      >
        Power Bike Shop
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#E94141",
          padding: 10,
          borderRadius: 30,
          marginTop: 50,
          width: "90%"
        }}
        onPress={() => navigation.navigate("ListBike")}
      >
        <Text
          style={{ fontSize: 27, textAlign: 'center', color: "#fff" }}
        >
          Get Started
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
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="ListBike" component={ListBike} options={{headerShown: false}}/>
        <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}/> 
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
    padding: 10,
    gap: 30
  },
  card: {
    width: "100%",
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 60,
    backgroundColor: "#E941411A",
    borderRadius: 40,
  },
});
