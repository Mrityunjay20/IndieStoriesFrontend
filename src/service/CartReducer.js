import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../firebaseConfig';
import { getCart } from './cartApiService';

// Initial state of the cart

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};


// Cart reducer function
export const cartSlice= createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { product, quantity } = action.payload;
      // Find if the product already exists in the cart
      const existingProduct = state.items.find(item => item.product.id === product.id);

      if (existingProduct) {
        // Update the quantity of the existing product
        existingProduct.quantity += quantity;
      } else {
        // Add a new product to the cart
        state.items.push({ product, quantity});
      }
    },
      
    updateQuantity(state, action) {
      const { productId, delta } = action.payload;
      const product = state.items.find(item => item.product.id === productId);

      if (product) {
        // Update quantity, ensuring it does not go below 0
        product.quantity = Math.max(0, product.quantity + delta);

        // Remove product if quantity drops to 0
        if (product.quantity === 0) {
          state.items = state.items.filter(item => item.product.id !== productId);
        }
      }
    },

    removeFromCart(state, action) {
      const productId = action.payload.productId;
      state.items = state.items.filter(item => item.product.id !== productId);
    },

  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchCart.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(fetchCart.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       state.items = action.payload;
  //     })
  //     .addCase(fetchCart.rejected, (state, action) => {
  //       state.status = 'failed';
  //       state.error = action.error.message;
  //     });
  // },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
