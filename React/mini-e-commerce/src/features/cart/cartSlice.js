import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
  try {
    const storedCart = localStorage.getItem('mini-cart');
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
    return [];
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromStorage(),
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) =>
      state.filter((item) => item.id !== action.payload),
    increaseQuantity: (state, action) => {
      const item = state.find((cartItem) => cartItem.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((cartItem) => cartItem.id === action.payload);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter((cartItem) => cartItem.id !== action.payload);
      }
    },
    clearCart: () => [],
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
