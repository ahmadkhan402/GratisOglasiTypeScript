import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  checkBoxView: {
    flexDirection: "row",
    marginTop: height(1),
    height: height(4),
    alignItems: "center",
  },
  checkBoxText: {
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: width(3),
  },
});
export default styles;
