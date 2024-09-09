import { createSlice } from "@reduxjs/toolkit";
import React from "react";

// Step 3: Create cart slice.
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        // action 1 and its associated reducer function.
        addItem: (currentState, action) => {
            // this will directly modify the state of this slice.
            currentState.items.push(action.payload);
        },
        // action 2 and its associated reducer function.
        removeItem: (currentState, action) => {
            currentState.items.pop();
        },
        // action 3 and its associated reducer function.
        clearCart: (currentState) => {
            currentState.items.length = 0;
        },
    },
});

// Step 4: Exporting actions and reducer,
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
