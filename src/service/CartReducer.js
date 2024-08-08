import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAuth } from 'firebase/auth'; // Ensure you have the correct import for getAuth
import { getCart } from './cartApiService';

// Initial state of the cart
const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const fetchCartProducts = createAsyncThunk(
  'cart/fetchCartProductsStatus',
  async (_, thunkAPI) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      
      if (!user) {
        throw new Error('No user is logged in');
      }

      const response = await getCart(user.uid);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Cart slice
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // Implement addToCart logic here
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
      const productId = action.payload;

      // Ensure state.items is an array before applying filter
      if (!Array.isArray(state.items)) {
        console.error('State items is not an array:', state.items);
        return;
      }

      // Log the state before filtering
      console.log('State items before removing:', state.items);
      
      // Filter out the item with the given productId
      state.items = state.items.filter(item => item.product.id !== productId);
      
      // Log the state after filtering
      console.log('State items after removing:', state.items);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartProducts.pending, (state) => {
        console.log("building");
        state.status = 'loading';
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(fetchCartProducts.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
      });
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export { fetchCartProducts };
export default cartSlice.reducer;
