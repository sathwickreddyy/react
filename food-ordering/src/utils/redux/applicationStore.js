import React from 'react';
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Step 1: Create a store
const applicationStore = configureStore({
    // Step 5: Add Slice to the store.
    reducer: {
        cart: cartReducer,
    }
});
export default applicationStore
