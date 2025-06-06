import { configureStore } from '@reduxjs/toolkit'
import cartreducer from '../redux/cartSlice'
import wishlistreducer from '../redux/wishListSlice'


export const store = configureStore({
  reducer: {
    cart : cartreducer,
    wishlist : wishlistreducer,
  },
})