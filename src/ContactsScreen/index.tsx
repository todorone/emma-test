import { FlatList, View } from 'react-native'
import React, { createRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Avatars from './Avatars'
import Info from './Info'
import { Contact } from '../store'

export default function HomeScreen() {
  const avatarsRef = createRef<FlatList<Contact>>()
  const infoRef: any = createRef<ScrollView>()

  return (
    <View>
      <Avatars ref={avatarsRef} infoRef={infoRef} />

      <Info ref={infoRef} avatarsRef={avatarsRef} />
    </View>
  )
}
