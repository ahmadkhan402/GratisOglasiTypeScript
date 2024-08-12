import { Platform, StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

export const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: AppColors.primary,
    paddingBottom: height(2),
    // padding: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
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
