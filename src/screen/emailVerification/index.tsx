import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScreenWrapper } from "react-native-screen-wrapper";
import Header from "../../component/header";
import AppColors from "../../utils/AppColors";
import Images from "../../assets/images";
import styles from "./styles";
import { useTranslation } from "react-i18next";
import Button from "../../component/button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/params";
import ScreenNames from "../../routes/routes";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { resendVerificationEmail, verifyUser } from "../../api/user";

type navigationProps = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.AUTHENTICATION
>;

type routeProps = RouteProp<RootStackParamList, ScreenNames.EMAIL_VERIFICATION>;
export default function EmailVerification() {
  const { t } = useTranslation();
  const route = useRoute<routeProps>();
  const { params } = route || {};
  const navigation = useNavigation<navigationProps>();

  const handleResendVerificationEmail = async () => {
    console.log(params?.email);
    try {
      const response = await resendVerificationEmail(
        params?.email ? params?.email : ""
      );
      console.log("THis is the Reponse Of Verification Email", response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyUser = async () => {
    console.log(params?.email, params?.userId);

    try {
      const response = await verifyUser(
        params?.email ? params?.email : "",
        params?.userId ? params?.userId : ""
      );
      console.log("THis is the Reponse Of Verification Email", response);
      // navigation.navigate(ScreenNames.AUTHENTICATION, { showView: "OnLogin" });
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   if (params?.stateToVerify === "OnSignUp") {
  //     handleResendVerificationEmail();
  //   } else if (params?.stateToVerify === "OnLogin") {
  //     handleVerifyUser();
  //   }
  // }, []);
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Header title="Email Verification" back={true} />

        <Image source={Images.logo} style={styles.img} resizeMode="contain" />
        <View style={styles.itemContainer}>
          <Text style={styles.verifyText}>{t("verifyEmail.verifyText")}</Text>
          {params?.stateToVerify === "OnSignUp" && (
            <View style={styles.resendView}>
              <Text style={styles.notHaveEmail}>
                {t("verifyEmail.didNotReceiver")}
              </Text>
              <TouchableOpacity
                style={styles.resendbtn}
                onPress={handleVerifyUser}
              >
                <Text style={styles.resendEmail}>
                  {t("verifyEmail.resend")}
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {params?.stateToVerify === "OnLogin" && (
            <Button
              title="Resend Email"
              onPress={handleResendVerificationEmail}
              style={styles.resendBtn}
            />
          )}

          <Button
            title="Done"
            style={styles.doneBtn}
            onPress={() => {
              navigation.navigate(ScreenNames.AUTHENTICATION, {
                showView: "login",
              });
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
