import React, { FC, memo, useRef } from 'react'
import { Animated, TouchableOpacityProps, View, ViewStyle } from 'react-native'
import { TapGestureHandler, State } from 'react-native-gesture-handler'

import { mediumHitSlop } from '../globalStyles'

interface Props extends TouchableOpacityProps {
  onPress: () => void
  scale?: number
  containerStyle?: ViewStyle
}
export const TouchableScale: FC<Props> = memo(
  ({ style, scale = 1.15, containerStyle, disabled, onPress, testID, children }) => {
    const { current: scaleValue } = useRef(new Animated.Value(1))

    const onGesture = ({ nativeEvent }) => {
      if (nativeEvent.state === State.BEGAN) {
        Animated.timing(scaleValue, {
          duration: 155,
          toValue: scale,
          useNativeDriver: true,
        }).start()
      } else if (
        nativeEvent.state === State.ACTIVE ||
        nativeEvent.state === State.CANCELLED ||
        nativeEvent.state === State.FAILED
      ) {
        Animated.timing(scaleValue, {
          duration: 175,
          toValue: 1,
          useNativeDriver: true,
        }).start()

        if (nativeEvent.state === State.ACTIVE) {
          onPress()
        }
      }
    }

    const content = (
      <TapGestureHandler
        onHandlerStateChange={onGesture}
        enabled={!disabled}
        hitSlop={mediumHitSlop}
      >
        <Animated.View testID={testID} style={[style, { transform: [{ scale: scaleValue }] }]}>
          {children}
        </Animated.View>
      </TapGestureHandler>
    )

    return containerStyle ? <View style={containerStyle}>{content}</View> : content
  },
)
