import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        toggleSideBar: false,
    },
    reducers: {
        toggleSideBar: (state, action) => {
            state.toggleSideBar = !state.toggleSideBar;
        },
    },
});

export const { toggleSideBar } = appSlice.actions;
export default appSlice.reducer;
