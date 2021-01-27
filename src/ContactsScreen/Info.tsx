import React, { FC, forwardRef, RefObject } from 'react'
import { Text, StyleSheet, View, ListRenderItem } from 'react-native'
import { observer } from 'mobx-react-lite'
import { FlatList } from 'react-native-gesture-handler'

import { Contact, store } from '../store'
import { deviceHeight, deviceWidth, isIos, SMALL_DEVICE } from '../globalStyles'
import sharedStyles from './styles'

type Props = { avatarsRef: RefObject<FlatList<Contact>> }
const ContactsScreenInfo = forwardRef<FlatList<Contact>, Props>(({ avatarsRef }, ref) => {
  return (
    <FlatList
      onLayout={({ nativeEvent }) => store.setInfoBlockHeight(nativeEvent.layout.height)}
      ref={ref}
      onScrollBeginDrag={() => {
        store.setIsInfoGestureInProgress(true)
      }}
      onScrollEndDrag={({ nativeEvent }) => {
        if (nativeEvent.velocity?.y === 0) {
          store.setIsInfoGestureInProgress(false)
        }
      }}
      onMomentumScrollEnd={() => {
        if (store.isInfoGestureInProgress) {
          store.setIsInfoGestureInProgress(false)
        }
      }}
      onScroll={({ nativeEvent }) => {
        if (!store.isAvatarsGestureInProgress) {
          const activeItemIndex = nativeEvent.contentOffset.y / store.infoBlockHeight

          avatarsRef.current?.scrollToOffset({
            offset: activeItemIndex * sharedStyles.AVATAR_LIST_ITEM_WIDTH,
            animated: false,
          })
        }
      }}
      data={store.contacts}
      keyExtractor={extractKey}
      renderItem={renderItem}
      scrollEventThrottle={16}
      pagingEnabled
      showsVerticalScrollIndicator={false}
    />
  )
})

export default ContactsScreenInfo

const renderItem: ListRenderItem<Contact> = ({ item }) => <ListItem contact={item} />

const extractKey = (contact) => contact.name

const ListItem: FC<{ contact: Contact }> = observer(function ContactsScreenInfoListItem({
  contact,
}) {
  const [firstName, lastName] = contact.name.split(' ')
  return (
    <View
      style={{
        width: deviceWidth,
        height: store.infoBlockHeight,
        paddingHorizontal: deviceWidth * 0.05,
      }}
    >
      <Text style={styles.name}>
        <Text style={styles.firstName}>{firstName}</Text> {lastName}
      </Text>

      <Text style={styles.position}>{contact.position}</Text>

      <Text style={styles.aboutTitle}>About me</Text>
      <Text style={styles.aboutText}>{contact.bio}</Text>
    </View>
  )
})

const styles = StyleSheet.create({
  name: {
    fontWeight: '400',
    color: '#444',
    fontSize: 23,
    alignSelf: 'center',
    marginTop: deviceHeight * (SMALL_DEVICE ? 0.05 : 0.09),
    marginBottom: isIos ? 5 : 4,
  },
  position: {
    fontWeight: '300',
    color: '#666',
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: deviceHeight * 0.044,
  },
  firstName: { fontWeight: isIos ? '600' : '700', color: '#222' },
  aboutTitle: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  aboutText: { fontSize: 16, color: '#919191', lineHeight: 19.5 },
})
