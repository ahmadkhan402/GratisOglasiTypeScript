import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },

  logoImg: {
    width: width(30),
    height: height(10),
    resizeMode: "contain",
    marginLeft: width(4),
    // backgroundColor: "red",
  },

  searchBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width(3),
    alignSelf: "center",
    width: width(90),
    height: height(6),
    backgroundColor: AppColors.white,
    borderRadius: 10,
    borderWidth: 1,
  },
  browserCatagories: {
    marginTop: height(3),
  },
  browserCatagoriesTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width(90),
    alignSelf: "center",
  },
  catagoryTitleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAllText: {
    color: AppColors.gray,
  },
  catagoryView: {
    marginTop: height(2),
  },
  catagoryImg: {
    alignSelf: "center",
    width: width(24),
    height: height(10),
    resizeMode: "contain",
  },
  catagoryText: {
    width: width(22),
    fontSize: 14,
    textAlign: "center",
    alignSelf: "center",
  },
  latestAdsView: {
    marginTop: height(1),
  },
});

export default styles;
