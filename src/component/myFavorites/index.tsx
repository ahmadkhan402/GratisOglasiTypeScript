import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { getFavorite } from "../../api/favorites";
import { useSelector } from "react-redux";
import Card from "../card";
import AppColors from "../../utils/AppColors";
import { ScreenWrapper } from "react-native-screen-wrapper";
import { getFavorites } from "../../api/ads";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

export default function MyFavorites() {
  const flatListRef = useRef<any>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [favtItems, setFavtItems] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalAds, setTotalAds] = useState<number>(0);
  const loginUser = useSelector((state: any) => state.user.userData[0]);
  const [loadIndex, setLoadIndex] = useState<number>(1);
  const [showButton, setShowButton] = useState<boolean>(false);
  const getApiRequest = async () => {
    const response = await getFavorite(loginUser._id);
    console.log("response", response);
    setFavtItems(response.items);
  };
  const onRefresh = () => {
    setRefreshing(true);
    getFavorite(loginUser._id).then(() => setRefreshing(false));
  };

  const handleLoadMore = async () => {
    try {
      if (isLoading) return;
      if (favtItems?.length >= totalAds) return;
      // if (favtItems?.items.length >= totalAds) return;
      setIsLoading(true);

      let allFavItems: any;
      try {
        allFavItems = await getFavorites(loginUser._id, loadIndex);
      } catch (error) {
        console.log(error);
      }

      const hasMore = favtItems.items.length >= 10;
      setTotalAds(allFavItems.totalAds);
      // Update the load index for the next page
      if (hasMore) {
        setFavtItems((prevAds: any) => ({
          items: [...prevAds?.items, ...allFavItems.items], // Append new items
        }));
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
    getApiRequest();
  }, []);
  return (
    <ScreenWrapper
      barStyle="dark-content"
      statusBarColor={AppColors.primary}
      scrollType="scroll"
    >
      <FlatList
        scrollEnabled={false}
        data={favtItems}
        showsVerticalScrollIndicator={false}
        // scrollEnabled={false}
        numColumns={2}
        renderItem={({ item }) => <Card item={item} />}
        onEndReached={handleLoadMore}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={5}
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
    </ScreenWrapper>
  );
}
