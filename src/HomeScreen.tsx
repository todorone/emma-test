import { StyleSheet, View } from 'react-native'
import React, { createRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export default function HomeScreen() {
  const horizontalScrollViewRef = createRef<ScrollView>()
  const verticalScrollViewRef = createRef<ScrollView>()

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={{ marginVertical: 30 }}
        ref={horizontalScrollViewRef}
        onScroll={({ nativeEvent }) => {
          // console.log(nativeEvent.contentOffset)
          verticalScrollViewRef.current?.scrollTo({
            y: nativeEvent.contentOffset.x * 4,
            animated: false,
          })
        }}
        scrollEventThrottle={16}
        snapToInterval={80}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
      >
        {items.map((_item, index) => (
          <View
            key={index}
            style={{
              width: AVATAR_WIDTH,
              height: AVATAR_WIDTH,
              backgroundColor: 'lightgrey',
              borderRadius: AVATAR_WIDTH / 2,
              marginHorizontal: 10,
            }}
          />
        ))}
      </ScrollView>

      <ScrollView
        ref={verticalScrollViewRef}
        pagingEnabled
        style={{
          width: '100%',
          height: 500,
          // backgroundColor: 'pink',
          overflow: 'hidden',
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

const AVATAR_WIDTH = 64

const styles = StyleSheet.create({
  container: { flex: 1 },
})
