import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";

const applicationStore = configureStore({
    reducer: {
        app: appSliceReducer,
    },
});

export default applicationStore;
