import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>
     
          {/* First method */}
      <Button title='Click me' color="purple"/>

        {/* Second method */}
    <Button
     title='Press' 
     onPress={()=>console.warn('pressed')}
      />

    <Button
     title='Press alert' 
     color='red'
     onPress={()=>alert('pressed me')}
      />
    
    <Text>OnPress action</Text>
       
       <Pressable onPress={()=>console.log("pressed")}>
        <Text style={{color:"teal"}}>Press me</Text>
       </Pressable>

       <Pressable onPressIn={()=>console.log("on pressedIn")}>
        <Text style={{color:"blue"}}>Press In me</Text>
       </Pressable>

       <Pressable onPressOut={()=>console.log("on pressedOut")}>
        <Text style={{color:"cyan"}}>Press out me</Text>
       </Pressable>

       <Pressable onLongPress={()=>console.log("on pressed Long")}>
        <Text style={{color:"cyan"}}>onLongPress</Text>
       </Pressable>


    </View>
  )
}

export default ButtonComponent