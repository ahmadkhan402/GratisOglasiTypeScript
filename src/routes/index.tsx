import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ScreenNames from "./routes";
import {
  AdPostScreen,
  AuthScreen,
  ChangePasswordScreen,
  ChatScreen,
  EditProfileScreen,
  EmailVerficationScreen,
  HomeScreen,
  LocationScreen,
  MyAdsScreen,
  ProfileScreen,
  SettingScreen,
  SubCategoriesScreen,
} from "../screen";
import BottomTab from "./Bottom";
import { RootStackParamList } from "../utils/params";
import Ads from "../screen/ads";
import Details from "../screen/details";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.AUTHENTICATION}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={ScreenNames.HOME} component={BottomTab} />

        <Stack.Screen name={ScreenNames.CHAT} component={ChatScreen} />
        <Stack.Screen name={ScreenNames.ADPOST} component={AdPostScreen} />
        <Stack.Screen
          name={ScreenNames.EDITPROFILE}
          component={EditProfileScreen}
        />
        <Stack.Screen
          name={ScreenNames.CHANGE_PASSWORD}
          component={ChangePasswordScreen}
        />
        <Stack.Screen name={ScreenNames.SETTINGS} component={SettingScreen} />
        <Stack.Screen name={ScreenNames.PROFILE} component={ProfileScreen} />
        <Stack.Screen name={ScreenNames.MYADS} component={MyAdsScreen} />
        <Stack.Screen name={ScreenNames.ADS} component={Ads} />
        <Stack.Screen name={ScreenNames.DETAILS} component={Details} />
        <Stack.Screen name={ScreenNames.LOCATION} component={LocationScreen} />
        <Stack.Screen
          name={ScreenNames.EMAIL_VERIFICATION}
          component={EmailVerficationScreen}
        />
        <Stack.Screen
          name={ScreenNames.AUTHENTICATION}
          component={AuthScreen}
        />
        <Stack.Screen
          name={ScreenNames.SUBCATEGORIES}
          component={SubCategoriesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
