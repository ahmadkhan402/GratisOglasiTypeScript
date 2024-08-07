import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  parentView: {
    width: width(85),
    alignSelf: "center",
    marginTop: height(2),
    // alignItems: "center",
  },
  textStyle: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: height(1),
  },
  parentPhoneInputView: {
    flexDirection: "row",
    borderBottomColor: AppColors.lightGrey,
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
  textInputStyle: {
    width: width(85),
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
  inputPhoneContainer: {
    width: width(85),
    marginBottom: height(1),
    borderWidth: 1,
    borderColor: AppColors.primary,
    borderRadius: 26,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  phoneInputContainer: {
    height: height(6),
  },
  inputPhoneTextContainer: {
    height: height(6),
    backgroundColor: AppColors.white,
    borderRadius: 20,
    justifyContent: "center",
  },
});
export default styles;
