import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { RootStackParamList } from "../../utils/params";
import ScreenNames from "../../routes/routes";
import styles from "./styles";
import { Ionicons, EvilIcons, FontAwesome } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";
import { getCategoryAds } from "../../api/ads";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Card from "../../component/card";
import { width } from "../../utils/Dimension";
import { ScreenWrapper } from "react-native-screen-wrapper";

type navigationProps = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.ADS
>;
type ChatScreenRouteProp = RouteProp<RootStackParamList, ScreenNames.ADS>;
export default function Ads() {
  const route = useRoute<ChatScreenRouteProp>();
  const navigation = useNavigation<navigationProps>();

  const [vehiclesAds, setVehiclesAds] = useState<any>([]);
  let data = route.params;
  const category = data?.cate ?? "";
  let subCategory = data.subCate ?? "";

  const getApiRequest = async () => {
    await getCategoryAds(category, subCategory, 1).then((res) => {
      setVehiclesAds(res);
    });
  };
  useEffect(() => {
    getApiRequest();
  }, []);
  return (
    <ScreenWrapper scrollType="scroll">
      <View style={styles.parentView}>
        <View style={styles.adsHeader}>
          <View style={styles.adsHeaderContentView}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backBtn}
            >
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchBtn}>
              <Text>What are you looking for?</Text>
              <EvilIcons name="search" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterIcon}>
              <FontAwesome name="sliders" size={25} color={AppColors.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.displayView}>
            <Text>Showing {vehiclesAds.totalAds} Results</Text>
          </View>
        </View>

        <FlatList
          scrollEnabled={false}
          data={vehiclesAds.items}
          numColumns={2}
          renderItem={({ item }) => <Card item={item} />}
        />
        {/* <Card
          data={vehiclesAds.items}
          horizental={false}
          // style={styles.cardView}
        /> */}
      </View>
    </ScreenWrapper>
  );
}
