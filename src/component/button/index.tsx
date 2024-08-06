import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
  TextStyle,
} from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  style?: ViewStyle;
  icon?: boolean;
  textStyle?: TextStyle;
}

export default function Button({
  title,
  style,
  icon,
  textStyle,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[icon ? styles.btnContainerWithIcon : styles.btnContainer, style]}
      {...rest}
    >
      {icon && (
        <AntDesign
          name="delete"
          size={20}
          color={AppColors.black}
          style={styles.icon}
        />
      )}

      <View style={styles.btnTextContainer}>
        <Text style={{ ...styles.btnText, ...textStyle }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
