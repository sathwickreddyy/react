import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./loginSlice";
import moviesReducer from "./moviesSlice";

export const applicationStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    },
});
