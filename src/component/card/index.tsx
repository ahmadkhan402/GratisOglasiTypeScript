import React from "react";
import {
  View,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";
import { formatDistanceToNow } from "date-fns";
interface CardProps {
  data: any;
  //     key: string;
  //   image: string;
  //   title: string;
  //   description: string;
  //   onPress: () => void;
  //   time: string;
  //   style: StyleProp<ViewStyle>;
}
export default function Card({
  data = [],
}: //     key,
//   image,
//   title,
//   description,
//   onPress,
//   time,
//   style,
CardProps) {
  const renderItems = ({ item }: any) => {
    const updatedAt = new Date(item.updatedAt);
    const timeAgo = formatDistanceToNow(updatedAt, { addSuffix: true });

    console.log("====================================");
    console.log(item.updatedAt, "eee", timeAgo);
    console.log("====================================");
    return (
      <TouchableOpacity style={styles.cardView}>
        <Image source={{ uri: item.images[0] }} style={styles.cardImage} />
        <AntDesign
          name="hearto"
          size={20}
          color={AppColors.gray}
          style={styles.heartIcon}
        />

        <Text style={styles.priceKM}>KM {item.price}</Text>
        <Text style={styles.priceEur}>
          Eur {(item.price && item.price * 0.51).toFixed(2)}
        </Text>
        <Text style={styles.title}>
          {item.title.length > 18
            ? `${item.title.substring(0, 18)}...`
            : item.title}
        </Text>
        <Text style={styles.location}>{JSON.parse(item.location).address}</Text>
        <Text style={styles.time}>{timeAgo}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.cardContainer}>
      <FlatList
        data={data}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
