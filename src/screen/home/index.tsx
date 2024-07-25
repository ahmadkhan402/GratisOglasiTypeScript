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
import { getLatestAds, getTopAds } from "../../api/ads";
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
  const [mobileAds, setMobileAds] = useState<any[]>([]);
  const [vehiclesAds, setVehiclesAds] = useState<any[]>([]);
  const [propertyForSale, setPropertyForSaleAds] = useState<any[]>([]);
  const [propertyForRent, setPropertyForRentAds] = useState<any[]>([]);
  const [bikesAds, setBikesAds] = useState<any[]>([]);
  const [animalsAds, setAnimalsAds] = useState<any[]>([]);
  const [jobsAds, setJobsAds] = useState<any[]>([]);

  const getApiRequest = async () => {
    await getCategories().then((res) => {
      setCatagoriesList(res);
    });
    await getLatestAds().then((res) => {
      setLatestAds(res);
    });
    await getTopAds("Mobiles", 1, 10).then((res) => {
      // console.log(res);
      setMobileAds(res.items);
    });

    await getTopAds("Vehicles", 1, 10).then((res) => {
      // console.log(res);
      setVehiclesAds(res.items);
    });
    await getTopAds("Bikes", 1, 10).then((res) => {
      // console.log(res);
      setBikesAds(res.items);
    });
    await getTopAds("Property for Sale", 1, 10).then((res) => {
      // console.log(res);
      setPropertyForSaleAds(res.items);
    });
    await getTopAds("Property for Rent", 1, 10).then((res) => {
      // console.log(res);
      setPropertyForRentAds(res.items);
    });
    await getTopAds("Animals", 1, 10).then((res) => {
      // console.log(res);
      setAnimalsAds(res.items);
    });
    await getTopAds("Jobs", 1, 10).then((res) => {
      // console.log("jobs", res);
      setJobsAds(res.items);
    });
    await getLatestAds();
  };
  useEffect(() => {
    getApiRequest();
  }, []);

  const handleSeeAll = (item: string) => {
    console.log("item", item);

    navigation.navigate(ScreenNames.ADS, {
      subCate: "",
      cate: item,
    });
  };
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
      scrollType="scroll"
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
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
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
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {/* Card */}
          <Card data={latestAds} horizental={true} />
        </View>

        {mobileAds.length > 0 && (
          <View>
            {/* Mobile Ads */}
            <View style={styles.latestAdsView}>
              <View style={styles.browserCatagoriesTextView}>
                <Text style={styles.catagoryTitleText}>Mobiles</Text>
                <TouchableOpacity onPress={() => handleSeeAll("Mobiles")}>
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
              {/* Card */}
              <Card data={mobileAds} horizental={true} />
            </View>
          </View>
        )}
        {/* Vehicles Ads */}
        <View style={styles.latestAdsView}>
          <View style={styles.browserCatagoriesTextView}>
            <Text style={styles.catagoryTitleText}>Vehicles</Text>
            <TouchableOpacity onPress={() => handleSeeAll("Vehicles")}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {/* Card */}
          <Card data={vehiclesAds} horizental={true} />
        </View>

        {/* Property for Sale Ads */}
        <View style={styles.latestAdsView}>
          <View style={styles.browserCatagoriesTextView}>
            <Text style={styles.catagoryTitleText}>Property for Sale</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {/* Card */}
          <Card data={propertyForSale} horizental={true} />
        </View>

        {/* property for rent Ads */}
        <View style={styles.latestAdsView}>
          <View style={styles.browserCatagoriesTextView}>
            <Text style={styles.catagoryTitleText}>Property for Rent</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {/* Card */}
          <Card data={propertyForRent} horizental={true} />
        </View>

        {/* Bikes Ads */}
        <View style={styles.latestAdsView}>
          <View style={styles.browserCatagoriesTextView}>
            <Text style={styles.catagoryTitleText}>Bikes</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {/* Card */}
          <Card data={bikesAds} horizental={true} />
        </View>

        {/* Jobs Ads */}
        <View style={styles.latestAdsView}>
          <View style={styles.browserCatagoriesTextView}>
            <Text style={styles.catagoryTitleText}>Jobs</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {/* Card */}
          <Card data={jobsAds} horizental={true} />
        </View>

        {/* Animal Ads */}
        <View style={styles.latestAdsView}>
          <View style={styles.browserCatagoriesTextView}>
            <Text style={styles.catagoryTitleText}>Animals</Text>

            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {/* Card */}
          <Card data={animalsAds} horizental={true} />
        </View>
      </View>
    </ScreenWrapper>
  );
}
