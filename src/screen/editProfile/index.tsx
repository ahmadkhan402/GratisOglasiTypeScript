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

export default function EditProfile() {
  const userData = useSelector((state: any) => state.user.userData);
  const [user, setUser] = useState<any>(userData[0]);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Header title="Edit Profile" back={true} />
        <ScrollView>
          <View style={styles.userImgView}>
            <Image
              source={{ uri: user && user?.profilePicture }}
              style={styles.userImg}
            />
            <TouchableOpacity style={styles.cameraIcon}>
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
            />
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
}
