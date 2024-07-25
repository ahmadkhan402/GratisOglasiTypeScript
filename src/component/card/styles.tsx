import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  cardContainer: {
    width: width(100),
    // height: height(40),
    marginVertical: height(1),
    // alignSelf: "center",
    marginRight: width(1),
  },
  cardView: {
    // margin: width(1.7),
    marginLeft: width(2.5),
    marginVertical: height(1),
    width: width(46),
    height: height(38),
    borderWidth: 1,
    borderColor: AppColors.primary,
    borderRadius: 10,
    padding: width(2),
    backgroundColor: AppColors.white,
  },
  cardImage: {
    width: width(42),
    height: height(14),
    resizeMode: "cover",
    alignSelf: "center",
  },
  title: {
    maxWidth: width(41),
    fontSize: 15,
    fontWeight: "900",
  },
  heartIcon: {
    alignSelf: "flex-end",
    width: width(8),
    height: height(4),
    verticalAlign: "middle",
  },
  priceKM: {
    fontSize: 16,
    fontWeight: "900",
    color: AppColors.primary,
  },
  priceEur: {
    marginVertical: height(0.5),
    fontSize: 16,
    fontWeight: "900",
    color: AppColors.gray,
  },
  location: {
    width: width(42),
    height: height(5),
    marginVertical: height(0.5),
    fontSize: 14,
    fontWeight: "500",
    color: AppColors.gray,
  },
  time: {
    fontSize: 14,
    fontWeight: "500",
    color: AppColors.gray,
  },
});

export default styles;
