import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ArrayOfObject = () => {
      const location = [
        {
            id:1,
            name:'Mumbai',

        },
        {
            id:2,
            name:'Pune',

        },
        {
            id:3,
            name:'Delhi',

        },
        {
            id:4,
            name:'Bangalore',

        },
        {
            id:5,
            name:'Hyderabad',
        }
      ];
     
  return (
    <View>
        <FlatList 
           keyExtractor={item=>item.id.toString()}
            data={location}
             renderItem={({item})=> 
              <Text>{item.id}.{item.name}</Text>
            }
          />
    </View>
  )
}

export default ArrayOfObject