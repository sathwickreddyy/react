import {configureStore} from '@reduxjs/toolkit';
import userReducer from "./slices/userSlice.jsx";
import feedReducer from "./slices/feedSlice.jsx";
import connectionReducer from "./slices/connectionSlice.jsx";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connections: connectionReducer
    },
})

export default appStore;
