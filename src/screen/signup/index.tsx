import { View, Text, Keyboard, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import Input from "../../component/Input";
import AppColors from "../../utils/AppColors";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../routes/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/params";
import Button from "../../component/button";
import InputText from "../../component/inputText";
import ChangeNumber from "../../component/changeNumber";
import { showMessage } from "react-native-flash-message";
import { signUpUser } from "../../api/user";
import Login from "../login";

type SignUpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.CHAT
>;

interface SignUpProps {
  onSignInPress: () => void;
}
export default function SignUp({ onSignInPress }: SignUpProps) {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const [isChecked, setChecked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [phNumber, setPhNumber] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

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

  const handleSignUp = async () => {
    if (firstName && lastName && email && password && confirmPassword) {
      if (password !== confirmPassword) {
        showMessage({
          message: "Password mismatch",
          type: "danger",
        });
        return;
      }
      // Assuming signup logic here

      const res = await signUpUser(
        firstName,
        lastName,
        email,
        password,
        phNumber
      );

      console.log("resSignup", res);

      if (res && res.message !== "User already exists") {
        showMessage({
          message: "Sign up successful",
          type: "success",
        });
        navigation.navigate(ScreenNames.EMAIL_VERIFICATION);
      } else {
        showMessage({
          message: "User already exists",
          type: "danger",
        });
      }
    } else {
      showMessage({
        message: "Term and Conditions",
        description: "Please fill all required fields",
        type: "danger",
      });
    }
  };
  return (
    <View style={styles.parentView}>
      {/* <View style={styles.inputContainer}> */}
      <InputText
        onBlur={() => handleBlur("firstName", firstName)}
        errorMessage={errorMessage.firstName}
        placeholder="First Name"
        label="First Name"
        onChangeText={setfirstName}
        value={firstName}
      />
      {errorMessage.firstName !== "" && firstName.length <= 0 && (
        <Text style={styles.errorMessage}>{errorMessage.firstName}</Text>
      )}

      <InputText
        onBlur={() => handleBlur("lastName", lastName)}
        errorMessage={errorMessage.lastName}
        placeholder="Last Name"
        label="Last Name"
        onChangeText={setlastName}
        value={lastName}
      />
      {errorMessage.lastName !== "" && lastName.length <= 0 && (
        <Text style={styles.errorMessage}>{errorMessage.lastName}</Text>
      )}

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
      <InputText
        onBlur={() => handleBlur("confirmPassword", confirmPassword)}
        errorMessage={errorMessage.confirmPassword}
        password={true}
        placeholder="Confirm Password"
        label="Confirm Password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      {errorMessage.confirmPassword !== "" && confirmPassword.length <= 0 && (
        <Text style={styles.errorMessage}>{errorMessage.confirmPassword}</Text>
      )}

      <ChangeNumber
        text="Phone Number"
        value=""
        changeValue=""
        setChangeValue={setPhNumber}
      />

      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? AppColors.java : AppColors.java}
        />
        {/* </View> */}
        <View style={styles.labelContainer}>
          <Text style={styles.labelRemember}>
            I have read and agree to the gratis
          </Text>

          <TouchableOpacity>
            <Text style={{ color: AppColors.primary }}>
              Terms and Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </View> */}

      <Button onPress={handleSignUp} title="Sign up" style={styles.signUpbtn} />

      <View style={styles.haveAccount}>
        <Text style={styles.alreadyAccoutLabel}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => onSignInPress()}
          style={styles.signInBtn}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
        {/* <Text style={styles.labelSignIn}>Sign In!</Text> */}
      </View>
    </View>
  );
}
