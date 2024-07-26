import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import styles from "./styles";
import Input from "../Input";
import Modal from "react-native-modal";
import AppColors from "../../utils/AppColors";
import Button from "../button";
interface CustomModalProps {
  visible: boolean;
  onCancel: () => void;
  onReset: () => void;
  email: string;
  setEmail: (email: string) => void;
}

export default function CustomModal({
  visible,
  onCancel,
  onReset,
  email,
  setEmail,
}: CustomModalProps) {
  return (
    <Modal
      isVisible={visible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.7}
      backdropColor={AppColors.black}
      onBackdropPress={onCancel}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.label}>Email</Text>
          {/* <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          /> */}
          <Input
            style={styles.input}
            placeholder="Enter your email"
            val={email}
            // onChangeText={setEmail}
            mode="text"
            type="email-address"
            hide={false}
          />
          <View style={styles.buttonContainer}>
            <Button style={styles.button} title="Cancel" onPress={onCancel} />
            <Button style={styles.button} title="Reset" onPress={onReset} />
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
