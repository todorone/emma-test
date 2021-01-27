import React from 'react'
import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import ContactsScreen from './ContactsScreen'
import { isIos } from './globalStyles'

// === NAVIGATION ROUTES ===
enableScreens()

const MainStack = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={screenOptions}
        keyboardHandlingEnabled={false}
        mode="modal"
      >
        <MainStack.Screen
          options={{ title: 'Contacts' }}
          name={Screens.CONTACTS}
          component={ContactsScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

const screenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    elevation: 0,
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: isIos ? 19 : 20,
    fontWeight: '700',
    bottom: isIos ? 2 : 1,
  },
  cardStyle: { backgroundColor: '#fff' },
}

export enum Screens {
  CONTACTS = 'CONTACTS_SCREEN',
}
