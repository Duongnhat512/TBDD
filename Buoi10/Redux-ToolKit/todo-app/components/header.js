import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, StyleSheet } from 'react-native'

const Header = ({name}) => {
    return (
        <View
            style={styles.header}
        >
            <Image
                source={require('../assets/left-arrow.png')}
                style={{ width: 20, height: 20, margin: 10 }}
            />
            <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                <Image
                    source={require('../assets/logo.png')}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                />
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Hi {name}</Text>
                    <Text style={{ color: "gray" }}>Have agrate day ahead</Text>
                </View>
            </View>
            <View />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 10,
        flex: 1,
    },
})

export default Header