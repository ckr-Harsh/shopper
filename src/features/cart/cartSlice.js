import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items = [...state.items, action.payload]; 
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(filtered => filtered.id !== action.payload)
    },
    addTotalItemsToCart: (state, action) => {
      state.totalItems = action.payload;
    },
  },
});

export const { addItemToCart, removeItemFromCart, addTotalItemsToCart } = cartSlice.actions;

export const selectCart = state => state.cart.items;
export const selectTotalItems = state => state.cart.totalItems;

export default cartSlice.reducer;
