import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  makeModal: {
    paddingVertical: height(2),
    height: height(60),
    width: width(90),
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: AppColors.wildSand,
    borderRadius: 10,
  },
  makeTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: AppColors.black,
  },
  makeItemContainer: {
    width: width(80),
  },
  makeItem: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
    paddingVertical: height(1.5),

    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGrey,
  },
});
export default styles;
