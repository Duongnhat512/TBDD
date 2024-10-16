import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Detail = () => {
    const route = useRoute()
    const { item } = route.params
    return (
        <SafeAreaView>
            <Image
                source={{ uri: item.img}}
                style={{ width: 300, height: 300 }}
            />
            <Text>{item.name}</Text>
        </SafeAreaView>
    )
}
