import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";
import { formatDistanceToNow } from "date-fns";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/params";
import ScreenNames from "../../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../../api/favorites";
import { getUser } from "../../api/user";
import { addUser } from "../../redux/user";
import { addFavorite, removeFavorite } from "../../redux/favorites";

interface CardProps {
  item: any;
  favorites?: boolean;
}

type CardNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.DETAILS
>;

export default function Card({ item }: CardProps) {
  const loginUser = useSelector((state: any) => state.user.userData);
  const dispatch = useDispatch();
  const favoritesData = useSelector(
    (state: any) => state.favorites.favoriteData
  );
  const navigation = useNavigation<CardNavigationProps>();

  const isFavorite = favoritesData.includes(item?._id);
  const [showHeart, setShowHeart] = useState<boolean>(isFavorite);

  const updatedAt = new Date(item.createdAt);
  const timeAgo = formatDistanceToNow(updatedAt, { addSuffix: true });

  const handleFavorites = async (itemId: string) => {
    try {
      if (isFavorite || showHeart) {
        const res = await removeFromFavorite(loginUser._id, itemId);
        dispatch(removeFavorite(itemId));
        setShowHeart(false);
      } else {
        const res = await addToFavorite(loginUser._id, itemId);
        dispatch(addFavorite(itemId));
        setShowHeart(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setShowHeart(isFavorite);
  }, [isFavorite]);
  return (
    <TouchableOpacity
      style={styles.cardView}
      onPress={() =>
        navigation.navigate(ScreenNames.DETAILS, { adsId: item._id })
      }
    >
      <Image source={{ uri: item.images[0] }} style={styles.cardImage} />
      <TouchableOpacity
        style={styles.heartView}
        onPress={() => {
          loginUser && handleFavorites(item?._id), setShowHeart(!showHeart);
        }}
      >
        {showHeart ? (
          <AntDesign name="heart" size={20} color={AppColors.red} />
        ) : (
          <AntDesign name="hearto" size={20} color={AppColors.gray} />
        )}
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
