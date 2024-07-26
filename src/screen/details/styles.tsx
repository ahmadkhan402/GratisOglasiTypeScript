import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  swiperView: {
    width: width(95),
    height: height(32),
    alignSelf: "center",
  },
  image: {
    width: width(70),
    height: height(30),
    resizeMode: "contain",
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dotStyle: {
    marginBottom: height(3.5),
  },
  contentView: {
    width: width(90),
    alignSelf: "center",
  },
  priceKm: {
    fontSize: 17,
    fontWeight: "bold",
    color: AppColors.primary,
    height: height(3.5),
    textAlignVertical: "center",
  },
  priceEur: {
    fontSize: 17,
    fontWeight: "bold",
    color: AppColors.gray,
    height: height(3.5),
    textAlignVertical: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    height: height(5),
    textAlignVertical: "center",
    color: AppColors.black,
  },
  publishView: {
    marginTop: height(1),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  showInRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  publishText: {
    fontSize: 15,
    paddingLeft: width(3),
  },
  categoryDetail: {
    marginTop: height(2),
    width: width(90),
    paddingBottom: height(2),
    backgroundColor: AppColors.cruise,
    borderRadius: 10,
  },
  detailView: {
    justifyContent: "center",
    alignItems: "center",
    width: width(25),
    height: height(5),
  },
  detailText: {
    fontSize: 20,
    color: AppColors.black,
    fontWeight: "bold",
  },
  categoryItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width(70),
    marginLeft: width(4),
  },
  categoryItem: {
    marginVertical: height(0.5),
    fontWeight: "600",
  },
});

export default styles;
