import React, { forwardRef, RefObject } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Contact, store } from '../store'
import { deviceHeight, deviceWidth, isIos } from '../globalStyles'
import { Text, StyleSheet, View, ListRenderItem } from 'react-native'

interface Props {
  avatarsRef: RefObject<FlatList<Contact>>
}
const ContactsScreenInfo = forwardRef<FlatList<Contact>, Props>(
  ({ avatarsRef }, ref) => {
    return (
      <FlatList
        style={styles.container}
        // contentContainerStyle={styles.container}
        ref={ref}
        onScroll={({ nativeEvent }) => {
          console.log(nativeEvent.contentOffset, avatarsRef !== undefined)
          // infoRef.current?.scrollToOffset({
          //   offset: nativeEvent.contentOffset.x * 4,
          //   animated: false,
          // })
        }}
        data={store.contacts}
        keyExtractor={extractKey}
        renderItem={renderItem}
        scrollEventThrottle={16}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
    )
  },
)

const renderItem: ListRenderItem<Contact> = ({ item: contact }) => {
  const [firstName, lastName] = contact.name.split(' ')
  return (
    <View
      style={{
        width: deviceWidth,
        height: 400,
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
}

const extractKey = (contact) => contact.name

export default ContactsScreenInfo

const styles = StyleSheet.create({
  container: { width: deviceWidth, height: 400 },
  name: {
    fontWeight: '400',
    color: '#444',
    fontSize: 24,
    alignSelf: 'center',
    marginTop: deviceHeight * 0.08,
    marginBottom: 5,
  },
  position: {
    fontWeight: '300',
    color: '#666',
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 32,
  },
  firstName: { fontWeight: isIos ? '600' : '700', color: '#222' },
  aboutTitle: { fontSize: 16, fontWeight: '700', marginBottom: 5 },
  aboutText: { fontSize: 16, color: '#888', lineHeight: 19.5 },
})
