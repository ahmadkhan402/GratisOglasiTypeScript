import { Platform, StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  userContentView: {
    width: width(100),
    height: height(40),
    // backgroundColor: AppColors.primary,
    alignItems: "center",
    // justifyContent: "center",
    marginBottom: height(2),
  },
  userImg: {
    width: width(45),
    height: height(22),
    borderRadius: 100,
    // backgroundColor: AppColors.white,
  },
  userNameView: {
    height: height(5),
    justifyContent: "center",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: AppColors.black,
  },
  userEmail: {
    fontSize: 15,
    color: AppColors.black,
  },
  editBtn: {
    marginTop: height(2),
    width: width(40),
    height: height(6),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.white,
    borderRadius: 30,
    borderColor: AppColors.primary,
    borderWidth: 1,
  },
  editTxt: {
    fontSize: 15,
    color: AppColors.black,
    fontWeight: "bold",
  },
  userFuctionView: {
    flex: 1,
    paddingTop: height(4),
    // justifyContent: "center",
    // width: width(100),
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: AppColors.white,
    ...(Platform.OS === "ios"
      ? {
          shadowColor: AppColors.black,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
        }
      : {
          elevation: 5,
        }),
    // ...Platform.select({
    //   ios: {
    //     shadowColor: AppColors.black,
    //     shadowOffset: {
    //       width: 0,
    //       height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84,
    //   },
    //   android: {
    //     elevation: 5,
    //   },
    // }),
  },

  cancelBtn: {
    backgroundColor: AppColors.white,
    borderColor: AppColors.black,
    borderWidth: 1,
    height: height(6),
  },
  actionBtn: {
    backgroundColor: AppColors.red,

    height: height(6),
  },
});
export default styles;
