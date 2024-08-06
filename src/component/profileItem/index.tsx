import React, { ReactNode } from "react";

import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";

interface Props {
  icon: ReactNode;
  title: string;
  arrow?: boolean;
  onPress?: () => void;
}
export default function ProfileItem({ icon, title, arrow, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.itemView} onPress={onPress}>
      <View style={styles.iconView}>
        {/* <Text style={styles.icon}>{icon}</Text> */}
        {icon}
      </View>
      <View style={styles.titleView}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {arrow && (
        <Entypo name="chevron-small-right" size={25} color={AppColors.black} />
      )}
    </TouchableOpacity>
  );
}
