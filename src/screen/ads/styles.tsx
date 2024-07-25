import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    // paddingHorizontal:width(5),
    // paddingTop:height(6),
  },

  adsHeader: {
    width: width(98),
    height: height(15),
    backgroundColor: AppColors.lightGrey,
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  adsHeaderContentView: {
    width: width(98),
    justifyContent: "space-between",
    // backgroundColor: AppColors.red,
    flexDirection: "row",
    height: height(10),
    alignItems: "center",
  },
  backBtn: {
    width: width(8),
    height: height(6),
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width(3),
    alignSelf: "center",
    width: width(78),
    height: height(6),
    backgroundColor: AppColors.white,
    borderRadius: 10,
    borderWidth: 1,
  },
  filterIcon: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: AppColors.primary,
    width: width(10),
    height: height(6),
    justifyContent: "center",
    alignItems: "center",
  },
  displayView: {
    width: width(98),
  },
});

export default styles;
