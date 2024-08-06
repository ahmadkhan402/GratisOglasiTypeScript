import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Header from "../../component/header";
import Button from "../../component/button";

export default function ManageAccount() {
  return (
    <View style={styles.parentView}>
      <Header title="Manage Account" back={true} />
      <Button title="Delete Account" style={styles.dltBtn} icon={true} />
    </View>
  );
}
