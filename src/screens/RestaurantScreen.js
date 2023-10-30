import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, {useEffect} from "react";
import * as Icon from "react-native-feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import { themeColors } from "../theme";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";
import { StatusBar} from 'expo-status-bar'
import {useDispatch} from 'react-redux'
import { setRestaurant } from '../redux/slices/restaurantSlice'

export default function RestaurantScreen({ route }) {
  const { item } = route?.params || {};
  const navigation = useNavigation();
  const dispatch = useDispatch()

  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant({...item}))
    }
  
  }, []);

  return (
    <View>
      <CartIcon />

      <StatusBar style='light' />
      <ScrollView>
        <View className="relative">
          <Image source={item?.image} className="w-full h-72" />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View className="rounded-t-[40px] bg-white -mt-12 pt-6">
          <View className='px-5'>
            <Text className="text-2xl font-bold">{item?.name}</Text>

            <View className='flex-row space-x-2 my-1'>
              <View className="flex-row items-center space-x-1">
                <Image
                  className="h-4 w-4"
                  source={require("../../assets/images/fullStar.png")}
                />
                <Text className="text-green-700 mr-2">{item.stars}</Text>
                <Text className="text-green-700">
                  ({item.reviews} review) -
                  <Text className="font-semibold">{item.category}</Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-500 text-xs capitalize">
                  {item.address}
                </Text>
              </View>
            </View>
              <Text className='text-gray-500 mt-2'>{item.description}</Text>
          </View>
        </View>

        <View className='pb-36 bg-white'>
          <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>

          {/* Dishes */}
          {item.dishes.map((dish, index)=> (
            <DishRow key={index} dish={dish}/>        
          ) )}
        </View>
      </ScrollView>
    </View>
  );
}
