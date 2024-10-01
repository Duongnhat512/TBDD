import { View, Image, TouchableOpacity, TextInput, StatusBar, SafeAreaView, FlatList, ImageSourcePropType, StyleSheet, Text } from "react-native";
import { Rating } from "react-native-ratings";

const DATA = [
    {
        id: '1',
        title: 'Cáp chuyển từ cổng USB sang PS2',
        ratings: 4.5,
        price: 69000,
        discount: 39,
        totalReview: 15,
        image: require('./assets/dauchuyendoi.png'),
    },
    {
        id: '2',
        title: 'Cáp chuyển từ cổng USB sang PS2',
        ratings: 4.5,
        price: 69000,
        discount: 39,
        totalReview: 15,
        image: require('./assets/dauchuyendoi.png'),
    },
    {
        id: '3',
        title: 'Cáp chuyển từ cổng USB sang PS2',
        ratings: 4.5,
        price: 69000,
        discount: 39,
        totalReview: 15,
        image: require('./assets/dauchuyendoipsps21.png'),
    },
    {
        id: '4',
        title: 'Cáp chuyển từ cổng USB sang PS2',
        ratings: 4.5,
        price: 69000,
        discount: 39,
        totalReview: 15,
        image: require('./assets/daucam1.png'),
    },
    {
        id: '5',
        title: 'Cáp chuyển từ cổng USB sang PS2',
        ratings: 4.5,
        price: 69000,
        discount: 39,
        totalReview: 15,
        image: require('./assets/giacchuyen1.png'),
    },
    {
        id: '6',
        title: 'Cáp chuyển từ cổng USB sang PS2',
        ratings: 4.5,
        price: 69000,
        discount: 39,
        totalReview: 15,
        image: require('./assets/daynguon1.png'),
    }
]

type ItemProps = {
    id: string,
    title: string,
    ratings: number,
    price: number,
    discount: number,
    totalReview: number,
    image: ImageSourcePropType,
}

const Screen2 = ({ navigation }) => {
    const renderItem = ({ item }: { item: ItemProps }) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Image
                    source={item.image}
                />
                <Text>
                    {item.title}
                </Text>
                <Image
                    source={require('./assets/rating.png')}
                />
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Text>
                        {item.price}
                    </Text>
                    <Text style={{ textDecorationLine: "line-through" }}>
                        {item.discount}%
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
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
                <View style={{width: "70%", backgroundColor: "#fff", padding: 5}}>
                    <Image
                        source={require('./assets/search_icon.png')}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Screen2')}
                >
                    <Image
                        source={require('./assets/cart.png')}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2}
            />
            <View style={styles.footer}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        marginVertical: 8,
        marginHorizontal: 20,
        width: "40%",
        gap: 10,
    },
    title: {
        fontSize: 32,
    },
    btn: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
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
})

export default Screen2;