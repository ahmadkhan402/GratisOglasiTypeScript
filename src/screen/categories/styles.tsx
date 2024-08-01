import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  scrollViewContent: {
    // flexGrow: 1,
    paddingBottom: height(2),
  },
  categoryContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryItem: {
    // padding: 3,
    width: width(90),
    height: height(11),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryImage: {
    width: width(20),
    height: height(10),
    resizeMode: "contain",
  },
  categoryNameContainer: {
    paddingHorizontal: width(2),
    width: width(55),
    height: height(10),
    justifyContent: "center",
    // alignItems: "flex-start",
    // marginLeft: width(5),
  },
  categoryName: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "500",
  },
});
export default styles;
