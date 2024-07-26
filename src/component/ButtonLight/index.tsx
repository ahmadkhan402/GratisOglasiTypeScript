import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

interface ButtonLightProps {
  title: string;
  press: () => void; 
}
export default function ButtonLight({title,press}: ButtonLightProps) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={press}>
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
  )
}