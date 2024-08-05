import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  img: {
    width: width(60),
    height: height(30),
    resizeMode: "contain",
    alignSelf: "center",
  },
  itemContainer: {
    width: width(80),
    alignSelf: "center",
  },
  verifyText: {
    fontSize: 20,
    // fontWeight: "bold",
    alignSelf: "center",
  },
  resendView: {
    marginTop: height(5),
    width: width(80),
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    height: height(5),
  },

  resendbtn: {
    alignItems: "center",
    height: height(5),
  },
  notHaveEmail: {
    fontSize: 16,
  },
  resendEmail: {
    fontSize: 16,
    color: AppColors.blue,
    marginTop: height(1),
    fontStyle: "italic",
    textDecorationLine: "underline",
    textAlignVertical: "center",
  },
  doneBtn: {
    marginVertical: height(0),
    width: width(85),
    alignSelf: "center",
  },
  resendBtn: {
    marginTop: height(6),
    marginVertical: height(1),
    width: width(85),
    alignSelf: "center",
  },
});

export default styles;
