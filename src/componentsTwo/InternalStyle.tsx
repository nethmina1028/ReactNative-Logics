import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const InternalStyle = () => {
  return (
    <View>
      <Text style={style.textStyle}>InternalStyle</Text>
    </View>
  )
}

const style = StyleSheet.create({
    textStyle:{
        color:'red',
        fontSize:20,
        backgroundColor:"yellow",
        margin:20,
        padding:10
    }
})

export default InternalStyle