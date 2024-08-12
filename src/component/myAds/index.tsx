import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { styles } from "./styles";
import AppColors from "../../utils/AppColors";
import { getMyAds } from "../../api/ads";
import { useSelector } from "react-redux";
import Card from "../card";
import { ScreenWrapper } from "react-native-screen-wrapper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MyAds() {
  const flatListRef = useRef<any>(null);
  const User = useSelector((state: any) => state.user.userData);
  const [pressedButton, setPressedButton] = useState<string>("All");
  const [myAdsList, setMyAdsList] = useState<any>([]);
  const [publishAds, setPublishAds] = useState<any>([]);
  const [muteAds, setMuteAds] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalAds, setTotalAds] = useState<number>(0);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [loadIndex, setLoadIndex] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const handlePress = (value: string) => {
    setPressedButton(value);
  };

  const getApiRequest = async () => {
    try {
      let myItemsAds: any[] = [];
      const query: any = {
        addedBy: User._id,
      };

      if (pressedButton === "Mute") {
        query.hidden = true;
      } else if (pressedButton === "Publish") {
        query.hidden = false;
      }

      const res = await getMyAds(query, 1);
      myItemsAds = res;

      setTotalAds(res && res?.totalAds);
      setMyAdsList(myItemsAds);
    } catch (error) {
      console.error("Error fetching ads:", error);
    }
  };

  const handleLoadMore = async () => {
    console.log("load more", myAdsList?.items.length, totalAds);

    if (isLoading || myAdsList?.items.length >= totalAds) return;

    try {
      setIsLoading(true);

      let allItemAds: any = [];
      const query: any = {
        addedBy: User._id,
      };

      if (pressedButton === "Mute") {
        query.hidden = true;
      } else if (pressedButton === "Publish") {
        query.hidden = false;
      }

      const res = await getMyAds(query, loadIndex + 1);
      allItemAds = res;
      console.log("====================================");
      console.log(allItemAds);
      console.log("====================================");
      if (!allItemAds || allItemAds.items.length === 0) {
        setIsLoading(false);
        return;
      }

      setTotalAds(allItemAds.totalAds);

      if (myAdsList.items.length < allItemAds.totalAds) {
        setMyAdsList((prevAds: any) => ({
          ...prevAds,
          items: [...prevAds?.items, ...allItemAds.items], // Append new items
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
  const onRefresh = async () => {
    setRefreshing(true);

    try {
      let allItemAds: any = [];
      const query: any = {
        addedBy: User._id,
      };

      if (pressedButton === "Mute") {
        query.hidden = true;
      } else if (pressedButton === "Publish") {
        query.hidden = false;
      }

      const res = await getMyAds(query, 1); // Assuming you want to refresh from the first page
      allItemAds = res;

      if (!allItemAds || allItemAds.items.length === 0) {
        setRefreshing(false);
        return;
      }

      setMyAdsList(allItemAds);
      setLoadIndex(1); // Reset load index after refresh

      setRefreshing(false);
    } catch (error) {
      console.error("Error refreshing ads:", error);
      setRefreshing(false);
    }
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
  }, [pressedButton]);
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <View style={styles.btnContainer}>
          {["All", "Publish", "Mute"].map((value, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handlePress(value)}
            >
              <Text
                style={[
                  styles.buttonText,
                  {
                    color:
                      pressedButton === value
                        ? AppColors.primary
                        : AppColors.gray,
                  },
                ]}
              >
                {value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* {pressedButton === "All" && ( */}
        <FlatList
          ref={flatListRef}
          showsVerticalScrollIndicator={false}
          data={myAdsList?.items}
          numColumns={2}
          renderItem={({ item }) => <Card item={item} myAds={true} />}
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
      </View>
    </ScreenWrapper>
  );
}
