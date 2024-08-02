import { View, Text, Keyboard, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import Input from "../../component/Input";
import AppColors from "../../utils/AppColors";
import Checkbox from "expo-checkbox";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SignUp from "../signup";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/params";
import ScreenNames from "../../routes/routes";
import Button from "../../component/button";
import ConfirmationModal from "../../component/confirmationModal";
import InputText from "../../component/inputText";
import { logInUser } from "../../api/user";
import { showMessage } from "react-native-flash-message";

interface SignInProps {
  onSignUpPress: () => void; // Callback function to handle navigation to SignIn
}
type loginNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.HOME
>;
export default function Login({ onSignUpPress }: SignInProps) {
  const navigation = useNavigation<loginNavigationProps>();
  const [isChecked, setChecked] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>(
    {}
  );

  const handleBlur = (field: string, value: string) => {
    if (!value) {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        [field]: "Required*",
      }));
    } else {
      setErrorMessage((prevErrors) => ({ ...prevErrors, [field]: "" }));
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleReset = () => {
    setEmail("");
    setModalVisible(false);
  };

  const handleLogin = async () => {
    const res = await logInUser(email, password);
    console.log("====================================");
    console.log(res);
    console.log("====================================");
    if (res && res !== "user not found") {
      navigation.navigate(ScreenNames.HOME);
    } else {
      showMessage({
        message: "User not found",
        type: "danger",
      });
    }
  };
  return (
    <View style={styles.parentView}>
      <InputText
        onBlur={() => handleBlur("email", email)}
        errorMessage={errorMessage.email}
        placeholder="Email"
        label="Email"
        onChangeText={setEmail}
        value={email}
      />
      {errorMessage.email !== "" && email.length <= 0 && (
        <Text style={styles.errorMessage}>{errorMessage.email}</Text>
      )}
      <InputText
        onBlur={() => handleBlur("password", password)}
        errorMessage={errorMessage.password}
        password={true}
        placeholder="Password"
        label="Password"
        onChangeText={setPassword}
        value={password}
      />
      {errorMessage.password !== "" && password.length <= 0 && (
        <Text style={styles.errorMessage}>{errorMessage.password}</Text>
      )}
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
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          // style={styles.forgotbtn}
        >
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <Button onPress={handleLogin} title="Login" />
      <View style={styles.dontHaveAccount}>
        <Text style={styles.labelRemember}>Don't have an account?</Text>
        <TouchableOpacity onPress={onSignUpPress} style={styles.signUpBtn}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <ConfirmationModal
        visible={modalVisible}
        onCancel={handleCancel}
        onReset={handleReset}
        email={email}
        setEmail={setEmail}
      />
    </View>
  );
}
