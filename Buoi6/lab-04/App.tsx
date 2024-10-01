import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { ImageSourcePropType } from 'react-native';
import Screen2 from './4_b.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini',
    shopName: 'Shop Devang',
    image: require('./assets/ca_nau_lau.png'),
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI',
    shopName: 'LTD Food',
    image: require('./assets/ga_bo_toi.png'),
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    shopName: 'Thế giới đồ chơi',
    image: require('./assets/xa_can_cau.png'),
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shopName: 'Thế giới đồ chơi',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    shopName: 'Minh Long Book',
    image: require('./assets/lanh_dao_gian_don.png'),
  },
  {
    id: '6',
    title: 'Hiểu lòng trẻ con',
    shopName: 'Minh Long Book',
    image: require('./assets/hieu_long_con_tre.png'),
  },
  {
    id: '7',
    title: 'Donal Trump Thiên tài lãnh đạo',
    shopName: 'Minh Long Book',
    image: require('./assets/trump.png'),
  }
]

type ItemProps = {
  id: string,
  title: string,
  shopName: string,
  image: ImageSourcePropType,
}

const renderItem = ({ item }: { item: ItemProps }) => {
  return (
    <View style={styles.item}>
      <Image
        source={item.image}
      />
      <View style={{ width: "50%" }}>
        <Text>{item.title}</Text>
        <Text style={{ color: "red" }}>{item.shopName}</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "#fff" }}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const Screen1 = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <View
        style={styles.header}
      >
        <TouchableOpacity
        >
          <Image
            source={require('./assets/arrow-left.png')}
          />
        </TouchableOpacity>

        <Text>Chat</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Screen2')}
        >
          <Image
            source={require('./assets/cart.png')}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>Bạn có thắc mắc gì với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={false}
      />
      <View
        style={styles.footer}
      />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen1'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
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
    marginTop: StatusBar.currentHeight
  },
  header: {
    backgroundColor: "#1BA9FF",
    width: "100%",
    height: "5%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  footer: {
    backgroundColor: "#1BA9FF",
    width: "100%",
    height: "5%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    width: '100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  btn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
