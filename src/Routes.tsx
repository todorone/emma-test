import React from 'react'
import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import HomeScreen from './HomeScreen'

// === NAVIGATION ROUTES ===
export default function Routes() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name={Screens.HOME} component={HomeScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

enableScreens()

const MainStack = createNativeStackNavigator()

export enum Screens {
  HOME = 'Home Screen',
}
