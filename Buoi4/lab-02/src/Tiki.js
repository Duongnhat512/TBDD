import { Button, Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

function calPrice(price, qty) {
    let total = price * qty;
    return total
}

function setQtyIncrease(qty) {
    return qty + 1;
}

function setQtyDecrease(qty) {
    if (qty > 1) {
        return qty - 1;
    }
    return qty;
}

function Tiki() {
    const [price, setPrice] = useState(141800);
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    const [qty, setQty] = useState(1);
    const basePrice = 141800;

    return (
        <View
            style={style.container}
        >
            <View>
                <View
                    style={{
                        padding: 30,
                        backgroundColor: '#FFFFFF',
                    }}
                >
                    <View
                        style={style.item}
                    >
                        <View style={{ marginRight: 20, paddingTop: 10 }}>
                            <Image
                                source={require('../assets/book.png')}
                            />
                        </View>
                        <View
                            style={{
                                justifyContent: 'space-between',
                            }}
                        >
                            <View>
                                <Text style={[style.text, { lineHeight: 25 }]}>Nguyên hàm tích phân và ứng dụng</Text>
                                <Text style={[style.text, { lineHeight: 25 }]}>Cung cấp bởi Tiki Trading</Text>
                                <Text style={style.price}>
                                    141.800 đ
                                </Text>
                                <Text style={style.oldPrice}>
                                    141800 đ
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 10,
                            }}>
                                <View
                                    style={{
                                        flex: 4,
                                        flexDirection: 'row',
                                        justifyContent: 'start',
                                    }}
                                >
                                    <TouchableOpacity
                                        style={style.button}
                                        onPress={() => {
                                            setQty(prevQty => {
                                                const newQty = setQtyDecrease(prevQty);
                                                setPrice(calPrice(basePrice, newQty));
                                                return newQty;
                                            });
                                        }}
                                    >
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                    <Text style={style.buttonText}>{qty}</Text>
                                    <TouchableOpacity
                                        style={[style.button, flex = 2]}
                                        onPress={() => {
                                            setQty(prevQty => {
                                                const newQty = setQtyIncrease(prevQty);
                                                setPrice(calPrice(basePrice, newQty));
                                                return newQty;
                                            });
                                        }}
                                    >
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity>
                                    <Text style={{ color: "#134FEC" }}>Mua sau</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                        }}
                    >
                        <Text style={[style.text, { marginRight: 20 }]}>Mã giảm giá đã lưu</Text>
                        <TouchableOpacity>
                            <Text style={{ color: "#134FEC", fontSize: 12 }}>
                                Xem tại đây
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 40,
                        }}
                    >
                        <TouchableOpacity
                            style={style.voucher}
                        >
                            <Text>
                                Mã giảm giá
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#348ceb",
                                width: 100,
                                height: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5,
                            }}
                        >
                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                                Áp dụng
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        padding: 20,
                        backgroundColor: '#FFFFFF',
                        marginTop: 20,
                        flexDirection: 'row',
                    }}
                >
                    <Text style={style.text}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                    <TouchableOpacity>
                        <Text style={{ color: "#134FEC", fontSize: 12, marginLeft: 10 }}>
                            Nhập tại đây
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        padding: 20,
                        backgroundColor: '#FFFFFF',
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Tạm tính
                    </Text>
                    <Text style={style.price}>
                        {formattedPrice}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    padding: 20,
                    backgroundColor: '#FFFFFF',
                    marginTop: 20,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Thành tiền
                    </Text>
                    <Text style={style.price}>
                        {formattedPrice}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#E53935",
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        marginTop: 30
                    }}
                >
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                        TIẾN HÀNH ĐẶT HÀNG
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C4C4C4',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    item: {
        flexDirection: 'row',
    },

    text: {
        fontSize: 12,
        fontWeight: 'bold',
    },

    oldPrice: {
        fontSize: 12,
        color: "#808080",
        textDecorationLine: "line-through"
    },

    price: {
        fontSize: 18,
        color: "#EE0D0D",
        fontWeight: "bold"
    },

    buttonText: {
        marginLeft: 10,
        marginRight: 10,
    },

    button: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        borderRadius: 5,
    },

    voucher: {
        borderWidth: 1,
        borderColor: '#808080',
        padding: 10,
        borderRadius: 5,
        width: 200,
    },
});

export default Tiki;