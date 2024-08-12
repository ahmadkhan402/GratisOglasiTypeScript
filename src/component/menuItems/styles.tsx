import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

export const styles = StyleSheet.create({
  menuItemView: {
    width: width(7),
    height: height(4),
    backgroundColor: AppColors.lightGrey,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height(2),
    borderRadius: 5,
  },
  menuItem: {
    marginLeft: width(2),
    justifyContent: "center",
    // alignItems: "center",
  },
});
