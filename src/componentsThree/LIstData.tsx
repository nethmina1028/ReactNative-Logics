import { View, Text, FlatList } from 'react-native'
import React from 'react'
         
         //flatlist is used to render the list of data
const LIstData = () => {
    const fruits = ['Banana', 'Mango', 'Apple', 'Orange', 'Pineapple']
  return (
    <View>
      <FlatList 
         data={fruits}  
            keyExtractor={(item)=>item}
           renderItem={({item})=>{
            return<Text>{item}</Text>;
          }}
        />
    </View>
  )
}

export default LIstData