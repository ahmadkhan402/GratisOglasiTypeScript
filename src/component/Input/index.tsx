import React, { useRef, useState } from "react";
import { View, TextInput, TouchableOpacity, KeyboardTypeOptions, TextInputProps } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";
import PhoneInput from "react-native-phone-number-input";
import { height, width } from "../../utils/Dimension";

interface InputProps extends TextInputProps {
  mode?: TextInputProps['inputMode']; 
  type?: KeyboardTypeOptions;
  hide?: boolean;
  val?: string;
  style?:any
}

export default function Input({ mode, type, hide = false ,val ,style, ...rest }: InputProps) {
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
        <View style={[styles.textInputContainer,style]}>
          <View style={styles.textViewContainer}>
            <TextInput
              style={[hide ? styles.textInputHide : styles.textInput ,style]}
              value={val}
              placeholderTextColor={"gray"}
              keyboardType={type}
              inputMode={mode}
              secureTextEntry={showMessage}
              {...rest}
            />
            {hide && (
              <TouchableOpacity style={styles.icon} onPress={() => setShowMessage(!showMessage)}>
                <Entypo
                  name={!showMessage ? "eye-with-line" : "eye"}
                  size={25}
                  color={"gray"}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
}
