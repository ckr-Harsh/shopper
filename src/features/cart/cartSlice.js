import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items = [...state.items, action.payload]; 
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(filtered => filtered.id !== action.payload)
    },
    adjustQty: (state, action) => {
      state.items = state.items.map(item => item.id === action.payload.id
        ? { ...item, qty: +action.payload.qty }
        : item )  
    },
  },
});

export const { addItemToCart, removeItemFromCart, adjustQty } = cartSlice.actions;

export const selectCart = state => state.cart.items;

export default cartSlice.reducer;
