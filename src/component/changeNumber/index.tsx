import {
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import React, { SetStateAction, useRef, useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import PhoneInput from "react-native-phone-number-input";
import { useTranslation } from "react-i18next";
import styles from "./styles";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import { ViewStyle } from "react-native-phone-input";

interface ChangeNumberProps {
  value?: string;
  changeValue: string;
  setChangeValue: (value: string) => void;
  text?: string;
  inputStyle?: TextStyle;
  phoneNumberContainerStyle?: ViewStyle;
  phoneNumberInputStyle?: TextStyle;
  phoneNumberTextStyle?: TextStyle;
  closed?: boolean;
  parentPhoneInputViewStyle?: ViewStyle;
}

export default function ChangeNumber({
  value,
  changeValue,
  setChangeValue,
  text,
  inputStyle,
  phoneNumberContainerStyle,
  phoneNumberInputStyle,
  phoneNumberTextStyle,
  closed,
  parentPhoneInputViewStyle,
}: ChangeNumberProps) {
  const { t } = useTranslation();

  const [edit, setEdit] = useState<boolean>(true);
  const phoneInput = useRef<PhoneInput>(null);
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleEdit = () => {
    setEdit(false);
  };

  const handleClose = () => {
    setEdit(true);
    setChangeValue("");
  };

  const handlePhoneChange = (text: string) => {
    setChangeValue(text);
    if (phoneInput.current?.isValidNumber(text)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <View style={styles.parentView}>
      <Text style={styles.textStyle}>{text}</Text>
      {value && edit ? (
        <View style={styles.inputView}>
          <TextInput
            style={[styles.textInputStyle, inputStyle]}
            // placeholder={placeholder}
            value={value}
            editable={false}
          />
          <TouchableOpacity style={styles.iconStyle} onPress={handleEdit}>
            <Feather name="edit" size={20} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View
            style={[styles.parentPhoneInputView, parentPhoneInputViewStyle]}
          >
            <PhoneInput
              ref={phoneInput}
              defaultValue={changeValue !== "" ? changeValue : undefined}
              containerStyle={[
                styles.inputPhoneContainer,
                phoneNumberContainerStyle,
              ]}
              textInputStyle={[
                styles.phoneInputContainer,
                phoneNumberInputStyle,
              ]}
              textContainerStyle={[
                styles.inputPhoneTextContainer,
                phoneNumberTextStyle,
              ]}
              onChangeFormattedText={handlePhoneChange}
              // onChangeFormattedText={(text) => {
              //   setChangeValue(text);
              // }}
              defaultCode="BA"
              layout="second"
              placeholder="6XXXXXXX"
            />
            {closed && (
              <TouchableOpacity style={styles.iconStyle} onPress={handleClose}>
                <AntDesign name="close" size={20} />
              </TouchableOpacity>
            )}
          </View>
          {changeValue.length !== 13 && changeValue.length !== 0 && (
            <Text style={styles.errorText}>Invalid Number</Text>
          )}
        </View>
      )}
    </View>
  );
}
