/**
 * Global style settings and utilities
 */
import { Dimensions, Platform, StyleSheet } from 'react-native'
import { initialWindowMetrics } from 'react-native-safe-area-context'

// Device parameters
export const isIos = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'
export const deviceHeight = Dimensions.get('window').height
export const deviceWidth = Dimensions.get('window').width
export const safeBottomInset = initialWindowMetrics?.insets.bottom ?? 0

export const SMALL_DEVICE = deviceHeight < 700

// Color palette
export const WHITE = '#fff'
export const BLACK = '#000'

export const RED = '#EB5757'

// Hit areas
export const mediumHitSlop = { left: 16, right: 16, top: 16, bottom: 16 }
export const bigHitSlop = { left: 25, right: 25, top: 25, bottom: 25 }

export const globalStyles = StyleSheet.create({
  flexOne: { flex: 1 },
  flexOneCentered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  flexOneJustified: { flex: 1, justifyContent: 'center' },
  inline: { flexDirection: 'row' },
  inlineCentered: { flexDirection: 'row', alignItems: 'center' },
})
