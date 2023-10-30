import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, {useState, useEffect} from "react";
import { featured } from "../constants";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurant } from "../redux/slices/restaurantSlice";
import { removeFromCart, selectCartItems, selectCartTotal } from "../redux/slices/cartSlice";


export default function CartScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const [groupedItems, setGroupedItems] = useState({});
  const dispatch = useDispatch()
  const deliveryFee = 2;


  useEffect(() => {
    const items = cartItems.reduce((group, item)=> {
        if(group[item.id]){
          group[item.id].push(item)
        }else{
          group[item.id] = [item]
        }
        return group
    }, {})
    setGroupedItems(items)
  }, [cartItems]);


  return (
    <View className="bg-white flex-1">
      {/* Back Button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
        </TouchableOpacity>

        <View>
          <Text className="text-center font-bold text-lg">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      {/* Delivery Time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          className="w-20 h-20 rounded-full"
          source={require("../../assets/images/bikeGuy.png")}
        />
        <Text className="flex-1 pl-12">Deliver in 20 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        className="bg-white pt-5"
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0]
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-lg"
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                {items.length} x
              </Text>
              <Image className="w-14 h-14 rounded-full" source={dish?.image} />
              <Text className="font-bold flex-1 text-gray-700">
                {dish?.name}
              </Text>
              <Text className="font-semibold text-base">${dish?.price}</Text>

              <TouchableOpacity
              onPress={()=> dispatch(removeFromCart({id: dish.id}))}
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={"white"}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* Totals */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 rounded-t-3xl space-y-6"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-600">SubTotal</Text>
          <Text className="text-gray-600">${cartTotal}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-600">Delivery Fee</Text>
          <Text className="text-gray-600">${deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-600 font-extrabold">Order Total</Text>
          <Text className="text-gray-600 font-extrabold">${deliveryFee + cartTotal}</Text>
        </View>
        <View>
          <TouchableOpacity
          onPress={()=> navigation.navigate('OrderPreparing')}
            className="p-3 rounded-full mt mb-2"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
