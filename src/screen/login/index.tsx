import { View, Text, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import Input from "../../component/Input";
import AppColors from "../../utils/AppColors";
import Checkbox from "expo-checkbox";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Button from "../../component/Button";
import ButtonLight from "../../component/ButtonLight";
import SignUp from "../signup";
import CustomModal from "../../component/CustomModal";
interface SignInProps {
  onSignUpPress: () => void; // Callback function to handle navigation to SignIn
}
export default function Login({onSignUpPress}: SignInProps) {
  const [isChecked, setChecked] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleReset = () => {
    setEmail('');
    setModalVisible(false);
  };
  return (
    <View style={styles.parentView} >
      <Text style={styles.label}>Email</Text>

      <Input hide={false} placeholder="Email" mode ="text" type= "email-address" />
      <Text style={styles.label}>Password</Text>

      <Input hide={true} placeholder="Password" mode="text" type = "default"/>
      <View style={styles.section}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? AppColors.yellow : AppColors.yellow}
          />
          <Text style={styles.labelRemember}>Remember Me</Text>
        </View>
        <ButtonLight press={() => setModalVisible(true)} title ="Forgot Password?"/>
        {/* <Text style={styles.forgotPassword}>Forgot Password?</Text> */}
      </View>

      <Button onPress={()=>{}} title="Login"/>
      <View style={styles.dontHaveAccount}>
      <Text style={styles.labelRemember}>Don't have an account?</Text>
      <ButtonLight press={() => onSignUpPress()} title ="Sign Up!"/>
      {/* <Text style={styles.labelSignUp}>Sign up!</Text> */}
      </View>
     
      <CustomModal
        visible={modalVisible}
        onCancel={handleCancel}
        onReset={handleReset}
        email={email}
        setEmail={setEmail}
      />
    </View>
  );
}
