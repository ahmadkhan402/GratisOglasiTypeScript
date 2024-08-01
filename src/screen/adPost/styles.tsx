import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    // backgroundColor: AppColors.wildSand,
  },
  imgContainer: {
    width: width(80),
    height: height(30),
    backgroundColor: AppColors.wildSand,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    // backgroundColor: AppColors.alto,
  },
  iconCamra: {
    // padding: width(2),
    // position: "absolute",
    // bottom: height(7),
    // right: width(3),
    // backgroundColor: AppColors.gray,
  },
  gradientStyle: {
    width: width(26),
    height: height(10),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textContainer: {
    marginVertical: height(1.5),
    alignItems: "center",
  },
  categoryTextContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: width(6),
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: AppColors.black,
  },
  desStyle: {
    fontSize: 14,
    fontWeight: "400",
    color: AppColors.black,
  },
  formContainer: {
    flex: 1,
    marginVertical: height(4),
    marginHorizontal: width(5),
    // justifyContent: "center",
  },
  categoryContainer: {
    marginVertical: width(2.5),
    display: "flex",
    flexDirection: "row",
  },
  categoryItem: {
    width: width(90),
    height: height(6),
    justifyContent: "center",
    alignItems: "flex-start",
  },
  categoryImage: {
    width: width(18),
    height: height(10),
    resizeMode: "contain",
  },
  categoryPressableModalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGrey,
    paddingTop: height(1.5),
  },
  lightDesStyle: {
    paddingVertical: height(0.6),
    fontSize: 16,
    fontWeight: "400",
    color: AppColors.gray,
  },
  checkItemContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // marginVertical: height(2),
    //
  },
  subCategoryitem: {
    paddingVertical: height(0.5),
    // height: height(12),
    // justifyContent: "center",
    // paddingBottom: height(5),
  },
  checkTextStyle: {
    marginRight: width(4),
  },
  inputView: {
    width: width(80),
    borderWidth: 0,
    height: height(6),
    marginBottom: 0,
    marginTop: height(0),
    paddingLeft: 0,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: AppColors.alto,
    width: width(90),
    height: height(6),
    fontSize: 14,
  },
  inputViewAdTitle: {
    width: width(80),
    borderWidth: 0,
    paddingLeft: 0,
  },
  inputAdTitle: {
    borderColor: AppColors.alto,
    width: width(90),
    height: height(6),
    fontSize: 14,
    borderWidth: 1,
    paddingHorizontal: width(2),
    borderRadius: 8,
  },
  inputViewDescription: {
    width: width(90),
    height: height(15),
    borderWidth: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderColor: AppColors.lightGrey,
    borderRadius: 10,
    paddingLeft: 0,
    marginBottom: 1,
    marginTop: height(1),
  },
  inputDescription: {
    paddingHorizontal: width(2),
    // width: width(80),
    // borderWidth: 1,
    // height: height(15),
  },
  toggleLabel: {
    paddingVertical: height(0.5),
    color: "black",
    fontWeight: "600",
    flex: 1,
    justifyContent: "space-between",
  },
  submitBtn: {
    marginTop: height(3),
    borderRadius: 10,
  },
  checkGenderItem: {
    width: width(22),
    height: height(4.2),
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: AppColors.primary,
    alignItems: "center",
    marginRight: width(3),
  },
  checkGenderItem2: {
    width: width(22),
    height: height(4.2),
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: AppColors.lightGrey,
    alignItems: "center",
    marginRight: width(3),
  },
  genderText: {
    fontSize: 16,
    fontWeight: "800",
  },
  errorMessg: {
    color: "red",
    fontSize: 12,
  },
});
export default styles;
