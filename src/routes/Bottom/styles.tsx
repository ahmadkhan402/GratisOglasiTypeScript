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
});
export default styles;
