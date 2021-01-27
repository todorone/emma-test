import React, { FC, forwardRef, RefObject } from 'react'
import { Image, ListRenderItem, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import sharedStyles from './styles'
import { Contact, store } from '../store'
import { TouchableScale } from '../ui/TouchableScale'
import { deviceWidth, isIos, WHITE } from '../globalStyles'
import { observer } from 'mobx-react-lite'

type Props = { infoRef: RefObject<FlatList<Contact>> }
const ContactsScreenAvatars = forwardRef<FlatList<Contact>, Props>(({ infoRef }, ref) => {
  const renderItem: ListRenderItem<Contact> = ({ item }) => {
    return <ListItem contact={item} listRef={ref as RefObject<FlatList<Contact>>} />
  }

  return (
    <FlatList
      horizontal
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      ref={ref}
      onScrollBeginDrag={() => {
        store.setIsAvatarsGestureInProgress(true)
      }}
      onScrollEndDrag={({ nativeEvent }) => {
        if (nativeEvent.velocity?.x === 0) {
          store.setIsAvatarsGestureInProgress(false)
        }
      }}
      onMomentumScrollEnd={() => {
        if (store.isAvatarsGestureInProgress) {
          store.setIsAvatarsGestureInProgress(false)
        }
      }}
      onScroll={({ nativeEvent }) => {
        const activeItemIndex = nativeEvent.contentOffset.x / sharedStyles.AVATAR_LIST_ITEM_WIDTH
        if (Math.round(activeItemIndex) !== store.selectedContactIndex) {
          store.setSelectedContactId(store.contacts[activeItemIndex].id)
        }
        if (!store.isInfoGestureInProgress) {
          infoRef.current?.scrollToOffset({
            offset: activeItemIndex * store.infoBlockHeight,
            animated: false,
          })
        }
      }}
      data={store.contacts}
      keyExtractor={extractKey}
      renderItem={renderItem}
      scrollEventThrottle={16}
      snapToOffsets={store.contacts.map((_i, index) => index * sharedStyles.AVATAR_LIST_ITEM_WIDTH)}
      snapToAlignment="center"
      decelerationRate={isIos ? 0.01 : 0.9}
      showsHorizontalScrollIndicator={false}
    />
  )
})

export default ContactsScreenAvatars

const ListItem: FC<{ contact: Contact; listRef: RefObject<FlatList<Contact>> }> = observer(
  function ContactsScreenAvatarsListItem({ contact, listRef }) {
    return (
      <TouchableScale
        style={{
          marginHorizontal: sharedStyles.AVATAR_HORIZONTAL_MARGIN,
          width: sharedStyles.AVATAR_WIDTH,
          height: sharedStyles.AVATAR_WIDTH,
          borderRadius: sharedStyles.AVATAR_WIDTH / 2,
          paddingLeft: 5,
          paddingTop: 5,
          backgroundColor: store.selectedContactId === contact.id ? '#C9DFF4' : WHITE,
        }}
        key={contact.name}
        onPress={() => {
          store.setIsAvatarsGestureInProgress(true)
          listRef.current?.scrollToOffset({
            offset:
              store.contacts.findIndex((c) => c.id === contact.id) *
              sharedStyles.AVATAR_LIST_ITEM_WIDTH,
          })
        }}
      >
        <Image style={styles.avatarImage} source={{ uri: contact.photo }} />
      </TouchableScale>
    )
  },
)

const extractKey = (contact) => contact.id

const styles = StyleSheet.create({
  container: { flexGrow: 0 }, // When not mentioned explicitly, FlatList greedy grows the space
  contentContainer: {
    paddingHorizontal:
      (deviceWidth - sharedStyles.AVATAR_WIDTH) / 2 - sharedStyles.AVATAR_HORIZONTAL_MARGIN,
    paddingVertical: 30,
  },
  avatarImage: {
    width: sharedStyles.AVATAR_WIDTH - 10,
    height: sharedStyles.AVATAR_WIDTH - 10,
    backgroundColor: '#f6f6f6',
    borderRadius: (sharedStyles.AVATAR_WIDTH - 10) / 2,
  },
})
