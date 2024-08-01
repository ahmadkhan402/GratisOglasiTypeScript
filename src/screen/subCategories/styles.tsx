import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  subCategoryContainer: {
    width: width(90),
    alignSelf: "center",
    marginTop: height(1),
  },
  subCategoryItem: {
    marginTop: height(2),
    height: height(5),
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGrey,
  },
  subCategoryText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
export default styles;
