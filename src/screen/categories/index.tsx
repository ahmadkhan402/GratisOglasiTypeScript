import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import styles from "./styles";
import { useTranslation } from "react-i18next";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { getCategories } from "../../api/categories";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import ScreenNames from "../../routes/routes";
import { RootStackParamList } from "../../utils/params";
import Header from "../../component/header";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type categoryRoute = RouteProp<RootStackParamList, ScreenNames.CATEGORIES>;
export default function Categories() {
  const { t } = useTranslation();
  const route = useRoute<categoryRoute>();
  const { wantTo } = route.params || {};
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [image, setImage] = useState<string>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [data, setData] = useState<string[]>([]);

  const getCategoriesData = async () => {
    let result = await getCategories();
    // console.log("This is result", result);
    setData(result);
  };
  const handlePress = (item: any) => () => {
    console.log("press Item", item);
    if (wantTo === "seeAllAds") {
      navigation.navigate(ScreenNames.SUBCATEGORIES, {
        category: item.name,
        subCategory: item.subcategories,
        image: item.image,
        wantTo: "seeAllAds",
      });
    } else {
      navigation.navigate(ScreenNames.SUBCATEGORIES, {
        category: item.name,
        subCategory: item.subcategories,
        image: item.image,
        wantTo: "adPost",
      });
    }
  };
  useEffect(() => {
    getCategoriesData();
  }, []);
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <Header back={false} title="All Categories" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.categoryContainer}>
          {data.map((item: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryItem}
              onPress={handlePress(item)}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.categoryImage}
              />
              <View style={styles.categoryNameContainer}>
                <Text style={styles.categoryName}>{item.name}</Text>
              </View>
              <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
