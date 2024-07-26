import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import AppColors from "../../utils/AppColors";
import ScreenNames from "../../routes/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/params";
import { useNavigation } from "@react-navigation/native";
interface Props {
  back?: boolean;
  title?: string;
  icon?: boolean;
}
type navigationProps = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.DETAILS
>;
export default function Header({ back, title, icon }: Props) {
  const navigation = useNavigation<navigationProps>();
  return (
    <View style={styles.headerView}>
      {back && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backView}
        >
          <Ionicons name="chevron-back" size={26} color={AppColors.black} />
        </TouchableOpacity>
      )}
      <View>
        {icon && (
          <View style={styles.iconView}>
            <View style={styles.icon}>
              <AntDesign name="hearto" size={22} color={AppColors.black} />
            </View>
            <View style={styles.icon}>
              <Entypo
                name="dots-three-vertical"
                size={20}
                color={AppColors.black}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
