import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";

export default function Input({ placeholder, mode }: any) {
  return (
    <View style={styles.parentView}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"gray"}
          inputMode={mode}
        />
      </View>
    </View>
  );
}
