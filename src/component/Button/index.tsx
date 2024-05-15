import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

export default function Button({title,press}) {
  return (
  <TouchableOpacity style={styles.btnContainer} onPress={press}>
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
  )
}