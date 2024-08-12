import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Menu, MenuDivider, MenuItem } from "react-native-material-menu";
import AppColors from "../../utils/AppColors";

export default function MenuItems() {
  const [visible, setVisible] = useState<boolean>(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  return (
    <View>
      <TouchableOpacity style={styles.menuItemView} onPress={showMenu}>
        <MaterialCommunityIcons name="dots-vertical" size={25} color="black" />
      </TouchableOpacity>
      <Menu
        visible={visible}
        // anchor={<Text onPress={showMenu}>Show menu</Text>}
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={hideMenu} style={styles.menuItem}>
          <Feather name="edit" size={20} color="black" /> Edit
        </MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu} style={styles.menuItem}>
          <SimpleLineIcons name="refresh" size={20} color="black" /> Refresh
        </MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu} style={styles.menuItem}>
          <AntDesign name="pause" size={20} color="black" /> Mute
        </MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu} style={styles.menuItem}>
          <AntDesign name="delete" size={20} color={AppColors.red} /> Delete
        </MenuItem>
        <MenuDivider />
      </Menu>
    </View>
  );
}
