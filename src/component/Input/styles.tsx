import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    // flex: 1,
    // paddingHorizontal: 20,
  },
  textInputContainer: {
    paddingHorizontal: width(5),
    justifyContent: "center",
    borderColor: AppColors.primary,
    width: width(90),
    height: height(6),
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: height(1),
  },
  textInput: {
    // backgroundColor: AppColors.red,
    width: width(80),
  },
  textInputHide:{
    // backgroundColor: AppColors.red,
    width:width(71)
  },
  phoneInputText: {
    flex: 1,
  },
  inputPhoneContainer: {
    width: width(90),
    marginBottom: height(1),
    borderWidth: 1,
    borderColor: AppColors.primary,
    borderRadius: 26,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  phoneInputContainer: {
    height: height(6),
  
  },
  inputPhoneTextContainer: {
    height: height(6),
    backgroundColor: AppColors.white,
    borderRadius: 20,
    justifyContent: "center",
  },

  inputPhoneFlag:{
    backgroundColor:AppColors.primary
  },
  icon:{
    
    // backgroundColor:AppColors.primary
  },
  textViewContainer: {
    flexDirection:"row", justifyContent:"space-between",alignItems:"center"}
});

export default styles;
