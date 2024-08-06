import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  style?: ViewStyle;
  icon?: boolean;
}

export default function Button({ title, style, icon, ...rest }: ButtonProps) {
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

      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}
