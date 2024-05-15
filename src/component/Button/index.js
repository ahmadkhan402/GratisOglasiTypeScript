import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({value,press}) {
  return (
  <TouchableOpacity style={styles.btnContainer} onPress={press}>
    <Text style={styles.button}>{value}</Text>
  </TouchableOpacity>
  )
}