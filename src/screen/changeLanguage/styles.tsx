import { Platform, StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  container: {
    marginTop: height(3),
    width: width(90),
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGrey,
    height: height(6),
  },
  buttonText: {
    fontSize: 16,
    color: AppColors.gray,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: AppColors.white,
    width: width(80),
    height: height(30),
    alignSelf: "center",
    borderRadius: 10,
    borderColor: AppColors.primary,
    borderWidth: 1,
  },
  modalTitle: {
    paddingLeft: width(5),
    marginVertical: height(3),
    fontSize: 18,
    fontWeight: "bold",
  },
  lngBtn: {
    width: width(70),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGrey,
    height: height(6),
  },
  lngBtnText: {
    fontSize: 16,
    color: AppColors.black,
  },
});
export default styles;
