import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { RootStackParamList } from '../../utils/params';
import ScreenNames from '../../routes/routes';

type ChatScreenRouteProp = RouteProp<RootStackParamList, ScreenNames.Chat>;
export default function Chat() {
  
  const route = useRoute<ChatScreenRouteProp>()
  return (
    <View>
      <Text>Email: {route.params?.Email}</Text>
      <Text>Pasword: {route.params?.Password}</Text>
     </View>
  );
}
