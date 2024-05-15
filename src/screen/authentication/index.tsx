import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import AppColors from "../../utils/AppColors";
import Login from "../login";
import SignUp from "../signup";
import { ScreenWrapper } from "react-native-screen-wrapper";
interface LoginState {
  email: string;
  password: string;
}

export default function Authentication() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [focusedButton, setFocusedButton] = useState<string | null>("login"); // Track focused button

  const toggleItem = (buttonName: "login" | "signup") => {
    setFocusedButton(buttonName); // Update focus state
  };
  return (

  //   <ScreenWrapper
  //   statusBarColor={AppColors.primary}
  //   barStyle="dark-content"
  //   scrollType="keyboard"
  //   scrollViewProps={{ showsVerticalScrollIndicator: false }}
  // >
    <View style={styles.parentView}>
      <TouchableOpacity style={styles.back}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      {/* <StatusBar style={} /> */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/images/glasi.png")}
          style={styles.logoStyle}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.enterDetailsText}>Please enter your details</Text>
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[
          AppColors.primary,
          AppColors.springGreen,
          AppColors.caribbeanGreen,
          AppColors.turquoise,
          AppColors.jetStream,
        ]}
        style={styles.gradientContainer}
      >
        <TouchableOpacity
          onPress={() => toggleItem("login")}
          style={[
            styles.loginContainer,
            focusedButton === "login" && styles.onFocusStyle,
          ]}
        >
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleItem("signup")}
          style={[
            styles.signupContainer,
            focusedButton === "signup" && styles.onFocusStyle,
          ]}
        >
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </LinearGradient>

      {focusedButton === "login" ? <Login /> : <SignUp />}
    </View>
    // </ScreenWrapper>
  );
}
