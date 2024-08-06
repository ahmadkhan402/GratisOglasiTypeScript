import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";

export const styles = StyleSheet.create({
  loaderView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: width(30),
    height: height(15),
    resizeMode: "contain",
  },
});
