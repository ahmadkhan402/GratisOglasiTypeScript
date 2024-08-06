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
});
export default styles;
