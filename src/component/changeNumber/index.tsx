import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { SetStateAction, useRef, useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import PhoneInput from "react-native-phone-number-input";
import { useTranslation } from "react-i18next";
import styles from "./styles";

interface ChangeNumberProps {
  value: string;
  changeValue: string;
  setChangeValue: (value: string) => void;
  text: string;
}

export default function ChangeNumber({
  value,
  changeValue,
  setChangeValue,
  text,
}: ChangeNumberProps) {
  const { t } = useTranslation();

  const [edit, setEdit] = useState(true);
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
            style={styles.inputStyle}
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
            style={[
              styles.inputView,
              {
                borderBottomWidth: 0,
              },
            ]}
          >
            <PhoneInput
              ref={phoneInput}
              defaultValue={changeValue !== "" ? changeValue : undefined}
              containerStyle={styles.inputPhoneContainer}
              textInputStyle={styles.phoneInputContainer}
              textContainerStyle={styles.inputPhoneTextContainer}
              onChangeFormattedText={handlePhoneChange}
              // onChangeFormattedText={(text) => {
              //   setChangeValue(text);
              // }}
              defaultCode="BA"
              layout="second"
              placeholder="6XXXXXXX"
            />
            {/* <TouchableOpacity style={styles.iconStyle} onPress={handleClose}>
              <AntDesign name="close" size={20} />
            </TouchableOpacity> */}
          </View>
          {changeValue.length !== 13 && changeValue.length !== 0 && (
            <Text style={styles.errorText}>Invalid Number</Text>
          )}
        </View>
      )}
    </View>
  );
}
