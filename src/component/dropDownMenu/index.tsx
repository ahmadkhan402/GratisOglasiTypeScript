import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import AppColors from "../../utils/AppColors";
import styles from "./styles";
interface DropDownMenuProps {
  isVisible?: boolean;
  onClose?: () => void;
  onPressFirstBtn?: () => void;
  onPressSecondBtn?: () => void;
  firstBtnText?: string;
  secondBtnText?: string;
  thirdText?: string;
  onPressThirdBtn?: () => void;
}

export default function DropDownMenu({
  isVisible = false,
  onClose = () => {},
  onPressFirstBtn = () => {},
  onPressSecondBtn = () => {},
  firstBtnText = "",
  secondBtnText = "",
  thirdText = "",
  onPressThirdBtn = () => {},
}: DropDownMenuProps) {
  const { t } = useTranslation();

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="fadeInUpBig"
      animationInTiming={500}
      backdropColor={AppColors.black}
    >
      <View style={styles.modalContainer}>
        <View
          style={[
            firstBtnText && !secondBtnText && !thirdText
              ? styles.smallButtonContainer
              : styles.buttonContainer,
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={onPressFirstBtn}
          >
            <Text style={styles.btnText}>{firstBtnText}</Text>
          </TouchableOpacity>

          {secondBtnText !== "" && (
            <>
              <View style={styles.line} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={onPressSecondBtn}
              >
                <Text style={styles.btnText}>{secondBtnText}</Text>
              </TouchableOpacity>
            </>
          )}
          {thirdText !== "" && (
            <>
              <View style={styles.line} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={onPressThirdBtn}
              >
                <Text style={styles.btnText}>{thirdText}</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.cancelBtn}
          onPress={onClose}
        >
          <Text style={styles.cancel_Text}>{t("dropDownMenu.cancel")}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
