import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimension";
import AppColors from "../../utils/AppColors";
const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        paddingHorizontal:width(5),
        
    },
    statusBar:{
        backgroundColor:AppColors.primary
    },
    logoContainer:{
        paddingTop:height(2),
        alignItems:'center',
    },
    logoStyle:{
        resizeMode:'contain',
        width:width(80),
        height:height(20),
    },
   
    back:{
        paddingTop:height(5)
    },
    textContainer:{
        paddingTop:height(1),
        alignItems:'center',
        justifyContent:'center'
    },
    welcomeText:{
        fontSize:39,
        fontWeight:"bold",
    },
    enterDetailsText:{
        fontSize:13,
        fontWeight:"300",
    },
    gradientContainer:{
        marginTop:height(2),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        alignSelf:"center",
        backgroundColor:AppColors.primary,
        width:width(80),
        borderRadius:30
    },
    loginContainer:{
        // backgroundColor:AppColors.white,
        margin:width(1),
        paddingHorizontal:width(10),
        paddingVertical:height(1),
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },
    signupContainer:{
        // backgroundColor:AppColors.white,
        margin:width(1),
        paddingHorizontal:width(10),
        paddingVertical:height(1),
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },
    loginText:{
        fontSize:18,
        fontWeight:"bold",
    },
    signupText:{
        fontSize:18,
        fontWeight:"bold",
    },
    onFocusStyle:{
        backgroundColor:AppColors.white,
        margin:width(1),
        paddingHorizontal:width(10),
        paddingVertical:height(1),
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default styles