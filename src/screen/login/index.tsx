import { View, Text, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import Input from "../../component/Input";
import AppColors from "../../utils/AppColors";
import Checkbox from 'expo-checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Login() {
  const [isChecked, setChecked] = useState<any>(false);

  return (
    <KeyboardAwareScrollView style={styles.parentView} >
      <Text style={styles.label}>Email</Text>

      <Input  
      
       style={styles.textInput} placeholder="Email" mode="email" />
      <Text style={styles.label}>Password</Text>

      <Input placeholder="Password" mode="password" />
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? AppColors.yellow : AppColors.yellow }
        />
        <Text style={styles.labelRemember}>Remember Me</Text>

        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </View>
    </KeyboardAwareScrollView>
  );
}
