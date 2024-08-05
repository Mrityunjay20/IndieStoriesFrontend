import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoggedIn: false,
    token: null,
    user: null,
};

export const LoginStateSlice= createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
    },
  },
});

export const { login, logout } = LoginStateSlice.actions;
export default LoginStateSlice.reducer;