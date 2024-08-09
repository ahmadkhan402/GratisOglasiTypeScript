import { View, Text, Keyboard, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import Input from "../Input";
import AppColors from "../../utils/AppColors";
import Checkbox from "expo-checkbox";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SignUp from "../signup";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/params";
import ScreenNames from "../../routes/routes";
import Button from "../button";
import ConfirmationModal from "../confirmationModal";
import InputText from "../inputText";
import { logInUser } from "../../api/user";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/user";
import { width } from "../../utils/Dimension";
import {
  getCredentials,
  removeCredentials,
  setItems,
  storeCredentials,
} from "../../utils/Methord";
import { addFavorite, setFavorites } from "../../redux/favorites";

interface SignInProps {
  onSignUpPress: () => void; // Callback function to handle navigation to SignIn
}
type loginNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.HOME
>;
export default function Login({ onSignUpPress }: SignInProps) {
  const dispatch = useDispatch();
  const navigation = useNavigation<loginNavigationProps>();
  const [isChecked, setChecked] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState<string>("");
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

  const handleRememberMe = async () => {
    setChecked((prevChecked) => !prevChecked);
    if (!isChecked) {
      await storeCredentials(email, password);
    } else {
      await removeCredentials();
    }
  };
  const handleRetrieveCredentials = async () => {
    const credentials = await getCredentials();
    if (credentials) {
      setEmail(credentials.email ? credentials.email : email);
      setPassword(credentials.password ? credentials.password : password);
      if (credentials.email !== "" && credentials.password !== "") {
        setChecked(true);
        handleLogin(credentials.email, credentials.password);
      }
    }
  };
  const handleLogin = async (
    emailToLogin = email,
    passwordToLogin = password
  ) => {
    if (!emailToLogin || !passwordToLogin) {
      return showMessage({
        message: "Please enter email and password",
        type: "danger",
      });
    }
    const res = await logInUser(emailToLogin, passwordToLogin);
    if (res && res === "Please verify your email") {
      navigation.navigate(ScreenNames.EMAIL_VERIFICATION, {
        stateToVerify: "OnLogin",
        email: emailToLogin,
      });
    } else {
      if (res && res !== "user not found") {
        console.log("====================================");
        console.log(res.favorites);
        console.log("====================================");
        dispatch(setFavorites(res.favorites));
        dispatch(addUser(res));
        navigation.navigate(ScreenNames.HOME);
      } else {
        showMessage({
          message: "User not found",
          type: "danger",
        });
      }
    }
  };

  useEffect(() => {
    handleRetrieveCredentials();
  }, []);
  return (
    <View style={styles.parentView}>
      <InputText
        onBlur={() => handleBlur("email", email)}
        errorMessage={errorMessage.email}
        placeholder="Email"
        label="Email"
        onChangeText={setEmail}
        value={email}
        viewStyle={{ paddingLeft: width(4) }}
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
        viewStyle={{ paddingLeft: width(4) }}
      />
      {errorMessage.password !== "" && password.length <= 0 && (
        <Text style={styles.errorMessage}>{errorMessage.password}</Text>
      )}
      <View style={styles.section}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={handleRememberMe}
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
      <Button onPress={() => handleLogin(email, password)} title="Login" />
      <View style={styles.dontHaveAccount}>
        <Text style={styles.labelRemember}>Don't have an account?</Text>
        <TouchableOpacity onPress={onSignUpPress} style={styles.signUpBtn}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <ConfirmationModal
        visible={modalVisible}
        pressCancel={handleCancel}
        pressAction={handleReset}
        cancelBtnText="Cancel"
        actionBtnText="Reset"
        email={email}
        setEmail={setEmail}
      />
    </View>
  );
}
