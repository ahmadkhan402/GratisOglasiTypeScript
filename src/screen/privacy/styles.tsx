import { Platform, StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  showAdsView: {
    height: height(7),
    flexDirection: "row",
    justifyContent: "space-between",
    width: width(85),
    alignSelf: "center",
  },
  showAdsTxt: {
    fontSize: 16,
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});
export default styles;
