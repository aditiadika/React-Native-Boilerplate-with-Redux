import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const Login = props => {
  const { navigation } = props
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate({ routeName: 'main' })}
      >
        <Text style={{ textAlign: 'center' }}> Hello in Login Page </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
