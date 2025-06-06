import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    cartitems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    addtocart:(state,action)=>{
        const item = action.payload
        const exists = state.cartitems.find((i)=> i.id === item.id)

        if(!exists){
            state.cartitems.push(item)
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtocart } = cartSlice.actions

export default cartSlice.reducer