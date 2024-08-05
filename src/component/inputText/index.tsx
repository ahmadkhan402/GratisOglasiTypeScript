import {
  View,
  Text,
  TextInputProps,
  TextInput,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";

interface inputProps extends TextInputProps {
  label?: string;
  errorMessage?: string;
  password?: boolean;
  viewStyle?: ViewStyle;
  parentStyle?: ViewStyle;
}

export default function InputText({
  label,
  errorMessage,
  password = false,
  style,
  viewStyle,
  parentStyle,
  ...rest
}: inputProps) {
  const [secure, setSecure] = useState<boolean>(password);
  return (
    <View style={[styles.parentView, parentStyle]}>
      {label && <Text style={styles.textStyle}>{label}</Text>}
      <View style={[styles.iconInputView, viewStyle]}>
        <TextInput
          style={[password ? styles.iconInputStyle : styles.inputStyle, style]}
          {...rest}
          secureTextEntry={secure}
        />

        {password && (
          <TouchableOpacity
            onPress={() => {
              setSecure(!secure);
            }}
            style={styles.eyeIcon}
          >
            <Entypo
              name={!secure ? "eye" : "eye-with-line"}
              size={18}
              color={AppColors.gray}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
