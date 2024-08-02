import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScreenWrapper } from "react-native-screen-wrapper";
import Header from "../../component/header";
import AppColors from "../../utils/AppColors";
import Images from "../../assets/images";
import styles from "./styles";
import { useTranslation } from "react-i18next";

export default function EmailVerification() {
  const { t } = useTranslation();
  return (
    <ScreenWrapper statusBarColor={AppColors.primary}>
      <View style={{ flex: 1 }}>
        <Header title="Email Verification" back={true} />

        <Image source={Images.logo} style={styles.img} resizeMode="contain" />
        <View style={styles.itemContainer}>
          <Text style={styles.verifyText}>{t("verifyEmail.verifyText")}</Text>
          {/* 
          <View style={styles.resendView}>
            <Text style={styles.didNotText}>
              {t("verifyEmail.didNotReceiver")}
            </Text>
            <TouchableOpacity style={styles.resendTouch}>
              <Text style={styles.resendEmail}>{t("verifyEmail.resend")}</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </ScreenWrapper>
  );
}
