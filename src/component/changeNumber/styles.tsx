import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  parentView: {
    width: width(90),
    alignSelf: "center",
    marginTop: height(2),
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: height(1),
  },
  inputView: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGrey,
  },
  phoneContainer: {
    width: width(78),
    height: height(7),
    backgroundColor: AppColors.wildSand,
    alignSelf: "center",
  },
  textInput: {
    borderRadius: 30,
    backgroundColor: AppColors.wildSand,
  },
  inputStyle: {
    width: width(78),
    height: height(6),
    fontSize: 16,
  },
  iconStyle: {
    width: width(12),
    height: height(6),
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: AppColors.red,
    marginStart: width(10),
  },
});
export default styles;
