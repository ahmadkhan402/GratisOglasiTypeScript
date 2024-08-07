import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

export default function PersonalAds() {
  const [focusedButton, setFocusedButton] = useState<string | null>("MyAds");

  const toggleItem = (buttonName: "MyAds" | "MyFavorites") => {
    setFocusedButton(buttonName);
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[
            AppColors.primary,
            AppColors.springGreen,
            AppColors.caribbeanGreen,
            AppColors.turquoise,
            AppColors.jetStream,
          ]}
          style={styles.gradientContainer}
        >
          <TouchableOpacity
            onPress={() => toggleItem("MyAds")}
            style={[
              styles.myAdsContainer,
              focusedButton === "MyAds" && styles.onFocusStyle,
            ]}
          >
            <Text style={styles.myAdsText}>My Ads</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleItem("MyFavorites")}
            style={[
              styles.myFavContainer,
              focusedButton === "MyFavorites" && styles.onFocusStyle,
            ]}
          >
            <Text style={styles.myFavText}>My Favorites</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScreenWrapper>
  );
}
