import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import ScreenNames from "../routes";
import {
  AdPostScreen,
  AuthScreen,
  EditProfileScreen,
  HomeScreen,
} from "../../screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";

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
    </Stack.Navigator>
  );
};

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.primary,
      }}
    >
      <Tab.Screen
        name={ScreenNames.HOME}
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
      <Tab.Screen name={ScreenNames.TABADPOST} component={AdPostScreen} />
      <Tab.Screen name={ScreenNames.TABAUTHENTICATION} component={AuthScreen} />
    </Tab.Navigator>
  );
}
