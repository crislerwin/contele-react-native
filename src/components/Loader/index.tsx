import React, { useEffect } from 'react'
import { Animated } from 'react-native'
import { Ball, Container } from './styles'

export const Loader: React.FC = () => {
  const animations = {
    one: new Animated.Value(0),
    two: new Animated.Value(0),
    three: new Animated.Value(0),
  }

  function onAnimate(animation: any, nextAnimation: any) {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: -10,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start()

    setTimeout(nextAnimation, 200)
  }

  function onStartAnimate() {
    function onThreeAnimation() {
      onAnimate(animations.three, () => {
        setTimeout(onStartAnimate, 800)
      })
    }

    function onTwoAnimation() {
      onAnimate(animations.two, onThreeAnimation)
    }

    onAnimate(animations.one, onTwoAnimation)
  }

  useEffect(() => {
    onStartAnimate()
  }, [])

  return (
    <Container>
      <Ball
        style={{ transform: [{ translateY: animations.one }] }}
        color="#1abc9c"
      />
      <Ball
        style={{ transform: [{ translateY: animations.two }] }}
        color="#f1c40f"
      />
      <Ball
        style={{ transform: [{ translateY: animations.three }] }}
        color="#e74c3c"
      />
    </Container>
  )
}
