import { Platform, StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  userImgView: {
    width: width(45),
    height: height(22),
    alignSelf: "center",
  },
  userImg: {
    width: width(45),
    height: height(22),
  },
  cameraIcon: {
    position: "absolute",
    right: 10,
    bottom: 5,
    backgroundColor: AppColors.boulder,
    width: width(10),
    height: height(5),
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  formView: {
    width: width(90),
    alignSelf: "center",
  },
  formTitle: {
    marginTop: height(4),
    marginBottom: height(2),
    // marginVertical: height(2),
    fontSize: 20,
    fontWeight: "bold",
  },
  viewStyle: {
    width: width(90),
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: AppColors.lightGrey,
    height: height(6),
    alignSelf: "center",
  },
  parentStyle: {
    width: width(90),
  },
  inputStyle: {
    fontSize: 16,
    // fontWeight: "500",
  },
});
export default styles;
