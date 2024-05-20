import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";
import PhoneInput from "react-native-phone-number-input";

interface InputProps {
  placeholder: string;
  mode?: "none" | "text" | "numeric" | "email-address" | "phone-pad"; 
  type?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "name-phone-pad"
    | "twitter"
    | "web-search"
    | undefined; 
    hide:boolean
}

export default function Input({ placeholder, mode, type ,hide}: InputProps) {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [formattedValue, setFormattedValue] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(hide);
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <View style={styles.parentView}>
      {mode === "numeric" ? (
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="PK"
          layout="second"
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          containerStyle={styles.inputPhoneContainer}
          textInputStyle={styles.phoneInputContainer}
          textContainerStyle={styles.inputPhoneTextContainer}
          filterProps={{ placeholder: "Phone number" }}
        />
      ) : (
        <View style={styles.textInputContainer}>
          {hide ? (
             <View  style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={"gray"}
                keyboardType={type}
                inputMode={mode}
                secureTextEntry={!showMessage ? false : true}
              />
              <TouchableOpacity onPress={() => setShowMessage(!showMessage)}>
                <Entypo
                  name={!showMessage ? "eye" : "eye-with-line"}
                  size={25}
                  color={"gray"}
                />
              </TouchableOpacity>
              </View>
          ) : (
           
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={"gray"}
              keyboardType={type}
              inputMode={mode}
            />
          
          )}
        </View>
      )}
    </View>
  );
}
