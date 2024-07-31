import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../utils/params";
import ScreenNames from "../../routes/routes";
import styles from "./styles";
import Header from "../../component/header";
import Swiper from "react-native-swiper";
import AppColors from "../../utils/AppColors";
import {
  AntDesign,
  Entypo,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { format, formatDistanceToNow } from "date-fns";
import { getUser } from "../../api/user";
import { ScreenWrapper } from "react-native-screen-wrapper";
import MapView, { Marker } from "react-native-maps";
import Button from "../../component/button";
import { useTranslation } from "react-i18next";
import subString from "../../utils/Methord";
import Modal from "react-native-modal";
import { height, width } from "../../utils/Dimension";
import { getItem } from "../../api/item";
import Images from "../../assets/images";

type DetailRouteProps = RouteProp<RootStackParamList, ScreenNames.DETAILS>;

export default function Details() {
  const route = useRoute<DetailRouteProps>();
  const { params } = route;
  const { t } = useTranslation();
  const [readLessOrMore, setReadLessOrMore] = useState<boolean>(false);
  const [user, setUser] = useState<any>();
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [swiperKey, setSwiperKey] = useState<number>(0);
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  // console.log(params.adsData);

  const handleReadLessOrMore = () => {
    setReadLessOrMore(!readLessOrMore);
  };

  let locationData = {
    address: "",
    coordinates: {
      lat: 0,
      lng: 0,
    },
  };

  try {
    locationData = JSON.parse(params?.adsData?.location);
  } catch (error) {
    console.error("Error parsing address:", error);
  }

  const region = {
    latitude: locationData.coordinates.lat,
    longitude: locationData.coordinates.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  // Ke
  const handleImagePress = (index: number) => {
    if (imgIndex !== index) {
      setImgIndex(index);
      setSwiperKey(swiperKey + 1);
    }
    setShowImageModal(!showImageModal);
  };

  const getApiRequest = async () => {
    setLoading(true);
    const [userData, itemData] = await Promise.all([
      getUser(params?.adsData?.addedBy),
      getItem(params?.adsData?._id),
    ]);
    setUser(userData);
    setItem(itemData);
    // console.log("itemData", itemData);

    setLoading(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      await getApiRequest();
    };

    fetchData();
  }, []);

  // console.log("item", item);

  return (
    <ScreenWrapper statusBarColor={AppColors.primary}>
      {loading || item === null ? (
        <View style={styles.loadingView}>
          <Image source={Images.GRATISGIF} style={styles.loaderImg} />
        </View>
      ) : (
        <View style={styles.parentView}>
          <Header back={true} icon={true} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.swiperView}>
              <Swiper
                key={swiperKey}
                showsHorizontalScrollIndicator={false}
                automaticallyAdjustContentInsets={true}
                activeDotColor={AppColors.primary}
                showsButtons={false}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.dotStyle}
                index={imgIndex}
              >
                {/* <Text style={styles.text}>Hello Swiper</Text> */}
                {item &&
                  item?.images.map((image: string, index: number) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleImagePress(index)}
                      style={styles.slide1}
                    >
                      <Image
                        key={index}
                        source={{ uri: image }}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  ))}
              </Swiper>
            </View>

            <View style={styles.contentView}>
              <Text style={styles.priceKm}>
                {item?.price
                  ? item?.price < 0
                    ? t("attributes.contact")
                    : `KM ${item?.price}.-`
                  : t("attributes.free")}
              </Text>
              <Text style={styles.priceEur}>
                {item?.price
                  ? item?.price > 0
                    ? `EUR ${(item?.price * 0.52).toFixed(0)}.-`
                    : ""
                  : t("attributes.free")}
              </Text>

              <Text numberOfLines={1} style={styles.title}>
                {item?.title}
              </Text>
              <View style={styles.publishView}>
                <View style={styles.showInRow}>
                  <Fontisto name="calendar" size={18} color={AppColors.black} />
                  <Text style={styles.publishText}>
                    {t("details.publishedOn")}
                  </Text>
                </View>
                <Text>
                  {formatDistanceToNow(new Date(params.adsData.createdAt), {
                    addSuffix: true,
                  })}
                </Text>
              </View>
              <View style={styles.publishView}>
                <View style={styles.showInRow}>
                  <SimpleLineIcons
                    name="refresh"
                    size={18}
                    color={AppColors.black}
                  />
                  <Text style={styles.publishText}>
                    {t("details.refreshedOn")}
                  </Text>
                </View>
                <Text>
                  {formatDistanceToNow(new Date(params.adsData.updatedAt), {
                    addSuffix: true,
                  })}
                </Text>
              </View>

              <View style={styles.categoryDetail}>
                <View style={styles.detailView}>
                  <Text style={styles.detailText}>{t("details.details")}</Text>
                </View>

                <View style={styles.categoryItemView}>
                  <Text style={styles.categoryItemName}>
                    {t("attributes.category")}
                  </Text>
                  <Text style={styles.categoryItem}>
                    {t(`categories.${item?.category}`)}
                  </Text>
                </View>

                <View style={styles.categoryItemView}>
                  <Text style={styles.categoryItemName}>
                    {t("attributes.subCategory")}
                  </Text>
                  <Text style={styles.categoryItem}>
                    {t(`subCategories.${item?.sub_category}`)}
                  </Text>
                </View>

                <View style={styles.categoryItemView}>
                  <Text style={styles.categoryItemName}>
                    {t("attributes.condition")}
                  </Text>
                  <Text style={styles.categoryItem}>
                    {item?.details?.Condition &&
                      t(`attributes.${item?.details?.Condition.toLowerCase()}`)}
                  </Text>
                </View>
              </View>
              <Text style={styles.titleText}> {t("details.description")}</Text>

              <View style={styles.descriptionView}>
                {readLessOrMore ? (
                  <Text>{item?.description}</Text>
                ) : (
                  <Text selectable={true}>
                    {item && subString(item?.description, 0, 148) + "..."}
                  </Text>
                )}
              </View>

              <TouchableOpacity
                style={styles.readMoreBtn}
                onPress={() => handleReadLessOrMore()}
              >
                {readLessOrMore ? (
                  <View style={styles.showInRow}>
                    <Text style={styles.readMoreText}>
                      {t("details.readLess")}
                    </Text>
                    <AntDesign
                      name="up"
                      size={10}
                      color={AppColors.black}
                      style={styles.readMoreIcon}
                    />
                  </View>
                ) : (
                  <View style={styles.showInRow}>
                    <Text style={styles.readMoreText}>
                      {t("details.readMore")}
                    </Text>
                    <AntDesign
                      name="down"
                      size={10}
                      color={AppColors.black}
                      style={styles.readMoreIcon}
                    />
                  </View>
                )}
              </TouchableOpacity>

              <View style={styles.userView}>
                <Image
                  source={{ uri: user?.profilePicture }}
                  style={styles.userImage}
                />
                <View style={styles.userNameView}>
                  <Text style={styles.userName} numberOfLines={1}>
                    {user?.firstname + " " + user?.lastname}
                  </Text>

                  <Text style={styles.userUpdateAtText}>
                    {user?.updatedAt &&
                      format(new Date(user?.updatedAt), "dd. MMM yyyy")}
                  </Text>
                </View>
                <TouchableOpacity style={styles.seeAllAdsBtn}>
                  <Text style={styles.seeAllAdsText}>
                    {" "}
                    {t("details.seeAds")}
                  </Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.titleText}>{t("details.location")}</Text>
              <Text>
                {item?.location && JSON.parse(item?.location).address}
              </Text>

              <View style={styles.mapView}>
                <MapView style={styles.map} region={region}>
                  <Marker coordinate={region} title={locationData.address} />
                </MapView>
              </View>
            </View>
          </ScrollView>
          <View style={styles.contactBtn}>
            <TouchableOpacity style={styles.footerBtn}>
              <MaterialIcons name="call" size={20} color={AppColors.black} />
              <Text style={styles.footerBtnText}>{t("details.call")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerBtn}>
              <MaterialCommunityIcons
                name="email-outline"
                size={20}
                color={AppColors.black}
              />
              <Text style={styles.footerBtnText}>{t("details.email")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerBtn}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={20}
                color={AppColors.black}
              />
              <Text style={styles.footerBtnText}>{t("details.chat")}</Text>
            </TouchableOpacity>
          </View>

          <Modal isVisible={showImageModal}>
            <View style={styles.modal}>
              <TouchableOpacity
                onPress={() => setShowImageModal(false)}
                style={styles.croseIconView}
              >
                <MaterialIcons name="close" size={30} color={AppColors.white} />
              </TouchableOpacity>

              <Swiper
                showsHorizontalScrollIndicator={false}
                showsButtons={false}
                // dotStyle={styles.dotStyle}
                // activeDotStyle={styles.dotStyle}
                showsPagination={false}
                index={imgIndex}
              >
                {/* <Text style={styles.text}>Hello Swiper</Text> */}
                {item &&
                  item?.images.map((image: string, index: number) => (
                    <View key={index} style={styles.slide1}>
                      <Image
                        key={index}
                        source={{ uri: image }}
                        style={styles.modalImage}
                      />
                    </View>
                  ))}
              </Swiper>
            </View>
          </Modal>
        </View>
      )}
    </ScreenWrapper>
  );
}