import React from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import Asset from '../../assets'

const mapStateToProps = state => state.navigation
const mapDispatchToProps = dispatch => ({
  navigateBack: () => dispatch(NavigationActions.back()),
})

const Header = ({
  withoutHeaderLeft,
  navigateBack,
  children,
  isLoading,
  headerRight,
  navigateTo,
  navigateBackButton,
  resetScreenMode,
}) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
      paddingHorizontal: 8,
    }}
  >
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
      onPress={() => !withoutHeaderLeft && navigateBack()}
    >
      {!withoutHeaderLeft && (
        <Image
          source={Asset.arrowLeft}
          style={{
            height: 24,
            width: 24,
          }}
        />
      )}
    </TouchableOpacity>
    <Text
      style={{
        fontSize: 20,
        flex: 3,
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      {children || ''}
    </Text>
    <TouchableOpacity
      disabled={isLoading}
      style={{ flex: 1, alignItems: 'flex-end' }}
      onPress={() => headerRight && navigateTo()}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#ffffff" />
      ) : (
        <Text style={{ fontSize: 16, color: '#fff', textAlign: 'right' }}>
          {headerRight}
        </Text>
      )}
    </TouchableOpacity>
  </View>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
