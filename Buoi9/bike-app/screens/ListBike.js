import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { useFocusEffect, } from '@react-navigation/native'
import React from 'react'

export const ListBike = ({ navigation }) => {
    const [data, setData] = useState([])
    const [selectedBtn, setSelectedBtn] = useState("All")
    const [filteredData, setFilteredData] = useState([])

    const url = "https://66fc952fc3a184a84d17640f.mockapi.io/api/v1"

    const fetchData = async () => {
        try {
            const response = await axios.get(`${url}/bikes`)
            setData(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    const renderBike = ({ item }) => {
        return (
            <View style={{ position: "relative" }}>
                <Image
                    source={(require("../assets/heart.png"))}
                    style={{ position: "absolute", top: 10, left: 10, }}
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: "#E941411A",
                        borderRadius: 5,
                        alignItems: "center",
                        padding: 20,
                        margin: 5
                    }}
                    onPress={() => navigation.navigate("Detail", { item })}
                >
                    <Image
                        source={{ uri: item.img }}
                        style={{ width: 135, height: 127 }}
                    />
                    <Text>{item.name}</Text>
                    <Text>${item.price}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    useFocusEffect(
        React.useCallback(() => {
            fetchData()
            console.log(data);
        }, [])
    );

    const changeBtn = (name) => {
        setSelectedBtn(name)
        filterData()
    }

    const filterData = () => {
        switch (selectedBtn) {
            case "Roadbike":
                setFilteredData(data.filter(item => item.cate === "Roadbike"))
                break
            case "Mountain":
                setFilteredData(data.filter(item => item.cate === "Mountain"))
                break
            default:
                break
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>
                The world's Best Bike
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginVertical: 10
                }}
            >
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => changeBtn("All")}
                >
                    <Text
                        style={[styles.btnText, { color: selectedBtn === "All" ? "#E94141" : "#BEB6B6" }]}
                    >All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => changeBtn("Roadbike")}
                >
                    <Text
                        style={[styles.btnText, { color: selectedBtn === "Roadbike" ? "#E94141" : "#BEB6B6" }]}
                    >Roadbike</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => changeBtn("Mountain")}
                >
                    <Text
                        style={[styles.btnText, { color: selectedBtn === "Mountain" ? "#E94141" : "#BEB6B6" }]}
                    >Mountain</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
                <FlatList
                    data={selectedBtn === "All" ? data : filteredData}
                    renderItem={renderBike}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={{ padding: 10,}}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingVertical: 10,
    },
    btn: {
        // backgroundColor: "#fff",
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#E9414187",
        width: "30%",
        alignItems: "center"
    },
    btnText: {
        fontSize: 20,
    }
})
