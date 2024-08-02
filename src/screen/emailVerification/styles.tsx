import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  img: {
    width: width(60),
    height: height(30),
    resizeMode: "contain",
    alignSelf: "center",
  },
  itemContainer: {
    width: width(78),
    alignSelf: "center",
  },
  verifyText: {
    fontSize: 20,
    // fontWeight: "bold",
    alignSelf: "center",
  },
});

export default styles;
