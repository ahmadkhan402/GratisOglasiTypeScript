import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import styles from "./styles";
import Input from "../Input";
import Modal from "react-native-modal";
import AppColors from "../../utils/AppColors";
import Button from "../button";
import InputText from "../inputText";
interface CustomModalProps {
  visible: boolean;
  pressCancel?: () => void;
  pressAction?: () => void;
  cancelBtnText: string;
  actionBtnText: string;
  email?: string;
  setEmail?: (email: string) => void;
  hide?: boolean;
  label?: string | "";
  cancelBtnStyle?: ViewStyle | undefined;
  actionBtnStyle?: ViewStyle | undefined;
  inputField?: boolean;
}

export default function ConfirmationModal({
  visible,
  pressCancel,
  pressAction,
  email,
  setEmail,
  hide,
  label,
  cancelBtnStyle,
  actionBtnStyle,
  cancelBtnText,
  actionBtnText,
  inputField,
}: CustomModalProps) {
  return (
    <Modal
      isVisible={visible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.7}
      backdropColor={AppColors.black}
      onBackdropPress={pressCancel}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {label && (
            <View style={styles.labelView}>
              <Text style={styles.label}>{label}</Text>
            </View>
          )}
          {/* <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          /> */}

          {inputField && (
            <View>
              {hide ? (
                <InputText
                  label="Enter Password"
                  placeholder="Enter Password"
                  password={true}
                  parentStyle={styles.parentStyle}
                  style={styles.inputStyle}
                  viewStyle={styles.viewStyle}
                />
              ) : (
                <Input
                  style={styles.input}
                  placeholder="Enter your email"
                  val={email}
                  // onChangeText={setEmail}
                  mode="text"
                  type="email-address"
                  hide={false}
                />
              )}
            </View>
          )}
          <View style={styles.buttonContainer}>
            <Button
              style={{ ...styles.button, ...cancelBtnStyle }}
              title={cancelBtnText}
              onPress={pressCancel}
            />
            <Button
              style={{ ...styles.button, ...actionBtnStyle }}
              title={actionBtnText}
              textStyle={{ color: AppColors.white }}
              onPress={pressAction}
            />
            {/* <TouchableOpacity style={styles.button} onPress={onCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onReset}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </Modal>
  );
}
