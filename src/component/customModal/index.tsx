import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import styles from "./styles";
import InputText from "../inputText";
import AppColors from "../../utils/AppColors";

interface CustomModalProps {
  isVisible?: boolean;
  onClose?: () => void;
  dataList?: string[];
  label?: string;
  selectedItem?: (item: string) => void;
}

export default function CustomModal({
  isVisible = false,
  onClose = () => {},
  dataList = [],
  label = "",
  selectedItem,
}: CustomModalProps) {
  const safeDataList = Array.isArray(dataList) ? dataList : [];
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropColor={AppColors.black}
    >
      <View style={styles.makeModal}>
        <Text style={styles.makeTitle}>{label}</Text>
        <InputText placeholder="Search" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.makeItemContainer}>
            {safeDataList.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  if (selectedItem) selectedItem(item);
                  if (onClose) onClose();
                }}
              >
                <Text style={styles.makeItem}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}
