import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Header from "../../component/header";
import Images from "../../assets/images";
import { useSelector } from "react-redux";
import ProfileItem from "../../component/profileItem";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/params";
import ScreenNames from "../../routes/routes";
import { useNavigation } from "@react-navigation/native";

type navigationProps = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.PROFILE
>;
export default function Profile() {
  const navigation = useNavigation<navigationProps>();
  const userData = useSelector((state: any) => state.user.userData);
  const [user, setUser] = useState<any>(userData[0]);
  // setUser(userData);
  console.log("userData in state", user);

  return (
    <View style={styles.parentView}>
      <Header back={false} title={"Profile"} />
      <View style={styles.userContentView}>
        <Image
          source={{ uri: user && user?.profilePicture }}
          style={styles.userImg}
        />
        <Text style={styles.userName}>
          {user && user?.firstname + " " + user?.lastname}
        </Text>
        <Text style={styles.userEmail}>{user && user?.email}</Text>

        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editTxt}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.userFuctionView}>
        <ProfileItem
          icon={<Feather name="lock" size={20} color={AppColors.tangerine} />}
          title="Change Password"
          arrow={true}
          onPress={() => {
            navigation.navigate(ScreenNames.CHANGE_PASSWORD);
          }}
        />
        <ProfileItem
          icon={
            <AntDesign name="setting" size={20} color={AppColors.tangerine} />
          }
          title="Settings"
          arrow={true}
          onPress={() => {
            navigation.navigate(ScreenNames.SETTINGS);
          }}
        />
        <ProfileItem
          icon={<AntDesign name="mail" size={20} color={AppColors.tangerine} />}
          title="Contact Us"
          arrow={true}
        />
        <ProfileItem
          icon={
            <MaterialIcons
              name="logout"
              size={20}
              color={AppColors.tangerine}
            />
          }
          title="Logout"
          arrow={true}
        />
      </View>
    </View>
  );
}
