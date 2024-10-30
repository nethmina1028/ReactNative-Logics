import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const WithState = () => {
     const [count, setCount] =useState(0);

  return (
    <View>
      <Text>Count : {count}</Text>
       <Button title='Increment' onPress={()=>setCount(count +1)} />
        <Text>_____________________________</Text>
       <Button title='Decrement' onPress={()=>setCount(count -1)} />
        

              
    </View>
  )
}

export default WithState