import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
interface ButtonProps {
  title: string;
  press: () => void; 
}

export default function Button({title,press} : ButtonProps) {
  return (
  <TouchableOpacity style={styles.btnContainer} onPress={press}>
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
  )
}