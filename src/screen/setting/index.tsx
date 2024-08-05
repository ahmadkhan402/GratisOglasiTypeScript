import React from "react";
import { View, Text } from "react-native";
import Header from "../../component/header";
import styles from "./styles";
import ProfileItem from "../../component/profileItem";
import { Feather, FontAwesome } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";
import ScreenNames from "../../routes/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/params";
import { useNavigation } from "@react-navigation/native";

type navigationProps = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.SETTINGS
>;
export default function Setting() {
  const navigation = useNavigation<navigationProps>();
  return (
    <View style={styles.parentView}>
      <Header back={true} title={"Settings"} />
      <ProfileItem
        icon={<Feather name="user" size={20} color={AppColors.tangerine} />}
        title="Privacy"
        arrow={true}
        onPress={() => {
          navigation.navigate(ScreenNames.SETTINGS);
        }}
      />
      <ProfileItem
        icon={<Feather name="lock" size={20} color={AppColors.tangerine} />}
        title="Manage Account"
        arrow={true}
        onPress={() => {
          navigation.navigate(ScreenNames.SETTINGS);
        }}
      />
      <ProfileItem
        icon={
          <FontAwesome name="language" size={20} color={AppColors.tangerine} />
        }
        title="Change Language"
        arrow={true}
        onPress={() => {
          navigation.navigate(ScreenNames.SETTINGS);
        }}
      />
    </View>
  );
}
