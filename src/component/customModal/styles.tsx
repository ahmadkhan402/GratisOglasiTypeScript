import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";
import { height, width } from "../../utils/Dimension";

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },
    modalView: {
        
      width: width(80),
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      borderWidth:0.8,
      borderColor:AppColors.primary,
      elevation: 5
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
      marginLeft:width(4)
    },
    input: {
      width: width(60),
      borderBottomWidth:0.8,
    //   backgroundColor: AppColors.red,
      height: height(7),
      borderColor: 'gray',
      borderWidth:0,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    },
    button: {
      backgroundColor: AppColors.yellow,
      borderRadius: 25,
      padding: 10,
      marginHorizontal: 5,
      flex: 1,
      alignItems: 'center'
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
    }
  });

  export default styles