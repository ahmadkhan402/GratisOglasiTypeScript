import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

export const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  gradientContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    backgroundColor: AppColors.primary,
    width: width(90),
    borderRadius: 30,
    marginVertical: height(3),
  },
  myAdsContainer: {
    // backgroundColor: AppColors.white,
    // margin: width(1),
    // paddingHorizontal: width(10),
    // paddingVertical: height(1),
    width: width(43),
    height: height(6),
    // borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  myFavContainer: {
    // backgroundColor:AppColors.white,
    // margin: width(1),
    // paddingHorizontal: width(10),
    // paddingVertical: height(1),
    width: width(43),
    height: height(6),
    // borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  myAdsText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  myFavText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  onFocusStyle: {
    backgroundColor: AppColors.white,
    margin: width(1),
    // paddingHorizontal: width(10),
    // paddingVertical: height(1),
    width: width(43),
    height: height(6),
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: AppColors.primary,
    paddingBottom: height(2),
    // padding: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
  },
});
