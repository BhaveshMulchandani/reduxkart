import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    wishlistitems: []
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    
    addtowishlist:(state,action)=>{
        const item = action.payload
        const exists = state.wishlistitems.find((i)=> i.id === item.id)

        if(!exists){
            state.wishlistitems.push(item)
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtowishlist } = wishlistSlice.actions

export default wishlistSlice.reducer