import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  parentView: {
    width: width(85),
    alignSelf: "center",
  },
  textStyle: {
    width: width(85),
    fontSize: 20,
    fontWeight: "600",
    marginTop: height(1),
    marginLeft: width(2),
  },
  iconInputView: {
    width: width(85),
    height: height(6),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: AppColors.primary,
    borderRadius: 30,
    paddingLeft: 15,
    // marginBottom: height(1),
    marginTop: height(1),
    justifyContent: "space-between",
  },
  iconView: {
    width: width(10),
    height: height(6),
    alignItems: "center",
    justifyContent: "center",
  },
  iconInputStyle: {
    width: width(63),
    height: height(6),
    fontSize: 14,
  },
  inputStyle: {
    width: width(68),
    height: height(6),
    fontSize: 14,
  },
  eyeIcon: {
    width: width(12),
    height: height(6),
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
