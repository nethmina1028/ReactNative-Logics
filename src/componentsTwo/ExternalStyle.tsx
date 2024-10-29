import { View, Text, Button, Pressable } from 'react-native'
import st from '../utils/style'

const ExternalStyle = () => {
  return (
    <View style={st.shadowStyle}>
      <Text style={st.textStyle}>ExternalStyle</Text>
      <Pressable style={st.button} >
        <Text>Pressable</Text>
      </Pressable>
     
    </View>
  )
}

export default ExternalStyle