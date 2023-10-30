import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar as Status,
  StyleSheet,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import * as Icon from "react-native-feather";
import { TextInput } from "react-native-gesture-handler";
import { themeColors } from "../theme";
import Categories from "../components/Categories";
import { featured, voucher } from "../constants";
import FeaturedRow from "../components/FeaturedRow";

export default function Home() {
  const [filteredCategory, setFilteredCategory] = useState(featured);
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 pt-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 border-l-gray-300 pl-2">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">San Francisco, SF</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height="20"
            width="20"
            stroke="white"
            strokeWidth={2.5}
          />
        </View>
      </View>

      {/* Main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Categories */}
        <Categories />

         {/* Vouchers */}
          <ScrollView 
          showsHorizontalScrollIndicator={false} 
          horizontal 
          className='mt-14 '>
            {voucher.map((item, index)=> (
              <View key={index} className='ml-4'>
                <Image className='w-[500px] h-[200px]' source={item.image}/>
              </View>
            ))}           
          </ScrollView>

        

        {/* Feature */}
        <View className="mt-5">
          {[filteredCategory].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurant={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? Status.currentHeight : 0,
  },
});
