import { View, Text } from 'react-native'
import React from 'react'
  
    interface ProductProps{
        name:string;
        price:number;
        description:string;
    }

const Product = ({name,price,description}:ProductProps) => {
  return (
    <View>
       <View>
            <Text>{name}</Text>
            <Text>{price}</Text>
            <Text>{description}</Text>
            <Text>_____________________</Text>
       </View>
    </View>
  )
}

export default Product