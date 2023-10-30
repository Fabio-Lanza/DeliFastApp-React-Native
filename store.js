import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './src/redux/slices/cartSlice'
import restaurantSlice from './src/redux/slices/restaurantSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
  },
})