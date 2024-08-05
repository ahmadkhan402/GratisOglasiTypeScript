import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  parentStyle: {
    width: width(90),
    alignSelf: "center",
  },
  contentView: {
    width: width(90),
    alignSelf: "center",
  },
  inputView: {
    width: width(90),
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderColor: AppColors.lightGrey,
    alignSelf: "center",
  },
  inputStyle: {},
  btnStyle: {
    width: width(90),
    alignSelf: "center",
    marginTop: height(4),
    borderRadius: 8,
  },
});
export default styles;
