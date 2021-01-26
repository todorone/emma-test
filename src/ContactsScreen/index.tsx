import { FlatList, View } from 'react-native'
import React, { createRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Avatars from './Avatars'
import { deviceWidth } from '../globalStyles'
import { Contact } from '../store'

export default function HomeScreen() {
  const avatarsRef = createRef<FlatList<Contact>>()
  const verticalScrollViewRef = createRef<ScrollView>()

  return (
    <View>
      <Avatars ref={avatarsRef} infoRef={verticalScrollViewRef} />

      <ScrollView
        ref={verticalScrollViewRef}
        contentContainerStyle={{
          width: deviceWidth,
          backgroundColor: 'pink',
        }}
        // onScroll={({ nativeEvent }) => {
        //   // console.log('>>>', nativeEvent.contentOffset.y)
        // }}
        scrollEventThrottle={16}
      >
        {items.map((_item, index) => (
          <View
            key={index}
            style={{
              width: '100%',
              height: 500,
              backgroundColor: '#ccc',
              borderRadius: 20,
              marginBottom: 92,
            }}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const items = Array(20).fill('')
