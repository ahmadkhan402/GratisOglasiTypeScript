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

type SubCategoriesProps = RouteProp<
  RootStackParamList,
  ScreenNames.SUBCATEGORIES
> & {
  params: {
    category: string;
    subCategory: string[];
  };
};
export default function SubCategories() {
  const route = useRoute<SubCategoriesProps>();
  const { category, subCategory, image } = route.params;

  console.log(category, subCategory);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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
                onPress={() =>
                  navigation.navigate(ScreenNames.ADPOST, {
                    category: category,
                    subCategory: item,
                    image: image,
                    condition: "New",
                  })
                }
              >
                <Text style={styles.subCategoryText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScreenWrapper>
  );
}
