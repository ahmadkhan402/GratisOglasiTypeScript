import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import styles from "./styles";
import Header from "../../component/header";
import AppColors from "../../utils/AppColors";
import { ScreenWrapper } from "react-native-screen-wrapper";

export default function Privacy() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Header title="Privacy" back={true} />
        <View style={styles.showAdsView}>
          <Text style={styles.showAdsTxt}>Show my ads</Text>
          <Switch
            trackColor={{ false: AppColors.red, true: AppColors.green }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
