import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";
import { formatDistanceToNow } from "date-fns";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/params";
import ScreenNames from "../../routes/routes";

interface CardProps {
  item: any;
}

type CardNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.DETAILS
>;

export default function Card({ item }: CardProps) {
  const navigation = useNavigation<CardNavigationProps>();
  const updatedAt = new Date(item.updatedAt);
  const timeAgo = formatDistanceToNow(updatedAt, { addSuffix: true });

  return (
    <TouchableOpacity
      style={styles.cardView}
      onPress={() =>
        navigation.navigate(ScreenNames.DETAILS, { adsData: item })
      }
    >
      <Image source={{ uri: item.images[0] }} style={styles.cardImage} />
      <TouchableOpacity style={styles.heartView}>
        <AntDesign name="hearto" size={20} color={AppColors.gray} />
      </TouchableOpacity>
      {item.category !== "Jobs" ? (
        <View>
          <Text style={styles.priceKM}>
            {item.price
              ? item.price < 0
                ? "Contact For Price"
                : `KM ${item.price}`
              : "Gratis"}
          </Text>

          <Text style={styles.priceEur}>
            {item.price > 0 &&
              `Eur ${(item.price && item.price * 0.51).toFixed(2)}`}
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.priceKM}>{item.category}</Text>
          <Text style={styles.priceKM} numberOfLines={1}>
            {item.sub_category}
          </Text>
        </View>
      )}
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.location} numberOfLines={2}>
        {JSON.parse(item.location).address}
      </Text>
      <Text style={styles.time}>{timeAgo}</Text>
    </TouchableOpacity>
  );
}
