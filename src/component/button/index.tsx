import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import styles from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  style?: ViewStyle;
}

export default function Button({ title, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.btnContainer, style]} {...rest}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}
