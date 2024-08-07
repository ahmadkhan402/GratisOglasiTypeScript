import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import AppColors from "../../utils/AppColors";

export default function MyAds() {
  const [pressedButton, setPressedButton] = useState<string>("All");

  const handlePress = (value: string) => {
    setPressedButton(value);
  };
  return (
    <View style={styles.parentView}>
      <View style={styles.btnContainer}>
        {["All", "Publish", "Mute"].map((value, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handlePress(value)}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  color:
                    pressedButton === value
                      ? AppColors.primary
                      : AppColors.gray,
                },
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
