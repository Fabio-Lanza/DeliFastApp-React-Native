import { ScrollView, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { themeColors } from "../theme";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({ title, restaurant, description }) {
  return (
    <View className='my-3'>
      <View className="flex-row justify-between items-center px-6">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs mb-5">{description}</Text>
        </View>

        <TouchableOpacity>
          <Text
            style={{ color: themeColors.text }}
            className="font-semibold text-xs"
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible"
      >
        {restaurant?.map((item, index) => {
          return (
            <RestaurantCard item={item} key={index} />
          );
        })}
      </ScrollView>
    </View>
  );
}
