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
import { useTranslation } from "react-i18next";
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.HOME
>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { t } = useTranslation();
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

      setCatagoriesList(categories ? categories : []);
      setLatestAds(latestAds ? latestAds : []);
      setMobileAds(mobileAds.items ? mobileAds.items : []);
      setVehiclesAds(vehiclesAds?.items ? vehiclesAds.items : []);
      setBikesAds(bikesAds?.items ? bikesAds.items : []);
      setPropertyForSaleAds(
        propertyForSaleAds.items ? propertyForSaleAds.items : []
      );
      setPropertyForRentAds(
        propertyForRentAds.items ? propertyForRentAds.items : []
      );
      setAnimalsAds(animalsAds.items ? animalsAds.items : []);
      setJobsAds(jobsAds.items ? jobsAds.items : []);

      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    getApiRequest();
  }, []);

  const handleSeeAll = (item: string) => {
    navigation.navigate(
      ScreenNames.ADS,
      item === "latest" ? { latest: item } : { cate: item }
    );
  };
  const onRefresh = () => {
    setRefreshing(true);
    getApiRequest().then(() => setRefreshing(false));
  };
  const renderItems = ({ item }: any) => {
    return (
      <View style={styles.catagoryView}>
        <Image source={{ uri: item.image }} style={styles.catagoryImg} />
        <Text style={styles.catagoryText}>{t(`categories.${item?.name}`)}</Text>
      </View>
    );
  };
  return (
    <ScreenWrapper
      bottomSafeAreaColor={AppColors.primary}
      statusBarColor={AppColors.primary}
      barStyle="dark-content"
    >
      <View style={styles.parentView}>
        {/* Logo Img*/}
        <Image style={styles.logoImg} source={Images.logo} />

        {/* Search btn */}
        <TouchableOpacity style={styles.searchBtn}>
          <Text>{t("home.looking")}</Text>
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
            showsVerticalScrollIndicator={false}
          >
            {/* BrowserCatagories */}

            <View style={styles.browserCatagories}>
              <View style={styles.browserCatagoriesTextView}>
                <Text style={styles.catagoryTitleText}>
                  {t("home.browseCate")}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>{t("home.seeAll")}</Text>
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
                <Text style={styles.catagoryTitleText}>
                  {t("attributes.latest")}
                </Text>
                <TouchableOpacity onPress={() => handleSeeAll("latest")}>
                  <Text style={styles.seeAllText}>{t("home.seeAll")}</Text>
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
                    <Text style={styles.catagoryTitleText}>
                      {t("categories.Mobiles")}
                    </Text>
                    <TouchableOpacity onPress={() => handleSeeAll("Mobiles")}>
                      <Text style={styles.seeAllText}>{t("home.seeAll")}</Text>
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
            {vehiclesAds.length > 0 && (
              <View style={styles.latestAdsView}>
                <View style={styles.browserCatagoriesTextView}>
                  <Text style={styles.catagoryTitleText}>
                    {t("categories.Vehicles")}
                  </Text>
                  <TouchableOpacity onPress={() => handleSeeAll("Vehicles")}>
                    <Text style={styles.seeAllText}>{t("home.seeAll")}</Text>
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
            )}

            {/* Property for Sale Ads */}
            {propertyForSale.length > 0 && (
              <View style={styles.latestAdsView}>
                <View style={styles.browserCatagoriesTextView}>
                  <Text style={styles.catagoryTitleText}>
                    {t(`categories.${"Property for Sale"}`)}
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleSeeAll("Property for Sale")}
                  >
                    <Text style={styles.seeAllText}>{t("home.seeAll")}</Text>
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
            )}
            {/* property for rent Ads */}
            {propertyForRent.length > 0 && (
              <View style={styles.latestAdsView}>
                <View style={styles.browserCatagoriesTextView}>
                  <Text style={styles.catagoryTitleText}>
                    {t(`categories.${"Property for Rent"}`)}
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleSeeAll("Property for Rent")}
                  >
                    <Text style={styles.seeAllText}>{t("home.seeAll")}</Text>
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
            )}
            {/* Bikes Ads */}
            {bikesAds.length > 0 && (
              <View style={styles.latestAdsView}>
                <View style={styles.browserCatagoriesTextView}>
                  <Text style={styles.catagoryTitleText}>
                    {t("categories.Bikes")}
                  </Text>
                  <TouchableOpacity onPress={() => handleSeeAll("Bikes")}>
                    <Text style={styles.seeAllText}>{t("home.seeAll")}</Text>
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
            )}
            {/* Jobs Ads */}
            {jobsAds.length > 0 && (
              <View style={styles.latestAdsView}>
                <View style={styles.browserCatagoriesTextView}>
                  <Text style={styles.catagoryTitleText}>
                    {t(`categories.Jobs`)}
                  </Text>
                  <TouchableOpacity onPress={() => handleSeeAll("Jobs")}>
                    <Text style={styles.seeAllText}>{t("home.seeAll")}</Text>
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
            )}
            {/* Animal Ads */}
            {animalsAds.length > 0 && (
              <View style={styles.latestAdsView}>
                <View style={styles.browserCatagoriesTextView}>
                  <Text style={styles.catagoryTitleText}>
                    {t(`categories.Animals`)}
                  </Text>

                  <TouchableOpacity onPress={() => handleSeeAll("Animals")}>
                    <Text style={styles.seeAllText}>{t("home.seeAll")}</Text>
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
            )}
          </ScrollView>
        )}
      </View>
    </ScreenWrapper>
  );
}
