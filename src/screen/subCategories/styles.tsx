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
    marginVertical: width(4),
  },
  subCategoryText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
export default styles;
