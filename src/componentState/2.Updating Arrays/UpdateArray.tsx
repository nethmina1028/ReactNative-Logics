import { View, Text, FlatList,Button } from 'react-native'
import React, { useState } from 'react'

const UpdateArray = () => {
    const [friends,setFriends] = useState(["alex","nethmi","savi"]);

    const addOne = () =>setFriends([...friends,'HuXn']);

    const removeOne =() =>setFriends(friends.filter(f =>f !=='nethmi'));

    const updateOne =() =>
         setFriends(friends.map((f) => (f === 'nethmi' ? 'nethmi fernando' : f)));

  return (
    <View>
      <FlatList 
        data={friends}
        keyExtractor={(friend)=>friend}
        renderItem={({item})=><Text>{item}</Text>}
      />

      <Button title="Add Friend" onPress={addOne} />
      <Button title="Remove Friend" onPress={removeOne} />
      <Button title="Update Friend" onPress={updateOne} />
    </View>
  )
}

export default UpdateArray