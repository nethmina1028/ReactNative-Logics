import { View, Text,Image } from 'react-native'
import React from 'react'

const ImagesComponents = () => {
  return (
    <View>
      <Text>ImagesComponents</Text>

      <Image 
         source={require('../assets/fu.jpg')}
         style={{width:200,height:200}} 
         />


        <Image 
         source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
         style={{width:200,height:200}} 
         />

    </View>
  )
}

export default ImagesComponents