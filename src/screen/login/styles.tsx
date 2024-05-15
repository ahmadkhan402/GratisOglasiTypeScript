import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        paddingHorizontal: 12,
       paddingTop:height(3),
       
    },
    textInput: {
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        width: '100%',
    },
   
    label:{
        fontWeight:"600",
        fontSize:18,
        paddingVertical:height(1),
        paddingLeft:width(2)
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      labelRemember: {
        fontSize: 14,
        fontWeight: '200',
        color: AppColors.boulder,
      },
      checkbox: {
        margin: 8,
      },
      forgotPassword:{
        fontSize:14,
        fontWeight:"600",
        color:AppColors.boulder
      }
})

export default styles