import { View, Image, TouchableOpacity, TextInput, StatusBar, SafeAreaView, FlatList, ImageSourcePropType } from "react-native";

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



const Screen2 = () => {
    const renderItem = ({ item }: { item: ItemProps }) => {
        
    }
    return (
        <SafeAreaView>

        </SafeAreaView>
    );
}

export default Screen2;