import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {
  const [sum, setSum] = useState(0)

  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={() => {
          setSum(sum + 1)
        }}
      />
      <Text style={{ fontSize: 24 }}>
        {sum}
      </Text>
    </View>
  )
}