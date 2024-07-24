import { View, Text, Keyboard, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import Input from "../../component/Input";
import AppColors from "../../utils/AppColors";
import Checkbox from "expo-checkbox";
import Button from "../../component/Button";
import ButtonLight from "../../component/ButtonLight";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../routes/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/params";

type SignUpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.CHAT
>;

interface SignUpProps {
  onSignInPress: () => void;
}
export default function SignUp({ onSignInPress }: SignUpProps) {
  const [isChecked, setChecked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  return (
    <View style={styles.parentView}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>

        <Input
          val=""
          style={{}}
          hide={false}
          placeholder="First Name"
          mode="text"
        />
        <Text style={styles.label}>Last Name</Text>
        <Input
          val=""
          style={{}}
          hide={false}
          placeholder="Last Name"
          mode="text"
        />
        <Text style={styles.label}>Email</Text>
        <Input
          val={email}
          style={{}}
          hide={false}
          placeholder="Email"
          mode="text"
          onChangeText={(e) => setEmail(e)}
        />
        <Text style={styles.label}>Password</Text>
        <Input
          val={password}
          style={{}}
          hide={true}
          placeholder="Password"
          mode="text"
          onChangeText={(e) => setPassword(e)}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <Input
          val=""
          style={{}}
          hide={true}
          placeholder="Confirm Password"
          mode="text"
        />
        <Text style={styles.label}>Phone Number</Text>
        <Input
          val=""
          style={{}}
          hide={false}
          placeholder="Phone Number"
          mode="numeric"
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
        <Button
          onPress={() =>
            navigation.navigate(ScreenNames.CHAT, {
              Email: email,
              Password: password,
            })
          }
          title="Sign up"
        />

        <View style={styles.haveAccount}>
          <Text style={styles.alreadyAccoutLabel}>
            Already have an account?
          </Text>
          <ButtonLight press={() => onSignInPress()} title="Sign In!" />
          {/* <Text style={styles.labelSignIn}>Sign In!</Text> */}
        </View>
      </View>
    </View>
  );
}
