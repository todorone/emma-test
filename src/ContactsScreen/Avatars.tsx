import React, { forwardRef, RefObject } from 'react'
import { Image, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import sharedStyles from './styles'
import { Contact, store } from '../store'
import { TouchableScale } from '../ui/TouchableScale'
import { deviceWidth, isIos } from '../globalStyles'

interface Props {
  infoRef: RefObject<FlatList<Contact>>
}
const ContactsScreenAvatars = forwardRef<FlatList<Contact>, Props>(
  ({ infoRef }, ref) => {
    return (
      <FlatList
        horizontal
        contentContainerStyle={styles.container}
        ref={ref}
        onScroll={({ nativeEvent }) => {
          console.log(nativeEvent.contentOffset, infoRef !== undefined)
          infoRef.current?.scrollToOffset({
            offset: nativeEvent.contentOffset.x * 4,
            animated: false,
          })
        }}
        data={store.contacts}
        keyExtractor={extractKey}
        renderItem={renderItem}
        scrollEventThrottle={16}
        snapToOffsets={store.contacts.map(
          (_i, index) =>
            index *
            (sharedStyles.AVATAR_WIDTH +
              sharedStyles.AVATAR_HORIZONTAL_MARGIN * 2),
        )}
        snapToAlignment="center"
        decelerationRate={isIos ? 0.01 : 0.9}
        showsHorizontalScrollIndicator={false}
      />
    )
  },
)

export default ContactsScreenAvatars

const renderItem = ({ item: contact }) => {
  return (
    <TouchableScale
      style={{
        marginHorizontal: sharedStyles.AVATAR_HORIZONTAL_MARGIN,
        width: sharedStyles.AVATAR_WIDTH,
        height: sharedStyles.AVATAR_WIDTH,
        borderRadius: sharedStyles.AVATAR_WIDTH / 2,
        paddingLeft: 5,
        paddingTop: 5,
        backgroundColor: '#C9DFF4',
      }}
      key={contact.name}
      onPress={() => {}}
    >
      <Image style={styles.avatarImage} source={{ uri: contact.photo }} />
    </TouchableScale>
  )
}

const extractKey = (contact) => contact.name

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:
      (deviceWidth - sharedStyles.AVATAR_WIDTH) / 2 -
      sharedStyles.AVATAR_HORIZONTAL_MARGIN,
    paddingTop: 30,
    paddingBottom: 15,
  },
  avatarImage: {
    width: sharedStyles.AVATAR_WIDTH - 10,
    height: sharedStyles.AVATAR_WIDTH - 10,
    backgroundColor: '#f6f6f6',
    borderRadius: (sharedStyles.AVATAR_WIDTH - 10) / 2,
  },
})
