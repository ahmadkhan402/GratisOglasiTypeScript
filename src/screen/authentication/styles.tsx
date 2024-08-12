import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";
const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    // paddingHorizontal:width(5),
    // paddingTop:height(6),
  },
  statusBar: {
    backgroundColor: AppColors.primary,
  },
  logoContainer: {
    // paddingTop: height(1),
    alignItems: "center",
  },
  logoStyle: {
    resizeMode: "contain",
    width: width(80),
    height: height(20),
  },

  back: {
    // backgroundColor: AppColors.primary,
    height: height(5),
    width: width(10),
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    paddingTop: height(1),
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 39,
    fontWeight: "bold",
  },
  enterDetailsText: {
    fontSize: 13,
    fontWeight: "300",
  },
  gradientContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    backgroundColor: AppColors.primary,
    width: width(85),
    borderRadius: 30,
  },
  loginContainer: {
    // backgroundColor:AppColors.white,
    margin: width(1),
    paddingHorizontal: width(10),
    paddingVertical: height(1),
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  signupContainer: {
    // backgroundColor:AppColors.white,
    margin: width(1),
    paddingHorizontal: width(10),
    paddingVertical: height(1),
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  signupText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  onFocusStyle: {
    backgroundColor: AppColors.white,
    margin: width(1),
    paddingHorizontal: width(10),
    paddingVertical: height(1),
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  langContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    marginHorizontal: width(2),
    backgroundColor: AppColors.primary,
    width: width(30),
    height: height(12),
    borderRadius: 5,
  },
  MenuText: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
  },
  MenuIcon: {
    color: "black",
    paddingLeft: width(1),
    textAlign: "center",
  },
  menuView: {
    height: height(5),
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: width(15),
  },
  menuItems: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
