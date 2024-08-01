import React, { useState } from "react";
import { View, Text, TextStyle } from "react-native";
import { Checkbox } from "expo-checkbox";
import styles from "./styles";
import AppColors from "../../utils/AppColors";

type CheckBoxProps = {
  onPress?: (checked: boolean) => void;
  state?: boolean;
  title?: string;
  textStyle?: TextStyle;
  isChecked: boolean;
};

export default function SingleCheckBox({
  state = false,
  onPress,
  title,
  textStyle,
  isChecked,
}: CheckBoxProps) {
  return (
    <View style={styles.checkBoxView}>
      <Checkbox
        value={isChecked}
        onValueChange={onPress}
        color={isChecked ? AppColors.yellow : AppColors.yellow}
      />
      <Text style={[styles.checkBoxText, textStyle]}>{title}</Text>
    </View>
  );
}
