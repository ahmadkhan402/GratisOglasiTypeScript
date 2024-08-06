import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewProps,
  ViewStyle,
} from "react-native";
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
  style?: StyleProp<ViewStyle> | undefined;
}
type navigationProps = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.DETAILS
>;
export default function Header({ back, title, icon, style }: Props) {
  const navigation = useNavigation<navigationProps>();
  return (
    <View style={[styles.headerView, style]}>
      {back && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backView}
        >
          <Ionicons name="chevron-back" size={26} color={AppColors.black} />
        </TouchableOpacity>
      )}
      {title && (
        <View style={back ? styles.backTitleView : styles.titleView}>
          <Text style={back ? styles.backTitle : styles.title}>{title}</Text>
        </View>
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
