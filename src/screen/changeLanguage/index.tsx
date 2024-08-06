import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Header from "../../component/header";
import { Ionicons } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";
import Modal from "react-native-modal";
import { ScreenWrapper } from "react-native-screen-wrapper";

export default function ChangeLanguage() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<string>("bosnian");
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Header title="Change Language" back={true} />
        <View style={styles.container}>
          <Text style={styles.title}>Change Language</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.buttonText}>{selectedLang}</Text>
            <Ionicons
              name="chevron-forward-sharp"
              size={20}
              color={AppColors.gray}
            />
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={modalVisible}
          style={styles.modal}
          onBackdropPress={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Select Language</Text>
            <TouchableOpacity
              style={styles.lngBtn}
              onPress={() => {
                setSelectedLang("English"), setModalVisible(false);
              }}
            >
              <Text style={styles.lngBtnText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.lngBtn}
              onPress={() => {
                setSelectedLang("Bosnian"), setModalVisible(false);
              }}
            >
              <Text style={styles.lngBtnText}>Bosnian</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ScreenWrapper>
  );
}
