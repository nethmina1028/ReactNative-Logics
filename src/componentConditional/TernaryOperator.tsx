import { View, Text } from 'react-native'
import React from 'react'

const ValidPassword =()=><Text>Valid Password</Text>
const InvalidPassword =()=><Text>Invalid Password</Text>

const Password = ({isValid}:any) =>{

  return isValid ? <ValidPassword/> :<InvalidPassword/>;
}

const TernaryOperator = () => {
  return (
    <View>
      <Password isValid={true}/>
    </View>
  )
}

export default TernaryOperator