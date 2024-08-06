import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Header from "../../component/header";
import Button from "../../component/button";
import ConfirmationModal from "../../component/confirmationModal";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";

export default function ManageAccount() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Header title="Manage Account" back={true} />
        <Button
          title="Delete Account"
          style={styles.dltBtn}
          icon={true}
          onPress={() => setModalVisible(!modalVisible)}
        />

        <ConfirmationModal
          visible={modalVisible}
          pressCancel={() => setModalVisible(!modalVisible)}
          pressAction={() => setModalVisible(!modalVisible)}
          hide={true}
          cancelBtnStyle={styles.cancelBtn}
          actionBtnStyle={styles.actionBtn}
          cancelBtnText="Cancel"
          actionBtnText="Delete"
          inputField={true}
        />
      </View>
    </ScreenWrapper>
  );
}
