import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Header from '../shared/header'

export default class Main extends Component {
  static navigationOptions = () => ({
    title: 'Main',
    headerTitle: props => <Header {...props} />,
  })

  render() {
    return (
      <View>
        <Text> Hello in Main Page </Text>
      </View>
    )
  }
}
