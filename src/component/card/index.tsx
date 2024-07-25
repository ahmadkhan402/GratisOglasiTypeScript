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
  horizental: boolean;
  //     key: string;
  //   image: string;
  //   title: string;
  //   description: string;
  //   onPress: () => void;
  //   time: string;
  //   style: StyleProp<ViewStyle>;
}
export default function Card({ data = [], horizental }: CardProps) {
  // console.log("====================================");
  // console.log("jobs", data);
  // console.log("====================================");

  const renderItems = ({ item }: any) => {
    const updatedAt = new Date(item.updatedAt);
    const timeAgo = formatDistanceToNow(updatedAt, { addSuffix: true });

    return (
      <TouchableOpacity style={styles.cardView}>
        <Image source={{ uri: item.images[0] }} style={styles.cardImage} />
        <AntDesign
          name="hearto"
          size={20}
          color={AppColors.gray}
          style={styles.heartIcon}
        />
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
  };
  return (
    <View style={styles.cardContainer}>
      <FlatList
        data={data}
        renderItem={renderItems}
        horizontal={horizental}
        numColumns={horizental ? 1 : 2}
        key={horizental ? "h" : "v"}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
