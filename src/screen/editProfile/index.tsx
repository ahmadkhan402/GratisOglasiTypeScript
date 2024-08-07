import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import styles from "./styles";
import { useSelector } from "react-redux";
import Header from "../../component/header";
import { Fontisto } from "@expo/vector-icons";
import InputText from "../../component/inputText";
import ChangeNumber from "../../component/changeNumber";
import Button from "../../component/button";
import DropDownMenu from "../../component/dropDownMenu";
import { useTranslation } from "react-i18next";
import * as ImagePicker from "expo-image-picker";

export default function EditProfile() {
  const { t } = useTranslation();
  const userData = useSelector((state: any) => state.user.userData);
  const [user, setUser] = useState<any>(userData[0]);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setSelectedImage(result?.assets[0]?.uri);
    }
  };

  const openCamra = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setSelectedImage(result?.assets[0]?.uri);
      setModalVisible(false);
    }
  };

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Header title="Edit Profile" back={true} />
        <ScrollView>
          <View style={styles.userImgView}>
            {selectedImage && selectedImage !== "" ? (
              <Image source={{ uri: selectedImage }} style={styles.userImg} />
            ) : (
              <Image
                source={{ uri: user && user?.profilePicture }}
                style={styles.userImg}
              />
            )}
            <TouchableOpacity
              style={styles.cameraIcon}
              onPress={() => setModalVisible(true)}
            >
              <Fontisto name="camera" size={18} color={AppColors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.formView}>
            <Text style={styles.formTitle}>Basic Information</Text>

            <InputText
              label="First Name"
              value={user?.firstname}
              placeholder="Enter First Name"
              viewStyle={styles.viewStyle}
              parentStyle={styles.parentStyle}
              style={styles.inputStyle}
            />
            <InputText
              label="Last Name"
              value={user?.lastname}
              placeholder="Enter Last Name"
              viewStyle={styles.viewStyle}
              parentStyle={styles.parentStyle}
              style={styles.inputStyle}
            />
            <InputText
              label="Email"
              value={user?.email}
              placeholder="Enter Email"
              viewStyle={styles.viewStyle}
              parentStyle={styles.parentStyle}
              style={styles.inputStyle}
            />
            <Text style={styles.formTitle}>Contact Information</Text>

            <ChangeNumber
              value={user?.phoneNo}
              changeValue={user?.phoneNo}
              setChangeValue={setPhoneNumber}
              text="Phone Number"
              inputStyle={styles.inputNumStyle}
              phoneNumberContainerStyle={styles.phoneNumberContainerStyle}
              phoneNumberInputStyle={styles.phoneNumberInputStyle}
              phoneNumberTextStyle={styles.phoneNumberTextStyle}
              parentPhoneInputViewStyle={styles.parentPhoneInputViewStyle}
              closed={true}
            />
            <ChangeNumber
              value={user?.phoneNo}
              changeValue={user?.phoneNo}
              setChangeValue={setPhoneNumber}
              text="WhatsApp"
              inputStyle={styles.inputNumStyle}
              phoneNumberContainerStyle={styles.phoneNumberContainerStyle}
              phoneNumberInputStyle={styles.phoneNumberInputStyle}
              phoneNumberTextStyle={styles.phoneNumberTextStyle}
              parentPhoneInputViewStyle={styles.parentPhoneInputViewStyle}
              closed={true}
            />
            <ChangeNumber
              value={user?.phoneNo}
              changeValue={user?.phoneNo}
              setChangeValue={setPhoneNumber}
              text="Viber"
              inputStyle={styles.inputNumStyle}
              phoneNumberContainerStyle={styles.phoneNumberContainerStyle}
              phoneNumberInputStyle={styles.phoneNumberInputStyle}
              phoneNumberTextStyle={styles.phoneNumberTextStyle}
              parentPhoneInputViewStyle={styles.parentPhoneInputViewStyle}
              closed={true}
            />

            <Button title="Save" style={styles.btnStyle} />
          </View>
        </ScrollView>

        <DropDownMenu
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          firstBtnText={t("editProfile.takePhoto")}
          secondBtnText={t("editProfile.library")}
          onPressFirstBtn={() => openCamra()}
          onPressSecondBtn={() => pickImage()}
        />
      </View>
    </ScreenWrapper>
  );
}
