import { Platform, StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  dltBtn: {
    width: width(90),
    alignSelf: "center",
    borderRadius: 5,
  },
  cancelBtn: {
    backgroundColor: AppColors.white,
    borderColor: AppColors.black,
    borderWidth: 1,
    height: height(6),
  },
  actionBtn: {
    backgroundColor: AppColors.red,

    height: height(6),
  },
});
export default styles;
