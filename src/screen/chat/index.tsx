import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../../utils/params";
import ScreenNames from "../../routes/routes";

type ChatScreenRouteProp = RouteProp<RootStackParamList, ScreenNames.CHAT>;
export default function Chat() {
  const route = useRoute<ChatScreenRouteProp>();
  return (
    <View>
      <Text>Email</Text>
      <Text>Pasword</Text>
    </View>
  );
}
