import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ScreenNames from './routes'
import { AdPostScreen, AuthScreen, ChatScreen, EditProfileScreen, HomeScreen, MyAdsScreen, ProfileScreen } from '../screen'
import BottomTab from './Bottom'

const Stack = createNativeStackNavigator()
export default function Route() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenNames.Home} component={BottomTab} />
        <Stack.Screen name={ScreenNames.Chat} component={ChatScreen} />
        {/* <Stack.Screen name={ScreenNames.AdPost} component={AdPostScreen} /> */}
        {/* <Stack.Screen name={ScreenNames.EditProfile} component={EditProfileScreen} /> */}
        <Stack.Screen name={ScreenNames.Profile} component={ProfileScreen} />
        <Stack.Screen name={ScreenNames.MyAds} component={MyAdsScreen} />
        <Stack.Screen name={ScreenNames.Authentication} component={AuthScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}