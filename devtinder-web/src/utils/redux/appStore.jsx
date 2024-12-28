import {configureStore} from '@reduxjs/toolkit';
import userReducer from "./slices/userSlice.jsx";
import feedReducer from "./slices/feedSlice.jsx";
import connectionReducer from "./slices/connectionSlice.jsx";
import requestsReducer from "./slices/requestsSlice.jsx";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connections: connectionReducer,
        requests: requestsReducer
    },
})

export default appStore;
