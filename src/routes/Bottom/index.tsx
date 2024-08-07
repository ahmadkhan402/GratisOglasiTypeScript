import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Platform } from "react-native";
import ScreenNames from "../routes";
import {
  AdPostScreen,
  AdsScreen,
  AuthScreen,
  CategoriesScreen,
  ChatScreen,
  EditProfileScreen,
  HomeScreen,
  MyAdsScreen,
  ProfileScreen,
  SubCategoriesScreen,
} from "../../screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather, Ionicons } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";
import Images from "../../assets/images";
import styles from "./styles";
import { height } from "../../utils/Dimension";
import PersonalAds from "../../screen/personalAds";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
      <Stack.Screen
        name={ScreenNames.EDITPROFILE}
        component={EditProfileScreen}
      />
      <Stack.Screen name={ScreenNames.ADPOST} component={AdPostScreen} />
      <Stack.Screen name={ScreenNames.ADS} component={AdsScreen} />
      <Stack.Screen
        name={ScreenNames.CATEGORIES}
        component={CategoriesScreen}
      />
      <Stack.Screen
        name={ScreenNames.SUBCATEGORIES}
        component={SubCategoriesScreen}
      />
    </Stack.Navigator>
  );
};

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: AppColors.primary,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name={ScreenNames.TABHOME}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? AppColors.primary : AppColors.black}
            />
          ),
          tabBarActiveTintColor: AppColors.primary,
          tabBarLabel: "HOME",
        }}
        component={HomeStack}
      />

      <Tab.Screen
        name={ScreenNames.CHAT}
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color={focused ? AppColors.primary : AppColors.black}
            />
          ),
          tabBarActiveTintColor: AppColors.primary,
          tabBarLabel: "CHAT",
        }}
      />
      <Tab.Screen
        name={ScreenNames.CATEGORIES}
        component={CategoriesScreen}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                source={Images.PLUS}
                style={styles.plusIcon}
                resizeMode="contain"
              />
            </View>
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name={ScreenNames.PERSONAL_ADS}
        component={PersonalAds}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="file-tray-stacked-outline"
              size={25}
              color={focused ? AppColors.primary : AppColors.black}
            />
          ),
          tabBarLabel: "My Ads",
        }}
      />

      <Tab.Screen
        name={ScreenNames.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={25}
              color={focused ? AppColors.primary : AppColors.black}
            />
          ),
          tabBarLabel: "Account",
        }}
      />
    </Tab.Navigator>
  );
}
