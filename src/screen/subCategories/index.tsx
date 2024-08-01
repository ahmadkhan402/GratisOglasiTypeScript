import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import ScreenNames from "../../routes/routes";
import styles from "./styles";
import { RootStackParamList } from "../../utils/params";
import Header from "../../component/header";
import { AntDesign, Entypo } from "@expo/vector-icons";

type SubCategoriesProps = RouteProp<
  RootStackParamList,
  ScreenNames.SUBCATEGORIES
> & {
  params: {
    category: string;
    subCategory: string[];
    image: string;
    wantTo: string;
  };
};
export default function SubCategories() {
  const route = useRoute<SubCategoriesProps>();
  const { category, subCategory, image, wantTo } = route.params;
  console.log(wantTo);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = (item: string) => {
    console.log("press Item", item);

    if (wantTo === "seeAllAds") {
      navigation.navigate(ScreenNames.ADS, {
        cate: category,
        subCategory: item,
      });
    } else {
      navigation.navigate(ScreenNames.ADPOST, {
        category: category,
        subCategory: item,
        image: image,
        condition: "New",
      });
    }
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Header back={true} title={category} />
        <View style={styles.subCategoryContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {subCategory?.map((item: string, index: number) => (
              <TouchableOpacity
                key={index}
                style={styles.subCategoryItem}
                onPress={() => handlePress(item)}
              >
                <Text style={styles.subCategoryText}>{item}</Text>
                <Entypo name="chevron-small-right" size={30} color="black" />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScreenWrapper>
  );
}
