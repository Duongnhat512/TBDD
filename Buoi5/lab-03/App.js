import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';

const Stack = createStackNavigator();

const color = "blue";

function ItemScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 5 }}>
        <View>
          <Image
            source={require('./assets/vs_blue.png')}
          />
        </View>
        <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.rating}>
            <Image
              source={require('./assets/star.png')}
            />
            <Image
              source={require('./assets/star.png')}
            />
            <Image
              source={require('./assets/star.png')}
            />
            <Image
              source={require('./assets/star.png')}
            />
            <Image
              source={require('./assets/star.png')}
            />
          </View>
          <Text style={{ flex: 3 }}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ flexDirection: "row", height: 40 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              flex: 3,
            }}
          >1.790.000 đ</Text>
          <Text
            style={{
              fontSize: 15,
              textDecorationLine: 'line-through',
              color: "#00000094",
              flex: 3,
            }}
          >1.790.000 đ</Text>
        </View>
        <View style={{ flexDirection: "row", height: 30 }}>
          <Text
            style={{
              color: "#FA0000",
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Image
              source={require('./assets/Group 1.png')}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Color Picker');
          }}
        >
          <View></View>
          <Text>4 MÀU-CHỌN MÀU</Text>
          <Image
            source={require('./assets/Vector.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          ...styles.button,
          marginTop: 10,
          backgroundColor: "#CA1536",
          fontSize: 20,
          justifyContent: 'center',
          width: '90%',
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: 'bold',
          }}
        >CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

function ItemColorPicker() {
  const price = 1790000;
  const moneyFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);

  const [colorSrc, setColorSrc] = useState(require('./assets/vs_blue.png'));

  function changeColor(color) {
    switch (color) {
      case 'blue':
        setColorSrc(require('./assets/vs_blue.png'));
        break;
      case 'red':
        setColorSrc(require('./assets/vs_red.png'));
        break;
      case 'black':
        setColorSrc(require('./assets/vs_black.png'));
        break;
      case 'silver':
        setColorSrc(require('./assets/vs_silver.png'));
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          flex: 1,
        }}
      >
        <Image
          source={colorSrc}
          style={{
            width: 112,
            height: 132,
            marginRight: 10,
            resizeMode: 'contain',
          }}
        />
        <View>
          <Text>Điện thoại Vsmart Joy 3</Text>
          <Text>Hàng chính hãng</Text>
          <Text style={{ lineHeight: 25 }}>Màu: {color}</Text>
          <Text style={{ lineHeight: 25 }}>Cung cấp bởi Tiki Tradding</Text>
          <Text style={{ fontWeight: "bold", fontSize: 18, lineHeight: 30 }}>{moneyFormat}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 5,
          marginTop: 20,
          width: '100%',
          justifyContent: "space-between",
          backgroundColor: "#C4C4C4",
          padding: 10,
        }}>
        <View style={{ flex: 5 }}>
          <Text>Chọn một màu bên dưới:</Text>
          <View style={{ alignItems: "center", justifyContent: "space-around", flex: 5 }}>
            <TouchableOpacity
              style={{
                ...styles.colorPicker,
                backgroundColor: '#C5F1FB',
              }}
              onPress={() => {
                changeColor('silver');
              }}
            >
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#F30D0D',
                ...styles.colorPicker,
              }}
              onPress={() => {
                changeColor('red');
              }}
            >
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.colorPicker,
                backgroundColor: '#000000',
              }}
              onPress={() => {
                changeColor('black');
              }}
            >
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.colorPicker,
                backgroundColor: '#234896',
              }}
              onPress={() => {
                changeColor('blue');
              }}
            >
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: "#1952E294",
            borderWidth: 0,
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Item">
        <Stack.Screen name="Item" component={ItemScreen} />
        <Stack.Screen name="Color Picker" component={ItemColorPicker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    flex: 3,
  },
  button: {
    borderWidth: 1,
    borderColor: '#00000094',
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  colorPicker: {
    width: 80,
    height: 80,
    margin: 10,
  },
});
