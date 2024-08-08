// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totals: {
    netTotal: 0,
    taxes: 0,
    shippingCharges: 90,
    total: 0
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { productId, quantity, name, price, imageUrl } = action.payload;
      const existingProduct = state.products.find(product => product.productId === productId);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push({ productId, quantity, name, price, imageUrl });
      }
      calculateTotals(state);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingProduct = state.products.find(product => product.productId === productId);
      if (existingProduct) {
        existingProduct.quantity += quantity;
        if (existingProduct.quantity <= 0) {
          state.products = state.products.filter(product => product.productId !== productId);
        }
        calculateTotals(state);
      }
    },
    removeItem: (state, action) => {
      const { productId } = action.payload;
      const existingProduct = state.products.find(product => product.productId === productId);
      if (existingProduct) {
        existingProduct.quantity *= 0;
        if (existingProduct.quantity <= 0) {
          state.products = state.products.filter(product => product.productId !== productId);
        }
        calculateTotals(state);
      }
    },
    calculateTotals: (state) => {
      const netTotal = state.products.reduce((total, product) => 
        total + product.price * product.quantity, 
        0
      );
      const taxes = netTotal * 0.028; // 2.8% tax
      const total = netTotal + taxes + state.totals.shippingCharges;
      state.totals = {
        netTotal,
        taxes,
        shippingCharges: state.totals.shippingCharges,
        total
      };
    }
  }
});

export const { addItem, updateQuantity, removeItem, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
