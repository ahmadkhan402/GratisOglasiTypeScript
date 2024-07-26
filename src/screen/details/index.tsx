import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Image } from "react-native";
import { RootStackParamList } from "../../utils/params";
import ScreenNames from "../../routes/routes";
import styles from "./styles";
import Header from "../../component/header";
import Swiper from "react-native-swiper";
import AppColors from "../../utils/AppColors";
import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import { formatDistanceToNow } from "date-fns";

type DetailRouteProps = RouteProp<RootStackParamList, ScreenNames.DETAILS>;

export default function Details() {
  const route = useRoute<DetailRouteProps>();
  const { params } = route;

  console.log(params.adsData);

  return (
    <View style={styles.parentView}>
      <Header back={true} icon={true} />
      <View style={styles.swiperView}>
        <Swiper
          showsHorizontalScrollIndicator={false}
          activeDotColor={AppColors.primary}
          showsButtons={false}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.dotStyle}
        >
          {/* <Text style={styles.text}>Hello Swiper</Text> */}
          {params?.adsData.images.map((image: string, index: number) => (
            <View key={index} style={styles.slide1}>
              <Image key={index} source={{ uri: image }} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>

      <View style={styles.contentView}>
        <Text style={styles.priceKm}>
          {params?.adsData.price
            ? params?.adsData.price < 0
              ? "Contact For Price"
              : `KM ${params?.adsData.price}.-`
            : "Gratis"}
        </Text>
        <Text style={styles.priceEur}>
          EUR {(params?.adsData.price * 0.52).toFixed(0)}.-
        </Text>

        <Text style={styles.title}>{params?.adsData.title}</Text>
        <View style={styles.publishView}>
          <View style={styles.showInRow}>
            <Fontisto name="calendar" size={18} color={AppColors.black} />
            <Text style={styles.publishText}>Published On</Text>
          </View>
          <Text>
            {formatDistanceToNow(new Date(params.adsData.createdAt), {
              addSuffix: true,
            })}
          </Text>
        </View>
        <View style={styles.publishView}>
          <View style={styles.showInRow}>
            <SimpleLineIcons name="refresh" size={18} color={AppColors.black} />
            <Text style={styles.publishText}>Refreshed On</Text>
          </View>
          <Text>
            {formatDistanceToNow(new Date(params.adsData.updatedAt), {
              addSuffix: true,
            })}
          </Text>
        </View>

        <View style={styles.categoryDetail}>
          <View style={styles.detailView}>
            <Text style={styles.detailText}>Details</Text>
          </View>

          <View style={styles.categoryItemView}>
            <Text style={styles.categoryItem}>Category</Text>
            <Text style={styles.categoryItem}>{params?.adsData.category}</Text>
          </View>

          <View style={styles.categoryItemView}>
            <Text style={styles.categoryItem}>Sub Category</Text>
            <Text style={styles.categoryItem}>
              {params?.adsData.sub_category}
            </Text>
          </View>

          <View style={styles.categoryItemView}>
            <Text style={styles.categoryItem}>Condition</Text>
            <Text style={styles.categoryItem}>
              {params?.adsData?.condition}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
