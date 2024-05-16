import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  inputContainer: {
    paddingTop: height(3),
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
  section: {},
  labelRemember: {
    fontSize: 15,
    fontWeight: "400",
    color: AppColors.black,
    textAlign: "center",
  },
  checkbox: {
    margin: 4,
  },

  checkboxContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },

  labelContainer: {
    paddingLeft:width(2),
    flexDirection: "column",
   
  },
  haveAccount: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    paddingBottom:height(8)
  },
  labelSignIn: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
    paddingLeft: width(1),
  },
  alreadyAccoutLabel: {
    fontSize: 14,
    fontWeight: '200',
    color: AppColors.boulder,
    textAlign:"center",
  },
});

export default styles;
