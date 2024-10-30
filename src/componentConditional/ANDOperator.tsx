import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ANDOperator = () => {
    const groceries =["milk","apple","banana","datu"]

  return (
    <View>
        <Text 
        style={{backgroundColor:'red',margin:20,textAlign:'center'}}>    
            Cart
        </Text>

           {groceries.length>0 &&(
            <Text>You hve {groceries.length} Items in ur cart</Text>
           )}


     <FlatList
        data={groceries}
        renderItem={({item}) =><Text>{item}</Text>}
         />
    </View>
  )
}

export default ANDOperator