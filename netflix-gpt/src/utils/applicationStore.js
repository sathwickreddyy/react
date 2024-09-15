import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./loginSlice";

export const applicationStore = configureStore({
    reducer: {
        user: userReducer,
    },
});
