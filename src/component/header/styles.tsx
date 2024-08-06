import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  headerView: {
    height: height(6),
    width: width(100),
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: AppColors.primary,
    alignItems: "center",
  },
  backView: {
    width: width(10),
    height: height(6),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  iconView: {
    width: width(22),
    height: height(6),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor: "white",
  },
  icon: {
    width: width(7),
    height: height(6),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    // color: AppColors.black,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  backTitle: {
    position: "absolute",
    // backgroundColor: AppColors.primary,
    width: width(100),
    height: height(6),
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
