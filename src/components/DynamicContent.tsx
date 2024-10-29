import { View, Text } from 'react-native'
import React from 'react'
     //expression jsx action
const DynamicContent = () => {
    
   const username="nethmina";
   const multiply=(a:number,b:number)=> a*b;
   let me ={name:"net" ,age:22};

  return (
    <View>
      <Text>My name is {username}</Text>
      <Text>2*2 = {multiply(2,2)}</Text>
      <Text>{me.age}</Text>
    </View>
  )
}

export default DynamicContent