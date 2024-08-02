import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    // paddingHorizontal: 12,
    paddingTop: height(2),
    //  justifyContent:"center",
    alignSelf: "center",
  },
  textInput: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
  },

  label: {
    fontWeight: "600",
    fontSize: 18,
    paddingVertical: height(1),
    paddingLeft: width(2),
  },
  section: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  labelRemember: {
    fontSize: 14,
    fontWeight: "400",
    color: AppColors.boulder,
    textAlign: "center",
  },
  checkbox: {
    width: width(5),
    height: height(2.5),
    margin: width(2),
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: width(2),
  },
  dontHaveAccount: {
    paddingTop: height(1),
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
  labelSignUp: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
    paddingLeft: width(1),
  },
  signUpBtn: {
    paddingLeft: width(1),
  },
  signUpText: {
    fontSize: 16,
    fontWeight: "500",
    color: AppColors.blueType,
  },
  errorMessage: {
    color: AppColors.red,
    textAlign: "left",
    width: width(82),
    alignSelf: "center",
  },
  // forgotbtn: {},
  forgotText: {
    fontSize: 14,
    fontWeight: "400",
    color: AppColors.boulder,
    textAlign: "center",
  },
});

export default styles;
