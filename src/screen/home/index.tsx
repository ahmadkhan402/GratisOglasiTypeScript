import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../routes/routes";
import { RootStackParamList } from "../../utils/params";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "./styles";
import Images from "../../assets/images";
import { EvilIcons } from "@expo/vector-icons";
import { getCategories } from "../../api/categories";
import { getLatestAds } from "../../api/ads";
import Card from "../../component/card";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.HOME
>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [catagoriesList, setCatagoriesList] = useState<any[]>([]);
  const [latestAds, setLatestAds] = useState<any[]>([]);

  const getApiRequest = async () => {
    await getCategories().then((res) => {
      setCatagoriesList(res);
    });
    await getLatestAds().then((res) => {
      console.log("====================================");
      console.log(res);
      console.log("====================================");
      setLatestAds(res);
    });
  };
  useEffect(() => {
    getApiRequest();
  }, []);

  const renderItems = ({ item }: any) => {
    return (
      <View style={styles.catagoryView}>
        <Image source={{ uri: item.image }} style={styles.catagoryImg} />
        <Text style={styles.catagoryText}>{item.name}</Text>
      </View>
    );
  };
  return (
    <ScreenWrapper
      bottomSafeAreaColor={AppColors.primary}
      statusBarColor={AppColors.primary}
    >
      <View style={styles.parentView}>
        {/* Logo Img*/}
        <Image style={styles.logoImg} source={Images.logo} />

        {/* Search btn */}
        <TouchableOpacity style={styles.searchBtn}>
          <Text>What are you looking for?</Text>
          <EvilIcons name="search" size={30} color="black" />
        </TouchableOpacity>

        {/* BrowserCatagories */}

        <View style={styles.browserCatagories}>
          <View style={styles.browserCatagoriesTextView}>
            <Text style={styles.catagoryTitleText}>Browser Catagories</Text>
            <Text style={styles.seeAllText}>See All</Text>
          </View>

          {/* Catagory List */}

          <FlatList
            data={catagoriesList}
            renderItem={renderItems}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Latest ads */}

        <View style={styles.latestAdsView}>
          <View style={styles.browserCatagoriesTextView}>
            <Text style={styles.catagoryTitleText}>Latest Ads</Text>
            <Text style={styles.seeAllText}>See All</Text>
          </View>

          {/* Card */}

          <Card
            data={latestAds}
            // style={styles.card}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
