import { FlatList, View } from 'react-native'
import React, { createRef } from 'react'
import Avatars from './Avatars'
import Info from './Info'
import { Contact } from '../store'
import { globalStyles } from '../globalStyles'

export default function HomeScreen() {
  const avatarsRef = createRef<FlatList<Contact>>()
  const infoRef = createRef<FlatList<Contact>>()

  return (
    <View style={globalStyles.flexOne}>
      <Avatars ref={avatarsRef} infoRef={infoRef} />

      <Info ref={infoRef} avatarsRef={avatarsRef} />
    </View>
  )
}
