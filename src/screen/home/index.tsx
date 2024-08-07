import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
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
  const [refreshing, setRefreshing] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);

  const getApiRequest = async () => {
    setLoading(true);
    try {
      const [
        categories,
        latestAds,
        mobileAds,
        vehiclesAds,
        bikesAds,
        propertyForSaleAds,
        propertyForRentAds,
        animalsAds,
        jobsAds,
      ] = await Promise.all([
        getCategories(),
        getLatestAds(),
        getTopAds("Mobiles", 1, 10),
        getTopAds("Vehicles", 1, 10),
        getTopAds("Bikes", 1, 10),
        getTopAds("Property for Sale", 1, 10),
        getTopAds("Property for Rent", 1, 10),
        getTopAds("Animals", 1, 10),
        getTopAds("Jobs", 1, 10),
      ]);

      setCatagoriesList(categories);
      setLatestAds(latestAds);
      setMobileAds(mobileAds.items);
      setVehiclesAds(vehiclesAds.items);
      setBikesAds(bikesAds.items);
      setPropertyForSaleAds(propertyForSaleAds.items);
      setPropertyForRentAds(propertyForRentAds.items);
      setAnimalsAds(animalsAds.items);
      setJobsAds(jobsAds.items);

      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
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

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getApiRequest().then(() => setRefreshing(false));
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
      // scrollType="scroll"
    >
      <View style={styles.parentView}>
        {/* Logo Img*/}
        <Image style={styles.logoImg} source={Images.logo} />

        {/* Search btn */}
        <TouchableOpacity style={styles.searchBtn}>
          <Text>What are you looking for?</Text>
          <EvilIcons name="search" size={30} color="black" />
        </TouchableOpacity>

        {loading ? (
          <View style={styles.loadingView}>
            <Image source={Images.GRATISGIF} style={styles.loaderImg} />
          </View>
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing ? true : false}
                onRefresh={onRefresh}
                colors={[AppColors.primary]}
              />
            }
          >
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
              {/* <Card data={latestAds} horizental={true} /> */}
              <FlatList
                data={latestAds}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Card item={item} />}
              />
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
                  {/* <Card data={mobileAds} horizental={true} /> */}
                  <FlatList
                    data={mobileAds}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <Card item={item} />}
                  />
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
              {/* <Card data={vehiclesAds} horizental={true} /> */}
              <FlatList
                data={vehiclesAds}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Card item={item} />}
              />
            </View>

            {/* Property for Sale Ads */}
            <View style={styles.latestAdsView}>
              <View style={styles.browserCatagoriesTextView}>
                <Text style={styles.catagoryTitleText}>Property for Sale</Text>
                <TouchableOpacity
                  onPress={() => handleSeeAll("Property for Sale")}
                >
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
              {/* Card */}
              {/* <Card data={propertyForSale} horizental={true} /> */}
              <FlatList
                data={propertyForSale}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Card item={item} />}
              />
            </View>

            {/* property for rent Ads */}
            <View style={styles.latestAdsView}>
              <View style={styles.browserCatagoriesTextView}>
                <Text style={styles.catagoryTitleText}>Property for Rent</Text>
                <TouchableOpacity
                  onPress={() => handleSeeAll("Property for Rent")}
                >
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
              {/* Card */}
              {/* <Card data={propertyForRent} horizental={true} /> */}
              <FlatList
                data={propertyForRent}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Card item={item} />}
              />
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
              {/* <Card data={bikesAds} horizental={true} /> */}
              <FlatList
                data={bikesAds}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Card item={item} />}
              />
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
              {/* <Card data={jobsAds} horizental={true} /> */}
              <FlatList
                data={jobsAds}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Card item={item} />}
              />
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
              {/* <Card data={animalsAds} horizental={true} /> */}
              <FlatList
                data={animalsAds}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Card item={item} />}
              />
            </View>
          </ScrollView>
        )}
      </View>
    </ScreenWrapper>
  );
}
