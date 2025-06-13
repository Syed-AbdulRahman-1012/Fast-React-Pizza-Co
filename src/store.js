import userReducer from './features/user/userSlice';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
//step 2
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
