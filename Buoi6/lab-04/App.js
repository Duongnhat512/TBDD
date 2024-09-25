import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini',
    shopName: 'Shop Devang',
    image: './assets/ca_nau_lau.png',
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI',
    shopName: 'LTD Food',
    image: './assets/ga_bo_toi.png',
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    shopName: 'Thế giới đồ chơi',
    image: './assets/xa_can_cau.png',
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shopName: 'Thế giới đồ chơi',
    image: './assets/do_choi_dang_mo_hinh.png',
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    shopName: 'Minh Long Book',
    image: './assets/lanh_dao_gian_don.png',
  },
  {
    id: '6',
    title: 'Hiểu lòng trẻ con',
    shopName: 'Minh Long Book',
    image: './assets/hieu_long_tre_con.png',
  },
  {
    id: '7',
    title: 'Donal Trump Thiên tài lãnh đạo',
    shopName: 'Minh Long Book',
    image: './assets/trump.png',
  }
]

export default function App() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
        <Text>{item.shopName}</Text>
        <Image source={item.image} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem:{
    
  },  
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  }
});
