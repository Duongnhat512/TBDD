import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import axios from 'axios';


export const Detail = () => {
    const route = useRoute();
    const { item } = route.params;
    const [quantity, setQuantity] = useState(1);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: "100%" }}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <Image
                        source={{ uri: item.img }}
                        style={{ width: 300, height: 300, marginBottom: 20 }}
                    />
                </View>
                <Text
                    style={{ fontWeight: "bold", fontSize: 30 }}
                >
                    {item.name}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
                    <Text style={{ color: "gray" }}>
                        {item.description}
                    </Text>
                    <Text
                        style={{ fontWeight: "bold", fontSize: 25 }}
                    >
                        ${item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace('$', '')}
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ color: "gray" }}>
                            Delivery in
                        </Text>
                        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                            30 minutes
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                        <TouchableOpacity style={styles.btnQuantity}
                            onPress={() => {
                                if (quantity > 1) {
                                    setQuantity(quantity - 1);
                                }
                            }}
                        >
                            <Text style={styles.btnQtyText}>-</Text>
                        </TouchableOpacity>
                        <Text>{quantity}</Text>
                        <TouchableOpacity style={styles.btnQuantity}
                            onPress={() => setQuantity(quantity + 1)}
                        >
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text
                        style={{ fontWeight: "bold", fontSize: 25 }}
                    >
                        Pink Donut
                    </Text>
                    <Text>
                        Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: "#F1B000",
                    width: "100%",
                    padding: 10,
                    alignItems: "center",
                    borderRadius: 5,
                    marginTop: 20,
                }}
            >
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Add to Cart</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        gap: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: "space-between",
    },
    btnQuantity: {
        backgroundColor: "#F1B000",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        width: 25,
        height: 25,
    },
    btnQtyText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    }
})
