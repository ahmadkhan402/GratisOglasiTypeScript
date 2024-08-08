import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { getFavorite } from "../../api/favorites";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card";
import AppColors from "../../utils/AppColors";
import { ScreenWrapper } from "react-native-screen-wrapper";
import { getFavorites } from "../../api/ads";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { addFavorite } from "../../redux/favorites";
import { useFocusEffect } from "@react-navigation/native";

interface ItemType {
  updatedAt: string;
}
export default function MyFavorites() {
  const flatListRef = useRef<any>(null);
  const dispatch = useDispatch();
  const loginUser = useSelector((state: any) => state.user.userData);
  const favoriteData = useSelector(
    (state: any) => state.favorites.favoriteData
  );

  // console.log("====================================");
  // console.log("favoriteData", favoriteData);
  // console.log("====================================");
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [favtItems, setFavtItems] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalAds, setTotalAds] = useState<number>(0);
  const [loadIndex, setLoadIndex] = useState<number>(1);
  const [showButton, setShowButton] = useState<boolean>(false);

  const getApiRequest = async () => {
    const response = await getFavorites(loginUser._id, loadIndex);
    console.log("This is response", response);
    getFavorite(loginUser._id).then((response) => {
      setFavtItems({ items: response.items && response?.items.reverse() });
      // dispatch(addFavorite(res));
      setLoadIndex(1);
      setTotalAds(response.totalAds);
    });
    // const sortedItems = response.items.sort(
    //   (a: ItemType, b: ItemType) =>
    //     new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    // );

    // // Set the sorted items
    // setFavtItems({ ...response, items: sortedItems });
    // dispatch(addFavorite(response));
  };
  const onRefresh = () => {
    setRefreshing(true);
    getFavorites(loginUser._id, 1).then((response) => {
      setFavtItems({ ...response, items: response.items.reverse() });
      // dispatch(addFavorite(res));
      setLoadIndex(1);
      setRefreshing(false);
    });
  };

  const handleLoadMore = async () => {
    if (isLoading || favtItems?.items.length >= totalAds) return;

    try {
      setIsLoading(true);

      const allFavItems = await getFavorites(loginUser._id, loadIndex + 1);

      if (!allFavItems || allFavItems.items.length === 0) {
        setIsLoading(false);
        return;
      }

      setTotalAds(allFavItems.totalAds);

      if (favtItems.items.length < allFavItems.totalAds) {
        setLoadIndex((prevIndex) => prevIndex + 1);

        setFavtItems((prevAds: any) => ({
          items: [...prevAds?.items, ...allFavItems.items.reverse()], // Append new items
        }));

        // dispatch(addFavorite(allFavItems));
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

  useFocusEffect(
    useCallback(() => {
      getApiRequest();
    }, [favoriteData])
  );
  useEffect(() => {
    getApiRequest();
  }, [favoriteData]);
  return (
    <ScreenWrapper
      barStyle="dark-content"
      statusBarColor={AppColors.primary}
      // scrollType="scroll"
    >
      {/* <ScrollView> */}
      <FlatList
        ref={flatListRef}
        // scrollEnabled={false}
        data={favtItems?.items}
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
      {/* </ScrollView> */}
    </ScreenWrapper>
  );
}
