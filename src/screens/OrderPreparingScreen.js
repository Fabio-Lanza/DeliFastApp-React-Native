import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function OrderPreparingScreen() {
const navigation = useNavigation()

  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate('Delivery')
    },2000)
  }, []);

  return (
    <View className='flex-1 bg-white justify-center items-center'>
      <Image 
      className='h-[370px] w-[370px]'
      source={require('../../assets/images/delivery.gif')}/>
    </View>
  )
}

