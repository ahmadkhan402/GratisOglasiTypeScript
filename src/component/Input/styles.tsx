import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
    parentView: {
        // flex: 1,
        // paddingHorizontal: 20,
       
    },
    textInputContainer:{
        paddingHorizontal:width(3),
        justifyContent:"center",
        borderColor:AppColors.primary,
        width:width(82),
        height:height(5),
        borderWidth:1,
        borderRadius:20,
        marginBottom:height(1)
    },
    textInput: {
        width: '100%',
    }
})

export default styles