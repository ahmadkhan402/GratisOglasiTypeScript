import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: width(80),
    backgroundColor: "white",
    borderRadius: 10,
    padding: width(4),
    borderWidth: 0.8,
    borderColor: AppColors.primary,
    elevation: 5,
  },
  labelView: {
    width: width(70),
    alignSelf: "center",
    height: height(6),
    justifyContent: "center",
  },
  label: {
    // textAlignVertical: "center",
    textAlign: "center",
    fontSize: 18,
    // marginBottom: 10,
    // marginLeft: width(4),
  },
  input: {
    width: width(60),
    borderBottomWidth: 0.8,
    //   backgroundColor: AppColors.red,
    height: height(7),
    borderColor: "gray",
    borderWidth: 0,
  },
  inputStyle: {
    width: width(55),
    borderBottomWidth: 0,
  },
  parentStyle: {
    width: width(75),
  },
  viewStyle: {
    alignSelf: "center",
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    width: width(70),
    borderColor: AppColors.lightGrey,
  },
  buttonContainer: {
    marginTop: height(1),
    flexDirection: "row",
    justifyContent: "space-between",
    width: width(70),
    alignSelf: "center",
  },
  button: {
    backgroundColor: AppColors.yellow,
    borderRadius: 25,
    padding: 10,
    marginHorizontal: 5,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
