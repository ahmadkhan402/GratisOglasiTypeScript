import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  RefreshControl,
  Image,
  ActivityIndicator,
} from "react-native";
import { RootStackParamList } from "../../utils/params";
import ScreenNames from "../../routes/routes";
import styles from "./styles";
import {
  Ionicons,
  EvilIcons,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";
import { getAllLatestAds, getCategoryAds } from "../../api/ads";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Card from "../../component/card";
import { width } from "../../utils/Dimension";
import { ScreenWrapper } from "react-native-screen-wrapper";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { useTranslation } from "react-i18next";
import Images from "../../assets/images";

type navigationProps = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.ADS
>;
type ChatScreenRouteProp = RouteProp<RootStackParamList, ScreenNames.ADS>;
export default function Ads() {
  const route = useRoute<ChatScreenRouteProp>();
  const navigation = useNavigation<navigationProps>();
  const { t } = useTranslation();
  let data = route.params;
  const category = data?.cate ?? "";
  let subCategory = data.subCate ?? "";
  const flatListRef = useRef<any>(null);
  const [allAds, setAllAds] = useState<any>([]);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState("sortBy");
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadIndex, setLoadIndex] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalAds, setTotalAds] = useState<number>(0);
  const [showButton, setShowButton] = useState<boolean>(false);

  const showMenuDropdown = () => {
    setShowMenu(true);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };

  const handleSortOption = (option: string) => {
    setSortOption(option);
    hideMenu();
  };
  const getApiRequest = async (
    category: string,
    subCategory: string,
    pageNum: number
  ) => {
    try {
      setLoading(true);
      let allAds;

      if (category !== "latest") {
        [allAds] = await Promise.all([
          getCategoryAds(category, subCategory, pageNum),
        ]);
      } else {
        [allAds] = await Promise.all([getAllLatestAds(1)]);
      }
      setTotalAds(allAds.totalAds);

      setAllAds(allAds);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching ads:", error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getApiRequest(category, subCategory, loadIndex).then(() =>
      setRefreshing(false)
    );
  };

  const handleLoadMore = async () => {
    // console.log("handleLoadMore", allAds);

    // console.log("handleLoadMore", allAds.items.length, totalAds);

    try {
      if (isLoading) return;
      // if (allAds?.items.length >= totalAds) return;
      setIsLoading(true);

      let allAds;

      if (category !== "latest") {
        allAds = await getCategoryAds(category, subCategory, loadIndex);
      } else {
        allAds = await getAllLatestAds(loadIndex);
      }

      // Check if there are more items to load (assuming your API provides this information)
      const hasMore = allAds.items.length > 0;
      setTotalAds(allAds.totalAds);
      setAllAds((prevAds: any) => ({
        items: [...prevAds.items, ...allAds.items], // Append new items
      }));

      // Update the load index for the next page
      if (hasMore) {
        setLoadIndex((prevIndex) => prevIndex + 1);
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching ads:", error);
      setIsLoading(false);
    }
  };

  const renderFooter = () => {
    return isLoading ? (
      <ActivityIndicator size="large" color={AppColors.primary} />
    ) : null;
  };

  const scrollToTop = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY <= 0) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };
  useEffect(() => {
    getApiRequest(category, subCategory, loadIndex);
  }, []);

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      {loading ? (
        <View style={styles.loadingView}>
          <Image source={Images.GRATISGIF} style={styles.loaderImg} />
        </View>
      ) : (
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
                {/* <View style={styles.searchIcon}> */}
                <EvilIcons name="search" size={22} color="black" />
                {/* </View> */}
              </TouchableOpacity>

              <TouchableOpacity style={styles.filterIcon}>
                <FontAwesome
                  name="sliders"
                  size={25}
                  color={AppColors.primary}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.displayView}>
              <Text>
                {t("ads.showing")} {totalAds} {t("ads.result")}
              </Text>
              <View style={styles.sortView}>
                <View>
                  <TouchableOpacity
                    onPress={showMenuDropdown}
                    style={styles.sortBtn}
                  >
                    <Text style={styles.buttonText}>
                      {t(`ads.${sortOption}`)}
                    </Text>
                    <MaterialCommunityIcons
                      name="menu-down"
                      size={20}
                      color="black"
                    />
                  </TouchableOpacity>
                  <Menu visible={showMenu} onRequestClose={() => hideMenu()}>
                    <MenuItem onPress={() => handleSortOption("latest")}>
                      {t("ads.latest")}
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={() => handleSortOption("oldest")}>
                      {t("ads.oldest")}
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={() => handleSortOption("highLow")}>
                      {t("ads.highLow")}
                    </MenuItem>
                    <MenuDivider />

                    <MenuItem onPress={() => handleSortOption("lowHigh")}>
                      {t("ads.lowHigh")}
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={() => handleSortOption("aZ")}>
                      {t("ads.aZ")}
                    </MenuItem>
                    <MenuDivider />

                    <MenuItem onPress={() => handleSortOption("zA")}>
                      {t("ads.zA")}
                    </MenuItem>
                  </Menu>
                </View>

                <View style={styles.adsIconView}>
                  {/* List Icon */}
                  <TouchableOpacity
                    style={styles.adViewIcon}
                    // onPress={handleSelectList}
                  >
                    <MaterialIcons name="list" size={25} />
                  </TouchableOpacity>

                  {/* Grid Icon */}
                  <TouchableOpacity
                    style={styles.adViewIcon}
                    // onPress={handleSelectGrid}
                  >
                    <MaterialIcons
                      name="grid-view"
                      size={20}
                      color={AppColors.primary}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <FlatList
            ref={flatListRef}
            showsVerticalScrollIndicator={false}
            // scrollEnabled={false}
            data={allAds.items}
            numColumns={2}
            renderItem={({ item }) => <Card item={item} />}
            onEndReached={handleLoadMore}
            ListFooterComponent={renderFooter}
            onEndReachedThreshold={0.5}
            onScroll={handleScroll}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[AppColors.primary]}
              />
            }
          />
          {showButton && (
            <TouchableOpacity style={styles.scrollButton} onPress={scrollToTop}>
              <MaterialCommunityIcons
                name="chevron-double-up"
                size={20}
                color="#000"
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    </ScreenWrapper>
  );
}
