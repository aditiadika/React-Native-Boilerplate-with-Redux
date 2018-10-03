import { StackNavigator } from 'react-navigation'

import styles from './style'

import Login from './login/Login'
import Main from './main/Main'

const AppNavigator = StackNavigator({
  login: {
    screen: Login,
    navigationOptions: {
      headerStyle: styles.header,
      header: null,
    },
  },
  main: {
    screen: Main,
    navigationOptions: {
      headerStyle: styles.header,
      headerLeft: null,
    },
  },
})

export default AppNavigator
