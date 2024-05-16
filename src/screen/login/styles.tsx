import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        // paddingHorizontal: 12,
       paddingTop:height(3),
      //  justifyContent:"center",
       alignSelf:"center"
       
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
      justifyContent:"space-between",
        flexDirection: 'row',
        alignItems: 'center',
      },
      labelRemember: {
        fontSize: 14,
        fontWeight: '200',
        color: AppColors.boulder,
        textAlign:"center",
      },
      checkbox: {
        margin: 8,
      },
    
      checkboxContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        paddingVertical:height(1),
        paddingLeft:width(2)
      },
      dontHaveAccount:{
        flexDirection:"row",
        alignSelf:"center",
        justifyContent:"center"
      },
      labelSignUp:{
        textAlign:"center",
        fontWeight:"600",
        fontSize:16,
        paddingLeft:width(1)
      },
      

})

export default styles