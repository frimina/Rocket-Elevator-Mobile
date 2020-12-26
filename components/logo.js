import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => (
  <Image source={require('../assets/R2.png')} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 280,
    height: 100,
    marginBottom: 50,
  },
})

export default Logo
