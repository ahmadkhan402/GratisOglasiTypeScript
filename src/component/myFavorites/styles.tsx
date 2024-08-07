import { Platform, StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    // paddingHorizontal:width(5),
    // paddingTop:height(6),
  },

  scrollButton: {
    position: "absolute",
    bottom: height(2),
    right: width(5),
    backgroundColor: AppColors.wildSand,

    width: width(8),
    height: height(4),
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    ...(Platform.OS === "ios"
      ? {
          shadowColor: AppColors.black,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
        }
      : { elevation: 5 }),
  },
});

export default styles;
