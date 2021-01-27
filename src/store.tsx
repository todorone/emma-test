// === APPLICATION STATE ===
import { makeAutoObservable } from 'mobx'
import dummyData from './dummyData'

class Store {
  constructor() {
    makeAutoObservable(this)
  }

  // Fetched from https://uifaces.co/
  contacts: Contact[] = dummyData

  // CONTACTS SCREEN SLICE
  infoBlockHeight = 0
  setInfoBlockHeight = (value: number) => (this.infoBlockHeight = value)

  selectedContactId = this.contacts[0].id
  setSelectedContactId = (value: string) => (this.selectedContactId = value)
  get selectedContactIndex() {
    return this.contacts.findIndex((contact) => contact.id === this.selectedContactId)
  }

  isAvatarsGestureInProgress = false
  setIsAvatarsGestureInProgress = (value: boolean) => (this.isAvatarsGestureInProgress = value)

  isInfoGestureInProgress = false
  setIsInfoGestureInProgress = (value: boolean) => (this.isInfoGestureInProgress = value)
}

export const store = new Store()

export interface Contact {
  name: string
  id: string
  position: string
  photo: string
  bio: string
}
