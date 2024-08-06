import React from "react";
import { View, Text, Image } from "react-native";
import Modal from "react-native-modal";
import { styles } from "./styles";
import AppColors from "../../utils/AppColors";
import Images from "../../assets/images";

interface Props {
  visible: boolean;
  closed: () => void;
}
export default function Loader({ visible, closed }: Props) {
  return (
    <Modal isVisible={visible} onBackdropPress={closed}>
      <View style={styles.loaderView}>
        <Image source={Images.GRATISGIF} style={styles.img} />
      </View>
    </Modal>
  );
}
