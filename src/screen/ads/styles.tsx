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
    width: width(100),
    height: height(14),
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  adsHeaderContentView: {
    width: width(100),
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
    alignItems: "flex-start",
  },
  loadingView: {
    justifyContent: "center",
    // marginTop: height(10),
    alignItems: "center",
    flex: 1,
  },
  loaderImg: {
    width: width(30),
    height: height(18),
    resizeMode: "contain",
  },
  searchBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width(3),
    alignSelf: "center",
    width: width(76),
    height: height(6),
    backgroundColor: AppColors.white,
    borderRadius: 10,
    borderWidth: 1,
    // verticalAlign: "middle",
  },
  searchIcon: {
    width: width(8),
    height: width(6),
    alignItems: "center",
    // backgroundColor: AppColors.primary,
  },
  filterIcon: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: AppColors.primary,
    width: width(10),
    height: height(6),
    justifyContent: "center",
    alignItems: "center",
    marginRight: width(1),
  },
  displayView: {
    flexDirection: "row",
    width: width(100),
    justifyContent: "space-between",
    paddingHorizontal: width(4),
    alignItems: "center",
  },
  cardView: {
    width: width(46),
    height: height(38),
    borderWidth: 1,
    borderColor: AppColors.primary,
    borderRadius: 10,
    padding: width(2),
    backgroundColor: AppColors.white,
  },
  sortView: {
    flex: 1,
    alignItems: "center",
    // alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "flex-end",
    // backgroundColor: AppColors.white,
  },
  sortBtn: {
    // alignSelf: "flex-end",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: width(3),
    // flex: 1,
    // width: width(28),
    // height: height(6),
    // backgroundColor: AppColors.white,
    // borderRadius: 10,
    // borderWidth: 1,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "400",
  },
  adsIconView: {
    flexDirection: "row",
    width: width(12),
    marginLeft: width(2),
    // backgroundColor: AppColors.red,
  },
  adViewIcon: {
    width: width(6),
    alignItems: "center",
    justifyContent: "center",
    marginRight: width(1),
  },
  gridFlatListStyle: {
    flex: 1,
    width: width(96),
    alignSelf: "center",
  },
  gridCardView: {
    width: width(48),
    alignItems: "center",
    alignSelf: "center",
  },
  gridCardStyle: {
    width: width(46),
    marginLeft: 0,
  },
});

export default styles;
