import { StyleSheet } from "react-native";
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
});
