import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: AppColors.yellow,
    borderRadius: 25,
    height: height(6),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: height(2.5),
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: AppColors.black,
  },
});

export default styles;
