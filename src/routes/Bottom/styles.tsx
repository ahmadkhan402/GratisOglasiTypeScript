import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  plusIcon: {
    width: width(15),
    height: height(10),
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: height(4),
  },
  tabBarLabelStyle: {
    fontSize: 10,
    color: AppColors.black,
    paddingBottom: height(0.5),
  },
  tabBarStyle: {
    borderTopColor: AppColors.primary,
    borderTopWidth: 2,
  },
});
export default styles;
