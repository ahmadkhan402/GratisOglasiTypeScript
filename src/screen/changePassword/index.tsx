import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Header from "../../component/header";
import InputText from "../../component/inputText";
import { width } from "../../utils/Dimension";
import Button from "../../component/button";
import { showMessage } from "react-native-flash-message";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confrim, setConfrim] = useState<string>("");

  const handleChangePassword = () => {
    if (newPassword != confrim) {
      showMessage({
        message: "Password does not match",
        type: "danger",
      });
    } else {
      console.log(
        "old password",
        oldPassword,
        "new password",
        newPassword,
        "confirm password",
        confrim
      );
    }
  };
  return (
    <View style={styles.parentView}>
      <Header title="Change Password" back={true} />
      {/* <View style={styles.contentView}> */}
      <InputText
        label="Old Password"
        placeholder="Enter Old Password"
        password={true}
        viewStyle={styles.inputView}
        style={styles.inputStyle}
        parentStyle={styles.parentStyle}
        value={oldPassword}
        onChangeText={setOldPassword}
      />

      <InputText
        label="New Password"
        placeholder="Enter New Password"
        password={true}
        viewStyle={styles.inputView}
        style={styles.inputStyle}
        parentStyle={styles.parentStyle}
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <InputText
        label="Confirm Password"
        placeholder="Enter Confirm Password"
        password={true}
        viewStyle={styles.inputView}
        style={styles.inputStyle}
        parentStyle={styles.parentStyle}
        value={confrim}
        onChangeText={setConfrim}
      />

      <Button
        title="Change"
        style={styles.btnStyle}
        onPress={handleChangePassword}
      />
    </View>
  );
}
