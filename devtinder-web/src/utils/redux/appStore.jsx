import {configureStore} from '@reduxjs/toolkit';
import userReducer from "./slices/userSlice.jsx";

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
})

export default appStore;
