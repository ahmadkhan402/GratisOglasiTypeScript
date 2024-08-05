import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  itemView: {
    // backgroundColor: AppColors.primary,
    width: width(85),
    height: height(6),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height(1),
    // padding: width(1),
    // backgroundColor: "red",
  },
  iconView: {
    width: width(8),
    height: height(4),
    backgroundColor: AppColors.lightGrey,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    paddingLeft: width(3),
    width: width(60),
    height: height(6),
    textAlignVertical: "center",
    textAlign: "left",
  },
});

export default styles;
