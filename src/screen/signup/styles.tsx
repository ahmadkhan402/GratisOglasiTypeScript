import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    alignItems: "center",
    paddingTop: height(3),
    alignSelf: "center",
  },
  inputContainer: {
    backgroundColor: AppColors.primary,

    alignItems: "center",
    paddingTop: height(3),
    alignSelf: "center",
  },
  textInput: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
  },
  errorMessage: {
    color: AppColors.red,
    textAlign: "left",
    width: width(90),
  },
  label: {
    fontWeight: "600",
    fontSize: 18,
    paddingVertical: height(1),
    paddingLeft: width(2),
  },
  section: {},
  labelRemember: {
    fontSize: 15,
    fontWeight: "400",
    color: AppColors.black,
    textAlign: "center",
  },
  checkbox: {
    marginVertical: width(1),
  },

  checkboxContainer: {
    width: width(75),
    marginVertical: height(1),
    justifyContent: "flex-start",
    flexDirection: "row",
  },

  labelContainer: {
    paddingLeft: width(2),
    flexDirection: "column",
  },
  haveAccount: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    paddingBottom: height(8),
  },
  labelSignIn: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
    paddingLeft: width(1),
  },
  alreadyAccoutLabel: {
    fontSize: 16,
    fontWeight: "400",
    color: AppColors.boulder,
    textAlign: "center",
  },
  signInBtn: {
    marginLeft: width(1),
    // width: width(20),
    // backgroundColor: AppColors.primary,
    alignItems: "center",
  },
  signInText: {
    color: AppColors.blueType,
    fontSize: 16,
  },
  signUpbtn: {
    width: width(90),
    alignSelf: "center",
  },
});

export default styles;
