import {configureStore} from '@reduxjs/toolkit';
import userReducer from "./slices/userSlice.jsx";
import feedReducer from "./slices/feedSlice.jsx";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer
    },
})

export default appStore;
