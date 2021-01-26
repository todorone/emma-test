import React, { forwardRef, RefObject } from 'react'
import { Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import styles from './styles'
import { Contact, store } from '../store'
import { TouchableScale } from '../ui/TouchableScale'

interface Props {
  infoRef: RefObject<FlatList<Contact>>
}
const ContactsScreenAvatars = forwardRef<FlatList<Contact>, Props>(
  ({ infoRef }, ref) => {
    return (
      <FlatList
        horizontal
        contentContainerStyle={{
          paddingTop: 30,
          paddingBottom: 30,
        }}
        ref={ref}
        onScroll={({ nativeEvent }) => {
          console.log(nativeEvent.contentOffset, infoRef !== undefined)
          // infoRef.current?.scrollToOffset({
          //   offset: nativeEvent.contentOffset.x * 4,
          //   animated: false,
          // })
        }}
        data={store.contacts}
        keyExtractor={extractKey}
        renderItem={renderItem}
        scrollEventThrottle={16}
        snapToInterval={80}
        snapToAlignment="center"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
      />
    )
  },
)

export default ContactsScreenAvatars

const renderItem = ({ item: contact }) => {
  return (
    <TouchableScale
      style={{ marginHorizontal: 10 }}
      key={contact.name}
      onPress={() => {}}
    >
      <Image
        style={{
          width: styles.AVATAR_WIDTH,
          height: styles.AVATAR_WIDTH,
          backgroundColor: 'lightgrey',
          borderRadius: styles.AVATAR_WIDTH / 2,
        }}
        source={{ uri: contact.photo }}
      />
    </TouchableScale>
  )
}

const extractKey = (contact) => contact.name
