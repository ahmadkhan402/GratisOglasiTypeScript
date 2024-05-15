import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
interface LoginState {
  email: string;
  password: string;
}

export default function Authentication() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [state, setSate] = useState<Boolean>(true);

  const toggleItem = (value: Boolean) => {
    setSate(!value);
  }
  return (
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
      <View style={styles.gradientContainer}>
        <TouchableOpacity onPress={() => toggleItem(true)} style= {state ? styles.onFocusStyle :styles.loginContainer}>
        <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleItem(true)} style={state ? styles.onFocusStyle : styles.signupContainer}>
      <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
