import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ScreenNames from '../../routes/routes'
import { RootStackParamList } from '../../utils/params'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, ScreenNames.Home>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate(ScreenNames.Profile)} />
      <Button title="Go to My Ads" onPress={() => navigation.navigate(ScreenNames.MyAds)} />
      <Button title="Go to Authentication" onPress={() => navigation.navigate(ScreenNames.Authentication)} />
      <Button title="Go to Ad Post" onPress={() => navigation.navigate(ScreenNames.AdPost)} />
      <Button title="Go to Edit Profile" onPress={() => navigation.navigate(ScreenNames.EditProfile)} />
      

    </View>
  )
}