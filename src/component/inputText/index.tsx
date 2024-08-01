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
}

export default function InputText({
  label,
  errorMessage,
  password = false,
  style,
  viewStyle,
  ...rest
}: inputProps) {
  const [secure, setSecure] = useState<boolean>(password);
  return (
    <View>
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